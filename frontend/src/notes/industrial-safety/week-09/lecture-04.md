# Week 9 – Lecture 4: Human Reliability Assessment

## 1. Key Concepts

### Quantitative Human Reliability Assessment (HRA)
- **HRA Definition:** A structured engineering framework that identifies human tasks, evaluates potential human failure mechanisms, and quantifies the **Human Error Probability (HEP)** for inclusion in Probabilistic Risk Assessments (PRA) and System Fault Trees.
- **Human Error Probability (HEP):**
  $$\text{HEP} = \frac{\text{Number of errors committed}}{\text{Total number of opportunities for error}}$$
  Human reliability is the complement of error probability: $R_{\text{human}} = 1 - \text{HEP}$.
- **Performance Shaping Factors (PSFs) / Error Producing Conditions (EPCs):** Environmental, operational, physiological, and organizational factors that modify human baseline performance:
  - Internal PSFs: Experience, training, emotional state, fatigue.
  - External PSFs: Time pressure, interface ergonomics, noise, lighting, procedure clarity.

---

## 2. Important Points

### 1. Evolution Across Three Generations of HRA
HSE reviews categorize HRA methodologies into three distinct historical generations:

1. **First-Generation HRA (THERP, HEART, HCR, SLIM - 1970s–1980s):**
   - **Approach:** Treats the human operator analogously to a hardware component.
   - **Mechanism:** Assigns nominal baseline failure rates from standard empirical handbooks, modifying them with simple multiplicative PSF factors.
   - **Limitations:** Focuses predominantly on binary task execution; largely ignores cognitive decision-making, context, and organizational influences.
2. **Second-Generation HRA (ATHEANA, CREAM, ADS-IDAC - 1990s):**
   - **Approach:** Deeply integrates cognitive science and behavioral psychology.
   - **Mechanism:** Emphasizes that human error is driven by situational context and error-forcing operational environments rather than random internal failure. Focuses heavily on cognitive diagnosis and decision-making.
3. **Third-Generation HRA (COSIMO, Dynamic Simulation - 2000s–Present):**
   - **Approach:** Employs dynamic simulation, artificial intelligence, and computerized micro-worlds to simulate real-time operator-plant interactions under changing plant states.

---

### 2. Technique for Human Error Rate Prediction (THERP)
Developed for nuclear and process risk assessment, THERP proceeds through four structured phases:

1. **Phase 1: Plant Familiarization:**
   Review P&IDs, operating procedures, control panels, and conduct operator walk-throughs.
2. **Phase 2: Qualitative Assessment:**
   Perform task analysis (HTA) to isolate elemental task steps and construct an **HRA Event Tree**.
3. **Phase 3: Quantitative Assessment:**
   - **Nominal HEP (NHEP):** Look up baseline error rates from handbook tables (e.g., probability of selecting the wrong control on a mimic panel $\approx 0.003$).
   - **PSF Adjustment:** Modify NHEP for stress, time constraints, and ergonomics.
   - **Dependency Assessment:** Evaluate conditional dependency between successive tasks (Zero, Low, Moderate, High, Complete Dependency using Swain's equations).
   - **Recovery Factors:** Account for independent secondary verification or alarm annunciators.
4. **Phase 4: Incorporation & Sensitivity Analysis:**
   Integrate final HEPs into the overall plant Fault Tree as basic events; conduct sensitivity tests on critical PSFs.

#### The HRA Event Tree:
Human tasks are modeled chronologically as binary branching trees:

```
                  [ Task A ]
                 /          \
      Success (1 - a)     Failure (a)
             /                  \
        [ Task B ]          [ Task B ]
        /        \          /        \
    (1 - b|a)   (b|a)   (1 - b|A)   (b|A)
```
- Capital letters denote failure; lowercase letters denote success.
- Conditional branches capture task-to-task dependency.

---

### 3. Human Error Assessment and Reduction Technique (HEART)
A pragmatic, widely adopted tool tailored for the process industries:

1. **Step 1: Select Generic Task Type (GTT):**
   Match the task to one of nine standardized generic categories (Tasks A to I):
   - **Task A:** Completely unfamiliar, performed at speed without procedures ($\text{Generic HEP} = 0.55$).
   - **Task B:** Shift or restore plant state without supervision ($\text{Generic HEP} = 0.26$).
   - **Task D:** Fairly simple, performed rapidly or with some distraction ($\text{Generic HEP} = 0.09$).
   - **Task F:** Routine, highly practiced, rapid procedural task ($\text{Generic HEP} = 0.003$).
2. **Step 2: Identify Error Producing Conditions (EPCs):**
   Identify which of 38 standard EPCs apply, noting their maximum multiplier weight ($M_i$):
   - Shortage of time available for error detection and correction: $M_i = 11$
   - Ambiguous or misleading instrument feedback: $M_i = 4$
   - High situational stress: $M_i = 4$
   - Poor system interface / ergonomic mismatch: $M_i = 8$
3. **Step 3: Assess Proportion of EPC ($AP_i$):**
   Evaluate the degree ($0.0 \le AP_i \le 1.0$) to which each EPC is active.
4. **Step 4: Calculate Assessed Effect ($AE_i$):**
   $$AE_i = (M_i - 1) \cdot AP_i + 1$$
5. **Step 5: Compute Final HEP:**
   $$\boxed{\text{HEP} = \text{Generic HEP} \times \prod_{i=1}^k AE_i}$$

---

## 3. Differences / Examples

### 1st Generation vs. 2nd Generation HRA
| Dimension | First Generation (THERP, HEART) | Second Generation (CREAM, ATHEANA) |
| :--- | :--- | :--- |
| **Human Model** | Hardware component / binary switch | Cognitive information processor |
| **Error Quantification** | Handbook nominal rates $\times$ multiplicative PSFs | Contextual control modes / error-forcing scenarios |
| **Primary Scope** | Physical execution (slips and lapses) | Cognitive diagnosis and planning (mistakes) |
| **Context Treatment** | Independent external modifiers | Core driver of cognitive performance |

---

### Worked Numerical Example: HEART Calculation for Emergency Venting
An operator must manually open an emergency reactor vent line during an off-normal temperature excursion:
1. **Generic Task Type Selection:**
   Classified as **Task B** ("Restore system to new status without supervision"):
   $$\text{Generic HEP} = 0.26$$
2. **Applicable Error Producing Conditions (EPCs):**
   - **EPC 1 (Time Shortage):** Maximum multiplier $M_1 = 11$. Assessed proportion $AP_1 = 0.40$.
     $$AE_1 = (11 - 1) \times 0.40 + 1 = 10 \times 0.40 + 1 = 5.0$$
   - **EPC 2 (High Stress / Alarm Overload):** Maximum multiplier $M_2 = 4$. Assessed proportion $AP_2 = 0.50$.
     $$AE_2 = (4 - 1) \times 0.50 + 1 = 3 \times 0.50 + 1 = 2.5$$
3. **Calculating Total Human Error Probability:**
   $$\text{HEP} = 0.26 \times AE_1 \times AE_2 = 0.26 \times 5.0 \times 2.5 = 3.25$$
   Because probability cannot exceed $1.0$, the calculated HEP caps at **$1.0$** (or $0.90$ upper bound), indicating that under such severe time pressure and stress without automated interlocks, human manual intervention is almost guaranteed to fail.

---

## 4. Must Remember

- Human Error Probability (HEP) represents the ratio of errors committed to total error opportunities: $\text{HEP} = \frac{\text{Errors}}{\text{Opportunities}}$.
- HRA has evolved across three generations:
  - 1st Gen (THERP, HEART): Hardware analogy, nominal rates with multiplicative PSFs.
  - 2nd Gen (ATHEANA, CREAM): Cognitive psychology and error-forcing context.
  - 3rd Gen (COSIMO): Dynamic simulation and virtual AI environments.
- THERP decomposes tasks into binary HRA Event Trees, evaluating nominal HEPs, PSFs, task dependencies, and recovery factors.
- In the HEART methodology, final HEP is calculated by scaling the Generic Task Type HEP by the product of assessed EPC effects:
  $$\text{HEP} = \text{Generic HEP} \times \prod_{i=1}^k \left[ (M_i - 1) \cdot AP_i + 1 \right]$$
- If combined EPC multipliers yield a calculated HEP $> 1.0$, it mathematically demonstrates that the task is unachievable by human operators alone and demands automated hardware interlocks.

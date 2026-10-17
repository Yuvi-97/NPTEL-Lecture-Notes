# Week 3 – Lecture 4: Event Tree Analysis (ETA)

## 1. Key Concepts

- **Event Tree Analysis (ETA):** An inductive (forward-looking), diagrammatic modeling technique that tracks the progression of an initial system perturbation or failure through sequential safety barriers to identify all possible accident outcome scenarios.
- **Historical Origin (WASH-1400 Report, 1975):** First formulated during the landmark *Reactor Safety Study* for the U.S. Nuclear Regulatory Commission (NRC). When studying nuclear power plants, traditional Fault Tree Analysis produced trees so massive and cumbersome that they became computationally intractable. ETA was introduced as a complementary inductive tool to manage consequence pathways efficiently.
- **Initiating Event (IE):** Any operational deviation, component failure, human error, or external disturbance that upsets normal system equilibrium and initiates an accident sequence (e.g., pipe rupture, gas leak, overpressure).
- **Pivotal Events (PV):** Intermediate protection barriers, safety systems, automated control actions, or operator emergency procedures designed to mitigate or halt the escalation of the initiating event.
- **Accident Scenarios (End States):** The terminal states resulting from a specific sequence of barrier successes and failures (e.g., safe shutdown, minor contained release, toxic plume dispersion, high-impact fire, catastrophic explosion).
- **Binary Decision Logic:** At each pivotal event barrier, system response splits into two discrete operational paths: **Success** (upper branch, event mitigated) or **Failure** (lower branch, barrier defeated).

---

## 2. Important Points

### 2.1 Anatomy and Construction of an Event Tree
An event tree develops chronologically from left to right:
1. **Initiating Event Identification:** Establish the primary hazard trigger at the far left.
2. **Identification of Safety Functions / Pivotal Events:** List physical and administrative barriers along the top horizontal axis in the chronological order of their activation:
   - Automated detection / sensing
   - Automated emergency trips / isolation valves
   - Safety relief / suppression systems (sprinklers, vents)
   - Human situational awareness and emergency procedures
   - Firefighting and external mitigation
3. **Branching Logic:** Trace the path forward. Under successful operation of a barrier, the sequence proceeds upward; under failure, it branches downward.
4. **Pruning Non-Physical Branches:** Branches that are physically impossible or functionally irrelevant are omitted (e.g., if automatic isolation succeeds, sprinkler activation may not be challenged).

```
Initiating        Barrier 1          Barrier 2           End State /
  Event          (Detection)       (Suppression)          Scenario
    │                 │                  │
    ├─── Gas Leak ────┼── Success ───────┼── Success ───► Safe Containment
    │                 │                  └── Failure ───► Small Local Fire
    │                 └── Failure ──────────────────────► High-Impact Fire
```

### 2.2 Mathematical Quantification of Event Trees

#### Case A: Independent Pivotal Events
When the operation of each safety barrier is physically and functionally independent of prior barriers, the probability of reaching any terminal end state $k$ is the product of the initiating event frequency and the probabilities of all barrier states along that branch:
$$P(\text{Scenario}_k) = P(IE) \times \prod_{i=1}^{m} P(PV_{k,i})$$
Where:
- $P(IE)$ is the initiating event frequency (events/year).
- $P(PV_{k,i}) = p_i$ if the branch requires barrier failure.
- $P(PV_{k,i}) = (1 - p_i)$ if the branch requires barrier success.

#### Case B: Dependent / Conditional Pivotal Events
In industrial installations, barrier performance often depends on preceding events (e.g., manual isolation requires successful manual detection; smoke dampers require power). The general chain rule of probability must be applied:
$$P(E_1 \cap E_2 \cap \dots \cap E_n) = P(E_1) \cdot P(E_2 \mid E_1) \cdot P(E_3 \mid E_1 \cap E_2) \dots P(E_n \mid E_1 \cap \dots \cap E_{n-1})$$

### 2.3 Risk Profile Generation
The ultimate output of Event Tree Analysis is a **Risk Profile**:
- A graphical plot displaying **Scenario Likelihood / Frequency** on the vertical axis against **Consequence Severity Category** (e.g., Safe, Minor Damage, Severe Injury, Catastrophic Loss) on the horizontal axis.
- Enables risk-based prioritization by displaying the cumulative risk distribution across all credible accident pathways.

### 2.4 Bow-Tie Integration (FTA + ETA Synergy)
Neither FTA nor ETA alone provides complete facility safety management:
- **Left Side (Fault Tree Analysis):** Models the **cause side** deductively from basic component failures up to the central Top Event (the Loss of Containment or Initiating Event). It guides **preventive controls**.
- **Right Side (Event Tree Analysis):** Models the **consequence side** inductively from the Top Event through pivotal protective barriers to the final accident outcomes. It guides **mitigative controls**.

```
  [ FAULT TREE ANALYSIS ]       [ TOP EVENT ]       [ EVENT TREE ANALYSIS ]
     (Deductive Causes)        (Central Mishap)      (Inductive Outcomes)
Basic Event 1 ─┐                      │                 ┌── Barrier 1 Succeeded
Basic Event 2 ─┼─► [OR Gate] ──────► Loss of ───────────┼── Barrier 1 Failed ──► Barrier 2
Basic Event 3 ─┘                   Containment          └── All Barriers Failed ──► Catastrophe
   (Preventive Barriers)                                 (Mitigative Barriers)
```

---

## 3. Differences / Examples

### 3.1 Comparison: Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA)

| Parameter | Fault Tree Analysis (FTA) | Event Tree Analysis (ETA) |
| :--- | :--- | :--- |
| **Reasoning Method** | **Deductive** (Backward / Top-down: *"Why did the top event happen?"*) | **Inductive** (Forward / Bottom-up: *"What happens if this event occurs?"*) |
| **Starting Point** | Undesired Top Event (Mishap) | Initiating Event (System disturbance/failure) |
| **Logic Structure** | Boolean logic gates (AND, OR, Inhibit, XOR) | Sequential binary decision branches (Success / Failure) |
| **Focus in Risk Model** | Cause side (Hardware, human, software root causes) | Consequence side (Escalation, barrier response, damage) |
| **Primary Output** | Minimal Cut-Sets (MCS) and Top Event probability | Accident Scenarios and quantitative Risk Profile |
| **Control Orientation** | **Preventive barriers** (stop the top event from occurring) | **Mitigative barriers** (minimize damage given the top event) |

---

### 3.2 Worked Example 1: Quantitative ETA of a Kitchen Gas Leak

Consider a domestic kitchen gas installation with an initiating event frequency of $f(IE) = 1.0\text{ leak/year}$. The protective configuration consists of three sequential human and procedural barriers:
1. **$PV_1$: Manual Detection ($E_1$):** Success rate $P(E_1) = 0.90$; Failure rate $P(\bar{E}_1) = 0.10$.
2. **$PV_2$: Situation Awareness ($E_2$):** Success rate $P(E_2) = 0.90$; Failure rate $P(\bar{E}_2) = 0.10$.
3. **$PV_3$: Emergency Action Taken ($E_3$):** Success rate $P(E_3) = 0.99$; Failure rate $P(\bar{E}_3) = 0.01$.

#### Event Tree Branch Calculations:
1. **Branch 1 (Safe Situation):** Manual detection succeeds, situation awareness succeeds, and action is successfully taken:
   $$P(\text{Safe}) = f(IE) \times P(E_1) \times P(E_2) \times P(E_3) = 1.0 \times 0.90 \times 0.90 \times 0.99 = 0.8019 \text{ (80.19\% of events)}$$
2. **Branch 2 (Small Release):** Detection and awareness succeed, but action fails (e.g., stuck cylinder knob):
   $$P(\text{Small Release}) = f(IE) \times P(E_1) \times P(E_2) \times P(\bar{E}_3) = 1.0 \times 0.90 \times 0.90 \times 0.01 = 0.0081 \text{ (0.81\% of events)}$$
3. **Branch 3 (Low-Impact Fire):** Manual detection succeeds, but the occupant lacks situational awareness (e.g., ignites stove or fails to ventilate):
   $$P(\text{Low-Impact Fire}) = f(IE) \times P(E_1) \times P(\bar{E}_2) = 1.0 \times 0.90 \times 0.10 = 0.0900 \text{ (9.00\% of events)}$$
4. **Branch 4 (High-Impact Fire):** Manual detection completely fails (gas accumulates uninhibited until an ignition source is encountered):
   $$P(\text{High-Impact Fire}) = f(IE) \times P(\bar{E}_1) = 1.0 \times 0.10 = 0.1000 \text{ (10.00\% of events)}$$

#### Probability Sum Check:
$$\sum P(\text{Scenarios}) = 0.8019 + 0.0081 + 0.0900 + 0.1000 = 1.0000 \text{ (100\%)}$$
- The overall fire probability is $P(\text{Fire}) = 0.09 + 0.10 = 0.19\text{/year}$ (19% of gas leak events result in fire).
- High-impact fire ($10\%$) is driven directly by early manual detection failure, proving that early warning is the single most critical safeguard.

---

### 3.3 Worked Example 2: Scaffolding / Fall from Ladder Case Study

A combined safety assessment of working at height:
- **FTA Component (Causes of Fall):**
  - Top Event: Fall from ladder.
  - Intermediate causes linked via OR gates:
    - *Human imbalance* (wrong posture, excess load carrying, climbing with jerky motion).
    - *Inadequate ladder strength* (improper ladder selection, structural fatigue, wear and tear).
    - *Instability of ladder* (AND gate: loss of friction coefficient $\cap$ reduced contact area on greasy/wet floor).
- **ETA Component (Consequences following Fall):**
  - Initiating Event: Fall from ladder.
  - Pivotal Barrier 1: Fall height (High vs. Low).
  - Pivotal Barrier 2: Contact surface characteristics (Hard concrete vs. Soft soil/matting).
  - Pivotal Barrier 3: Impacted anatomical region (Head vs. Torso vs. Limb).
  - **End State Scenarios:** Severity ranges from minor abrasions (low height, soft surface, limb impact) to fatal trauma (high elevation, hard concrete, direct head impact).

---

## 4. Must Remember

- **Origin:** WASH-1400 (1975 Reactor Safety Study) introduced ETA to solve the computational explosion and unwieldy size of nuclear reactor fault trees.
- **Orientation:** ETA is strictly **inductive** (forward-tracking: *"What happens next?"*), whereas FTA is **deductive** (backward-tracking: *"Why did it happen?"*).
- **Binary Branching Rule:** At each pivotal event node, the path splits into **Success (upper)** and **Failure (lower)** branches.
- **Quantification Method:** 
  - For independent barriers, multiply along the path.
  - For coupled barriers, apply conditional probabilities $P(B \mid A)$.
- **Risk Profile:** Plotting scenario likelihood against outcome consequence severity yields the facility's quantitative risk profile.
- **Bow-Tie Complementarity:** Fault trees govern the **preventive** cause domain leading up to the top event; Event trees govern the **mitigative** consequence domain following the top event.

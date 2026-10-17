# Week 9 – Lecture 2: Human Error, Classification and Causes (Contd.)

## 1. Key Concepts

### Cognitive Modeling of Human Performance
- **Rasmussen's Skill-Rule-Knowledge (SRK) Taxonomy:** A landmark cognitive framework that classifies human task performance and mental processing into three distinct hierarchical levels based on familiarity and conscious mental effort.
- **Operator Action Tree (OAT):** A specialized decision-event tree used in probabilistic safety assessment (PSA) to model the time-dependent cognitive progression of a human operator responding to an abnormal plant transient.
- **Mental Model:** The internal, conceptual representation an operator maintains regarding how the physical plant works, how processes interact, and what actions are required under dynamic conditions.

---

## 2. Important Points

### 1. Rasmussen's Skill-Rule-Knowledge (SRK) Framework

#### 1. Skill-Based Level (Automated Execution)
- **Cognitive Nature:** Highly practiced, routine perceptual-motor behaviors executed almost automatically without conscious analytical reasoning (e.g., shifting gears while driving, cycling a familiar manual valve).
- **Error Vulnerability:** Highly susceptible to execution failures:
  - **Slips:** Attentional capture, motor slips, unintended activations, or order reversals.
  - **Lapses:** Memory retrieval lapses, perceptual oversights, or forgetting an intermediate step in a familiar routine.

#### 2. Rule-Based Level (Procedural Execution)
- **Cognitive Nature:** Operators tackle familiar problems by recognizing plant symptoms and executing structured "IF-THEN" rules retrieved from standard operating procedures (SOPs), alarm response manuals, or checklist training.
- **Error Vulnerability:** Susceptible to **Rule-Based Mistakes**:
  - **Misapplication of a Good Rule:** Applying a valid, well-rehearsed procedure to an inappropriate operational situation (e.g., following a standard shutdown sequence during an unisolated toxic leak).
  - **Application of a Bad Rule:** Faithfully following an official operating rule that contains fundamental engineering flaws, omissions, or outdated setpoints.

#### 3. Knowledge-Based Level (First-Principles Problem Solving)
- **Cognitive Nature:** Triggered during novel, unprecedented, or complex emergencies where no pre-existing procedures or rules exist. Operators must consciously formulate hypotheses, diagnose symptoms, and invent solutions based on fundamental engineering principles and incomplete data.
- **Error Vulnerability:** Susceptible to severe **Knowledge-Based Mistakes**:
  - **Confirmation Bias:** Selectively focusing only on instrument readings that confirm an initial hypothesis while dismissing contradictory alarms.
  - **Cognitive Tunneling:** Becoming hyper-focused on a minor symptom (e.g., a sticky valve) while missing catastrophic threats developing elsewhere (e.g., reactor runaway).
  - **Overconfidence & Bounded Rationality:** Overestimating the accuracy of mental models under extreme stress.

---

### 2. Transition Across Cognitive Performance Levels
```
  [ Novel / Emergency Context ]  ──> Knowledge-Based Level (Conscious Reasoning)
              │
    Training & Practice
              │
              ▼
  [ Familiar / Structured Task ] ──> Rule-Based Level (IF-THEN Rules / SOPs)
              │
   Repetition & Habituation
              │
              ▼
  [ Routine / Automatic Task ]   ──> Skill-Based Level (Perceptual-Motor Routines)
```
As workers gain experience through repeated training, cognitive effort decreases as tasks transition downward from knowledge-based to rule-based, and ultimately to automated skill-based execution.

---

### 3. The Operator Action Tree (OAT)
Following an abnormal industrial transient (e.g., sudden boiler feed-water loss), operator response proceeds through distinct cognitive phases:

```
[ Abnormal Event ]
        │
        ├── No Detection ───────────────────────────> [ SYSTEM FAILURE ]
        │
    ( Detection )
        │
        ├── Diagnosis Failed (Wrong SOP Chosen) ────> [ SYSTEM FAILURE ]
        │
    ( Diagnosis )
        │
        ├── Action Failed / Omitted ────────────────> [ SYSTEM FAILURE ]
        │
    ( Action / Response )
        │
        ├── No Recovery ────────────────────────────> [ SYSTEM FAILURE ]
        │
    ( Recovery Action ) ─────────────────────────────> [ SAFE RECOVERY ]
```

1. **Abnormal Event:** Plant transient occurs (e.g., sudden overpressure).
2. **Detection:** Operator perceives physical cues or panel annunciator alarms.
3. **Diagnosis:** Operator assesses deviant readings, determines root cause, and selects the corrective response.
4. **Action / Response:** Operator physically executes the planned recovery procedure.
5. **Recovery:** If an execution error is made, feedback mechanisms allow the operator to catch and correct the error before safety limits are exceeded.

---

## 3. Differences / Examples

### Synthesis: The SRK Performance Matrix
| Characteristic | Skill-Based Level | Rule-Based Level | Knowledge-Based Level |
| :--- | :--- | :--- | :--- |
| **Cognitive Control** | Automatic / Subconscious | Conscious selection of pre-set rules | Analytical / Conscious first principles |
| **Operational Context** | Routine, repetitive operations | Familiar problems with existing SOPs | Unprecedented, novel emergencies |
| **Dominant Error Type** | **Slips and Lapses** | **Rule-Based Mistakes** | **Knowledge-Based Mistakes** |
| **Primary Root Cause** | Inattention, distraction, memory decay | Bad procedures, misapplied rules | Tunnel vision, confirmation bias |
| **Error Reduction Strategy** | Ergonomic controls, interlocks | Clear SOPs, checklist verification | Advanced simulators, decision-support tools |

---

## 4. Must Remember

- Rasmussen's SRK framework categorizes human cognitive performance into:
  - **Skill-based:** Automated execution $\implies$ Vulnerable to slips and lapses.
  - **Rule-based:** "IF-THEN" procedural execution $\implies$ Vulnerable to misapplied or bad rules.
  - **Knowledge-based:** Novel emergency problem solving $\implies$ Vulnerable to cognitive biases and flawed mental models.
- As operators gain experience and training, cognitive control transitions downward from knowledge-based to rule-based, and finally to automated skill-based habits.
- The Operator Action Tree (OAT) models the chronological human response:
  $$\text{Abnormal Event} \longrightarrow \text{Detection} \longrightarrow \text{Diagnosis} \longrightarrow \text{Action} \longrightarrow \text{Recovery}$$
- Slips occur during execution due to attention failures; lapses occur due to memory failures; mistakes occur during planning due to flawed cognitive reasoning.

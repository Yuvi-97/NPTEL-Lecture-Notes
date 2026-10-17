# Week 2 – Lecture 2: Preliminary Hazard Analysis

## 1. Key Concepts
- **Preliminary Hazard Analysis (PHA):** A system-level hazard identification and qualitative risk assessment technique performed during the early design stage.
- **Relationship with PHL:** Preliminary Hazard List (PHL) serves as the direct input to PHA. PHA expands on PHL items by evaluating risk and determining corrective controls.
- **Funneling Effect:** Using PHA to screen a large number of hazards (trivial many) down to the critical ones requiring deeper analysis (vital few).
- **Risk Index:** Evaluated qualitatively as $\text{Risk} = \text{Probability } (P) \times \text{Consequence / Severity } (C)$.

## 2. Important Points
- **PHA Outputs:** Evaluated hazards, causal sources, accident scenarios, safety-critical factors, mitigation/prevention recommendations, and safety review inputs.
- **PHA Documentation (14 Components):**
  - *System-level fields (1 to 4):* System, subsystem, analyst, date.
  - *Hazard-specific fields (5 to 14):* Item/hazard number, hazard description, causes, effects, operational mode (e.g., flight, maintenance), Initial Mishap Risk Index (IMRI), recommended preventive/mitigating actions, Final Mishap Risk Index (FMRI), comments, and implementation status (open/closed).
- **Qualitative Risk Evaluation Matrix ($4 \times 5 = 20$ combinations):**
  - **Severity Categories (4-point scale):** 
    1. *Catastrophic* (e.g., fatalities)
    2. *Critical* (e.g., permanent loss of body parts/disability)
    3. *Marginal* (e.g., lost workdays without permanent disability)
    4. *Negligible* (e.g., first aid)
  - **Probability Levels (5-point scale):** 
    - A: Frequent
    - B: Probable
    - C: Occasional
    - D: Remote
    - E: Improbable
- **Hazard Control Hierarchy (Haddon’s 5-stage hierarchy):**
  1. *Elimination:* Completely remove hazard during design (Prevention through Design - PtD). Highest reliability.
  2. *Substitution:* Replace with less hazardous materials or processes during design (e.g., ordinary gas instead of toxic gas).
  3. *Engineering Controls:* Physical controls to prevent hazardous conditions (e.g., pressure relief valves, alarms, pressure gauges).
  4. *Administrative Controls:* Organization, safe work methods, and standard operating procedures (SOPs).
  5. *Personal Protective Equipment (PPE):* Lowest reliability, but required as hazard occurrence remains probabilistic.

## 3. Differences / Examples
- **Prevention vs. Mitigation:**
  - *Prevention:* Actions aimed at reducing the **probability** of occurrence ($P$).
  - *Mitigation:* Actions aimed at reducing the **consequence/severity** ($C$) once the hazard occurs.
- **Missile System Example:**
  - *Hazard:* Missile structure fails resulting in crash (Flight mode).
  - *IMRI:* $1\text{D}$ (Catastrophic severity, Remote probability).
  - *Corrective Action:* Apply $5\times$ safety factor on structural design (prevention).
  - *FMRI:* Reduced from $1\text{D}$ to $1\text{E}$ (Improbable).

## 4. Must Remember
- **Order of Execution in Control Hierarchy:** Elimination $\rightarrow$ Substitution $\rightarrow$ Engineering Controls $\rightarrow$ Administrative Controls $\rightarrow$ PPE (ordered from most reliable to least reliable).
- **PtD (Prevention through Design):** Encompasses the top three tiers: Elimination, Substitution, and Engineering controls.
- **PHA Inputs:** Design knowledge, hazard knowledge, lessons learned, and the PHL (including Top-Level Mishaps - TLMs).
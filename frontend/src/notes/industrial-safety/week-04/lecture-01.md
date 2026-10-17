# Week 4 – Lecture 1: Bow-Tie Tool

## 1. Key Concepts

- **Bow-Tie Model:** An integrated, visual risk-assessment framework that couples a **Fault Tree** on the left-hand side (deductive cause modeling) with an **Event Tree** on the right-hand side (inductive consequence modeling) through a central critical event known as the **Center Event** or **Top Event**.
- **Historical Genesis (Piper Alpha & Safety Case):** Gained widespread industrial adoption in the aftermath of the 1988 **Piper Alpha disaster** in the North Sea. It was developed to operationalize the **Safety Case** regime in the offshore oil and gas industry, demonstrating that all major accident hazards are identified, their causal paths mapped, and adequate barriers maintained.
- **Center Event (Knot of the Bow-Tie):** The transitional pivot point representing the *loss of primary containment* or *loss of operational control* (e.g., pump overrun, pipe rupture, vessel overpressure, gas release). It acts simultaneously as the Top Event of the cause fault tree and the Initiating Event of the consequence event tree.
- **Preventive Barriers (Threat Controls):** Engineering, administrative, or physical safeguards positioned on the left side to prevent basic component failures and root causes from triggering the Center Event.
- **Mitigative / Recovery Barriers (Consequence Controls):** Protection layers and emergency measures positioned on the right side to limit consequence escalation, minimize damage, and safely recover the system once the Center Event has occurred.

---

## 2. Important Points

### 2.1 Complete Architectural Structure of the Bow-Tie
The Bow-Tie diagram provides a continuous cause-consequence pathway:
1. **Threats / Basic Events (Far Left):** Hardware breakdowns, human errors, corrosion, or external shocks.
2. **Logic Gates (Left Wing):** AND/OR gates combining basic events into Minimal Cut-Sets (MCS) leading to the Center Event.
3. **Preventive Barriers:** Interposed between threats and the Center Event to interrupt failure propagation.
4. **Center Event (Central Knot):** The initial loss of physical/functional equilibrium.
5. **Mitigative Barriers:** Sequential protection layers (detection, isolation, suppression, evacuation) deployed chronologically.
6. **Consequence Scenarios / End States (Far Right):** Terminal damage levels (e.g., Minor Leak, Controlled Fire, Catastrophic Vessel Rupture).

```
   [ THREATS / CAUSES ]                [ CENTER EVENT ]              [ CONSEQUENCES ]
(Fault Tree - Deductive)                                        (Event Tree - Inductive)
Threat 1 ──► [Barrier] ─┐                       │                  ┌── Mitigative 1 ──► Safe State
Threat 2 ──► [Barrier] ─┼─► [OR Gate] ──► Loss of Control ────────┼── Mitigative 2 ──► Minor Damage
Threat 3 ──► [Barrier] ─┘                       │                  └── All Failed ────► Catastrophe
    (Preventive Barriers)                                            (Mitigative Barriers)
```

### 2.2 Mathematical Linking of Accident Sequences
Each path through the Bow-Tie from a basic event cut-set to an accident end state is a unique **Accident Sequence ($AS_k$)**:
$$AS_k = MCS_j \cap \left( \bigcap_{i \in \text{Failed}} PV_i \right) \cap \left( \bigcap_{m \in \text{Success}} \overline{PV}_m \right)$$

Assuming statistical independence among pivotal barriers:
$$P(AS_k) = P(MCS_j) \times \prod_{i \in \text{Failed}} P(PV_i) \times \prod_{m \in \text{Success}} [1 - P(PV_m)]$$
Where $P(MCS_j)$ is the frequency/probability of the $j$-th minimal cut-set triggering the Center Event.

### 2.3 Barrier Integrity and Degradation
Barriers themselves are vulnerable to failure. A complete Bow-Tie evaluation examines:
- **Primary Failure Modes of Barriers:** Mechanical wear, out-of-calibration sensors, valve seat fouling, operator panic.
- **Risk Control Systems (RCS):** Inspection, periodic proof testing, and preventive maintenance routines designed to preserve mechanical and operational barrier integrity.

---

## 3. Differences / Examples

### 3.1 Comparison of Bow-Tie Halves

| Feature | Left Side (Fault Tree Half) | Right Side (Event Tree Half) |
| :--- | :--- | :--- |
| **Analytical Logic** | **Deductive** (Top-down: *"Why did the center event happen?"*) | **Inductive** (Bottom-up: *"What happens after the center event occurs?"*) |
| **Primary Safety Role** | **Prevention** (Threat control) | **Mitigation & Recovery** (Consequence control) |
| **Logic Formulation** | Boolean logic gates (AND, OR, Voting) | Binary decision branching (Success / Failure) |
| **System Perspective** | Component-level hardware and human faults | System-level response, emergency response, and containment |
| **Quantitative Metric** | Minimal Cut-Sets (MCS) and Top Event frequency | Scenario likelihood and cumulative facility Risk Profile |

---

### 3.2 Worked Example 1: Pressure Tank System Pump Overrun Bow-Tie

A chemical pressure vessel uses an automated pump to inject gas.
- **Center Event:** Pump Overrun ($PO$) leading to vessel overpressurization.
- **Left-Side Fault Tree (Causes of Pump Overrun):**
  - Motor receives electrical current too long because the circuit is closed too long.
  - Primary contactor contacts fail closed ($B_2$).
  - Pressure switch fails closed ($B_4$).
  - Primary timer fails to time out ($B_3$).
  - Minimal cut-sets triggering $PO$: $\{B_2, B_4\}$, $\{B_2, B_3\}$, etc.
- **Right-Side Event Tree (Consequences of Pump Overrun):**
  - *Pivotal Barrier 1 ($PV_1$):* Operator manual emergency shutdown ($OS$).
    - Success: $P(OS) = 0.99$; Failure: $P(\overline{OS}) = 0.01$.
  - *Pivotal Barrier 2 ($PV_2$):* Pressure relief valve lifts safely ($PP$).
    - Success: $P(PP) = 0.99$; Failure: $P(\overline{PP}) = 0.01$.
- **Terminal Consequence Scenarios:**
  1. *Scenario 1 (No Rupture - Operator Action):* Operator notices overpressure and trips pump.
     $$P(S_1) = P(PO) \times P(OS) = P(PO) \times 0.99$$
  2. *Scenario 2 (No Rupture - Relief Valve Action):* Operator fails, but mechanical relief valve vents gas safely.
     $$P(S_2) = P(PO) \times P(\overline{OS}) \times P(PP) = P(PO) \times 0.01 \times 0.99 = 0.0099 \cdot P(PO)$$
  3. *Scenario 3 (Catastrophic Vessel Rupture):* Both operator trip and mechanical relief valve fail.
     $$P(S_3) = P(PO) \times P(\overline{OS}) \times P(\overline{PP}) = P(PO) \times 0.01 \times 0.01 = 10^{-4} \cdot P(PO)$$

```
                           ┌── [OS: Success (0.99)] ────────────────────────► Scenario 1: Safe Shutdown
                           │
[ Pump Overrun: P(PO) ] ───┤
  (Left-side Cut Sets)     │                        ┌── [PP: Success (0.99)] ─► Scenario 2: Vented Safely
                           └── [OS: Failure (0.01)] ─┤
                                                    └── [PP: Failure (0.01)] ─► Scenario 3: Tank Rupture
```

---

### 3.3 Worked Example 2: Dual-Layer Fire Protection System Bow-Tie

- **Center Event:** Fire outbreak in processing bay.
- **Pivotal Barrier 1 (Onsite Protection):** Automatic injection nozzles fed by dual standby pumps ($P_1, P_2$).
  - If Onsite succeeds $\to$ *Minor damage*.
- **Pivotal Barrier 2 (Offsite Protection):** Local municipal fire brigade dispatch.
  - If Onsite fails, Offsite called $\to$ If Offsite succeeds $\to$ *Major structural damage*.
  - If both Onsite and Offsite fail $\to$ *Catastrophic total plant destruction*.
- **Bow-Tie Synthesis:** Dedicated sub-fault trees model the internal failure modes of both Onsite injection and Offsite dispatch, showing how standby pump common-cause failures directly influence the probability of catastrophic end states.

---

## 4. Must Remember

- **Definition:** The Bow-Tie model connects a **Fault Tree (cause side)** to an **Event Tree (consequence side)** across a single critical **Center Event**.
- **Historical Context:** Gained widespread adoption following the 1988 **Piper Alpha disaster** to fulfill industrial Safety Case documentation.
- **Barrier Distinction:**
  - **Preventive Barriers:** Eliminate threats before the Center Event occurs.
  - **Mitigative Barriers:** Reduce consequence severity after the Center Event occurs.
- **Holistic Pathway:** An accident sequence is the logical intersection of a cause-side Minimal Cut-Set with the operational states of consequence-side pivotal barriers.
- **Prevention through Design (PtD):** Bow-Tie analysis exposes single-point weaknesses and ensures adequate Defense-in-Depth on both sides of the knot.

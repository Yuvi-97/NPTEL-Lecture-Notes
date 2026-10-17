# Week 4 – Lecture 5: Bow-Tie: Identification of Safety Barriers

## 1. Key Concepts

- **Safety Barriers:** Physical, engineered, administrative, or procedural safeguards deployed along Bow-Tie pathways to interrupt cut-sets and arrest the escalation of accidents.
- **Three-Tier Barrier Hierarchy (Papazoglou et al. Model):** A structured framework formulated for quantitative occupational risk modeling that decomposes high-level plant safety into actionable workplace entities:
  1. **Primary Safety Barriers (PSB):** Major macroscopic safety functions directly connected to the Center Event whose sustained functionality guarantees that the hazard remains contained.
  2. **Support Safety Barriers (SSB):** Subsystem hardware barriers, maintenance protocols, or operational safeguards whose performance determines whether a Primary Safety Barrier succeeds or fails.
  3. **Probability Influencing Entities (PIE):** Micro-level workplace conditions, ergonomics, operator physical states, inspection rigor, and procedural compliance factors that directly govern the failure probability of Support Safety Barriers.
- **Preventive vs. Mitigative Orientation:**
  - *Preventive Barriers (Left of Knot):* Break the causal chain from threats and basic events to the Center Event.
  - *Mitigative / Recovery Barriers (Right of Knot):* Interrupt the consequence sequence from the Center Event to harmful terminal end states.

---

## 2. Important Points

### 2.1 The Three-Tier Barrier Architecture
Safety is a positive attribute. Rather than merely cataloging component faults, barrier analysis establishes the specific positive safeguards required to prevent failure:

```
[ Center Event ]
       │
       ▼
[ Primary Safety Barriers (PSB) ]  ──► Macroscopic functions (e.g., Structural Integrity)
       │
       ▼
[ Support Safety Barriers (SSB) ]  ──► Subsystems & procedures (e.g., Anchoring & Base Plates)
       │
       ▼
[ Probability Influencing Entities (PIE) ] ──► Actionable shop-floor factors (e.g., Bolt Torque Check)
```

### 2.2 Systematic Six-Step Procedure for Safety Barrier Analysis
1. **System & Hazard Definition:** Define the operational boundaries using design blueprints, P&IDs, and operating manuals.
2. **Center Event Prioritization:** Identify central critical events. Apply **Pareto Analysis (80/20 Rule)** to historical plant accident records to target the vital few events causing the majority of losses.
3. **Primary Safety Barrier Identification:** Formulate the set of PSBs ($\{PSB_1, PSB_2, \dots, PSB_z\}$) directly governing the Center Event.
4. **Support Safety Barrier Mapping:** For each PSB, identify the intermediate engineering and procedural subsystems ($\{SSB_1, SSB_2, \dots, SSB_m\}$) necessary to support its operation.
5. **PIE Extraction:** For each SSB, pinpoint the observable, actionable workplace conditions and human actions ($\{PIE_1, PIE_2, \dots, PIE_q\}$) that dictate success.
6. **Quantification & Control:** Quantify PIE failure probabilities to direct maintenance resources toward the most sensitive micro-level factors.

---

## 3. Differences / Examples

### 3.1 Comparison of Barrier Hierarchy Levels

| Level | Scope / Definition | Resolution | Example (Scaffold System) | Example (EOT Crane System) |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Safety Barrier (PSB)** | Macroscopic safety domain directly linked to Center Event | High-level system function | Scaffold Structural Integrity | Functional & Operational Integrity |
| **Support Safety Barrier (SSB)** | Engineering subsystem or operational rule supporting a PSB | Subsystem level | Secure Anchoring to Structure | Proper Hoisting Mechanism |
| **Probability Influencing Entity (PIE)** | Actionable workplace condition, task, or physical attribute | Micro-level shop-floor action | Installation of wall ties by competent technician | Regular wire rope lubrication & inspection |

---

### 3.2 Case Study 1: Fall from Fixed Scaffold (Papazoglou et al. Model)

- **Center Event:** Worker falling from a fixed industrial scaffold.
- **Set of 3 Primary Safety Barriers (PSBs):**
  1. $PSB_1$: Scaffold structural integrity (preventing structural collapse).
  2. $PSB_2$: Scaffold stability (preventing overturning or shifting).
  3. $PSB_3$: User stability (preventing worker loss of balance or fall from height).
- **Set of 10 Support Safety Barriers (SSBs):**
  - *Supporting $PSB_1$:* Scaffold structure design and erection specifications ($SSB_1$).
  - *Supporting $PSB_2$:* Anchoring of scaffold to building facade ($SSB_2$), foundation base-plate integrity ($SSB_3$), and vehicle crash protection ($SSB_4$).
  - *Supporting $PSB_3$:* Standard edge protection / guardrails ($SSB_5$), slip-free floor condition ($SSB_6$), worker physical fitness ($SSB_7$), falling object overhead protection ($SSB_8$), age/health screening ($SSB_9$), and Personal Fall Arrest System / full-body harness tethering ($SSB_{10}$).
- **Set of 17 Probability Influencing Entities (PIEs):**
  - Erection by certified scaffolders, mandatory tie-in density, anti-slip plank cleaning routines, daily pre-shift inspections, and 100% tie-off compliance.

---

### 3.3 Case Study 2: Hit by Object in Electric Overhead Traveling (EOT) Crane Operation

#### Pareto Center Event Prioritization:
Analysis of industrial heavy-engineering crane accidents reveals that six accident types account for 80% of all incidents. **"Hit by Object" is the single largest Center Event, accounting for 23.3% of total crane accidents**, followed by dropped loads.

```
Crane Center Events ──► [ Pareto Analysis ] ──► "Hit by Object" (23.3% of all crane accidents)
```

#### Four Primary Safety Barriers for "Hit by Object":
1. $PSB_1$: Functional and operational integrity.
2. $PSB_2$: Operator's and rigger's operational integrity.
3. $PSB_3$: Workplace environment integrity.
4. $PSB_4$: Crane mechanical & structural integrity.

#### Thirteen Support Safety Barriers (SSBs):
- *Under $PSB_1$:* Proper hoisting mechanism, adequate hook movement clearance, fail-safe braking system, collision avoidance / path planning, proper rigging technique.
- *Under $PSB_2$:* Crane operator certification, conflict resolution protocols, operator age/health factor, mandatory personal protective equipment (PPE: hard hats, high-vis vests).
- *Under $PSB_3$:* Standardized workplace illumination and housekeeping.
- *Under $PSB_4$:* Mechanical design integrity, quality of lifting tackle, electrical earthing & power safety.

#### Thirty-Two Actionable PIEs:
- Avoidance of jerky hoisting motions.
- Prohibition of oblique pulling (side-loading the crane hoist).
- Mandatory presence of a certified rigger with standardized hand/radio signals.
- Keeping work bays strictly cleared of personnel during suspended load transit.
- Verification of hoist upper limit switches before every shift.
- Periodic non-destructive testing (NDT) of crane hooks and wire rope discard criteria.

---

## 4. Must Remember

- **Three-Tier Architecture:** **PSB** (Primary safety functions) $\to$ **SSB** (Subsystem barriers) $\to$ **PIE** (Actionable shop-floor factors).
- **Actionability of PIEs:** Engineers cannot directly "fix" a macroscopic Center Event; they must control the micro-level **Probability Influencing Entities (PIEs)**.
- **Pareto Principle:** In complex industrial plants (e.g., EOT cranes), 80% of incidents originate from ~20% of Center Events; in crane operations, **"Hit by Object" represents 23.3%** of all mishaps.
- **Oblique Pulling Danger:** Side-pulling on crane hoists is a severe PIE causing wire rope de-spooling, structural swinging, and catastrophic load detachment.
- **Scaffold Triad:** Complete prevention of scaffold falls requires all three PSBs: **Structural Integrity** (load capacity), **Scaffold Stability** (tying/anchoring), and **User Stability** (guardrails and harness tie-off).

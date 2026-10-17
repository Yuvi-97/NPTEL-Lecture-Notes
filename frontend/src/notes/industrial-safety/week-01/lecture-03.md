# Week 1 – Lecture 3: Key concepts and terminologies-Safety domain ontology

## 1. Key Concepts
- **Safety Domain Ontology:** A formal, structured conceptualization of safety knowledge defining entities (Hazardous Elements, Initiating Mechanisms, Controls, Threats, Targets) and their interrelationships to enable algorithmic hazard mapping, rule-based reasoning, and risk prediction.
- **The Entropy Risk Model:** A thermodynamic-inspired model of organizational safety degradation:
  $$\text{Total System Risk}(t) = \text{Residual Risk} + \text{Entropy Risk}(t)$$
  - *Residual Risk:* The baseline risk inherently engineered into the facility during design and construction; cannot be eliminated without altering core manufacturing processes.
  - *Entropy Risk:* The continuous, progressive accumulation of operational risk caused by the natural decay, wear, corrosion, procedural drift, employee turnover, complacency, and maintenance deferral of plant systems over time.
  - *Threshold Risk & Point of No Return:* When accumulating entropy risk pushes total risk beyond the system's critical safety envelope, an accident becomes inevitable. Post-mishap, emergency interventions temporarily force risk down, but without proactive maintenance, entropy risk immediately resumes its upward drift.
- **Safety Indicators:**
  - *Leading Indicators:* Forward-looking, proactive measurements monitoring the health and integrity of safety control systems before failure occurs (e.g., Permit-to-Work [PTW] audit compliance, preventive maintenance completion rate, near-miss closure rate, training currency).
  - *Lagging Indicators:* Retrospective outcome metrics measuring realized harm after systemic failure (e.g., Lost Time Injury Frequency Rate [LTIFR], Fatal Accident Rate [FAR], property loss valuation).

---

## 2. Important Points

### The Three-Level Causal Factor Hierarchy
Accident investigations and hazard assessments categorize causal factors into three structured echelons:
- **Level 1 — System Domain Level:**
  - The broad organizational and physical pillars: *Process, Hardware / Technology, Human, Environment, and Management*.
- **Level 2 — Subsystem & Operational Level:**
  - Intermediate functional breakdowns: mechanical component degradation, electrical insulation breakdown, ambient heat stress, supervisory communication lapses.
- **Level 3 — Specific Root Failure Modes (*Micro-Level Factors*):**
  - Specific equipment failure modes: pump fails to start, pump runs dry, valve fails open, pipe rupture.
  - Software execution bugs: sensor timing lag, algorithmic logic errors, communication bus deadlocks.
  - Human cognitive failure modes: lapse of attention, mistaken perception, proximity/exposure violations, missing personal protective equipment.

### Accident Causation Path in Safety Ontology
A complete ontological accident pathway proceeds along an ordered sequence:
$$\text{Hazardous Element (HE)} \xrightarrow{\text{Initiating Mechanisms (IM)}} \text{Accident State} \xrightarrow{\text{Threat Realization}} \text{Targets Damaged}$$
- **Preventive Controls (Barriers):** Interventions placed on the *left side* of the accident state to intercept initiating mechanisms and prevent hazard actuation (e.g., interlocks, relief valves, standard operating procedures, operator training).
- **Mitigative Controls (Barriers):** Interventions placed on the *right side* of the accident state to suppress consequence severity and shield targets after energy has been released (e.g., blast walls, sprinkler deluge, toxic scrubbers, personal protective equipment, emergency evacuation plans).

### Eight Critical Risk Control System (RCS) Domains
To control entropy risk, organizations must actively govern eight operational domains:
1. Preventive maintenance and equipment reliability.
2. Statutory inspection and testing of critical safety devices.
3. Standard operating procedures (SOPs) and safe systems of work.
4. Personnel competence, operator certification, and refresher training.
5. Safety alarms, instrumentation, and trip interlocks.
6. Management of Change (MOC) formal review protocols.
7. Permit-to-Work (PTW) systems for high-risk non-routine tasks.
8. On-site and off-site emergency preparedness arrangements.

---

## 3. Differences / Examples

### Preventive Controls vs. Mitigative Controls
| Dimension | Preventive Controls (Pre-Event) | Mitigative Controls (Post-Event) |
| :--- | :--- | :--- |
| **Operational Placement** | Between Hazardous Element and Initiating Mechanism | Between Mishap Event and Vulnerable Target |
| **Primary Objective** | Eliminate the probability of event occurrence ($P = 0$) | Minimize the consequence magnitude / severity ($C$) |
| **Trigger Mechanism** | Active during normal and abnormal operations | Activated only upon loss of primary containment / control |
| **Examples** | Safety relief valve, temperature trip interlock, LOTO | Fire suppression deluge, blast bunker, evacuation siren |

### Real-World Case Study: Working-at-Height Safety Ontology (90 Steel Plant Observations)
An empirical industrial safety audit across 90 working-at-height maintenance observations demonstrated how ontology rules uncover latent paths:
- **Hazardous Element:** Technicians performing structural repairs while handling heavy loads at an elevation of $>15\text{ meters}$.
- **Seven Distinct Initiating Mechanisms Identified:**
  1. Inappropriate or missing safety harness anchoring points.
  2. Structurally corroded or load-underrated scaffolding tubes.
  3. Unsafe worker behavior (unhooking lanyards while moving).
  4. Adverse micro-climate events (sudden high-velocity wind gusts).
  5. Absence of physical edge-protection toe-boards and guardrails.
  6. Cluttered, greasy walkway surfaces creating slip hazards.
  7. Improper hoisting and rigging of heavy components.
- **Ontological Finding:** 1 single hazardous element combined with 7 distinct initiating mechanisms created 7 unique hazard-actuation paths requiring dedicated preventive controls.

---

## 4. Must Remember
- **Total system risk** is dynamic over time: $\text{Total Risk} = \text{Residual Risk} + \text{Entropy Risk}(t)$.
- **Residual risk** is the irreducible baseline risk designed into the plant; **entropy risk** is the progressive degradation of hardware, human vigilance, and organizational rigor over operating time.
- If entropy risk is unmanaged, the system crosses the **threshold point of no return**, triggering an unavoidable accident.
- **Causal factors** operate across three levels: Level 1 (System Domain), Level 2 (Subsystem/Operational), and Level 3 (Root Failure Modes, Software Bugs, and Cognitive Human Errors).
- **Preventive controls** intercept initiating mechanisms to stop the accident from occurring; **mitigative controls** minimize damage to people, property, and environment after containment is lost.
- **Leading indicators** (maintenance completion, audit findings, near-miss reporting) proactively measure control system integrity; **lagging indicators** (LTIFR, fatalities) measure past harm.
- Every complete accident pathway maps from **Hazardous Element $\rightarrow$ Chained Initiating Mechanisms $\rightarrow$ Accident $\rightarrow$ Threat $\rightarrow$ Vulnerable Target**.
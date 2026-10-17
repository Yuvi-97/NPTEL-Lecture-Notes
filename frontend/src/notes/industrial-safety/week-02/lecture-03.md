# Week 2 – Lecture 3: Hazard and operability study (HAZOP)

## 1. Key Concepts
- **Hazard and Operability Study (HAZOP):** A highly structured, systematic, multidisciplinary team-based brainstorming methodology developed by Imperial Chemical Industries (ICI) to identify both safety hazards and operational problems across continuous and batch processing plants.
- **Underlying Philosophy:** Process accidents occur when operating process parameters depart from their intended baseline engineering design envelope. By systematically postulating every credible operational deviation, the study team identifies unmitigated hazard pathways before construction.
- **The Core HAZOP Formula:**
  $$\text{Guide Word} + \text{Process Parameter} = \text{Process Deviation}$$
- **Study Node:** A specific, geographically and functionally bounded section of a Piping and Instrumentation Diagram (P&ID)—such as a feed pipeline between a storage tank and a transfer pump, or an exothermic reactor vessel—selected for focused interrogation.

---

## 2. Important Points

### Standard HAZOP Process Parameters
HAZOP analyzes two classes of process parameters across each node:
- **Primary Physical Parameters:** Flow, Temperature, Pressure, Liquid Level.
- **Secondary / Chemical Parameters:** Composition, Phase, Viscosity, Mixing, Reaction rate, Voltage, Addition rate, Relief.

### The Seven Standard Guide Words (Trevor Kletz / ICI Taxonomy)
1. **NO / NONE:** Complete negation of design intent (e.g., No Flow, No Pressure, No Agitation).
2. **MORE / HIGH:** Quantitative increase in a process variable (e.g., More Flow, Higher Temperature, Higher Pressure).
3. **LESS / LOW:** Quantitative decrease in a process variable (e.g., Less Flow, Lower Temperature, Low Liquid Level).
4. **AS WELL AS:** Qualitative addition; intended operation occurs alongside an unintended physical or chemical addition (e.g., air ingress into flammable gas line, water contamination in hot oil, unwanted secondary reaction).
5. **PART OF:** Qualitative decrease; intended mixture or multi-step procedure is missing one or more constituent components (e.g., ratio imbalance, solvent missing from catalyst slurry).
6. **REVERSE:** Logical opposite of design intent (e.g., Reverse Flow / back-siphoning from high-pressure reactor to low-pressure storage, reverse motor rotation).
7. **OTHER THAN:** Complete substitution; an activity or substance occurs that is entirely different from design intent (e.g., wrong raw material charged into reactor, utility nitrogen fed into instrument air header, maintenance drain left open).

### The Ten-Step HAZOP Execution Algorithm
The multidisciplinary team (process engineer, operations manager, instrumentation specialist, safety engineer) executes an ordered cycle (*Mnemonic: **NODE-DC-CSRA***):
1. **Select a Study Node** on the P&ID (define exact boundary conditions, design temperature, pressure, and fluid flow).
2. **Select a Process Parameter** (e.g., Flow).
3. **Apply a Guide Word** (e.g., NO).
4. **Formulate the Deviation** ($\text{NO} + \text{FLOW} = \text{No Flow}$).
5. **Brainstorm Credible Causes** (e.g., pump motor trip, suction strainer blocked, closed manual isolation valve).
6. **Identify Worst-Case Consequences** (assume no safeguards work; e.g., pump cavitation, overheating, seal burnout, loss of cooling downstream).
7. **Evaluate Existing Engineered Safeguards** (e.g., low-flow alarm switch, minimum flow bypass line, discharge check valve).
8. **Develop Action Recommendations** if existing safeguards are insufficient (e.g., install automated SIS interlock).
9. **Iterate Across All Guide Words & Parameters** for the current node.
10. **Advance to the Next Study Node** until the entire P&ID is reviewed.

---

## 3. Differences / Examples

### Synthesis Matrix of Deviations
| Process Parameter | Guide Word | Derived Deviation | Realistic Industrial Cause | Potential Consequence | Recommended Safeguard |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Flow** | **NO** | No Flow | Suction valve closed inadvertently; delivery pipe blockage | Pump overheating, vapor lock, mechanical seal destruction | Low-flow alarm with automated pump trip interlock |
| **Flow** | **MORE** | High Flow | Control valve fails $100\%$ open; downstream pipe rupture | Vessel overfilling, downstream separator flooding | High-level float switch linked to automated emergency shut-off valve (ESDV) |
| **Flow** | **REVERSE**| Reverse Flow | Downstream reactor pressure exceeds pump discharge head; check valve stuck open | Contamination of upstream feed tank; runaway reaction | Dual diverse non-return check valves and differential pressure interlock |
| **Pressure** | **MORE** | High Pressure| Vapor outlet valve blocked; exothermic runaway | Vessel overpressure, flange leakage, catastrophic shell BLEVE | Certified spring-loaded Pressure Safety Valve (PSV) venting to flare |
| **Temperature**| **MORE**| High Temperature| Loss of cooling water utility; external fire impingement | Accelerated reaction rate, product decomposition, boiling overpressure | Redundant cooling water pump with automatic startup on loss of header pressure |
| **Composition**| **AS WELL AS**| Contamination | Cooling coil pinhole leak; tube rupture | Water ingress into sulphuric acid line causing severe exotherm | Online electrical conductivity analyzer triggering isolation |

---

## 4. Must Remember
- **HAZOP** is a qualitative, inductive, P&ID-driven technique analyzing how **deviations from design intent** cause safety and operational hazards.
- The foundational equation is **$\text{Guide Word} + \text{Process Parameter} = \text{Process Deviation}$**.
- The seven standard guide words are **NO, MORE, LESS, AS WELL AS, PART OF, REVERSE, and OTHER THAN**.
- When evaluating consequences during a HAZOP study, the team must assess the **unmitigated consequence** (assuming all active protective devices fail).
- A **HAZOP team** must be multidisciplinary: process design engineers, plant operators, instrumentation technicians, and safety facilitators must participate together to ensure practical operational validity.
- HAZOP detects both **safety threats** (toxic releases, overpressure) and **operability bottlenecks** (product off-specification, line blockages).
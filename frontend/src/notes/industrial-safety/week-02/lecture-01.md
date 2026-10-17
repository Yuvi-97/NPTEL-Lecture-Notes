# Week 2 – Lecture 1: Preliminary Hazard List

## 1. Key Concepts
- **Engineering Lifecycle & Prevention through Design (PtD):** Systems progress through concept definition, design and development, production/operation (including maintenance), and disposal. Hazards are induced primarily during design and operation; identifying them early in the design stage maximizes built-in protection.
- **Preliminary Hazard List (PHL):** The initial step in hazard identification used to compile an early comprehensive list of potential hazards across system components.
- **System Breakdown Structure:** Deconstructing a system hierarchically (System $\rightarrow$ Subsystem $\rightarrow$ Sub-subsystem $\rightarrow$ Components/Parts) to identify hazards at granular levels and aggregate them to the system level.

## 2. Important Points
- **Input Requirements for PHL:**
  - *Design Knowledge:* System breakdown, component functions, cross-functional dependencies, parameters, and operational sequences.
  - *Hazard Knowledge:* Understanding hazardous elements, energy sources, initiating mechanisms, targets, and threats.
  - *Lessons Learned:* Historical operational data, incident reports, and previous design inspections.
- **PHL Implementation Steps:**
  1. *Define the System:* Establish scope, boundaries, operational concepts, and major components.
  2. *Plan for PHL:* Define goals, worksheets, schedules, and specific functions to evaluate.
  3. *Select Team:* Multi-disciplinary team (design, operations, maintenance, safety, testing).
  4. *Acquire Data:* Functional diagrams, operational sequences, and hazard checklists.
  5. *Conduct PHL:* Compare hardware, software, energy sources, and functions against hazard checklists to identify failure states.
  6. *Document & Recommend:* Fill the PHL worksheet and recommend design safety methods.
- **PHL Worksheet Structure:** Contains System Element Type, Item Number, System Item Name, Hazard, Hazard Effects, and Comments/Operational Phase.
- **Reference Checklists:** Kumamoto and Henley outline 22 hazardous energy sources (e.g., fuel, propellant, cryogenics, nuclear) alongside various hazardous processes and events (e.g., acceleration, contamination, corrosion).

## 3. Differences / Examples
### Context-Specific Hazard Identification Techniques
| Technique | Primary Domain / Context | Level of Analysis |
| :--- | :--- | :--- |
| **HAZOP** | Process industries (continuous/chemical parameters: pressure, flow, temperature) | System / Subsystem / P&ID |
| **FMEA** | Discrete machines, mechanical/electrical equipment (pumps, cranes, conveyors) | Component / Failure Mode |
| **FTA** | Deductive root-cause analysis (top-level accident down to basic causal events) | System to Component causes |
| **HTA / Human Error Analysis** | Operator/human intervention tasks | Human-machine interface |
| **Petri Net** | Software systems and software sneak circuits | Software logic/states |

## 4. Must Remember
- **50+ Hazard Identification Techniques:** Exist because applicability depends on system elements (human, machine, software, environment, process) and the required depth/level of analysis.
- **Total System Composition:** Evaluates hardware, software, human operators, and environmental interactions.
- **Full Hazard Enumeration:** Each entry in a PHL links back to the hazard components: *Hazardous Element + Initiating Mechanism + Target and Threat*.
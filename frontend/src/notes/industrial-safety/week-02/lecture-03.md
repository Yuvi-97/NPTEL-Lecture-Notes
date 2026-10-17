# Week 2 – Lecture 3: Hazard and operability study (HAZOP)

## 1. Key Concepts
- **HAZOP (Hazard and Operability Study):** A structured hazard identification technique extensively used in process and chemical industries for continuous processes characterized by design parameters.
- **Study Nodes:** Specific vulnerable locations (pipelines, vessels, pumps, or equipment) selected via Piping and Instrumentation Diagrams (P&ID) where deviations are systematically investigated.
- **Design Intention:** How the system or plant is intended to operate normally without deviations (e.g., expected operating ranges for pressure, speed, temperature).
- **Deviation:** Departure from design intention, derived systematically by coupling a **Guide Word** with a **Process Parameter** ($\text{Deviation} = \text{Guide Word} + \text{Process Parameter}$).
- **Meaningful Deviation:** A deviation validated to have credible causes through causal analysis (e.g., "why" analysis). Trivial deviations and consequences relative to study objectives are omitted.

## 2. Important Points
- **Standard Process Parameters:** Flow, pressure, temperature, time, level, concentration, phase, power, volume, composition, viscosity, agitation, reaction, component.
- **Common Guide Words & Meanings:**
  - *No / None:* Negation of design intent (e.g., no flow).
  - *More / High:* Quantitative increase (e.g., more pressure, pump run too long).
  - *Less / Low:* Quantitative decrease (e.g., less flow, pump run too short).
  - *Part Of:* Qualitative decrease (e.g., lower concentration, missing component).
  - *As Well As:* Qualitative increase (e.g., two-phase flow instead of single-phase).
  - *Reverse:* Logical opposite of the intent.
  - *Other Than:* Complete substitution (e.g., maintenance occurring during operation time; wrong material delivered).
- **HAZOP Team Requirement:** Must be conducted periodically (e.g., once a year or upon new plant design) by a multi-disciplinary team with process, design, and hazard knowledge; cannot be done single-handedly.
- **Procedure Flow:**
  1. Divide system / P&ID into sections.
  2. Select a study node.
  3. Identify design intent and process parameters.
  4. Apply guide words to generate deviations.
  5. Identify credible causes (equipment failure, human error, external disruptions).
  6. Identify consequences (e.g., toxic release, vessel rupture).
  7. Recommend actions (what, who, when) and record status (*Open* / *Closed*).
  8. Systematically repeat across guide words, parameters, nodes, and sections.

## 3. Differences / Examples
- **DAP Reactor System Example:**
  - *Reaction:* Mixing phosphoric acid ($\text{H}_3\text{PO}_4$) and ammonia ($\text{NH}_3$) produces diammonium phosphate (DAP) fertilizer.
  - *Deviation: Too little $\text{H}_3\text{PO}_4$ (No / Less Flow)* $\rightarrow$ Incomplete reaction leaves excess unreacted $\text{NH}_3$, risking toxic atmospheric release, overpressure, and worker injury/death.
  - *Action:* Automatic interlock closure of ammonia feed valve on loss of acid flow.
  - *Deviation: Too little $\text{NH}_3$ (More $\text{H}_3\text{PO}_4$ Flow)* $\rightarrow$ Produces mono-ammonium phosphate; safe for personnel, but causes downstream corrosion and degraded product quality.

## 4. Must Remember
- **HAZOP Matrix Setup:** Parameters along the top row, guide words/deviations down the left column; inappropriate combinations are omitted (e.g., "flow" is not used when analyzing a vessel).
- **Pipelines as Nodes:** Pipelines are frequently chosen as study nodes because they represent the most vulnerable points between vessels and equipment.
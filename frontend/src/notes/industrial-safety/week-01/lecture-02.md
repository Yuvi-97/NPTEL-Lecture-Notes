# Week 1 – Lecture 2: Key concepts and terminologies

## 1. Key Concepts
- **Safety:** The degree of freedom from harm or danger (100% hazard-free operations are practically impossible).
- **Risk:** An expression of the impact and possibility of a mishap; quantified as:
  $$\text{Risk} = \text{Probability of occurrence} \times \text{Consequence (Severity)}$$
- **Mishap / Accident (MIL-STD-882D):** An unplanned event or series of events resulting in death, injury, occupational illness, damage to/loss of equipment or property, or damage to the environment.
- **Hazard (MIL-STD-882D):** Any real or potential condition that can cause injury, illness, or death to personnel, or damage to/loss of equipment, property, or environment.
- **Hazard Theory:** Hazards are the dormant "before state" (potential condition) that transition via specific causal paths to the "after state" (accident/realized consequences).

## 2. Important Points
- **The Hazard Triangle (Components of a Hazard):**
  1. **Hazardous Element (HE):** The basic hazardous source/energy creating the impetus for the hazard (e.g., high voltage, explosive material, high-pressure tank).
  2. **Initiating Mechanism (IM):** The trigger event or sequence of events causing the hazard to transform from a dormant state to an active mishap state (e.g., touching exposed wiring).
  3. **Target and Threat (TT):** The vulnerable entity (people, property, environment) and the specific harm it experiences (e.g., death, severe burns, electrocution).
- **Hazard Completion:** If all three components of the hazard triangle are present and complete, an accident occurs.
- **Nature of Hazards vs. Accidents:**
  - Hazard is a **deterministic entity** (predictable and built into the system during design, operation, or maintenance).
  - Accident/Mishap is a **random event**, yet still predictable and preventable.

## 3. Differences / Examples
| Term | Nature | Realization State | Definition / Role |
| :--- | :--- | :--- | :--- |
| **Hazard** | Deterministic condition | Potential (Unrealized) | Worker *could be* electrocuted by exposed high-voltage contacts. |
| **Accident** | Random event | Realized | Worker *was* electrocuted by touching exposed high-voltage contacts. |
| **Incident** | Event (Any severity) | Realized | Includes near-misses (e.g., about to slip on the floor). |

## 4. Must Remember
- Reference text: *Hazard Analysis Techniques for System Safety* by Clifton A. Ericson II.
- Standard used for Hazard and Mishap definitions: **MIL-STD-882D**.
- Hazard and accident represent two sides of the same coin: *State transition = Hazard $\rightarrow$ Initiating Mechanism $\rightarrow$ Accident*.
- A design flaw is essentially an accident waiting to happen; safety engineering starts upstream during design.
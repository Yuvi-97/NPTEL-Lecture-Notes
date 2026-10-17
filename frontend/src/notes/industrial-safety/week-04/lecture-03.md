# Week 4 – Lecture 3: Bow-Tie: Cut-Sets for Accident Scenarios

## 1. Key Concepts
- **Accident Sequence:** A chronological progression starting from an Initiating Event (IE) through the success or failure of sequential Pivotal Events (safety barriers) to reach an accident outcome.
- **Accident Scenario Cut-Sets:** Combinations of basic hardware and human failures across both the initiating fault tree and the pivotal barrier fault trees that lead to a specific accident consequence.
- **FTA-ETA Coupling:** The formal mathematical integration where each branch point (pivotal event failure) in an event tree is modeled by a dedicated fault tree.

## 2. Important Points
- **Procedure for Deriving Scenario Cut-Sets:**
  1. Construct the event tree beginning with the initiating event.
  2. Model each pivotal barrier's failure using an individual fault tree.
  3. Formulate the Boolean expression for each accident sequence by taking the intersection (AND) of the initiating event cut-sets with the cut-sets of failed pivotal barriers and the complement of successful barriers:
     $$\text{Scenario } k = IE \cap \overline{PV}_1 \cap PV_2 \dots$$
  4. Expand the scenario equation into its constituent basic events.
  5. Apply Boolean algebra (absorption, idempotency) to reduce the equation into scenario-specific minimal cut-sets.
- **Accident Prevention:** Identifying scenario cut-sets enables targeted reinforcement of key pivotal barriers that appear in multiple high-consequence sequences.

## 3. Differences / Examples
| Element | Standalone FTA | Bow-Tie Accident Scenario |
| :--- | :--- | :--- |
| **End Result** | Occurrence of Top Event (e.g., loss of pressure) | Specific plant damage state (e.g., vapor cloud explosion) |
| **Logic Formulation** | Single fault tree Boolean equation | Intersection of initiating FTA with pivotal barrier FTAs |
| **Cut-Set Scope** | Failures causing initial hazard release | Failures causing initial release **and** barrier breakdowns |

## 4. Must Remember
- An accident scenario requires both the **loss of primary containment (Top Event)** AND the **failure of downstream mitigative barriers**.
- Reinforcing barriers shared across multiple minimal cut-sets yields the most efficient risk reduction.

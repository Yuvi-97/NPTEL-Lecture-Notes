# Week 3 – Lecture 3: Fault Tree Analysis (FTA) - Cut-Set Method

## 1. Key Concepts
- **Basic Set:** The universal set of all elementary component failure events ($B_1, B_2, \dots, B_n$) identified at the bottom of a fault tree.
- **Cut-Set:** Any combination or subset of basic events whose simultaneous occurrence guarantees the occurrence of the Top Event (TE).
- **Minimal Cut-Set (MCS):** The smallest necessary combination of basic events causing the Top Event. If any single basic event is removed from an MCS, the remaining events are insufficient to cause the Top Event.
- **MOCUS Algorithm (Method for Obtaining Cut Sets):** A systematic top-down substitution technique developed by Fussell et al. (1974) to determine all minimal cut-sets of a fault tree.

## 2. Important Points
- **Two Fundamental MOCUS Rules:**
  - **Rule 1 (AND Gate):** Increases the *size of cut-sets* by adding basic events horizontally across columns in the same row.
  - **Rule 2 (OR Gate):** Increases the *total number of cut-sets* by creating new separate rows in the matrix.
- **MOCUS Step-by-Step Procedure:**
  1. Label top event, intermediate gates ($G_1, G_2, \dots$), and basic events ($1, 2, \dots, n$).
  2. Enter the top gate into row 1, column 1 of the matrix.
  3. Expand downward: replace AND-gate inputs horizontally across the row; duplicate rows for OR-gate inputs.
  4. Continue recursive substitutions until all gate labels are replaced by basic event numbers.
  5. Apply Boolean algebra absorption ($A + AB = A$) and idempotency ($A \cdot A = A$) to eliminate redundant and non-minimal sets.
- **Top Event Representation:** The top event is mathematically represented as the union of all minimal cut-sets:
  $$TE = MCS_1 \cup MCS_2 \cup \dots \cup MCS_k$$

## 3. Differences / Examples
| Cut-Set Type | Characteristics | Vulnerability Level |
| :--- | :--- | :--- |
| **Order-1 MCS** | Single basic event failure triggers TE directly | **Highest** (Single point of failure; must be eliminated) |
| **Order-2 MCS** | Two basic events must fail simultaneously | **Medium** (Provides basic redundancy) |
| **Order-3+ MCS** | Three or more concurrent failures required | **Lowest** (High system reliability against random faults) |

## 4. Must Remember
- **Directionality:** MOCUS operates **top-down**; MICSUP operates **bottom-up**.
- **Structural Links:** Basic events within a cut-set are connected by **AND logic**; different cut-sets are connected to the top event by **OR logic**.
- Minimal cut-sets represent all independent failure paths that can disable the system.

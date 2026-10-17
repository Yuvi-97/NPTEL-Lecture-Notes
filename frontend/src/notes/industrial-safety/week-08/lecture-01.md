# Week 8 – Lecture 1: Systems Safety Quantification: Truth Table Approach

## 1. Key Concepts
- **System Safety Quantification:** The mathematical process of evaluating overall system-level availability, reliability, and failure probabilities from individual component parameters.
- **Reliability Block Diagram (RBD):** A success-oriented block representation tracing functional operational paths through a system from input to output.
- **Truth Table Approach:** A rigorous combinatoric method that evaluates system success or failure across all possible combinations of component operational states ($2^n$ configurations for $n$ components).

## 2. Important Points
- **Basic RBD System Topologies:**
  - **Series Configuration:** All $n$ components must operate for the system to function (no redundancy; weakest link governs):
    $$R_{\text{series}} = \prod_{i=1}^n R_i, \quad Q_{\text{series}} = 1 - \prod_{i=1}^n (1 - Q_i)$$
  - **Parallel Configuration:** System functions if at least one component operates (full redundancy):
    $$R_{\text{parallel}} = 1 - \prod_{i=1}^n (1 - R_i) = 1 - \prod_{i=1}^n Q_i$$
  - **$k$-out-of-$n$ Configuration:** System functions if at least $k$ out of $n$ identical components function successfully.
- **Complex / Non-Series-Parallel Networks:** Bridge networks (e.g., Wheatstone bridge configuration) cannot be decomposed by simple series-parallel reduction; they require decomposition methods, truth tables, or cut/path sets.

## 3. Differences / Examples
| System Topology | Functional Rule | Reliability Equation ($2$ components) | System Effect |
| :--- | :--- | :--- | :--- |
| **Series** | Both $A$ AND $B$ must work | $R_A \cdot R_B$ | Reliability decreases as components are added |
| **Parallel** | Either $A$ OR $B$ must work | $1 - (1 - R_A)(1 - R_B)$ | Reliability increases as redundant units are added |
| **Bridge System** | Multiple cross-linked paths | Requires conditional expansion or truth table | Eliminates single points of failure with cross-ties |

## 4. Must Remember
- Reference text: **Kumamoto & Henley** (*Probabilistic Risk Assessment and Management*).
- An $n$-component system generates exactly $2^n$ state rows in a truth table.
- A series RBD corresponds logically to an **OR gate** in a fault tree, while a parallel RBD corresponds to an **AND gate**.

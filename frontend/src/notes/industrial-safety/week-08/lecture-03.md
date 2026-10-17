# Week 8 – Lecture 3: Systems Safety Quantification: Minimal Cut and Path Representation

## 1. Key Concepts
- **Structure Function ($\phi(\mathbf{x})$):** A Boolean mathematical function mapping the component state vector $\mathbf{x} = (x_1, \dots, x_n) \in \{0, 1\}^n$ to overall system operational state $\phi(\mathbf{x}) \in \{0, 1\}$.
- **Coherent System:** A system that satisfies two conditions:
  1. *Monotonicity:* Improving any component cannot cause a working system to fail ($\mathbf{x} \le \mathbf{y} \implies \phi(\mathbf{x}) \le \phi(\mathbf{y})$).
  2. *Relevance:* Every component is relevant (can affect the system state under at least one configuration).
- **Minimal Path Set (MPS):** A minimal set of components whose operational state ($x_i = 1$) guarantees that the system functions ($\phi = 1$).
- **Minimal Cut Set (MCS):** A minimal set of components whose failed state ($x_i = 0$) guarantees that the system fails ($\phi = 0$).

## 2. Important Points
- **Structure Function via Minimal Path Sets:**
  - Let $P_1, P_2, \dots, P_p$ be the minimal path sets. The system functions if at least one path set functions:
    $$\phi(\mathbf{x}) = 1 - \prod_{j=1}^p \left(1 - \prod_{i \in P_j} x_i\right) = \coprod_{j=1}^p \left(\prod_{i \in P_j} x_i\right)$$
- **Structure Function via Minimal Cut Sets:**
  - Let $C_1, C_2, \dots, C_m$ be the minimal cut sets. The system fails if at least one cut set fails:
    $$\phi(\mathbf{x}) = \prod_{k=1}^m \left(1 - \prod_{i \in C_k} (1 - x_i)\right)$$
- **Idempotency and Simplification:**
  - In evaluating binary variables: $x_i^2 = x_i$ and $x_i \cdot x_i = x_i$. All cross-product polynomial terms simplify without higher powers.

## 3. Differences / Examples
| Representation | Success / Failure Focus | Logic Operation | Formulation Role |
| :--- | :--- | :--- | :--- |
| **Minimal Path Sets (MPS)** | Success-oriented (RBD paths) | Parallel arrangement of series chains | Yields system reliability lower bounds |
| **Minimal Cut Sets (MCS)** | Failure-oriented (Fault tree cut-sets) | Series arrangement of parallel cuts | Yields system unreliability upper bounds |

## 4. Must Remember
- Reference text: **Kumamoto & Henley** (*Probabilistic Risk Assessment and Management*).
- For independent components, taking the mathematical expectation of the structure function directly yields system reliability: $R_{\text{system}} = E[\phi(\mathbf{x})]$.
- Minimal path sets represent the minimum operational lifelines that keep a plant functioning safely.

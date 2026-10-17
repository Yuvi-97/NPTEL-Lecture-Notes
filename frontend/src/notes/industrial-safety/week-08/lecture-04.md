# Week 8 – Lecture 4: Systems Safety Quantification: Structure Function

## 1. Key Concepts
- **System Reliability Function ($h(\mathbf{p})$):** The mathematical expectation of the structure function $\phi(\mathbf{x})$ expressing system reliability as a multilinear function of individual component reliabilities $\mathbf{p} = (p_1, p_2, \dots, p_n)$:
  $$h(\mathbf{p}) = E[\phi(\mathbf{x})] = P(\phi(\mathbf{x}) = 1)$$
- **Duality Theory:** The dual of a coherent structure function $\phi^D(\mathbf{x}) = 1 - \phi(1 - \mathbf{x})$ interchanges series and parallel operations, converting cut sets in the primal structure into path sets in the dual structure.
- **Reliability Bounds:** Analytical upper and lower bounds used to approximate system reliability when exact polynomial expansion of large networks is computationally intractable.

## 2. Important Points
- **Pivotal Decomposition (Shannon's Expansion):**
  - Expands the structure function around any chosen component $i$:
    $$\phi(\mathbf{x}) = x_i \cdot \phi(1_i, \mathbf{x}) + (1 - x_i) \cdot \phi(0_i, \mathbf{x})$$
  - In terms of system reliability:
    $$h(\mathbf{p}) = p_i \cdot h(1_i, \mathbf{p}) + (1 - p_i) \cdot h(0_i, \mathbf{p})$$
- **Birnbaum Structural Importance via Structure Function:**
  $$I^B(i) = \frac{\partial h(\mathbf{p})}{\partial p_i} = h(1_i, \mathbf{p}) - h(0_i, \mathbf{p})$$
- **Esary-Proschan Reliability Bounds (for Coherent Systems):**
  - **Lower Bound (via Path Sets):**
    $$\prod_{k=1}^m \left(1 - \prod_{i \in C_k} (1 - p_i)\right) \le h(\mathbf{p})$$
  - **Upper Bound (via Cut Sets):**
    $$h(\mathbf{p}) \le 1 - \prod_{j=1}^p \left(1 - \prod_{i \in P_j} p_i\right)$$

## 3. Differences / Examples
| Bound Type | Basis | Characteristics |
| :--- | :--- | :--- |
| **Path-Set Bound** | Assumes minimal paths fail independently | Provides a conservative lower estimate of reliability |
| **Cut-Set Bound** | Assumes minimal cuts fail independently | Provides a conservative upper estimate of system unreliability |

## 4. Must Remember
- Because $h(\mathbf{p})$ is multilinear, the partial derivative $\frac{\partial h(\mathbf{p})}{\partial p_i}$ contains no higher-order powers of $p_i$.
- Shannon's pivotal decomposition is especially powerful for solving bridge networks by pivoting on the central tie component.

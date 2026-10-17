# Week 10 – Lecture 6: Transportation Problem Programming (Contd.)

## 1. Key Concepts

- **Optimality Testing in Transportation:** The analytical procedure used to determine whether a given Initial Basic Feasible Solution (IBFS) represents the absolute minimum global freight cost, or if it can be improved through re-allocation.
- **The Modified Distribution Method (MODI / $u-v$ Method):** An efficient, standardized mathematical algorithm that calculates dual variables ($u_i$ for rows, $v_j$ for columns) to evaluate the opportunity cost ($\Delta_{ij}$) of all non-basic (unallocated) cells.
- **Opportunity Cost / Net Evaluation ($\Delta_{ij}$):** The per-unit net change in total shipping cost that would result if one unit of cargo were introduced into a previously unallocated cell $(i, j)$:
  $$\Delta_{ij} = c_{ij} - (u_i + v_j)$$
- **Stepping-Stone Closed Loop:** A continuous, alternating horizontal and vertical geometric path traversing through a transportation matrix—starting and ending at an unallocated entering cell, with all intermediate turning corners located strictly on currently allocated basic cells.
- **Degeneracy in Transportation Problems:** An operational condition where the number of allocated basic cells is strictly less than $m + n - 1$, preventing the direct computation of all $u_i$ and $v_j$ potentials.

---

## 2. Important Points

### The Step-by-Step MODI Method Algorithm
The lecture establishes the complete mathematical testing procedure:

#### Step 1: Verify the Rim Condition
Confirm that the starting solution contains exactly $m + n - 1$ independent allocated cells.

#### Step 2: Compute Dual Potentials ($u_i$ and $v_j$)
For every **allocated (basic) cell $(i, j)$**, establish the linear relation:

$$u_i + v_j = c_{ij}$$

- Set $u_1 = 0$ (or set the dual variable to 0 for the row/column with the most allocations) as the reference datum, and solve iteratively for all $m$ row values ($u_i$) and $n$ column values ($v_j$).

#### Step 3: Compute Opportunity Cost ($\Delta_{ij}$) for Unallocated Cells
For every **empty (non-basic) cell $(i, j)$**, compute:

$$\Delta_{ij} = c_{ij} - (u_i + v_j)$$

#### Step 4: Evaluate the Optimality Criteria
- **Case 1 (Optimality Achieved):** If all $\Delta_{ij} \ge 0$, the current solution is **globally optimal**. Stop!
- **Case 2 (Alternative Optima):** If all $\Delta_{ij} \ge 0$ and at least one $\Delta_{ij} = 0$, alternative optimal solutions exist with the identical minimum total cost.
- **Case 3 (Sub-Optimal):** If one or more $\Delta_{ij} < 0$, the solution can be improved. Proceed to Step 5.

#### Step 5: Execute Stepping-Stone Loop Re-allocation
1. Identify the entering cell with the **most negative opportunity cost** ($\min \Delta_{ij} < 0$).
2. Trace a closed loop starting at this entering cell, moving only horizontally and vertically to basic cells, turning 90 degrees at each corner.
3. Label vertices with alternating signs: $+ , - , + , -$ (starting with $+$ at the entering cell).
4. Identify the maximum possible shift volume $\theta$:
   $$\theta = \min(\text{allocated values at cells with } - \text{ signs})$$
5. Add $\theta$ to all cells labeled $+$; subtract $\theta$ from all cells labeled $-$.
6. The entering cell becomes basic; the cell that hit zero leaves the basis.
7. Return to Step 2 and recalculate $u_i, v_j$ and $\Delta_{ij}$ until all $\Delta_{ij} \ge 0$.

### Resolving Degeneracy in Transportation Matrices
- If total allocations $< m + n - 1$:
  - Select an unallocated empty cell that possesses a low unit cost and **does not form a closed loop** with existing basic cells.
  - Assign an infinitesimal positive quantity **$\epsilon$ ($\epsilon \approx 0$)** to this cell.
  - Treat this cell as a basic cell in the MODI equations ($u_i + v_j = c_{ij}$).
  - In the final cost calculation, terms with $\epsilon$ evaluate to zero ($\epsilon \cdot c_{ij} = 0$).

---

## 3. Differences / Examples

### Synthesis: MODI Method vs. Stepping-Stone Method

| Dimension | Stepping-Stone Method | Modified Distribution Method (MODI) |
|---|---|---|
| **Analytical Mechanism** | Traces a distinct closed loop for **every single empty cell** in the matrix. | Calculates mathematical potentials ($u_i, v_j$) directly from basic cells. |
| **Computational Labor** | Extremely tedious and error-prone for matrices larger than $3 \times 3$. | **Significantly faster and computationally streamlined**. |
| **Loop Requirement** | Requires drawing loops for *all* unallocated cells. | **Requires drawing only one single loop** for the entering cell. |
| **Final Solution** | Identical global minimum. | Identical global minimum. |

### Worked Problem from the Lecture: MODI Optimality Test
- Consider the 3-Factory, 3-Market allocation derived via VAM in Lecture 49:
  - Basic cells: $(1,1)=40, \ (1,3)=10, \ (2,3)=40, \ (3,2)=50, \ (3,3)=10$.
  - Number of allocations $= 5 = m + n - 1 = 3 + 3 - 1$ (Non-degenerate).
- **Step 1: Set up $u_i + v_j = c_{ij}$ for basic cells:**
  - Let $u_1 = 0$.
  - Cell $(1,1)$: $u_1 + v_1 = c_{11} \implies 0 + v_1 = 2 \implies \mathbf{v_1 = 2}$.
  - Cell $(1,3)$: $u_1 + v_3 = c_{13} \implies 0 + v_3 = 4 \implies \mathbf{v_3 = 4}$.
  - Cell $(2,3)$: $u_2 + v_3 = c_{23} \implies u_2 + 4 = 1 \implies \mathbf{u_2 = -3}$.
  - Cell $(3,3)$: $u_3 + v_3 = c_{33} \implies u_3 + 4 = 7 \implies \mathbf{u_3 = 3}$.
  - Cell $(3,2)$: $u_3 + v_2 = c_{32} \implies 3 + v_2 = 4 \implies \mathbf{v_2 = 1}$.
- **Step 2: Calculate $\Delta_{ij} = c_{ij} - (u_i + v_j)$ for non-basic cells:**
  - Cell $(1,2)$: $\Delta_{12} = c_{12} - (u_1 + v_2) = 7 - (0 + 1) = \mathbf{+6} \ge 0$.
  - Cell $(2,1)$: $\Delta_{21} = c_{21} - (u_2 + v_1) = 3 - (-3 + 2) = 3 - (-1) = \mathbf{+4} \ge 0$.
  - Cell $(2,2)$: $\Delta_{22} = c_{22} - (u_2 + v_2) = 3 - (-3 + 1) = 3 - (-2) = \mathbf{+5} \ge 0$.
  - Cell $(3,1)$: $\Delta_{31} = c_{31} - (u_3 + v_1) = 5 - (3 + 2) = 5 - 5 = \mathbf{0} \ge 0$.
- **Conclusion:**
  - All $\Delta_{ij} \ge 0$! Therefore, the VAM solution is **OPTIMAL**.
  - Minimum Total Freight Cost $= \mathbf{\text{Rs. } 430}$.
  - Since $\Delta_{31} = 0$, an alternative optimal solution exists with an identical cost of Rs. 430.

---

## 4. Must Remember

- The **MODI ($u-v$) Method** tests optimality by calculating $u_i + v_j = c_{ij}$ for allocated cells and $\Delta_{ij} = c_{ij} - (u_i + v_j)$ for empty cells.
- **Optimality Criterion:** A solution is optimal if and only if **all $\Delta_{ij} \ge 0$**.
- If any $\Delta_{ij} < 0$, the solution can be improved; the cell with the **most negative $\Delta_{ij}$** enters the basis.
- **Stepping-Stone loops** move strictly along alternating horizontal and vertical orthogonal segments; corner vertices must lie on currently allocated basic cells.
- The shift quantity is $\theta = \min(\text{allocations at negative loop vertices})$.
- **Degeneracy** occurs when allocated cells $< m + n - 1$; it is resolved by placing an infinitesimal **$\epsilon \approx 0$** in an independent unallocated cell.
- When $\Delta_{ij} = 0$, an **alternative optimal solution** exists.

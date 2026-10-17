# Week 10 – Lecture 6: Transportation Problem Programming (Contd.)

## 1. Key Concepts
- **Vogel’s Approximation Method (VAM):** An advanced heuristic algorithm that calculates opportunity penalties for each row and column, yielding an initial basic feasible solution that is very close to, or identical to, the optimal distribution plan.
- **MODI Method (Modified Distribution / $u-v$ Method):** An exact dual-variable optimization algorithm used to test an initial basic feasible solution for global mathematical optimality.
- **Degeneracy in Transportation:** Occurs when the number of allocated basic cells is strictly less than $m + n - 1$; resolved by placing an infinitesimal allocation ($\epsilon \approx 0$) in an independent, unallocated cell.

## 2. Important Points
- **Steps of Vogel’s Approximation Method (VAM):**
  1. For each row and column, compute a **Penalty Cost** = difference between the two lowest unit costs ($c_{ij}$).
  2. Identify the row or column exhibiting the **largest penalty cost** (represents the highest financial penalty if allocation is delayed).
  3. In that selected row/column, allocate maximum possible quantity $\min(S_i, D_j)$ to the cell with the absolute lowest cost.
  4. Cross out the satisfied row or column and recompute penalties for the remaining matrix.
- **Testing for Optimality via the MODI ($u-v$) Method:**
  1. Verify non-degeneracy condition: exactly $m + n - 1$ occupied cells with independent positions.
  2. For all basic (occupied) cells, solve the dual equations:
     $$u_i + v_j = c_{ij} \quad (\text{set } u_1 = 0 \text{ arbitrarily})$$
  3. For all non-basic (empty) cells, compute the opportunity cost (net evaluation):
     $$\Delta_{ij} = c_{ij} - (u_i + v_j)$$
  4. **Optimality Criterion:**
     - If all $\Delta_{ij} \ge 0$, the current allocation is **globally optimal** (minimum cost achieved).
     - If any $\Delta_{ij} < 0$, the solution can be improved: select the cell with the most negative $\Delta_{ij}$, construct a closed loop of alternating plus/minus horizontal and vertical steps, shift units, and re-test.

## 3. Differences / Examples
| Method | Algorithm Nature | Computational Purpose | Optimality Status |
| :--- | :--- | :--- | :--- |
| **VAM** | Penalty-based heuristic | Finds superior initial basic feasible solution | Heuristic approximation (often optimal or near-optimal) |
| **MODI ($u-v$)** | Exact dual simplex adaptation | Tests and proves global mathematical optimality | Guarantees exact mathematically minimum total cost |

## 4. Must Remember
- VAM consistently outperforms NWCR and Least Cost Method because it accounts for the **cost penalty of not making the best choice**.
- A solution is optimal if and only if **all opportunity evaluations $\Delta_{ij} \ge 0$**.

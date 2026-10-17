# Week 10 – Lecture 5: Transportation Problem Programming

## 1. Key Concepts

- **The Transportation Problem (TP):** A specialized class of linear programming models designed to determine the optimal freight allocation pattern from $m$ supply origins (factories/warehouses) to $n$ demand destinations (markets/retailers) that minimizes total transportation costs.
- **Balanced vs. Unbalanced Transportation Problem:**
  - *Balanced TP:* Total available supply equals total customer demand ($\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$).
  - *Unbalanced TP:* Total supply does not equal total demand ($\sum a_i \ne \sum b_j$). Resolved by introducing a **Dummy Source** (if demand exceeds supply) or a **Dummy Destination** (if supply exceeds demand) with zero transportation costs ($c_{ij} = 0$).
- **Initial Basic Feasible Solution (IBFS):** A starting allocation that satisfies all rim (supply and demand) constraints without violating non-negativity.
- **Rim Condition for Non-Degeneracy:** In any transportation problem with $m$ rows and $n$ columns, a basic feasible solution is non-degenerate if and only if the number of allocated basic cells satisfies:
  $$\text{Number of Allocated Cells} = m + n - 1$$
  and these allocations occupy independent, non-looping positions.

---

## 2. Important Points

### Mathematical Formulation of the Transportation Problem
- **Parameters:**
  - $m$ supply origins with capacities $a_1, a_2, \dots, a_m$.
  - $n$ demand destinations with requirements $b_1, b_2, \dots, b_n$.
  - $c_{ij}$: Unit freight cost to ship from origin $i$ to destination $j$.
- **Decision Variables:**
  - $x_{ij}$: Number of units transported from origin $i$ to destination $j$ ($x_{ij} \ge 0$).
- **Objective Function (Minimize Total Freight Cost):**

$$\text{Minimize } Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij}$$

- **Subject to System Constraints:**
  - *Supply Constraints (Row restrictions):*
    $$\sum_{j=1}^{n} x_{ij} = a_i \quad \forall i = 1, 2, \dots, m$$
  - *Demand Constraints (Column restrictions):*
    $$\sum_{i=1}^{m} x_{ij} = b_j \quad \forall j = 1, 2, \dots, n$$
  - *Non-Negativity:* $x_{ij} \ge 0 \quad \forall (i, j)$.

### Three Algorithms to Find an Initial Basic Feasible Solution (IBFS)
The lecture details three foundational starting algorithms:

#### 1. North-West Corner Rule (NWCR)
- *Procedure:* Purely positional; starts at cell $(1,1)$ in the extreme top-left corner.
  - Allocates $x_{11} = \min(a_1, b_1)$.
  - Adjust remaining supply and demand. If the row is satisfied, move down to row 2; if the column is satisfied, move right to column 2.
  - Repeat until cell $(m,n)$ is reached.
- *Evaluation:* Completely ignores unit transportation costs ($c_{ij}$); generates a mathematically feasible solution that is almost always far from optimal.

#### 2. Least Cost Method (LCM / Matrix Minimum Method)
- *Procedure:* A greedy cost-based algorithm.
  - Scans the entire cost matrix to find the cell with the **absolute lowest unit cost $c_{ij}$**.
  - Allocates maximum possible units: $x_{ij} = \min(a_i, b_j)$.
  - Crosses out the satisfied row or column and adjusts remaining capacity.
  - Repeats among the remaining uncrossed cells until all supply and demand are satisfied.
- *Evaluation:* Substantially better starting cost than NWCR.

#### 3. Vogel’s Approximation Method (VAM / Penalty Method)
- *Procedure:* Uses the concept of **Opportunity Penalty / Regret** (the penalty incurred if the lowest-cost route is missed):
  - **Step 1:** For each row and column, identify the smallest and second-smallest cost elements; calculate the **Penalty** ($\text{Second Smallest } c_{ij} - \text{Smallest } c_{ij}$).
  - **Step 2:** Identify the row or column displaying the **Maximum Penalty**.
  - **Step 3:** In that selected row or column, allocate maximum possible units ($\min(a_i, b_j)$) to the cell with the **lowest cost**.
  - **Step 4:** Cross out the satisfied row or column, recompute penalties for remaining cells, and repeat until all allocations are complete.
- *Evaluation:* **Consistently yields the best starting IBFS**, often very close or identical to the global optimal solution.

---

## 3. Differences / Examples

### Synthesis: Comparison of IBFS Methods

| Method | Cost Awareness | Computational Effort | Quality of Starting Solution | Proximity to Optimal |
|---|---|---|---|---|
| **North-West Corner (NWCR)** | **Zero (Purely positional)** | Minimal | Very Poor (High Cost) | Far from optimal |
| **Least Cost Method (LCM)** | Moderate (Greedy minimum) | Low to Moderate | Fair to Good | Moderate |
| **Vogel's Approximation (VAM)**| **High (Penalty / Regret analysis)**| **Highest** | **Excellent (Near-Optimal)** | **Closest to global optimum** |

### Concrete Worked Numerical Problem: VAM vs. NWCR Allocation
- Consider 3 Factories ($F_1, F_2, F_3$) supplying 3 Markets ($M_1, M_2, M_3$):

$$\text{Cost Matrix } C = \begin{pmatrix} 2 & 7 & 4 \\ 3 & 3 & 1 \\ 5 & 4 & 7 \end{pmatrix}, \quad \text{Supply} = \begin{pmatrix} 50 \\ 40 \\ 60 \end{pmatrix}, \quad \text{Demand} = \begin{pmatrix} 40 \\ 50 \\ 60 \end{pmatrix}$$

- **Check Balance:** Total Supply $= 50+40+60 = 150$; Total Demand $= 40+50+60 = 150$ (Balanced TP).
- **Rim Condition:** $m + n - 1 = 3 + 3 - 1 = \mathbf{5\text{ allocations required}}$.

#### Vogel's Approximation Method (VAM) Execution:
- *Row Penalties:* Row 1: $|4-2|=2$; Row 2: $|3-1|=2$; Row 3: $|5-4|=1$.
- *Column Penalties:* Col 1: $|3-2|=1$; Col 2: $|4-3|=1$; Col 3: $|4-1|=3$.
- **Max Penalty is 3 (Column 3).** Smallest cost in Col 3 is $c_{23} = 1$.
  - Allocate $\min(40, 60) = \mathbf{40}$ to cell $(2,3)$. Factory 2 is fully exhausted ($a_2 = 0$). Cross out Row 2. Remaining demand in Col 3 is $60 - 40 = 20$.
- *Recalculate Penalties (Rows 1 & 3):*
  - Row 1: $|4-2|=2$; Row 3: $|5-4|=1$.
  - Col 1: $|5-2|=3$; Col 2: $|7-4|=3$; Col 3: $|7-4|=3$.
  - Tie in max penalty (3). Select Column 1; smallest cost is $c_{11} = 2$.
  - Allocate $\min(50, 40) = \mathbf{40}$ to cell $(1,1)$. Col 1 satisfied ($b_1 = 0$). Remaining supply in Row 1 is $50 - 40 = 10$.
- Continuing VAM gives allocations:
  - Cell $(1,1) = 40$ (cost $40 \times 2 = 80$)
  - Cell $(1,3) = 10$ (cost $10 \times 4 = 40$)
  - Cell $(2,3) = 40$ (cost $40 \times 1 = 40$)
  - Cell $(3,2) = 50$ (cost $50 \times 4 = 200$)
  - Cell $(3,3) = 10$ (cost $10 \times 7 = 70$)
- **Total Initial VAM Cost** $= 80 + 40 + 40 + 200 + 70 = \mathbf{\text{Rs. } 430}$.
- *(By contrast, running NWCR on the same matrix yields a cost of Rs. 610, proving VAM's massive cost superiority).*

---

## 4. Must Remember

- The Linear Programming Transportation Problem minimizes total distribution cost subject to row (supply) and column (demand) equality constraints.
- In an **unbalanced transportation problem**, add a **dummy row or column with zero transport costs** ($c_{ij} = 0$).
- The non-degeneracy condition requires exactly **$m + n - 1$ basic allocations**.
- The three methods to find an Initial Basic Feasible Solution (IBFS) are **North-West Corner Rule (NWCR), Least Cost Method (LCM), and Vogel's Approximation Method (VAM)**.
- **NWCR** is purely positional and ignores costs entirely; **VAM** analyzes row and column penalty costs (regrets) and yields the most cost-effective starting solution.
- A penalty in VAM is calculated as the **difference between the two lowest costs in that specific row or column**.

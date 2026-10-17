# Week 10 – Lecture 7: Assignment Problem Programming

## 1. Key Concepts
- **Assignment Problem:** A specialized branch of linear programming where $n$ tasks or jobs must be assigned to $n$ resources (workers, machines, or trucks) on a strict **one-to-one basis** to minimize total operational cost or time.
- **Binary Decision Constraint:** Each resource can be assigned to exactly one job, and each job can be performed by exactly one resource:
  $$x_{ij} \in \{0, 1\}, \quad \sum_{j=1}^n x_{ij} = 1, \quad \sum_{i=1}^n x_{ij} = 1$$
- **The Hungarian Method (Kuhn-Munkres Algorithm):** An efficient combinatorial optimization algorithm based on matrix reduction that solves the $n \times n$ assignment problem in polynomial time.

## 2. Important Points
- **Step-by-Step Execution of the Hungarian Method:**
  1. *Verify Balance:* Ensure the cost matrix is square ($n \times n$). If unbalanced, add dummy rows or columns with zero cost coefficients ($c_{ij} = 0$).
  2. *Row Reduction:* Identify the minimum cost in each row and subtract it from every element in that row (creates at least one zero per row).
  3. *Column Reduction:* Identify the minimum cost in each column and subtract it from every element in that column (creates at least one zero per column).
  4. *Line Covering Test for Optimality:* Draw the **minimum number of horizontal and vertical lines ($N$)** required to cover all zeros in the reduced matrix:
     - **If $N = n$ (matrix size):** An optimal assignment is reached. Proceed directly to Step 6.
     - **If $N < n$:** The solution is not yet optimal. Proceed to Step 5.
  5. *Matrix Shifting / Adjustment:*
     - Find the smallest uncovered number ($k$).
     - Subtract $k$ from all uncovered elements.
     - Add $k$ to all elements located at the intersection of two lines.
     - Leave elements covered by a single line unchanged.
     - Return to Step 4 and re-test with lines.
  6. *Assignment Allocation:* Identify rows/columns with a single unique zero, assign that task, cross out conflicting zeros in that row and column, and sum the original matrix costs.

## 3. Differences / Examples
| Problem Type | Decision Variables ($x_{ij}$) | Matrix Structure | Solving Method |
| :--- | :--- | :--- | :--- |
| **Transportation Problem** | Continuous integers ($x_{ij} \ge 0$, any batch size) | Rectangular ($m \times n$) | VAM + MODI ($u-v$) Method |
| **Assignment Problem** | Strictly binary ($x_{ij} \in \{0, 1\}$, 1-to-1 match) | Strictly square ($n \times n$) | Hungarian Method |

## 4. Must Remember
- Reference algorithm developer: **Harold Kuhn** (1955), named the "Hungarian Method" in honor of Hungarian mathematicians Dénes Kőnig and Jenő Egerváry.
- For **Maximization Assignment Problems** (e.g., maximizing sales profit), convert the matrix into a minimization problem by subtracting every matrix element from the largest element in the matrix before applying Hungarian reduction.

# Week 10 – Lecture 7: Assignment Problem Programming

## 1. Key Concepts

- **The Assignment Problem (AP):** A specialized class of linear programming models and a degenerate form of the Transportation Problem where $n$ distinct resources (workers, machines, vehicles) must be assigned to $n$ distinct destinations (jobs, routes, facilities) on a strict **one-to-one basis** ($a_i = 1$, $b_j = 1$) to minimize total assignment cost or time.
- **The Hungarian Method (Kuhn-Munkres Algorithm):** A combinatorial optimization algorithm that solves the assignment problem in polynomial time by operating on cost matrix reductions without evaluating all $n!$ factorial permutations.
- **Balanced vs. Unbalanced Assignment Problem:**
  - *Balanced:* Number of workers equals number of jobs ($n \times n$ square matrix).
  - *Unbalanced:* Number of workers ($m$) does not equal number of jobs ($n$). Resolved by adding **Dummy Rows** (if $m < n$) or **Dummy Columns** (if $m > n$) filled with zero costs ($c_{ij} = 0$).
- **Optimality Criterion in Hungarian Method:** An optimal zero assignment exists if and only if the **minimum number of straight horizontal and vertical lines ($L$)** required to cover all zeros in the reduced matrix equals the order of the matrix ($n$):
  $$L = n$$

---

## 2. Important Points

### Mathematical Formulation of the Assignment Problem
- **Binary Decision Variable:**
  $$x_{ij} = \begin{cases} 1 & \text{if worker } i \text{ is assigned to job } j \\ 0 & \text{otherwise} \end{cases}$$
- **Objective Function (Minimize Total Assignment Cost):**

$$\text{Minimize } Z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij}$$

- **Subject to One-to-One Constraints:**
  - *Worker Assignment:* $\sum_{j=1}^{n} x_{ij} = 1 \quad \forall i = 1, 2, \dots, n$ (each worker gets exactly one job).
  - *Job Assignment:* $\sum_{i=1}^{n} x_{ij} = 1 \quad \forall j = 1, 2, \dots, n$ (each job gets exactly one worker).
  - *Binary Restriction:* $x_{ij} \in \{0, 1\}$.

### The Step-by-Step Hungarian Algorithm Procedure
The lecture establishes the complete execution protocol:

#### Step 1: Ensure Matrix is Balanced
If $m \ne n$, add dummy row(s) or column(s) with cost elements $0$ to form an $n \times n$ square matrix.

#### Step 2: Row Reduction
For each row, locate the **smallest element** and subtract it from every element in that row. (Ensures at least one zero in each row).

#### Step 3: Column Reduction
In the matrix resulting from Step 2, locate the **smallest element in each column** and subtract it from every element in that column. (Ensures at least one zero in each column).

#### Step 4: Test for Optimality (Minimum Line Covering)
Draw the **minimum number of horizontal and vertical straight lines ($L$)** necessary to cover all zeros in the matrix.
- If **$L = n$**: An optimal zero-cost assignment is possible. Proceed to Step 6.
- If **$L < n$**: An optimal assignment is not yet possible. Proceed to Step 5.

#### Step 5: Modify the Matrix
1. From the set of all elements **not covered by any line (uncovered elements)**, identify the smallest value, denoted as **$k$**.
2. **Subtract $k$** from all uncovered elements.
3. **Add $k$** to elements located at the **intersection of two lines**.
4. Leave elements covered by a single line **completely unchanged**.
5. Return to Step 4 and re-evaluate minimum line covering.

#### Step 6: Make Final One-to-One Zero Assignments
1. Scan rows sequentially: If a row contains **exactly one zero**, box it ($\square$) as an assigned job, and cross out ($\times$) all other zeros in that assigned column.
2. Scan columns sequentially: If a column contains **exactly one zero**, box it ($\square$), and cross out ($\times$) all other zeros in that assigned row.
3. Repeat until every row and column has exactly one assigned box ($\square$).
4. Compute total minimum cost by referencing original matrix values.

### Handling Maximization Assignment Problems
If the goal is to **maximize profit, efficiency, or sales**:
- Identify the **single maximum element** in the entire original matrix ($M_{\max}$).
- Subtract every element from $M_{\max}$ to construct the **Relative Loss Matrix**:
  $$c_{ij}' = M_{\max} - c_{ij}$$
- Apply the standard minimization Hungarian method to this loss matrix.

---

## 3. Differences / Examples

### Synthesis: Transportation Problem vs. Assignment Problem

| Dimension | Transportation Problem (TP) | Assignment Problem (AP) |
|---|---|---|
| **Matrix Structure** | Rectangular ($m \times n$); supply $a_i \ne$ demand $b_j$. | Strictly square ($n \times n$); $a_i = 1$, $b_j = 1$. |
| **Decision Variables** | Continuous quantities ($x_{ij} \ge 0$). | **Binary integer values ($x_{ij} \in \{0, 1\}$)**. |
| **Solving Algorithm** | VAM + MODI ($u-v$) Method. | **Hungarian Method (Kuhn-Munkres)**. |
| **Degeneracy** | Rim condition: $m + n - 1$ allocations. | Inherently degenerate as a transportation problem. |

### Worked Problem from the Lecture: Hungarian Method ($3 \times 3$ Cost Matrix)
- Three Workers ($W_1, W_2, W_3$) are to be assigned to three Jobs ($J_1, J_2, J_3$) with the following cost matrix (in Rs.):

$$C = \begin{pmatrix} 10 & 15 & 9 \\ 9 & 18 & 5 \\ 6 & 14 & 3 \end{pmatrix}$$

- **Step 1 (Row Reduction):**
  - Row 1: Min is 9 $\rightarrow [10-9, \ 15-9, \ 9-9] = [1, \ 6, \ 0]$
  - Row 2: Min is 5 $\rightarrow [9-5, \ 18-5, \ 5-5] = [4, \ 13, \ 0]$
  - Row 3: Min is 3 $\rightarrow [6-3, \ 14-3, \ 3-3] = [3, \ 11, \ 0]$
  - Matrix after Row Reduction:
    $$C_1 = \begin{pmatrix} 1 & 6 & 0 \\ 4 & 13 & 0 \\ 3 & 11 & 0 \end{pmatrix}$$
- **Step 2 (Column Reduction):**
  - Col 1: Min is 1 $\rightarrow [1-1, \ 4-1, \ 3-1] = [0, \ 3, \ 2]$
  - Col 2: Min is 6 $\rightarrow [6-6, \ 13-6, \ 11-6] = [0, \ 7, \ 5]$
  - Col 3: Min is 0 $\rightarrow [0, \ 0, \ 0]$
  - Matrix after Column Reduction:
    $$C_2 = \begin{pmatrix} 0 & 0 & 0 \\ 3 & 7 & 0 \\ 2 & 5 & 0 \end{pmatrix}$$
- **Step 3 (Line Covering Test):**
  - All zeros can be covered by **2 lines**: Horizontal line covering Row 1, and Vertical line covering Col 3.
  - Number of lines $L = 2 < n = 3$. Not optimal!
- **Step 4 (Matrix Modification):**
  - Uncovered elements: $\{3, 7, 2, 5\}$. Minimum uncovered value is **$k = 2$**.
  - Subtract $k=2$ from uncovered elements: $3-2=1, \ 7-2=5, \ 2-2=0, \ 5-2=3$.
  - Intersection element is at $(1,3)$; add $k=2 \rightarrow 0+2 = 2$.
  - Single-line covered elements remain unchanged: $(1,1)=0, \ (1,2)=0, \ (2,3)=0, \ (3,3)=0$.
  - Modified Matrix:
    $$C_3 = \begin{pmatrix} 0 & 0 & 2 \\ 1 & 5 & 0 \\ 0 & 3 & 0 \end{pmatrix}$$
- **Step 5 (Line Covering on $C_3$):**
  - Minimum lines to cover all zeros now requires **3 lines** ($L = 3 = n$). Optimal!
- **Step 6 (Assignments):**
  - Row 2 has one zero at $(2,3) \rightarrow$ **Assign $W_2 \rightarrow J_3$** (cost = 5). Cross out $(3,3)$.
  - Row 3 now has one remaining zero at $(3,1) \rightarrow$ **Assign $W_3 \rightarrow J_1$** (cost = 6). Cross out $(1,1)$.
  - Row 1 has remaining zero at $(1,2) \rightarrow$ **Assign $W_1 \rightarrow J_2$** (cost = 15).
- **Total Minimum Cost** $= c_{12} + c_{23} + c_{31} = 15 + 5 + 6 = \mathbf{\text{Rs. } 26}$.

---

## 4. Must Remember

- The **Assignment Problem** is an integer linear program where $n$ agents are assigned to $n$ tasks on a strict **1-to-1 basis ($x_{ij} \in \{0, 1\}$)**.
- Unbalanced assignment problems ($m \ne n$) are resolved by adding **dummy rows or columns with zero costs**.
- The **Hungarian Method** solves the problem via **Row Reduction $\rightarrow$ Column Reduction $\rightarrow$ Minimum Line Covering $\rightarrow$ Matrix Modification**.
- Optimality is reached when the **minimum number of covering lines equals the matrix order ($L = n$)**.
- During matrix modification, the minimum uncovered value $k$ is **subtracted from uncovered cells and added to line intersections**.
- To solve a **maximization problem**, convert it to minimization by subtracting all matrix values from the **maximum single element** ($c_{ij}' = M_{\max} - c_{ij}$).

# Week 10 – Lecture 5: Transportation Problem Programming

## 1. Key Concepts
- **Transportation Problem:** A specialized linear programming model designed to determine the most cost-effective distribution plan to ship homogeneous goods from $m$ supply origins (factories) to $n$ demand destinations (warehouses/markets).
- **Balanced vs. Unbalanced Transportation Problem:**
  - *Balanced:* Total factory supply strictly equals total market demand ($\sum_{i=1}^m S_i = \sum_{j=1}^n D_j$).
  - *Unbalanced:* Supply $\ne$ Demand; balanced by introducing a fictitious dummy plant or dummy market with zero shipping costs ($c_{ij} = 0$).
- **Initial Basic Feasible Solution (IBFS):** The starting mathematical allocation of shipments satisfying all rim (row supply and column demand) constraints before testing for optimality.

## 2. Important Points
- **Linear Programming Mathematical Formulation:**
  - Minimize total shipping cost:
    $$\text{Minimize } Z = \sum_{i=1}^m \sum_{j=1}^n c_{ij} x_{ij}$$
  - Subject to:
    - Supply constraints: $\sum_{j=1}^n x_{ij} \le S_i \quad (\forall i = 1, \dots, m)$
    - Demand constraints: $\sum_{i=1}^m x_{ij} \ge D_j \quad (\forall j = 1, \dots, n)$
    - Non-negativity: $x_{ij} \ge 0$
- **Methods to Find Initial Basic Feasible Solution (IBFS):**
  1. **North-West Corner Rule (NWCR):**
     - Begins at top-left cell $(1, 1)$.
     - Allocates $\min(S_1, D_1)$, adjusts remaining rim values, and moves strictly right or down.
     - *Advantage:* Simple, fast; *Disadvantage:* Completely ignores shipping costs ($c_{ij}$), yielding poor initial costs.
  2. **Least Cost Method (LCM) / Matrix Minimum Method:**
     - Identifies the cell with the lowest unit shipping cost in the entire cost matrix.
     - Allocates maximum possible quantity $\min(S_i, D_j)$, crosses out satisfied row/column, and repeats.
     - Incorporates economic cost information, providing a significantly better starting solution than NWCR.

## 3. Differences / Examples
| IBFS Method | Cost Consideration | Computational Effort | Quality of Initial Solution |
| :--- | :--- | :--- | :--- |
| **North-West Corner Rule** | Zero (purely geometric index position) | Very Low (manual arithmetic) | Poor (high total cost, far from optimal) |
| **Least Cost Method** | Greedily targets lowest unit freight cost | Moderate (continuous cost sorting) | Moderate to Good (much closer to optimal) |

## 4. Must Remember
- Total number of basic allocated cells in a non-degenerate transportation matrix must strictly equal **$m + n - 1$**.
- A balanced problem is a strict prerequisite: always verify $\sum S_i = \sum D_j$ before attempting any allocation algorithms.

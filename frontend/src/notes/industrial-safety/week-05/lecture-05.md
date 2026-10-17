# Week 5 – Lecture 5: Ranking of Design Solutions: AHP Approach

## 1. Key Concepts
- **Analytic Hierarchy Process (AHP):** A multi-criteria decision-making (MCDM) methodology developed by Thomas L. Saaty to rank and prioritize complex engineering safety solutions using pairwise comparisons.
- **Hierarchical Structure:** Decomposes the decision problem into a three-level hierarchy: Overall Objective (top), Evaluation Criteria (middle), and Design Alternatives (bottom).
- **Pairwise Comparison Matrix ($A$):** An $n \times n$ reciprocal matrix where each element $a_{ij}$ represents the relative importance of criterion/alternative $i$ compared to $j$ using Saaty's 1-to-9 scale.

## 2. Important Points
- **Saaty’s 1–9 Comparison Scale:**
  - $1$: Equal importance; $3$: Moderate importance; $5$: Strong importance; $7$: Very strong importance; $9$: Extreme importance ($2, 4, 6, 8$: intermediate values). Reciprocal rule: $a_{ji} = 1 / a_{ij}$.
- **Weight Vector Calculation:** Normalize column values of matrix $A$ and calculate the row-wise arithmetic mean to determine criterion priority weights ($w_i$).
- **Consistency Verification:**
  - Calculate maximum eigenvalue ($\lambda_{max}$).
  - **Consistency Index (CI):**
    $$CI = \frac{\lambda_{max} - n}{n - 1}$$
  - **Consistency Ratio (CR):**
    $$CR = \frac{CI}{RI}$$
    Where $RI$ is the Random Consistency Index (pre-computed empirical table value for size $n$).
  - **Acceptability Rule:** If $CR < 0.10$ ($10\%$), the expert judgments are consistent and acceptable; otherwise, comparisons must be re-evaluated.
- **Evaluation Criteria for Safety Interventions:** Technical effectiveness, capital cost, operational maintenance, and ease of plant implementation.

## 3. Differences / Examples
| $CR$ Value | Decision Status | Required Action |
| :--- | :--- | :--- |
| **$CR < 0.10$** | Acceptably consistent | Proceed with calculating final weighted scores of alternatives |
| **$CR \ge 0.10$** | Inconsistent judgments | Re-examine and adjust pairwise comparisons to resolve logical conflicts |

## 4. Must Remember
- Developer of AHP: **Thomas L. Saaty**.
- For consistent matrices, $\lambda_{max} = n$; for matrices with subjective judgment deviations, $\lambda_{max} > n$.
- Final ranking score of each safety design alternative is obtained by summing the product of its local priority weight and the corresponding criterion weight across all criteria.

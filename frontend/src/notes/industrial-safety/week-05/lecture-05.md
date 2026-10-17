# Week 5 – Lecture 5: Ranking of Design Solutions: AHP Approach

## 1. Key Concepts

- **Analytic Hierarchy Process (AHP):** A structured Multi-Criteria Decision-Making (MCDM) methodology developed by Thomas L. Saaty (1980, 1985) used to prioritize and select the optimal engineering safety design solution from multiple competing alternatives.
- **Decision Hierarchy Architecture:**
  - **Level 1 (Goal):** Select the optimal safety design solution to mitigate plant hazards.
  - **Level 2 (Evaluation Criteria):** Multi-dimensional trade-off attributes: Capital & Operating Cost ($C$), Engineering Reliability ($R$), Maintainability ($M$), and Ease of Operability ($O$).
  - **Level 3 (Decision Alternatives):** The candidate design solutions ($DS_1, DS_2, \dots, DS_5$) generated through Safety Function Deployment (SFD).
- **Pairwise Comparison Matrix ($A$):** A positive reciprocal square matrix ($n \times n$) where expert judgments quantify the relative preference of element $i$ over element $j$:
  $$A = [a_{ij}], \quad a_{ji} = \frac{1}{a_{ij}}, \quad a_{ii} = 1$$
- **Characteristic Matrix Formulation:**
  $$A x = \lambda_{\max} x$$
  Where $A$ is the comparison matrix, $x$ is the priority weight eigenvector, and $\lambda_{\max}$ is the principal (maximum) eigenvalue.

---

## 2. Important Points

### 2.1 Saaty's Fundamental 1-to-9 Ratio Scale

| Numerical Intensity | Verbal Definition | Practical Engineering Meaning |
| :---: | :--- | :--- |
| **1** | Equal Importance | Both criteria or design alternatives contribute equally to the objective |
| **3** | Moderate Importance | Experience and judgment slightly favor one alternative over another |
| **5** | Strong / Essential Importance | Experience and judgment strongly favor one alternative over another |
| **7** | Very Strong / Demonstrated | An alternative is favored very strongly; its dominance is demonstrated in practice |
| **9** | Extreme / Absolute Importance | The evidence favoring one alternative over another is of the highest affirmation |
| **2, 4, 6, 8** | Intermediate Values | Compromise judgments between adjacent scale categories |
| **Reciprocals ($1/a_{ij}$)** | Inverse Judgment | If alternative $i$ has rating 5 over $j$, then alternative $j$ has rating $1/5 = 0.20$ over $i$ |

### 2.2 Total Number of Pairwise Matrices Required
To evaluate $n$ design alternatives across $k$ criteria:
- **1 Criteria Matrix:** Size $k \times k$ (comparing criteria against each other to establish global weights $w_c$).
- **$k$ Alternative Matrices:** Size $n \times n$ (comparing alternatives against each other under each individual criterion).
- **Total Matrices:** $k + 1$ comparison matrices. (For 4 criteria and 5 design solutions: $4 + 1 = 5$ matrices).

### 2.3 Priority Vector ($x$) and Eigenvalue Computation
While exact solution requires solving $\det(A - \lambda I) = 0$, the standardized arithmetic approximation method yields highly accurate priority vectors:
1. **Column Normalization:** Divide each entry by the sum of its column:
   $$\bar{a}_{ij} = \frac{a_{ij}}{\sum_{k=1}^{n} a_{kj}}$$
2. **Row Averaging (Priority Weight):** Calculate the arithmetic mean across each row:
   $$x_i = \frac{1}{n} \sum_{j=1}^{n} \bar{a}_{ij}$$
3. **Principal Eigenvalue ($\lambda_{\max}$):** Compute the matrix-vector product $A x$; divide each element $(A x)_i$ by $x_i$, and take the average over all $n$ rows:
   $$\lambda_{\max} = \frac{1}{n} \sum_{i=1}^{n} \frac{(A x)_i}{x_i}$$

### 2.4 Mathematical Consistency Verification
Because human expert judgments are subjective, transitivity is not guaranteed ($A > B$ and $B > C$ does not guarantee $A > C$). AHP enforces mathematical consistency checks:

1. **Consistency Index ($CI$):**
   $$CI = \frac{\lambda_{\max} - n}{n - 1}$$
   *(Note: For a perfectly consistent matrix, $\lambda_{\max} = n$ and $CI = 0$).*

2. **Random Inconsistency Index ($RI$):**
   Empirical average $CI$ generated from thousands of randomly simulated reciprocal matrices:

| Matrix Size ($n$) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$RI$ Value** | 0.00 | 0.00 | 0.58 | 0.90 | **1.12** | 1.24 | 1.32 | 1.41 | 1.45 | 1.49 |

3. **Consistency Ratio ($CR$):**
   $$CR = \frac{CI}{RI}$$
   - **Acceptance Threshold:** $CR < 0.10$ ($10\%$).
   - If $CR < 0.10$, the expert evaluations are acceptably consistent.
   - If $CR \ge 0.10$, the judgments contain logical contradictions and the expert panel must re-evaluate the pairwise comparisons.

---

## 3. Differences / Examples

### 3.1 Fully Worked Numerical Example: Selecting the Best Desulphurization Design Solution

Five candidate design solutions ($DS_1$ to $DS_5$) are evaluated across four criteria: Cost ($C$), Reliability ($R$), Maintainability ($M$), and Operability ($O$).

#### Step 1: Criteria Priority Vector ($w$)
Pairwise comparison of the 4 criteria by the 5-engineer expert panel yields:
$$w = \begin{bmatrix} w_C \\ w_R \\ w_M \\ w_O \end{bmatrix} = \begin{bmatrix} 0.08 \\ 0.22 \\ 0.28 \\ 0.42 \end{bmatrix}$$
*Operability is the most critical attribute (42%), followed by Maintainability (28%), Reliability (22%), and Capital Cost (8%).*

---

#### Step 2: Evaluation of Alternatives under Cost Criterion
The $5 \times 5$ pairwise comparison matrix for the 5 design alternatives with respect to Cost is:

$$A_{\text{Cost}} = \begin{bmatrix} 
1.00 & 0.33 & 0.33 & 0.20 & 0.20 \\
3.00 & 1.00 & 1.00 & 0.33 & 0.33 \\
3.00 & 1.00 & 1.00 & 0.33 & 0.33 \\
5.00 & 3.00 & 3.00 & 1.00 & 1.00 \\
5.00 & 3.00 & 3.00 & 1.00 & 1.00 
\end{bmatrix}$$

1. **Column Sums:** $[17.00, \; 8.33, \; 8.33, \; 2.86, \; 2.86]$.
2. **Column Normalization & Row Averaging:**
   Dividing each entry by its column sum and computing row averages yields the local priority vector under Cost ($x_C$):
   $$x_C = \begin{bmatrix} 
   x_{DS1} \\ x_{DS2} \\ x_{DS3} \\ x_{DS4} \\ x_{DS5} 
   \end{bmatrix} = \begin{bmatrix} 
   0.06 \\ 0.13 \\ 0.13 \\ 0.34 \\ 0.34 
   \end{bmatrix}$$

3. **Consistency Verification for Matrix $A_{\text{Cost}}$:**
   - Multiplying $A_{\text{Cost}} \times x_C$ yields the product vector, giving $\lambda$ values across rows: $[5.00, 5.04, 5.04, 5.08, 5.08]$.
   - Average Principal Eigenvalue: $\lambda_{\max} \approx 5.05$.
   - Matrix size: $n = 5$.
   - Consistency Index:
     $$CI = \frac{\lambda_{\max} - n}{n - 1} = \frac{5.05 - 5}{5 - 1} = \frac{0.05}{4} = 0.0125$$
   - From the $RI$ table for $n = 5$, $RI = 1.12$.
   - Consistency Ratio:
     $$CR = \frac{CI}{RI} = \frac{0.0125}{1.12} \approx 0.011 < 0.10$$
   *Since $CR = 1.1\% \ll 10\%$, the matrix is strictly consistent and accepted.*

---

#### Step 3: Synthesis Across All Four Criteria
Local priority vectors obtained under each criterion are assembled into an overall score matrix:

| Alternative | Cost ($w_C = 0.08$) | Reliability ($w_R = 0.22$) | Maintainability ($w_M = 0.28$) | Operability ($w_O = 0.42$) | Overall Synthesized Score | Rank |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$DS_1$** | $0.06$ | $0.09$ | $0.08$ | $0.09$ | $0.08 \times 0.06 + 0.22 \times 0.09 + 0.28 \times 0.08 + 0.42 \times 0.09 = \mathbf{0.085}$ | 5 |
| **$DS_2$** | $0.13$ | $0.09$ | $0.08$ | $0.09$ | $0.08 \times 0.13 + 0.22 \times 0.09 + 0.28 \times 0.08 + 0.42 \times 0.09 = \mathbf{0.090}$ | 4 |
| **$DS_3$** | $0.13$ | $0.09$ | $0.08$ | $0.09$ | $0.08 \times 0.13 + 0.22 \times 0.09 + 0.28 \times 0.08 + 0.42 \times 0.09 = \mathbf{0.090}$ | 3 |
| **$DS_4$** | $0.34$ | $0.50$ | $0.38$ | $0.21$ | $0.08 \times 0.34 + 0.22 \times 0.50 + 0.28 \times 0.38 + 0.42 \times 0.21 = \mathbf{0.332}$ | 2 |
| **$DS_5$** | $0.34$ | $0.50$ | $0.38$ | $0.42$ | $0.08 \times 0.34 + 0.22 \times 0.50 + 0.28 \times 0.38 + 0.42 \times 0.42 = \mathbf{0.419}$ | **1** |

#### Conclusion:
- **Design Solution 5 ($DS_5$: Automated inert gas blanketing with interlocked valves)** ranks highest with a composite score of **0.419 (41.9%)**, driven by superior operability and maintainability.
- **Design Solution 4 ($DS_4$)** ranks second with **0.332 (33.2%)**.
- **Practical Caveat:** In high-risk chemical installations, assuming a single solution is 100% sufficient is overly restrictive; a composite deployment combining $DS_5$ with $DS_4$ ensures defense-in-depth.

---

## 4. Must Remember

- **Developer:** Thomas L. Saaty; converts qualitative expert engineering trade-offs into mathematically rigorous priority weights.
- **Fundamental Ratio Scale:** 1 (Equal) $\to$ 3 (Moderate) $\to$ 5 (Strong) $\to$ 7 (Very Strong) $\to$ 9 (Extreme), with strict reciprocals ($a_{ji} = 1/a_{ij}$).
- **Consistency Ratio Rule:** $CR = \frac{CI}{RI} < 0.10$. If $CR \ge 10\%$, judgments are logically flawed and must be re-elicited.
- **Total Comparison Matrices:** Evaluating $n$ design alternatives across $k$ criteria requires exactly **$k + 1$ pairwise matrices**.
- **Synthesis:** The final alternative score is the dot product of the alternative's local weights across all criteria with the global criteria priority vector ($Score_i = \sum_{j} w_j \cdot x_{ij}$).

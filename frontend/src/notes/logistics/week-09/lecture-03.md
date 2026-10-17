# Week 9 – Lecture 3: Facility Location Planning

## 1. Key Concepts

- **Facility Location Planning:** The strategic determination of the optimal geographic placement for production plants, regional warehouses, and cross-dock distribution centers, balancing operational costs, freight access, regulatory factors, and market responsiveness.
- **Factor Rating Method:** The most widely deployed multi-criteria location evaluation framework, combining quantitative economic factors and qualitative strategic criteria into a single weighted score.
- **Load-Distance ($ld$) Technique:** A mathematical evaluation model that calculates the cumulative freight load multiplied by transit distance across candidate locations to select the site that minimizes total transportation effort.
- **Locational Cost-Volume-Profit (Break-Even) Analysis:** An economic modeling technique that compares the fixed setup costs and per-unit variable operating costs of alternative candidate sites across varying expected production volume ranges.
- **Euclidean vs. Rectilinear Distance:**
  - *Euclidean Distance:* The straight-line geometric distance between two coordinate points:
    $$d_{ij} = \sqrt{(X_i - X_j)^2 + (Y_i - Y_j)^2}$$
  - *Rectilinear (Manhattan) Distance:* The grid distance measured along perpendicular right-angled city streets:
    $$d_{ij} = |X_i - X_j| + |Y_i - Y_j|$$

---

## 2. Important Points

### The Four Foundational Location Selection Methods
The lecture outlines structured mathematical and qualitative techniques:

#### 1. The Factor Rating Method
- **Step 1:** Establish a comprehensive list of critical location drivers (labor cost, labor availability, highway connectivity, proximity to deep-sea ports, state tax incentives, power reliability).
- **Step 2:** Assign an importance weight ($W_i$) to each factor such that $\sum W_i = 1.0$ (or $100\%$).
- **Step 3:** Score each candidate site on a standardized scale (e.g., $1$ to $100$).
- **Step 4:** Compute the composite weighted score for each site $j$:

$$\text{Composite Score}_j = \sum_{i=1}^{m} (W_i \cdot S_{ij})$$

- **Step 5:** Select the location achieving the highest composite score.

#### 2. The Load-Distance ($ld$) Method
- Evaluates specific pre-identified candidate facility sites.
- Computes the aggregate freight transport work:

$$ld = \sum_{i=1}^{n} (L_i \cdot d_i)$$

- Where $L_i$ is the freight tonnage/load shipped between the facility and market $i$, and $d_i$ is the geometric distance (Euclidean or Rectilinear) separating them. The site yielding the lowest $ld$ score is optimal.

#### 3. Locational Cost-Volume Break-Even Analysis
- Each candidate location exhibits a unique cost structure:
  $$\text{Total Cost of Location } j = FC_j + (VC_j \cdot Q)$$
  Where $FC_j$ represents fixed land/building lease and equipment costs, $VC_j$ represents variable labor, material, and transport costs per unit, and $Q$ is annual volume.
- Plotting total cost lines identifies which location is cost-optimal across specific volume intervals.

---

## 3. Differences / Examples

### Synthesis: Facility Location Planning Methodologies

| Method | Analytical Approach | Best Application | Primary Strengths | Primary Weaknesses |
|---|---|---|---|---|
| **Factor Rating** | Qualitative + Quantitative | Broad macro-location choices (inter-state/country) | Incorporates non-financial, qualitative factors. | Subjective factor weights and scoring bias. |
| **Center of Gravity**| Pure Quantitative Calculus | Finding theoretical single warehouse coordinates | Mathematically provable minimum distance centroid. | Ignores terrain, road grids, and physical borders. |
| **Load-Distance** | Pure Quantitative Distance | Evaluating 3 to 5 discrete, feasible candidate sites | Simple; directly models freight movement effort. | Assumes straight-line transport cost proportionality. |
| **Break-Even Analysis**| Pure Economic Cost Accounting| Comparing locations with differing fixed/variable costs| Clear visual volume decision thresholds. | Assumes fixed costs and variable costs remain linear. |

### Concrete Worked Numerical Problem: Factor Rating Evaluation
- An enterprise evaluates three candidate cities (**Site A, Site B, and Site C**) for a new automated distribution center:

| Location Evaluation Factor | Importance Weight ($W_i$) | Site A Score (out of 100) | Site B Score (out of 100) | Site C Score (out of 100) |
|---|---|---|---|---|
| **Highway & Rail Connectivity** | 0.30 | 80 | 90 | 65 |
| **Skilled Logistics Labor** | 0.25 | 70 | 80 | 90 |
| **Local Land Lease & Tax Rates**| 0.20 | 85 | 60 | 80 |
| **Proximity to Major Markets** | 0.15 | 90 | 75 | 70 |
| **Power & Utility Reliability** | 0.10 | 80 | 85 | 85 |
| **TOTAL WEIGHT** | **1.00** | — | — | — |

- **Weighted Score Computations:**
  - $\text{Score}_A = (0.30 \times 80) + (0.25 \times 70) + (0.20 \times 85) + (0.15 \times 90) + (0.10 \times 80) = 24.0 + 17.5 + 17.0 + 13.5 + 8.0 = \mathbf{80.0}$
  - $\text{Score}_B = (0.30 \times 90) + (0.25 \times 80) + (0.20 \times 60) + (0.15 \times 75) + (0.10 \times 85) = 27.0 + 20.0 + 12.0 + 11.25 + 8.5 = \mathbf{78.75}$
  - $\text{Score}_C = (0.30 \times 65) + (0.25 \times 90) + (0.20 \times 80) + (0.15 \times 70) + (0.10 \times 85) = 19.5 + 22.5 + 16.0 + 10.5 + 8.5 = \mathbf{77.0}$
- **Recommendation:** **Site A** is selected with the highest composite score of **80.0**, providing the superior balance of highway connectivity, low land lease costs, and market proximity.

---

## 4. Must Remember

- The primary facility location techniques are: **Factor Rating Method, Center of Gravity Method, Load-Distance ($ld$) Method, and Locational Break-Even Analysis**.
- The **Factor Rating Method** computes a composite weighted score:
  $$\text{Score}_j = \sum W_i \cdot S_{ij}$$
  It is the most popular technique because it incorporates both financial and qualitative criteria.
- The **Load-Distance ($ld$) Method** minimizes total freight transport effort:
  $$ld = \sum L_i \cdot d_i$$
- **Euclidean distance** measures straight-line geometry ($d = \sqrt{\Delta X^2 + \Delta Y^2}$); **Rectilinear distance** measures Manhattan right-angle grid paths ($d = |\Delta X| + |\Delta Y|$).
- **Locational Break-Even Analysis** uses $TC = FC + (VC \cdot Q)$ to determine which site offers the lowest total cost across specific annual volume brackets.

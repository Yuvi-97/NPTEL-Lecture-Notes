# Week 9 – Lecture 5: Human Error Quantification from Experts’ opinions – Fuzzy Set Approach

## 1. Key Concepts

### Expert Elicitation under Epistemic Uncertainty
- **Motivation for Fuzzy Set Theory:** In many complex industrial environments (e.g., offshore installations, chemical batch plants, overhead crane operations), empirical actuarial databases for human errors are completely absent. Safety engineers must rely on subject matter expert (SME) judgments.
- **Subjective Linguistic Variables:** Human experts express subjective likelihoods in natural linguistic terms (e.g., "Very Low," "Medium High," "Likely") rather than precise decimal probabilities. Fuzzy set theory provides a mathematically rigorous bridge to translate vague qualitative language into crisp numerical probabilities.
- **Fuzzy Numbers:** A convex, normalized fuzzy set defined over a continuous universe of discourse:
  - **Triangular Fuzzy Number (TFN):** Defined by triplet $(a_1, a_2, a_3)$ with a single peak at $a_2$ where membership $\mu(x) = 1.0$.
  - **Trapezoidal Fuzzy Number (TrFN):** Defined by quadruplet $(a_1, a_2, a_3, a_4)$ with a flat tolerance core over $[a_2, a_3]$ where membership $\mu(x) = 1.0$.

---

## 2. Important Points

### 1. Trapezoidal Fuzzy Number Formulation
The membership function $\mu_A(x)$ of a trapezoidal fuzzy number $\tilde{A} = (a_1, a_2, a_3, a_4)$ is:
$$\mu_A(x) = \begin{cases} 0, & x < a_1 \\ \frac{x - a_1}{a_2 - a_1}, & a_1 \le x \le a_2 \\ 1, & a_2 \le x \le a_3 \\ \frac{a_4 - x}{a_4 - a_3}, & a_3 \le x \le a_4 \\ 0, & x > a_4 \end{cases}$$

#### Standard 7-Point Linguistic Scale (OSHA-Aligned):
- **Very Low (Very Poor):** $(0.0, 0.0, 0.1, 0.2)$
- **Low (Poor):** $(0.1, 0.2, 0.2, 0.3)$
- **Medium Low:** $(0.2, 0.3, 0.4, 0.5)$
- **Medium:** $(0.3, 0.4, 0.5, 0.6)$
- **Medium High:** $(0.5, 0.6, 0.7, 0.8)$
- **High (Good):** $(0.7, 0.8, 0.8, 0.9)$
- **Very High (Very Good):** $(0.8, 0.9, 1.0, 1.0)$

---

### 2. Step-by-Step Algorithm for Human Error Probability (HEP) Quantification

```
[ Collect Expert Linguistic Judgments ]
                  │
                  ▼
[ Compute Inter-Expert Similarity S_ij ]
                  │
                  ▼
[ Determine Average & Relative Agreement (AA_i, RA_i) ]
                  │
                  ▼
[ Evaluate Expert Weighting Vector W_i (Experience/Education) ]
                  │
                  ▼
[ Synthesize Consensus Coefficient CC_i = 0.5*W_i + 0.5*RA_i ]
                  │
                  ▼
[ Aggregate Fuzzy Numbers into Composite Vector (s1, s2, s3, s4) ]
                  │
                  ▼
[ Defuzzify via Center of Gravity (COG) Method -> Crisp Score X* ]
                  │
                  ▼
[ Onisawa's Logarithmic Transformation -> Final HEP = 10^(-K) ]
```

1. **Step 1: Elicit Linguistic Judgments:** Solicit evaluations from $D$ experts ($D \ge 3$) for a specific error mode $E_k$.
2. **Step 2: Compute Degree of Similarity ($S_{ij}$):**
   Evaluate agreement between each pair of experts $(i, j)$:
   $$S_{ij} = 1 - \frac{1}{4}\sum_{k=1}^4 |a_{ik} - a_{jk}|$$
3. **Step 3: Compute Average Agreement Degree ($AA_i$):**
   $$AA_i = \frac{1}{D - 1} \sum_{j=1, j \ne i}^D S_{ij}$$
4. **Step 4: Compute Relative Agreement Degree ($RA_i$):**
   $$RA_i = \frac{AA_i}{\sum_{k=1}^D AA_k}$$
5. **Step 5: Determine Expert Weighting Vector ($W_i$):**
   Using the Nikolaidis and Tsuda framework, experts are scored based on professional position, years of industrial service, educational level, and age. Individual scores are normalized:
   $$W_i = \frac{\text{Score}_i}{\sum_{k=1}^D \text{Score}_k}$$
6. **Step 6: Calculate Consensus Coefficient ($CC_i$):**
   Balances an expert's credential weight ($W_i$) with their consensus relative agreement ($RA_i$):
   $$CC_i = \beta W_i + (1 - \beta) RA_i \quad (\text{standard weighting parameter } \beta = 0.5)$$
7. **Step 7: Aggregate Opinions into Composite Fuzzy Number:**
   $$\tilde{S} = (s_1, s_2, s_3, s_4) = \sum_{i=1}^D CC_i \cdot \tilde{A}_i$$
8. **Step 8: Defuzzification via Center of Gravity (COG) Method:**
   Convert the composite fuzzy trapezoid into a crisp failure possibility score $X^* \in [0, 1]$:
   $$\boxed{X^* = \frac{-s_1 s_2 + s_3 s_4 + \frac{1}{3}(s_4 - s_3)^2 - \frac{1}{3}(s_2 - s_1)^2}{s_3 + s_4 - s_1 - s_2}}$$
9. **Step 9: Onisawa's Transformation to Human Error Probability:**
   Convert the defuzzified score $X^*$ into a quantitative probability:
   $$K = 2.301 \times \left( \frac{1 - X^*}{X^*} \right)^{1/3}$$
   $$\boxed{\text{HEP} = \frac{1}{10^K} = 10^{-K}}$$

---

## 3. Differences / Examples

### Crisp vs. Fuzzy Reliability Modeling
| Dimension | Traditional Classical Reliability | Fuzzy Set Human Reliability |
| :--- | :--- | :--- |
| **Input Data Source** | Large actuarial/empirical databases | Qualitative SME opinions |
| **Mathematical Nature** | Binary crisp probabilities ($P \in [0, 1]$) | Possibility distributions / membership grades |
| **Handling Subjectivity** | Ignored or forced into arbitrary distributions | Explicitly modeled via linguistic scales |
| **Consensus Mechanism** | Arithmetic mean or pooling | Weighted similarity, agreement, and credential vectors |

---

### Worked Numerical Tutorial: Checking Error in Overhead Crane Operation
Three experts evaluate an overhead crane operator's checking error ($E_1$):
- Expert 1 chooses **Very Poor**: $(0, 0, 0.1, 0.2)$
- Expert 2 chooses **Poor**: $(0.1, 0.2, 0.2, 0.3)$
- Expert 3 chooses **Very Poor**: $(0, 0, 0.1, 0.2)$

1. **Similarity Calculations:**
   - $S_{12} = 1 - \frac{|0-0.1| + |0-0.2| + |0.1-0.2| + |0.2-0.3|}{4} = 1 - \frac{0.50}{4} = 0.875$
   - $S_{13} = 1.000$ (identical responses)
   - $S_{23} = 0.875$
2. **Average Agreement ($AA_i$):**
   - $AA_1 = \frac{0.875 + 1.000}{2} = 0.9375$
   - $AA_2 = \frac{0.875 + 0.875}{2} = 0.8750$
   - $AA_3 = \frac{1.000 + 0.875}{2} = 0.9375$
   - $\sum AA_k = 0.9375 + 0.8750 + 0.9375 = 2.7500$
3. **Relative Agreement ($RA_i$):**
   - $RA_1 = \frac{0.9375}{2.75} \approx 0.3409$
   - $RA_2 = \frac{0.8750}{2.75} \approx 0.3182$
   - $RA_3 = \frac{0.9375}{2.75} \approx 0.3409$
4. **Expert Weighting ($W_i$ from Nikolaidis-Tsuda scores: $14, 9, 13$, sum $= 36$):**
   - $W_1 = \frac{14}{36} \approx 0.3889$, $W_2 = \frac{9}{36} = 0.2500$, $W_3 = \frac{13}{36} \approx 0.3611$
5. **Consensus Coefficients ($CC_i = 0.5 W_i + 0.5 RA_i$):**
   - $CC_1 = 0.5(0.3889 + 0.3409) \approx 0.3649$
   - $CC_2 = 0.5(0.2500 + 0.3182) \approx 0.2841$
   - $CC_3 = 0.5(0.3611 + 0.3409) \approx 0.3510$
6. **Aggregated Fuzzy Number ($\tilde{S}$):**
   $$\tilde{S} = (0.0284, 0.0568, 0.1284, 0.2284)$$
7. **Defuzzification (Center of Gravity):**
   $$X^* \approx 0.1085$$
8. **Onisawa Transformation to HEP:**
   $$K = 2.301 \times \left( \frac{1 - 0.1085}{0.1085} \right)^{1/3} = 2.301 \times (8.2166)^{1/3} = 2.301 \times 2.0179 \approx 4.643$$
   $$\text{HEP} = 10^{-4.643} \approx \mathbf{2.28 \times 10^{-5}}$$
   The quantitative probability of this checking error is approximately $2.3 \times 10^{-5}$ per operation.

---

## 4. Must Remember

- Fuzzy set theory provides a mathematically defensible method to quantify Human Error Probabilities when actuarial failure data is absent.
- The 7-point linguistic scale maps fuzzy subjective evaluations into trapezoidal membership numbers $(a_1, a_2, a_3, a_4)$.
- The expert consensus algorithm balances peer similarity ($RA_i$) with professional qualification weights ($W_i$):
  $$CC_i = 0.5 W_i + 0.5 RA_i$$
- Defuzzification converts the composite fuzzy trapezoid into a single crisp possibility score $X^*$ via the Center of Gravity (COG) formula.
- Onisawa's logarithmic transformation bridges subjective possibility $X^*$ to objective probability:
  $$\text{HEP} = 10^{-K}, \quad \text{where } K = 2.301 \left( \frac{1 - X^*}{X^*} \right)^{1/3}$$

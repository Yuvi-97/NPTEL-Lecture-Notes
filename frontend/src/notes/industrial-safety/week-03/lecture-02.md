# Week 3 – Lecture 2: FAULT TREE ANALYSIS (FTA)- Gate by Gate method

## 1. Key Concepts
- **Gate-by-Gate Method:** A direct, bottom-up quantitative calculation approach in Fault Tree Analysis where probabilities are evaluated sequentially from the lowest basic events upward through each logic gate until the Top Event probability is derived.
- **Independence Assumption:** The mathematical premise that all basic events inputting into a logic gate are mutually statistically independent ($P(A \cap B) = P(A) \cdot P(B)$).
- **Exact Probability vs. Rare Event Approximation:**
  - *Exact Formulation:* Applies rigorous set-theoretic probability laws to account for overlapping intersections.
  - *Rare Event Approximation (Union Bound):* An engineering simplification for low-probability events ($P_i < 0.1$) that sums probabilities directly, yielding a conservative upper bound.
- **The Repeated Event Limitation:** The critical structural failure of the gate-by-gate method when a single basic event appears in multiple branches of a fault tree, requiring alternative Boolean minimal cut set evaluation.

---

## 2. Important Points

### Mathematical Probability Equations by Logic Gate

#### 1. AND Gate Probability Formulation
For an AND gate with $n$ independent input events $X_1, X_2, \dots, X_n$:
$$P(\text{Output}) = P\left(\bigcap_{i=1}^{n} X_i\right) = \prod_{i=1}^{n} P(X_i) = P(X_1) \cdot P(X_2) \dots P(X_n)$$
- *Physical Meaning:* The probability of simultaneous failure across all redundant barriers is orders of magnitude smaller than any individual failure rate.

#### 2. OR Gate Exact Probability Formulation
For an OR gate with $n$ independent input events:
$$P(\text{Output}) = P\left(\bigcup_{i=1}^{n} X_i\right) = 1 - \prod_{i=1}^{n} \left(1 - P(X_i)\right)$$
- *For Two Events ($A, B$):*
  $$P(A \cup B) = P(A) + P(B) - P(A) \cdot P(B)$$
- *For Three Events ($A, B, C$):*
  $$P(A \cup B \cup C) = P(A) + P(B) + P(C) - [P(A)P(B) + P(B)P(C) + P(A)P(C)] + P(A)P(B)P(C)$$

#### 3. The Rare Event Approximation (Upper Bound)
When all basic event probabilities are sufficiently small ($P(X_i) < 0.1$ or $P_i \ll 1$), product terms ($P_i \cdot P_j$) become negligible, simplifying the OR gate equation to:
$$P(\text{Output}) \approx \sum_{i=1}^{n} P(X_i)$$
- *Safety Conservative Feature:* The rare event approximation always overestimates the exact probability ($P_{\text{approx}} \ge P_{\text{exact}}$), ensuring an engineering margin of safety.

### Fatal Limitation of the Gate-by-Gate Method
The gate-by-gate method produces erroneous mathematical results under two standard conditions:
1. **Repeated / Common Events:**
   - If basic event $A$ inputs into both Gate 1 and Gate 2, the gate-by-gate method computes Gate 1 and Gate 2 as independent variables.
   - When their outputs combine at an AND gate, the term $P(A) \cdot P(A) = P(A)^2$ is calculated instead of the Boolean identity $A \cdot A = A$ ($P(A)$), erroneously underestimating top event risk.
   - When combined at an OR gate, event $A$ is double-counted.
2. **Common Cause Failures (CCF):**
   - Environmental extremes (flooding, fires) or shared utilities affecting multiple components simultaneously invalidate the statistical independence assumption.

---

## 3. Differences / Examples

### Gate-by-Gate Calculation Example: Pressure Tank Subsystem
Consider the intermediate overpressure event $IE_1$ requiring continuous pumping ($IE_2$) **AND** relief valve failure ($BE_2$):
- *Basic Event Probabilities:*
  - Timer relay fails closed: $P(BE_3) = 0.02$
  - Pressure switch fails closed: $P(BE_4) = 0.03$
  - Pressure relief valve fails shut: $P(BE_2) = 0.01$
- **Step 1: Calculate $P(IE_2)$ at OR Gate (Timer OR Pressure Switch):**
  - *Exact Method:*
    $$P(IE_2) = P(BE_3) + P(BE_4) - [P(BE_3) \cdot P(BE_4)]$$
    $$P(IE_2) = 0.02 + 0.03 - (0.02 \times 0.03) = 0.05 - 0.0006 = 0.0494$$
  - *Rare Event Approximation:*
    $$P(IE_2) \approx 0.02 + 0.03 = 0.0500 \quad (\approx 1.2\% \text{ conservative error})$$
- **Step 2: Calculate $P(IE_1)$ at AND Gate ($IE_2$ AND $BE_2$):**
  $$P(IE_1) = P(IE_2) \cdot P(BE_2) = 0.0494 \times 0.01 = 0.000494 \quad (4.94 \times 10^{-4})$$

### Exact Calculation vs. Rare Event Approximation Across Probability Scales
| Input Event Probabilities ($P_1 = P_2$) | Exact OR Gate: $P_1 + P_2 - P_1 P_2$ | Rare Event Approx: $P_1 + P_2$ | Percentage Overestimation Error |
| :---: | :---: | :---: | :---: |
| **$P = 0.001$** | $0.001999$ | $0.002000$ | $+0.05\%$ *(negligible)* |
| **$P = 0.01$**  | $0.019900$ | $0.020000$ | $+0.50\%$ *(fully acceptable)* |
| **$P = 0.05$**  | $0.097500$ | $0.100000$ | $+2.56\%$ *(acceptable)* |
| **$P = 0.10$**  | $0.190000$ | $0.200000$ | $+5.26\%$ *(divergence begins)* |
| **$P = 0.30$**  | $0.510000$ | $0.600000$ | $+17.65\%$ *(invalidates approximation)* |

---

## 4. Must Remember
- The **Gate-by-Gate method** evaluates fault tree probabilities bottom-up through individual logic gates using standard probability formulas.
- For independent inputs: **AND gate** uses multiplication ($P_{\text{out}} = \prod P_i$); **OR gate** uses complementary multiplication ($P_{\text{out}} = 1 - \prod (1 - P_i)$).
- The **Rare Event Approximation** ($\sum P_i$ for OR gates) is valid only for low-probability events ($P_i < 0.1$), always producing a safe, conservative upper bound.
- The gate-by-gate method **fails completely if any basic event appears in multiple branches** of the tree due to violation of statistical independence.
- For fault trees containing repeated basic events, the **Cut-Set Method using Boolean algebra** must be used instead to prevent severe under- or over-estimation of risk.
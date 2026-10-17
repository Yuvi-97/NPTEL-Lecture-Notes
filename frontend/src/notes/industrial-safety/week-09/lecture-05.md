# Week 9 – Lecture 5: Human Error Quantification: Fuzzy Set Approach

## 1. Key Concepts
- **Fuzzy Set Theory (Lotfi Zadeh, 1965):** A mathematical framework designed to process imprecise, ambiguous, and subjective human reasoning where boundary conditions are gradual rather than binary ($0$ or $1$).
- **Linguistic Variables:** Variables whose values are qualitative words or phrases rather than numbers (e.g., "Very Low", "Low", "Moderate", "High", "Very High").
- **Membership Function ($\mu_A(x)$):** Maps each element in the universe of discourse to a real degree of belonging in $[0, 1]$.

## 2. Important Points
- **Fuzzy Numbers for Expert Assessment:**
  - **Triangular Fuzzy Number (TFN):** Defined by a triplet $A = (a_1, a_2, a_3)$ with peak membership $\mu=1$ at $a_2$.
  - **Trapezoidal Fuzzy Number:** Defined by a quadruplet $A = (a_1, a_2, a_3, a_4)$ with a flat interval of maximum belief between $a_2$ and $a_3$.
- **Quantification Workflow:**
  1. Solicit subjective expert assessments using standardized linguistic terms for task failure likelihood.
  2. Map linguistic judgments into corresponding fuzzy membership scales.
  3. Aggregate opinions across multiple experts using weighted competency factors:
     $$A_{\text{agg}} = \sum_{k=1}^m w_k \cdot A_k$$
  4. Perform **Defuzzification** to convert the aggregated fuzzy number into a crisp value ($X^*$) via the **Center of Area (Centroid)** method:
     $$X^* = \frac{\int x \cdot \mu_A(x) \, dx}{\int \mu_A(x) \, dx}$$
  5. Convert the crisp score $X^*$ into a quantitative Human Error Probability (HEP) using logarithmic transformation functions (e.g., Onisawa's formula).

## 3. Differences / Examples
| Parameter | Classical Probability | Fuzzy Set Quantification |
| :--- | :--- | :--- |
| **Data Requirement** | Large statistical sample of empirical failures | Expert subjective qualitative opinions |
| **Logic Basis** | Crisp Boolean set theory ($x \in A$ or $x \notin A$) | Continuous membership degree ($\mu_A(x) \in [0, 1]$) |
| **Suitability** | Standard mechanical components | Rare, highly variable human cognitive operations |

## 4. Must Remember
- Fuzzy quantification bridges the gap when statistical failure databases for rare human operational errors do not exist.
- Expert weighting accounts for differences in job experience, educational background, and operational familiarity.

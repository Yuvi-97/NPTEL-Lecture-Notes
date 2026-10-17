# Week 9 – Lecture 4: Human Reliability Assessment

## 1. Key Concepts
- **Human Reliability:** The probability that a person will correctly perform a system-required activity within a specified required time frame and perform no extraneous activity that degrades system function ($R_H = 1 - \text{HEP}$).
- **Human Error Probability (HEP):** The fundamental quantitative metric in HRA:
  $$\text{HEP} = \frac{\text{Number of human errors occurred}}{\text{Total number of opportunities for error}}$$
- **Performance Shaping Factors (PSFs):** Environmental, organizational, interface, and personal variables that degrade or enhance human performance (e.g., fatigue, high temperature, time stress, training quality).

## 2. Important Points
- **THERP (Technique for Human Error Rate Prediction - Swain & Guttman, 1983):**
  - First-generation HRA technique developed for the US Nuclear Regulatory Commission (NUREG/CR-1278).
  - Uses an **HRA Event Tree** to map sequential correct vs. incorrect actions.
  - Takes **Nominal HEPs** from standardized data tables.
  - Adjusts nominal HEPs by multiplying with PSF multipliers.
  - Accounts for **task dependency levels** between consecutive actions (Zero, Low, Moderate, High, Complete dependency equations).
- **HEART (Human Error Assessment and Reduction Technique - Williams, 1986):**
  - Fast, practical HRA tool based on 9 Generic Task Types (GTTs), each with a nominal baseline unreliability (e.g., completely unfamiliar task = $0.55$; routine highly practiced task = $0.0004$).
  - Evaluates up to 38 Error Producing Conditions (EPCs).
  - Multiplies baseline by assessed proportion of affect:
    $$\text{Task HEP} = \text{Baseline HEP} \times \prod [(\text{EPC Maximum Effect} - 1) \times \text{Assessed Proportion} + 1]$$

## 3. Differences / Examples
| HRA Method | Basis / Origin | Modeling Structure | Primary Application |
| :--- | :--- | :--- | :--- |
| **THERP** | Swain & Guttman (1983) / US NRC | HRA Event Tree with dependency levels | Nuclear & high-hazard plants |
| **HEART** | J. C. Williams (1986) | Generic tasks $\times$ Error Producing Conditions | Chemical, rail, and aviation |

## 4. Must Remember
- Total human task success is bounded by dependency: if an operator fails Step 1, the probability of failing Step 2 drastically increases.
- In THERP, dependency ranges from **Zero Dependency** ($P(B|A) = P(B)$) to **Complete Dependency** ($P(B|A) = 1.0$).

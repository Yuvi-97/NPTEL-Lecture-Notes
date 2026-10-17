# Week 8 – Lecture 5: Systems Safety Quantification: Tutorial

## 1. Key Concepts
- **System Safety Tutorial:** A numerical exam-focused tutorial session (led by Souvik Das) demonstrating quantitative unavailability computation for industrial safety systems.
- **Tail Gas Quench and Clean-Up System:** An industrial process plant subsystem used to treat off-gases, containing pumps, quench towers, valves, and water supplies.
- **Top Event (TE):** Unavailability / complete failure of the tail gas quench and clean-up operation, leading to toxic gas emission.

## 2. Important Points
- **Step-by-Step Problem Solving Methodology:**
  1. **Identify the Fault Tree Structure:** Trace logic gates from the top event down to the basic component failures ($A, B, C, D, \dots$).
  2. **Extract Minimal Cut Sets (MCS):** Apply Boolean reduction to find the independent combinations of component failures causing TE:
     $$\text{Top Event} = MCS_1 \cup MCS_2 \cup \dots \cup MCS_k$$
  3. **Compute Probability for Each Cut Set:** For independent basic events:
     $$P(MCS_j) = \prod_{i \in MCS_j} q_i$$
     Where $q_i$ is the unreliability/unavailability of basic event $i$.
  4. **Calculate Total System Unavailability ($Q_0$):**
     - *Rare Event Approximation (Upper Bound):*
       $$Q_0 \approx \sum_{j=1}^k P(MCS_j) \quad (\text{accurate when each } q_i \ll 0.1)$$
     - *Inclusion-Exclusion Principle (Exact):*
       $$Q_0 = \sum P(MCS_j) - \sum_{j < l} P(MCS_j \cap MCS_l) + \dots$$
- **Engineering Insights:** Components that appear alone in order-1 minimal cut sets dominate system unavailability and require redundant backups.

## 3. Differences / Examples
| Calculation Method | Formula | Precision | Suitability |
| :--- | :--- | :--- | :--- |
| **Rare Event Approximation** | $\sum P(MCS_j)$ | Slightly overestimates unavailability | Quick manual calculations in NPTEL exams |
| **Inclusion-Exclusion** | Alternating sum of joint intersections | Exact mathematical value | Rigorous computational safety software |

## 4. Must Remember
- When basic event probabilities are small ($q_i < 10^{-2}$), the rare event approximation is virtually identical to the exact solution.
- Order-1 cut sets contribute orders of magnitude more to total system unavailability than order-2 or order-3 cut sets.

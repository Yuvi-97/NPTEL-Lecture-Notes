# Week 3 – Lecture 5: Fault Tree Analysis (FTA) - Important Measures

## 1. Key Concepts
- **Importance Measures:** Quantitative metrics used in Fault Tree Analysis to rank basic events and components based on their individual contributions to system unreliability or overall Top Event risk.
- **Birnbaum Importance Measure ($I^B(i)$):** Measures the rate at which system unreliability increases with respect to the unreliability of component $i$:
  $$I^B(i) = \frac{\partial Q_0}{\partial Q_i} = Q_0(Q_i = 1) - Q_0(Q_i = 0)$$
  It reflects the difference between the Top Event probability when component $i$ is guaranteed to fail ($Q_i=1$) versus when it is 100% reliable ($Q_i=0$).
- **Fussell-Vesely (FV) Importance Measure ($I^{FV}(i)$):** Measures the fractional contribution of component $i$ to the Top Event probability. It calculates the ratio of the probability that at least one cut-set containing component $i$ fails, divided by the total Top Event probability $Q_0$:
  $$I^{FV}(i) \approx \frac{\sum_{j: i \in MCS_j} P(MCS_j)}{Q_0}$$

## 2. Important Points
- **Risk Reduction Factor (RRF) / Risk Decrease Factor:**
  - Indicates how much total system risk is reduced if component $i$ is made completely failure-free ($Q_i = 0$):
    $$RRF_i = \frac{Q_0}{Q_0(Q_i = 0)}$$
  - High RRF highlights components that yield the highest safety return when redesigned for reliability.
- **Risk Increase Factor (RIF) / Risk Achievement Worth (RAW):**
  - Measures how much the Top Event probability surges if component $i$ remains failed or is unavailable ($Q_i = 1$):
    $$RIF_i = \frac{Q_0(Q_i = 1)}{Q_0}$$
  - Identifies mission-critical components that must never be taken offline during operations.
- **Time Dependency:** Importance measures vary with operating time $t$ because basic event failure probabilities ($Q_i(t)$) change over operating cycles.

## 3. Differences / Examples
| Measure | Focus / Purpose | Sensitivity Type |
| :--- | :--- | :--- |
| **Birnbaum ($I^B$)** | Sensitivity of total system failure to changes in component unreliability | System structure & component placement |
| **Fussell-Vesely ($I^{FV}$)** | Proportion of system failures caused by cut-sets containing component $i$ | Probability-weighted actual contribution |
| **Risk Reduction Factor (RRF)** | Safety benefit gained if a component is made 100% reliable | Prioritizing reliability upgrades |
| **Risk Increase Factor (RIF)** | Safety degradation incurred if a component fails or is omitted | Maintenance and online testing priority |

## 4. Must Remember
- **Software Computation:** Complex industrial fault trees evaluate minimal cut-sets and importance rankings using specialized safety software such as **RAM Commander**.
- **Birnbaum Measure Independence:** $I^B(i)$ is structurally independent of component $i$'s own failure probability $Q_i$; it depends only on the reliability of the other components in the system.
- Component prioritization enables cost-effective maintenance by directing safety resources toward the highest-ranked basic events.

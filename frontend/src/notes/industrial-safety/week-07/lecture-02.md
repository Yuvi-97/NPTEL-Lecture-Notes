# Week 7 – Lecture 2: Quantification of Basic Events For Repairable Components

## 1. Key Concepts
- **Point Availability ($A(t)$):** The probability that a repairable component is operating successfully at a specific point in time $t$.
- **Point Unavailability ($Q(t)$):** The probability that a repairable component is in a failed state or undergoing active repair at time $t$:
  $$A(t) + Q(t) = 1 \implies Q(t) = 1 - A(t)$$
- **Steady-State / Asymptotic Availability ($A_\infty$):** The long-term fraction of time that the system is operational as operating hours approach infinity ($t \to \infty$).

## 2. Important Points
- **Steady-State Availability Formulations:**
  - Ratio of operational uptime to total cycle time:
    $$A_\infty = \lim_{t \to \infty} A(t) = \frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}}$$
  - In terms of constant failure rate $\lambda$ and constant repair rate $\mu$:
    $$A_\infty = \frac{1/\lambda}{1/\lambda + 1/\mu} = \frac{\mu}{\lambda + \mu}$$
- **Steady-State Unavailability ($Q_\infty$):**
  $$Q_\infty = \lim_{t \to \infty} Q(t) = \frac{\text{MTTR}}{\text{MTTF} + \text{MTTR}} = \frac{\lambda}{\lambda + \mu}$$
- **Mean Time Between Failures (MTBF):**
  - Total elapsed time between consecutive breakdown incidents:
    $$\text{MTBF} = \text{MTTF} + \text{MTTR} = \frac{1}{\lambda} + \frac{1}{\mu}$$
- **Conditional vs. Unconditional Rates:** Conditional rates measure transition probabilities given the component is currently up/down; unconditional rates measure overall occurrence frequency per calendar hour.

## 3. Differences / Examples
| Metric | Non-Repairable Systems | Repairable Systems |
| :--- | :--- | :--- |
| **Primary Metric** | Reliability $R(t)$ (monotonically decreases to 0) | Availability $A(t)$ (reaches steady-state equilibrium $A_\infty > 0$) |
| **End State** | Permanently dead after first failure | Restored to service repeatedly |
| **Time Horizon** | Analyzed up to first failure | Analyzed across recurring operational lifecycles |

## 4. Must Remember
- Reference text: **Kumamoto & Henley** (*Probabilistic Risk Assessment*).
- While Reliability $R(t) \to 0$ as $t \to \infty$, Availability $A(t)$ stabilizes at a constant non-zero value: $\frac{\mu}{\lambda + \mu}$.
- Maximizing availability requires either lowering the failure rate $\lambda$ or accelerating the repair rate $\mu$.

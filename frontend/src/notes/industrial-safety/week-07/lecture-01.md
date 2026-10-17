# Week 7 – Lecture 1: Quantification of Basic Events: Failure to Repair Process

## 1. Key Concepts
- **Repairable Component:** An industrial component or subsystem that, upon failure, is restored to operating condition through repair, servicing, or parts overhaul rather than being permanently discarded.
- **Combined Process:** The alternating continuous lifecycle consisting of the **repair-to-failure process** (operating/up-time) and the **failure-to-repair process** (maintenance/down-time).
- **Maintainability ($G(t)$):** The cumulative probability that a failed item is successfully returned to operational status within a specified repair duration $t$:
  $$G(t) = P(T_{\text{repair}} \le t)$$

## 2. Important Points
- **Repair Time Distributions:**
  - Repair time ($T_{\text{repair}}$) is a continuous random variable characterized by:
    - Probability Density Function (PDF): $g(t) = \frac{dG(t)}{dt}$
    - Maintainability Function: $G(t) = \int_0^t g(u) \, du$
- **Repair Rate / Repair Intensity ($\mu(t)$):**
  - The conditional probability per unit time that a repair action is completed in $[t, t + \Delta t]$, given that repair is still ongoing at time $t$:
    $$\mu(t) = \frac{g(t)}{1 - G(t)}$$
- **Exponential Repair Distribution:**
  - If repair actions have a constant repair rate $\mu(t) = \mu$:
    $$G(t) = 1 - e^{-\mu t}, \quad g(t) = \mu e^{-\mu t}$$
- **Mean Time to Repair (MTTR):**
  - The expected duration of a repair action:
    $$\text{MTTR} = \int_0^\infty [1 - G(t)] \, dt = \frac{1}{\mu} \quad (\text{for constant } \mu)$$

## 3. Differences / Examples
| Parameter | Failure Process (Operating) | Repair Process (Maintenance) |
| :--- | :--- | :--- |
| **Random Variable** | Operating time to failure ($T$) | Duration of repair downtime ($T_{\text{repair}}$) |
| **Probability Function** | Unreliability $F(t) = P(T \le t)$ | Maintainability $G(t) = P(T_{\text{repair}} \le t)$ |
| **Transition Rate** | Failure rate / Hazard rate $\lambda(t)$ | Repair rate $\mu(t)$ |
| **Mean Value** | Mean Time To Failure ($\text{MTTF} = 1/\lambda$) | Mean Time To Repair ($\text{MTTR} = 1/\mu$) |

## 4. Must Remember
- Repairable systems cycle repeatedly between operating and failed states.
- High maintainability requires reducing MTTR through modular component design, readily available spare parts, and trained technicians.

# Week 7 – Lecture 3: Quantification of Basic Events: Failure & Repair Intensities

## 1. Key Concepts
- **Unconditional Failure Intensity ($w(t)$):** The unconditional probability per unit time that a repairable component experiences a failure at instant $t$, regardless of its prior operational history.
- **Unconditional Repair Intensity ($v(t)$):** The unconditional probability per unit time that a failed component completes its repair and returns to service at instant $t$.
- **Expected Number of Transitions ($W(t), V(t)$):** Cumulative counts of failure and repair incidents occurring across the operating interval $[0, t]$.

## 2. Important Points
- **Mathematical Formulations for Intensities:**
  - Unconditional failure intensity equals failure rate times availability:
    $$w(t) = \lambda(t) \cdot A(t) = \lambda \cdot A(t) \quad (\text{for constant } \lambda)$$
  - Unconditional repair intensity equals repair rate times unavailability:
    $$v(t) = \mu(t) \cdot Q(t) = \mu \cdot Q(t) \quad (\text{for constant } \mu)$$
- **Steady-State Intensity Equilibrium ($t \to \infty$):**
  - In long-term equilibrium, the failure frequency equals the repair frequency:
    $$w_\infty = v_\infty = \lambda A_\infty = \mu Q_\infty = \frac{\lambda \mu}{\lambda + \mu}$$
- **Cumulative Expected Counts:**
  - Expected number of failures in $[0, t]$:
    $$W(t) = \int_0^t w(u) \, du \approx w_\infty \cdot t \quad (\text{for large } t)$$
  - Expected number of repairs in $[0, t]$:
    $$V(t) = \int_0^t v(u) \, du \approx v_\infty \cdot t \quad (\text{for large } t)$$

## 3. Differences / Examples
| Parameter | Conditional Rate ($\lambda(t), \mu(t)$) | Unconditional Intensity ($w(t), v(t)$) |
| :--- | :--- | :--- |
| **Conditioning** | Conditioned on current operational state | Unconditioned; measures transitions per calendar unit time |
| **Relation** | Component intrinsic transition rate | Weighted by state probability ($w = \lambda A$, $v = \mu Q$) |
| **Steady-State Value** | Fixed constants $\lambda$ and $\mu$ | Equalized rate: $w_\infty = v_\infty = \frac{\lambda \mu}{\lambda + \mu}$ |

## 4. Must Remember
- In the steady state, the rate at which items break down ($w_\infty$) is mathematically identical to the rate at which items are restored ($v_\infty$).
- Failure intensity $w(t)$ is directly proportional to availability $A(t)$, whereas repair intensity $v(t)$ is directly proportional to unavailability $Q(t)$.

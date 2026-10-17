# Week 6 – Lecture 1: Quantification of Basic Events for Non-repairable Components

## 1. Key Concepts
- **Non-repairable Components:** Systems or parts that are permanently discarded and replaced upon failure (e.g., light bulbs, semiconductor chips, burst rupture disks).
- **Time to Failure ($T$):** A continuous random variable representing the operational lifespan before the first breakdown.
- **Reliability Function ($R(t)$):** The probability that a component functions without failure throughout the time interval $[0, t]$:
  $$R(t) = P(T > t)$$
- **Unreliability / Failure Distribution ($F(t)$):** The cumulative probability that a component fails on or before time $t$:
  $$F(t) = P(T \le t) = 1 - R(t)$$

## 2. Important Points
- **Failure Probability Density Function ($f(t)$):**
  - Defines the rate of change of failure probability per unit time:
    $$f(t) = \frac{dF(t)}{dt} = -\frac{dR(t)}{dt}$$
  - Fundamental mathematical relationships:
    $$F(t) = \int_0^t f(u) \, du, \quad R(t) = \int_t^\infty f(u) \, du$$
- **Mean Time to Failure (MTTF):**
  - Expected operational life of a non-repairable unit:
    $$\text{MTTF} = E[T] = \int_0^\infty t f(t) \, dt = \int_0^\infty R(t) \, dt$$
- **Variance of Time to Failure ($\sigma^2$):**
  $$\sigma^2 = E[T^2] - (E[T])^2 = \int_0^\infty t^2 f(t) \, dt - \text{MTTF}^2$$

## 3. Differences / Examples
| Metric | Mathematical Form | Physical Meaning | Boundary Values |
| :--- | :--- | :--- | :--- |
| **Reliability $R(t)$** | $P(T > t) = 1 - F(t)$ | Probability of surviving up to time $t$ | $R(0) = 1, \; R(\infty) = 0$ |
| **Unreliability $F(t)$** | $P(T \le t) = \int_0^t f(u)du$ | Cumulative probability of failure by time $t$ | $F(0) = 0, \; F(\infty) = 1$ |
| **Failure Density $f(t)$** | $dF(t)/dt$ | Instantaneous failure likelihood density | $\int_0^\infty f(t)dt = 1$ |

## 4. Must Remember
- Reference texts: **Kumamoto & Henley** and **Trivedi & Bobbio** (*Reliability and Availability Engineering*).
- For all reliability functions, $R(t) + F(t) = 1$ at any operating instant $t$.
- For non-repairable units, MTTF represents the total operational lifetime since components are not restored.

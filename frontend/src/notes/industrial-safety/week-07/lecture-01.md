# Week 7 – Lecture 1: Quantification of Basic Events: Failure to Repair Process

## 1. Key Concepts

### The Alternating Renewal Process for Repairable Systems
- **Repairable Component:** An industrial component or system which, upon failure, is not discarded but restored to an operational state through maintenance or repair actions (e.g., centrifugal pumps, control valves, compressors, electric motors, pressure vessels).
- **The Up-Down Lifecycle:** The dynamic operational history of a repairable system is characterized by an alternating sequence of operating ("Up" or normal) states and downtime ("Down" or repair) states:
  $$\text{Normal (Up State)} \xrightleftharpoons[\text{Repair Process (TTR)}]{\text{Failure Process (TTF)}} \text{Failed (Down State)}$$
- **Isolating the Repair Process:** To formulate the statistical parameters of restoration, the time origin is shifted to the instant of failure ($t = 0$). Analysis focuses strictly on the downtime interval required to restore the failed unit to the "as-good-as-new" operating condition.
- **Time to Repair ($Y$ or $\text{TTR}$):** A continuous, non-negative random variable ($Y > 0$) representing the duration from the initiation of repair until maintenance is completed and the unit returns to service.

---

## 2. Important Points

### 1. Fundamental Repair Process Metrics
For a population of $N$ identical failed components whose repair commences at time $t = 0$:

1. **Cumulative Repair Distribution ($G(t)$):**
   - The probability that a component whose restoration begins at $t = 0$ is successfully repaired on or before time $t$:
     $$G(t) = P(Y \le t)$$
   - Boundary values:
     $$G(0) = 0, \quad \lim_{t \to \infty} G(t) = 1.0$$
   - Discrete empirical estimator from maintenance records:
     $$G(t) = \frac{M(t)}{N}$$
     where $M(t)$ is the cumulative count of units repaired by time $t$, and $N$ is the total initial failed sample.
2. **Probability of Being Under Repair ($1 - G(t)$):**
   - The probability that the restoration action is still ongoing at time $t$:
     $$P(Y > t) = 1 - G(t) = \frac{N - M(t)}{N}$$
3. **Repair Probability Density Function ($g(t)$):**
   - The rate of completing repair per unit time:
     $$g(t) = \frac{dG(t)}{dt} = \lim_{\Delta t \to 0} \frac{G(t + \Delta t) - G(t)}{\Delta t}$$
   - Integral relationships:
     $$G(t) = \int_0^t g(u) \, du, \quad \int_0^\infty g(t) \, dt = 1.0$$
   - Probability of repair completion within time interval $[t_1, t_2]$:
     $$P(t_1 < Y \le t_2) = G(t_2) - G(t_1) = \int_{t_1}^{t_2} g(u) \, du$$
   - Discrete empirical estimator:
     $$g(t) \approx \frac{M(t + \Delta t) - M(t)}{N \cdot \Delta t}$$
4. **Repair Rate / Instantaneous Restoration Rate ($\mu(t)$ or $m(t)$):**
   - The conditional probability per unit time that repair is completed in interval $[t, t + \Delta t]$, given that repair was not completed by time $t$:
     $$\mu(t) = \lim_{\Delta t \to 0} \frac{P(t < Y \le t + \Delta t \mid Y > t)}{\Delta t} = \frac{g(t)}{1 - G(t)}$$
   - Relationship to repair distribution:
     $$\mu(t) = -\frac{d}{dt}\left[\ln(1 - G(t))\right] \iff 1 - G(t) = \exp\left(-\int_0^t \mu(u) \, du\right)$$

---

### 2. Mean Time to Repair (MTTR)
- **Mathematical Definition:** The expected duration of downtime required to repair a failed unit, defined as the first moment of random variable $Y$:
  $$\text{MTTR} = E[Y] = \int_0^\infty t g(t) \, dt$$
- **Integration by Parts Formulation:**
  $$\text{MTTR} = \int_0^\infty [1 - G(t)] \, dt$$
  The MTTR is geometrically equal to the total area under the $1 - G(t)$ survival curve of the repair process.
- **Discrete Midpoint Numerical Integration:**
  $$\text{MTTR} \approx \sum_{i=1}^k t_i^{\text{mid}} \cdot g(t_i) \cdot \Delta t_i$$
  where $t_i^{\text{mid}} = \frac{t_{i-1} + t_i}{2}$.

---

### 3. Parametric Repair Distributions
- While the exponential distribution is often assumed for constant repair rate ($\mu(t) = \mu$), empirical maintenance studies demonstrate that repair times are typically positively skewed with a long tail (representing rare, complex troubleshooting delays).
- The **Log-Normal distribution** is the standard parametric distribution adopted in industrial practice for modeling Time to Repair (TTR).

---

## 3. Differences / Examples

### 1-to-1 Mathematical Duality: Failure Process vs. Repair Process
| Attribute / Dimension | Failure Process (Non-Repairable) | Repair Process (Restoration) |
| :--- | :--- | :--- |
| **Random Variable** | Lifespan $X$ or $T$ (Time to Failure) | Downtime $Y$ (Time to Repair) |
| **Origin Reference ($t = 0$)** | Newly manufactured unit starts operating | Failed unit begins maintenance overhaul |
| **Cumulative Metric** | Unreliability $F(t) = P(T \le t)$ | Repair Distribution $G(t) = P(Y \le t)$ |
| **Survival Metric** | Reliability $R(t) = P(T > t) = 1 - F(t)$ | Still Under Repair $1 - G(t) = P(Y > t)$ |
| **Probability Density** | Failure Density $f(t) = \frac{dF(t)}{dt}$ | Repair Density $g(t) = \frac{dG(t)}{dt}$ |
| **Conditional Rate** | Hazard Rate $h(t) = \frac{f(t)}{R(t)}$ | Repair Rate $\mu(t) = \frac{g(t)}{1 - G(t)}$ |
| **Expected Value** | $\text{MTTF} = \int_0^\infty R(t) dt$ | $\text{MTTR} = \int_0^\infty [1 - G(t)] dt$ |

---

### Worked Numerical Tutorial: Discrete Repair Analysis ($N = 15$ Failed Units)
In an industrial workshop test, $N = 15$ identical failed mechanical seals are overhauled starting simultaneously at $t = 0$:
- **TTR Records (hours, sorted):** $0.5, 0.8, 1.1, 1.2, 1.8, 2.1, 2.4, 2.9, 3.2, 3.8, 4.1, 4.6, 5.2, 5.8, 6.3$.
- **Interval Grouping ($\Delta t = 0.5$ hr):**
  - **At $t = 0.5$ hr:** $M(0.5) = 1 \implies G(0.5) = \frac{1}{15} \approx 0.0667$.
  - **At $t = 1.0$ hr:** $M(1.0) = 2 \implies G(1.0) = \frac{2}{15} \approx 0.1333$.
  - **Density in $[0.5, 1.0]$:** $g(0.75) = \frac{2 - 1}{15 \times 0.5} = \frac{1}{7.5} \approx 0.1333 \text{ hr}^{-1}$.
  - **At $t = 6.5$ hr:** All 15 units completed repair $\implies G(6.5) = 1.0$.
- **Numerical MTTR Computation:**
  $$\text{MTTR} \approx \sum t_i^{\text{mid}} g(t_i) \Delta t_i \approx (0.25 \times 0.1333 \times 0.5) + \dots + (6.25 \times 0.27 \times 0.5) \approx 3.01 \text{ hours}$$
  On average, a failed component requires approximately $3.0$ hours of active maintenance to be restored to operation.

---

## 4. Must Remember

- The repair process is mathematically isomorphic to the failure process: $G(t) \leftrightarrow F(t)$, $1 - G(t) \leftrightarrow R(t)$, $g(t) \leftrightarrow f(t)$, and $\mu(t) \leftrightarrow h(t)$.
- Mean Time to Repair (MTTR) represents the expected downtime duration and equals the area under the repair survival curve:
  $$\text{MTTR} = \int_0^\infty [1 - G(t)] \, dt$$
- The repair rate $\mu(t)$ is a conditional intensity conditioned on the repair not having completed prior to time $t$:
  $$\mu(t) = \frac{g(t)}{1 - G(t)}$$
- For calculating repair density $g(t)$ from maintenance interval data, always normalize by interval width: $g(t) \approx \frac{\Delta M}{N \cdot \Delta t}$.
- The Log-Normal distribution is the preferred parametric model for empirical time-to-repair data due to the positive skewness of maintenance troubleshooting times.

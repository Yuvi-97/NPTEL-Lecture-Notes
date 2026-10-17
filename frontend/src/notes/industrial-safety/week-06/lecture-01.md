# Week 6 – Lecture 1: Quantification of Basic Events for Non-repairable Components

## 1. Key Concepts

### Basic Events in System Safety Quantification
- **System Breakdown Structure:** In system safety quantification (such as Fault Tree Analysis), an industrial installation is systematically decomposed down the structural hierarchy:
  $$\text{Plant} \longrightarrow \text{Systems} \longrightarrow \text{Sub-systems} \longrightarrow \text{Components} \longrightarrow \text{Parts}$$
- **Fault Tree Basic Events:** The terminal leaf nodes of a fault tree represent component- or part-level failure events (e.g., pressure gauge rupture, spring-loaded safety relief valve failure to open, motor switch contact weld). Basic event quantification provides the fundamental probability inputs needed to evaluate top event probability and system reliability.
- **Non-repairable Components:** Industrial devices or parts that are permanently discarded upon failure and replaced by a brand-new unit ("use-and-throw" policy). 
  - Examples include burst rupture discs, semiconductor electronic chips, light bulbs, fuse links, and structural bolts.
  - State transitions are strictly unidirectional:
    $$\text{Normal State} \xrightarrow{\text{Failure}} \text{Failed State}$$
    Unlike repairable units, there is no transition from the failed state back to the operational state.
- **Time to Failure ($T$ or $X$):** A continuous random variable representing the operational lifespan of a non-repairable unit before experiencing its first breakdown ($T > 0$). Because failure occurs unpredictably, $T$ is governed by a continuous probability distribution.

---

## 2. Important Points

### 1. Fundamental Reliability and Failure Metrics
For a population of identical non-repairable components put into service at time $t = 0$:

1. **Cumulative Distribution Function / Unreliability ($F(t)$):**
   - The probability that a component experiences failure on or before operational time $t$:
     $$F(t) = P(T \le t)$$
   - Boundary conditions:
     $$F(0) = 0, \quad \lim_{t \to \infty} F(t) = 1$$
   - Empirical estimation from a life-testing test of $N$ identical units:
     $$F(t) = \frac{n(t)}{N}$$
     where $n(t)$ is the cumulative number of units that have failed by time $t$, and $N$ is the total initial sample size.

2. **Reliability / Survival Function ($R(t)$):**
   - The probability that a component functions without failure throughout the entire interval $[0, t]$:
     $$R(t) = P(T > t) = 1 - F(t)$$
   - Boundary conditions:
     $$R(0) = 1, \quad \lim_{t \to \infty} R(t) = 0$$
   - Empirical estimation:
     $$R(t) = \frac{C(t)}{N} = \frac{N - n(t)}{N}$$
     where $C(t) = N - n(t)$ is the number of units surviving at time $t$.
   - Universal conservation property:
     $$R(t) + F(t) = 1 \quad \forall t \ge 0$$

3. **Probability of Failure within a Time Interval $[t, t + \Delta t]$:**
   - The probability that failure occurs between time $t$ and $t + \Delta t$:
     $$P(t < T \le t + \Delta t) = F(t + \Delta t) - F(t) = R(t) - R(t + \Delta t)$$

4. **Failure Probability Density Function ($f(t)$):**
   - Represents the unconditional rate of failure per unit time:
     $$f(t) = \lim_{\Delta t \to 0} \frac{F(t + \Delta t) - F(t)}{\Delta t} = \frac{dF(t)}{dt} = -\frac{dR(t)}{dt}$$
   - Integral relationships:
     $$F(t) = \int_0^t f(u) \, du, \quad R(t) = \int_t^\infty f(u) \, du, \quad \int_0^\infty f(t) \, dt = 1$$
   - Discrete empirical estimator from life test data:
     $$f(t) \approx \frac{n(t + \Delta t) - n(t)}{N \cdot \Delta t}$$
     > **Critical Examination Caution:** When calculating $f(t)$ from life-testing tables where time steps change (e.g., from $\Delta t = 1$ to $\Delta t = 5$), one **must divide by $\Delta t$**, not just the initial sample size $N$. Omitting $\Delta t$ causes severe calculation errors.

---

### 2. Mean Time to Failure (MTTF) and Lifespan Moments
- **Definition:** The expected operational life of a non-repairable component, defined mathematically as the first moment ($n = 1$) of the random variable $T$:
  $$\text{MTTF} = E[T] = \int_0^\infty t f(t) \, dt$$
- **Integration by Parts Simplification:**
  $$\int_0^\infty t f(t) \, dt = \left[ -t R(t) \right]_0^\infty + \int_0^\infty R(t) \, dt = \int_0^\infty R(t) \, dt$$
  $$\text{MTTF} = \int_0^\infty R(t) \, dt$$
  The MTTF of a non-repairable unit is geometrically equal to the total area under its reliability curve $R(t)$.
- **Numerical Midpoint Computation:**
  In life-testing discrete datasets, MTTF is calculated by numerical integration using interval midpoints:
  $$\text{MTTF} \approx \sum_{i=1}^k t_i^{\text{mid}} \cdot f(t_i) \cdot \Delta t_i$$
  where $t_i^{\text{mid}} = \frac{t_{i-1} + t_i}{2}$.

---

### 3. Introduction to Hazard Rate ($h(t)$ or $r(t)$)
- **Conditional Failure Rate:** While $f(t)$ measures unconditional failure likelihood relative to the original population $N$, the hazard rate $h(t)$ measures failure likelihood per unit time **conditioned on the unit having survived up to time $t$**:
  $$h(t) = \lim_{\Delta t \to 0} \frac{P(t < T \le t + \Delta t \mid T > t)}{\Delta t} = \frac{f(t)}{R(t)}$$
- **Mathematical Link to Reliability:**
  $$h(t) = \frac{-\frac{dR(t)}{dt}}{R(t)} = -\frac{d}{dt}\left[\ln R(t)\right]$$
  Integrating both sides yields:
  $$R(t) = \exp\left(-\int_0^t h(u) \, du\right)$$
- **Bathtub Curve Regimes:**
  - **Decreasing Failure Rate (DFR):** Infant mortality / burn-in period.
  - **Constant Failure Rate (CFR):** Useful life / random failures ($h(t) = \text{constant}$).
  - **Increasing Failure Rate (IFR):** Wear-out / aging degradation.

---

## 3. Differences / Examples

### Metric Comparison Table
| Metric | Symbol | Mathematical Formulation | Normalization Base | Boundary Values |
| :--- | :--- | :--- | :--- | :--- |
| **Reliability** | $R(t)$ | $P(T > t) = 1 - F(t) = \int_t^\infty f(u)du$ | Total initial units ($N$) | $R(0) = 1.0, \; R(\infty) = 0$ |
| **Unreliability (CDF)** | $F(t)$ | $P(T \le t) = \int_0^t f(u)du$ | Total initial units ($N$) | $F(0) = 0.0, \; F(\infty) = 1.0$ |
| **Failure Density** | $f(t)$ | $\frac{dF(t)}{dt} = -\frac{dR(t)}{dt}$ | Total initial units ($N \cdot \Delta t$) | $\int_0^\infty f(t)dt = 1.0$ |
| **Hazard Rate** | $h(t)$ | $\frac{f(t)}{R(t)} = -\frac{d}{dt}\ln R(t)$ | **Surviving units** at $t$ ($C(t) \cdot \Delta t$) | $h(t) \ge 0$ |

---

### Worked Numerical Example: Life-Testing Data ($N = 1050$ Identical Valves)
Consider an industrial life-testing experiment where $N = 1050$ identical non-repairable control valves are placed on test at $t = 0$:

1. **At $t = 0$ months:**
   - Surviving count $C(0) = 1050$.
   - $R(0) = \frac{1050}{1050} = 1.0$, $F(0) = 1 - 1.0 = 0$.
2. **At $t = 1$ month ($\Delta t = 1$):**
   - Surviving count $C(1) = 1020$ (30 valves failed).
   - $R(1) = \frac{1020}{1050} \approx 0.9714$.
   - $F(1) = \frac{30}{1050} \approx 0.0286$.
   - $f(0.5) = \frac{30}{1050 \times 1} \approx 0.0286 \text{ month}^{-1}$.
3. **At $t = 75$ months ($\Delta t = 5$ months for later intervals):**
   - Surviving count $C(75) = 180$.
   - $R(75) = \frac{180}{1050} \approx 0.1714$.
   - $F(75) = 1 - 0.1714 = 0.8286$.
4. **Numerical MTTF Midpoint Calculation:**
   $$\text{MTTF} \approx (0.5 \times 0.0286 \times 1) + \dots + (77.5 \times f(77.5) \times 5) + \dots + (99.5 \times 0.011 \times 1)$$
   The numerical sum of midpoints weighted by $f(t_i)\Delta t_i$ yields the mean time to failure of the component population.

---

## 4. Must Remember

- For non-repairable components, once failure occurs, the component is permanently discarded; repair is impossible and the component does not return to normal service.
- The fundamental conservation law states that at every point in time:
  $$R(t) + F(t) = 1.0$$
- Unconditional failure density $f(t)$ is normalized by the original test population $N$, whereas conditional hazard rate $h(t)$ is normalized by the surviving population $C(t)$ at time $t$.
- In life testing with non-uniform observation intervals, failure density must be divided by the interval width $\Delta t$:
  $$f(t) \approx \frac{n(t + \Delta t) - n(t)}{N \cdot \Delta t}$$
- Mean Time to Failure (MTTF) represents the expected lifespan and equals both the first moment $\int_0^\infty t f(t) dt$ and the total area under the reliability curve $\int_0^\infty R(t) dt$.
- The hazard rate curve over the entire lifespan typically follows the classical three-stage Bathtub curve (DFR $\to$ CFR $\to$ IFR).

# Week 6 – Lecture 2: Quantification of Basic Events - Hazard Rate

## 1. Key Concepts

### Hazard Rate / Failure Rate Function
- **Definition:** The hazard rate $h(t)$ (also denoted as $r(t)$ or $z(t)$) represents the **instantaneous failure rate** or the conditional probability per unit time that a component fails in the infinitesimal time interval $[t, t + \Delta t]$, given that it has successfully survived up to time $t$:
  $$h(t) = \lim_{\Delta t \to 0} \frac{P(t < T \le t + \Delta t \mid T > t)}{\Delta t}$$
- **Conditional Probability Derivation:**
  Using the definition of conditional probability $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$:
  $$P(t < T \le t + \Delta t \mid T > t) = \frac{P(t < T \le t + \Delta t)}{P(T > t)} = \frac{F(t + \Delta t) - F(t)}{R(t)}$$
  Dividing by $\Delta t$ and taking the limit as $\Delta t \to 0$:
  $$h(t) = \frac{1}{R(t)} \lim_{\Delta t \to 0} \frac{F(t + \Delta t) - F(t)}{\Delta t} = \frac{f(t)}{R(t)}$$
- **Relation to Survival Function:**
  Because $f(t) = -\frac{dR(t)}{dt}$:
  $$h(t) = -\frac{1}{R(t)}\frac{dR(t)}{dt} = -\frac{d}{dt}\left[\ln R(t)\right]$$
  Integrating both sides over $[0, t]$ with initial condition $R(0) = 1$:
  $$\int_0^t h(u) \, du = -\ln R(t) \implies R(t) = \exp\left(-\int_0^t h(u) \, du\right)$$
  The integral $H(t) = \int_0^t h(u) du$ is termed the **cumulative hazard function**.

---

## 2. Important Points

### 1. Fundamental Difference Between $f(t)$ and $h(t)$
- **Unconditional Failure Density $f(t)$:**
  - Evaluates failure likelihood relative to the **initial test population ($N$)** at time $t = 0$.
  - Discrete estimator:
    $$f(t) \approx \frac{\Delta n_i}{N \cdot \Delta t_i}$$
  - $f(t)$ tends to zero as $t \to \infty$ simply because the entire population eventually dies out.
- **Conditional Hazard Rate $h(t)$:**
  - Evaluates failure likelihood relative to the **currently surviving population ($C(t)$)** at time $t$.
  - Discrete estimator:
    $$h(t) \approx \frac{\Delta n_i}{C(t) \cdot \Delta t_i} = \frac{f(t)}{R(t)}$$
  - As components enter wear-out, $h(t)$ increases dramatically even when $f(t)$ decreases, because the surviving pool $C(t)$ becomes very small.

---

### 2. The Three Regimes of the Classical Bathtub Curve
Over the complete lifecycle of an industrial component, the hazard rate curve typically traces a U-shaped "Bathtub" profile consisting of three distinct operational regimes:

```
Hazard Rate h(t)
   ^
   |  \                                      /
   |   \  Infant Mortality                  /  Wear-out Phase
   |    \  (DFR)                           /   (IFR)
   |     \      Useful Life Period        /
   |      \______________________________/
   |                 (CFR)
   +---------------------------------------------> Time t
```

1. **Infant Mortality / Early Failure / Burn-in Period (Decreasing Failure Rate - DFR):**
   - **Hazard Rate Behavior:** $\frac{dh(t)}{dt} < 0$. Hazard rate starts high and decreases rapidly with operating time.
   - **Root Causes:** Hidden quality control defects, substandard materials, manufacturing flaws, assembly mistakes, or improper installation not detected during initial factory testing.
   - **Control / Screening:** Pre-shipment stress screening, burn-in testing, and accelerated life testing weed out weak components before putting them into actual plant service.
2. **Useful Life / Normal Operating Period (Constant Failure Rate - CFR):**
   - **Hazard Rate Behavior:** $\frac{dh(t)}{dt} \approx 0 \implies h(t) = \lambda = \text{constant}$.
   - **Characteristics:** The longest period in the lifecycle where the component is under full utilization.
   - **Root Causes:** Failures are strictly random and unpredictable, triggered by external operational shocks, power surges, severe environmental fluctuations, or operator handling errors.
   - **Governing Model:** Strictly governed by the **Exponential distribution**.
3. **Wear-out / Aging / Burnout Period (Increasing Failure Rate - IFR):**
   - **Hazard Rate Behavior:** $\frac{dh(t)}{dt} > 0$. Hazard rate escalates rapidly as operating hours accumulate.
   - **Root Causes:** Irreversible physical and chemical degradation, mechanical friction, corrosion, erosion, material fatigue, and structural embrittlement.
   - **Control / Safety Maintenance:** Timely preventive maintenance, overhaul, and scheduled component replacement prior to reaching the wear-out threshold.

---

### 3. Step-by-Step Tutorial on Hazard Rate Computation
From an experimental life test of $N$ identical components:
1. **Record Surviving Units:** At discrete time steps $t_0, t_1, t_2, \dots, t_k$, measure surviving count $C(t_i)$.
2. **Compute Incremental Failures:** $\Delta n_i = C(t_{i-1}) - C(t_i)$.
3. **Calculate Interval Width:** $\Delta t_i = t_i - t_{i-1}$. Note that $\Delta t$ can vary across the experiment (e.g., $\Delta t = 1$ month initially, $\Delta t = 5$ months later).
4. **Compute Unconditional Failure Density:**
   $$f(t_i^{\text{mid}}) = \frac{\Delta n_i}{N \cdot \Delta t_i}$$
5. **Compute Reliability:**
   $$R(t_i) = \frac{C(t_i)}{N}$$
6. **Compute Hazard Rate:**
   $$h(t_i) = \frac{f(t_i^{\text{mid}})}{R(t_i)} = \frac{\Delta n_i}{C(t_i) \cdot \Delta t_i}$$

---

### 4. Empirical Histogram and Polynomial Approximation
- **Time to Failure (TTF) Histogram:** TTF observations are arranged in ascending order, binned into discrete intervals, and plotted with interval duration on the horizontal axis and failure frequency on the vertical axis.
- **Midpoint Curve Joining:** Joining the midpoints of histogram bars produces an empirical failure density curve.
- **Approximation Methods:**
  - **Polynomial Approximation:** Fitting a polynomial expression $f(t) = a_0 + a_1 t + a_2 t^2 + \dots + a_m t^m$ over the data range.
  - **Distribution Fitting:** Fitting theoretical parametric distributions (e.g., Exponential $f(t) = \lambda e^{-\lambda t}$ or Weibull models) confirmed via statistical goodness-of-fit hypothesis testing.

---

## 3. Differences / Examples

### Comprehensive Comparison of Bathtub Curve Failure Regimes
| Parameter | Infant Mortality (Early Failure) | Useful Life (Normal Operation) | Wear-out (Aging Phase) |
| :--- | :--- | :--- | :--- |
| **Failure Rate Trend ($h(t)$)** | Decreasing ($\frac{dh}{dt} < 0$) | Constant ($\frac{dh}{dt} = 0$) | Increasing ($\frac{dh}{dt} > 0$) |
| **Statistical Regime** | DFR (Decreasing Failure Rate) | CFR (Constant Failure Rate) | IFR (Increasing Failure Rate) |
| **Dominant Failure Causes** | Poor material, assembly flaws, defective soldering, shipping damage | Unpredictable random stress shocks, lightning, power spikes | Friction, mechanical fatigue, corrosion, chemical degradation |
| **Duration in Lifespan** | Relatively brief | Very long (predominant operating life) | Final phase of product existence |
| **Appropriate Safety Action** | Factory burn-in, quality testing | Operating within design limits, derating | Scheduled preventive replacement, overhaul |
| **Theoretical Distribution** | Weibull ($\beta < 1$) | Exponential ($\beta = 1$) | Weibull ($\beta > 1$), Normal distribution |

---

### Worked Numerical Example: Computing $h(t)$ from Life-Testing Data
In a life test with $N = 1050$ identical units:

1. **Interval $t = 0$ to $t = 1$ month ($\Delta t = 1$):**
   - $C(0) = 1050$, $C(1) = 1020 \implies \Delta n_1 = 30$ failures.
   - $f(0.5) = \frac{30}{1050 \times 1} \approx 0.0286 \text{ month}^{-1}$.
   - $R(0) = \frac{1050}{1050} = 1.0$.
   - $h(0) = \frac{30}{1050 \times 1} \approx 0.0286 \text{ month}^{-1}$.
2. **Interval $t = 75$ to $t = 80$ months ($\Delta t = 5$ months):**
   - $C(75) = 180$, $C(80) = 120 \implies \Delta n = 60$ failures.
   - $f(77.5) = \frac{60}{1050 \times 5} = \frac{60}{5250} \approx 0.0114 \text{ month}^{-1}$.
   - $R(75) = \frac{180}{1050} \approx 0.1714$.
   - $h(75) = \frac{60}{180 \times 5} = \frac{60}{900} \approx 0.0667 \text{ month}^{-1}$.
   - **Key Observation:** Notice that although unconditional density $f(t)$ dropped from $0.0286$ to $0.0114$, the hazard rate $h(t)$ rose from $0.0286$ to $0.0667 \text{ month}^{-1}$ because the surviving population fell from $1050$ to $180$.

---

## 4. Must Remember

- Hazard rate $h(t)$ is a **conditional probability density** conditioned on survival up to time $t$, whereas failure density $f(t)$ is unconditional and normalized by the initial population $N$.
- The exact mathematical relationship between reliability and hazard rate is:
  $$h(t) = -\frac{d}{dt}\left[\ln R(t)\right] \iff R(t) = \exp\left(-\int_0^t h(u) \, du\right)$$
- The three regimes of the Bathtub curve reflect different underlying failure physics:
  - **DFR:** Manufacturing/quality defects (eliminated by burn-in).
  - **CFR:** Random external shocks (modeled by Exponential distribution).
  - **IFR:** Aging, wear, and fatigue (controlled by preventive replacement).
- When computing $f(t)$ or $h(t)$ from discrete life-test tables, always verify the interval length $\Delta t$; dividing solely by sample counts without accounting for $\Delta t$ produces invalid rate values.
- In the useful life period, because $h(t) = \lambda = \text{const}$, the hazard rate is completely time-independent.

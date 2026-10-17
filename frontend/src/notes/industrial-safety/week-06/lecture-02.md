# Week 6 – Lecture 2: Quantification of Basic Events - Hazard Rate

## 1. Key Concepts
- **Hazard Rate / Failure Rate Function ($h(t)$ or $z(t)$):** The conditional probability per unit time that a component fails in the next infinitesimal interval $[t, t + \Delta t]$, given that it has survived up to time $t$:
  $$h(t) = \lim_{\Delta t \to 0} \frac{P(t < T \le t + \Delta t \mid T > t)}{\Delta t} = \frac{f(t)}{R(t)} = -\frac{1}{R(t)}\frac{dR(t)}{dt}$$
- **Cumulative Hazard Function ($H(t)$):**
  $$H(t) = \int_0^t h(u) \, du = -\ln R(t) \implies R(t) = \exp\left(-\int_0^t h(u) \, du\right)$$
- **Bathtub Curve:** The classical lifecycle failure curve describing failure rate variations over time across three distinct operational regimes.

## 2. Important Points
- **The Three Stages of the Bathtub Curve:**
  1. **Infant Mortality / Burn-in Period (Early Life):**
     - Characterized by a **Decreasing Failure Rate (DFR)**.
     - Caused by sub-standard materials, manufacturing defects, or assembly errors.
     - Mitigated by factory stress screening and burn-in testing.
  2. **Useful Life / Normal Operating Period:**
     - Characterized by an approximately **Constant Failure Rate (CFR)** ($h(t) = \lambda$).
     - Failures occur randomly due to unpredictable environmental shocks and operational stresses.
     - Modeled accurately by the **Exponential distribution**.
  3. **Wear-out Period (End of Life):**
     - Characterized by an **Increasing Failure Rate (IFR)**.
     - Caused by mechanical wear, material fatigue, corrosion, and chemical degradation.
     - Controlled through scheduled preventive maintenance and timely component replacement.

## 3. Differences / Examples
| Stage | Failure Rate Trend | Dominant Root Causes | Mitigation Method |
| :--- | :--- | :--- | :--- |
| **Infant Mortality** | Decreasing ($\frac{dh}{dt} < 0$) | Manufacturing flaws, poor soldering | Pre-shipment burn-in testing |
| **Useful Life** | Constant ($\frac{dh}{dt} = 0$) | Random external shocks, power surges | Derating, built-in redundancy |
| **Wear-out** | Increasing ($\frac{dh}{dt} > 0$) | Aging, friction, metal fatigue | Preventive overhaul & replacement |

## 4. Must Remember
- While $f(t)$ measures unconditional failure probability, $h(t)$ is a **conditional failure rate** conditioned on survival up to $t$.
- Under constant hazard rate ($h(t) = \lambda$), the reliability function collapses to an exponential decay curve: $R(t) = e^{-\lambda t}$.

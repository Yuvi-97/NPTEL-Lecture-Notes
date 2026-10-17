# Week 6 – Lecture 4: Quantification of Basic Events - Weibull Distribution

## 1. Key Concepts
- **Weibull Distribution:** A versatile continuous probability distribution widely used in reliability engineering capable of modeling decreasing, constant, and increasing hazard rates across all three stages of the bathtub curve.
- **Parameters of Weibull Distribution:**
  - **$\beta$ (Shape Parameter / Weibull Slope):** Dictates the failure physics and determines whether the hazard rate increases, decreases, or stays constant.
  - **$\alpha$ or $\eta$ (Scale Parameter / Characteristic Life):** The operational time by which exactly $63.2\%$ of units are expected to fail ($R(\alpha) = e^{-1} \approx 36.8\%$).
  - **$\gamma$ (Location Parameter / Threshold Life):** Minimum failure-free operational time (in a 2-parameter Weibull, $\gamma = 0$).

## 2. Important Points
- **Physical Meaning of Shape Parameter ($\beta$):**
  - **$\beta < 1$:** Decreasing Hazard Rate (DFR) $\rightarrow$ Models **Infant Mortality** (burn-in flaws).
  - **$\beta = 1$:** Constant Hazard Rate (CFR) $\rightarrow$ Reduces identically to the **Exponential Distribution** ($h(t) = 1/\alpha$).
  - **$\beta > 1$:** Increasing Hazard Rate (IFR) $\rightarrow$ Models **Wear-out and Aging** (corrosion, fatigue).
    - $\beta \approx 3.44$: Approximates a symmetric Gaussian / Normal distribution.
- **Key Mathematical Formulations (2-Parameter Weibull):**
  - **Reliability:** $R(t) = \exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right]$
  - **Unreliability:** $F(t) = 1 - \exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right]$
  - **Hazard Rate:** $h(t) = \frac{\beta}{\alpha}\left(\frac{t}{\alpha}\right)^{\beta - 1}$
  - **PDF:** $f(t) = \frac{\beta}{\alpha}\left(\frac{t}{\alpha}\right)^{\beta - 1}\exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right]$
- **Parameter Estimation:** Estimated via Maximum Likelihood Estimation (MLE) or linear regression on Weibull probability paper:
  $$\ln\left[\ln\left(\frac{1}{1 - F(t)}\right)\right] = \beta \ln(t) - \beta \ln(\alpha)$$

## 3. Differences / Examples
| $\beta$ Value | Hazard Rate Trend ($h(t)$) | Bathtub Curve Region | Component Examples |
| :--- | :--- | :--- | :--- |
| **$\beta = 0.5$** | Decreases over time | Infant mortality / Burn-in | Poorly soldered electronics |
| **$\beta = 1.0$** | Strictly constant ($h(t) = \lambda$) | Useful life | Electronic relays, random stress shocks |
| **$\beta = 2.0$** | Linearly increasing ($h(t) \propto t$) | Wear-out (Rayleigh model) | Roller bearings, mechanical seals |
| **$\beta = 3.5$** | Rapidly increasing (Bell-shaped) | Severe wear-out / Aging | Pump impellers, turbine blades |

## 4. Must Remember
- When $\beta = 1$, the Weibull distribution becomes the **Exponential distribution**.
- At time $t = \alpha$, unreliability is always $F(\alpha) = 1 - e^{-1} \approx 63.2\%$, regardless of the shape parameter $\beta$.
- Unlike the Exponential distribution, the Weibull distribution with $\beta \ne 1$ does **not** have the memoryless property.

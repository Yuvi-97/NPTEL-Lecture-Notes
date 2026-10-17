# Week 6 – Lecture 4: Quantification of Basic Events - Weibull Distribution

## 1. Key Concepts

### The Weibull Distribution in Failure Analysis
- **Definition:** The Weibull distribution is a highly versatile continuous probability distribution widely used in reliability, industrial safety, and failure analysis. Because its hazard rate can be tuned to decrease, stay constant, or increase over time, it can model all three stages of the classical Bathtub curve.
- **Physical "Weakest Link" Basis:** The Weibull distribution is theoretically founded on extreme value theory (the weakest-link principle). It applies naturally to mechanical and structural components whose overall failure is triggered by the most severe local defect among numerous micro-flaws (e.g., ball bearings, roller contacts, turbine blades, weld seams, corrosion pits, and dielectric breakdown).
- **Distribution Parameters:**
  - **$\beta$ (Shape Parameter / Weibull Slope):** A dimensionless parameter that dictates the physical failure mechanism and controls whether the failure rate increases, decreases, or remains constant.
  - **$\alpha$ or $\eta$ (Scale Parameter / Characteristic Life):** Measured in time units (e.g., hours or months). Represents the operational time by which exactly $63.2\%$ of the population will have failed.
    *(Note: In mathematical derivations, the scale parameter is formulated either as characteristic life $\alpha$, where $t/\alpha$ is used, or as scale frequency $\eta = 1/\alpha$, where $\eta t$ is used).*
  - **$\gamma$ or $\phi$ (Location Parameter / Threshold Life):** Represents the guaranteed failure-free operating time before which failure is physically impossible ($t \ge \gamma$). For standard 2-parameter models, $\gamma = 0$.

---

## 2. Important Points

### 1. Two-Parameter Weibull Formulations
For a component with zero threshold life ($\gamma = 0$):

1. **Unreliability / Cumulative Failure Distribution ($F(t)$):**
   $$F(t) = 1 - \exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right] = 1 - e^{-(\eta t)^\beta} \quad (t \ge 0)$$
2. **Reliability / Survival Function ($R(t)$):**
   $$R(t) = 1 - F(t) = \exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right] = e^{-(\eta t)^\beta}$$
3. **Failure Probability Density Function ($f(t)$):**
   Differentiating $F(t)$ with respect to time $t$:
   $$f(t) = \frac{dF(t)}{dt} = \frac{\beta}{\alpha}\left(\frac{t}{\alpha}\right)^{\beta - 1}\exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right] = \beta \eta (\eta t)^{\beta - 1} e^{-(\eta t)^\beta}$$
4. **Hazard Rate Function ($h(t)$):**
   $$h(t) = \frac{f(t)}{R(t)} = \frac{\frac{\beta}{\alpha}\left(\frac{t}{\alpha}\right)^{\beta - 1}\exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right]}{\exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right]} = \frac{\beta}{\alpha}\left(\frac{t}{\alpha}\right)^{\beta - 1} = \beta \eta (\eta t)^{\beta - 1}$$

---

### 2. Failure Physics Across Different $\beta$ Values
The shape parameter $\beta$ directly reflects the underlying physical state and lifecycle regime of the equipment:

- **$\beta < 1$ (e.g., $\beta = 0.5$): Decreasing Failure Rate (DFR)**
  - Because $\beta - 1 < 0$, $h(t) \propto t^{\beta - 1}$ decreases as $t$ increases.
  - Represents the **Infant Mortality / Burn-in** regime of the Bathtub curve.
  - Governed by manufacturing flaws, substandard materials, or installation defects that fail early.
- **$\beta = 1$: Constant Failure Rate (CFR)**
  - When $\beta = 1$, the exponent $\beta - 1 = 0$, giving:
    $$h(t) = \frac{1}{\alpha} = \eta = \text{constant}$$
    $$R(t) = e^{-t/\alpha} = e^{-\eta t}, \quad f(t) = \frac{1}{\alpha} e^{-t/\alpha}$$
  - **The Exponential distribution is a special case of the Weibull distribution when $\beta = 1$.**
  - Represents the **Useful Life** regime characterized by random external operational shocks.
- **$\beta > 1$ (e.g., $\beta = 1.5, 2.0, 3.44$): Increasing Failure Rate (IFR)**
  - Because $\beta - 1 > 0$, $h(t)$ increases as the component ages.
  - Represents the **Wear-out / Aging** regime caused by mechanical friction, fatigue, and corrosion.
  - **Special Cases:**
    - $\beta = 2$: Linear hazard rate ($h(t) \propto t$), matching the **Rayleigh distribution**.
    - $\beta \approx 3.44$: The Weibull distribution becomes closely symmetrical, approximating the **Gaussian / Normal distribution**.

---

### 3. Characteristic Life Property ($t = \alpha$)
At the characteristic operational life $t = \alpha$ (or $t = 1/\eta$):
$$F(\alpha) = 1 - e^{-(\alpha/\alpha)^\beta} = 1 - e^{-1} = 1 - \frac{1}{2.71828} \approx 0.6321 \quad (63.2\%)$$
$$R(\alpha) = e^{-1} \approx 0.3679 \quad (36.8\%)$$
**Key Engineering Invariant:** Regardless of the value of the shape parameter $\beta$, exactly $63.2\%$ of units will fail by operational time $t = \alpha$, and $36.8\%$ will survive.

---

### 4. Three-Parameter Weibull Model (Threshold Life $\gamma$)
When components experience a guaranteed failure-free period $\gamma > 0$ (such as newly lined refractories or coated pipes):
- For operational time $t \ge \gamma$:
  $$R(t) = \exp\left[-\left(\frac{t - \gamma}{\alpha}\right)^\beta\right]$$
  $$f(t) = \frac{\beta}{\alpha}\left(\frac{t - \gamma}{\alpha}\right)^{\beta - 1}\exp\left[-\left(\frac{t - \gamma}{\alpha}\right)^\beta\right]$$
- For $t < \gamma$: $F(t) = 0$, $R(t) = 1.0$, and $h(t) = 0$.

---

### 5. Parameter Estimation Methods

#### A. Graphical Linearization (Weibull Probability Paper Method)
To determine $\beta$ and $\alpha$ (or $\eta$) from experimental failure data:
1. Rearrange the reliability formula:
   $$1 - F(t) = \exp\left[-\left(\frac{t}{\alpha}\right)^\beta\right] \implies \frac{1}{1 - F(t)} = \exp\left[\left(\frac{t}{\alpha}\right)^\beta\right]$$
2. Take the natural logarithm once:
   $$\ln\left[\frac{1}{1 - F(t)}\right] = \left(\frac{t}{\alpha}\right)^\beta = (\eta t)^\beta$$
3. Take the natural logarithm a second time:
   $$\ln\left\{\ln\left[\frac{1}{1 - F(t)}\right]\right\} = \beta \ln t - \beta \ln \alpha = \beta \ln t + \beta \ln \eta$$
4. This transforms the nonlinear curve into a standard linear equation:
   $$y = m x + c$$
   where:
   - $y = \ln\ln\left[\frac{1}{1 - F(t)}\right]$
   - $x = \ln t$
   - Slope $m = \beta$ (directly yields the shape parameter)
   - Intercept $c = \beta \ln \eta = -\beta \ln \alpha \implies \eta = \exp(c/\beta)$ or $\alpha = \exp(-c/\beta)$

#### B. Maximum Likelihood Estimation (MLE)
For $n$ independent time-to-failure observations $t_1, t_2, \dots, t_n$:
1. Likelihood function:
   $$L(\beta, \eta) = \prod_{i=1}^n f(t_i) = \prod_{i=1}^n \left[\beta \eta (\eta t_i)^{\beta - 1} e^{-(\eta t_i)^\beta}\right]$$
2. Log-likelihood function:
   $$\ln L = n \ln \beta + n \beta \ln \eta + (\beta - 1) \sum_{i=1}^n \ln t_i - \eta^\beta \sum_{i=1}^n t_i^\beta$$
3. Taking partial derivatives and setting to zero:
   $$\frac{\partial \ln L}{\partial \eta} = \frac{n \beta}{\eta} - \beta \eta^{\beta - 1} \sum_{i=1}^n t_i^\beta = 0 \implies \eta = \left(\frac{n}{\sum_{i=1}^n t_i^\beta}\right)^{1/\beta}$$
   $$\frac{\partial \ln L}{\partial \beta} = \frac{n}{\beta} + n \ln \eta + \sum_{i=1}^n \ln t_i - \sum_{i=1}^n (\eta t_i)^\beta \ln(\eta t_i) = 0$$
4. **Need for Numerical Solution:** Substituting $\eta$ into the second equation yields a complex transcendental equation in $\beta$ with **no closed-form analytical solution**. Iterative numerical techniques (e.g., the **Newton-Raphson method**) must be employed.

---

## 3. Differences / Examples

### Shape Parameter ($\beta$) Diagnostic Matrix
| $\beta$ Value | Hazard Rate Trend ($h(t)$) | Statistical Classification | Bathtub Curve Phase | Dominant Physical Failure Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **$\beta < 1$** (e.g., $0.5$) | Decreases over time | DFR (Decreasing Failure Rate) | Infant Mortality / Burn-in | Defective soldering, substandard metallurgy, assembly errors |
| **$\beta = 1.0$** | Constant ($h(t) = \eta = 1/\alpha$) | CFR (Constant Failure Rate) | Useful Life | Random environmental shocks, power surges, operator errors |
| **$1 < \beta < 2$** (e.g., $1.5$) | Increases at decreasing rate | IFR (Increasing Failure Rate) | Early Wear-out | Mild corrosion, gradual mechanical friction, early erosion |
| **$\beta = 2.0$** | Linearly increasing ($h(t) \propto t$) | Rayleigh Distribution | Severe Wear-out | Mechanical bearing wear, shaft galling, seal degradation |
| **$\beta \approx 3.44$** | Increases symmetrically | Gaussian / Normal Approx. | Advanced Aging | Deep material fatigue, structural cracking, cyclic thermal stress |

---

### Worked Numerical Example: Graphical Estimation Tutorial
In an experimental study evaluating 22 failure points with increments $\Delta t = 0.2$:
- Log-transformed empirical failure coordinates $(x_i, y_i)$ were plotted:
  $$x_i = \ln(t_i), \quad y_i = \ln\ln\left[\frac{1}{1 - F(t_i)}\right]$$
- Linear regression of the scatter plot yielded:
  $$\text{Slope } m = 1.2445 \implies \hat{\beta} = 1.2445$$
  $$\text{Intercept } c = -1.0371$$
- Computing scale parameter $\eta$:
  $$\beta \ln \eta = c \implies \ln \eta = \frac{-1.0371}{1.2445} \approx -0.8333$$
  $$\hat{\eta} = e^{-0.8333} \approx 0.4346 \implies \hat{\alpha} = \frac{1}{\hat{\eta}} = \frac{1}{0.4346} \approx 2.301 \text{ time units}$$
- **Engineering Interpretation:**
  Because $\hat{\beta} = 1.2445 > 1$, the component has surpassed its useful life and is operating in the early wear-out phase (IFR regime). The characteristic life is $\alpha \approx 2.30$ time units, meaning $63.2\%$ of units will fail within this duration.

---

## 4. Must Remember

- The Weibull distribution is uniquely capable of modeling all three phases of the Bathtub curve through its shape parameter $\beta$:
  - $\beta < 1 \implies$ Infant mortality (DFR).
  - $\beta = 1 \implies$ Useful life / Exponential distribution (CFR).
  - $\beta > 1 \implies$ Wear-out and aging (IFR).
- The characteristic life $\alpha$ (or $1/\eta$) represents the operational milestone where unreliability is always $F(\alpha) = 1 - e^{-1} \approx 63.2\%$, regardless of the value of $\beta$.
- The 3-parameter Weibull model introduces a location parameter $\gamma$ representing guaranteed failure-free threshold life ($t \ge \gamma$).
- Double logarithmic transformation $\ln\ln\left[\frac{1}{1 - F(t)}\right] = \beta \ln t - \beta \ln \alpha$ linearizes the Weibull CDF into $y = mx + c$, enabling graphical estimation where slope equals $\beta$.
- MLE of Weibull parameters does not yield a closed-form analytical solution; coupled nonlinear equations must be solved iteratively using numerical methods (e.g., Newton-Raphson).

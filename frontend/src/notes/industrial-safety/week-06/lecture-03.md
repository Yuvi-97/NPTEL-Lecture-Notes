# Week 6 – Lecture 3: Quantification of Basic Events - Exponential Distribution

## 1. Key Concepts

### The Exponential Distribution in System Safety
- **Definition:** The exponential distribution is the preeminent continuous probability distribution used in reliability and safety engineering to model components operating under a **strictly constant failure rate / constant hazard rate** ($h(t) = \lambda = \text{constant}$).
- **Applicability & Engineering Assumptions:**
  1. **Useful Life Regime:** The component operates in its prime operational lifespan (the flat bottom of the Bathtub curve), having already survived the infant mortality burn-in phase and not yet entered the wear-out phase.
  2. **Complex Multi-Part Systems:** For complex non-redundant systems composed of numerous integrated parts with different failure mechanisms, the superposition of independent failures asymptotically yields an aggregate constant failure rate.
  3. **Limited Empirical Data:** When historical failure data is sparse, assuming an exponential model provides a mathematically tractable, robust, and conservative baseline without introducing unjustified parametric complexity.
- **Single-Parameter Characterization:** The distribution is completely defined by a single parameter: the constant failure rate $\lambda$ (failures per unit time, e.g., $\text{failures/hour}$ or $\text{failures/month}$).

---

## 2. Important Points

### 1. First-Principles Derivation of the Exponential Model
Starting from the fundamental definition of hazard rate:
$$h(t) = \frac{f(t)}{R(t)} = -\frac{1}{R(t)}\frac{dR(t)}{dt} = \lambda$$
Rearranging and separating variables:
$$\frac{dR(t)}{R(t)} = -\lambda \, dt$$
Integrating both sides from $0$ to $t$:
$$\int_{R(0)}^{R(t)} \frac{dR(u)}{R(u)} = -\lambda \int_0^t du$$
Because $R(0) = 1$, $\ln(1) = 0$:
$$\ln R(t) = -\lambda t \implies R(t) = e^{-\lambda t}$$

From the survival function, the corresponding reliability metrics are derived:
1. **Unreliability / Cumulative Failure Distribution ($F(t)$):**
   $$F(t) = 1 - R(t) = 1 - e^{-\lambda t} \quad (t \ge 0)$$
2. **Failure Probability Density Function ($f(t)$):**
   $$f(t) = \frac{dF(t)}{dt} = \lambda e^{-\lambda t} \quad (t \ge 0)$$
3. **Mean Time to Failure (MTTF):**
   $$\text{MTTF} = \int_0^\infty R(t) \, dt = \int_0^\infty e^{-\lambda t} \, dt = \left[ -\frac{e^{-\lambda t}}{\lambda} \right]_0^\infty = \frac{1}{\lambda}$$
   Therefore, the constant failure rate is the exact reciprocal of the MTTF:
   $$\lambda = \frac{1}{\text{MTTF}}$$
4. **Variance of Lifespan ($\sigma^2$):**
   $$\sigma^2 = E[T^2] - (E[T])^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2} \implies \sigma = \frac{1}{\lambda} = \text{MTTF}$$
   For an exponential distribution, the standard deviation is strictly equal to the mean.

---

### 2. Mathematical Proof of the Memoryless Property
The defining mathematical property of the exponential distribution is its **memorylessness** (lack of memory):
- **Statement:** The probability that a functioning unit survives an additional duration $t$, given that it has already survived up to time $s$, is identical to the probability of a brand-new unit surviving for duration $t$:
  $$P(T > t + s \mid T > s) = P(T > t)$$
- **Proof:**
  $$P(T > t + s \mid T > s) = \frac{P(T > t + s \cap T > s)}{P(T > s)} = \frac{P(T > t + s)}{P(T > s)} = \frac{e^{-\lambda(t + s)}}{e^{-\lambda s}} = \frac{e^{-\lambda t} \cdot e^{-\lambda s}}{e^{-\lambda s}} = e^{-\lambda t} = P(T > t)$$
- **Interval Failure Formulation:**
  For any operating age $a$ and subsequent duration $\Delta$:
  $$P(a < T \le a + \Delta \mid T > a) = \frac{F(a + \Delta) - F(a)}{R(a)} = \frac{(1 - e^{-\lambda(a + \Delta)}) - (1 - e^{-\lambda a})}{e^{-\lambda a}} = 1 - e^{-\lambda \Delta}$$
  Notice that the operating age $a$ completely vanishes from the expression.
- **Safety Engineering Implication:**
  Under a constant hazard rate, past operating hours have **zero effect** on future survival probability. A used component that has not failed is statistically indistinguishable from a brand-new component. Consequently, **scheduled preventive replacement of unfailed parts provides no reliability benefit** and wastes maintenance resources.

---

### 3. Graphical Parameter Estimation Method
To estimate $\lambda$ graphically from life-testing data:
1. Linearize the CDF equation:
   $$1 - F(t) = e^{-\lambda t} \implies \frac{1}{1 - F(t)} = e^{\lambda t}$$
2. Take the natural logarithm of both sides:
   $$\ln\left[\frac{1}{1 - F(t)}\right] = \lambda t$$
3. This is the equation of a straight line through the origin ($y = mx + c$ with intercept $c = 0$):
   $$y = \ln\left[\frac{1}{1 - F(t)}\right], \quad x = t, \quad \text{Slope } m = \lambda$$
4. Plot empirical values of $\ln\left[\frac{1}{1 - F(t)}\right]$ against time $t$. The slope of the best-fit line through the origin directly yields the parameter estimate $\hat{\lambda}$.

---

### 4. Maximum Likelihood Estimation (MLE) of $\lambda$
For a sample of $n$ independent time-to-failure observations $t_1, t_2, \dots, t_n$:
1. **Likelihood Function ($L(\lambda)$):**
   $$L(\lambda) = \prod_{i=1}^n f(t_i) = \prod_{i=1}^n \left(\lambda e^{-\lambda t_i}\right) = \lambda^n \exp\left(-\lambda \sum_{i=1}^n t_i\right)$$
2. **Log-Likelihood Function ($\ln L(\lambda)$):**
   $$\ln L(\lambda) = n \ln \lambda - \lambda \sum_{i=1}^n t_i$$
3. **Maximization via First Derivative:**
   $$\frac{d \ln L(\lambda)}{d\lambda} = \frac{n}{\lambda} - \sum_{i=1}^n t_i = 0$$
   $$\hat{\lambda}_{\text{MLE}} = \frac{n}{\sum_{i=1}^n t_i} = \frac{1}{\bar{t}} = \frac{1}{\text{MTTF}}$$
4. **Second Derivative Verification:**
   $$\frac{d^2 \ln L(\lambda)}{d\lambda^2} = -\frac{n}{\lambda^2} < 0 \quad (\text{strictly negative for all } \lambda > 0)$$
   This confirms that $\hat{\lambda} = \frac{1}{\text{MTTF}}$ is the unique global maximum.

---

## 3. Differences / Examples

### Milestone Values of Exponential Reliability
| Operational Duration ($t$) | Reliability $R(t) = e^{-\lambda t}$ | Unreliability $F(t) = 1 - e^{-\lambda t}$ | Engineering Interpretation |
| :--- | :--- | :--- | :--- |
| **$t = 0$** | $e^0 = 1.0000$ ($100.0\%$) | $0.0000$ ($0.0\%$) | Initial commissioning |
| **$t = 0.1 \times \text{MTTF}$** | $e^{-0.1} \approx 0.9048$ ($90.5\%$) | $0.0952$ ($9.5\%$) | High-reliability operational window |
| **$t = \text{MTTF} = \frac{1}{\lambda}$** | $e^{-1} \approx 0.3679$ ($36.8\%$) | $1 - e^{-1} \approx 0.6321$ ($63.2\%$) | **Only 36.8% survive to the mean lifespan!** |
| **$t = 2 \times \text{MTTF}$** | $e^{-2} \approx 0.1353$ ($13.5\%$) | $0.8647$ ($86.5\%$) | Majority of units have failed |
| **$t = 3 \times \text{MTTF}$** | $e^{-3} \approx 0.0498$ ($5.0\%$) | $0.9502$ ($95.0\%$) | Only 5% survivor tail remains |

---

### Worked Numerical Example: Graphical vs Analytical Estimation
From experimental life testing of an industrial relay population:
- **Graphical Method:**
  Empirical data points plotted as $y = \ln\left[\frac{1}{1 - F(t)}\right]$ versus $t$ generated a fitted regression line through the origin:
  $$y = 0.023 t \implies \hat{\lambda} = 0.023 \text{ month}^{-1}$$
  $$\text{MTTF} = \frac{1}{\hat{\lambda}} = \frac{1}{0.023} \approx 43.48 \text{ months}$$
- **Analytical Estimation from Average Lifespan:**
  If the sample mean time to failure is observed to be $\bar{t} = 50 \text{ months}$:
  $$\hat{\lambda}_{\text{MLE}} = \frac{1}{50} = 0.020 \text{ month}^{-1}$$
  - Probability of surviving a 12-month mission:
    $$R(12) = e^{-0.020 \times 12} = e^{-0.24} \approx 0.7866 \quad (78.66\%)$$
  - Probability of failing within the first 6 months:
    $$F(6) = 1 - e^{-0.020 \times 6} = 1 - e^{-0.12} \approx 1 - 0.8869 = 0.1131 \quad (11.31\%)$$

---

## 4. Must Remember

- The exponential distribution corresponds strictly to a **constant hazard rate** ($h(t) = \lambda$), representing random failures during the useful life stage of the Bathtub curve.
- The fundamental relationships are:
  $$R(t) = e^{-\lambda t}, \quad F(t) = 1 - e^{-\lambda t}, \quad f(t) = \lambda e^{-\lambda t}, \quad \text{MTTF} = \frac{1}{\lambda}$$
- Due to the **memoryless property**, a surviving component does not age; its remaining lifetime distribution is entirely independent of how long it has been in operation:
  $$P(T > t + s \mid T > s) = P(T > t)$$
- At time $t = \text{MTTF} = 1/\lambda$, component reliability is not $50\%$, but exactly $e^{-1} \approx 36.8\%$. Over $63.2\%$ of units fail before reaching their MTTF.
- When plotting $\ln\left[\frac{1}{1 - F(t)}\right]$ against $t$, the relationship is a straight line through the origin with slope equal to $\lambda$.
- Maximum Likelihood Estimation yields the sample estimator $\hat{\lambda} = \frac{1}{\bar{t}} = \frac{1}{\text{MTTF}}$.

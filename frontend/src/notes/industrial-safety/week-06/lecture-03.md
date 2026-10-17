# Week 6 – Lecture 3: Quantification of Basic Events - Exponential Distribution

## 1. Key Concepts
- **Exponential Distribution:** The fundamental statistical distribution used in reliability engineering to model components experiencing a strictly constant failure rate ($h(t) = \lambda = \text{const}$).
- **Memoryless Property:** The past operating history or operational age of a component has no bearing on its future probability of failure:
  $$P(T > t + s \mid T > s) = P(T > t)$$
  A used component that has not failed is statistically as good as a brand-new component.
- **Single-Parameter Model:** Fully defined by a single parameter: the constant failure rate $\lambda$ (failures per unit time).

## 2. Important Points
- **Core Mathematical Formulations:**
  - **Hazard Rate:** $h(t) = \lambda$
  - **Reliability Function:**
    $$R(t) = e^{-\lambda t}$$
  - **Unreliability / Failure Distribution:**
    $$F(t) = 1 - e^{-\lambda t}$$
  - **Probability Density Function (PDF):**
    $$f(t) = \lambda e^{-\lambda t} \quad (t \ge 0)$$
- **Mean Time to Failure (MTTF):**
  $$\text{MTTF} = \int_0^\infty R(t) \, dt = \int_0^\infty e^{-\lambda t} \, dt = \frac{1}{\lambda}$$
- **Variance of Lifespan:**
  $$\sigma^2 = \frac{1}{\lambda^2} \implies \sigma = \text{MTTF}$$
  The standard deviation of an exponentially distributed lifespan is exactly equal to its mean.
- **Linear Approximation for Small $\lambda t$ ($\lambda t \ll 0.1$):**
  $$F(t) = 1 - e^{-\lambda t} \approx \lambda t$$

## 3. Differences / Examples
| Operating Time ($t$) | Reliability $R(t)$ | Failure Probability $F(t)$ |
| :--- | :--- | :--- |
| **$t = 0$** | $1.000$ ($100\%$) | $0.000$ ($0\%$) |
| **$t = \text{MTTF} = \frac{1}{\lambda}$** | $e^{-1} \approx 0.368$ ($36.8\%$) | $1 - e^{-1} \approx 0.632$ ($63.2\%$) |
| **$t = 2 \times \text{MTTF}$** | $e^{-2} \approx 0.135$ ($13.5\%$) | $0.865$ ($86.5\%$) |
| **$t = 3 \times \text{MTTF}$** | $e^{-3} \approx 0.050$ ($5.0\%$) | $0.950$ ($95.0\%$) |

## 4. Must Remember
- When operating time reaches one MTTF ($t = 1/\lambda$), the component's survival probability drops to only **36.8%**.
- Preventive replacement provides **no safety benefit** for exponentially distributed components because the failure rate is completely independent of age.

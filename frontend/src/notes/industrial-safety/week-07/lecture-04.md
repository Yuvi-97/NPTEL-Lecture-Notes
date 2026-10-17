# Week 7 – Lecture 4: Computation of Combined Process Parameters: Laplace Transform Analysis

## 1. Key Concepts
- **Renewal Equations:** Integral equations describing the continuous interaction between failure and repair processes over time.
- **Laplace Transform ($\mathcal{L}$):** An integral operational transform used to convert time-domain convolution integral equations into simple algebraic equations in the complex frequency domain ($s$):
  $$\mathcal{L}\{f(t)\} = f(s) = \int_0^\infty e^{-st} f(t) \, dt$$
- **Convolution Theorem:** The Laplace transform of a convolution integral equals the algebraic product of the individual transforms:
  $$\mathcal{L}\left\{\int_0^t f_1(u) f_2(t - u) \, du\right\} = f_1(s) \cdot f_2(s)$$

## 2. Important Points
- **Integral Renewal Relationship for Availability:**
  $$A(t) = R(t) + \int_0^t v(u) R(t - u) \, du$$
  Where $R(t)$ represents continuous survival from $t=0$, and the integral captures components that failed, underwent repair, and are functioning again at time $t$.
- **Transform-Domain Solution Steps:**
  1. Take the Laplace transform of the integral equations to obtain linear algebraic relations in $s$.
  2. For constant rates $\lambda$ and $\mu$:
     $$R(s) = \frac{1}{s + \lambda}, \quad g(s) = \frac{\mu}{s + \mu}$$
  3. Solve algebraically for $A(s)$ and $Q(s)$:
     $$A(s) = \frac{s + \mu}{s(s + \lambda + \mu)}, \quad Q(s) = \frac{\lambda}{s(s + \lambda + \mu)}$$
  4. Perform partial fraction expansion:
     $$A(s) = \frac{\mu/(\lambda + \mu)}{s} + \frac{\lambda/(\lambda + \mu)}{s + \lambda + \mu}$$
  5. Apply the Inverse Laplace Transform ($\mathcal{L}^{-1}$) to obtain the exact time-domain functions:
     $$A(t) = \frac{\mu}{\lambda + \mu} + \frac{\lambda}{\lambda + \mu} e^{-(\lambda + \mu)t}$$
     $$Q(t) = \frac{\lambda}{\lambda + \mu}\left[1 - e^{-(\lambda + \mu)t}\right]$$

## 3. Differences / Examples
| Time Instant | Point Availability $A(t)$ | Point Unavailability $Q(t)$ |
| :--- | :--- | :--- |
| **$t = 0$** | $A(0) = 1.0$ (System starts fully operational) | $Q(0) = 0.0$ |
| **Transient State ($t > 0$)** | Decreases exponentially towards steady-state | Rises exponentially towards steady-state |
| **Steady State ($t \to \infty$)** | $A_\infty = \frac{\mu}{\lambda + \mu}$ | $Q_\infty = \frac{\lambda}{\lambda + \mu}$ |

## 4. Must Remember
- Reference text: **Kumamoto & Henley** (*Probabilistic Risk Assessment and Management*).
- Transient fluctuations decay exponentially at rate $(\lambda + \mu)$; after several time constants, the system effectively operates at constant steady-state availability.

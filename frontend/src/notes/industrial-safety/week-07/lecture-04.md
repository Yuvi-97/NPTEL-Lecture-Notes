# Week 7 – Lecture 4: Computation of Combined Process Parameters: Laplace Transform Analysis

## 1. Key Concepts

### Laplace Transform Analysis in Renewal Processes
- **Analytical Solution to Convolution Equations:** The integral renewal equations governing unconditional failure intensity $w(t)$ and repair intensity $v(t)$ are coupled convolution integrals. The Laplace transform maps time-domain convolutions into simple algebraic multiplications in the complex frequency domain ($s$-domain), enabling exact closed-form analytical solutions.
- **Constant Rate Assumptions:** When components operate in their useful life and maintenance policies follow standardized protocols, failure and repair distributions are modeled exponentially:
  - Failure probability density: $f(t) = \lambda e^{-\lambda t}$ (Constant failure rate $\lambda = 1/\text{MTTF}$)
  - Repair probability density: $g(t) = \mu e^{-\mu t}$ (Constant repair rate $\mu = 1/\text{MTTR}$)
- **Laplace Transform Definition:**
  $$\mathcal{L}[h(t)] = \tilde{h}(s) = \int_0^\infty e^{-st} h(t) \, dt \quad (s = \alpha + j\omega)$$
  - Transform of an exponential: $\mathcal{L}[e^{-at}] = \frac{1}{s + a}$
  - Transform of a constant ($1$): $\mathcal{L}[1] = \frac{1}{s}$
- **Convolution Theorem:**
  $$\mathcal{L}\left[ \int_0^t h_1(t - u) h_2(u) \, du \right] = \mathcal{L}[h_1(t)] \cdot \mathcal{L}[h_2(t)]$$

---

## 2. Important Points

### 1. Transforming the Coupled Renewal Equations into the $s$-Domain
Applying the convolution theorem to the integral renewal equations:
1. **Failure Intensity in $s$-Domain:**
   $$\mathcal{L}[w(t)] = \mathcal{L}[f(t)] + \mathcal{L}[f(t)] \cdot \mathcal{L}[v(t)]$$
2. **Repair Intensity in $s$-Domain:**
   $$\mathcal{L}[v(t)] = \mathcal{L}[g(t)] \cdot \mathcal{L}[w(t)]$$

Substituting the Laplace transforms of the exponential densities:
$$\mathcal{L}[f(t)] = \frac{\lambda}{s + \lambda}, \quad \mathcal{L}[g(t)] = \frac{\mu}{s + \mu}$$
$$\mathcal{L}[w(t)] = \frac{\lambda}{s + \lambda} + \left(\frac{\lambda}{s + \lambda}\right) \left(\frac{\mu}{s + \mu}\right) \mathcal{L}[w(t)]$$

---

### 2. Algebraic Solution and Partial Fraction Inversion
Rearranging to isolate $\mathcal{L}[w(t)]$:
$$\left[ 1 - \frac{\lambda \mu}{(s + \lambda)(s + \mu)} \right] \mathcal{L}[w(t)] = \frac{\lambda}{s + \lambda}$$
$$\left[ \frac{s^2 + (\lambda + \mu)s + \lambda \mu - \lambda \mu}{(s + \lambda)(s + \mu)} \right] \mathcal{L}[w(t)] = \frac{\lambda}{s + \lambda}$$
$$\frac{s(s + \lambda + \mu)}{(s + \lambda)(s + \mu)} \mathcal{L}[w(t)] = \frac{\lambda}{s + \lambda}$$
$$\mathcal{L}[w(t)] = \frac{\lambda(s + \mu)}{s(s + \lambda + \mu)}$$

Expanding into partial fractions:
$$\frac{\lambda(s + \mu)}{s(s + \lambda + \mu)} = \frac{A}{s} + \frac{B}{s + \lambda + \mu}$$
- Evaluating residue $A$:
  $$A = \lim_{s \to 0} \frac{\lambda(s + \mu)}{s + \lambda + \mu} = \frac{\lambda \mu}{\lambda + \mu}$$
- Evaluating residue $B$:
  $$B = \lim_{s \to -(\lambda + \mu)} \frac{\lambda(s + \mu)}{s} = \frac{\lambda(-\lambda)}{-(\lambda + \mu)} = \frac{\lambda^2}{\lambda + \mu}$$

Taking the inverse Laplace transform ($\mathcal{L}^{-1}$):
$$\boxed{w(t) = \frac{\lambda \mu}{\lambda + \mu} + \frac{\lambda^2}{\lambda + \mu} e^{-(\lambda + \mu)t}}$$

By exact substitution into $\mathcal{L}[v(t)] = \frac{\mu}{s + \mu} \mathcal{L}[w(t)]$:
$$\mathcal{L}[v(t)] = \frac{\lambda \mu}{s(s + \lambda + \mu)} = \frac{\lambda \mu}{\lambda + \mu} \left[ \frac{1}{s} - \frac{1}{s + \lambda + \mu} \right]$$
$$\boxed{v(t) = \frac{\lambda \mu}{\lambda + \mu} - \frac{\lambda \mu}{\lambda + \mu} e^{-(\lambda + \mu)t}}$$

---

### 3. Dynamic Unavailability $Q(t)$ and Availability $A(t)$
Using the net intensity balance $\frac{dQ(t)}{dt} = w(t) - v(t)$:
$$\frac{dQ(t)}{dt} = \left[ \frac{\lambda \mu}{\lambda + \mu} + \frac{\lambda^2}{\lambda + \mu} e^{-(\lambda + \mu)t} \right] - \left[ \frac{\lambda \mu}{\lambda + \mu} - \frac{\lambda \mu}{\lambda + \mu} e^{-(\lambda + \mu)t} \right] = \lambda e^{-(\lambda + \mu)t}$$
Integrating from $0$ to $t$ with initial condition $Q(0) = 0$:
$$Q(t) = \int_0^t \lambda e^{-(\lambda + \mu)u} \, du = \left[ -\frac{\lambda}{\lambda + \mu} e^{-(\lambda + \mu)u} \right]_0^t$$
$$\boxed{Q(t) = \frac{\lambda}{\lambda + \mu} \left[ 1 - e^{-(\lambda + \mu)t} \right]}$$
$$\boxed{A(t) = 1 - Q(t) = \frac{\mu}{\lambda + \mu} + \frac{\lambda}{\lambda + \mu} e^{-(\lambda + \mu)t}}$$

---

### 4. Steady-State / Asymptotic Limits ($t \to \infty$)
As operating time becomes large ($t \gg \frac{1}{\lambda + \mu}$), the transient exponential term decays to zero ($e^{-(\lambda + \mu)t} \to 0$):
- **Steady-State Unavailability ($Q_{\text{ss}}$):**
  $$Q_{\text{ss}} = \lim_{t \to \infty} Q(t) = \frac{\lambda}{\lambda + \mu} = \frac{1/\mu}{1/\lambda + 1/\mu} = \frac{\text{MTTR}}{\text{MTTF} + \text{MTTR}}$$
- **Steady-State Availability ($A_{\text{ss}}$):**
  $$A_{\text{ss}} = \lim_{t \to \infty} A(t) = \frac{\mu}{\lambda + \mu} = \frac{1/\lambda}{1/\lambda + 1/\mu} = \frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}}$$
- **Steady-State Intensities:**
  $$\lim_{t \to \infty} w(t) = \lim_{t \to \infty} v(t) = \frac{\lambda \mu}{\lambda + \mu}$$
  In the stationary regime, the rate of system failures exactly balances the rate of completed repairs.

---

## 3. Differences / Examples

### Transient vs. Steady-State Parameter Comparison
| Process Metric | Time-Dependent Expression (Transient) | Steady-State Limit ($t \to \infty$) | Form in Terms of MTTF and MTTR |
| :--- | :--- | :--- | :--- |
| **Unavailability $Q(t)$** | $\frac{\lambda}{\lambda + \mu}[1 - e^{-(\lambda+\mu)t}]$ | $\frac{\lambda}{\lambda + \mu}$ | $\frac{\text{MTTR}}{\text{MTTF} + \text{MTTR}}$ |
| **Availability $A(t)$** | $\frac{\mu}{\lambda + \mu} + \frac{\lambda}{\lambda + \mu}e^{-(\lambda+\mu)t}$ | $\frac{\mu}{\lambda + \mu}$ | $\frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}}$ |
| **Failure Intensity $w(t)$** | $\frac{\lambda\mu}{\lambda+\mu} + \frac{\lambda^2}{\lambda+\mu}e^{-(\lambda+\mu)t}$ | $\frac{\lambda\mu}{\lambda + \mu}$ | $\frac{1}{\text{MTTF} + \text{MTTR}}$ |
| **Repair Intensity $v(t)$** | $\frac{\lambda\mu}{\lambda+\mu} - \frac{\lambda\mu}{\lambda+\mu}e^{-(\lambda+\mu)t}$ | $\frac{\lambda\mu}{\lambda + \mu}$ | $\frac{1}{\text{MTTF} + \text{MTTR}}$ |

---

### Worked Numerical Example: Refinery Booster Pump
A refinery booster pump operates with:
- Mean Time to Failure: $\text{MTTF} = 500 \text{ hours} \implies \lambda = \frac{1}{500} = 0.002 \text{ hr}^{-1}$
- Mean Time to Repair: $\text{MTTR} = 20 \text{ hours} \implies \mu = \frac{1}{20} = 0.050 \text{ hr}^{-1}$

1. **Sum of Process Rates:**
   $$\lambda + \mu = 0.002 + 0.050 = 0.052 \text{ hr}^{-1}$$
2. **Steady-State Availability and Unavailability:**
   $$A_{\text{ss}} = \frac{500}{500 + 20} = \frac{500}{520} \approx 0.9615 \quad (96.15\%)$$
   $$Q_{\text{ss}} = \frac{20}{500 + 20} = \frac{20}{520} \approx 0.0385 \quad (3.85\%)$$
3. **Transient Unavailability at $t = 24 \text{ hours}$:**
   $$Q(24) = 0.0385 \left[ 1 - e^{-0.052 \times 24} \right] = 0.0385 \left[ 1 - e^{-1.248} \right] = 0.0385 [1 - 0.2871] \approx 0.0274 \quad (2.74\%)$$
   Notice that initially at $t = 0$, $Q(0) = 0$. Unavailability climbs monotonically toward its steady-state asymptote of $3.85\%$.

---

## 4. Must Remember

- The convolution theorem of Laplace transforms converts complex integral renewal equations into simple linear algebraic equations in the $s$-domain.
- For exponential failure and repair processes, dynamic unavailability is:
  $$Q(t) = \frac{\lambda}{\lambda + \mu}\left[ 1 - e^{-(\lambda + \mu)t} \right]$$
- Steady-state availability and unavailability depend strictly on the ratio of MTTF to MTTR:
  $$A_{\text{ss}} = \frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}}, \quad Q_{\text{ss}} = \frac{\text{MTTR}}{\text{MTTF} + \text{MTTR}}$$
- In the steady state, unconditional failure intensity $w(t)$ and unconditional repair intensity $v(t)$ become identical:
  $$\lim_{t \to \infty} w(t) = \lim_{t \to \infty} v(t) = \frac{\lambda \mu}{\lambda + \mu} = \frac{1}{\text{MTTF} + \text{MTTR}}$$
- The relaxation time (time required for transients to settle) is governed by the time constant $\tau = \frac{1}{\lambda + \mu}$.

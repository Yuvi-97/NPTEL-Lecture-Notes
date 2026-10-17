# Week 7 – Lecture 3: Quantification of Basic Events: Failure & Repair Intensities

## 1. Key Concepts

### Integral Renewal Theory of Repairable Systems
- **Renewal Process Foundation:** In a repairable asset, failures and repairs occur alternately over time. Evaluating system availability requires quantifying the rates at which failures and repairs occur, accounting for all previous lifecycle transitions.
- **Unconditional Failure Intensity ($w(t)$):** The probability that a component fails per unit time in $[t, t + dt]$, given only that it was as-good-as-new at $t = 0$.
- **Unconditional Repair Intensity ($v(t)$):** The probability that a component completes repair per unit time in $[t, t + dt]$, given only that it was as-good-as-new at $t = 0$.
- **Conditional Failure Intensity ($\lambda(t)$):** The failure rate per unit time conditioned on the component being operational (normal) at time $t$.
- **Conditional Repair Intensity ($\mu(t)$):** The repair completion rate per unit time conditioned on the component being in the failed (down) state at time $t$.

---

## 2. Important Points

### 1. The Fundamental Integral Equations for $w(t)$ and $v(t)$
Given the unconditional failure probability density function $f(t)$ and repair probability density function $g(t)$, the intensities $w(t)$ and $v(t)$ satisfy coupled Volterra integral renewal equations:

1. **Derivation of Unconditional Failure Intensity ($w(t)$):**
   A component can experience failure in the time window $[t, t + dt]$ through two mutually exclusive pathways:
   - **Pathway 1 (No Prior Failure):** The component operated continuously from $t = 0$ to $t$ without any breakdown and experiences its very first failure at time $t$. This occurs with probability density:
     $$f(t)$$
   - **Pathway 2 (Subsequent Failure after Prior Repair):** The component experienced a previous failure, completed its most recent repair in the intermediate interval $[u, u + du]$ with unconditional repair intensity $v(u)$, remained in the normal state for the remaining duration $t - u$, and then fails at time $t$ with density $f(t - u)$.
   Integrating over all possible repair instants $u \in [0, t]$:
   $$w(t) = f(t) + \int_0^t v(u) f(t - u) \, du$$
2. **Derivation of Unconditional Repair Intensity ($v(t)$):**
   A component can complete a repair in $[t, t + dt]$ if it experienced a failure at some intermediate time $u \in [0, t]$ with unconditional failure intensity $w(u)$, remained under active repair for duration $t - u$, and completed restoration at time $t$ with density $g(t - u)$.
   Integrating over all possible failure instants $u \in [0, t]$:
   $$v(t) = \int_0^t w(u) g(t - u) \, du$$

---

### 2. Rigorous Derivation of Conditional Intensities ($\lambda(t)$ and $\mu(t)$)
Using conditional probability theorems, let:
- Event $A$: Component fails in $[t, t + dt]$.
- Event $C$: Component is in the normal (working) state at time $t$.
- Condition $W$: Component was as-good-as-new at $t = 0$.

1. **Conditional Failure Intensity ($\lambda(t)$):**
   The joint probability of being normal at $t$ and failing in $[t, t + dt]$ given initial condition $W$:
   $$P(A \cap C \mid W) = P(C \mid W) \cdot P(A \mid C \cap W)$$
   Since the time interval $dt$ is infinitesimally small, a failure in $[t, t + dt]$ implies that the component was necessarily normal at time $t$ ($A \implies C$). Therefore:
   $$P(A \cap C \mid W) = P(A \mid W) = w(t) \, dt$$
   Recognizing that $P(C \mid W) = A(t)$ (point availability) and $P(A \mid C \cap W) = \lambda(t) \, dt$ (conditional failure intensity):
   $$w(t) \, dt = A(t) \cdot \lambda(t) \, dt$$
   $$\boxed{w(t) = \lambda(t) \cdot A(t) = \lambda(t) [1 - Q(t)] \iff \lambda(t) = \frac{w(t)}{A(t)} = \frac{w(t)}{1 - Q(t)}}$$
2. **Conditional Repair Intensity ($\mu(t)$):**
   By exact mathematical analogy for the restoration process:
   $$\boxed{v(t) = \mu(t) \cdot Q(t) = \mu(t) [1 - A(t)] \iff \mu(t) = \frac{v(t)}{Q(t)} = \frac{v(t)}{1 - A(t)}}$$

---

### 3. Expected Counts and Unavailability Balance
1. **Expected Number of Failures ($W(0, t)$):**
   The cumulative expected number of failures occurring in interval $[0, t]$:
   $$W(0, t) = \int_0^t w(u) \, du$$
2. **Expected Number of Repairs ($V(0, t)$):**
   The cumulative expected number of completed repairs in interval $[0, t]$:
   $$V(0, t) = \int_0^t v(u) \, du$$
3. **The Unavailability State Equation:**
   At any time $t$, point unavailability is the exact net difference between cumulative expected failures and cumulative expected repairs:
   $$Q(t) = W(0, t) - V(0, t) = \int_0^t \left[ w(u) - v(u) \right] \, du$$
   Differentiating both sides yields the rate of change of unavailability:
   $$\frac{dQ(t)}{dt} = w(t) - v(t)$$

---

## 3. Differences / Examples

### Synthesis Matrix: Failure and Repair Parameter Duality
| Parameter Category | Failure Characteristic | Repair Characteristic | Interconnecting Formula |
| :--- | :--- | :--- | :--- |
| **Probability Density** | Failure Density $f(t)$ | Repair Density $g(t)$ | Convolution inputs |
| **Unconditional Intensity** | $w(t) = f(t) + \int_0^t v(u)f(t-u)du$ | $v(t) = \int_0^t w(u)g(t-u)du$ | Volterra renewal pair |
| **Conditional Intensity** | $\lambda(t) = \frac{w(t)}{A(t)}$ | $\mu(t) = \frac{v(t)}{Q(t)}$ | Normalized by state probability |
| **Cumulative Expected Count** | $W(0, t) = \int_0^t w(u)du$ | $V(0, t) = \int_0^t v(u)du$ | Net State: $Q(t) = W(0, t) - V(0, t)$ |

---

### Boundary Cases
1. **Non-Repairable Component:**
   - Repair is impossible $\implies g(t) = 0 \implies v(t) = 0$.
   - The integral renewal equation reduces to:
     $$w(t) = f(t), \quad V(0, t) = 0 \implies Q(t) = W(0, t) = \int_0^t f(u) du = F(t)$$
2. **Instantaneous Repair ($\text{MTTR} \to 0$):**
   - Repair occurs instantaneously upon failure $\implies v(t) = w(t)$.
   - Unavailability vanishes: $Q(t) = W(0, t) - V(0, t) = 0 \implies A(t) = 1.0$.

---

## 4. Must Remember

- The integral renewal equations for repairable components are:
  $$w(t) = f(t) + \int_0^t v(u) f(t - u) \, du$$
  $$v(t) = \int_0^t w(u) g(t - u) \, du$$
- Conditional intensities are linked to unconditional intensities through state probabilities:
  $$w(t) = \lambda(t) \cdot A(t) \quad \text{and} \quad v(t) = \mu(t) \cdot Q(t)$$
- Unavailability at any time $t$ is the exact difference between cumulative expected failures and cumulative completed repairs:
  $$Q(t) = W(0, t) - V(0, t)$$
- The instantaneous rate of change of unavailability equals the net difference between failure intensity and repair intensity:
  $$\frac{dQ(t)}{dt} = w(t) - v(t)$$
- For a non-repairable component, $v(t) = 0$, causing $w(t) = f(t)$ and $Q(t) = F(t)$.

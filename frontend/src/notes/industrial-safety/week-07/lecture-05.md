# Week 7 – Lecture 5: Computation of Combined Process Parameters: Markov Analysis

## 1. Key Concepts

### Markov Analysis in System Safety
- **Continuous-Time Markov Chains (CTMC):** A stochastic modeling methodology used to evaluate multi-state repairable engineering systems. It assumes that future state transitions depend solely on the current state and are completely independent of past operating history (the Markovian memoryless property).
- **Constant Transition Rates:** Valid when failure rates ($\lambda$) and repair rates ($\mu$) are time-independent, corresponding to components operating in their useful life regime with exponentially distributed transition times.
- **State Space Formulation:** The operational health of an asset is categorized into mutually exclusive and collectively exhaustive discrete states (e.g., operational, degraded, failed-safe, failed-unsafe).
- **Transition Probability Matrix:** In an infinitesimal time step $\Delta t$, the probability of transitioning from state $i$ to state $j$ is given by $q_{ij} \Delta t$, while the probability of remaining in state $i$ is $1 - \sum_{j \ne i} q_{ij} \Delta t$.

---

## 2. Important Points

### 1. Two-State Markov Model (Operational vs. Failed)
A repairable component operating with constant failure rate $\lambda$ and constant repair rate $\mu$:
- **State 0:** Normal / Operational state ($P_0(t) = A(t)$, Availability).
- **State 1:** Failed / Under repair state ($P_1(t) = Q(t)$, Unavailability).

```
          λ (Failure Rate)
    [ State 0 ] --------> [ State 1 ]
     (Normal)   <--------   (Failed)
          μ (Repair Rate)
```

1. **State Transition Probabilities in $[t, t + \Delta t]$:**
   - $P(0 \to 1) = \lambda \Delta t$
   - $P(0 \to 0) = 1 - \lambda \Delta t$
   - $P(1 \to 0) = \mu \Delta t$
   - $P(1 \to 1) = 1 - \mu \Delta t$
2. **Formulation of Chapman-Kolmogorov State Equations:**
   The probability of being in State 1 at time $t + \Delta t$:
   $$P_1(t + \Delta t) = P_0(t) \cdot P(0 \to 1) + P_1(t) \cdot P(1 \to 1)$$
   $$P_1(t + \Delta t) = P_0(t) (\lambda \Delta t) + P_1(t) (1 - \mu \Delta t)$$
   Subtracting $P_1(t)$ from both sides and dividing by $\Delta t$:
   $$\frac{P_1(t + \Delta t) - P_1(t)}{\Delta t} = \lambda P_0(t) - \mu P_1(t)$$
   Taking the limit as $\Delta t \to 0$:
   $$\frac{dP_1(t)}{dt} = \lambda P_0(t) - \mu P_1(t)$$
3. **Solving for Dynamic Unavailability $Q(t)$:**
   Substituting $P_0(t) = 1 - P_1(t) = 1 - Q(t)$:
   $$\frac{dQ(t)}{dt} = \lambda [1 - Q(t)] - \mu Q(t) = \lambda - (\lambda + \mu)Q(t)$$
   Rearranging into standard first-order linear ODE form:
   $$\frac{dQ(t)}{dt} + (\lambda + \mu)Q(t) = \lambda$$
   Using integrating factor $I(t) = e^{(\lambda + \mu)t}$:
   $$Q(t) e^{(\lambda + \mu)t} = \int \lambda e^{(\lambda + \mu)t} \, dt = \frac{\lambda}{\lambda + \mu} e^{(\lambda + \mu)t} + C$$
   Applying the initial condition that the component is as-good-as-new at $t = 0$ ($Q(0) = 0 \implies C = -\frac{\lambda}{\lambda + \mu}$):
   $$\boxed{Q(t) = \frac{\lambda}{\lambda + \mu}\left[ 1 - e^{-(\lambda + \mu)t} \right]}$$
   $$\boxed{A(t) = 1 - Q(t) = \frac{\mu}{\lambda + \mu} + \frac{\lambda}{\lambda + \mu} e^{-(\lambda + \mu)t}}$$
   This differential formulation yields the identical closed-form result derived via Laplace renewal analysis.

---

### 2. Three-State Markov Model: Fail-Safe vs. Fail-Unsafe Analysis
In safety-critical installations (e.g., Emergency Shutdown Valves, burner management systems), failures are categorized by their hazard consequence:
- **State 0:** Normal operational state.
- **State 1:** Failed Safely (e.g., valve trips closed unnecessarily, causing production loss but maintaining plant safety; rate $\lambda_s$, repair rate $\mu_s$).
- **State 2:** Failed Unsafely (e.g., valve jams open, failing to isolate high pressure during an emergency; rate $\lambda_u$, repair rate $\mu_u$).
*(Note: There is no direct transition between State 1 and State 2; repairs always restore the component to the normal State 0).*

```
                     λs (Safe Failure)
        +----------------------------------------> [ State 1 ]
        |                                           (Fail-Safe)
        |            μs (Safe Repair)                   |
        |   <-------------------------------------------+
   [ State 0 ]
    (Normal)
        |            μu (Unsafe Repair)                 |
        |   <-------------------------------------------+
        |                                           [ State 2 ]
        +----------------------------------------> (Fail-Unsafe)
                    λu (Unsafe Failure)
```

1. **System of Differential Equations:**
   $$\frac{dP_0(t)}{dt} = -(\lambda_s + \lambda_u)P_0(t) + \mu_s P_1(t) + \mu_u P_2(t)$$
   $$\frac{dP_1(t)}{dt} = \lambda_s P_0(t) - \mu_s P_1(t)$$
   $$\frac{dP_2(t)}{dt} = \lambda_u P_0(t) - \mu_u P_2(t)$$
2. **Steady-State Algebraic Solution ($\frac{dP_i}{dt} = 0$):**
   Setting derivatives to zero:
   $$\lambda_s P_0 = \mu_s P_1 \implies P_1 = \left(\frac{\lambda_s}{\mu_s}\right) P_0$$
   $$\lambda_u P_0 = \mu_u P_2 \implies P_2 = \left(\frac{\lambda_u}{\mu_u}\right) P_0$$
3. **Applying Total Probability Conservation:**
   $$P_0 + P_1 + P_2 = 1.0 \implies P_0 \left[ 1 + \frac{\lambda_s}{\mu_s} + \frac{\lambda_u}{\mu_u} \right] = 1.0$$
   $$\boxed{P_0 = A_{\text{ss}} = \frac{1}{1 + \frac{\lambda_s}{\mu_s} + \frac{\lambda_u}{\mu_u}}}$$
   $$\boxed{P_1 = Q_{s,\text{ss}} = \frac{\frac{\lambda_s}{\mu_s}}{1 + \frac{\lambda_s}{\mu_s} + \frac{\lambda_u}{\mu_u}}}$$
   $$\boxed{P_2 = Q_{u,\text{ss}} = \frac{\frac{\lambda_u}{\mu_u}}{1 + \frac{\lambda_s}{\mu_s} + \frac{\lambda_u}{\mu_u}}}$$

---

## 3. Differences / Examples

### 2-State vs. 3-State Markov Formulations
| Dimension | 2-State Model | 3-State Model (Safety-Critical) |
| :--- | :--- | :--- |
| **State Definitions** | State 0 (Up), State 1 (Down) | State 0 (Normal), State 1 (Fail-Safe), State 2 (Fail-Unsafe) |
| **Failure Parameters** | Single failure rate $\lambda$ | Safe rate $\lambda_s$, Unsafe rate $\lambda_u$ |
| **Repair Parameters** | Single repair rate $\mu$ | Safe repair $\mu_s$, Unsafe repair $\mu_u$ |
| **Governing Equations** | 1 differential equation | 3 coupled differential equations |
| **Safety Focus** | Plant production availability | Dangerous undetected failure risk ($P_2$) |

---

### Worked Numerical Example: High-Pressure Isolation Valve
An emergency isolation valve has the following operational failure and repair parameters:
- Safe failure rate (spurious closure): $\lambda_s = 0.004 \text{ hr}^{-1}$
- Safe repair rate: $\mu_s = 0.080 \text{ hr}^{-1} \implies \frac{\lambda_s}{\mu_s} = \frac{0.004}{0.080} = 0.050$
- Unsafe failure rate (jammed open): $\lambda_u = 0.001 \text{ hr}^{-1}$
- Unsafe repair rate (overhaul required): $\mu_u = 0.020 \text{ hr}^{-1} \implies \frac{\lambda_u}{\mu_u} = \frac{0.001}{0.020} = 0.050$

1. **Denominator Sum:**
   $$1 + \frac{\lambda_s}{\mu_s} + \frac{\lambda_u}{\mu_u} = 1 + 0.050 + 0.050 = 1.10$$
2. **Steady-State State Probabilities:**
   - **Operational Availability:**
     $$P_0 = \frac{1}{1.10} \approx 0.9091 \quad (90.91\%)$$
   - **Safe Unavailability (Nuisance Trip Downtime):**
     $$P_1 = \frac{0.050}{1.10} \approx 0.0455 \quad (4.55\%)$$
   - **Dangerous Unavailability (Catastrophic Hazard Risk):**
     $$P_2 = \frac{0.050}{1.10} \approx 0.0455 \quad (4.55\%)$$
   - **Total System Unavailability:**
     $$Q_{\text{total}} = P_1 + P_2 = 4.55\% + 4.55\% = 9.10\%$$

---

## 4. Must Remember

- Markov models are valid under the assumption of **constant transition rates** (exponential failure and repair processes, memoryless transitions).
- In a 2-state Markov model, dynamic unavailability is governed by:
  $$\frac{dQ(t)}{dt} + (\lambda + \mu)Q(t) = \lambda \implies Q(t) = \frac{\lambda}{\lambda + \mu}\left[ 1 - e^{-(\lambda + \mu)t} \right]$$
- In a 3-state fail-safe / fail-unsafe model, operational availability is:
  $$P_0 = \frac{1}{1 + \frac{\lambda_s}{\mu_s} + \frac{\lambda_u}{\mu_u}}$$
- Safe failures ($\lambda_s$) cause nuisance shutdowns and economic loss, whereas unsafe failures ($\lambda_u$) remain dormant and disable protection, leading to major industrial accidents.
- Steady-state Markov probabilities are found algebraically by setting all time derivatives to zero ($\frac{dP_i}{dt} = 0$) and applying total probability conservation $\sum P_i = 1.0$.

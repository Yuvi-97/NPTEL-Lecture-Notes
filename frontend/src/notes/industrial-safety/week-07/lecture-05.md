# Week 7 – Lecture 5: Computation of Combined Process Parameters: Markov Analysis

## 1. Key Concepts
- **Continuous-Time Markov Chain (CTMC):** A stochastic state-transition model where future system states depend solely upon the present state, possessing the memoryless property.
- **State Space:** Discrete operational configurations of the system (e.g., State 0: Operating / Up; State 1: Failed / Under Repair).
- **Transition Rate Matrix ($Q$):** A square matrix containing transition rates between states, where non-diagonal elements $q_{ij}$ represent transition rates from state $i$ to state $j$, and row sums equal zero ($\sum_j q_{ij} = 0$).

## 2. Important Points
- **Two-State Markov Model Formulations:**
  - Let $P_0(t)$ be the probability of being in State 0 (Up) and $P_1(t)$ in State 1 (Down).
  - Transition rates: Failure rate $\lambda$ ($0 \to 1$); Repair rate $\mu$ ($1 \to 0$).
  - System of first-order linear differential equations:
    $$\frac{dP_0(t)}{dt} = -\lambda P_0(t) + \mu P_1(t)$$
    $$\frac{dP_1(t)}{dt} = \lambda P_0(t) - \mu P_1(t)$$
  - Boundary constraint: $P_0(t) + P_1(t) = 1$.
- **Transient Solution (with $P_0(0) = 1, P_1(0) = 0$):**
  $$P_0(t) = A(t) = \frac{\mu}{\lambda + \mu} + \frac{\lambda}{\lambda + \mu} e^{-(\lambda + \mu)t}$$
  $$P_1(t) = Q(t) = \frac{\lambda}{\lambda + \mu}\left[1 - e^{-(\lambda + \mu)t}\right]$$
- **Steady-State Solution ($\frac{dP_i}{dt} = 0$ as $t \to \infty$):**
  $$P_0 = \frac{\mu}{\lambda + \mu}, \quad P_1 = \frac{\lambda}{\lambda + \mu}$$
- **Extension to Multi-State Systems:** Readily models 3-state redundant parallel configurations (e.g., State 0: Both units operating, State 1: One unit failed, State 2: Both units failed).

## 3. Differences / Examples
| Feature | Laplace Transform Method | Markov Analysis Method |
| :--- | :--- | :--- |
| **Foundation** | Solves renewal integral equations | Solves differential state-transition rate equations |
| **State Representation** | Focuses directly on availability $A(t)$ | Models all discrete operational states ($0, 1, 2, \dots$) |
| **System Complexity** | Becomes tedious for multi-component systems | Readily scales to multi-state Markov matrices using linear algebra |

## 4. Must Remember
- Markov modeling strictly requires **constant transition rates** ($\lambda$ and $\mu$ must be independent of time, following Exponential distributions).
- Setting derivatives to zero ($\frac{dP_i}{dt} = 0$) directly produces the algebraic system for steady-state probabilities.

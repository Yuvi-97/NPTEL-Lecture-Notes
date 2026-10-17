# Week 8 – Lecture 4: Systems Safety Quantification: Structure Function

## 1. Key Concepts

### Algebraic Formulation of System Safety Logic
- **Structure Function ($\Psi(Y)$):** A deterministic Boolean function that maps the status of $n$ basic component events into the binary state of the overall system Top Event:
  $$\Psi: \{0, 1\}^n \longrightarrow \{0, 1\}$$
- **Component Binary Indicator ($Y_i$):**
  $$Y_i = \begin{cases} 1, & \text{if basic event } B_i \text{ occurs (component } i \text{ is failed / unavailable)} \\ 0, & \text{if basic event } B_i \text{ does not occur (component } i \text{ is operational / normal)} \end{cases}$$
- **Top Event Binary Indicator ($\Psi(Y)$):**
  $$\Psi(Y) = \begin{cases} 1, & \text{if the system Top Event occurs (system is unavailable)} \\ 0, & \text{if the system Top Event does not occur (system is available)} \end{cases}$$
- **Expected Value Principle:** Because $Y_i$ is a binary Bernoulli random variable, its mathematical expectation is identically equal to its failure probability (unavailability):
  $$E[Y_i] = 1 \cdot P(Y_i = 1) + 0 \cdot P(Y_i = 0) = P(B_i) = Q_i$$
  Consequently, system unavailability is the mathematical expectation of the system structure function:
  $$Q_s = E[\Psi(Y)]$$

---

## 2. Important Points

### 1. Translation: Boolean Logic to Algebraic Operations
The fundamental Boolean logic operations of fault trees map directly into algebraic polynomials:

1. **Event Complement ($\bar{B}_i$):**
   $$\bar{B}_i \iff 1 - Y_i$$
2. **AND Gate (Logical Intersection / Series Failure):**
   The Top Event occurs only if all $n$ input events occur:
   $$B_1 \cap B_2 \cap \dots \cap B_n \iff \prod_{i=1}^n Y_i$$
   For two events: $\Psi(Y) = Y_1 Y_2$.
3. **OR Gate (Logical Union / Parallel Failure):**
   The Top Event occurs if at least one input event occurs:
   $$B_1 \cup B_2 \cup \dots \cup B_n \iff 1 - \prod_{i=1}^n (1 - Y_i)$$
   For two events:
   $$\Psi(Y) = 1 - (1 - Y_1)(1 - Y_2) = Y_1 + Y_2 - Y_1 Y_2$$
4. **Idempotency Law:**
   Because each indicator variable takes only values in $\{0, 1\}$:
   $$Y_i^k = Y_i \quad \forall k \ge 1$$
   Higher powers of indicator variables resulting from algebraic expansions must always be reduced to first order before taking expectations.

---

### 2. Shannon Pivotal Decomposition (Pivotal Expansion)
- **Theoretical Basis:** Pivotal decomposition partitions the structure function around a specific "pivot" component $i$, allowing complex, cross-linked, or entangled systems (such as bridge networks) to be broken into two simpler subsystems:
  $$\boxed{\Psi(Y) = Y_i \cdot \Psi(1_i, Y) + (1 - Y_i) \cdot \Psi(0_i, Y)}$$
  where:
  - $\Psi(1_i, Y)$ is the conditional structure function assuming component $i$ has failed ($Y_i = 1$).
  - $\Psi(0_i, Y)$ is the conditional structure function assuming component $i$ is functioning normally ($Y_i = 0$).
- **Unavailability via Pivotal Decomposition:**
  Taking the expectation of both sides:
  $$Q_s = E[\Psi(Y)] = Q_i \cdot E[\Psi(1_i, Y)] + (1 - Q_i) \cdot E[\Psi(0_i, Y)]$$
  This recursive expansion allows any non-series-parallel system to be solved algebraically without generating all $2^n$ truth table states.

---

### 3. Coherent Systems and Monotonicity
A system safety model is defined as **coherent** if it satisfies two physical postulates:
1. **Monotonicity (Non-Decreasing Nature):**
   $$\Psi(Y_1, \dots, 1_i, \dots, Y_n) \ge \Psi(Y_1, \dots, 0_i, \dots, Y_n) \quad \forall i$$
   Physically, the failure of an additional component can never improve system safety or cause an unavailable system to become operational.
2. **Component Relevancy:**
   Every component $i$ is capable of affecting system status under at least one operating state vector:
   $$\Psi(1_i, Y) \ne \Psi(0_i, Y) \quad \text{for some } Y$$
   There are no superfluous components that have zero influence on system safety.

---

## 3. Differences / Examples

### Boolean Logic vs. Algebraic Structure Functions
| Logical Concept | Boolean Notation | Algebraic Structure Form | Expectation / Probability |
| :--- | :--- | :--- | :--- |
| **Component Failure** | $B_i$ | $Y_i \in \{0, 1\}$ | $E[Y_i] = Q_i$ |
| **Component Success** | $\bar{B}_i$ | $1 - Y_i$ | $E[1 - Y_i] = 1 - Q_i = A_i$ |
| **AND Gate (2 Inputs)** | $B_1 \cap B_2$ | $Y_1 Y_2$ | $E[Y_1 Y_2] = Q_1 Q_2$ |
| **OR Gate (2 Inputs)** | $B_1 \cup B_2$ | $1 - (1 - Y_1)(1 - Y_2)$ | $Q_1 + Q_2 - Q_1 Q_2$ |
| **Repeated Variable** | $B_1 \cap B_1 = B_1$ | $Y_1^2 = Y_1$ | $E[Y_1^2] = E[Y_1] = Q_1$ |

---

### Worked Example: Solving a Classical Bridge Network via Shannon Decomposition
Consider a 5-component bridge network with components $1, 2, 3, 4, 5$, where component $5$ serves as the cross-connecting bridge:
- **Choose Component 5 as the Pivot:**
  $$\Psi(Y) = Y_5 \cdot \Psi(1_5, Y) + (1 - Y_5) \cdot \Psi(0_5, Y)$$
1. **Case 1: Pivot Component 5 Fails ($Y_5 = 1$, Bridge Open):**
   The system reduces to two parallel branches $(1 \text{ and } 2)$ and $(3 \text{ and } 4)$:
   $$\Psi(1_5, Y) = (1 - (1 - Y_1)(1 - Y_3)) \cdot (1 - (1 - Y_2)(1 - Y_4))$$
2. **Case 2: Pivot Component 5 Works ($Y_5 = 0$, Bridge Conducts):**
   The system reduces to series-parallel cross branches.
3. Combining the two sub-expressions via pivotal expansion yields the exact polynomial structure function without requiring full $2^5 = 32$ row truth table enumeration.

---

## 4. Must Remember

- Structure functions map binary component states $Y_i \in \{0, 1\}$ directly to the binary system top event state $\Psi(Y) \in \{0, 1\}$.
- System unavailability is mathematically identical to the expected value of the structure function:
  $$Q_s = E[\Psi(Y)]$$
- The algebraic equivalents of basic logic gates are:
  - AND Gate: $\Psi(Y) = \prod_{i=1}^n Y_i$
  - OR Gate: $\Psi(Y) = 1 - \prod_{i=1}^n (1 - Y_i)$
- The Boolean idempotency rule $Y_i^k = Y_i$ must be strictly enforced when expanding structure polynomials containing repeated basic events.
- Shannon pivotal decomposition decouples complex systems around a chosen pivot component $i$:
  $$\Psi(Y) = Y_i \cdot \Psi(1_i, Y) + (1 - Y_i) \cdot \Psi(0_i, Y)$$
- In a coherent system, the structure function is monotonically non-decreasing, meaning component failures cannot transition a failed system back into an operational state.

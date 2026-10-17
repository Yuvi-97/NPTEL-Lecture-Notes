# Week 8 – Lecture 3: Systems Safety Quantification: Minimal Cut and Minimal Path Representation Using Structure Function

## 1. Key Concepts

### Structure Functions in Fault Tree Decomposition
- **Structure Function Definition:** An algebraic mapping that relates the binary state of the system Top Event ($\Psi(Y) \in \{0, 1\}$) to the binary state vector of its constituent basic events ($Y = (Y_1, Y_2, \dots, Y_n) \in \{0, 1\}^n$):
  - $Y_i = 1$ if basic event $i$ occurs (failed), and $Y_i = 0$ if it does not occur (normal).
  - $\Psi(Y) = 1$ if the Top Event occurs (system unavailable), and $\Psi(Y) = 0$ if it does not occur (system available).
- **Two Canonical Decompositions:**
  1. **Minimal Cut Set (MCS) Representation:** Failure-oriented canonical form where the system Top Event is modeled as an OR gate over all minimal cut sets.
  2. **Minimal Path Set (MPS) Representation:** Success-oriented canonical form where the system Top Event is modeled as an AND gate over all minimal path sets.

---

## 2. Important Points

### 1. Minimal Cut Set (MCS) Representation
- **Architectural Equivalent:** Any complex, multi-gate fault tree can be reduced to an equivalent two-level logic tree:
  - **Level 1 (Top Gate):** A single master **OR gate** combining all $m$ minimal cut sets.
  - **Level 2 (Input Gates):** $m$ distinct **AND gates**, where each AND gate represents a specific minimal cut set containing $n_j$ basic events.

```
                  [ Top Event Ψ(Y) ]
                          |
                      ( OR Gate )
                    /     |     \
                  /       |       \
          ( AND 1 )   ( AND 2 )   ( AND m )
           /  |  \     /  |  \     /  |  \
          Y11 Y21..   Y12 Y22..   Y1m Y2m..
```

1. **Cut Set Structure Function ($K_j(Y)$):**
   For the $j$-th minimal cut set (represented by an AND gate with $n_j$ inputs):
   $$K_j(Y) = \prod_{i=1}^{n_j} Y_{ij}$$
   $K_j(Y) = 1$ if and only if every basic event in cut set $j$ occurs simultaneously.
2. **Top Event Structure Function ($\Psi(Y)$):**
   Combining all $m$ cut sets through the master OR gate:
   $$\Psi(Y) = 1 - \prod_{j=1}^m [1 - K_j(Y)] = 1 - \prod_{j=1}^m \left[ 1 - \prod_{i=1}^{n_j} Y_{ij} \right]$$

---

### 2. Minimal Path Set (MPS) Representation
- **Architectural Equivalent:** Dual success-oriented representation:
  - **Level 1 (Top Gate):** A master **AND gate** combining all $p$ minimal path sets.
  - **Level 2 (Input Gates):** $p$ distinct **OR gates**, where each OR gate represents a minimal path set containing components that must be traversed to ensure success.

1. **Path Set Structure Function ($\rho_j(Y)$):**
   For the $j$-th minimal path set (represented by an OR gate with $n_j$ inputs):
   $$\rho_j(Y) = 1 - \prod_{i=1}^{n_j} (1 - Y_{ij})$$
2. **Top Event Structure Function ($\Psi(Y)$):**
   Combining all $p$ path sets through the master AND gate:
   $$\Psi(Y) = \prod_{j=1}^p \rho_j(Y) = \prod_{j=1}^p \left[ 1 - \prod_{i=1}^{n_j} (1 - Y_{ij}) \right]$$

---

### 3. Boolean Idempotency and Product Expansion Rule
- **The Dependency Problem:** In realistic engineering systems, the same basic event frequently appears in multiple cut sets or path sets. For example, if basic event $A$ is present in both cut set 1 and cut set 2, the indicator variable $Y_A$ appears in both product terms.
- **Idempotency Law:** Because indicator variables are binary ($Y_i \in \{0, 1\}$), multiplying an indicator variable by itself does not change its value:
  $$Y_i \cdot Y_i = Y_i^2 = Y_i, \quad Y_i^k = Y_i \quad \forall k \ge 1$$
- **Expansion Protocol for Probability Quantification:**
  To compute system unavailability $Q_s = E[\Psi(Y)]$:
  1. If cut sets share common basic events, one **must expand the polynomial algebraically to its lowest irreducible form**.
  2. Apply the idempotency rule ($Y_i^k \to Y_i$) to eliminate duplicate powers.
  3. Replace each indicator variable $Y_i$ with its expected value / basic event probability $E[Y_i] = P(B_i) = Q_i$.
  > **Crucial Pitfall:** Evaluating $E[\Psi(Y)]$ before expanding product terms will falsely treat repeated events as independent, introducing substantial mathematical error.

---

## 3. Differences / Examples

### Minimal Cut Sets vs. Minimal Path Sets
| Dimension | Minimal Cut Set (MCS) Representation | Minimal Path Set (MPS) Representation |
| :--- | :--- | :--- |
| **Logic Orientation** | Failure-oriented (Fault Tree equivalent) | Success-oriented (Reliability Path equivalent) |
| **Top-Level Gate** | Master **OR Gate** | Master **AND Gate** |
| **Sub-Level Gates** | $m$ parallel **AND Gates** | $p$ series **OR Gates** |
| **Structure Function** | $\Psi(Y) = 1 - \prod_{j=1}^m [1 - K_j(Y)]$ | $\Psi(Y) = \prod_{j=1}^p \rho_j(Y)$ |
| **Efficiency Metric** | Optimal when failure combinations are few | Optimal when success pathways are few |

---

### Worked Algebraic Derivation: Three-Component System
Consider a fault tree with Top Event $T = A \cap (B \cup C)$, where basic events $A, B, C$ have indicator variables $Y_A, Y_B, Y_C$:
1. **Identify Minimal Cut Sets:**
   Distributing $A$ over the union yields two minimal cut sets:
   $$\text{Cut Set 1: } K_1 = \{A, B\} \implies K_1(Y) = Y_A Y_B$$
   $$\text{Cut Set 2: } K_2 = \{A, C\} \implies K_2(Y) = Y_A Y_C$$
2. **Formulate Structure Function:**
   $$\Psi(Y) = 1 - [1 - K_1(Y)][1 - K_2(Y)] = 1 - [1 - Y_A Y_B][1 - Y_A Y_C]$$
3. **Expand and Apply Idempotency:**
   $$\Psi(Y) = 1 - \left[ 1 - Y_A Y_B - Y_A Y_C + (Y_A Y_B)(Y_A Y_C) \right]$$
   $$\Psi(Y) = Y_A Y_B + Y_A Y_C - Y_A^2 Y_B Y_C$$
   Applying idempotency $Y_A^2 = Y_A$:
   $$\Psi(Y) = Y_A Y_B + Y_A Y_C - Y_A Y_B Y_C$$
4. **Compute System Unavailability:**
   $$Q_s = E[\Psi(Y)] = E[Y_A Y_B] + E[Y_A Y_C] - E[Y_A Y_B Y_C]$$
   Assuming independent basic events:
   $$Q_s = Q_A Q_B + Q_A Q_C - Q_A Q_B Q_C$$

---

## 4. Must Remember

- The structure function $\Psi(Y)$ maps component state indicators $Y_i \in \{0, 1\}$ directly to the system state.
- In minimal cut set representation, the top structure is an OR gate of AND gates:
  $$\Psi(Y) = 1 - \prod_{j=1}^m \left[ 1 - \prod_{i=1}^{n_j} Y_{ij} \right]$$
- In minimal path set representation, the top structure is an AND gate of OR gates:
  $$\Psi(Y) = \prod_{j=1}^p \left[ 1 - \prod_{i=1}^{n_j} (1 - Y_{ij}) \right]$$
- Whenever basic events appear in multiple cut sets, one must algebraically expand the expression and apply the Boolean idempotency rule $Y_i^k = Y_i$ before replacing variables with probabilities.
- System unavailability is mathematically equal to the expected value of the structure function: $Q_s = E[\Psi(Y)]$.

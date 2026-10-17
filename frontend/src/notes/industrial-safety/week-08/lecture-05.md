# Week 8 – Lecture 5: Systems Safety Quantification: Tutorial

## 1. Key Concepts

### Practical Implementation of System Safety Quantification
- **Dual Analytical Paradigms:** Industrial safety quantification can be executed using two complementary perspectives:
  1. **Failure-Oriented Approach (Fault Tree & Structure Function):** Focuses on hazard propagation, logic gates, and component unavailabilities ($Q_i$) to calculate overall **System Unavailability ($Q_s$)**.
  2. **Success-Oriented Approach (Reliability Block Diagram & Success Tree):** Focuses on continuous operational pathways, component reliabilities/availabilities ($A_i$), and series-parallel networks to calculate overall **System Availability ($A_s$)**.
- **Conservation Check:** For any coherent binary system, the solutions derived from both approaches must strictly obey the fundamental conservation law:
  $$A_s + Q_s = 1.000$$

---

## 2. Important Points

### Problem Statement: Tail Gas Quench and Clean-up Plant
A comprehensive safety quantification is performed on an industrial calciner tail gas quench and clean-up plant designed to lower gas temperatures, saturate the stream with vapor, and trap abrasive particulates before gas enters an absorption column.

#### Plant Equipment Failure Probabilities:
- **Booster Fan ($A$):** $P(A) = 0.01$
- **Quench Water Pump 1 ($B$):** $P(B) = 0.10$
- **Quench Water Pump 2 ($C$):** $P(C) = 0.10$ (Standby pump)
- **Prescriber Feed Water Pump ($D$):** $P(D) = 0.01$
- **Slurry Recirculation Pump 1 ($E$):** $P(E) = 0.10$
- **Slurry Recirculation Pump 2 ($F$):** $P(F) = 0.10$ (Standby pump)
- **Particulate Mesh Pad Filter ($G$):** $P(G) = 0.01$

---

### 1. Calculation of System Unavailability ($Q_s$) via Structure Function

#### Step 1: Formulate the Fault Tree Structure
System failure occurs if the booster fan fails ($A$), OR both quench pumps fail ($B \cap C$), OR the feed water pump fails ($D$), OR both recirculation pumps fail ($E \cap F$), OR the mesh pad filter clogs ($G$):
$$\text{Top Event } T = A \cup (B \cap C) \cup D \cup (E \cap F) \cup G$$

#### Step 2: Construct the Algebraic Structure Function
Let $Y_A, Y_B, Y_C, Y_D, Y_E, Y_F, Y_G$ be the binary indicator variables for the basic events. Expressing the OR and AND gates in algebraic polynomial form:
$$\Psi(Y) = 1 - [1 - Y_A][1 - Y_B Y_C][1 - Y_D][1 - Y_E Y_F][1 - Y_G]$$

#### Step 3: Compute Mathematical Expectation
Because every basic event appears exactly once in the tree, all 5 product terms are mutually independent:
$$Q_s = E[\Psi(Y)] = 1 - [1 - E[Y_A]] \cdot [1 - E[Y_B]E[Y_C]] \cdot [1 - E[Y_D]] \cdot [1 - E[Y_E]E[Y_F]] \cdot [1 - E[Y_G]]$$

#### Step 4: Substitute Numerical Probabilities
- $1 - E[Y_A] = 1 - 0.01 = 0.99$
- $1 - E[Y_B]E[Y_C] = 1 - (0.10 \times 0.10) = 1 - 0.01 = 0.99$
- $1 - E[Y_D] = 1 - 0.01 = 0.99$
- $1 - E[Y_E]E[Y_F] = 1 - (0.10 \times 0.10) = 1 - 0.01 = 0.99$
- $1 - E[Y_G] = 1 - 0.01 = 0.99$

Substituting these values:
$$Q_s = 1 - (0.99 \times 0.99 \times 0.99 \times 0.99 \times 0.99) = 1 - (0.99)^5$$
$$Q_s = 1 - 0.95099 \approx \mathbf{0.049} \quad (4.90\%)$$

---

### 2. Calculation of System Availability ($A_s$) via Reliability Block Diagram (RBD)

#### Step 1: Construct the Dual Success Tree
To convert the fault tree into a success tree:
1. Replace the master OR gate with a master AND gate.
2. Replace intermediate AND gates with OR gates.
3. Invert all basic failure events to success events ($\bar{A}, \bar{B}, \bar{C}, \bar{D}, \bar{E}, \bar{F}, \bar{G}$).
4. The Top Event becomes System Success ($\bar{T}$).

#### Step 2: Map into Reliability Block Diagram (RBD)
- Master AND gate $\implies$ Series arrangement of 5 stages.
- Intermediate OR gates $\implies$ Parallel redundancy within stages 2 and 4.

$$\text{Input} \longrightarrow [\bar{A}] \longrightarrow \left[ \begin{matrix} \bar{B} \\ \bar{C} \end{matrix} \right] \longrightarrow [\bar{D}] \longrightarrow \left[ \begin{matrix} \bar{E} \\ \bar{F} \end{matrix} \right] \longrightarrow [\bar{G}] \longrightarrow \text{Output}$$

#### Step 3: Compute Stage Availabilities
- Stage 1 (Booster Fan): $A_1 = P(\bar{A}) = 1 - 0.01 = 0.99$
- Stage 2 (Quench Pumps in Parallel):
  $$A_2 = 1 - (1 - P(\bar{B}))(1 - P(\bar{C})) = 1 - (0.10 \times 0.10) = 1 - 0.01 = 0.99$$
- Stage 3 (Feed Pump): $A_3 = P(\bar{D}) = 1 - 0.01 = 0.99$
- Stage 4 (Recirculation Pumps in Parallel):
  $$A_4 = 1 - (1 - P(\bar{E}))(1 - P(\bar{F})) = 1 - (0.10 \times 0.10) = 1 - 0.01 = 0.99$$
- Stage 5 (Mesh Pad Filter): $A_5 = P(\bar{G}) = 1 - 0.01 = 0.99$

#### Step 4: Compute Total System Availability
Because all stages are connected in series in the RBD:
$$A_s = A_1 \times A_2 \times A_3 \times A_4 \times A_5 = (0.99)^5 \approx \mathbf{0.951} \quad (95.10\%)$$

---

## 3. Differences / Examples

### Synthesis: Methodological Comparison and Cross-Verification
| Dimension | Fault Tree / Structure Function | Reliability Block Diagram (RBD) |
| :--- | :--- | :--- |
| **Primary Variable** | Basic event unavailabilities ($Q_i$) | Component availabilities ($A_i = 1 - Q_i$) |
| **Logic Formulation** | $\Psi(Y) = 1 - \prod [1 - K_j(Y)]$ | $A_s = \prod A_{\text{series stage}}$ |
| **Intermediate Gate Model** | Parallel pumps are AND gates | Parallel pumps are parallel redundant blocks |
| **Calculated Metric** | System Unavailability $Q_s = \mathbf{0.049}$ | System Availability $A_s = \mathbf{0.951}$ |
| **Cross-Verification** | $Q_s = 1 - A_s = 1 - 0.951 = 0.049$ | $A_s + Q_s = 0.951 + 0.049 = \mathbf{1.000}$ |

---

## 4. Must Remember

- System unavailability is computed directly from the algebraic structure function:
  $$\Psi(Y) = 1 - [1 - Y_A][1 - Y_B Y_C][1 - Y_D][1 - Y_E Y_F][1 - Y_G]$$
  $$Q_s = E[\Psi(Y)] = 1 - (0.99)^5 \approx 0.049$$
- In constructing a dual success tree from a fault tree, all OR gates are replaced by AND gates, all AND gates are replaced by OR gates, and all input events are complemented.
- In Reliability Block Diagrams, independent series stages multiply directly to determine system availability:
  $$A_s = \prod_{k=1}^m A_k = (0.99)^5 \approx 0.951$$
- Parallel pump redundancy significantly elevates subsystem availability: even though individual pumps have $10\%$ failure probability ($Q = 0.10$), dual active-standby redundancy drops the subsystem unreliability to only $1\%$ ($0.10 \times 0.10 = 0.01$).
- The mathematical consistency check $A_s + Q_s = 1.000$ must always be verified during safety quantification audits.

# Week 8 – Lecture 1: Systems Safety Quantification: Truth Table Approach

## 1. Key Concepts

### System-Level Safety Quantification
- **Shift from Component to System Level:** While basic event quantification establishes failure and repair metrics for individual parts, system safety quantification aggregates these elementary events to determine the overall safety, availability, and reliability of the complete industrial installation.
- **Top Event Occurrence ($Q_s(t)$):** In a Fault Tree, the Top Event represents a major system failure (e.g., reactor runaway, pressure tank rupture, toxic gas release). 
  - **System Unavailability ($Q_s(t)$):** The probability that the Top Event exists at operational time $t$.
  - **System Availability ($A_s(t)$):** The probability that the Top Event does not exist at time $t$:
    $$A_s(t) = 1 - Q_s(t)$$
  - **System Reliability ($R_s(t)$):** The probability that the Top Event does not occur throughout the continuous interval $[0, t]$.
  - **System Mean Time to Failure ($\text{MTTF}_s$):** The expected duration until the first occurrence of the Top Event:
    $$\text{MTTF}_s = \int_0^\infty R_s(t) \, dt$$

---

## 2. Important Points

### 1. Basic Logic Gate Quantification
Assuming independent basic events $B_1, B_2, \dots, B_n$ with unavailabilities $Q_1, Q_2, \dots, Q_n$:

1. **Pure AND Gate:**
   The Top Event occurs if and only if **all** input events occur simultaneously:
   $$Q_s(t) = P(B_1 \cap B_2 \cap \dots \cap B_n) = \prod_{i=1}^n Q_i(t)$$
2. **Pure OR Gate:**
   The Top Event occurs if **at least one** input event occurs:
   $$Q_s(t) = P(B_1 \cup B_2 \cup \dots \cup B_n) = 1 - \prod_{i=1}^n [1 - Q_i(t)] = 1 - \prod_{i=1}^n A_i(t)$$
   - Rare-event approximation for small unavailabilities ($Q_i \ll 0.1$):
     $$Q_s(t) \approx \sum_{i=1}^n Q_i(t)$$

---

### 2. Voting Logic Gates ($m$-out-of-$n$ Systems)
- **Operation:** In an $m$-out-of-$n$ voting gate, the Top Event occurs if at least $m$ out of the total $n$ basic events occur simultaneously.
- **Binomial Formulation:** Assuming identical and independent basic events ($Q_1 = Q_2 = \dots = Q_n = Q$):
  $$Q_s = \sum_{k=m}^n \binom{n}{k} Q^k (1 - Q)^{n-k}$$
  where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the number of combinations of choosing $k$ failing components out of $n$.
- **2-out-of-3 Voting Example ($m = 2, n = 3$):**
  $$Q_s = \binom{3}{2} Q^2 (1 - Q)^{3-2} + \binom{3}{3} Q^3 (1 - Q)^{3-3} = 3 Q^2 (1 - Q) + Q^3$$
  $$Q_s = 3 Q^2 - 3 Q^3 + Q^3 = 3 Q^2 - 2 Q^3$$

---

### 3. Reliability Block Diagrams (RBD)
- **Success-Oriented Perspective:** Unlike fault trees which map failure propagation, an RBD represents operational continuity and functional signal transmission from an input node to an output node.
- **Conversion Rules Between Fault Trees and RBD:**
  - **OR Gate in Fault Tree $\longrightarrow$ Series Configuration in RBD:** Because any component failure causes system failure, all components must succeed for the path to remain open.
  - **AND Gate in Fault Tree $\longrightarrow$ Parallel Configuration in RBD:** Because all components must fail to cause system failure, functioning of any single component maintains system success (redundancy).
- **Dual Success Tree Transformation:**
  A fault tree is transformed into an equivalent success tree by:
  1. Replacing all OR gates with AND gates.
  2. Replacing all AND gates with OR gates.
  3. Complementing every basic failure event $B_i$ to its success event $\bar{B}_i$.
  4. Complementing the Top Event $T$ to System Success $\bar{T}$.

---

## 3. Differences / Examples

### Logic Gate and RBD Transformation Mapping
| Architecture / Gate | Fault Tree Representation | Reliability Block Diagram (RBD) | System Unavailability ($Q_s$) |
| :--- | :--- | :--- | :--- |
| **Series System** | OR Gate (any failure trips system) | Blocks connected in series | $1 - \prod_{i=1}^n (1 - Q_i)$ |
| **Parallel System** | AND Gate (all must fail to trip) | Blocks connected in parallel | $\prod_{i=1}^n Q_i$ |
| **$m$-out-of-$n$ Redundancy** | Voting Gate | $m$-out-of-$n$ bridge configuration | $\sum_{k=m}^n \binom{n}{k} Q^k (1 - Q)^{n-k}$ |

---

### Industrial Case Study: Calciner Tail Gas Quench & Clean-up System
An industrial scrubbing unit cools hot calciner tail gas, saturates it with vapor, and removes particulates before entering an absorption tower:
- **Required Functional Subsystems:**
  1. Booster fan ($A$) draws gas into the quench chamber.
  2. Quench water pumps ($B$ and $C$ in parallel; one running, one standby).
  3. Prescriber feed water pump ($D$).
  4. Bottom slurry recirculation pumps ($E$ and $F$ in parallel).
  5. Entrainment mesh pad filter ($G$).
- **System Failure Logic:**
  System failure occurs if the booster fan fails ($A$), OR both quench pumps fail ($B \cap C$), OR the feed pump fails ($D$), OR both recirculation pumps fail ($E \cap F$), OR the mesh pad clogs ($G$).
- **Equivalent RBD Structure:**
  A series chain containing single blocks $A, D, G$ interspersed with two parallel sub-blocks $(B \parallel C)$ and $(E \parallel F)$:
  $$\text{Input} \longrightarrow [A] \longrightarrow \left[ \begin{matrix} B \\ C \end{matrix} \right] \longrightarrow [D] \longrightarrow \left[ \begin{matrix} E \\ F \end{matrix} \right] \longrightarrow [G] \longrightarrow \text{Output}$$

---

## 4. Must Remember

- System unavailability $Q_s(t)$ represents the instantaneous probability that the Top Event exists at time $t$, with availability $A_s(t) = 1 - Q_s(t)$.
- In basic logic gates:
  - AND Gate: $Q_s = \prod Q_i$ (multiplication of unavailabilities).
  - OR Gate: $A_s = \prod A_i \implies Q_s = 1 - \prod (1 - Q_i)$.
- For an $m$-out-of-$n$ voting gate with identical independent components, system unavailability is given by the binomial sum:
  $$Q_s = \sum_{k=m}^n \binom{n}{k} Q^k (1 - Q)^{n-k}$$
  For a 2-out-of-3 voting system: $Q_s = 3Q^2 - 2Q^3$.
- In converting fault trees to Reliability Block Diagrams:
  - Fault tree OR gates become **series** blocks in RBD.
  - Fault tree AND gates become **parallel** blocks in RBD.
- A dual success tree is formed by swapping AND/OR gates and complementing all basic and top events.

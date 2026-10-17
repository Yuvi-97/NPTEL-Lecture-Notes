# Week 3 – Lecture 5: Fault Tree Analysis (FTA) - Important Measures

## 1. Key Concepts

- **Importance Measures:** Quantitative sensitivity metrics in Probabilistic Risk Assessment (PRA) that rank basic events, components, and minimal cut-sets (MCS) according to their contribution to total system unreliability or Top Event risk.
- **Why Importance Measures are Essential:** Industrial safety systems contain hundreds or thousands of components. Safety budgets for maintenance, inspection, and redesign are finite. Importance measures operationalize the **Pareto Principle (80/20 Rule)** by identifying the vital few components that govern system safety.
- **Birnbaum's Importance Measure ($I_B(i)$):** Measures the rate of change of system unavailability ($Q_s$) with respect to component unavailability ($Q_i$). Physically, it represents the probability that the system is in a *critical state* where component $i$ is pivotal—meaning component $i$'s failure directly forces total system failure:
  $$I_B(i) = \frac{\partial Q_s}{\partial Q_i} = Q_s(Q_i = 1) - Q_s(Q_i = 0)$$
  *Crucial Property:* $I_B(i)$ is **independent of component $i$'s own failure probability $Q_i$**. It reflects only the structural placement of the component in the logic tree and the reliabilities of all other components.
- **Fussell-Vesely Importance Measure ($I_{FV}(i)$):** Measures the fractional probability that component $i$ has contributed to system failure, given that the system is already in a failed state:
  $$I_{FV}(i) = \frac{P\left(\bigcup_{j: i \in MCS_j} MCS_j\right)}{Q_s} \approx \frac{\sum_{j: i \in MCS_j} P(MCS_j)}{Q_s}$$
- **Risk Decrease Factor (RDF) / Risk Reduction Worth (RRW):** The ratio indicating how much system risk decreases if component $i$ is made 100% reliable ($Q_i = 0$):
  $$RDF_i = \frac{Q_s}{Q_s(Q_i = 0)}$$
  High RDF points to components that yield the greatest safety gain from engineering redesign.
- **Risk Increase Factor (RIF) / Risk Achievement Worth (RAW):** The ratio indicating how much system risk increases if component $i$ is guaranteed to be in a failed or unavailable state ($Q_i = 1$):
  $$RIF_i = \frac{Q_s(Q_i = 1)}{Q_s}$$
  High RIF identifies mission-critical components that must never be removed from service during operation without taking the entire plant offline.

---

## 2. Important Points

### 2.1 Mathematical Comparison of the Four Core Importance Measures

| Importance Measure | Mathematical Formula | Sensitivity Type | Engineering Application |
| :--- | :--- | :--- | :--- |
| **Birnbaum ($I_B$)** | $\frac{\partial Q_s}{\partial Q_i} = Q_s(Q_i=1) - Q_s(Q_i=0)$ | Structural sensitivity to component rate of failure | Evaluates architectural weakness; independent of $Q_i$ |
| **Fussell-Vesely ($I_{FV}$)** | $\frac{P(\bigcup_{i \in MCS_j} MCS_j)}{Q_s}$ | Relative actual contribution to system failure | Prioritizes operational troubleshooting and root-cause analysis |
| **Risk Decrease Factor (RDF / RRW)** | $\frac{Q_s}{Q_s(Q_i = 0)}$ | Maximum potential risk reduction | Justifies capital expenditure for upgrading components to higher reliability |
| **Risk Increase Factor (RIF / RAW)** | $\frac{Q_s(Q_i = 1)}{Q_s}$ | Worst-case risk escalation upon failure | Dictates preventive maintenance schedules and technical specifications |

### 2.2 Time Dependency of Importance Rankings
Importance measures are fundamentally **time-dependent functions** ($I(t)$):
- Component unavailabilities change over operating time: $Q_i(t) = 1 - e^{-\lambda_i t}$ for non-repairable parts, or cyclic functions for periodic testing.
- Relative rankings can invert during a plant lifecycle: a high-wear component may become dominant later in life, shifting the maintenance focus.
- All importance rankings must be explicitly quoted with respect to mission time ($T_M$) or steady-state unavailabilities.

### 2.3 Software-Assisted Fault Tree Evaluation (RAM Commander)
For large industrial systems (e.g., pressure vessels, chemical reactors):
- Hand calculation of derivatives across dozens of cross-linked minimal cut-sets is mathematically intractable.
- Industrial reliability suites such as **RAM Commander** automate:
  1. Top-down Boolean matrix reduction (MOCUS algorithm).
  2. Exact cut-set union evaluation using binary decision diagrams (BDD).
  3. Automated calculation of $I_B, I_{FV}, RDF,$ and $RIF$ across all basic events.
  4. Generation of Pareto ranking charts for maintenance allocation.

---

## 3. Differences / Examples

### 3.1 Fully Worked Numerical Problem

Consider a system whose Top Event ($TE$) is governed by three basic events ($A, B, C$):
$$TE = A \cap (B \cup C)$$
- Minimal Cut-Sets: $MCS_1 = \{A, B\}$, $MCS_2 = \{A, C\}$.
- Given component failure probabilities (unavailabilities):
  $$Q_A = 0.30, \quad Q_B = 0.20, \quad Q_C = 0.10$$

```
                   Top Event (TE) [AND]
                     /          \
                Event A       Gate 1 [OR]
                               /       \
                           Event B   Event C
```

#### Step 1: Compute Total System Unavailability ($Q_s$)
Using the union rule for minimal cut-sets:
$$Q_s = P(MCS_1 \cup MCS_2) = P(AB \cup AC) = P(AB) + P(AC) - P(AB \cap AC)$$
$$Q_s = Q_A Q_B + Q_A Q_C - Q_A Q_B Q_C$$
Substitute numerical values:
$$Q_s = (0.30)(0.20) + (0.30)(0.10) - (0.30)(0.20)(0.10) = 0.060 + 0.030 - 0.006 = 0.084$$

#### Step 2: Compute Birnbaum Importance Measures ($I_B = \frac{\partial Q_s}{\partial Q_i}$)
- For Component $A$:
  $$I_B(A) = \frac{\partial Q_s}{\partial Q_A} = Q_B + Q_C - Q_B Q_C = 0.20 + 0.10 - (0.20)(0.10) = 0.30 - 0.02 = 0.28$$
- For Component $B$:
  $$I_B(B) = \frac{\partial Q_s}{\partial Q_B} = Q_A - Q_A Q_C = 0.30 - (0.30)(0.10) = 0.30 - 0.03 = 0.27$$
- For Component $C$:
  $$I_B(C) = \frac{\partial Q_s}{\partial Q_C} = Q_A - Q_A Q_B = 0.30 - (0.30)(0.20) = 0.30 - 0.06 = 0.24$$
*Birnbaum Ranking:* $I_B(A) = 0.28 > I_B(B) = 0.27 > I_B(C) = 0.24$.

#### Step 3: Compute Fussell-Vesely Importance Measures ($I_{FV}$)
- For Component $A$ (present in both $MCS_1$ and $MCS_2$):
  $$I_{FV}(A) = \frac{P(MCS_1 \cup MCS_2)}{Q_s} = \frac{0.084}{0.084} = 1.000$$
  *Component $A$ participates in 100% of all system failure paths.*
- For Component $B$ (present only in $MCS_1$):
  $$I_{FV}(B) \approx \frac{P(MCS_1)}{Q_s} = \frac{Q_A Q_B}{Q_s} = \frac{0.060}{0.084} \approx 0.7143 \text{ (71.4\%) }$$
- For Component $C$ (present only in $MCS_2$):
  $$I_{FV}(C) \approx \frac{P(MCS_2)}{Q_s} = \frac{Q_A Q_C}{Q_s} = \frac{0.030}{0.084} \approx 0.3571 \text{ (35.7\%) }$$
*Fussell-Vesely Ranking:* $I_{FV}(A) > I_{FV}(B) > I_{FV}(C)$.

#### Step 4: Compute Risk Decrease Factor ($RDF = \frac{Q_s}{Q_s(Q_i=0)}$)
- For Component $A$: If $Q_A = 0$, $Q_s(Q_A=0) = 0$.
  $$RDF_A = \frac{0.084}{0} \to \infty$$
  *Making $A$ perfectly reliable completely prevents Top Event occurrence.*
- For Component $B$: If $Q_B = 0$, $Q_s(Q_B=0) = Q_A Q_C = (0.30)(0.10) = 0.030$.
  $$RDF_B = \frac{0.084}{0.030} = 2.80$$
- For Component $C$: If $Q_C = 0$, $Q_s(Q_C=0) = Q_A Q_B = (0.30)(0.20) = 0.060$.
  $$RDF_C = \frac{0.084}{0.060} = 1.40$$

#### Step 5: Compute Risk Increase Factor ($RIF = \frac{Q_s(Q_i=1)}{Q_s}$)
- For Component $A$: If $Q_A = 1$:
  $$Q_s(Q_A=1) = Q_B + Q_C - Q_B Q_C = 0.28 \implies RIF_A = \frac{0.28}{0.084} \approx 3.33$$
- For Component $B$: If $Q_B = 1$:
  $$Q_s(Q_B=1) = Q_A (1) + Q_A Q_C - Q_A (1) Q_C = Q_A = 0.30 \implies RIF_B = \frac{0.30}{0.084} \approx 3.57$$
- For Component $C$: If $Q_C = 1$:
  $$Q_s(Q_C=1) = Q_A Q_B + Q_A (1) - Q_A Q_B (1) = Q_A = 0.30 \implies RIF_C = \frac{0.30}{0.084} \approx 3.57$$

---

### 3.2 Industrial Case Study: Pressure Tank System (RAM Commander Evaluation)

In the standard Kumamoto & Henley pressure tank system with 6 basic events ($B_1$: Tank, $B_2$: Contactor, $B_3$: Timer, $B_4$: Pressure switch, $B_5$: Operator, $B_6$: Alarm):
- $B_1$ (Primary structural tank rupture) is an **Order-1 minimal cut-set** $\{B_1\}$ (single point of failure).
- RAM Commander output reveals:
  - $B_1$ exhibits $RIF \approx 10^2$ (highest surge in catastrophic risk upon degradation).
  - Contactor ($B_2$) and Timer ($B_3$) form order-2 cut-sets and have intermediate $I_{FV}$ scores.
  - Secondary operational failures ($B_5$ operator, $B_6$ alarm) have lower importance due to multiple redundant barriers.
- **Safety Policy Conclusion:** Tank structural integrity inspection and corrosion prevention receive top priority, as failure of $B_1$ bypasses all redundant instrumentation.

---

## 4. Must Remember

- **Birnbaum Independence:** $I_B(i) = \frac{\partial Q_s}{\partial Q_i}$ evaluates structural position and depends on the reliability of all components *except* component $i$ itself.
- **Fussell-Vesely Focus:** $I_{FV}(i)$ reflects the actual probability-weighted contribution of component $i$ to system failure.
- **RDF vs. RIF:**
  - **Risk Decrease Factor (RDF / RRW):** Measures risk reduction when $Q_i = 0$ (guides reliability upgrades and design improvements).
  - **Risk Increase Factor (RIF / RAW):** Measures risk surge when $Q_i = 1$ (guides maintenance prioritization and component test limits).
- **Single Point of Failure (Order-1 Cut-Set):** Components appearing alone in an Order-1 MCS exhibit $RDF \to \infty$ and extremely high $RIF$, demanding primary engineering safeguards.
- **Pareto Allocation:** In real industrial installations, ~20% of basic events generate ~80% of total risk; importance rankings guide cost-effective risk reduction.

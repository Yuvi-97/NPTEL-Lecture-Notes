# Week 8 – Lecture 2: Systems Safety Quantification: Truth Table Approach (Contd.)

## 1. Key Concepts

### The Truth Table Methodology in Safety Quantification
- **Complete State Enumeration:** The truth table approach provides a rigorous, exhaustive enumeration of all possible operational states for a system composed of $n$ binary (two-state) components:
  $$\text{Total System State Combinations} = 2^n$$
- **Unavailability via Truth Table:** For each binary state combination, the functional status of the system (Working vs. Failed) is determined. System unavailability $Q_s$ is the exact sum of probabilities of all rows where the system fails:
  $$Q_s = \sum_{\text{All failed states } k} P(\text{State } k)$$
  Similarly, system availability $A_s = 1 - Q_s$ is the sum of probabilities of all rows where the system functions.
- **Handling Non-Series-Parallel Architectures:** While simple block diagrams fail when analyzing complex cross-linked interconnections (such as **bridge networks** or shared-standby units), the truth table method solves any network topology directly from first principles.

---

## 2. Important Points

### 1. Truth Table Representation of Basic Gates
For two independent components $B_1$ and $B_2$ ($2^2 = 4$ combinations):
- **AND Gate Representation:**
  Only the single combination where both components fail simultaneously ($B_1 \cap B_2$) produces system failure. Thus, $Q_s = P(B_1) \cdot P(B_2)$.
- **OR Gate Representation:**
  Three out of four combinations cause system failure: $(B_1 \cap \bar{B}_2)$, $(\bar{B}_1 \cap B_2)$, and $(B_1 \cap B_2)$. Summing these rows yields:
  $$Q_s = P(B_1)(1 - P(B_2)) + (1 - P(B_1))P(B_2) + P(B_1)P(B_2) = P(B_1) + P(B_2) - P(B_1)P(B_2)$$

---

### 2. Comprehensive Industrial Optimization Case Study
Consider a continuous chemical plant handling abrasive slurry. The existing plant features two identical parallel processing lines (Stream A and Stream B):
- **Stream Composition:** Each stream contains one slurry pump in series with one pressure filter.
- **Equipment Reliability Parameters:**
  - Pumps: Failure rate $\lambda_p = 0.04 \text{ day}^{-1}$, $\text{MTTR}_p = 5 \text{ hours} = \frac{5}{24} \text{ day}$.
  - Filters: Failure rate $\lambda_f = 0.08 \text{ day}^{-1}$, $\text{MTTR}_f = 10 \text{ hours} = \frac{10}{24} \text{ day}$.
- **Production Operating Levels:**
  - **Full Production:** Requires **both** Stream A and Stream B to operate simultaneously.
  - **Half Production:** Achieved if only **one** stream operates.
  - **Zero Production:** Occurs if **neither** stream operates.

---

### 3. Quantitative Evaluation of Three Design Alternatives

#### Alternative 0: Status Quo (Keep Existing 2-Stream System)
- Unavailability of a single stream: $Q_{\text{stream}} = 1 - (A_{\text{pump}} \times A_{\text{filter}})$.
- Probabilities of production states:
  - Full Production Availability: $A_{\text{full}} = A_{\text{stream}}^2 \approx 0.9200$.
  - Half Production Availability: $A_{\text{half}} = 1 - Q_{\text{stream}}^2 \approx 0.9994$.
  - Zero Production: $1 - A_{\text{half}} \approx 0.0006$.

#### Alternative 1: Install a 3rd Identical Standby Stream ($m = 2, n = 3$)
- Three identical parallel streams are available; full production is sustained if any 2 of the 3 streams operate.
- Evaluated via 2-out-of-3 voting formulation:
  $$A_{\text{full}} = \binom{3}{2} A_{\text{stream}}^2 (1 - A_{\text{stream}}) + \binom{3}{3} A_{\text{stream}}^3 \approx 0.9954$$
  $$A_{\text{half}} = 1 - Q_{\text{stream}}^3 \approx 0.99999$$

#### Alternative 2: Install a Common Spare Pump in Bridge Configuration
- A shared spare pump is interconnected via cross-over manifolding capable of supplying slurry to either filter ($3 \text{ pumps} + 2 \text{ filters} = 5 \text{ components}$).
- **State Combinations:** $2^5 = 32$ distinct states enumerated via truth table.
- Results from truth table row summation:
  - Full output is achieved in rows 1, 2, 5, and 17:
    $$A_{\text{full}} = \sum_{k \in \{1, 2, 5, 17\}} P(\text{Row } k) \approx 0.9400$$
  - Half output availability: $A_{\text{half}} \approx 0.9990$.

---

### 4. Financial Optimization via Expected Daily Loss
Total expected loss per day evaluates annualized capital/operating maintenance costs plus production stoppage penalties:
$$\text{Expected Loss/Day} = \sum (\text{Equipment Daily Costs}) + (1 - A_{\text{half}}) \cdot \text{Cost}_{\text{no prod}} + (A_{\text{half}} - A_{\text{full}}) \cdot \text{Cost}_{\text{half prod}}$$

#### Economic Results Comparison:
- **Alternative 0 (Status Quo):** **\$323 / day**
- **Alternative 1 (3rd Standby Stream):** **\$239 / day** *(Optimal Choice)*
- **Alternative 2 (Shared Bridge Pump):** **\$293 / day**

Even though Alternative 1 requires greater initial equipment investment, its extraordinary reliability boost ($A_{\text{full}} = 99.54\%$) prevents catastrophic production outages, yielding the lowest total daily economic loss.

---

## 3. Differences / Examples

### Synthesis of Plant Modification Alternatives
| System Configuration | Architectural Topology | Reliability Model | Full Output Availability ($A_{\text{full}}$) | Expected Daily Cost | Optimal Decision |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Status Quo** | Two parallel series streams | Pure series-parallel | $0.9200$ ($92.00\%$) | \$323 / day | Base case (High outage risk) |
| **Alternative 1** | Three identical streams | 2-out-of-3 Voting logic | **$0.9954$ ($99.54\%$)** | **\$239 / day** | **Rank 1 (Best Alternative)** |
| **Alternative 2** | Shared spare pump with manifold | 5-component Bridge network | $0.9400$ ($94.00\%$) | \$293 / day | Rank 2 |

---

## 4. Must Remember

- The truth table method evaluates system availability and unavailability through exhaustive enumeration of all $2^n$ operational states.
- System unavailability is the direct sum of joint probabilities of all truth table rows where the system fails.
- Bridge networks and cross-linked shared-standby architectures cannot be simplified using series-parallel equations; truth table analysis provides the exact solution.
- In multi-level production analysis, states are partitioned into full output, partial (half) output, and total shutdown.
- System safety and reliability decisions must integrate equipment capital/maintenance costs with probabilistic outage losses; the alternative with higher capital cost often proves optimal by eliminating production downtime.

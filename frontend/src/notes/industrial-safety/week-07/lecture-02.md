# Week 7 – Lecture 2: Quantification of Basic Events For Repairable Components

## 1. Key Concepts

### The Combined Alternating Process
- **Combined Process Dynamics:** For repairable components, the operational history is a stochastic alternating renewal process where the component switches between operating (normal) and down (under repair) states:
  $$\text{Normal State} \xrightarrow{\text{Failure}} \text{Failed State} \xrightarrow{\text{Repair}} \text{Normal State}$$
- **"As-Good-As-New" Repair Assumption:** Upon completion of repair, the component is assumed to be restored to pristine operating condition, possessing the same failure rate characteristics as a brand-new unit.
- **Multiple Failures per Asset:** In a repairable population, a single component can experience multiple cycles of breakdown and restoration over its operational lifecycle, generating multiple Time-to-Failure (TTF) and Time-to-Repair (TTR) observations.
- **Point Availability ($A(t)$):** The probability that a component is in the normal (operating) state at time $t$, given that it was as-good-as-new at $t = 0$:
  $$A(t) = P(\text{Normal at } t \mid \text{As-good-as-new at } t = 0)$$
- **Point Unavailability ($Q(t)$):** The probability that a component is in the failed (down) state at time $t$, given that it was as-good-as-new at $t = 0$:
  $$Q(t) = P(\text{Failed at } t \mid \text{As-good-as-new at } t = 0)$$
  Because the component must be either operating or under repair:
  $$A(t) + Q(t) = 1.0 \quad \forall t \ge 0$$

---

## 2. Important Points

### 1. Fundamental Distinction: Availability ($A(t)$) vs. Reliability ($R(t)$)
- **Reliability ($R(t)$):**
  - Demands **uninterrupted, continuous survival** throughout the entire historical interval $[0, t]$:
    $$R(t) = P(T > t) = P(\text{No failure occurs in } [0, t])$$
  - If a component fails even once at time $t_1 < t$, its contribution to reliability drops permanently to zero, regardless of subsequent successful repairs.
- **Availability ($A(t)$):**
  - Demands only that the component is **operating at the specific instant $t$**, completely irrespective of how many breakdowns, repairs, or maintenance cycles occurred previously.
- **Universal Mathematical Inequality:**
  Because any component that has operated without failure up to $t$ is naturally available at $t$, but an available component may have failed and been repaired multiple times:
  $$A(t) \ge R(t) \quad \text{and} \quad Q(t) \le F(t) \quad \forall t \ge 0$$
  - **Special Case (Non-Repairable Units):** If repair is impossible, a component can never recover from failure. Under non-repairable conditions:
    $$A(t) \equiv R(t) \quad \text{and} \quad Q(t) \equiv F(t)$$

---

### 2. Failure Intensities in Repairable Systems
In repairable systems, failure rates are categorized based on the conditions imposed at time $t$:

1. **Unconditional Failure Intensity ($w(t)$):**
   - The probability that a component fails per unit time in $[t, t + \Delta t]$, given **only** that it was as-good-as-new at $t = 0$ (no condition is imposed regarding its operational state at time $t$):
     $$w(t) = \lim_{\Delta t \to 0} \frac{P(\text{Fails in } [t, t + \Delta t] \mid \text{New at } t = 0)}{\Delta t}$$
   - Discrete empirical estimator:
     $$w(t) \approx \frac{\Delta n_{[t, t + \Delta t]}}{N_{\text{initial}} \cdot \Delta t}$$
2. **Conditional Failure Intensity ($\lambda(t)$):**
   - The probability that a component fails per unit time in $[t, t + \Delta t]$, given that it was as-good-as-new at $t = 0$ **AND is known to be in the normal (operating) state at time $t$**:
     $$\lambda(t) = \lim_{\Delta t \to 0} \frac{P(\text{Fails in } [t, t + \Delta t] \mid \text{New at } t = 0 \cap \text{Normal at } t)}{\Delta t}$$
   - Discrete empirical estimator:
     $$\lambda(t) \approx \frac{\Delta n_{[t, t + \Delta t]}}{C_{\text{operating}}(t) \cdot \Delta t}$$
3. **The Intensity-Availability Relationship:**
   By applying conditional probability:
   $$w(t) = \lambda(t) \cdot A(t) = \lambda(t) [1 - Q(t)]$$
   $$\lambda(t) = \frac{w(t)}{A(t)} = \frac{w(t)}{1 - Q(t)}$$
   The conditional failure intensity $\lambda(t)$ is always greater than or equal to the unconditional failure intensity $w(t)$ because availability $A(t) \le 1.0$.

---

## 3. Differences / Examples

### Metric Comparison: Reliability, Availability, and Intensities
| Performance Metric | Symbol | Conditioning at Time $t$ | Applicable System Type | Physical Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Reliability** | $R(t)$ | Continuous survival across $[0, t]$ | Both (Identical to $A(t)$ for non-repairable) | Probability of zero failure over mission time |
| **Availability** | $A(t)$ | Operating specifically at instant $t$ | Repairable systems only | Probability system is ready for use at time $t$ |
| **Unconditional Failure Intensity** | $w(t)$ | None (Only as-good-as-new at $t = 0$) | Repairable systems | Failure frequency relative to total initial population |
| **Conditional Failure Intensity** | $\lambda(t)$ | Must be normal / operating at time $t$ | Repairable systems | Failure frequency relative to currently working units |

---

### Worked Numerical Tutorial: Tracking 10 Identical Components
An experimental fleet of $N = 10$ identical pumps was monitored continuously over 10 time units. Due to the combined failure-repair cycles:
- Several pumps failed, underwent repair, returned to operation, and failed again, producing 15 total TTF records.

**Evaluation at Time $t = 7$ units:**
1. **Determining Operational State:**
   - Visual inspection of timeline shows components 7, 8, and 10 are in the normal (working) state.
   - The remaining 7 components (1, 2, 3, 4, 5, 6, 9) are in the failed state undergoing repair.
2. **Computing Availability and Unavailability:**
   $$A(7) = \frac{\text{Operating units}}{\text{Total units}} = \frac{3}{10} = 0.30 \quad (30\%)$$
   $$Q(7) = 1 - A(7) = \frac{7}{10} = 0.70 \quad (70\%)$$
3. **Tracking Failures in Interval $[7, 8]$ ($\Delta t = 1$ unit):**
   - Between $t = 7$ and $t = 8$, exactly 1 component experienced failure.
4. **Computing Unconditional Failure Intensity:**
   $$w(7) = \frac{1 \text{ failure}}{10 \text{ initial units} \times 1 \text{ unit time}} = 0.10 \text{ unit}^{-1}$$
5. **Computing Conditional Failure Intensity:**
   $$\lambda(7) = \frac{1 \text{ failure}}{3 \text{ operating units} \times 1 \text{ unit time}} = \frac{1}{3} \approx 0.333 \text{ unit}^{-1}$$
6. **Verifying the Fundamental Identity:**
   $$w(7) = \lambda(7) \times A(7) = 0.3333 \times 0.30 = 0.10 \quad \text{(Identity Holds)}$$

---

## 4. Must Remember

- For repairable components, point availability $A(t)$ measures the probability of being operational at time $t$, whereas reliability $R(t)$ measures uninterrupted survival over $[0, t]$.
- The universal hierarchy states:
  $$A(t) \ge R(t) \quad \text{and} \quad Q(t) \le F(t)$$
  They converge ($A(t) = R(t)$) only for non-repairable units.
- Point availability and point unavailability are strictly complementary:
  $$A(t) + Q(t) = 1.0$$
- Unconditional failure intensity $w(t)$ normalizes failures by the initial population, whereas conditional failure intensity $\lambda(t)$ normalizes failures by the currently working population $C_{\text{operating}}(t)$.
- The core relationship linking failure intensities and availability is:
  $$w(t) = \lambda(t) \cdot A(t) = \lambda(t) [1 - Q(t)] \iff \lambda(t) = \frac{w(t)}{A(t)}$$

# Week 10 – Lecture 2: Capacity Planning

## 1. Key Concepts

- **Capacity Planning:** The strategic and tactical determination of the maximum production and throughput volume that a facility, machine, workforce, or supply chain network can sustain over a defined operating horizon.
- **Design Capacity (Theoretical Capacity):** The maximum possible theoretical output rate achievable under ideal, flawless operating conditions—assuming 24/7 continuous operation with zero equipment breakdowns, zero changeovers, zero maintenance shutdowns, and zero human fatigue.
- **Effective Capacity:** The maximum realistic output rate that an operation can sustainably maintain under standard operating conditions, accounting for scheduled preventive maintenance, shift changeovers, operator breaks, product mix adjustments, and normal scrap allowances.
- **Actual Output:** The realized rate of finished production units delivered by the operating system during a specific historical period (always $\le$ Effective Capacity).
- **Capacity Utilization:** The percentage of Design Capacity actually achieved:
  $$\text{Utilization} = \left( \frac{\text{Actual Output}}{\text{Design Capacity}} \right) \times 100$$
- **Capacity Efficiency:** The percentage of Effective Capacity actually achieved:
  $$\text{Efficiency} = \left( \frac{\text{Actual Output}}{\text{Effective Capacity}} \right) \times 100$$

---

## 2. Important Points

### Strategic Capacity Expansion Strategies
The lecture categorizes three primary organizational approaches to scaling capacity relative to forecasted demand:

```
CAPACITY
  ▲
  │       ┌──────────────┐
  │       │ LEAD STRATEGY│  Capacity leads demand (Aggressive growth)
  │   ┌───┘              └───┐
  │   │   [ DEMAND CURVE ]   │
  │   │                      │
  │   │   ┌──────────────┐   │
  │   └───┘ LAG STRATEGY │   │  Capacity lags demand (Conservative low risk)
  │       └──────────────┘   │
  └──────────────────────────┴────────────────────────► TIME
```

1. **Lead Strategy (Proactive Expansion):**
   - *Mechanics:* Adds large increments of capacity well in advance of anticipated demand growth.
   - *Advantage:* Guaranteed product availability; never loses sales during demand surges; deters potential market entrants.
   - *Risk:* Severe idle overhead and financial loss if projected demand fails to materialize.
2. **Lag Strategy (Conservative Expansion):**
   - *Mechanics:* Expands capacity only after realized market demand consistently exceeds existing operational capacity.
   - *Advantage:* Maximizes asset utilization; virtually eliminates financial risk of idle capital.
   - *Risk:* Chronic stockouts, long customer lead times, and permanent loss of market share to responsive competitors.
3. **Match / Tracking Strategy (Incremental Expansion):**
   - *Mechanics:* Expands capacity in moderate, frequent increments to closely mirror evolving demand curves, balancing utilization and availability.

### Mathematical Formulation: Capacity Break-Even Analysis
When selecting among alternative facility capacity sizes (e.g., small plant vs. large automated plant):

$$\text{Total Cost } (TC) = FC + (VC \cdot Q)$$

$$\text{Total Revenue } (TR) = P \cdot Q$$

- **Break-Even Volume ($Q_{BEP}$):**

$$Q_{BEP} = \frac{FC}{P - VC}$$

- Where $P$ is unit selling price, $VC$ is unit variable cost, and $(P - VC)$ is the **Unit Contribution Margin**.

---

## 3. Differences / Examples

### Synthesis: Design vs. Effective Capacity

| Attribute | Design Capacity | Effective Capacity | Actual Output |
|---|---|---|---|
| **Operating Conditions** | Perfect / Theoretical laboratory conditions. | Normal, realistic operating environment. | Empirical reality on the factory floor. |
| **Downtime Accounted For**| Zero downtime; assumes 100% uptime. | Incorporates maintenance, breaks, setups. | Captures all unexpected disruptions. |
| **Mathematical Magnitude**| **Highest** ($C_{\text{Design}} \ge C_{\text{Effective}}$). | Intermediate ($C_{\text{Effective}} \ge \text{Output}$).| **Lowest** ($\text{Actual Output} \le C_{\text{Effective}}$). |
| **Benchmark Ratio** | Used to calculate **Utilization**. | Used to calculate **Efficiency**. | The numerator in both ratios. |

### Concrete Worked Numerical Problem from the Lecture
- An automated packaging line in a food processing distribution center operates under the following parameters:
  - *Design Capacity:* Rated at **230 units per hour**, operating on a single 8-hour shift over 21 working days in a month:
    $$\text{Design Capacity} = 230 \times 8 \times 21 = \mathbf{38,640\text{ units per month}}$$
  - *Effective Capacity:* After scheduling daily machine cleaning, calibration, and lunch breaks, effective capacity is determined to be **30,000 units per month**.
  - *Actual Output:* The plant actually packaged and dispatched **24,000 units** during the month.
- **Computations:**
  - **Capacity Utilization:**
    $$\text{Utilization} = \left( \frac{\text{Actual Output}}{\text{Design Capacity}} \right) \times 100 = \left( \frac{24,000}{38,640} \right) \times 100 = \mathbf{62.11\%}$$
  - **Capacity Efficiency:**
    $$\text{Efficiency} = \left( \frac{\text{Actual Output}}{\text{Effective Capacity}} \right) \times 100 = \left( \frac{24,000}{30,000} \right) \times 100 = \mathbf{80.00\%}$$

---

## 4. Must Remember

- **Design Capacity** represents theoretical maximum output under perfect conditions; **Effective Capacity** is realistic sustainable output accounting for maintenance and breaks; **Actual Output** is realized production.
- Key formulas:
  $$\text{Utilization} = \frac{\text{Actual Output}}{\text{Design Capacity}} \times 100, \quad \text{Efficiency} = \frac{\text{Actual Output}}{\text{Effective Capacity}} \times 100$$
- Actual Output can never legally or physically exceed Effective Capacity under standard continuous operations.
- The three capacity timing strategies are: **Lead (proactive capacity excess), Lag (conservative reactive expansion), and Match (incremental tracking)**.
- The **Break-Even Quantity formula** is:
  $$Q_{BEP} = \frac{FC}{P - VC}$$
  Where $(P - VC)$ represents the unit contribution margin.

# Week 11 – Lecture 1: Inventory Management

## 1. Key Concepts

- **Inventory:** The idle stock of physical materials, parts, work-in-process ($WIP$), finished goods ($FG$), and operating supplies ($MRO$) held by an enterprise to facilitate smooth production, buffer against demand uncertainty, and satisfy customer orders.
- **The Three Foundational Motives for Holding Inventory:**
  1. *Transaction Motive:* Decoupling sequential production stages and facilitating continuous operations without waiting for raw material deliveries.
  2. *Precautionary Motive:* Serving as a safety cushion to protect against unpredictable demand surges, transportation breakdowns, or supplier lead-time delays.
  3. *Speculative Motive:* Purchasing in large quantities to hedge against anticipated future raw material price inflation, currency depreciation, or seasonal shortages.
- **Economic Order Quantity (EOQ):** The mathematically optimal replenishment order size ($Q^*$) that minimizes the sum of annual ordering costs and annual inventory holding costs.
- **Reorder Point ($ROP$):** The predetermined inventory level that automatically triggers the placement of a new purchase replenishment order.

---

## 2. Important Points

### The Four Primary Components of Inventory Cost
1. **Purchase / Material Cost ($C \cdot D$):**
   - The direct invoice price paid to the supplier for the annual demand $D$ at unit price $C$.
2. **Ordering / Setup Cost ($S$):**
   - The fixed operational cost incurred every time an order is placed or a machine setup is performed—regardless of the quantity ordered (e.g., procurement paperwork, EDI processing, receiving inspection, dock scheduling, machine calibration).
   - $\text{Annual Ordering Cost} = \left(\frac{D}{Q}\right) S$ (where $\frac{D}{Q}$ represents the number of orders per year).
3. **Holding / Carrying Cost ($H$ or $h \cdot C$):**
   - The financial cost incurred to maintain one unit of inventory in storage for one year.
   - Includes capital cost (interest on tied-up working capital $\approx 15\%-25\%$), warehouse rent, utilities, refrigeration, insurance, property taxes, shrinkage, theft, and obsolescence.
   - $\text{Annual Holding Cost} = \left(\frac{Q}{2}\right) H$ (where $\frac{Q}{2}$ represents the average cycle inventory).
4. **Shortage / Stockout Cost:**
   - The penalty cost incurred when stock runs out: lost profit margins, customer churn, expedited air freight, and factory shutdown penalties.

### Mathematical Derivation of the Classic EOQ Model
Originating from the work of Ford W. Harris and popularized by R.H. Wilson:
- **Core Assumptions:**
  - Annual demand $D$ is constant, uniform, and known with certainty.
  - Replenishment order quantity arrives all at once (instantaneous receipt).
  - Lead time $L$ is constant and known.
  - Purchase price $C$ is fixed (no quantity discounts).
  - No stockouts or shortages are permitted.
- **Total Annual Cost Equation:**

$$TC(Q) = (D \cdot C) + \left( \frac{D}{Q} \right) S + \left( \frac{Q}{2} \right) H$$

- **Deriving Optimal Order Quantity ($Q^*$):**
  To find the minimum cost point, take the first derivative of $TC(Q)$ with respect to $Q$ and set it to zero:

$$\frac{d(TC)}{dQ} = -\frac{D \cdot S}{Q^2} + \frac{H}{2} = 0$$

$$\frac{D \cdot S}{Q^2} = \frac{H}{2} \implies Q^2 = \frac{2 D S}{H} \implies \mathbf{Q^* = \sqrt{\frac{2 D S}{H}}}$$

```
ANNUAL COST
     ▲
     │                      / Total Cost Curve TC(Q)
     │                     /
     │       \            /      / Annual Holding Cost = (Q/2)H
     │        \          /      /
     │         \________/______/
     │          \      /
     │           \____/__________ Annual Ordering Cost = (D/Q)S
     │               │
     └───────────────┼────────────────────────► ORDER QUANTITY (Q)
                    Q* (EOQ)
```

### Critical Mathematical Properties at the EOQ Point ($Q^*$)
- **Cost Equivalence:** At $Q^*$, **Annual Ordering Cost equals Annual Holding Cost**:
  $$\left( \frac{D}{Q^*} \right) S = \left( \frac{Q^*}{2} \right) H$$
- **Minimum Annual Variable Inventory Cost ($TVC^*$):**
  $$TVC^* = \sqrt{2 D S H}$$
- **Optimal Number of Orders per Year ($N^*$):**
  $$N^* = \frac{D}{Q^*} = \sqrt{\frac{D H}{2 S}}$$
- **Optimal Cycle Time between Orders ($T^*$):**
  $$T^* = \frac{Q^*}{D} \text{ (in years)} = \frac{\text{Working Days}}{N^*} \text{ (in days)}$$
- **Reorder Point ($ROP$) Formulation:**
  $$ROP = d \cdot L = \left( \frac{D}{\text{Annual Working Days}} \right) \cdot L$$
  Where $d$ is daily demand rate and $L$ is lead time in days.

---

## 3. Differences / Examples

### Synthesis: Ordering Cost vs. Holding Cost Dynamics

| Parameter | High Order Quantity ($Q$) | Low Order Quantity ($Q$) | Optimal Order Quantity ($EOQ$) |
|---|---|---|---|
| **Annual Number of Orders ($D/Q$)**| Very Few orders per year. | Many orders per year. | Balances order frequency. |
| **Annual Ordering Cost** | **Very Low** (fixed costs amortized).| **Very High** (repetitive paperwork).| Perfectly balances holding cost. |
| **Average Inventory ($Q/2$)** | **Very High** (cluttered warehouses). | Very Low (minimal stock). | Optimal buffer level. |
| **Annual Holding Cost** | **Very High** (tied-up capital). | **Very Low** (minimal storage cost). | **Equals Annual Ordering Cost**. |

### Concrete Worked Numerical Problem from the Lecture
- An industrial facility requires **10,000 units** of a raw component annually ($D = 10,000$).
  - Order placement cost $S = \text{Rs. } 50$ per order.
  - Annual inventory carrying cost $H = \text{Rs. } 4$ per unit per year.
  - Facility operates **250 working days** per year; supplier lead time $L = \mathbf{5\text{ days}}$.
- **Computations:**
  - **Optimal Economic Order Quantity ($Q^*$):**
    $$Q^* = \sqrt{\frac{2 D S}{H}} = \sqrt{\frac{2 \times 10,000 \times 50}{4}} = \sqrt{\frac{1,000,000}{4}} = \sqrt{250,000} = \mathbf{500\text{ units}}$$
  - **Annual Number of Orders ($N^*$):**
    $$N^* = \frac{D}{Q^*} = \frac{10,000}{500} = \mathbf{20\text{ orders per year}}$$
  - **Cycle Time between Orders ($T^*$):**
    $$T^* = \frac{250\text{ working days}}{20\text{ orders}} = \mathbf{12.5\text{ working days}}$$
  - **Annual Ordering Cost:**
    $$\text{Ordering Cost} = \left(\frac{10,000}{500}\right) \times 50 = 20 \times 50 = \mathbf{\text{Rs. } 1,000}$$
  - **Annual Holding Cost:**
    $$\text{Holding Cost} = \left(\frac{500}{2}\right) \times 4 = 250 \times 4 = \mathbf{\text{Rs. } 1,000}$$
    *(Notice: Ordering Cost = Holding Cost = Rs. 1,000 at EOQ!)*
  - **Total Minimum Annual Variable Cost ($TVC^*$):**
    $$TVC^* = 1,000 + 1,000 = \mathbf{\text{Rs. } 2,000}$$
  - **Reorder Point ($ROP$):**
    $$d = \frac{10,000}{250} = 40\text{ units per day}$$
    $$ROP = d \cdot L = 40 \times 5 = \mathbf{200\text{ units}}$$
    *(Trigger a new 500-unit order the instant warehouse stock depletes to 200 units).*

---

## 4. Must Remember

- The classic **Economic Order Quantity (EOQ)** formula is:
  $$Q^* = \sqrt{\frac{2 D S}{H}}$$
  Where $D$ = Annual Demand, $S$ = Ordering/Setup Cost, and $H$ = Annual Unit Holding Cost.
- At the optimal EOQ point, **Annual Ordering Cost is mathematically identical to Annual Holding Cost**:
  $$\left(\frac{D}{Q^*}\right) S = \left(\frac{Q^*}{2}\right) H$$
- The minimum annual variable cost is:
  $$TVC^* = \sqrt{2 D S H}$$
- The **Reorder Point ($ROP$)** under constant demand is:
  $$ROP = d \cdot L = \left(\frac{D}{\text{Working Days}}\right) \cdot L$$
- The three motives for holding inventory are **Transaction (operations), Precautionary (safety buffer), and Speculative (price hedge)**.
- Ordering costs decrease as batch size $Q$ increases; holding costs increase linearly with $Q$.

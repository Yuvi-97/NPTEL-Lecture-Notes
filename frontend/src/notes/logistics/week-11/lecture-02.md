# Week 11 – Lecture 2: Inventory Management (Contd.)

## 1. Key Concepts

- **Safety Stock ($SS$):** The permanent buffer inventory held to protect against stockouts caused by stochastic fluctuations in customer demand or supplier delivery lead times during the replenishment cycle.
- **Cycle Service Level ($CSL$):** The statistical probability that customer demand will be completely met from available inventory during the replenishment lead-time cycle (i.e., the probability of not stocking out).
- **Quantity Discount Modeling:** An inventory replenishment framework where suppliers incentivize larger purchase batch sizes by offering tiered price reductions, requiring the buyer to balance lower unit purchase prices against inflated annual holding costs.
- **ABC Inventory Classification:** A selective inventory management technique based on the **Pareto Principle (80/20 Rule)** that categorizes SKUs into three distinct tiers (**A, B, and C**) based on their **Annual Dollar Usage** ($\text{Annual Demand} \times \text{Unit Cost}$).
- **Selective Inventory Control Systems:** Multi-criteria classification frameworks categorizing inventory by operational criticality (**VED**), consumption velocity (**FSN**), and procurement difficulty (**SDE**).

---

## 2. Important Points

### Safety Stock and Stochastic Reorder Point Formulation
When daily demand is normally distributed with mean $\bar{d}$ and standard deviation $\sigma_d$, and lead time $L$ is fixed:

$$ROP = (\bar{d} \cdot L) + SS$$

- **Safety Stock ($SS$) Equation:**

$$SS = z \cdot \sigma_{dL} = z \cdot \sigma_d \sqrt{L}$$

- Where:
  - $\bar{d} \cdot L$: Expected average demand during lead time.
  - $\sigma_{dL} = \sigma_d \sqrt{L}$: Standard deviation of demand over lead time $L$.
  - $z$: The standard normal deviate corresponding to the desired Cycle Service Level ($CSL$):
    - For $90\% \text{ CSL} \implies z \approx 1.28$
    - For $95\% \text{ CSL} \implies z \approx 1.65$
    - For $98\% \text{ CSL} \implies z \approx 2.05$
    - For $99\% \text{ CSL} \implies z \approx 2.33$

### EOQ with Quantity Discounts
- When suppliers offer price breaks, the total annual cost must explicitly include the purchase cost ($D \cdot C$):
  $$TC(Q) = (D \cdot C) + \left(\frac{D}{Q}\right) S + \left(\frac{Q}{2}\right) (h \cdot C)$$
- **Solving Algorithm:**
  1. Calculate the standard EOQ for the lowest unit price tier.
  2. If the calculated EOQ is mathematically feasible within that quantity tier, it is optimal.
  3. If not feasible, compute total annual cost $TC(Q)$ at the **minimum threshold quantity of each lower-price discount break**, and compare against the feasible EOQ of higher-price tiers.
  4. Select the order quantity $Q$ yielding the lowest overall $TC(Q)$.

### Selective Inventory Control Taxonomies
The lecture establishes four major classification matrices for selective warehouse management:

#### 1. ABC Analysis (Annual Dollar Usage)
- **Class A Items (Vital Financial Focus):**
  - Accounts for **$\approx 70\%-80\%$ of total annual dollar spend**, but only **$\approx 10\%-20\%$ of total SKUs**.
  - *Management:* Tight daily control, continuous review, JIT delivery, minimal safety stocks, senior executive sign-offs.
- **Class B Items (Moderate Financial Focus):**
  - Accounts for **$\approx 15\%-20\%$ of annual dollar spend** and **$\approx 30\%$ of SKUs**.
  - *Management:* Periodic review, moderate safety buffers, standard automated purchase orders.
- **Class C Items (Low Financial Focus / Bulk SKUs):**
  - Accounts for only **$\approx 5\%-10\%$ of total annual spend**, yet comprises **$\approx 50\%$ of physical SKUs**.
  - *Management:* Simple visual control (e.g., Two-Bin System), large order batches, generous safety stock buffers.

#### 2. VED Analysis (Operational Criticality for Spare Parts)
- **V – Vital:** Parts whose absence causes catastrophic plant shutdowns or life-threatening safety failures $\rightarrow$ High safety stock maintained regardless of price.
- **E – Essential:** Parts whose absence causes significant operational degradation or loss of efficiency $\rightarrow$ Moderate safety buffer.
- **D – Desirable:** Minor parts whose absence causes non-critical inconvenience without halting production.

#### 3. FSN Analysis (Consumption Rate / Velocity)
- **F – Fast-Moving:** High turnover velocity $\rightarrow$ Slotted near dispatch docks.
- **S – Slow-Moving:** Moderate turnover velocity $\rightarrow$ Slotted in standard warehouse shelving.
- **N – Non-Moving:** Obsolete or dead stock $\rightarrow$ Quarantined and slated for disposal or liquidation.

#### 4. SDE Analysis (Procurement Availability and Lead Time)
- **S – Scarce:** Imported raw materials or quota-controlled items with long lead times.
- **D – Difficult:** Specialized components requiring 3 to 6 months manufacturing lead times.
- **E – Easy:** Readily available off-the-shelf local commercial components.

---

## 3. Differences / Examples

### Synthesis: The Four Selective Inventory Control Frameworks

| System | Primary Classification Criterion | Tiers / Categories | Primary Operational Objective |
|---|---|---|---|
| **ABC** | **Annual Dollar Consumption** ($\text{Demand} \times \text{Cost}$) | **A (75%), B (20%), C (5%)** | Financial working capital control. |
| **VED** | **Criticality to Production Line Stoppage** | **Vital, Essential, Desirable** | Prevent manufacturing shutdowns. |
| **FSN** | **Physical Consumption Velocity** | **Fast, Slow, Non-Moving** | Warehouse slotting & obsolescence prevention. |
| **SDE** | **Procurement Lead Time & Market Scarcity** | **Scarce, Difficult, Easy** | Buffer against supplier supply risk. |

### Concrete Worked Numerical Problem: Safety Stock and ROP under Uncertainty
- A retail distribution center faces normally distributed daily demand for a consumer product:
  - Average daily demand $\bar{d} = \mathbf{100\text{ units/day}}$.
  - Standard deviation of daily demand $\sigma_d = \mathbf{15\text{ units/day}}$.
  - Supplier delivery lead time $L = \mathbf{9\text{ days}}$.
  - Management mandates a **95% Cycle Service Level** ($z = 1.65$).
- **Computations:**
  - **Standard Deviation of Demand During Lead Time ($\sigma_{dL}$):**
    $$\sigma_{dL} = \sigma_d \sqrt{L} = 15 \times \sqrt{9} = 15 \times 3 = \mathbf{45\text{ units}}$$
  - **Required Safety Stock ($SS$):**
    $$SS = z \cdot \sigma_{dL} = 1.65 \times 45 = \mathbf{74.25} \approx \mathbf{75\text{ units}}$$
  - **Reorder Point ($ROP$):**
    $$ROP = (\bar{d} \cdot L) + SS = (100 \times 9) + 75 = 900 + 75 = \mathbf{975\text{ units}}$$
    *(Trigger replenishment when inventory drops to 975 units to guarantee 95% protection against stockouts).*

---

## 4. Must Remember

- The Reorder Point under demand uncertainty is:
  $$ROP = (\bar{d} \cdot L) + SS \quad \text{where } SS = z \cdot \sigma_d \sqrt{L}$$
- A **95% service level corresponds to $z = 1.65$**; a **99% service level corresponds to $z = 2.33$**.
- **ABC Analysis** follows the Pareto 80/20 rule based on **Annual Dollar Usage**: Class A represents ~70%–80% of spend with ~10%–20% of SKUs and requires tightest control.
- **VED Analysis** classifies inventory by **operational criticality** (Vital, Essential, Desirable) to prevent assembly line stoppages.
- **FSN Analysis** (Fast, Slow, Non-moving) dictates **warehouse slotting and dead-stock liquidation**.
- **SDE Analysis** (Scarce, Difficult, Easy) manages **supplier procurement lead-time risk**.
- In quantity discount models, the optimal batch size is determined by evaluating total annual cost (including purchase price) at feasible EOQs and price-break discount thresholds.

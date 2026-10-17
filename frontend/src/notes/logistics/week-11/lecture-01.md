# Week 11 – Lecture 1: Inventory Management

## 1. Key Concepts
- **Inventory:** The idle stock of physical assets, materials, goods, or resources maintained by an enterprise to facilitate smooth production operations or satisfy future customer demand.
- **Economic Order Quantity (EOQ):** The mathematically optimal order lot size ($Q^*$) that minimizes the total annual cost of ordering and carrying inventory (developed by Ford W. Harris, 1913).
- **Core Trade-off:** Balancing the fixed setup/transaction costs of placing orders against the ongoing financial carrying costs of holding stock in warehouses.

## 2. Important Points
- **The Four Categories of Industrial Inventory:**
  1. *Raw Materials:* Inbound commodities and parts awaiting conversion.
  2. *Work-in-Process (WIP):* Semi-finished products actively undergoing shop-floor assembly.
  3. *Finished Goods:* Completed items stored ready for customer distribution.
  4. *MRO Supplies:* Maintenance, Repair, and Operating supplies (tools, lubricants, safety spare parts).
- **Inventory Cost Components:**
  - **Ordering / Setup Cost ($S$):** Fixed cost incurred per order placed (paperwork, freight booking, receiving, dock unloading).
  - **Holding / Carrying Cost ($H = h \cdot C$):** Cost of keeping inventory in stock per unit per year (capital interest, warehouse rent, insurance, handling, obsolescence: typically $15\text{–}25\%$ of unit value).
- **The Classical EOQ Model Formulation:**
  - Total Annual Inventory Cost:
    $$\text{TC}(Q) = \frac{D}{Q}S + \frac{Q}{2}H$$
  - Differentiating with respect to $Q$ and setting to zero yields the optimal order quantity:
    $$\text{EOQ} = Q^* = \sqrt{\frac{2DS}{H}}$$
  - At optimal EOQ: **Annual Ordering Cost = Annual Holding Cost**.

## 3. Differences / Examples
| Parameter | Annual Ordering Cost | Annual Holding Cost |
| :--- | :--- | :--- |
| **Formula** | $\frac{D}{Q} \times S$ | $\frac{Q}{2} \times H$ |
| **Behavior with Order Size ($Q$)** | Decreases as order quantity $Q$ expands | Increases linearly as order quantity $Q$ expands |
| **Objective** | Incentivizes placing large, infrequent bulk orders | Incentivizes placing small, frequent lean orders |

## 4. Must Remember
- Total inventory cost is **minimized** exactly where the ordering cost curve and holding cost curve intersect.
- EOQ is remarkably **robust**: a $10\%$ variation in order lot size causes less than a $1\%$ change in total annual inventory cost.

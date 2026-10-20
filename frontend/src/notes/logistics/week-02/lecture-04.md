# Week 2 – Lecture 4: Logistics Key Performance Indicators (KPIs)

## 1. Key Concepts

- **Logistics Key Performance Indicators (KPIs):** Quantitative metrics utilized to monitor, evaluate, and benchmark the operational effectiveness, financial efficiency, and service reliability of logistics and supply chain activities.
- **Strategic Frontier (Efficiency vs. Responsiveness):** The fundamental trade-off governing logistics systems. A firm cannot achieve extreme cost efficiency (bulk consolidated freight) and extreme customer responsiveness (sub-30-minute individual delivery) simultaneously; KPIs measure where an enterprise sits on this operational spectrum.
- **On-Time In-Full (OTIF):** The gold standard customer fulfillment KPI measuring the percentage of orders delivered within the promised delivery window without quantity shortages, damage, or item substitutions.
- **Order Cycle Time ($OCT$):** The total elapsed duration from the exact timestamp an order is confirmed by the buyer to its physical handover at the final destination.
- **Out-of-Network Shipments:** Unplanned, irregular shipments dispatched from a distant secondary warehouse because the designated local fulfillment center suffered an inventory stockout, resulting in inflated shipping costs and extended lead times.

---

## 2. Important Points

### Mathematical Formulas for Core Logistics KPIs
The lecture outlines explicit quantitative formulas across four operational domains:

#### A. Transportation Management KPIs
1. **Transportation Cost as a Percentage of Revenue:**
   $$\text{Transport Cost \%} = \left( \frac{\text{Total Transportation Costs}}{\text{Gross Revenue}} \right) \times 100$$
   *(Industry benchmark cited in lecture: approximately **8%** of gross income).*

2. **Freight Cost per Unit Shipped:**
   $$\text{Freight Cost per Unit} = \frac{\text{Total Incurred Freight Cost}}{\text{Total Units Shipped}}$$
   - *Economies of Scale Effect:* As freight volume fills a truck up to its maximum rated capacity (e.g., 10 tons), freight cost per unit steadily drops. Exceeding 10 tons by even 500 kg requires deploying a second truck, causing cost per unit to suddenly spike.

3. **Transit Time Velocity (Days per Mile):**
   $$\text{Transit Velocity} = \frac{\text{Total Transit Duration (Days)}}{\text{Total Miles Covered}}$$
   *(Example: If 2,000 miles are covered in 5 days, transit velocity is $\frac{5}{2000} = 0.0025\text{ days per mile}$).*

4. **Freight Cost per Mile:**
   $$\text{Cost per Mile} = \frac{\text{Total Freight Expenses}}{\text{Total Miles Traveled}}$$
   *(Benchmark cited: $\approx 1.34\text{ USD per mile}$ depending on transport mode and cargo density).*

#### B. Warehousing and Inventory KPIs
1. **Average Cost per Order Processed:**
   $$\text{Average Cost per Order} = \frac{\text{Labor} + \text{Packaging} + \text{Storage Rent} + \text{Utility Costs}}{\text{Total Number of Orders Processed}}$$

2. **Warehouse Storage Space Utilization:**
   $$\text{Storage Density} = \frac{\text{Total Stored Inventory Units}}{\text{Total Usable Warehouse Footprint (sq. ft.)}}$$
   *(Example from lecture: achieving **3.7 units per square foot** through optimized vertical racking).*

3. **Carrying / Holding Cost Ratio:** Measures the annualized capital, insurance, shrinkage, and obsolescence expense incurred to hold inventory.

#### C. Order Management and Customer Service KPIs
1. **Order Picking Accuracy (%):**
   $$\text{Picking Accuracy} = \left( \frac{\text{Number of Accurately Picked and Verified Orders}}{\text{Total Orders Picked}} \right) \times 100$$
   *(Lecture note: A 96% accuracy rate implies 4 out of every 100 orders contain picking errors, generating costly return handling and customer dissatisfaction).*

2. **Order Cycle Time ($OCT$):**
   $$\text{OCT} = T_{\text{processing}} + T_{\text{picking/packing}} + T_{\text{staging}} + T_{\text{transit}} + T_{\text{delivery}}$$

3. **Operating Ratio:**
   $$\text{Operating Ratio} = \left( \frac{\text{Total Operating Expenses}}{\text{Gross Revenue}} \right) \times 100$$
   *(A lower operating ratio indicates superior managerial cost efficiency and healthier operational margins).*

---

## 3. Differences / Examples

### KPI Dashboard: Categorical Breakdown

| Functional Area | Key KPI | Measurement Unit | Primary Operational Objective |
|---|---|---|---|
| **Financial / Overall** | **Operating Ratio** | Percentage ($\%$) | Minimize overhead relative to gross revenue. |
| **Transportation** | **Transport Cost % of Revenue** | Percentage ($\%$) | Maintain below 8%–10% of gross earnings. |
| **Transportation** | **Cost per Mile** | Cost / Mile (\$/mile or ₹/km) | Optimize vehicle routing and backhaul loads. |
| **Warehousing** | **Warehouse Space Utilization** | Units / Sq. Ft. | Maximize vertical storage and pallet slotting. |
| **Order Fulfillment** | **Order Picking Accuracy** | Percentage ($\%$) | Drive toward Six Sigma ($> 99.5\%$) picking accuracy. |
| **Customer Service** | **On-Time In-Full (OTIF)** | Percentage ($\%$) | Guarantee complete, damage-free, punctual deliveries. |

### Concrete Worked Illustration from the Lecture: Truck Capacity Threshold
- **Scenario:** A commercial haulage truck has an absolute payload capacity of **10 tons (10,000 kg)**, costing **Rs. 50,000** per long-distance trip.
  - If loaded with **5 tons (5,000 kg)**: Freight cost per kg is $\frac{50,000}{5,000} = \text{Rs. } 10/\text{kg}$.
  - If loaded to full capacity with **10 tons (10,000 kg)**: Freight cost per kg falls to $\frac{50,000}{10,000} = \text{Rs. } 5/\text{kg}$ (achieving maximum economies of scale).
  - If consignment increases to **10.5 tons**: A single truck cannot legally carry the freight. A second truck must be contracted at an additional Rs. 50,000, bringing total freight cost to Rs. 100,000 for 10.5 tons $\rightarrow \frac{100,000}{10,500} \approx \text{Rs. } 9.52/\text{kg}$ (sharp cost spike due to capacity lumpiness).

---

## 4. Must Remember

- Key performance indicators are anchored around the fundamental strategic dilemma: **Cost Efficiency vs. Customer Responsiveness**.
- Transportation typically consumes approximately **8% of gross corporate revenue**.
- **Freight Cost per Unit** decreases progressively as cargo approaches maximum payload capacity, but spikes sharply when capacity is exceeded due to the fixed step-cost of dispatching an additional vehicle.
- **Order Picking Accuracy** formula:
  $$\text{Picking Accuracy} = \frac{\text{Correct Orders Packed}}{\text{Total Orders Packed}} \times 100$$
  High picking accuracy directly prevents expensive reverse logistics loops.
- **Operating Ratio** formula:
  $$\text{Operating Ratio} = \frac{\text{Total Operating Expenses}}{\text{Gross Revenue}} \times 100$$
  Lower values reflect superior operating efficiency.
- **On-Time In-Full (OTIF)** delivery measures the proportion of orders delivered within the promised window without missing items, damage, or substitutions.
- **Out-of-network shipments** occur when primary local fulfillment centers stock out, forcing long-distance fulfillment from secondary warehouses at inflated freight expense.

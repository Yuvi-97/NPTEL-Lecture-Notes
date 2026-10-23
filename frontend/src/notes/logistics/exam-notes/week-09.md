# Week 9 Consolidated Notes: Distribution Network Design, Fulfillment Archetypes, and Facility Location Planning

---

## A. Consolidated Theory

Week 9 explores downstream distribution management, evaluating how distribution networks balance customer service dimensions against total supply chain costs. It covers the six classical distribution network design archetypes (from Drop-Shipping to Retail Storage) and the mathematical and multi-criteria frameworks for Facility Location Planning (Factor Rating, Load-Distance, Locational Break-Even, and Distance Metrics).

---

### 1. Importance and Economics of Distribution Networks

#### 1.1 Definition and Core Function
- **Distribution in Supply Chain:** The operational processes, physical facilities, inventory nodes, and transportation flows used to move and transfer finished products from upstream manufacturing stages to downstream customer stages.
- Distribution directly determines the enterprise's cost structure and shapes the customer experience.

#### 1.2 The Two Primary Performance Dimensions
Distribution network design governs two fundamental performance vectors:

##### A. Customer Service Performance Dimensions
1. **Response Time:** The duration from customer order entry to physical doorstep handover. Shorter response times require positioning inventory closer to customer population clusters.
2. **Product Variety:** The total number of distinct SKUs offered to the market. Broad variety complicates distribution, requiring centralized risk-pooling or downstream postponement.
3. **Product Availability:** The stockout probability, typically measured by the Order Fill Rate. High availability targets require larger safety inventory buffers or high-velocity replenishment hubs.
4. **Customer Experience:** The convenience, speed, tracking transparency, and ease with which customers browse, place, receive, and return orders.
5. **Order Visibility:** The ability of customers to track consignments in real time from origin dispatch to final delivery.
6. **Returnability:** The ease with which consumers can return defective, damaged, or unwanted goods via reverse logistics channels.

##### B. Supply Chain Cost Performance Dimensions
1. **Facility Costs:** Capital expenditures, lease rent, utility expenses, material handling equipment ($MHE$), and warehouse labor.
2. **Inventory Costs:** The capital carrying, insurance, shrinkage, and obsolescence costs of maintaining cycle, safety, and seasonal stocks.
3. **Transportation Costs:** Inbound linehaul freight from suppliers plus outbound last-mile shipping expenses.
4. **Information and Handling Costs:** The enterprise software (WMS/TMS/ERP) and communication infrastructure required to coordinate order fulfillment.

#### 1.3 Relationship Between Number of Facilities and Supply Chain Costs
As the number of warehouse facilities in a distribution network increases:
- **Inventory Costs:** Increase steadily due to the loss of statistical risk-pooling and the duplication of safety stocks across facilities (governed by the **Square Root Law**).
- **Facility Costs:** Increase linearly with facility count due to redundant building leases, equipment, and administrative overhead.
- **Inbound Transportation Costs:** Increase because inbound shipments are split into smaller, fragmented Less-than-Truckload ($LTL$) shipments rather than bulk Full Truckloads ($FTL$).
- **Outbound Transportation Costs:** Decrease because regional distribution hubs are located closer to customer doorsteps, shortening last-mile transit distances.
- **The Total Cost Curve:** Displays a convex **U-shape**. Total cost initially decreases as outbound transport savings dominate, reaches an optimal minimum, and then escalates rapidly as inventory carrying and facility fixed overhead outpace last-mile savings.

```
COST
  ▲
  │                     / Total Supply Chain Cost (Convex U-Curve)
  │                    /
  │    \              /     / Inventory & Facility Costs (Rising)
  │     \            /     /
  │      \__________/_____/
  │       \        /
  │        \______/_______ Outbound Transportation Cost (Falling)
  │
  └───────────────────────────────────────────────────►
               NUMBER OF FACILITIES
```

---

### 2. The Six Foundational Distribution Network Design Archetypes

Supply chain theory categorizes product distribution into six distinct operational models:

#### 1. Manufacturer Storage with Direct Shipping (Drop-Shipping)
- **Operational Mechanics:** The retailer takes the customer order, processes payment, and relays order specifications to the manufacturer. Inventory is stored entirely at the manufacturer’s facility and shipped directly to the consumer, completely bypassing retailer warehouses.
- **Inventory:** Lowest inventory cost; maximizes centralized inventory pooling at the factory.
- **Transportation:** High outbound parcel freight costs; split shipments occur if an order spans items from different manufacturers.
- **Response Time:** Long lead times (**1 to 2 weeks**).
- **Best Product Fit:** High-value, low-demand, highly customized, slow-moving items with high profit margins.

#### 2. Manufacturer Storage with In-Transit Merge
- **Operational Mechanics:** Components manufactured at separate factory locations (e.g., computer CPU from Factory A and a display monitor from Factory B) are merged in-transit at a regional freight carrier terminal, arriving at the customer's doorstep as a single consolidated package.
- **Advantages:** Lowers customer shipping confusion and packaging waste; lowers final-delivery transportation costs compared to pure drop-shipping.
- **Requirements:** High IT synchronization, advanced carrier telematics, and precise transit coordination.

#### 3. Distributor Storage with Package Carrier Delivery
- **Operational Mechanics:** Wholesalers and regional distributors warehouse products closer to consumers and dispatch orders via third-party express parcel carriers (e.g., DHL, FedEx, Blue Dart).
- **Performance:** Fast response times (**1 to 3 business days**); moderate inventory costs due to regional stocking.
- **Best Product Fit:** Medium-to-fast moving consumer goods with stable, predictable demand.

#### 4. Distributor Storage with Last-Mile Delivery Fleet
- **Operational Mechanics:** The distributor operates a dedicated, proprietary delivery vehicle fleet to transport orders directly to the customer’s doorstep within hours (e.g., local grocery quick commerce, B2B auto parts distribution).
- **Performance:** Very fast response time (**same-day or 10–30 minutes**); very high transportation and fleet maintenance expenses requiring high geographic order density.
- **Best Product Fit:** Perishable food, groceries, and urgent emergency supplies.

#### 5. Manufacturer / Distributor Storage with Customer Pickup (Click-and-Collect)
- **Operational Mechanics:** Inventory is shipped from central warehouses to designated local pickup points (automated 24/7 parcel lockers, neighborhood convenience stores, local retail outlets). The customer travels to the site to collect the parcel.
- **Advantages:** Dramatically reduces last-mile carrier delivery expenses; completely eliminates failed residential delivery attempts.
- **Best Product Fit:** High-volume e-commerce items where consumers experience daytime absence.

#### 6. Retail Storage with Customer Pickup
- **Operational Mechanics:** Traditional brick-and-mortar retail stores where inventory is stored locally on retail shelves, and customers browse, purchase, and transport goods home immediately.
- **Performance:** **Fastest possible response time (instantaneous possession)**; highest facility lease expenses and highest aggregate safety inventory costs across the supply chain.
- **Best Product Fit:** Everyday fast-moving consumer staples (FMCG) and emergency consumables.

---

### 3. Facility Location Planning Methodologies

Facility location decisions establish the permanent physical infrastructure of the supply chain, evaluated across four foundational methods:

#### 3.1 The Factor Rating Method (Multi-Criteria Scoring)
The most widely deployed framework combining quantitative financial metrics with qualitative strategic drivers:
1. Identify critical location factors (labor cost, highway access, port draft depth, tax incentives, power grid reliability).
2. Assign an importance weight ($W_i$) to each factor such that $\sum W_i = 1.0$ (or $100\%$).
3. Score each candidate location $j$ on a standardized scale (e.g., $1\text{ to }100$).
4. Compute the composite weighted score:
   $$\text{Composite Score}_j = \sum_{i=1}^{m} (W_i \cdot S_{ij})$$
5. Select the location achieving the highest composite score.

#### 3.2 The Load-Distance ($ld$) Method
Used to compare discrete candidate sites based on total freight transportation effort:
$$ld = \sum_{i=1}^{n} (L_i \cdot d_i)$$
Where:
- $L_i =$ Freight tonnage or shipment volume moved between the facility and market $i$.
- $d_i =$ Distance separating the facility from market $i$. The candidate site with the lowest $ld$ score is selected.

#### 3.3 Geometric Distance Metrics
1. **Euclidean Distance (Straight-Line Distance):**
   $$d_{ij} = \sqrt{(X_i - X_j)^2 + (Y_i - Y_j)^2}$$
   - Measures direct geometric flight distance between two Cartesian points.
2. **Rectilinear Distance (Manhattan / City-Block Distance):**
   $$d_{ij} = |X_i - X_j| + |Y_i - Y_j|$$
   - Measures distance along perpendicular, right-angled street grids (standard in dense urban vehicle routing).

#### 3.4 Locational Cost-Volume-Profit Break-Even Analysis
Compares candidate locations exhibiting different fixed setup costs and variable operating costs:
$$\text{Total Cost of Location } j = FC_j + (VC_j \cdot Q)$$
Where:
- $FC_j =$ Annual fixed land lease, building construction, and equipment amortized costs.
- $VC_j =$ Variable labor, materials, utilities, and freight cost per unit.
- $Q =$ Projected annual production volume.
- Equating the total cost lines between candidate sites identifies the volume break-even thresholds that dictate the cost-optimal location across different volume brackets.

---

## B. Important Definitions and Terminology

| Term | Definition |
| :--- | :--- |
| **Distribution Network Design** | The strategic selection of facility types, locations, and transportation links used to transfer products from producers to consumers. |
| **Response Time** | The elapsed duration between customer order placement and physical order delivery. |
| **Drop-Shipping** | A fulfillment model where the retailer takes orders, but the manufacturer stores the inventory and ships directly to the end consumer. |
| **In-Transit Merge** | A distribution strategy where components from separate manufacturing plants are consolidated at a carrier terminal to deliver a single unified package to the customer. |
| **Click-and-Collect** | A fulfillment model where customers order online and travel to a designated local pickup locker or retail store to collect their packages. |
| **Factor Rating Method** | A multi-criteria location evaluation framework that scores candidate sites using weighted quantitative and qualitative criteria. |
| **Load-Distance Technique** | A location evaluation technique that calculates cumulative freight volume multiplied by distance ($\sum L_i d_i$) to identify the site that minimizes transport effort. |
| **Euclidean Distance** | The straight-line geometric distance between two coordinate points: $\sqrt{(\Delta X)^2 + (\Delta Y)^2}$. |
| **Rectilinear Distance** | The distance measured along perpendicular right-angled grid streets: $|\Delta X| + |\Delta Y|$. |
| **Locational Break-Even Analysis** | An economic modeling technique comparing the fixed and variable costs of candidate sites across varying expected production volume ranges. |

---

## D. Comparisons and Classification Tables

### 1. The Six Distribution Network Design Archetypes

| Design Option | Response Time | Inventory Costs | Transportation Costs | Facility Costs | Best Product Category |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Drop-Shipping** | Long (1–2 weeks) | **Lowest (Centralized)** | **High (Parcel rates)** | Very Low | Slow-moving, high-value, customizable items |
| **2. In-Transit Merge** | Moderate (3–7 days) | Low to Moderate | Moderate | Low | High-value multi-component systems (PCs) |
| **3. Distributor Storage / Carrier**| Fast (1–3 days) | Moderate | Moderate to High | Moderate | Fast-to-medium velocity consumer items |
| **4. Distributor / Last-Mile Fleet**| **Very Fast (Same-day)**| Moderate to High | **Highest (Fleet cost)**| Moderate to High | Perishables, groceries, high-density urban items |
| **5. Storage / Customer Pickup** | Moderate (1–2 days) | Moderate | **Lowest (Shared freight)**| Moderate | E-commerce parcels with high daytime absence |
| **6. Retail Storage / Store Pickup**| **Instantaneous** | **Highest (Decentralized)**| Low (Bulk FTL to store)| **Highest (Retail leases)**| Standard fast-moving retail staples (FMCG) |

### 2. Facility Location Evaluation Frameworks

| Methodology | Nature of Input Data | Primary Operational Objective | Key Advantage | Key Limitation |
| :--- | :--- | :--- | :--- | :--- |
| **Factor Rating** | Qualitative & Quantitative | Multi-criteria scoring | Incorporates non-financial strategic drivers | Vulnerable to subjective weighting bias |
| **Load-Distance** | Quantitative Distance & Load | Minimize total freight movement work | Directly models transport effort | Assumes freight costs are purely linear with distance |
| **Center of Gravity**| Coordinate Geometry & Load | Find theoretical cost-optimal centroid coordinates | Mathematically provable minimum | Ignores geographic obstacles, borders, and terrain |
| **Break-Even Analysis**| Fixed & Variable Cost Structure| Determine lowest-cost site across volume brackets | Clear visual decision thresholds | Assumes linear fixed and variable costs |

---

## E. Worked Examples and Applications

### Example 1: Multi-Criteria Location Evaluation — Factor Rating Method
**Scenario:** A national logistics enterprise evaluates three candidate cities (**Site A, Site B, and Site C**) for a new automated multi-modal fulfillment hub:

| Evaluation Factor | Importance Weight ($W_i$) | Site A Score | Site B Score | Site C Score |
| :--- | :---: | :---: | :---: | :---: |
| **Highway & Rail Access** | 0.30 | 85 | 90 | 70 |
| **Skilled Warehouse Labor Availability** | 0.25 | 75 | 80 | 85 |
| **Land Lease Costs & Local Tax Rates** | 0.20 | 90 | 65 | 80 |
| **Proximity to Key Metropolitan Markets** | 0.15 | 80 | 85 | 75 |
| **Power Grid & Telecommunications Reliability** | 0.10 | 80 | 90 | 85 |
| **TOTAL** | **1.00** | — | — | — |

1. **Calculate Composite Scores:**
   - $\text{Score}_A = (0.30 \times 85) + (0.25 \times 75) + (0.20 \times 90) + (0.15 \times 80) + (0.10 \times 80)$
     $$\text{Score}_A = 25.5 + 18.75 + 18.0 + 12.0 + 8.0 = \mathbf{82.25}$$
   - $\text{Score}_B = (0.30 \times 90) + (0.25 \times 80) + (0.20 \times 65) + (0.15 \times 85) + (0.10 \times 90)$
     $$\text{Score}_B = 27.0 + 20.0 + 13.0 + 12.75 + 9.0 = \mathbf{81.75}$$
   - $\text{Score}_C = (0.30 \times 70) + (0.25 \times 85) + (0.20 \times 80) + (0.15 \times 75) + (0.10 \times 85)$
     $$\text{Score}_C = 21.0 + 21.25 + 16.0 + 11.25 + 8.5 = \mathbf{78.00}$$

2. **Strategic Recommendation:** **Site A** is selected with the highest score of **82.25**, offering the best balance of low land lease rates, strong highway access, and market proximity.

---

### Example 2: Locational Cost-Volume Break-Even Analysis
**Scenario:** A consumer goods distributor is comparing two candidate sites for a manufacturing plant:
- **Location 1 (Rural SEZ):** Fixed lease and facility cost $FC_1 = \text{₹ } 10,000,000\text{/year}$; Variable manufacturing & freight cost $VC_1 = \text{₹ } 400\text{/unit}$.
- **Location 2 (Urban Industrial Estate):** Fixed lease and facility cost $FC_2 = \text{₹ } 25,000,000\text{/year}$; Variable manufacturing & freight cost $VC_2 = \text{₹ } 250\text{/unit}$ (benefiting from proximity to local suppliers and container rail terminals).

1. **Calculate the Volume Indifference Threshold ($Q^*$):**
   $$FC_1 + (VC_1 \cdot Q^*) = FC_2 + (VC_2 \cdot Q^*)$$
   $$10,000,000 + 400 Q^* = 25,000,000 + 250 Q^*$$
   $$150 Q^* = 15,000,000 \implies Q^* = \frac{15,000,000}{150} = \mathbf{100,000\text{ units/year}}$$

2. **Decision Rules:**
   - If annual projected volume $Q < 100,000\text{ units}$: **Location 1 (Rural SEZ)** is cost-optimal due to its lower fixed capital overhead.
   - If annual projected volume $Q > 100,000\text{ units}$: **Location 2 (Urban Estate)** is cost-optimal because its ₹ 150/unit variable cost advantage offsets the higher fixed lease expense.

---

### Example 3: Euclidean vs. Rectilinear Distance Calculation
**Scenario:** A delivery vehicle travels between a distribution warehouse at coordinate $(10, 20)$ and a retail store at coordinate $(40, 60)$.

1. **Given Data:**
   - Origin: $(X_1 = 10, Y_1 = 20)$
   - Destination: $(X_2 = 40, Y_2 = 60)$
   - $\Delta X = 40 - 10 = 30\text{ km}$
   - $\Delta Y = 60 - 20 = 40\text{ km}$

2. **Euclidean (Straight-Line) Distance:**
   $$d_{\text{Euclidean}} = \sqrt{(\Delta X)^2 + (\Delta Y)^2} = \sqrt{30^2 + 40^2} = \sqrt{900 + 1,600} = \sqrt{2,500} = \mathbf{50\text{ km}}$$

3. **Rectilinear (Manhattan Grid) Distance:**
   $$d_{\text{Rectilinear}} = |\Delta X| + |\Delta Y| = 30 + 40 = \mathbf{70\text{ km}}$$

4. **Operational Interpretation:** Straight-line flight distance is $50\text{ km}$, but actual vehicle ground travel across right-angled street grids is $70\text{ km}$ (a **40% increase** in travel distance). Logistics routing software must use rectilinear or road-network distances rather than Euclidean approximations to avoid underestimating fuel costs and transit times.

---

## F. Important NPTEL Exam Points

- **Total Cost Curve:** As facility count rises, outbound transport costs decrease while inventory and facility costs increase, creating a **convex U-shaped total cost curve**.
- **Six Distribution Archetypes:**
  - *Drop-Shipping:* Lowest inventory cost; high parcel shipping; long response time (1–2 weeks).
  - *In-Transit Merge:* Merges multi-plant components at a carrier hub into a single delivery.
  - *Distributor Storage / Carrier:* Moderate inventory; 1–3 day delivery.
  - *Distributor / Last-Mile Fleet:* Same-day delivery; highest delivery transport costs.
  - *Storage / Customer Pickup:* Eliminates last-mile carrier costs and failed delivery attempts.
  - *Retail Storage / Store Pickup:* Instantaneous response time; highest inventory and facility costs.
- **Product Velocity Matching:** Slow-moving, high-value, customizable items match **Drop-Shipping**; fast-moving commodity staples match **Retail / Distributor Storage**.
- **Factor Rating Formula:** $\text{Score}_j = \sum W_i \cdot S_{ij}$. Combines qualitative strategic drivers with quantitative financial factors.
- **Load-Distance Formula:** $ld = \sum L_i \cdot d_i$. Minimizes cumulative freight transportation work.
- **Distance Metrics:**
  - Euclidean: Straight-line geometric distance ($\sqrt{\Delta X^2 + \Delta Y^2}$).
  - Rectilinear (Manhattan): Grid street distance ($|\Delta X| + |\Delta Y|$).

---

## G. Common Mistakes and Tricky Concepts

- **Outbound vs. Inbound Freight Trends:** As facility count increases, **outbound freight decreases** (warehouses are closer to customers), but **inbound freight increases** (shipments are split into smaller, fragmented loads).
- **Drop-Shipping Cost Realities:** Drop-shipping eliminates retail inventory holding costs, but outbound freight costs are substantially higher because parcels are dispatched individually from distant factories.
- **Customer Pickup Economic Trade-off:** Click-and-Collect eliminates carrier last-mile delivery costs, but requires investing in pickup locker infrastructure or retail partner commissions.
- **Euclidean vs. Rectilinear Distance Selection:** Using Euclidean distance for road delivery fleet routing significantly underestimates actual transit distances because vehicles cannot travel in straight lines across city buildings and terrain.
- **Break-Even Volume Selection:** Choose the low-fixed-cost site for low volumes; choose the low-variable-cost site for high volumes.

---

## H. Quick Revision Sheet

### High-Priority Exam Facts
- **Distribution Trade-Off:** Service (speed, variety, availability) vs. Cost (facilities, inventory, transport).
- **Cost Curves:** As facility count increases:
  - Inventory Cost: **Increases** (Square Root Law)
  - Facility Cost: **Increases** (overhead)
  - Inbound Freight: **Increases** (LTL fragmentation)
  - Outbound Freight: **Decreases** (closer to customer)
  - Total Cost: **Convex U-Curve**
- **Fulfillment Archetypes:**
  - Drop-shipping: Lowest inventory / High parcel transport / Slowest
  - In-transit merge: Merges multi-plant parts at carrier hub
  - Last-mile fleet: Dedicated vehicles / Same-day delivery / High fleet cost
  - Customer pickup: Click-and-collect / Lowest last-mile transport
  - Retail store: Instantaneous possession / Highest facility & inventory cost
- **Factor Rating:** $\text{Score}_j = \sum W_i S_{ij}$.
- **Load-Distance:** $ld = \sum L_i d_i$.
- **Distance Metrics:** Euclidean $= \sqrt{\Delta X^2 + \Delta Y^2}$; Rectilinear $= |\Delta X| + |\Delta Y|$.
- **Locational Break-Even:**
  $$Q^* = \frac{FC_B - FC_A}{VC_A - VC_B}$$

---

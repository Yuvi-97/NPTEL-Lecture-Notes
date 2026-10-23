# Week 6 Consolidated Notes: Supply Chain Uncertainty, Process Views, Modeling Systems, and Core Drivers

---

## A. Consolidated Theory

Week 6 explores the operational mechanics of supply chains under uncertainty, structural process modeling frameworks, mathematical network formulation, and the six core drivers (logistical and cross-functional) governing supply chain efficiency and responsiveness.

---

### 1. Supply Chain Uncertainty and the Hau Lee Framework

#### 1.1 Types of Uncertainty
- **Demand Uncertainty:** The volatility, unpredictability, and variance in customer orders for a given product or SKU. Functional products (staple foods, basic commodities) experience low demand uncertainty; innovative products (high fashion, consumer electronics) experience high demand uncertainty.
- **Supply Uncertainty:** The unpredictability and vulnerability associated with upstream supplier lead times, manufacturing yields, component quality, and production breakdowns. Evolving processes experience high supply uncertainty; mature, automated processes experience low supply uncertainty.
- **Implied Demand Uncertainty:** The demand uncertainty that a supply chain specifically targets to satisfy based on the customer service attributes demanded (e.g., demanding 10-minute quick commerce or wide product variety drastically inflates implied demand uncertainty).

#### 1.2 Hau Lee’s Supply Chain Uncertainty Matrix
Hau Lee developed a strategic framework matching the four quadrants of demand and supply uncertainty to distinct supply chain operational strategies:

```
                            DEMAND UNCERTAINTY
                    Low (Functional Products)    High (Innovative Products)
                 ┌───────────────────────────┬───────────────────────────┐
             Low │ 1. EFFICIENT SUPPLY CHAIN │ 3. RESPONSIVE S.C.        │
S                │ (e.g., Sugar, salt,       │ (e.g., Fashion apparel,   │
U                │    packaged staple foods) │    consumer electronics)  │
P                ├───────────────────────────┼───────────────────────────┤
P           High │ 2. RISK-HEDGING S.C.      │ 4. AGILE SUPPLY CHAIN     │
L                │ (e.g., Hydroelectric      │ (e.g., Biotech vaccines,  │
Y                │    power, seasonal crops) │    custom supercomputers) │
                 └───────────────────────────┴───────────────────────────┘
```

1. **Efficient Supply Chains (Low Demand & Low Supply Uncertainty):**
   - *Operating Environment:* Mature manufacturing technologies with predictable, stable market demand.
   - *Core Focus:* High capacity utilization ($> 90\%$), scale economies, waste elimination, and lowest per-unit landed costs.
2. **Risk-Hedging Supply Chains (Low Demand & High Supply Uncertainty):**
   - *Operating Environment:* Stable retail demand, but vulnerable upstream supply sources (weather vulnerability, crop yield swings, machine breakdowns).
   - *Core Focus:* Pooling inventory buffers, establishing dual-sourcing contracts, and sharing safety stocks across facilities.
3. **Responsive Supply Chains (High Demand & Low Supply Uncertainty):**
   - *Operating Environment:* Short product lifecycles and volatile customer fashion preferences, supported by mature, reliable manufacturing systems.
   - *Core Focus:* Speed of response, mass customization, assemble-to-order postponement, and short cycle times.
4. **Agile Supply Chains (High Demand & High Supply Uncertainty):**
   - *Operating Environment:* Unpredictable market demand combined with untried production processes or severe geopolitical disruption risks.
   - *Core Focus:* Combining responsiveness with risk-hedging; extreme operational adaptability and dynamic reconfigurability.

#### 1.3 The Bullwhip Effect: Dynamics, Causes, and Countermeasures
The **Bullwhip Effect** is an operational distortion where small fluctuations in end-consumer retail demand become progressively amplified into massive, wildly volatile order swings as demand signals travel upstream toward raw material suppliers.
- A $\pm 5\%$ change in consumer retail demand can trigger swings of $\pm 40\%$ to $\pm 100\%$ at Tier-2 component and raw material supplier stages.

##### The Four Root Causes of the Bullwhip Effect (Hau Lee):
1. **Demand Forecast Updating / Information Asymmetry:** Each tier generates independent forecasts based solely on incoming purchase orders from its immediate downstream customer without visibility into true Point-of-Sale ($POS$) sales, compounding forecasting errors upstream.
   - *Countermeasure:* Share real-time POS data across all tiers using EDI, cloud portals, and CPFR.
2. **Order Batching:** Retailers accumulate orders over time to capture full truckload ($FTL$) discounts or meet supplier Minimum Order Quantities ($MOQ$), creating artificial, lumpy demand spikes rather than smooth continuous pull.
   - *Countermeasure:* Reduce transaction and ordering costs; deploy mixed-SKU "milk-run" logistics routes.
3. **Price Fluctuations and Forward Buying:** Periodic promotional discounts, trade promotions, and end-of-quarter rebates cause customers to buy large quantities far exceeding current consumption (**forward buying**). Orders plunge to zero once the promotion ends.
   - *Countermeasure:* Adopt **Everyday Low Pricing (EDLP)**; eliminate sporadic volume trade deals.
4. **Rationing and Shortage Gaming:** When a supplier experiences shortages and rations shipments (delivering only 70% of ordered quantities), buyers deliberately inflate orders (ordering 200 units to obtain the 140 they need). Once supply normalizes, massive order cancellations occur.
   - *Countermeasure:* Allocate scarce inventory based on historical sales records rather than current inflated order sizes.

---

### 2. Supply Chain Operational Process Views

#### 2.1 The Cycle View
The cycle view defines operational roles across four distinct multi-tier interface boundaries:
1. **Customer Order Cycle:** Occurs at the **Customer–Retailer** interface (customer arrival, order placement, picking/handover, and receiving).
2. **Replenishment Cycle:** Occurs at the **Retailer–Distributor** interface (reorder trigger, order entry, warehouse fulfillment, and retail receiving).
3. **Manufacturing Cycle:** Occurs at the **Distributor–Manufacturer** interface (production scheduling based on distributor demand, manufacturing, and distribution warehouse receiving).
4. **Procurement Cycle:** Occurs at the **Manufacturer–Supplier** interface (BOM explosion, purchase order transmission, supplier production, and raw material dock inspection).

#### 2.2 The Push/Pull View
- **Pull (Reactive) Processes:** Triggered strictly in reaction to a confirmed customer order. Demand is known and 100% certain. Focuses on speed, flexibility, customization, and zero finished goods inventory.
- **Push (Speculative) Processes:** Executed in anticipation of customer orders based on statistical demand forecasts. Demand is uncertain and speculative. Focuses on large batch sizes, equipment utilization, and transport scale economies.
- **Push/Pull Boundary (Order Decoupling Point):** The interface separating speculative push stages from customer-driven pull stages:
  - *Make-to-Stock (MTS):* Boundary is at the retail shelf; all upstream processes are Push.
  - *Assemble-to-Order (ATO - e.g., Dell):* Standard sub-assemblies built on Push; final configuration and testing executed on Pull.
  - *Make-to-Order (MTO):* Sourced raw components held on Push; fabrication and assembly executed on Pull.
  - *Engineer-to-Order (ETO):* Entire process from product engineering to delivery is Pull.

#### 2.3 The SCOR Model (Supply Chain Operations Reference)
Standardized by the Supply Chain Council (ASCM/APICS), the SCOR model structures supply chain management across six core processes:
1. **Plan:** Balancing aggregate resources with demand expectations.
2. **Source:** Procuring goods and services; supplier evaluation, contracting, and receiving.
3. **Make:** Transforming materials into finished states; manufacturing, assembly, and testing.
4. **Deliver:** Order management, warehousing, picking, carrier routing, and delivery.
5. **Return:** Handling reverse material flows; return triage, repair, recycling, and disposal.
6. **Enable:** Managing business rules, compliance, data architecture, and supply chain risk.

---

### 3. Supply Chain Modeling Systems

#### 3.1 Taxonomy of Supply Chain Models
- **Deterministic vs. Stochastic:**
  - *Deterministic:* All input parameters (demand, lead times, yields, costs) are fixed, known constants with zero random variance.
  - *Stochastic:* Parameters are modeled as probability distributions (e.g., normal demand distributions, Poisson arrivals).
- **Optimization vs. Simulation:**
  - *Optimization (MILP):* Uses linear and integer programming to identify the provably best global solution (e.g., minimum total cost).
  - *Simulation (Discrete Event):* Models dynamic real-world interactions over simulated time horizons to evaluate "what-if" operational policies under volatile conditions.
- **Continuous vs. Discrete Manufacturing:**
  - *Continuous:* Fluid, unbroken processing running 24/7 without discrete component boundaries (petroleum refining, chemicals, steel, sugar).
  - *Discrete:* Assembly of distinct, countable units from separate components (automobiles, consumer electronics).

#### 3.2 Classical Network Optimization Formulation (MILP)
$$\text{Minimize } Z = \sum_{j=1}^{m} F_j \cdot Y_j + \sum_{i=1}^{n} \sum_{j=1}^{m} C_{ij} \cdot X_{ij}$$
Where:
- $Y_j \in \{0, 1\}$: Binary decision variable ($1$ if facility $j$ is opened; $0$ otherwise).
- $X_{ij} \ge 0$: Continuous decision variable representing shipment volume from node $i$ to node $j$.
- $F_j$: Fixed annual capital cost of opening facility $j$.
- $C_{ij}$: Variable per-unit freight and handling cost between node $i$ and node $j$.
- *Subject to:* Demand satisfaction ($\sum X_{jk} \ge D_k$) and facility capacity limits ($\sum X_{jk} \le K_j \cdot Y_j$).

#### 3.3 The Zara Dual-Sourcing Model
Zara (Inditex) operates a hybrid supply chain model balancing responsiveness and efficiency:
- **Volatile Trendy Items (Short Life Cycles):** Sourced nearshore (**Spain, Portugal, Morocco, Turkey**). Incurs higher labor costs, but achieves an ultra-short **2-to-3-week design-to-shelf lead time**, eliminating excess inventory and markdowns.
- **Predictable Basic Items (Stable Demand):** Basic t-shirts, socks, and standard denim are sourced offshore from low-cost manufacturers in **Asia (China, India, Bangladesh)**, capturing scale economies with 2-to-3-month ocean transit times.

---

### 4. The Six Core Supply Chain Drivers

Chopra and Meindl categorize supply chain drivers into three logistical drivers and three cross-functional drivers:

```
                ┌─────────────────────────────────────────────────┐
                │          STRATEGIC FIT & PERFORMANCE            │
                │        Efficiency vs. Responsiveness            │
                └───────────────────────┬─────────────────────────┘
                                        │
           ┌────────────────────────────┴────────────────────────────┐
           ▼                                                         ▼
┌──────────────────────┐                                  ┌──────────────────────┐
│  LOGISTICAL DRIVERS  │                                  │   CROSS-FUNCTIONAL   │
│  1. Facilities       │                                  │   4. Information     │
│  2. Inventory        │                                  │   5. Sourcing        │
│  3. Transportation   │                                  │   6. Pricing         │
└──────────────────────┘                                  └──────────────────────┘
```

#### 4.1 The Three Logistical Drivers
1. **Facilities:**
   - Physical sites where inventory is stored (warehouses, DCs) or transformed (manufacturing plants).
   - *Trade-off:* Many decentralized facilities near customers maximize responsiveness (short lead time) but multiply capital overhead; few centralized mega-facilities maximize efficiency and capacity utilization ($> 90\%$) but increase transit distances.
2. **Inventory:**
   - Physical stock buffering mismatches between supply and demand rates.
   - *Three Core Types:*
     - *Cycle Inventory:* Built by batching production/orders to achieve economies of scale and amortize fixed setup costs.
     - *Safety Inventory:* Buffer stock held to cushion against demand volatility and supplier lead-time delays.
     - *Seasonal Inventory:* Pre-built stock buffering predictable seasonal demand surges.
   - **Square Root Law of Inventory:** Total required safety stock in a distribution network is proportional to the square root of the number of warehouse locations:
     $$I_{\text{total}} \propto \sqrt{N} \implies I_2 = I_1 \times \sqrt{\frac{N_2}{N_1}}$$
3. **Transportation:**
   - Movement of materials across physical modes (Air, Road, Rail, Water, Pipeline).
   - *Trade-off:* Fast, responsive modes (Air, dedicated express) increase freight cost but minimize pipeline inventory; slower, cheaper bulk modes (Rail, Water) reduce freight cost but tie up working capital in transit inventory.

#### 4.2 The Three Cross-Functional Drivers
4. **Information:**
   - The connective tissue of the supply chain. Connects all participants, enabling coordinated planning and execution (EDI, RFID, ERP, WMS/TMS, POS sharing).
   - *Trade-off:* Real-time data visibility enables agile responsiveness and lower inventories, but requires significant capital investment in IT hardware, enterprise software, and cyber-security.
5. **Sourcing:**
   - Strategic decisions governing who performs an activity—in-house (**Make**) or external vendor (**Buy**).
   - *Break-Even Make-or-Buy Formulation:*
     $$TC_{\text{Make}} = FC + (VC \cdot Q), \quad TC_{\text{Buy}} = P \cdot Q \implies Q^* = \frac{FC}{P - VC}$$
     - If expected demand $Q > Q^*$: **Make** (exploit lower variable costs across large volume).
     - If expected demand $Q < Q^*$: **Buy** (avoid fixed capital overhead).
6. **Pricing:**
   - Establishes customer willingness to pay and shapes demand timing and lot sizes.
   - *Approaches:*
     - *Everyday Low Pricing (EDLP):* Stable prices year-round; eliminates forward buying and stabilizes production schedules.
     - *High-Low Pricing:* Periodic steep discounts; induces artificial demand surges and bullwhip distortions.
     - *Dynamic Pricing / Revenue Management:* Varying prices in real time based on demand velocity and perishable capacity (airlines, ride-hailing).

---

## B. Important Definitions and Terminology

| Term | Definition |
| :--- | :--- |
| **Bullwhip Effect** | The progressive amplification of demand variance moving upstream from the retailer to the raw material supplier. |
| **Implied Demand Uncertainty** | The demand uncertainty a supply chain must target to satisfy based on the customer service attributes demanded. |
| **Cycle View** | A process view analyzing supply chain operations across four sequential multi-tier interface cycles (Customer Order, Replenishment, Manufacturing, Procurement). |
| **Push/Pull Boundary** | The decoupling point in a supply chain separating speculative forecast-driven push processes from customer-order-driven pull processes. |
| **SCOR Model** | A standardized reference framework defining six core supply chain management processes: Plan, Source, Make, Deliver, Return, and Enable. |
| **Deterministic Model** | A mathematical model assuming all operational parameters (demand, lead time, costs) are fixed, known constants. |
| **Stochastic Model** | A mathematical model incorporating uncertainty by treating operational parameters as probabilistic random variables. |
| **Cycle Inventory** | The average inventory resulting from producing or purchasing in batches larger than immediate demand to achieve economies of scale. |
| **Safety Inventory** | Buffer inventory held to protect against unpredictable demand surges and supplier lead-time delays. |
| **Square Root Law** | An inventory principle demonstrating that total safety stock in a distribution network is proportional to the square root of the number of warehouse nodes. |
| **Make-or-Buy Decision** | The strategic evaluation determining whether to produce a component internally or outsource it to an external supplier based on cost break-even volume. |
| **Everyday Low Pricing (EDLP)** | A pricing strategy maintaining stable, predictable prices year-round, eliminating artificial forward buying and bullwhip distortions. |

---

## D. Comparisons and Classification Tables

### 1. The Hau Lee Uncertainty Matrix Strategies

| Supply Chain Strategy | Demand Uncertainty | Supply Uncertainty | Primary Focus | Best Example |
| :--- | :---: | :---: | :--- | :--- |
| **Efficient** | Low | Low | Scale economies, high capacity utilization, lowest cost | Commodity groceries, salt, sugar |
| **Risk-Hedging** | Low | High | Inventory pooling, safety stocks, dual-sourcing | Hydroelectric power, seasonal agriculture |
| **Responsive** | High | Low | Mass customization, build-to-order, short cycle times | Consumer electronics, fashion apparel |
| **Agile** | High | High | Dynamic adaptability, risk-hedging + responsiveness | Pandemic vaccines, custom supercomputers |

### 2. Push vs. Pull Operational Processes

| Attribute | Push Processes | Pull Processes |
| :--- | :--- | :--- |
| **Trigger Event** | Anticipation of demand (Forecast-driven). | Realization of demand (Customer order-driven). |
| **Demand State** | Uncertain and speculative. | **100% Certain; order is in hand**. |
| **Inventory Positioning**| High finished goods inventory buffers. | Minimal or zero finished goods inventory. |
| **Batch Sizing** | Large batches (economies of scale). | Small, flexible batches (mass customization). |
| **Primary Goal** | Cost efficiency and capacity utilization. | **Responsiveness, agility, and speed**. |

### 3. The Six Supply Chain Drivers: Logistical vs. Cross-Functional

| Category | Driver | Core Role in Network | Efficiency Trade-off | Responsiveness Trade-off |
| :--- | :--- | :--- | :--- | :--- |
| **Logistical** | **Facilities** | Sites of storage and production | Centralized mega-hubs ($>90\%$ utilization) | Many decentralized regional hubs near demand |
| **Logistical** | **Inventory** | Buffers supply-demand mismatch | Low inventory, JIT pull replenishment | High safety stocks near customers |
| **Logistical** | **Transportation** | Moves freight between nodes | Slower bulk modes (Rail, Ocean, full FTLs) | Fast premium modes (Air, express courier) |
| **Cross-Functional**| **Information** | Coordinates all driver policies | Standard batch forecasting via EDI | Real-time IoT telematics and dynamic routing |
| **Cross-Functional**| **Sourcing** | Assigns tasks (Make vs. Buy) | Outsource to lowest-cost bulk suppliers | Select flexible, responsive local suppliers |
| **Cross-Functional**| **Pricing** | Shapes demand and order sizes | Everyday Low Pricing (EDLP) to smooth demand | Dynamic pricing to monetize perishable capacity |

---

## E. Worked Examples and Applications

### Example 1: Break-Even Make-or-Buy Analysis
**Scenario:** An industrial pump manufacturer is evaluating whether to manufacture a specialized brass valve body in-house or outsource it to a local machine shop:
- **In-House Manufacturing (Make):**
  - Requires dedicated CNC tooling: $FC = \text{₹ } 1,200,000\text{ per year}$.
  - Direct material and labor variable cost: $VC = \text{₹ } 300\text{ per valve}$.
- **Outsourcing (Buy):**
  - Quoted purchase price from supplier: $P = \text{₹ } 700\text{ per valve}$ (zero setup cost).

1. **Calculate the Break-Even Volume ($Q^*$):**
   $$Q^* = \frac{FC}{P - VC} = \frac{1,200,000}{700 - 300} = \frac{1,200,000}{400} = \mathbf{3,000\text{ valves/year}}$$

2. **Evaluate Alternative Demand Scenarios:**
   - **Case A: Projected Annual Demand $= 2,000\text{ valves}$ ($Q < Q^*$):**
     - $TC_{\text{Make}} = 1,200,000 + (300 \times 2,000) = \text{₹ } 1,800,000$
     - $TC_{\text{Buy}} = 700 \times 2,000 = \text{₹ } 1,400,000$
     - *Decision:* **Buy (Outsource)**, saving ₹ 400,000.
   - **Case B: Projected Annual Demand $= 5,000\text{ valves}$ ($Q > Q^*$):**
     - $TC_{\text{Make}} = 1,200,000 + (300 \times 5,000) = \text{₹ } 2,700,000$
     - $TC_{\text{Buy}} = 700 \times 5,000 = \text{₹ } 3,500,000$
     - *Decision:* **Make In-House**, saving ₹ 800,000.

---

### Example 2: Safety Stock Reduction via the Square Root Law
**Scenario:** A consumer goods distributor operates 9 regional warehouses with a combined safety inventory of 45,000 units. The company plans to consolidate its distribution network into a single centralized mega-warehouse ($N_2 = 1$).

1. **Given Data:**
   - Initial Warehouses, $N_1 = 9$
   - Consolidated Warehouses, $N_2 = 1$
   - Initial Total Safety Stock, $I_1 = 45,000\text{ units}$

2. **Calculation:**
   $$I_2 = I_1 \times \sqrt{\frac{N_2}{N_1}} = 45,000 \times \sqrt{\frac{1}{9}} = 45,000 \times \frac{1}{3} = \mathbf{15,000\text{ units}}$$

3. **Result:** Consolidating into a single warehouse reduces total network safety inventory from 45,000 to 15,000 units (a **66.7% reduction**), freeing working capital while maintaining identical customer service levels through statistical risk-pooling.

---

### Example 3: Zara Dual-Sourcing Tactical Application
- **Context:** Zara designs a limited-run designer silk blouse and a classic white cotton undershirt.
- **Blouse (High Demand Uncertainty):** Sourced from nearshore facilities in Portugal. Lead time is 18 days. Unit cost is €22. Production runs are small (5,000 units). If demand surges, rapid replenishment is triggered; if it flops, only 5,000 units are marked down.
- **Undershirt (Low Demand Uncertainty):** Sourced from offshore mills in Bangladesh. Lead time is 75 days. Unit cost is €4. Production runs are massive (500,000 units) to capture scale economies.
- **Supply Chain Insight:** Sourcing strategies must match product demand uncertainty—using agile nearshoring for fashion items and efficient offshoring for basic commodities.

---

## F. Important NPTEL Exam Points

- **Hau Lee Matrix Quadrants:**
  - Low/Low = Efficient; Low Demand/High Supply = Risk-Hedging; High Demand/Low Supply = Responsive; High/High = Agile.
- **The Four Bullwhip Causes:** Demand forecast updating, Order batching, Price fluctuations (forward buying), and Rationing/shortage gaming.
- **Bullwhip Mitigation:** Transparent POS data sharing across tiers via CPFR, and adopting Everyday Low Pricing (EDLP).
- **Four Interface Cycles:** Customer Order Cycle $\rightarrow$ Replenishment Cycle $\rightarrow$ Manufacturing Cycle $\rightarrow$ Procurement Cycle.
- **Decoupling Point:** Separates push processes (speculative) from pull processes (reactive).
- **SCOR Model Processes:** Plan, Source, Make, Deliver, Return, Enable.
- **Optimization vs. Simulation:** MILP optimization identifies the provably optimal solution; simulation models "what-if" operational scenarios under dynamic stochastic conditions.
- **The Six Core Drivers:**
  - *Logistical:* Facilities, Inventory, Transportation.
  - *Cross-Functional:* Information, Sourcing, Pricing.
- **Square Root Law Formula:** $I_2 = I_1 \times \sqrt{N_2 / N_1}$. Total safety stock is proportional to $\sqrt{N}$.
- **Make-or-Buy Break-Even:** $Q^* = FC / (P - VC)$. Make if $Q > Q^*$; Buy if $Q < Q^*$.

---

## G. Common Mistakes and Tricky Concepts

- **Confusing Risk-Hedging with Responsive:**
  - *Risk-Hedging* is applied when demand is *low/predictable* but supply is *vulnerable* (focuses on pooling safety stock).
  - *Responsive* is applied when demand is *volatile* but supply is *mature* (focuses on speed and customization).
- **Misunderstanding Push vs. Pull:** Pull is not defined by physical movement speed; it is defined by the **trigger event**. An activity is Pull only if it is initiated in response to a realized customer order.
- **Assuming Everyday Low Pricing Inflates the Bullwhip Effect:** EDLP *dampens* the Bullwhip Effect because it eliminates the demand spikes caused by temporary price promotions.
- **Make-or-Buy Decision Inversion:** Do not choose to "Make" when demand is low. High fixed tooling costs can only be justified when spread over large production volumes ($Q > Q^*$).
- **Square Root Law Application:** The Square Root Law applies specifically to **Safety Stock**, not necessarily to cycle or seasonal inventory.

---

## H. Quick Revision Sheet

### High-Priority Exam Facts
- **Hau Lee Framework:**
  - Efficient (Low/Low)
  - Risk-Hedging (Low Demand / High Supply)
  - Responsive (High Demand / Low Supply)
  - Agile (High/High)
- **Bullwhip Causes & Cures:**
  - Forecast Updating $\rightarrow$ Share POS data / CPFR
  - Order Batching $\rightarrow$ Mixed milk-runs / Lower order costs
  - Price Swings $\rightarrow$ Everyday Low Pricing (EDLP)
  - Shortage Gaming $\rightarrow$ Allocate capacity on past sales
- **Process Cycles:** Customer Order $\rightarrow$ Replenishment $\rightarrow$ Manufacturing $\rightarrow$ Procurement.
- **Push vs. Pull:** Push = Forecast/Speculative; Pull = Customer Order/Reactive.
- **SCOR Processes:** Plan, Source, Make, Deliver, Return, Enable.
- **6 Drivers:**
  - *Logistical:* Facilities, Inventory, Transportation.
  - *Cross-Functional:* Information, Sourcing, Pricing.
- **Square Root Law:**
  $$I_2 = I_1 \times \sqrt{\frac{N_2}{N_1}}$$
- **Make-or-Buy Break-Even:**
  $$Q^* = \frac{FC}{P - VC} \quad (\text{Make if } Q > Q^*)$$
- **Zara Model:** Nearshore agile sourcing for volatile fashion; offshore low-cost sourcing for basic staples.

---

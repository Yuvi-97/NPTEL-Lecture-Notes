# Week 3 Consolidated Notes: Reverse Logistics, Green Logistics, and Lean Logistics Systems

---

## A. Consolidated Theory

Week 3 explores the operational, environmental, and continuous improvement paradigms transforming modern supply chains. It examines the architecture of reverse logistics and closed-loop material flows, the principles and carbon accounting methodologies of green logistics, and the comprehensive lean management toolkit derived from the Toyota Production System (TPS), Value Stream Mapping (VSM), and Lean Six Sigma (LSS).

---

### 1. Reverse Logistics and Closed-Loop Supply Chains

#### 1.1 Definition and Core Mission
- **Reverse Logistics (Retro-Logistics)** is the operational discipline responsible for planning, executing, and controlling the efficient, cost-effective flow of raw materials, in-process inventory, finished goods, and related information from the point of consumption back to the point of origin or specialized recovery centers for the purpose of recapturing economic value or executing compliant disposal.
- **Closed-Loop Supply Chain (CLSC):** An integrated logistics architecture that coordinates traditional forward distribution (supplier $\rightarrow$ manufacturer $\rightarrow$ retailer $\rightarrow$ consumer) with reverse recovery flows (consumer $\rightarrow$ gatekeeping $\rightarrow$ triage $\rightarrow$ remanufacture/recycle), creating a circular material economy.

#### 1.2 Strategic Drivers of Reverse Logistics
1. **Economic Value Recovery:** Recapturing capital through component harvesting, remanufacturing, and secondary market sales rather than writing off returned products as unrecoverable waste.
2. **Regulatory Mandates & Extended Producer Responsibility (EPR):** Statutory regulations placing financial and physical accountability on manufacturers for safe end-of-life collection and recycling of e-waste, lead-acid batteries, plastics, and automotive scrap.
3. **Customer Service & Commercial Differentiation:** Providing liberal, hassle-free return policies builds consumer trust and boosts e-commerce conversion rates.
4. **Corporate Sustainability & Brand Protection:** Prevents gray-market dumping of defective goods and demonstrates environmental stewardship.

#### 1.3 Structural Contrast: Forward vs. Reverse Logistics
Forward and reverse logistics operate under fundamentally different dynamics:
- **Network Topography:** Forward logistics operates on a **one-to-many** design (one factory/DC distributing to thousands of retailers/customers). Reverse logistics is **many-to-one or many-to-few** (millions of dispersed consumers returning items to central consolidation hubs).
- **Demand & Supply Predictability:** Forward demand can be forecasted with historical models; reverse volume, timing, SKU mix, and physical condition are highly unpredictable.
- **Packaging Integrity:** Forward goods move in uniform, standardized, palletized cartons with pristine barcodes. Reverse goods arrive in non-uniform, opened, damaged boxes, often missing components or documentation.
- **Inventory Velocity:** Forward inventory moves at high velocity to minimize holding costs. Reverse inventory moves sluggishly due to testing, grading, triage bottlenecks, and disposition delays.

#### 1.4 The Four-Stage Reverse Logistics Workflow
1. **Gatekeeping (Entry-Point Screening):** The critical first verification filter applied at retail counters, courier handoffs, or return portals. It screens out ineligible, fraudulent, or out-of-warranty items *before* incurring reverse transport costs. Stopping an invalid return at zero distance eliminates 100% of downstream transport, handling, and administrative costs.
2. **Collection and Transportation:** Aggregates small, fragmented returns into regional return hubs. Cost efficiency is maximized by utilizing the **empty backhaul capacity** of forward delivery vehicles.
3. **Sorting, Inspection, and Grading (Triage):** Technical inspection to determine functional and cosmetic condition, categorizing products into grades (Grade A: unopened/like-new, Grade B: minor cosmetic blemish, Grade C: functional defect requiring repair, Grade D: scrap).
4. **Treatment and Disposition:** Executing the chosen recovery or disposal pathway.

#### 1.5 The Disposition Hierarchy (The 6 Pathways)
- **Restock / Resell:** Items in pristine condition are re-verified, re-packaged, and returned directly to forward retail inventory.
- **Repair:** Fixing a localized broken component to restore basic functionality.
- **Refurbish:** Cleaning, repairing, updating firmware, and restoring aesthetics for sale in secondary discount markets with a limited warranty.
- **Remanufacture:** Complete industrial overhaul disassembling used cores to the bare frame, cleaning, repairing, and rebuilding using mixed new and reconditioned parts to **original OEM factory specifications with a full factory warranty** (common in heavy diesel engines, machine tools, and aircraft components).
- **Cannibalize & Recycle:** Harvesting working components as spare parts; shredding casings and smelting copper, aluminum, and precious metals.
- **Compliant Disposal:** Regulated hazardous waste treatment and safe incineration/landfill for non-recoverable materials.

---

### 2. Green Logistics and Sustainable Supply Chains

#### 2.1 Scope of Green Logistics
- **Green Logistics** is the systematic measurement, management, and reduction of the ecological externalities generated by logistics operations—specifically targeting greenhouse gas ($GHG$) emissions, energy consumption, packaging waste, material handling pollution, and urban traffic congestion.
- **Green Supply Chain Management (GSCM) vs. Green Logistics:** GSCM integrates environmental criteria across all business phases (eco-design, green procurement, clean manufacturing, green logistics, circular recycling). Green logistics focuses specifically on eco-friendly transport, green warehousing, and sustainable packaging.

#### 2.2 Mathematical Carbon Accounting
Greenhouse gas emissions are quantified using standard activity-based models:
$$\text{Total GHG Emissions } (kg\text{ } CO_2e) = \text{Activity Data} \times \text{Emission Factor}$$
- *Activity Data:* Fuel consumed (liters of diesel) or freight activity (metric ton-kilometers).
- *Emission Factor:* The standardized coefficient defining emissions per unit of activity (e.g., $kg\text{ } CO_2e\text{ per liter of diesel}$, or $kg\text{ } CO_2e\text{ per kWh of grid electricity}$).

#### 2.3 Core Operational Pillars of Green Logistics
1. **Modal Shift:** Moving freight from carbon-intensive modes (air and road trucking) to energy-efficient bulk modes (railways and coastal waterways).
2. **Load Consolidation & Fleet Decarbonization:** Eliminating empty backhauls and "shipping air" (running underloaded vehicles). Deploying Electric Vehicles ($EVs$), compressed natural gas ($CNG$), and hydrogen fuel cells for urban delivery.
3. **Green Warehousing:** Installing rooftop solar photovoltaic ($PV$) systems to achieve net-zero building energy consumption; adopting energy-efficient LED lighting and eco-friendly refrigerants.
4. **Sustainable Packaging ("Right-Sizing"):** Eliminating oversized boxes and plastic void fillers. Packaging tailored closely to product dimensions increases trailer packing density and cuts fuel burn. Phasing out single-use plastics in favor of 100% recycled paper and water-activated tape.
5. **Horizontal Collaboration:** Shippers collaboratively pooling freight in shared warehouses and linehaul trucks to reduce total vehicle runs.
6. **Regulatory Frameworks:** Conformance to **ISO 14001** (Environmental Management Systems), **ISO 14064** (GHG Emissions Verification), and UN Sustainable Development Goals (**SDG 12: Responsible Consumption** and **SDG 13: Climate Action**).

---

### 3. Lean Logistics and Waste Elimination

#### 3.1 Foundations of Lean Thinking
- **Lean Logistics** originated from the **Toyota Production System (TPS)**, focusing on identifying and systematically eliminating non-value-adding waste to maximize customer value while minimizing operating costs, facility space, and cycle times.
- **Value-Added (VA) vs. Non-Value-Added (NVA) Activities:**
  - *Value-Added:* Any action that physically transforms the product or advances an order in a way that the customer recognizes and is willing to pay for.
  - *Non-Value-Added (Waste):* Any action consuming time, labor, space, or capital without increasing customer utility (e.g., waiting, excessive transit, redundant sorting, re-inspections).

#### 3.2 The Three Ms of Lean (Muda, Muri, Mura)
1. **Muda (Waste):** Direct, unproductive consumption of organizational resources (the 7 classical wastes).
2. **Muri (Overburden / Strain):** Imposing unreasonable physical or mental stress on human operators or capital equipment beyond safe operating limits (e.g., overloading a 10-ton truck with 14 tons, or forcing pickers to work 16-hour shifts without ergonomic breaks).
3. **Mura (Unevenness / Inconsistency):** Fluctuations across schedules, production runs, or order dispatch volumes (e.g., low volume Monday through Wednesday, followed by chaotic overtime on Friday to meet quotas).

#### 3.3 The Seven Wastes of Logistics (TIMWOOD Framework)
1. **T – Transportation:** Unnecessary material movement between facilities or excessive handling hops that risk damage without adding value.
2. **I – Inventory:** Holding buffer stock beyond actual operational needs, tying up working capital and risking obsolescence.
3. **M – Motion:** Inefficient physical movement by workers (walking across aisles to retrieve scanners, excessive bending due to poor bin slotting).
4. **W – Waiting:** Idle time experienced by drivers waiting for dock doors, or pickers waiting for replenishments or supervisor approvals.
5. **O – Overproduction:** Picking, packing, or moving shipments ahead of schedule or in excess of actual orders, congesting staging bays.
6. **O – Overprocessing:** Performing superfluous packaging or administrative steps beyond customer specifications (e.g., wrapping non-fragile items in excessive layers of bubble wrap).
7. **D – Defects:** Damaged cartons, picking incorrect SKUs, or mislabeling addresses, which triggers expensive reverse logistics.
8. **8th Waste (Underutilized Human Talent):** Failing to engage frontline warehouse operators in continuous problem-solving.

#### 3.4 The Five Principles of Lean Thinking
1. **Define Value:** Specify value purely from the end customer's perspective.
2. **Map the Value Stream:** Visually trace every step in order fulfillment to expose hidden wastes.
3. **Create Continuous Flow:** Align value-adding steps in an unobstructed sequence to eliminate queues.
4. **Establish Pull:** Trigger warehouse operations strictly based on downstream demand rather than pushing speculative forecast batches.
5. **Pursue Perfection:** Commit to relentless, incremental improvement (Kaizen) to drive waste toward zero.

---

### 4. Value Stream Mapping (VSM) and Lean Six Sigma

#### 4.1 Value Stream Mapping (VSM) Methodology
- **Value Stream Mapping (VSM)** is a visual diagnostic tool that documents the end-to-end flow of materials and information required to bring a product or order from supplier delivery to the customer.
- **Current State Map:** Documents existing cycle times, queue delays, inventory buffers, and operational bottlenecks by walking the physical warehouse floor ("walking the Gemba").
- **Future State Map:** The target blueprint showing the streamlined process after eliminating waste, introducing pull replenishment, and balancing cycle times.

#### 4.2 Process Cycle Efficiency ($PCE$)
Measures the proportion of order lead time that genuinely adds value:
$$PCE = \left( \frac{\text{Total Value-Added Time } (T_{VA})}{\text{Total Process Lead Time } (T_{Total})} \right) \times 100$$
In un-optimized logistics systems, $PCE$ frequently falls below **5% to 10%**, meaning over 90% of order lead time is lost to non-value-added waiting, staging, and storage.

#### 4.3 Lean Six Sigma and DMAIC
- **Lean Six Sigma (LSS)** combines Lean's waste elimination and cycle-time acceleration with Six Sigma's statistical variance reduction.
- **Six Sigma Target:** Operating at no more than **3.4 Defects Per Million Opportunities (DPMO)**, corresponding to a **99.99966% accuracy rate**.
- **The DMAIC Framework:**
  1. **Define:** Specify the logistics defect, project scope, and customer Critical to Quality ($CTQ$) parameters.
  2. **Measure:** Quantify baseline defect rates and validate data integrity.
  3. **Analyze:** Apply 5 Whys, Ishikawa fishbone diagrams, and Pareto charts to isolate root causes.
  4. **Improve:** Pilot targeted solutions (e.g., pick-to-light systems) on a small scale.
  5. **Control:** Institutionalize gains through updated SOPs, SPC control charts, and visual management boards.

---

### 5. The Toyota Production System (TPS) Architecture

#### 5.1 The TPS House
- **Roof:** Customer Satisfaction (Highest Quality, Lowest Cost, Shortest Lead Time, Safety & Morale).
- **Pillar 1 — Just-in-Time (JIT):** Delivering the exact item required, in the precise quantity, at the exact moment of need. Operates via takt time pacing, continuous flow, and pull signaling (Kanban).
- **Pillar 2 — Jidoka (Autonomation / Automation with a Human Touch):** Equipping equipment and processes to autonomously detect defects and stop immediately, preventing defective items from moving downstream (invented by Sakichi Toyoda for automatic textile looms).
- **Foundation:** Operational Stability supported by Standardized Work, Heijunka (workload leveling), and Kaizen (continuous improvement).

#### 5.2 Key Lean Tools and Techniques
- **Poka-Yoke (Mistake-Proofing):** Designing physical mechanisms or software interlocks that make operational errors impossible (e.g., asymmetrical SIM card slots; warehouse RF scanners that block the next pick until the correct bin barcode is confirmed).
- **Andon System:** Visual and auditory signaling boards across fulfillment lines using standard colors:
  - *Green:* Normal operations at standard takt time.
  - *Yellow:* Operator needs assistance; supervisor intervenes without stopping the line.
  - *Red:* Severe defect detected; line stops immediately until resolved.
- **Heijunka (Workload Smoothing):** Leveling production and dispatch volume and product mix over time (e.g., scheduling mixed batches A-B-A-B-A-B rather than bulk runs of AAAAA followed by BBBBB), eliminating the unevenness (*Mura*) of batching.
- **Kaizen:** The philosophy of continuous, incremental daily improvement involving every worker at every level.
- **Leagile Strategy:** Hybrid supply chain strategy combining **Lean upstream** (cost efficiency in bulk raw materials and component manufacturing) with **Agile downstream** (rapid, customized, flexible distribution near the consumer).

---

## B. Important Definitions and Terminology

| Term | Definition |
| :--- | :--- |
| **Reverse Logistics** | The operational process of moving goods from the point of consumption back to the point of origin or recovery centers to recapture value or execute compliant disposal. |
| **Closed-Loop Supply Chain** | An integrated supply chain model that links forward distribution with reverse collection and recovery into a circular material loop. |
| **Gatekeeping** | The entry-point screening and verification filter in reverse logistics that stops ineligible, fraudulent, or non-returnable items before reverse transport expenses are incurred. |
| **Triage** | The systematic inspection, sorting, and grading of returned products to determine their optimal disposition pathway. |
| **Remanufacturing** | An industrial recovery process in which used products (cores) are disassembled, inspected, repaired, and reassembled to meet original OEM specifications, backed by a like-new factory warranty. |
| **Extended Producer Responsibility (EPR)** | An environmental policy approach holding manufacturers financially and physically accountable for the post-consumer end-of-life stage of their products. |
| **Green Logistics** | The measurement and management of the ecological footprint of logistics operations, focusing on emissions, energy, sustainable packaging, and traffic congestion. |
| **Carbon Footprint** | The total volume of greenhouse gases emitted directly or indirectly by an operational activity, expressed in metric tons of carbon dioxide equivalent ($CO_2e$). |
| **Modal Shift** | The strategic transfer of freight from high-emission modes (road, air) to low-emission, energy-efficient bulk modes (rail, waterways). |
| **Muda** | Japanese term for operational waste—any activity consuming resources without adding value to the customer. |
| **Muri** | Japanese term for overburden—imposing excessive physical, mechanical, or mental stress on workers or equipment beyond safe operating limits. |
| **Mura** | Japanese term for unevenness or irregularity across production, dispatch schedules, or workflows. |
| **TIMWOOD** | The classical 7 wastes: Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, and Defects (with Underutilized Talent as the 8th waste). |
| **Value Stream Mapping (VSM)** | A visual diagnostic tool mapping the material and information flows required to deliver a product, documenting value-added vs. non-value-added time. |
| **Process Cycle Efficiency (PCE)** | The percentage of total process lead time that adds direct value to the customer ($T_{VA} / T_{Total} \times 100$). |
| **Jidoka (Autonomation)** | Automation with a human touch; the principle of designing machines and processes to detect abnormalities and stop automatically to prevent defect propagation. |
| **Poka-Yoke** | Mistake-proofing mechanisms (physical or digital) designed to make errors impossible to commit. |
| **Andon** | A visual alert system (colored lights and display boards) enabling frontline operators to signal problems and stop the process upon defect detection. |
| **Heijunka** | Production leveling; smoothing production volume and product mix over time to eliminate operational fluctuations (*Mura*). |

---

## D. Comparisons and Classification Tables

### 1. Forward Logistics vs. Reverse Logistics

| Operational Dimension | Forward Logistics | Reverse Logistics |
| :--- | :--- | :--- |
| **Network Configuration** | **One-to-Many:** Central factory/DC distributes to thousands of outlets. | **Many-to-One:** Dispersed consumers return items to central recovery hubs. |
| **Demand Predictability** | High; standard forecasting and seasonal trends. | Very Low; unpredictable return volume, timing, and product mix. |
| **Packaging & Condition** | Standardized, intact, uniform pallets with crisp labels. | Non-uniform, damaged packaging; missing parts, cables, or manuals. |
| **Routing & Visibility** | Direct, clear origin-to-destination tracking via TMS. | Complex, multi-hop routing with low intermediate visibility. |
| **Valuation & Pricing** | Fixed, transparent retail/wholesale price points. | Highly variable; depends on triage grading and cosmetic wear. |
| **Inventory Velocity** | Fast, high turnover to minimize holding costs. | Sluggish; delayed by inspection, testing, and disposition decisions. |

### 2. Product Recovery Options: Repair vs. Refurbish vs. Remanufacture

| Dimension | Repair | Refurbish | Remanufacture |
| :--- | :--- | :--- | :--- |
| **Scope of Work** | Fixes only the specific failed component. | Fixes defects, cleans, and improves cosmetics. | Complete industrial disassembly to the bare frame; full rebuild. |
| **Quality Standard** | Restores basic working condition. | Restores to like-new functional/aesthetic state. | Meets or exceeds original **OEM factory specifications**. |
| **Warranty Provided** | Short 30-day or 90-day limited repair warranty. | 6-month to 1-year refurbished warranty. | **Full original factory-grade warranty**. |
| **Target Market** | Returned to original owner or sold as-is. | Secondary discount consumer markets. | Sold as premium remanufactured industrial or retail units. |

### 3. Green Logistics vs. Reverse Logistics

| Dimension | Green Logistics | Reverse Logistics |
| :--- | :--- | :--- |
| **Primary Objective** | Minimize environmental damage, emissions, and ecological waste across all logistics operations. | Recapture economic value or manage compliant disposal of returned/used goods. |
| **Flow Direction** | Primarily **forward logistics**, but applies across the entire supply network. | Strictly **backward / reverse flow** from consumer back to recovery nodes. |
| **Core Activities** | EV fleets, solar warehouses, route optimization, eco-friendly packaging. | Gatekeeping, return collection, triage, repair, refurbishing, and recycling. |
| **Financial Nature** | Operating cost savings (fuel efficiency) + regulatory compliance. | Asset recovery and margin preservation from returned inventory. |

### 4. The Three Ms of Lean (Muda, Muri, Mura)

| Japanese Term | English Meaning | Manifestation in Logistics | Corrective Lean Action |
| :--- | :--- | :--- | :--- |
| **Muda** | Waste | Empty truck backhauls, excess safety stock, damaged cartons. | Apply TIMWOOD elimination; root-cause problem solving. |
| **Muri** | Overburden / Strain | Overloading trucks beyond axle limits, picker burnout from excessive overtime. | Rebalance workload, enforce ergonomic limits and vehicle ratings. |
| **Mura** | Unevenness / Irregularity | Spiky dispatch schedules (empty docks early in week, chaotic Friday rushes). | Implement Heijunka (workload leveling) and pull scheduling. |

---

## E. Worked Examples and Applications

### Example 1: Freight Carbon Footprint and Modal Shift Savings
**Scenario:** A consumer goods manufacturer ships $1,000\text{ metric tons}$ of freight over a $500\text{ km}$ corridor. The company is evaluating the environmental impact of shifting from road freight to rail freight.

1. **Given Data:**
   - Freight Mass, $W = 1,000\text{ tons}$
   - Distance, $D = 500\text{ km}$
   - Total Freight Activity $= 1,000 \times 500 = 500,000\text{ ton-km}$
   - Standard Emission Factors:
     - Road Transport (Diesel Heavy Truck): $0.12\text{ kg } CO_2e\text{ per ton-km}$
     - Rail Freight (Electric Linehaul): $0.03\text{ kg } CO_2e\text{ per ton-km}$

2. **Required Quantities:** Total carbon emissions for both modes and the net emissions reduction achieved through modal shift.

3. **Formula:**
   $$\text{Emissions} = \text{Activity Data } (\text{ton-km}) \times \text{Emission Factor } (\text{kg } CO_2e/\text{ton-km})$$

4. **Calculations:**
   - **Roadway Emissions:**
     $$\text{Emissions}_{\text{road}} = 500,000 \times 0.12 = 60,000\text{ kg } CO_2e = \mathbf{60.0\text{ metric tons } CO_2e}$$
   - **Railway Emissions:**
     $$\text{Emissions}_{\text{rail}} = 500,000 \times 0.03 = 15,000\text{ kg } CO_2e = \mathbf{15.0\text{ metric tons } CO_2e}$$

5. **Net Carbon Savings:**
   $$\text{Savings} = 60.0 - 15.0 = \mathbf{45.0\text{ metric tons } CO_2e} \quad (\text{a } \mathbf{75\%}\text{ emissions reduction})$$

6. **Interpretation:** Shifting bulk shipments from road to rail cuts carbon emissions by 75%, making modal shift a primary operational lever for achieving green logistics targets.

---

### Example 2: Value Stream Mapping — Process Cycle Efficiency ($PCE$)
**Scenario:** A fulfillment center time study traces an order through its end-to-end processing pipeline:

| Step | Activity Description | Classification | Duration |
| :---: | :--- | :---: | :---: |
| 1 | Order validation & payment check | Value-Added ($VA$) | 10 minutes |
| 2 | Waiting in electronic queue for batch wave | Non-Value-Added ($NVA$) | 110 minutes |
| 3 | Warehouse picking from storage racks | Value-Added ($VA$) | 15 minutes |
| 4 | Staged on cart waiting for packing station | Non-Value-Added ($NVA$) | 95 minutes |
| 5 | Protective packing, labeling, and taping | Value-Added ($VA$) | 5 minutes |
| 6 | Staged on dock waiting for evening carrier pickup | Non-Value-Added ($NVA$) | 240 minutes |

1. **Calculations:**
   - $\text{Total Value-Added Time } (T_{VA}) = 10 + 15 + 5 = \mathbf{30\text{ minutes}}$
   - $\text{Total Non-Value-Added Time } (T_{NVA}) = 110 + 95 + 240 = \mathbf{445\text{ minutes}}$
   - $\text{Total Process Lead Time } (T_{Total}) = 30 + 445 = \mathbf{475\text{ minutes}} \approx 7.92\text{ hours}$

2. **Process Cycle Efficiency ($PCE$):**
   $$PCE = \left( \frac{T_{VA}}{T_{Total}} \right) \times 100 = \left( \frac{30}{475} \right) \times 100 = \mathbf{6.32\%}$$

3. **Interpretation:** Only **6.32%** of the order lead time represents value-adding activity. Over **93%** of lead time is consumed by waiting in queues and staging areas. Implementing continuous flow and pull dispatching directly targets these non-value-adding delays.

---

### Example 3: Document Processing Stapler Time Study (Lecture Case)
- **Problem:** Dispatch operators review and staple paper invoices before applying them to outbound boxes.
- **Baseline Breakdown:**
  - Pick up invoice: 1 sec ($VA$)
  - Walk across room to communal stapler: 5 sec ($NVA$ - Motion)
  - Staple document: 2 sec ($VA$)
  - Walk back to packing desk: 5 sec ($NVA$ - Motion)
  - Total time $= 13\text{ seconds}$; $T_{VA} = 3\text{ seconds}$; $T_{NVA} = 10\text{ seconds}$ ($\approx 77\%$ waste).
- **Lean Solution:** Providing each operator with a dedicated stapler at their desk eliminates the walking steps ($10\text{ seconds}$ eliminated), reducing cycle time to $3\text{ seconds}$—a **77% efficiency gain** with near-zero capital investment.

---

## F. Important NPTEL Exam Points

- **Gatekeeping Primacy:** Gatekeeping is the most financially critical step in reverse logistics. Halting invalid returns at the point of origin eliminates 100% of downstream reverse handling, packaging, and shipping costs.
- **Empty Backhaul Economics:** Utilizing empty return trips of forward distribution trucks minimizes the incremental cost of reverse logistics.
- **Remanufacturing Standards:** Remanufactured products are disassembled to the bare frame, rebuilt to **original OEM factory specifications**, and sold with a **full factory warranty** (unlike repaired or refurbished goods).
- **Carbon Accounting Formula:** $\mathbf{\text{Emissions} = \text{Activity Data} \times \text{Emission Factor}}$.
- **Packaging Right-Sizing:** Eliminating excess box volume directly reduces "shipping air," improves trailer packing density, and lowers fuel consumption.
- **The Three Ms of Lean:** **Muda** (Waste), **Muri** (Overburden), and **Mura** (Unevenness).
- **The 7 Wastes (TIMWOOD):** Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects (with Underutilized Talent as the 8th waste).
- **Process Cycle Efficiency ($PCE$):** Measures $(T_{VA} / T_{Total}) \times 100$. In un-optimized logistics, $PCE$ is typically **under 10%**.
- **Six Sigma Benchmark:** Permits no more than **3.4 Defects Per Million Opportunities (DPMO)** ($99.99966\%$ accuracy).
- **TPS Two Pillars:** **Just-in-Time (JIT)** and **Jidoka (Autonomation)**.
- **Jidoka Origin:** Invented by Sakichi Toyoda for automatic looms that stopped automatically when a thread snapped.
- **Andon Colors:** Green = Normal; Yellow = Assistance needed; Red = Process stopped due to defect.
- **Heijunka:** Production leveling that smooths product mix and volume over time to eliminate the unevenness (*Mura*) of bulk batching.

---

## G. Common Mistakes and Tricky Concepts

- **Green Logistics vs. Reverse Logistics:**
  - *Green logistics* focuses on reducing environmental damage across all operations (forward and reverse).
  - *Reverse logistics* specifically manages the upstream flow of returned products from consumers back to recovery points. Reverse logistics is not green by default (e.g., shipping returns in half-empty trucks increases emissions).
- **Repair vs. Refurbish vs. Remanufacture:**
  - *Repair* fixes only the broken component (minimal warranty).
  - *Refurbish* cleans and repairs cosmetics for secondary markets (intermediate warranty).
  - *Remanufacture* completely rebuilds the core to OEM specifications with a full factory warranty.
- **Value-Added vs. Non-Value-Added:** Storing, moving, inspecting, and re-checking orders are **Non-Value-Added** activities. Customers do not pay for warehouse dwell time; they pay for the physical product and on-time delivery.
- **Muri vs. Mura:**
  - *Muri* is overburdening workers or equipment beyond rated capacity.
  - *Mura* is operational unevenness and irregular batch scheduling over time.
- **Lean vs. Agile Strategy:**
  - *Lean* focuses on waste and cost elimination in predictable, stable demand environments.
  - *Agile* focuses on rapid responsiveness in volatile, high-variety markets. A **Leagile** system uses lean methods upstream and agile methods downstream.

---

## H. Quick Revision Sheet

### High-Priority Exam Facts
- **Reverse Flow:** Point of consumption $\rightarrow$ Point of origin/recovery.
- **Gatekeeping:** Entry filter; stops invalid returns at zero distance to avoid all downstream costs.
- **Triage:** Inspecting, testing, and grading returned goods to assign disposition.
- **Recovery Hierarchy:** Restock $\rightarrow$ Repair $\rightarrow$ Refurbish $\rightarrow$ Remanufacture (OEM spec + full warranty) $\rightarrow$ Cannibalize/Recycle $\rightarrow$ Disposal.
- **Green Logistics:** Carbon accounting $= \text{Activity Data} \times \text{Emission Factor}$; key levers are modal shift (rail/water), EV fleets, solar warehouses, and packaging right-sizing.
- **Three Ms:** Muda (Waste), Muri (Overburden), Mura (Unevenness).
- **7 Wastes (TIMWOOD):** Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects (+ Human Talent).
- **5 Lean Principles:** Value $\rightarrow$ Value Stream $\rightarrow$ Flow $\rightarrow$ Pull $\rightarrow$ Perfection.
- **VSM Maps:** Current State (as-is baseline) $\rightarrow$ Future State (optimized target).
- **Process Cycle Efficiency ($PCE$):** $(T_{VA} / T_{Total}) \times 100$; typical un-optimized value is $< 10\%$.
- **Six Sigma Quality:** $\le 3.4\text{ DPMO}$ ($99.99966\%$ accuracy); DMAIC problem-solving framework.
- **TPS House Pillars:** Just-in-Time (JIT) and Jidoka (Autonomation/stop on defect).
- **Lean Japanese Terms:**
  - *Poka-Yoke:* Mistake-proofing mechanisms.
  - *Andon:* Visual colored alert board (Green/Yellow/Red).
  - *Heijunka:* Workload and mix leveling.
  - *Kaizen:* Continuous daily incremental improvement.
  - *Gemba:* The actual place where work happens (the warehouse floor).

---

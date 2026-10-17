# Week 12 – Lecture 3: Assets Management in Supply Chain

## 1. Key Concepts
- **Supply Chain Asset Management:** The systematic process of procuring, operating, maintaining, upgrading, and cost-effectively decommissioning physical and digital assets predominantly attributable to the supply, manufacturing, and distribution of goods and services across the end-to-end network.
  - *Scope Distinction:* Specifically encompasses operating equipment, facilities, vehicles, and digital software; it excludes non-operating liquid cash balances, treasury bills, or passive equity market investments.
- **Asset Typologies in Supply Chain:**
  - *Tangible (Physical) Assets:* Manufacturing plants, warehouse facilities, material handling equipment (MHE: automated tugs, trolleys, automated guided vehicles [AGVs], robotic arms), transport fleets (trucks, container ships, cargo aircraft), and physical inventory (raw materials, WIP, finished goods, packaging materials).
  - *Intangible Assets:* Enterprise software systems (Warehouse Management Systems [WMS], Transportation Management Systems [TMS], Enterprise Resource Planning [ERP]), algorithmic route-optimization models, intellectual property (patents, design rights), vendor relationship capital, brand equity, and workforce institutional knowledge.
- **Asset Lifecycle Management:** Managing asset performance across four sequential phases: Acquisition & Commissioning $\rightarrow$ Operational Utilization & Routine Maintenance $\rightarrow$ Telemetric Monitoring & Overhaul $\rightarrow$ Decommissioning & Salvage/Disposal.

---

## 2. Important Points

### Asset Tracking and Telemetry Technologies
Modern supply chain asset tracking relies on advanced sensor and telemetry architectures:
- **Radio-Frequency Identification (RFID) & IoT Sensors:** Passive and active RFID tags provide real-time container and pallet traceability across automated sorting hubs.
- **Telematics:** Integrated GPS, cellular connectivity, and On-Board Diagnostics (OBD) systems tracking vehicle speed, engine diagnostics, fuel consumption, and post-trip mechanical integrity.
- **Thermal Imaging:** Detects infrared heat signatures to identify abnormal mechanical friction in warehouse conveyors and motor bearings before catastrophic seizure occurs; also applied in disaster relief to detect human survivors.
- **Ultrasound Tracking:** Emits high-frequency sound waves for high-precision indoor positioning of AGVs, forklifts, and staging tugs where satellite GPS signals cannot penetrate.
- **Smart Packaging:** Sensor-embedded packaging detecting product consumption, temperature excursions, and packaging integrity to automatically trigger downstream replenishment orders.
- **Wearable IoT Devices:** Smart bands worn by warehouse personnel to monitor ergonomics, fatigue levels, and physical safety compliance.

### The Five Evolutionary Maintenance Strategies
Asset maintenance strategies have evolved across five distinct operational paradigms:
1. **Reactive Maintenance (Run-to-Failure):** Equipment is operated until breakdown occurs. Yields lowest equipment uptime, highest unplanned downtime, catastrophic production stoppages, and minimal profitability.
2. **Scheduled / Preventive Maintenance:** Time-based or usage-based servicing (e.g., servicing trucks every $10,000\text{ km}$ or replacing camera lenses/filters after fixed operational hours). Significantly reduces surprise breakdowns, enables planned workforce scheduling, and increases asset lifespan.
3. **Condition-Based Maintenance (CBM):** Maintenance is initiated only when real-time sensor parameters (vibration amplitude, operating temperature, oil viscosity) exceed predefined tolerance thresholds.
4. **Predictive Maintenance (PdM):** Employs AI/ML algorithms, historical degradation curves, and real-time IoT telemetry to forecast the exact timeframe of failure, allowing maintenance to occur *just prior* to failure and maximizing operational uptime.
5. **Cognitive Maintenance:** Autonomous, self-learning cyber-physical systems that continuously analyze operating telemetry, dynamically reconfigure machine workloads to prevent wear, and independently generate vendor work orders for replacement components.

### Enterprise ERP Asset Management Architecture (Dynamics 365 Framework)
Modern enterprise platforms integrate two complementary operational suites:
- **Finance Suite:** Manages fixed asset accounting, depreciation schedules, capital budgeting, liquidity ratios, tax accounting, and credit risk management.
- **Supply Chain Management Suite:** Executes master production planning, procurement workflows, fleet maintenance scheduling, multi-tier inventory visibility, and automated work-order generation for machine servicing.

### Key Asset Performance Formulas
- **Overall Equipment Effectiveness (OEE):**
  The benchmark metric assessing operational asset productivity:
  $$\text{OEE} = \text{Availability} \times \text{Performance} \times \text{Quality}$$
  Where:
  $$\text{Availability} = \frac{\text{Actual Operating Time}}{\text{Planned Production Time}}$$
  $$\text{Performance} = \frac{\text{Total Units Produced}}{\text{Theoretical Design Capacity Output}}$$
  $$\text{Quality} = \frac{\text{Good / Defect-Free Units}}{\text{Total Units Produced}}$$
  - *World-Class Manufacturing Benchmark:* $\text{OEE} \ge 85\%$ (Availability $\ge 90\%$, Performance $\ge 95\%$, Quality $\ge 99.9\%$).
- **Return on Assets (ROA):**
  $$\text{ROA} = \frac{\text{Net Operating Income}}{\text{Total Operational Assets}}$$
- **Operational / Inherent Availability ($A_i$):**
  $$A_i = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$
  Where $\text{MTBF}$ is Mean Time Between Failures, and $\text{MTTR}$ is Mean Time to Repair.

---

## 3. Differences / Examples

### Comparative Evaluation of Maintenance Strategies
| Strategy | Trigger Mechanism | Asset Uptime | Maintenance Cost | SCM Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| **Reactive** | Sudden physical breakdown | Lowest ($<65\%$) | High secondary repair costs | Severe unplanned delivery disruptions |
| **Preventive / Scheduled** | Predetermined calendar/mileage interval | Moderate to High ($75\% - 85\%$) | Fixed, planned operational expense | Low; risks servicing functional components |
| **Condition-Based (CBM)** | Sensor threshold breach (temperature, vibration) | High ($85\% - 90\%$) | Optimized; targeted interventions | Very Low; requires continuous sensor calibration |
| **Predictive (PdM)** | AI/ML degradation trend projection | Maximum ($>95\%$) | Lowest lifecycle cost | Minimal; near-zero unpredicted breakdowns |
| **Cognitive** | Self-learning autonomous algorithm | Continuous / Optimal | Advanced software capex; minimal opex | Resilient, self-healing automated network |

### Tangible vs. Intangible Supply Chain Assets
| Category | Tangible Physical Assets | Intangible Digital / Intellectual Assets |
| :--- | :--- | :--- |
| **Core Definition** | Physical capital resources deployed across manufacturing, warehousing, and transportation | Non-physical software, algorithmic models, operational knowledge, and contractual goodwill |
| **Primary Examples** | Factories, forklifts, AGVs, delivery trucks, ships, raw materials, finished stock | WMS/TMS software, route algorithms, patents, supplier trust, brand equity, workforce skills |
| **Depreciation Mechanism**| Physical wear, tear, and mechanical degradation | Functional and technological obsolescence |
| **Maintenance Action** | Lubrication, component replacement, post-trip vehicular inspections | Software patches, cybersecurity protocols, algorithmic retraining, employee onboarding |

---

## 4. Must Remember
- **Supply chain asset management** focuses exclusively on assets directly attributable to the supply, manufacture, and distribution of goods and services; it excludes idle cash balances and speculative financial securities.
- Assets are bifurcated into **tangible physical assets** (factories, warehouses, AGVs, transport fleets, inventory) and **intangible assets** (WMS/TMS software, routing algorithms, institutional workforce expertise, vendor trust).
- **Overall Equipment Effectiveness (OEE)** is the mathematical product of three parameters: **$\text{Availability} \times \text{Performance} \times \text{Quality}$**, with a world-class benchmark standard of **$\ge 85\%$**.
- Inherent equipment availability is expressed as **$A_i = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$**, where MTBF is Mean Time Between Failures and MTTR is Mean Time to Repair.
- **Predictive Maintenance (PdM)** uses AI/ML degradation modeling and IoT sensor data to service machinery *just before* breakdown, achieving the highest possible operational uptime and preventing scrap generation.
- **Reactive maintenance** (run-to-failure) is the most costly and disruptive operational model, causing severe secondary mechanical damage and catastrophic supply chain delivery delays.
- Indoor asset tracking where GPS signals cannot reach is achieved via **ultrasound tracking** and **high-frequency RFID/IoT beacons**, while fleet telemetry combines **GPS, cellular networks, and On-Board Diagnostics (OBD)**.

# Week 5 – Lecture 2: SC Operations: Manufacturing versus Service SC

## 1. Key Concepts

- **Manufacturing Supply Chain:** A supply network engineered to convert raw materials, parts, and sub-assemblies into physical, tangible finished goods ($FG$) through sequential industrial transformations, utilizing physical inventory buffers to decouple production from volatile customer demand.
- **Service Supply Chain:** A network of facilities, professional labor, IT systems, and supporting consumable supplies designed to deliver intangible, customer-centric service experiences (e.g., healthcare, aviation, hospitality, banking, telecommunications).
- **Perishability of Service Capacity:** The fundamental economic property of services where capacity cannot be stored in inventory for future consumption. An unoccupied airline seat on takeoff, an unbooked hotel room overnight, or an idle surgeon's operating theatre hour represents revenue permanently and irreversibly lost.
- **Customer Co-Production / Simultaneity:** In service operations, production and consumption happen simultaneously, requiring the active physical, intellectual, or digital participation of the customer during service delivery.
- **Capacity as the Primary Buffer:** While manufacturing uses physical inventory to absorb demand swings, service supply chains must use flexible human capacity, queue management, and dynamic pricing algorithms as their buffer.

---

## 2. Important Points

### Structural Differences: Manufacturing vs. Service Supply Chains
The lecture draws rigorous distinctions between physical goods operations and service delivery:

| Operational Dimension | Manufacturing Supply Chain | Service Supply Chain |
|---|---|---|
| **Output Nature** | Tangible physical goods (machinery, electronics). | Intangible experiences, processes, transformations. |
| **Inventory Capability** | High; physical goods can be stored as raw, WIP, and FG. | **Zero inventory of final service**; capacity is perishable. |
| **Customer Contact** | Low; production occurs in isolated factory environments. | **High; customer is physically or digitally co-present**. |
| **Demand Decoupling** | Inventory buffers decouple production from demand. | Queue management and flexible labor decouple load. |
| **Quality Evaluation** | Objective engineering tolerances (callipers, tensile tests). | Subjective perception, wait-time tolerance, empathy. |
| **Facility Location** | Sited near low-cost labor, raw materials, or transport hubs. | Sited near customer population centers for rapid access. |
| **Return Flow** | Physical reverse logistics (refurbishing, recycling). | Service recovery (refunds, apologies, repeat service). |

### Unique Characteristics of Service Operations (IHIP Framework)
1. **Intangibility:** Output cannot be touched, seen, or tested prior to purchase; brand reputation and facility aesthetics serve as surrogate quality signals.
2. **Heterogeneity (Variability):** High variance in service delivery because performance depends heavily on the human mood, competence, and fatigue of the service provider and customer interaction.
3. **Inseparability (Simultaneity):** The service is produced and consumed at the exact same moment in time.
4. **Perishability:** Unused operational capacity expires instantaneously at the end of each operating period.

> **Mnemonic for Service Characteristics (Assistant-Created):**  
> Remember **I-H-I-P**: **I**ntangibility, **H**eterogeneity, **I**nseparability, **P**erishability.

### The Healthcare Service Supply Chain Ecosystem
The lecture highlights modern healthcare as the quintessential complex service supply chain:
- **Clinical Service Delivery:** Patient diagnosis, surgery, intensive care, inpatient nursing.
- **Supporting Physical Material Streams:** Must coordinate specialized pharmaceuticals, biological cold-chain vaccines, sterile surgical disposable instruments, oxygen cylinders, and biomedical equipment.
- **Criticality:** A stockout in a manufacturing supply chain results in a lost customer sale; a stockout in a healthcare supply chain (e.g., blood plasma or cardiac stents) results in loss of human life.

---

## 3. Differences / Examples

### Managing Demand Volatility: Inventory vs. Capacity Buffers

| Scenario | Manufacturing Supply Chain Response | Service Supply Chain Response (e.g., Airline / Hospital) |
|---|---|---|
| **Demand Surges (Peak Period)** | Draw down pre-built finished goods inventory from warehouses. | Deploy on-call staff, extend operating hours, utilize dynamic surge pricing. |
| **Demand Drops (Off-Peak)** | Continue producing at steady rate; build seasonal inventory in warehouses. | Capacity is idled; revenue lost forever; offer promotional discounts to stimulate load. |
| **Failure / Defect Occurs** | Quarantine defective batch; rework, scrap, or replace under warranty. | Service recovery protocol: apologies, compensation vouchers, management escalation. |

### Worked Example from the Lecture: Airline Perishable Capacity
- A commercial flight operates between Delhi and Mumbai with a fixed capacity of **180 passenger seats**.
  - If only **140 tickets are sold** when the aircraft doors close, the remaining **40 seats represent perishable capacity**.
  - Unlike a car manufacturer who can hold 40 unsold vehicles in a lot for next week, the airline cannot store those 40 seats. The marginal revenue potential of those seats evaporates the instant the flight takes off.
  - To mitigate this, airlines deploy sophisticated revenue management algorithms that dynamically adjust fare classes based on booking velocity.

---

## 4. Must Remember

- Manufacturing supply chains produce **tangible physical goods that can be inventoried**, using stock buffers to decouple production from demand fluctuations.
- Service supply chains produce **intangible experiences where production and consumption occur simultaneously**; final service output **cannot be stored in inventory**.
- Service capacity is **perishable**: unused capacity during any given time window (e.g., empty hotel rooms, unfilled airline seats, idle doctors) is permanently lost.
- The four core characteristics of services are remembered by **IHIP**: **Intangibility, Heterogeneity, Inseparability, and Perishability**.
- While manufacturing buffers demand through **inventory**, service operations buffer demand through **flexible capacity, staffing rosters, customer queues, and dynamic pricing**.
- Healthcare represents a high-criticality service supply chain where physical consumable flows (medicines, blood, surgical kits) directly impact human survival.
- Quality in manufacturing is measured against **objective physical engineering specifications**, whereas service quality is evaluated through **customer perception and service recovery**.

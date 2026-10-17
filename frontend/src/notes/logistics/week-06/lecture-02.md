# Week 6 – Lecture 2: Supply Chain Operational Views

## 1. Key Concepts

- **Supply Chain Operational Process Views:** Two fundamental conceptual frameworks used to map, analyze, and structure all operational activities across a supply chain:
  1. *Cycle View:* Examines processes in terms of sequential cycles executed at the specific interface boundaries between two consecutive stages of the supply chain.
  2. *Push/Pull View:* Categorizes processes based on whether they are triggered in reaction to an explicit customer order (**Pull**) or in anticipation of customer orders based on aggregate forecasts (**Push**).
- **Push/Pull Boundary (Order Decoupling Point):** The exact interface in the supply chain where push-driven speculative production ends and pull-driven responsive execution begins.
- **SCOR Model (Supply Chain Operations Reference Model):** A globally standardized cross-industry diagnostic framework developed by the Supply Chain Council (ASCM/APICS) establishing uniform process definitions, performance metrics, and best practices.

---

## 2. Important Points

### The Cycle View of Supply Chain Processes
The cycle view clearly defines the operational roles and responsibilities at four distinct multi-tier interfaces:

```
[ CUSTOMER ]
     │  ▲
     ▼  │  1. CUSTOMER ORDER CYCLE (Customer – Retailer Interface)
[ RETAILER ]
     │  ▲
     ▼  │  2. REPLENISHMENT CYCLE (Retailer – Distributor Interface)
[ DISTRIBUTOR ]
     │  ▲
     ▼  │  3. MANUFACTURING CYCLE (Distributor – Manufacturer Interface)
[ MANUFACTURER ]
     │  ▲
     ▼  │  4. PROCUREMENT CYCLE (Manufacturer – Supplier Interface)
[ SUPPLIER ]
```

1. **Customer Order Cycle:**
   - *Interface:* Customer and Retailer.
   - *Sub-processes:* Customer arrival, customer order entry, order fulfillment (picking/handover), and customer order receiving.
2. **Replenishment Cycle:**
   - *Interface:* Retailer and Distributor / Wholesaler.
   - *Sub-processes:* Retail order trigger (reorder point reached), retail order entry, replenishment fulfillment, and retail receiving.
3. **Manufacturing Cycle:**
   - *Interface:* Distributor and Manufacturer.
   - *Sub-processes:* Production scheduling based on aggregate distributor orders, manufacturing and assembly, shipping to finished goods warehouse, and distributor receiving.
4. **Procurement Cycle:**
   - *Interface:* Manufacturer and Component Supplier.
   - *Sub-processes:* Component requirements planning ($BOM$ explosion), purchase order transmission, supplier manufacturing, and raw material receiving dock inspection.

### The Push/Pull View of Supply Chain Processes
- **Pull (Reactive) Processes:**
  - *Trigger:* Initiated *after* the customer order is received.
  - *Demand State:* Known and certain.
  - *Focus:* Speed of execution, customization, flexibility, and minimal inventory.
- **Push (Speculative) Processes:**
  - *Trigger:* Initiated *prior* to customer order arrival based on historical statistical forecasts.
  - *Demand State:* Speculative and uncertain.
  - *Focus:* High production batch sizes, maximum equipment utilization, and transport economies of scale.
- **The Decoupling Point (Push/Pull Boundary):**
  - Positioning the boundary determines supply chain character:
    - *Make-to-Stock (MTS):* Boundary is at the retail shelf; nearly all processes are Push.
    - *Assemble-to-Order (ATO):* Sub-assemblies built on Push; final product configured on Pull (e.g., Dell PC assembly).
    - *Make-to-Order (MTO):* Sourced materials held in stock; fabrication and assembly executed strictly on Pull.
    - *Engineer-to-Order (ETO):* Entire cycle from design to procurement is Pull.

### The SCOR Model Core Management Processes
The SCOR framework structures all enterprise operations across six foundational management processes:
1. **Plan:** Balancing aggregate resources with demand requirements; planning inventory, distribution, and capacity.
2. **Source:** Procuring goods and services; supplier qualification, contracting, delivery scheduling, and receiving.
3. **Make:** Transforming materials into finished states; manufacturing, assembly, testing, and packaging.
4. **Deliver:** Order management, warehousing, picking, carrier scheduling, customs clearance, and delivery.
5. **Return:** Reverse flows; authorizing returns, return triage, repair, refurbishing, recycling, and disposal.
6. **Enable:** Managing business rules, regulatory compliance, data architecture, contracts, and supply chain risk.

> **Mnemonic for SCOR Processes (Assistant-Created):**  
> Remember **P-S-M-D-R-E**: **P**lan, **S**ource, **M**ake, **D**eliver, **R**eturn, **E**nable.

---

## 3. Differences / Examples

### Push vs. Pull Process Dynamics

| Operational Attribute | Push Processes | Pull Processes |
|---|---|---|
| **Operational Execution** | Speculative; based on forecasts. | **Reactive; based on realized customer orders**. |
| **Demand Certainty** | Low; high risk of obsolescence or stockout. | **100% Certain; order is already placed**. |
| **Inventory Positioning**| High finished goods inventory buffers. | Minimal or zero finished goods inventory. |
| **Production Paradigm** | Mass production; large batches. | Mass customization; small flexible batches. |
| **Managerial Focus** | Cost efficiency and capacity utilization. | **Responsiveness and cycle time reduction**. |

---

## 4. Must Remember

- The two fundamental process views are the **Cycle View** (interface-based) and the **Push/Pull View** (order-trigger-based).
- The Cycle View defines four sequential cycles: **Customer Order Cycle $\rightarrow$ Replenishment Cycle $\rightarrow$ Manufacturing Cycle $\rightarrow$ Procurement Cycle**.
- **Pull processes are reactive** to actual realized demand (known orders); **push processes are speculative** based on forecasts.
- The **Push/Pull Boundary (Order Decoupling Point)** separates speculative push stages from customized pull stages.
- The **SCOR model** establishes six core management processes: **Plan $\rightarrow$ Source $\rightarrow$ Make $\rightarrow$ Deliver $\rightarrow$ Return $\rightarrow$ Enable**.
- SCM structures such as Assemble-to-Order (**Dell**) leverage push upstream to build standardized modules, and pull downstream to assemble customized PCs rapidly.

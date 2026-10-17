# Week 5 – Lecture 3: Principle Streams of Supply Chain

## 1. Key Concepts

- **Supply Chain Streams:** The sequential operational stages through which value is progressively added—partitioned into the **Inbound (Upstream) Stream**, **Internal Operations (Manufacturing/Transformation) Stream**, and **Outbound (Downstream) Stream**.
- **Inbound Stream (Upstream Logistics):** The coordinated network of activities responsible for sourcing, purchasing, transporting, inspecting, and storing raw materials, components, sub-assemblies, and MRO supplies from external suppliers into the manufacturing plant.
- **Internal Operations Stream:** The transformation processes within the four walls of the production facility converting raw inputs into finished goods ($FG$), managing Work-in-Process ($WIP$), machine scheduling, and internal material handling.
- **Total Cost of Ownership (TCO):** A comprehensive financial estimate encompassing all direct and indirect costs associated with procuring an item throughout its entire lifecycle—not merely the initial invoice purchase price, but also freight, tariffs, customs clearance, ordering costs, inspection costs, carrying costs, and potential defect/rework costs.
- **Strategic Sourcing:** The continuous, cross-functional organizational procurement process that identifies, evaluates, negotiates with, and develops suppliers aligned with long-term enterprise goals.

---

## 2. Important Points

### The Three Principle Operational Streams
The lecture segments the supply chain continuum into three synchronized stages:

1. **The Inbound (Upstream) Stream:**
   - *Key Activities:* Supplier discovery, RFP/RFQ bidding, commercial contracting, purchase order generation, inbound linehaul freight, border customs clearance, receiving dock audit, and raw material storage.
   - *Strategic Decisions:* Single vs. Multi-sourcing, domestic vs. offshore low-cost country sourcing, long-term partnership contracts vs. spot bidding.
2. **The Internal Transformation Stream:**
   - *Key Activities:* Production scheduling, bill of materials ($BOM$) explosion, shop floor material routing, CNC machining, chemical synthesis, electronic assembly, in-line quality testing, and finished goods packaging.
   - *Core Systems:* Material Requirements Planning ($MRP$), Manufacturing Resource Planning ($MRP\text{ }II$), and Enterprise Resource Planning ($ERP$).
3. **The Outbound (Downstream) Stream:**
   - *Key Activities:* Finished goods warehousing, picking, staging, cross-docking, linehaul carrier dispatch, distributor management, and last-mile retail delivery.

```
┌───────────────────────────┐      ┌───────────────────────────┐      ┌───────────────────────────┐
│      INBOUND STREAM       │      │     INTERNAL STREAM       │      │      OUTBOUND STREAM      │
│ • Supplier Management     │ ───► │ • Production Scheduling   │ ───► │ • Warehousing & Sorting   │
│ • Sourcing & Procurement  │      │ • Work-in-Process (WIP)   │      │ • Order Fulfillment       │
│ • Raw Material Transport  │      │ • Assembly & Packaging    │      │ • Last-Mile Distribution  │
└───────────────────────────┘      └───────────────────────────┘      └───────────────────────────┘
```

### Strategic Sourcing and Total Cost of Ownership (TCO)
- Purchasing based strictly on the lowest quoted unit price often results in severe operational losses due to hidden logistics costs.
- **TCO Framework Formulation:**
  $$\text{TCO} = \text{Purchase Price} + \text{Inbound Freight} + \text{Tariffs/Duties} + \text{Inventory Carrying Cost} + \text{Quality/Defect Cost} + \text{Supplier Administration Cost}$$
- Sourcing from a low-cost overseas vendor at \$8 per unit (versus a domestic supplier at \$10) may appear cheaper; however, adding \$1.50 in ocean freight, \$0.80 in customs tariffs, \$0.60 in safety stock financing, and \$0.50 in scrap rates elevates the true landed TCO to **\$11.40**, proving the domestic source is economically superior.

---

## 3. Differences / Examples

### Sourcing Strategies: Single Sourcing vs. Multi-Sourcing

| Strategic Dimension | Single Sourcing Strategy | Multi-Sourcing Strategy |
|---|---|---|
| **Core Advantage** | Maximizes volume discounts, economies of scale, and collaborative intimacy. | Reduces supply disruption risk; fosters aggressive price competition between vendors. |
| **Primary Risk** | High operational vulnerability; plant shutdowns if the single supplier suffers a disaster. | Split order volumes prevent vendors from achieving scale; higher administrative overhead. |
| **Quality Alignment** | Consistent quality; joint continuous improvement (Kaizen) programs. | Variance in quality and component tolerances across multiple supplier batches. |
| **Best Application** | Complex, highly engineered, proprietary sub-assemblies (e.g., aircraft turbines). | Standardized, commodity, high-volume items (e.g., standard fasteners, packaging boxes). |

---

## 4. Must Remember

- The three principle operational streams of a supply chain are the **Inbound (Upstream) Stream**, **Internal Transformation Stream**, and **Outbound (Downstream) Stream**.
- **Total Cost of Ownership (TCO)** looks beyond initial invoice price to include inbound transport, customs duties, inventory carrying costs, supplier administration, and quality defects.
- **Single sourcing** maximizes economies of scale and collaborative innovation but carries catastrophic disruption risk; **multi-sourcing** diversifies risk and stimulates price competition.
- **Inbound logistics** manages supplier relationships and raw material flows; **internal operations** manages manufacturing WIP and transformation; **outbound logistics** manages finished distribution.
- Production planning in the internal stream relies on **Material Requirements Planning (MRP)** to explode Bills of Materials ($BOM$) against delivery deadlines.

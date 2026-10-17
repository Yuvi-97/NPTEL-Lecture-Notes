# Week 9 – Lecture 1: Importance of Distribution in Supply Chain

## 1. Key Concepts

- **Distribution in Supply Chain:** The operational steps, physical facilities, and transportation flows used to move and transfer a finished product from the supplier/manufacturer stage to a customer stage in the supply chain.
- **Service Dimension vs. Cost Dimension:** The two fundamental performance vectors governed by distribution network design. Service encompasses response time, product variety, availability, customer experience, order visibility, and returnability; Cost encompasses facilities, inventory, transportation, and information processing.
- **Response Time:** The time duration required for a customer to receive their order after placement. Shorter response times generally require positioning facilities closer to customer clusters.
- **Product Availability:** The probability of having a product in stock when a customer order arrives, typically quantified by the Order Fill Rate.
- **Customer Experience:** The ease with which customers can place orders, track shipments, customize products, and receive post-sale support.

---

## 2. Important Points

### Performance Dimensions Influenced by Distribution Network Design
A distribution network's structural layout directly impacts two primary performance criteria:

#### A. Customer Service Performance Dimensions
1. **Response Time:** The duration from order confirmation to doorstep handover. As required response time decreases, the number of localized distribution facilities must increase exponentially.
2. **Product Variety:** The number of distinct SKUs offered. High variety complicates distribution, requiring centralized pooling or postponement.
3. **Product Availability:** The stockout probability. Guaranteeing high availability requires holding substantial safety stocks or deploying high-velocity cross-docks.
4. **Customer Experience:** The convenience, speed, and transparency provided to the customer during order placement and fulfillment.
5. **Order Visibility:** The capability of customers to track consignments in real time from dispatch to delivery.
6. **Returnability:** The ease with which customers can return defective or unwanted merchandise via reverse logistics.

#### B. Supply Chain Cost Performance Dimensions
1. **Facility Costs:** Capital expenditures, lease rent, utility expenses, and labor costs associated with operating warehouses and distribution centers.
2. **Inventory Costs:** The capital holding, insurance, shrinkage, and obsolescence costs of maintaining cycle, safety, and seasonal stocks.
3. **Transportation Costs:** The total inbound freight and outbound last-mile shipping spend.
4. **Information and Handling Costs:** The software, telematics, and order-processing expenses required to coordinate fulfillment.

### Relationship Between Number of Facilities and Supply Chain Costs
The lecture examines the fundamental cost curves as the number of warehouse facilities in a distribution network increases:

```
COST
  ▲
  │                     / Total Supply Chain Cost
  │                    /
  │    \              /     / Outbound & Facility Costs
  │     \            /     /
  │      \__________/_____/
  │       \        /
  │        \______/_______ Inbound Transportation Cost
  │
  └───────────────────────────────────────────────────►
               NUMBER OF FACILITIES
```

- **Inventory Costs:** Increase steadily as the number of facilities increases, due to the loss of risk-pooling and the need to duplicate safety stocks across every site (Square Root Law).
- **Facility Costs:** Increase linearly with facility count due to redundant building leases, material handling equipment, and administrative staffing.
- **Inbound Transportation Costs:** Increase because inbound shipments are split into smaller, fragmented consignments instead of bulk full-truckloads ($FTL$).
- **Outbound Transportation Costs:** Decrease because regional warehouses sit closer to customer doorsteps, shortening last-mile delivery distances.
- **Total Cost Curve:** Displays a convex U-shape. Total cost initially decreases as outbound transport savings dominate, reaches an optimal minimum, and then escalates rapidly as inventory and facility overhead outpace last-mile savings.

---

## 3. Differences / Examples

### Strategic Trade-Off: High vs. Low Facility Density Networks

| Operational Dimension | High Facility Density (e.g., Quick Commerce) | Low Facility Density (e.g., Centralized E-Commerce) |
|---|---|---|
| **Response Time** | Ultra-Fast (**10–30 minutes to same-day**). | Slower (**2 to 5 business days**). |
| **Facility & Lease Costs** | **Extremely High**; hundreds of urban micro-hubs. | **Low**; a few centralized mega-warehouses. |
| **Safety Inventory Costs**| **High**; fragmented safety stocks across all hubs. | **Low**; centralized safety stock pooling. |
| **Outbound Transport** | **Low per delivery**; short localized delivery hops. | **High per delivery**; long-distance parcel courier. |
| **Best Product Fit** | Perishables, groceries, emergency pharmaceuticals. | Books, luxury goods, slow-moving electronics. |

---

## 4. Must Remember

- Distribution network design governs two fundamental vectors: **Customer Service** (response time, availability, variety) and **Supply Chain Cost** (facilities, inventory, transport).
- As the number of distribution facilities increases:
  - **Outbound transportation costs decrease** (facilities are closer to customers).
  - **Inventory costs increase** (loss of risk pooling; Square Root Law).
  - **Facility costs increase** (redundant overhead and leases).
- The **Total Cost Curve is U-shaped**; the optimal number of facilities minimizes the sum of inventory, facility, and transportation expenses.
- Shorter customer response times require positioning facilities **closer to the customer**, driving up total network facility and inventory costs.
- Product variety and availability targets dictate whether inventory should be **centralized (high variety/slow movers)** or **decentralized (standard high-velocity staples)**.

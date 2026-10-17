# Week 5 – Lecture 5: Objectives of Supply Chain Networks

## 1. Key Concepts

- **Supply Chain Network Design:** The strategic decision-making process determining the permanent physical architecture of a supply chain—including the number, geographic location, production capacity, technology allocation, and operational role of manufacturing plants, regional distribution centers ($DCs$), and cross-dock terminals.
- **Center of Gravity (Grid) Method:** A quantitative mathematical technique utilized to identify an optimal geographic location for a central distribution center or warehouse that minimizes total inbound and outbound transportation costs relative to existing supplier and market coordinates.
- **Strategic Fit in Network Design:** Aligning the physical network footprint with competitive strategy. A responsive strategy requires numerous decentralized regional hubs located close to major customer clusters; an efficient strategy requires a few massive, centralized mega-facilities maximizing economies of scale.
- **Contract Manufacturing Ecosystems:** Specialized high-tech industrial clusters (e.g., Foxconn, Flextronics, Pegatron) strategically sited in regions possessing deep technical talent, low labor costs, streamlined export customs, and mature component supplier ecosystems.

---

## 2. Important Points

### Mathematical Formulation: The Center of Gravity Method
To locate an optimal central distribution hub serving $n$ distinct geographic markets or supplier nodes:
- Each node $i$ is characterized by its geographic Cartesian coordinates $(X_i, Y_i)$ and the freight volume $W_i$ shipped to or from that node.
- The optimal coordinates $(X^*, Y^*)$ for the central warehouse are computed by weighting the coordinates by volume:

$$X^* = \frac{\sum_{i=1}^{n} X_i \cdot W_i}{\sum_{i=1}^{n} W_i}, \quad Y^* = \frac{\sum_{i=1}^{n} Y_i \cdot W_i}{\sum_{i=1}^{n} W_i}$$

- *Refinement:* If transport freight rates $R_i$ vary across corridors, the formulation incorporates the rate as an additional weight:
  $$X^* = \frac{\sum_{i=1}^{n} X_i \cdot W_i \cdot R_i}{\sum_{i=1}^{n} W_i \cdot R_i}, \quad Y^* = \frac{\sum_{i=1}^{n} Y_i \cdot W_i \cdot R_i}{\sum_{i=1}^{n} W_i \cdot R_i}$$

### Qualitative vs. Quantitative Network Siting Drivers
1. **Quantitative Economic Drivers:**
   - Inbound transportation costs from primary suppliers.
   - Outbound transportation costs to regional consumer markets.
   - Facility construction, land lease rates, local taxation structures, and utility/energy rates.
2. **Qualitative Strategic Drivers:**
   - Availability and skill level of specialized local engineering and manual labor.
   - Proximity to multimodal transport infrastructure (deep-water container ports, national expressways, freight rail corridors).
   - Local government regulatory policies, Special Economic Zone ($SEZ$) tax incentives, and geopolitical stability.

---

## 3. Differences / Examples

### Centralized vs. Decentralized Network Topology

| Operational Dimension | Centralized Network (Few Mega-Facilities) | Decentralized Network (Many Regional Hubs) |
|---|---|---|
| **Primary Goal** | **Cost Efficiency** and economies of scale. | **Customer Responsiveness** and rapid delivery. |
| **Facility Fixed Costs** | Very Low; minimizes land, building, and management overhead. | High; multiple facility lease rents, equipment, and redundant staff. |
| **Inventory Costs** | **Low (Square Root Law)**; aggregates safety stock into one pool. | High; requires holding duplicate safety stock at every regional hub. |
| **Inbound Freight** | Low per unit (bulk FTL consignments directly from plants). | Higher per unit; split freight consignments across multiple hubs. |
| **Outbound Freight** | **High**; long-haul shipments over extended distances to customers. | **Low**; short last-mile delivery legs to localized customers. |
| **Delivery Lead Time** | 2 to 5 business days. | **Same-day or next-day delivery**. |

### Concrete Worked Illustration: Center of Gravity Calculation
- An enterprise plans to establish a regional distribution warehouse in Eastern India to supply four major urban markets:
  - **Market A (Kolkata):** Coordinates $(X_1=30, Y_1=120)$, Monthly Demand $W_1 = 5,000\text{ tons}$.
  - **Market B (Patna):** Coordinates $(X_2=80, Y_2=60)$, Monthly Demand $W_2 = 2,500\text{ tons}$.
  - **Market C (Ranchi):** Coordinates $(X_3=50, Y_3=40)$, Monthly Demand $W_3 = 1,500\text{ tons}$.
  - **Market D (Bhubaneswar):** Coordinates $(X_4=20, Y_4=30)$, Monthly Demand $W_4 = 1,000\text{ tons}$.
- **Calculation:**
  - $\sum W_i = 5000 + 2500 + 1500 + 1000 = 10,000\text{ tons}$.
  - $\sum (X_i \cdot W_i) = (30 \times 5000) + (80 \times 2500) + (50 \times 1500) + (20 \times 1000) = 150,000 + 200,000 + 75,000 + 20,000 = 445,000$.
  - $\sum (Y_i \cdot W_i) = (120 \times 5000) + (60 \times 2500) + (40 \times 1500) + (30 \times 1000) = 600,000 + 150,000 + 60,000 + 30,000 = 840,000$.
  - $X^* = \frac{445,000}{10,000} = \mathbf{44.5}$
  - $Y^* = \frac{840,000}{10,000} = \mathbf{84.0}$
- **Conclusion:** The optimal theoretical coordinates for the distribution warehouse are $(44.5, 84.0)$, heavily pulled toward Kolkata due to its dominant 5,000-ton freight volume.

---

## 4. Must Remember

- Supply chain network design establishes the **permanent physical infrastructure** (number, location, capacity, and role of facilities) for an organization.
- The **Center of Gravity Method** identifies the cost-optimal geographic coordinates by weighting market locations by freight volume:
  $$X^* = \frac{\sum X_i W_i}{\sum W_i}, \quad Y^* = \frac{\sum Y_i W_i}{\sum W_i}$$
- **Centralized networks** maximize cost efficiency and aggregate safety stock (low inventory cost), but incur high outbound freight and longer delivery times.
- **Decentralized networks** minimize outbound delivery times and last-mile freight costs, but multiply facility overhead and total network safety stock.
- Siting decisions must balance **quantitative metrics** (inbound/outbound freight rates, land rent) with **qualitative factors** (skilled labor availability, port connectivity, tax incentives, infrastructure reliability).
- Global contract electronics manufacturers (**Foxconn, Flextronics**) cluster facilities in regions offering deep supplier networks, low labor costs, and streamlined export infrastructure.

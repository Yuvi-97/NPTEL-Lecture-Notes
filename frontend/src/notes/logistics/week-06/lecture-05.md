# Week 6 – Lecture 5: Supply Chain Drivers (Contd.)

## 1. Key Concepts

- **Cross-Functional Supply Chain Drivers:** The strategic managerial levers—**Information**, **Sourcing**, and **Pricing**—that coordinate, orchestrate, and determine the operational policies executed across the physical logistical drivers (facilities, inventory, and transportation).
- **Information as the Ultimate Driver:** The connective tissue of modern supply chains. Without shared, accurate, real-time information, facilities cannot schedule production, inventory cannot be minimized, and transport cannot be optimized.
- **Sourcing Strategy:** The set of corporate business processes required to purchase goods and services, governing whether a function should be performed in-house (**Make**) or outsourced to an external partner (**Buy**).
- **Pricing Strategy:** The mechanism by which a firm determines how much to charge customers for its products and services, directly shaping consumer demand patterns, order batching, and supply chain capacity requirements.
- **Everyday Low Pricing (EDLP) vs. High-Low Pricing:**
  - *EDLP (e.g., Walmart):* Charging a consistent, stable, low price year-round with zero temporary promotional discounts, stabilizing consumer demand and eliminating the bullwhip effect.
  - *High-Low Pricing:* Periodically offering steep, temporary promotional price cuts, encouraging artificial forward buying and causing demand volatility.

---

## 2. Important Points

### The Three Cross-Functional Drivers in Depth

#### 4. Information
- **Role in Supply Chain:** Connects all disparate multi-tier participants, enabling them to coordinate actions and optimize total supply chain surplus.
- **Enabling Technologies:** Electronic Data Interchange ($EDI$), Radio Frequency Identification ($RFID$), Enterprise Resource Planning ($ERP$), Warehouse & Transportation Management Systems ($WMS/TMS$), and cloud-based Point-of-Sale ($POS$) sharing.
- **Strategic Impact:**
  - *Responsiveness:* Real-time demand feeds permit push/pull postponement, mass customization, and rapid rerouting around disruptions.
  - *Efficiency:* Accurate demand forecasts allow manufacturers to produce precisely what is needed, eliminating excess safety stocks and idle capacity.
- **The Information Trade-off:** Gathering, verifying, and analyzing massive data streams incurs high IT software and cyber-security expenses; management must ensure the economic value of information exceeds the cost of capturing it.

#### 5. Sourcing
- **Role in Supply Chain:** Assigning tasks and purchasing physical inputs across external suppliers, co-manufacturers, and logistics service providers ($3PLs/4PLs$).
- **Core Sourcing Processes:**
  - *In-House vs. Outsource (Make-or-Buy Analysis):* Evaluating whether an external supplier can provide superior quality or lower cost through aggregated economies of scale without risking proprietary intellectual property.
  - *Supplier Selection and Evaluation:* Scoring vendors via multi-criteria scorecards (price, quality defect rates, on-time delivery reliability, financial stability, sustainability).
  - *Procurement Contracting:* Structuring contracts to align incentives (fixed-price, cost-plus, revenue-sharing, or buyback contracts).

#### 6. Pricing
- **Role in Supply Chain:** Determines customer willingness to pay and regulates the timing and volume of customer orders relative to available capacity.
- **Key Pricing Approaches:**
  - *Volume Discounting:* Offering lower per-unit prices for larger order sizes (lot-size-based discounts reflect transport/handling economies of scale; volume-based discounts across a time period reward total sales).
  - *Dynamic Pricing / Revenue Management:* Varying prices dynamically in real time based on fluctuating customer demand and remaining capacity (e.g., airline tickets, hotel rooms, Uber surge pricing).
  - *Everyday Low Pricing (EDLP):* Prevents demand surges, allowing smooth, continuous production schedules.

### Mathematical Formulation: Break-Even Make-or-Buy Decision
To determine whether an item should be manufactured internally (**Make**) or outsourced to an external supplier (**Buy**):
- Let $FC$: Fixed annual capital cost required to set up in-house manufacturing tooling and facilities.
- Let $VC$: Variable manufacturing cost per unit to produce in-house.
- Let $P$: Unit purchase price quoted by the external supplier ($P > VC$).
- Let $Q$: Total annual production volume.

$$\text{Total Cost of Making } (TC_{\text{Make}}) = FC + (VC \cdot Q)$$

$$\text{Total Cost of Buying } (TC_{\text{Buy}}) = P \cdot Q$$

- Equating both total cost equations yields the **Break-Even Volume ($Q^*$):**

$$FC + (VC \cdot Q^*) = P \cdot Q^* \implies Q^* = \frac{FC}{P - VC}$$

- **Decision Rule:**
  - If expected demand $Q < Q^*$: **Buy (Outsource)** to avoid fixed overhead.
  - If expected demand $Q > Q^*$: **Make (In-House)** to exploit lower variable costs across high production volume.

---

## 3. Differences / Examples

### Cross-Functional Drivers Trade-Off Matrix

| Driver | Responsive Decision (Speed / Flexibility) | Efficient Decision (Low Cost / Scale) |
|---|---|---|
| **Information** | Invest in real-time IoT sensors, RFID tracking, and dynamic rerouting software. | Invest in batch EDI processing and standardized periodic aggregate demand forecasting. |
| **Sourcing** | Select suppliers based primarily on short lead times, engineering flexibility, and agility. | Select suppliers based on lowest landed per-unit price and high volume capabilities. |
| **Pricing** | Dynamic pricing; offer menu of prices reflecting speed (e.g., premium charge for 1-day delivery). | Everyday Low Pricing (EDLP); volume bulk discounts to encourage full-truckload orders. |

### Worked Numerical Example: Make-or-Buy Decision
- An appliance brand is deciding whether to manufacture an internal compressor in-house or outsource:
  - *Make In-House:* Tooling fixed cost $FC = \text{Rs. } 20,00,000$ per year; variable cost $VC = \text{Rs. } 500$ per unit.
  - *Buy from Vendor:* Supplier purchase price $P = \text{Rs. } 900$ per unit (zero fixed setup cost).
- **Calculation of Break-Even Quantity ($Q^*$):**
  $$Q^* = \frac{FC}{P - VC} = \frac{20,00,000}{900 - 500} = \frac{20,00,000}{400} = \mathbf{5,000\text{ units}}$$
- **Strategic Recommendation:**
  - If annual projected demand is **3,000 units**: Buy ($TC_{\text{Buy}} = 27\text{ lakhs} < TC_{\text{Make}} = 35\text{ lakhs}$).
  - If annual projected demand is **8,000 units**: Make ($TC_{\text{Make}} = 60\text{ lakhs} < TC_{\text{Buy}} = 72\text{ lakhs}$), saving Rs. 12 lakhs annually.

---

## 4. Must Remember

- The three Cross-Functional Drivers are **Information (coordination), Sourcing (make-or-buy), and Pricing (demand shaping)**.
- **Information is the critical enabler**; without accurate demand data, logistical physical drivers (facilities, inventory, transport) cannot be optimized.
- The **Break-Even Make-or-Buy formula** is:
  $$Q^* = \frac{FC}{P - VC}$$
  Produce in-house if anticipated volume exceeds $Q^*$; outsource if volume is below $Q^*$.
- **Everyday Low Pricing (EDLP)** stabilizes consumer demand and eliminates the Bullwhip Effect, whereas **High-Low promotional pricing** induces erratic forward buying.
- **Dynamic Pricing (Revenue Management)** varies prices in real time to maximize revenue from perishable capacity (airlines, hotels, ride-hailing).
- Sourcing decisions must weigh direct purchase price against total lifecycle risk, supplier responsiveness, and intellectual property protection.

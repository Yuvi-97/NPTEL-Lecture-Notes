# Week 8 Consolidated Notes: Strategic Sourcing, Vendor Rating, Coordination, and Balanced Scorecard Performance

---

## A. Consolidated Theory

Week 8 covers strategic procurement, supplier management, multi-tier supply chain coordination mechanisms, and multi-dimensional performance measurement through the Balanced Scorecard (BSC) and statistical forecast error analysis.

---

### 1. Strategic Sourcing and the Kraljic Portfolio Matrix

#### 1.1 Scope of Strategic Sourcing
- **Strategic Sourcing** is the institutional procurement process that systematically analyzes an organization’s spending profiles, supplier markets, and component risks to select, develop, and manage suppliers in alignment with enterprise competitive strategy.
- Unlike traditional purchasing (which focuses narrowly on low unit invoice prices), strategic sourcing evaluates the Total Cost of Ownership (TCO), supplier technological capability, capacity flexibility, and risk exposure.

#### 1.2 The Kraljic Portfolio Matrix Architecture
Formalized by Peter Kraljic, this framework categorizes purchased items and supplier relationships along two core dimensions: **Profit Impact** and **Supply Risk**.

```
                              PROFIT IMPACT
                       Low                         High
           ┌───────────────────────────┬───────────────────────────┐
      High │ 2. BOTTLENECK ITEMS       │ 1. STRATEGIC ITEMS        │
S          │ • Low profit, high risk   │ • High profit, high risk  │
U          │ • Scarce, unique parts    │ • Core engines, microchips│
P          │ ──► Strategy: Secure      │ ──► Strategy: Long-Term   │
P          │     Supply & Buffer Stock │     Strategic Partnership │
L          ├───────────────────────────┼───────────────────────────┤
Y     Low  │ 4. ROUTINE / NON-CRITICAL │ 3. LEVERAGE ITEMS         │
R          │ • Low profit, low risk    │ • High profit, low risk   │
I          │ • Office supplies, bolts  │ • Bulk steel, packaging   │
S          │ ──► Strategy: Automate &  │ ──► Strategy: Competitive │
K          │     Minimize Admin Cost   │     Bidding & Auctions    │
           └───────────────────────────┴───────────────────────────┘
```

1. **Strategic Items (High Profit Impact, High Supply Risk):**
   - *Characteristics:* Critical, customized, proprietary components essential to product differentiation (e.g., automotive engines, advanced microprocessors, aerospace turbine blades).
   - *Market Dynamics:* Very few qualified suppliers; high technological and switching costs.
   - *Sourcing Strategy:* Build **long-term collaborative alliances**, practice **Early Supplier Involvement (ESI)** in product R&D, implement open-book costing, and align strategic roadmaps.
2. **Bottleneck Items (Low Profit Impact, High Supply Risk):**
   - *Characteristics:* Low-value components that have single-source dependencies or specialized patented formulations (e.g., custom chemical additives, proprietary micro-switches, specialized fasteners).
   - *Market Dynamics:* Monopolistic or geographically remote supplier base. A shortage halts final assembly despite the low monetary value of the part.
   - *Sourcing Strategy:* **Secure supply continuity at all costs**—maintain high safety inventory buffers, sign long-term supply guarantee contracts, and actively redesign products to use standardized substitute parts.
3. **Leverage Items (High Profit Impact, Low Supply Risk):**
   - *Characteristics:* High-spend, high-volume commodity materials with standardized industry specifications (e.g., bulk structural steel sheets, packaging cartons, commodity plastics, standard diesel fuel).
   - *Market Dynamics:* Abundant competing suppliers; low switching costs.
   - *Sourcing Strategy:* **Exploit commercial purchasing power**—conduct competitive tenders, reverse e-auctions, split order volumes across vendors, and negotiate volume rebate contracts.
4. **Routine / Non-Critical Items (Low Profit Impact, Low Supply Risk):**
   - *Characteristics:* Everyday low-value operational consumables and MRO items (e.g., cleaning supplies, standard bolts, office stationery).
   - *Market Dynamics:* Ubiquitous supply; minimal financial risk.
   - *Sourcing Strategy:* **Standardize products and automate procurement**—deploy digital e-catalogs, procurement cards (P-cards), and blanket purchase orders to minimize administrative processing costs.

---

### 2. Vendor Rating Methodologies

Enterprises evaluate and monitor supplier performance using three foundational systems:

#### 2.1 The Categorical Plan (Qualitative / Subjective)
- Cross-functional evaluators (Purchasing, Quality, Operations, Finance) grade suppliers as **Positive (+)**, **Neutral (0)**, or **Negative (-)** across criteria (quality, delivery, support).
- *Pros:* Inexpensive, simple, and requires minimal accounting infrastructure.
- *Cons:* Vulnerable to evaluator subjectivity, cognitive bias, and inter-departmental disagreements.

#### 2.2 The Weighted Point Plan (Quantitative Composite Scoring)
- Management assigns percentage weights ($W_i$) reflecting corporate priorities ($\sum W_i = 100\%$ or $1.0$).
  - *Standard Industrial Weighting:* **Quality = 40% ($0.40$)**, **Delivery = 30% ($0.30$)**, **Price = 20% ($0.20$)**, **Service = 10% ($0.10$)**.
- **Composite Score Formula:**
  $$\text{Composite Score} = (W_Q \cdot S_Q) + (W_D \cdot S_D) + (W_P \cdot S_P) + (W_S \cdot S_S)$$
  - *Quality Rating ($S_Q$):* $S_Q = \left( 1 - \frac{\text{Defective Items Rejected}}{\text{Total Items Received}} \right) \times 100$
  - *Delivery Rating ($S_D$):* $S_D = \left( \frac{\text{Orders Delivered On-Time}}{\text{Total Orders Scheduled}} \right) \times 100$
  - *Price Rating ($S_P$):* $S_P = \left( \frac{\text{Lowest Bid Quoted Across Market}}{\text{Vendor's Quoted Bid Price}} \right) \times 100$

#### 2.3 The Cost Ratio Plan (Total Financial Impact)
- Converts non-price performance failures into direct financial penalty ratios expressed as a percentage of total purchase spend:
  $$\text{Net Landed Cost} = \text{Quoted Unit Price} \times [1 + (QCR + DCR + SCR)]$$
  Where:
  - $\text{Quality Cost Ratio } (QCR) = \frac{\text{Inspection Costs} + \text{Rework Costs} + \text{Scrap Losses}}{\text{Total Purchase Value}}$
  - $\text{Delivery Cost Ratio } (DCR) = \frac{\text{Expedited Air Freight} + \text{Downtime Losses}}{\text{Total Purchase Value}}$
  - $\text{Service Cost Ratio } (SCR) = \frac{\text{Technical Support Overhead}}{\text{Total Purchase Value}}$
- Contracts are awarded to the vendor with the lowest Net Landed Cost, even if another vendor offered a lower initial invoice price.

#### 2.4 Defect Failure Tiers
- **Zero-Hour Rejection:** Defective parts caught at the factory receiving dock prior to production.
- **Line Rejection:** Defects discovered during assembly line processing, causing station downtime and scrap.
- **Field Failure:** Defective parts that pass inspection, are built into finished goods, and fail in the hands of the end customer—resulting in warranty claims, product recalls, and severe brand damage.

---

### 3. Supply Chain Coordination and Multi-Tier Alignment

#### 3.1 Causes and Consequences of Miscoordination
- **Supply Chain Miscoordination** occurs when different tiers operate with conflicting commercial goals or when demand information moving between stages is delayed and distorted, driving the **Bullwhip Effect**.
- **Consequences:** Excess buffer inventories across tiers, emergency overtime alternating with factory downtime, inefficient transport capacity utilization (expedited freight vs. empty runs), and poor customer fulfillment.

#### 3.2 Coordinating Contracts for Incentive Alignment
Traditional wholesale pricing causes **Double Marginalization** (both the supplier and retailer add markups, elevating final prices and suppressing overall sales volume). Advanced coordinating contracts align incentives:
1. **Buyback Contracts:** The manufacturer agrees to repurchase unsold end-of-season inventory from the retailer at a pre-agreed salvage price ($P_b$). This lowers retailer inventory risk, encouraging higher stocking levels and maximizing market availability.
2. **Revenue-Sharing Contracts:** The manufacturer supplies goods to the retailer at a deeply discounted wholesale price (near production cost); in return, the retailer transfers an agreed percentage of gross customer sales back to the manufacturer.
3. **Quantity Flexibility Contracts:** The manufacturer allows the retailer to adjust order quantities within an agreed percentage band (e.g., $\pm 20\%$) after observing early-season market demand.
4. **Vendor-Managed Inventory (VMI):** The upstream supplier monitors real-time inventory levels at the customer's warehouse via electronic telemetry and takes full responsibility for replenishment timing and lot sizes (e.g., Walmart and Procter & Gamble).
5. **Milk-Run Logistics:** A dedicated vehicle completes a scheduled daily loop, picking up or dropping off small, consolidated shipments across multiple suppliers or stores, reducing order batch sizes and smoothing transport flow.

---

### 4. Supply Chain Performance: The Balanced Scorecard Approach

#### 4.1 The Balanced Scorecard (BSC) Architecture
Formalized by Robert Kaplan and David Norton, the Balanced Scorecard translates enterprise strategy into a balanced set of metrics spanning four interconnected perspectives:

```
                            [ MISSION & STRATEGY ]
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
   1. FINANCIAL                  2. CUSTOMER                  3. INTERNAL
   PERSPECTIVE                   PERSPECTIVE                  PROCESSES
• "How do we appear to        • "How do customers          • "What processes must
   our shareholders?"            view us?"                    we excel at?"
• ROCE & Profit Margin        • OTIF Fulfillment           • Cycle Time Efficiency
• Total Supply Chain Cost     • Order Lead Time            • Inventory Days of Supply
• Cash-to-Cash (C2C)          • Customer Retention         • Dock-to-Stock Time
         │                            │                            │
         └────────────────────────────┼────────────────────────────┘
                                      ▼
                        4. LEARNING & GROWTH PERSPECTIVE
                        • "How do we sustain growth & improve?"
                        • Workforce Technical Training Hours
                        • Digital SCM Tool Adoption (IoT/ERP)
                        • Kaizen Suggestion Implementation Rate
```

#### 4.2 Lagging vs. Leading Indicators
- **Lagging Indicators:** Historical output metrics that report outcomes after events have occurred (quarterly revenue, profit margin, return on capital).
- **Leading Indicators:** Operational metrics that track forward drivers and predict future performance (worker training hours, supplier defect PPM, order picking accuracy).

#### 4.3 Cash-to-Cash (C2C) Operating Cycle Time
Measures the duration (in days) between an enterprise paying cash to suppliers for raw materials and collecting cash from customers for finished products:
$$\text{C2C Cycle (Days)} = \text{DIO} + \text{DSO} - \text{DPO}$$
Where:
- **DIO (Days of Inventory Outstanding):** Average days inventory is held before sale.
- **DSO (Days Sales Outstanding):** Average days taken to collect payment from customers.
- **DPO (Days Payables Outstanding):** Average days taken to pay trade bills to suppliers.
- *Negative C2C:* Companies like Dell and Amazon maintain negative C2C cycles because they receive customer payment upfront while negotiating extended supplier payment terms (60–90 days), funding operations with supplier working capital.

---

### 5. Statistical Demand Forecasting Error Metrics

Forecasting accuracy is a foundational driver of customer fulfillment and inventory control. Error in period $t$ is:
$$e_t = A_t - F_t$$
Where $A_t$ is actual realized demand and $F_t$ is forecasted demand.

#### 5.1 Mean Absolute Deviation (MAD)
Measures average absolute forecast error magnitude:
$$MAD = \frac{1}{n} \sum_{t=1}^{n} |A_t - F_t|$$
- Expressed in the same physical units as demand (e.g., pieces, kilograms).

#### 5.2 Mean Squared Error (MSE)
Measures forecast variance and penalizes large outlier errors:
$$MSE = \frac{1}{n} \sum_{t=1}^{n} (A_t - F_t)^2$$
- Squaring amplifies large deviations (e.g., a 10-unit error contributes 100 to MSE; a 2-unit error contributes only 4).

#### 5.3 Mean Absolute Percentage Error (MAPE)
Normalizes error into a scale-free percentage:
$$MAPE = \left( \frac{1}{n} \sum_{t=1}^{n} \left| \frac{A_t - F_t}{A_t} \right| \right) \times 100$$
- Allows direct comparison of forecasting accuracy across diverse product lines with different price points.

#### 5.4 Tracking Signal (TS)
Monitors whether a forecasting model exhibits systematic directional bias (persistent under-forecasting or over-forecasting):
$$TS_t = \frac{\sum_{i=1}^{t} (A_i - F_i)}{MAD_t} = \frac{\text{Running Sum of Forecast Errors (RSFE)}}{MAD_t}$$
- **Control Limits:** A properly calibrated model produces a Tracking Signal fluctuating around zero. If $TS$ exceeds **$+4$ to $+5$**, the model is persistently **under-forecasting** (risking stockouts); if $TS$ falls below **$-4$ to $-5$**, it is persistently **over-forecasting** (risking excess inventory).

---

## B. Important Definitions and Terminology

| Term | Definition |
| :--- | :--- |
| **Kraljic Portfolio Matrix** | A strategic procurement framework categorizing purchased items into Strategic, Bottleneck, Leverage, and Routine quadrants based on Profit Impact and Supply Risk. |
| **Early Supplier Involvement (ESI)** | Integrating key strategic suppliers into early product conceptualization and engineering design phases. |
| **Vendor Rating** | The formal, systematic assessment and scoring of supplier performance across quality, delivery reliability, commercial pricing, and technical service. |
| **Weighted Point Plan** | A quantitative vendor evaluation method scoring suppliers across weighted operational criteria ($\sum W_i = 100\%$). |
| **Cost Ratio Plan** | An accounting-based vendor evaluation method that converts quality defects, late delivery expediting, and administrative overhead into monetary penalty ratios. |
| **Buyback Contract** | A coordinating contract where the manufacturer agrees to repurchase unsold end-of-season inventory from the retailer at a pre-agreed salvage price. |
| **Revenue-Sharing Contract** | A coordinating contract where the supplier discounts the wholesale price in exchange for a share of the retailer's gross customer sales revenue. |
| **Vendor-Managed Inventory (VMI)** | An arrangement where the supplier tracks customer inventory levels and manages replenishment dispatches directly. |
| **Milk-Run Logistics** | A consolidated routing system where a single vehicle visits multiple suppliers or delivery points in a scheduled recurring loop. |
| **Balanced Scorecard (BSC)** | A performance evaluation framework balancing Financial, Customer, Internal Business Processes, and Learning & Growth perspectives. |
| **Cash-to-Cash Cycle (C2C)** | The time elapsed (in days) between paying suppliers for inputs and collecting cash from customers for sales ($\text{DIO} + \text{DSO} - \text{DPO}$). |
| **Tracking Signal (TS)** | A metric detecting systematic directional bias in forecasting models ($\text{RSFE} / \text{MAD}$). |

---

## D. Comparisons and Classification Tables

### 1. The Kraljic Portfolio Sourcing Matrix

| Quadrant | Profit Impact | Supply Risk | Sourcing Strategy | Relationship Type | Example Components |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Strategic Items** | **High** | **High** | Long-term collaborative alliances, ESI | Strategic partnership | Microprocessors, turbine blades |
| **Bottleneck Items** | Low | **High** | Secure supply, buffer inventory, search substitutes | Guaranteed supply contract | Specialized chemical additives |
| **Leverage Items** | **High** | Low | Exploit buying power, reverse auctions | Competitive bidding | Structural steel, packaging cartons |
| **Routine Items** | Low | Low | Automate procurement, e-catalogs, P-cards | Transactional / Automated | Office stationery, standard fasteners |

### 2. SCM Coordinating Contracts

| Contract Type | Risk / Reward Sharing Mechanism | Operational Benefit | Real-World Application |
| :--- | :--- | :--- | :--- |
| **Wholesale Price** | Retailer absorbs 100% of inventory risk. | Simple to administer; risks under-stocking. | General commodity goods |
| **Buyback Contract** | Manufacturer repurchases unsold inventory. | Encourages higher stocking; maximizes availability. | Print publishing, seasonal apparel |
| **Revenue-Sharing** | Low wholesale price + share of retail sales. | Aligns profit incentives; lowers retailer capital risk. | Digital media, entertainment |
| **Quantity Flexibility** | Retailer can adjust order quantities by $\pm X\%$. | Buffers demand shifts without complete return loops. | Electronics, consumer durables |
| **VMI** | Supplier manages replenishment directly. | Eliminates order distortion; optimizes batch runs. | Retail FMCG (Walmart & P&G) |

### 3. SCM Balanced Scorecard: The Four Perspectives

| Perspective | Core Question | Standard SCM Metric | Indicator Type |
| :--- | :--- | :--- | :--- |
| **Financial** | How do we create value for shareholders? | Cash-to-Cash Cycle (Days), ROCE, Total SCM Cost | **Lagging** |
| **Customer** | How do customers experience our service? | On-Time In-Full (OTIF %), Order Fill Rate | **Lagging / Balanced** |
| **Internal Processes** | What operational workflows must we excel at? | Picking Accuracy (%), Dock-to-Stock Turnaround | **Leading** |
| **Learning & Growth**| How will we sustain our ability to innovate? | Employee Training Hours, Kaizen Adoption Rate | **Leading** |

---

## E. Worked Examples and Applications

### Example 1: Quantitative Evaluation under the Weighted Point Plan
**Scenario:** A heavy machinery manufacturer is evaluating **Vendor X** for annual component contracting:
- **Given Performance Data:**
  - *Quality:* Received 20,000 units; 300 were rejected for dimensional defects.
  - *Delivery:* Scheduled 40 shipments; 36 arrived punctually within the delivery window.
  - *Price:* Vendor X quoted ₹ 800 per unit; the lowest market bid was ₹ 720.
  - *Service Audit:* Internal evaluation score is 80 out of 100.
- **Criteria Weights:** Quality $= 40\%$ ($0.40$), Delivery $= 30\%$ ($0.30$), Price $= 20\%$ ($0.20$), Service $= 10\%$ ($0.10$).

1. **Calculate Sub-Factor Scores:**
   - $S_Q = \left( 1 - \frac{300}{20,000} \right) \times 100 = (1 - 0.015) \times 100 = \mathbf{98.50}$
   - $S_D = \left( \frac{36}{40} \right) \times 100 = \mathbf{90.00}$
   - $S_P = \left( \frac{720}{800} \right) \times 100 = \mathbf{90.00}$
   - $S_S = \mathbf{80.00}$

2. **Calculate Composite Vendor Score:**
   $$\text{Score} = (0.40 \times 98.50) + (0.30 \times 90.00) + (0.20 \times 90.00) + (0.10 \times 80.00)$$
   $$\text{Score} = 39.40 + 27.00 + 18.00 + 8.00 = \mathbf{92.40} \text{ out of } 100$$

3. **Interpretation:** Vendor X achieves an overall rating of 92.40%, placing it in the "Preferred Certified Supplier" tier.

---

### Example 2: Financial Calculation of Cash-to-Cash (C2C) Operating Cycle
**Scenario:** An industrial equipment manufacturer compiles its year-end working capital metrics:
- Days of Inventory Outstanding ($DIO$) $= 60\text{ days}$
- Days Sales Outstanding ($DSO$) $= 40\text{ days}$
- Days Payables Outstanding ($DPO$) $= 45\text{ days}$

1. **Calculate Baseline C2C:**
   $$\text{C2C} = \text{DIO} + \text{DSO} - \text{DPO} = 60 + 40 - 45 = \mathbf{55\text{ days}}$$
   *Interpretation:* The company must finance 55 days of operating working capital through bank lines of credit.

2. **Scenario B: Supply Chain Working Capital Optimization:**
   - Management adopts JIT inventory, reducing $DIO$ to $30\text{ days}$.
   - Management automates collections via electronic invoicing, cutting $DSO$ to $25\text{ days}$.
   - Management negotiates extended credit terms with suppliers, extending $DPO$ to $70\text{ days}$.
   - **New C2C Calculation:**
     $$\text{C2C}_{\text{optimized}} = 30 + 25 - 70 = \mathbf{-15\text{ days}}$$
   - *Result:* The company achieves a **negative 15-day cash cycle**, operating on supplier-provided working capital and generating interest income on collected customer funds.

---

### Example 3: Comprehensive Forecast Error Analysis (MAD, MSE, MAPE, TS)
**Scenario:** Demand and forecast data for an industrial component over 4 consecutive quarters:

| Quarter ($t$) | Actual Demand ($A_t$) | Forecast Demand ($F_t$) | Error ($e_t = A_t - F_t$) | $|e_t|$ | $e_t^2$ | $|e_t / A_t| \times 100$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Q1** | 200 | 220 | -20 | 20 | 400 | $\frac{20}{200} \times 100 = 10.0\%$ |
| **Q2** | 250 | 230 | +20 | 20 | 400 | $\frac{20}{250} \times 100 = 8.0\%$ |
| **Q3** | 280 | 240 | +40 | 40 | 1,600 | $\frac{40}{280} \times 100 \approx 14.29\%$ |
| **Q4** | 190 | 210 | -20 | 20 | 400 | $\frac{20}{190} \times 100 \approx 10.53\%$ |
| **TOTAL** | — | — | **+20 (RSFE)** | **100** | **2,800** | **42.82%** |

1. **Calculate Error Metrics:**
   - **MAD:**
     $$MAD = \frac{\sum |e_t|}{n} = \frac{100}{4} = \mathbf{25.0\text{ units}}$$
   - **MSE:**
     $$MSE = \frac{\sum e_t^2}{n} = \frac{2,800}{4} = \mathbf{700.0\text{ units}^2}$$
   - **MAPE:**
     $$MAPE = \frac{\sum |\text{Percentage Error}|}{n} = \frac{42.82\%}{4} = \mathbf{10.71\%}$$
   - **Tracking Signal (TS at Q4):**
     $$TS = \frac{\text{RSFE}}{MAD} = \frac{+20}{25.0} = \mathbf{+0.80}$$

2. **Diagnostic Evaluation:** The Tracking Signal of $+0.80$ is well within the acceptable control limits of $\pm 4.0$, indicating the forecasting process is statistically unbiased.

---

## F. Important NPTEL Exam Points

- **Kraljic Matrix Quadrants:**
  - Strategic (High/High): Long-term partnerships, ESI.
  - Bottleneck (Low Profit / High Risk): Secure supply, hold safety stock, find substitutes.
  - Leverage (High Profit / Low Risk): Competitive bidding, reverse auctions.
  - Routine (Low/Low): Automate procurement, e-catalogs, P-cards.
- **Vendor Rating Methods:**
  - Categorical Plan: Qualitative/Subjective.
  - Weighted Point Plan: Quantitative composite scoring ($\sum W_i S_i$).
  - Cost Ratio Plan: Financial impact ($P \times [1 + QCR + DCR + SCR]$).
- **Failure Tiers:** Zero-hour rejection (receiving dock) $\rightarrow$ Line rejection (assembly floor) $\rightarrow$ Field failure (customer hands; most costly).
- **Coordinating Contracts:**
  - Buyback Contracts: Manufacturer repurchases unsold units at $P_b$.
  - Revenue-Sharing Contracts: Low wholesale price + shared retail revenue percentage.
- **Balanced Scorecard Perspectives:** Financial, Customer, Internal Business Processes, Learning & Growth.
- **Cash-to-Cash Cycle Formula:** $\mathbf{\text{C2C} = \text{DIO} + \text{DSO} - \text{DPO}}$. Lower or negative values indicate superior working capital efficiency.
- **Forecast Error Metrics:**
  - MAD: Linear average absolute error.
  - MSE: Quadratic penalty on large errors.
  - MAPE: Normalized, scale-free percentage error.
  - Tracking Signal: $\text{RSFE} / \text{MAD}$ (control threshold: $\pm 4$ to $\pm 5$).

---

## G. Common Mistakes and Tricky Concepts

- **Confusing Bottleneck and Leverage Items:**
  - *Bottleneck items* have low financial spend but high supply risk (requires securing supply at all costs).
  - *Leverage items* have high financial spend but low supply risk (requires aggressive price bargaining).
- **Negative C2C Interpretation:** A negative C2C cycle is not a cash shortage; it indicates the firm collects customer cash *before* paying suppliers, funding growth with supplier working capital.
- **Lagging vs. Leading Indicators:** Financial metrics (ROCE, profit) are lagging indicators; process metrics (picking accuracy, training hours) are leading indicators.
- **Tracking Signal Sign Interpretation:** A positive Tracking Signal indicates actual demand exceeded forecast ($\sum (A_t - F_t) > 0$), meaning the model is **under-forecasting**; a negative Tracking Signal indicates **over-forecasting**.
- **Double Marginalization Trap:** Occurs under traditional wholesale price contracts when both supplier and retailer add markups independently, raising consumer prices and reducing total supply chain sales.

---

## H. Quick Revision Sheet

### High-Priority Exam Facts
- **Kraljic Matrix:**
  - Strategic: High Impact / High Risk $\rightarrow$ Alliances & ESI
  - Bottleneck: Low Impact / High Risk $\rightarrow$ Buffer stock & secure supply
  - Leverage: High Impact / Low Risk $\rightarrow$ Reverse auctions & tenders
  - Routine: Low Impact / Low Risk $\rightarrow$ E-procurement & P-cards
- **Vendor Rating:** Weighted Point Plan $=\sum W_i S_i$; Cost Ratio Plan accounts for hidden quality, delivery, and service costs.
- **Coordinating Contracts:** Buyback (repurchase unsold stock), Revenue-sharing (low wholesale price + retail cut), VMI (supplier manages replenishment).
- **Balanced Scorecard Perspectives:** Financial (Shareholders), Customer (Perception), Internal Processes (Excellence), Learning & Growth (Innovation).
- **Cash-to-Cash Cycle:**
  $$\text{C2C} = \text{DIO} + \text{DSO} - \text{DPO}$$
- **Forecast Metrics:**
  - $MAD = \frac{1}{n} \sum |A_t - F_t|$
  - $MSE = \frac{1}{n} \sum (A_t - F_t)^2$
  - $MAPE = \frac{1}{n} \sum \left| \frac{A_t - F_t}{A_t} \right| \times 100$
  - $TS = \frac{\text{RSFE}}{MAD} \quad (\text{Control limits: } \pm 4\text{ to }\pm 5)$

---

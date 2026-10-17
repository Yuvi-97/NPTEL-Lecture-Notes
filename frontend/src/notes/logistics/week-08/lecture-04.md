# Week 8 – Lecture 4: Supply Chain Performance: Balanced Scorecard Approach

## 1. Key Concepts

- **Supply Chain Performance Measurement:** The formal quantitative and qualitative evaluation of supply chain effectiveness, velocity, cost efficiency, and reliability across multi-tier processes.
- **The Balanced Scorecard (BSC):** A strategic management and performance evaluation framework originated by Robert Kaplan and David Norton that translates an organization’s mission and strategy into a balanced set of performance metrics spanning four interconnected perspectives: **Financial**, **Customer**, **Internal Business Processes**, and **Learning & Growth**.
- **Lagging vs. Leading Indicators:**
  - *Lagging Indicators:* Metrics measuring historical output and past financial performance (e.g., quarterly revenue, net profit margin, return on assets); report outcomes after the events have already occurred.
  - *Leading Indicators:* Metrics tracking operational drivers and forward capabilities that predict future performance (e.g., employee training hours, supplier defect PPM, order picking accuracy).
- **Cash-to-Cash (C2C) Operating Cycle Time:** A critical financial and supply chain velocity metric measuring the total duration (in days) between the moment an enterprise pays cash to its suppliers for raw materials and the moment it collects cash from its customers for the finished product.

---

## 2. Important Points

### The Four Perspectives of the SCM Balanced Scorecard
The lecture adapts Kaplan and Norton’s four-perspective model to supply chain operations:

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

#### 1. Financial Perspective
- Evaluates economic viability and capital stewardship:
  - *Return on Capital Employed ($ROCE$):* Operating profit divided by total capital invested in assets.
  - *Total Supply Chain Management Cost:* Sum of all sourcing, manufacturing, warehousing, and logistics expenses expressed as a percentage of gross revenue.
  - *Cash-to-Cash ($C2C$) Cycle Time Formulation:*
    $$\text{C2C Cycle (Days)} = \text{DIO} + \text{DSO} - \text{DPO}$$
    - **DIO (Days of Inventory Outstanding):** Average days inventory is held before sale.
    - **DSO (Days Sales Outstanding):** Average days taken to collect payment from customers.
    - **DPO (Days Payables Outstanding):** Average days taken to pay trade bills to suppliers.
    - *Strategic Goal:* Minimize C2C; negative C2C (e.g., Dell, Amazon) indicates the company collects cash from consumers before paying suppliers, operating on supplier-funded working capital.

#### 2. Customer Perspective
- Evaluates customer experience and delivery performance:
  - **On-Time In-Full (OTIF):** Orders delivered punctually without item shortages or transit damage.
  - **Order Fill Rate:** Percentage of customer demand fulfilled instantly from available inventory.
  - **Customer Order Cycle Time:** Elapsed days from order entry to physical doorstep delivery.

#### 3. Internal Business Processes Perspective
- Evaluates internal operational excellence and throughput velocity:
  - **Dock-to-Stock Turnaround Time:** Elapsed hours from truck unloading at the receiving dock to finished system availability in warehouse bins.
  - **Manufacturing Cycle Efficiency ($MCE$):** Ratio of actual value-added production time to total plant cycle time.
  - **Supplier Defect Rate (PPM):** Parts per million rejected during incoming inspection.

#### 4. Learning and Growth Perspective
- Evaluates organizational infrastructure, human talent, and innovation:
  - Training hours completed in automated WMS/TMS tools and safety compliance.
  - Employee retention rates among specialized logistics personnel.
  - Number of Kaizen continuous improvement ideas successfully implemented.

---

## 3. Differences / Examples

### Synthesis: The Four Balanced Scorecard Perspectives

| Balanced Scorecard Perspective | Core Strategic Question | Standard SCM Metric | Indicator Type |
|---|---|---|---|
| **Financial** | How do we create value for shareholders? | Cash-to-Cash Cycle Time (Days); ROCE | **Lagging** |
| **Customer** | How do our customers experience our service? | On-Time In-Full (OTIF %); Order Fill Rate | **Lagging / Balanced** |
| **Internal Processes** | What operational workflows must we excel at? | Picking Accuracy (%); Dock-to-Stock Time | **Leading** |
| **Learning & Growth** | How will we sustain our ability to innovate? | Employee Training Hours; Kaizen Adoption | **Leading** |

### Worked Example: Cash-to-Cash (C2C) Calculation
- An industrial manufacturing firm records the following operational working capital metrics:
  - Days of Inventory Outstanding ($DIO$) = **45 days**
  - Days Sales Outstanding ($DSO$) = **30 days**
  - Days Payables Outstanding ($DPO$) = **50 days**
- **Calculation:**
  $$\text{C2C} = \text{DIO} + \text{DSO} - \text{DPO} = 45 + 30 - 50 = \mathbf{25\text{ days}}$$
- **Operational Insight:** The firm requires **25 days of operating working capital financing** to bridge the gap between paying suppliers and receiving customer payments. If management negotiates supplier payment terms out to 80 days ($DPO = 80$), C2C becomes $45 + 30 - 80 = \mathbf{-5\text{ days}}$, completely eliminating short-term financing borrowing costs.

---

## 4. Must Remember

- The **Balanced Scorecard (BSC)** prevents myopic over-reliance on short-term financial metrics by balancing four perspectives: **Financial, Customer, Internal Business Processes, and Learning & Growth**.
- **Financial metrics are lagging indicators** (historical outcomes); **process and learning metrics are leading indicators** (predictive operational drivers).
- The **Cash-to-Cash (C2C) Cycle Time** equation is:
  $$\text{C2C} = \text{DIO} + \text{DSO} - \text{DPO}$$
  A lower or negative C2C indicates superior working capital velocity and operational liquidity.
- Customer metrics center on **On-Time In-Full (OTIF)** and **Order Fill Rate**.
- Internal process metrics target **Manufacturing Cycle Efficiency, Dock-to-Stock turnaround, and warehouse picking accuracy**.
- Learning & Growth metrics measure the foundation of sustained performance: **employee up-skilling, digital tool adoption, and Kaizen suggestions**.

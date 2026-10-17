# Week 8 – Lecture 2: Vendor Rating

## 1. Key Concepts

- **Vendor Rating (Supplier Evaluation):** A systematic, objective assessment protocol utilized by enterprises to evaluate, score, and rank the comparative operational performance, quality capability, delivery reliability, and commercial competitiveness of suppliers.
- **Categorical Plan:** A qualitative, subjective vendor rating method where cross-functional evaluators (Purchasing, Quality, Operations, Finance) grade suppliers using discrete qualitative ratings (e.g., Preferred, Approved, Unsatisfactory).
- **Weighted Point Plan:** An established quantitative evaluation method where performance attributes (Quality, Delivery, Price, Service) are assigned specific percentage weights based on organizational priority, producing a composite numerical score.
- **Cost Ratio Plan:** An advanced financial evaluation methodology that calculates the hidden operational costs (inspection, expediting, rework, downtime) incurred while dealing with a supplier, expressing them as a percentage ratio of purchase spend to compute the true Net Landed Cost.
- **Zero-Hour Rejection vs. Field Failure:**
  - *Zero-Hour Rejection:* Defective parts intercepted immediately upon receiving dock inspection before entering production.
  - *Field Failure:* Defective parts that pass factory assembly undetected and fail in the hands of the end consumer, resulting in warranty claims, recalls, and severe brand damage.

---

## 2. Important Points

### The Three Foundational Vendor Rating Methodologies
The lecture provides a comprehensive comparison of supplier evaluation systems:

#### 1. The Categorical Plan
- Cross-functional managers meet periodically to review supplier performance records.
- Evaluators grade each vendor as **Positive (+)**, **Neutral (0)**, or **Negative (-)** across criteria (quality, responsiveness, invoicing accuracy).
- *Pros:* Simple, rapid, and requires minimal accounting data infrastructure.
- *Cons:* Heavily vulnerable to personal subjectivity, cognitive bias, and inter-departmental disagreements.

#### 2. The Weighted Point Plan (Quantitative Standard)
- Management assigns importance weights ($W_i$) such that $\sum W_i = 100\%$ (or $1.0$).
  - *Typical Weight Distribution:* **Quality = 40%**, **Delivery = 30%**, **Price = 20%**, **Service = 10%**.
- **Mathematical Formulation:**
  $$\text{Composite Vendor Score} = (W_Q \cdot S_Q) + (W_D \cdot S_D) + (W_P \cdot S_P) + (W_S \cdot S_S)$$

- **Sub-Factor Scoring Formulations:**
  - *Quality Rating ($S_Q$):*
    $$S_Q = \left( 1 - \frac{\text{Defective Items Rejected}}{\text{Total Items Received}} \right) \times 100$$
  - *Delivery Rating ($S_D$):*
    $$S_D = \left( \frac{\text{Orders Delivered On-Time}}{\text{Total Orders Scheduled}} \right) \times 100$$
  - *Price Rating ($S_P$):*
    $$S_P = \left( \frac{\text{Lowest Bid Quoted Among Competitors}}{\text{Vendor's Quoted Bid Price}} \right) \times 100$$

#### 3. The Cost Ratio Plan (Total Financial Impact)
- Converts non-price performance failures into direct monetary penalty ratios:
  - $\text{Quality Cost Ratio } (QCR) = \frac{\text{Inspection Costs} + \text{Rework Costs} + \text{Scrap}}{\text{Total Purchase Value}}$
  - $\text{Delivery Cost Ratio } (DCR) = \frac{\text{Expedited Air Freight} + \text{Production Downtime Loss}}{\text{Total Purchase Value}}$
  - $\text{Service Cost Ratio } (SCR) = \frac{\text{Technical Support \& Administrative Overhead}}{\text{Total Purchase Value}}$
- **Net Adjusted Landed Cost Formula:**
  $$\text{Net Landed Cost} = \text{Quoted Unit Price} \times [1 + (QCR + DCR + SCR)]$$
- The supplier with the lowest Net Landed Cost is awarded the business, even if another vendor offered a superficially lower initial invoice price.

---

## 3. Differences / Examples

### Synthesis: The Three Vendor Rating Systems

| System | Analytical Nature | Implementation Cost | Data Requirement | Primary Limitation |
|---|---|---|---|---|
| **Categorical Plan** | Qualitative / Subjective | Very Low | Minimal (opinion-based) | High subjectivity; evaluator bias. |
| **Weighted Point Plan**| Quantitative / Balanced | Moderate | Routine ERP operational metrics | Weights can be somewhat arbitrary. |
| **Cost Ratio Plan** | Pure Financial / Objective | **High** | Detailed cost-accounting data | Complex to capture and track hidden costs. |

### Concrete Worked Illustration: Weighted Point Plan Scoring
- An automotive manufacturer evaluates **Vendor A** with the following performance data:
  - *Quality:* Delivered 10,000 components; 200 were defective $\rightarrow S_Q = \left(1 - \frac{200}{10,000}\right) \times 100 = \mathbf{98.0}$.
  - *Delivery:* Scheduled 50 shipments; 45 arrived on-time $\rightarrow S_D = \left(\frac{45}{50}\right) \times 100 = \mathbf{90.0}$.
  - *Price:* Vendor quoted Rs. 550 per unit; lowest market bid was Rs. 500 $\rightarrow S_P = \left(\frac{500}{550}\right) \times 100 = \mathbf{90.91}$.
  - *Service Score:* Internal audit assigns $\mathbf{85.0}$.
- **Weights:** Quality $= 40\%$ ($0.40$), Delivery $= 30\%$ ($0.30$), Price $= 20\%$ ($0.20$), Service $= 10\%$ ($0.10$).
- **Composite Score Calculation:**
  $$\text{Score} = (0.40 \times 98.0) + (0.30 \times 90.0) + (0.20 \times 90.91) + (0.10 \times 85.0)$$
  $$\text{Score} = 39.20 + 27.00 + 18.18 + 8.50 = \mathbf{92.88} \text{ out of } 100$$

---

## 4. Must Remember

- The three standard vendor rating plans are the **Categorical Plan (qualitative/subjective)**, **Weighted Point Plan (quantitative composite scoring)**, and **Cost Ratio Plan (total financial cost accounting)**.
- The **Weighted Point Plan** formula is:
  $$\text{Score} = \sum W_i \cdot S_i \quad (\text{where typical weights are Quality: 40\%, Delivery: 30\%, Price: 20\%, Service: 10\%})$$
- The **Cost Ratio Plan** determines the true landed cost by adding penalty ratios for quality defects, late delivery expediting, and service overhead:
  $$\text{Net Landed Cost} = \text{Quoted Price} \times [1 + (QCR + DCR + SCR)]$$
- **Zero-hour rejections** occur at the factory receiving dock; **line rejections** occur during active assembly; **field failures** occur in the hands of the end consumer and cause the highest financial damage.
- The ultimate goal of vendor rating is not punitive inspection, but driving suppliers toward **certified ship-to-stock status** where incoming inspection is entirely eliminated.

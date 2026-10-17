# Week 7 – Lecture 6: Make or Buy Decision

## 1. Key Concepts

- **Make-or-Buy Decision:** The strategic and operational evaluation undertaken by an enterprise to determine whether a specific component, product, or operational service should be manufactured/performed internally (**Make**) or outsourced to an external third-party supplier (**Buy**).
- **Core Competency:** The harmonized combination of unique operational technologies, engineering skills, and intellectual property that distinguishes a firm from rivals, delivers distinct customer value, and cannot be easily replicated by competitors.
- **The Core Competency Sourcing Rule:** Core, proprietary, high-differentiation activities must be strictly retained and executed **In-House (Make)** to safeguard trade secrets; non-core, commoditized, standard activities should be evaluated for **Outsourcing (Buy)** to capture vendor scale economies.
- **Supplier Lock-In:** An operational vulnerability where an enterprise becomes overly dependent on an exclusive external supplier who subsequently exploits leverage to raise prices, degrade delivery speed, or appropriate proprietary design knowledge.
- **Transaction Cost Economics (TCE):** An economic framework evaluating make-or-buy decisions based on the sum of direct production costs and external transaction costs (contract drafting, vendor negotiation, monitoring, auditing, and dispute litigation).

---

## 2. Important Points

### Qualitative Strategic Sourcing Matrix (Prahalad & Hamel Framework)
The lecture structures make-or-buy decisions across operational and intellectual property dimensions:

```
                            STRATEGIC IMPORTANCE
                      Low (Commodity)             High (Core Competency)
                 ┌───────────────────────────┬───────────────────────────┐
            High │ 1. OUTSOURCE / BUY        │ 2. IN-HOUSE / MAKE        │
INTERNAL         │ • Standard catalog parts  │ • Proprietary algorithms  │
CAPABILITY       │ • Exploit vendor scale    │ • Retain control & IP     │
                 ├───────────────────────────┼───────────────────────────┤
             Low │ 3. COLLABORATE / 3PL      │ 4. STRATEGIC ALLIANCE     │
                 │ • Commodity non-core task │ • Joint technology R&D    │
                 │ • Transactional contract  │ • Equity joint venture    │
                 └───────────────────────────┴───────────────────────────┘
```

### Strategic Evaluation: Advantages and Risks of "Make" vs. "Buy"

#### A. Internal Manufacturing ("Make")
- **Strategic Advantages:**
  - Total operational control over component quality, design modifications, and production schedules.
  - Complete protection of proprietary patents, trade secrets, and manufacturing techniques.
  - Avoids external vendor markups, supplier opportunism, and contractual dispute costs.
- **Risks & Drawbacks:**
  - Incurs massive capital expenditure ($CapEx$) for specialized production machinery, real estate, and tooling.
  - Difficulty absorbing seasonal volume swings; risk of high idle overhead during demand downturns.

#### B. External Sourcing ("Buy / Outsource")
- **Strategic Advantages:**
  - *Economies of Scale:* External contract manufacturers aggregate demand across multiple clients, lowering unit costs and tooling amortization.
  - *Capital Flexibility:* Preserves corporate capital; converts fixed costs into variable unit expenses.
  - *Access to Specialized Expertise:* Instantly leverages vendor advanced technical R&D and specialized equipment.
- **Risks & Drawbacks:**
  - Risk of intellectual property leakage or reverse engineering by foreign contract manufacturers.
  - Loss of internal design capability over time; erosion of core manufacturing know-how.
  - Quality slippage, delivery delays, and vulnerability to supplier insolvency.

### Mathematical Formulation: Multi-Cost Break-Even Analysis
When evaluating financial viability between internal production and external procurement:

$$\text{Total Cost of Making } (TC_M) = FC_M + (VC_M \cdot Q)$$

$$\text{Total Cost of Buying } (TC_B) = FC_B + (P_B \cdot Q) + T_{\text{trans}}$$

- $FC_M$: Fixed capital investment for in-house manufacturing.
- $VC_M$: Variable production cost per unit internally.
- $FC_B$: Fixed supplier onboarding, contracting, and tooling costs.
- $P_B$: Quoted purchase price per unit from vendor ($P_B > VC_M$).
- $T_{\text{trans}}$: Freight, customs, and transaction monitoring costs per unit.
- **Break-Even Volume ($Q^*$):**

$$Q^* = \frac{FC_M - FC_B}{(P_B + T_{\text{trans}}) - VC_M}$$

- If projected volume $Q > Q^*$, the enterprise achieves sufficient scale to justify fixed capital investment $\rightarrow$ **Make In-House**.
- If projected volume $Q < Q^*$, external procurement is financially superior $\rightarrow$ **Buy / Outsource**.

---

## 3. Differences / Examples

### Synthesis: Strategic Make vs. Buy Comparison

| Evaluation Factor | In-House Manufacturing (Make) | External Sourcing (Buy) |
|---|---|---|
| **Capital Requirement** | **Extremely High (CapEx)**; facilities, machinery, tooling. | **Low (OpEx)**; pay-per-unit delivered. |
| **Intellectual Property** | **100% Protected** within company walls. | Vulnerable to leakage or reverse engineering. |
| **Volume Flexibility** | Low; constrained by plant capacity limits. | **High**; supplier absorbs demand spikes across clients. |
| **Unit Variable Cost** | Lower at high production volumes ($VC_M < P_B$). | Higher; supplier includes profit margin. |
| **Managerial Focus** | Diluted across non-core manufacturing operations. | **Focused strictly on core competencies and branding**. |

### Real-World Industrial Case Study: Automotive vs. Electronics Sourcing
- **Apple iPhone Sourcing Strategy:**
  - *Make (Core):* Apple retains complete in-house control over core competencies—operating system software ($iOS$), proprietary silicon microprocessor design (A-series chips), and industrial product aesthetics.
  - *Buy (Non-Core / Commoditized):* Outsources physical circuit board surface-mount assembly, casing fabrication, and final device assembly to global contract manufacturers (**Foxconn, Pegatron**), capturing massive supplier scale without carrying fixed factory assets.

---

## 4. Must Remember

- The Make-or-Buy decision hinges on **Core Competencies**: keep core, proprietary, high-differentiation activities in-house; outsource non-core, commoditized tasks.
- The **Break-Even Quantity formula** for Make-or-Buy is:
  $$Q^* = \frac{FC_M - FC_B}{(P_B + T_{\text{trans}}) - VC_M}$$
  Produce in-house if volume exceeds $Q^*$; outsource if volume is below $Q^*$.
- **Outsourcing converts fixed capital ($CapEx$) into variable operating expenses ($OpEx$)**, leveraging supplier scale economies and buffering against market volatility.
- The primary risks of outsourcing are **loss of intellectual property, loss of manufacturing know-how, quality variance, and supplier lock-in**.
- **Transaction Cost Economics (TCE)** dictates that high asset specificity and high contract uncertainty favor making in-house rather than buying.

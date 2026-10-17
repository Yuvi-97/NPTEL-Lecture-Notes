# Week 3 – Lecture 5: Lean Logistics (Contd.)

## 1. Key Concepts

- **Value Stream Mapping (VSM):** A diagnostic visual mapping methodology used in Lean systems to document and analyze the end-to-end flow of materials and information required to bring an order or product from supplier delivery to the final customer.
- **Current State Map vs. Future State Map:**
  - *Current State Map:* The empirical baseline visual representation documenting existing process cycle times, inventory accumulations, waiting delays, and operational bottlenecks.
  - *Future State Map:* The target blueprint designed by systematically eliminating identified non-value-added wastes, establishing pull-replenishment loops, and creating continuous flow.
- **Lean Six Sigma (LSS):** A managerial methodology synergizing Lean principles (focused on cycle time acceleration and waste elimination) with Six Sigma statistical rigor (focused on defect reduction and variance minimization).
- **Six Sigma Quality Benchmark:** A statistical standard of process capability that permits no more than **3.4 Defects Per Million Opportunities (DPMO)**, equivalent to an accuracy rate of **99.99966%**.
- **Process Cycle Efficiency ($PCE$):** The ratio of total value-added time to total end-to-end process lead time, revealing the proportion of an operational timeline genuinely creating customer value.

---

## 2. Important Points

### Value Stream Mapping (VSM) Execution Steps
To conduct a thorough value stream analysis in warehousing and distribution:
1. **Identify Product / Order Family:** Select a high-volume SKU family or representative order fulfillment stream to map.
2. **Document the Current State (Walk the Gemba):** Personally walk the warehouse floor from outbound shipping docks backward to inbound receiving docks.
   - Record empirical cycle times, changeover times, queue waiting times, batch sizes, and physical work-in-process ($WIP$) buffers at every workstation.
3. **Analyze Value-Added vs. Non-Value-Added Time:**
   - Construct a timeline along the bottom of the map separating processing time from waiting/transit time.
4. **Design the Future State Map:**
   - Eliminate unnecessary handoffs, integrate Kanban pull signals, and balance cycle times across contiguous workstations.
5. **Develop Kaizen Implementation Charters:** Create milestone-driven implementation projects to transition operations toward the future state.

### Process Cycle Efficiency ($PCE$) Formula
The operational efficiency of any logistics flow is quantified by:

$$PCE = \left( \frac{\text{Total Value-Added Time } (T_{VA})}{\text{Total Process Lead Time } (T_{Total})} \right) \times 100$$

- In un-optimized logistics networks, $PCE$ frequently falls below **5% to 10%**, meaning that over 90% of order lead time is consumed by non-value-added waiting, staging, and storage delays.

### The DMAIC Problem-Solving Methodology
When implementing Lean Six Sigma to eliminate persistent logistics variances, teams follow the structured 5-phase DMAIC cycle:

1. **Define:**
   - Articulate the specific operational defect (e.g., *"Warehouse picking accuracy has fallen to 94.2%, causing 580 return claims per month"*).
   - Establish the project charter, scope boundaries, and customer Critical to Quality ($CTQ$) expectations.
2. **Measure:**
   - Quantify baseline process performance using check sheets and histograms.
   - Map baseline defect rates, calculate current process sigma levels, and validate data measurement integrity.
3. **Analyze:**
   - Deploy diagnostic tools (Ishikawa diagrams, Pareto analysis, regression, and the 5 Whys) to isolate root causes of variance.
   - Identify whether failures stem from barcode misprints, inadequate lighting, worker fatigue, or software latency.
4. **Improve:**
   - Formulate targeted corrective countermeasures.
   - Pilot solutions on a small scale (e.g., implementing pick-to-light technology on top-error pick aisles).
5. **Control:**
   - Institutionalize standard operating procedures ($SOPs$), statistical process control charts ($SPC$), and visual management boards to ensure gains do not degrade over time.

---

## 3. Differences / Examples

### Concrete Worked Illustration from the Lecture: Document Processing Time Study
- **Operational Task:** Reviewing and stapling shipping manifests at a warehouse dispatch desk.
  - *Step 1:* Picker picks up invoice paper: **1 second** (Value-Added)
  - *Step 2:* Picker walks across room to communal stapler: **5 seconds** (Non-Value-Added / Motion Waste)
  - *Step 3:* Picker staples document: **2 seconds** (Value-Added)
  - *Step 4:* Picker walks 5 seconds back to packing desk: **5 seconds** (Non-Value-Added / Motion Waste)
- **Time Analysis:**
  - $\text{Total Process Time} = 1 + 5 + 2 + 5 = 13\text{ seconds}$.
  - $\text{Value-Added Time} = 1 + 2 = 3\text{ seconds}$.
  - $\text{Non-Value-Added Waste Time} = 5 + 5 = 10\text{ seconds}$.
- **Efficiency Metric:**
  $$\text{Waste Percentage} = \frac{10}{13} \times 100 \approx 76.9\% \approx 72\%\text{–}77\%$$
- **Lean Solution:** Place a dedicated \$5 stapler directly at each individual packing desk, eliminating walking motion entirely and cutting total task time from 13 seconds to 3 seconds (**a 77% cycle time reduction**).

---

## 4. Must Remember

- **Value Stream Mapping (VSM)** tracks both material and information flows to identify and eliminate non-value-added delays.
- A **Current State Map** captures the baseline as-is process, while the **Future State Map** provides the optimized target vision.
- **Process Cycle Efficiency ($PCE$)** measures value-added time against total end-to-end lead time:
  $$PCE = \frac{\text{Total Value-Added Time}}{\text{Total Process Lead Time}} \times 100$$
- In traditional un-optimized logistics chains, non-value-added delays (waiting, staging, queueing) typically account for over **90% of total lead time**.
- **Six Sigma** sets a quality target of no more than **3.4 Defects Per Million Opportunities (DPMO)** ($99.99966\%$ accuracy).
- The Lean Six Sigma problem-solving framework is **DMAIC**: **Define $\rightarrow$ Measure $\rightarrow$ Analyze $\rightarrow$ Improve $\rightarrow$ Control**.
- The dispatch stapler time study proves that eliminating simple physical motion waste can reduce workstation cycle times by over **70%**.

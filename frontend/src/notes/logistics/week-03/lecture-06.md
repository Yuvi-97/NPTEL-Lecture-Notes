# Week 3 – Lecture 6: Lean Logistics (Contd.)

## 1. Key Concepts

- **Toyota Production System (TPS):** The world-renowned manufacturing and operational management framework developed by Toyota, founded on two central pillars—**Just-in-Time (JIT)** and **Jidoka (Autonomation)**—supported by standardized work, Kaizen, and workload leveling.
- **Jidoka (Autonomation / Automation with a Human Touch):** The operational principle of designing machinery and processes to autonomously detect defects or abnormalities and immediately shut down without human intervention, preventing defective units from passing downstream.
- **Poka-Yoke (Mistake-Proofing):** Designing physical mechanisms, jigs, sensor gates, or digital constraints that make human operational errors virtually impossible.
- **Andon System:** A visual and auditory alert system (display boards, colored lights, and pull cords) positioned across a production or fulfillment line, enabling operators to signal an emerging problem or immediately halt the line upon discovering a defect.
- **Heijunka (Production / Workload Leveling):** The operational practice of smoothing production volume and product mix over time, eliminating the peaks and valleys caused by erratic batching (eliminating *Mura*).
- **Kaizen:** The philosophy of continuous, incremental, relentless improvement involving every worker every single day (*"Make it better, make it faster, make it cheaper"*).

---

## 2. Important Points

### The Architecture of the Toyota Production System (TPS House)
The lecture explains TPS as an interconnected architectural structure:

```
                      [ ROOF: CUSTOMER SATISFACTION ]
              Highest Quality • Lowest Cost • Shortest Lead Time
                                Safety & Morale
         ┌────────────────────────────────────────────────────────┐
         │                                                        │
    [ PILLAR 1: JIT ]                                      [ PILLAR 2: JIDOKA ]
   • Continuous Flow                                     • Autonomation
   • Takt Time Pacing                                    • Stop Line on Defect
   • Pull System (Kanban)                                • Poka-Yoke Error Proofing
         │                                                        │
         └────────────────────────────────────────────────────────┘
                    [ FOUNDATION: OPERATIONAL STABILITY ]
                 Standardized Work • Heijunka (Leveling)
                     Kaizen (Continuous Improvement)
```

### Deep-Dive into the Core Japanese Lean Concepts
1. **Just-in-Time (JIT):**
   - *Historical Origin:* Pioneered by Kiichiro Toyoda and industrialized by Taiichi Ohno at Toyota Motor Corporation in 1937.
   - *Core Rule:* Delivering the **right item, in the exact required quantity, at the precise moment of need**. Eliminates intermediate work-in-process ($WIP$) buffers between workstations.
2. **Jidoka (Autonomous Defect Containment):**
   - *Historical Origin:* Invented by Sakichi Toyoda in the early 20th century for automatic textile looms. The mechanical loom was designed to instantly stop if a single thread snapped, preventing yards of ruined cloth.
   - *Application in Logistics:* Automated conveyor sorters immediately halting and redirecting parcels if barcode scanners detect an unreadable label or weight mismatch.
3. **Poka-Yoke (Error-Proofing Mechanisms):**
   - *Physical Examples:* Asymmetrical shape of SIM cards and USB connectors that prevent inverted insertion; barcode interlock software on picking carts where the system locks and will not display the next pick location until the operator scans the correct bin location.
4. **Andon Cord / Board System:**
   - Visual signaling using standard traffic light colors:
     - **Green:** Normal operations running smoothly at standard takt time.
     - **Yellow:** Operator requires assistance or cycle time is slipping; supervisor responds immediately without stopping the line.
     - **Red:** Critical defect detected or safety hazard; the entire line is halted immediately until root-cause resolution is achieved.
5. **Heijunka (Workload Smoothing):**
   - Instead of building or dispatching in large, separated batches (e.g., 50 units of Model A on Monday, 50 units of Model B on Tuesday), production is leveled into mixed small batches (e.g., A-B-A-B-A-B).
   - Prevents stockouts of individual models and stabilizes supplier component demand.

---

## 3. Differences / Examples

### Strategic Comparison: Lean Logistics vs. Agile Logistics

| Operational Parameter | Lean Logistics | Agile Logistics |
|---|---|---|
| **Primary Philosophy** | Waste elimination and cost minimization. | Rapid responsiveness and operational flexibility. |
| **Market Environment** | Stable, predictable demand with low SKU variety. | Volatile, unpredictable demand with high SKU variety. |
| **Inventory Policy** | Minimal buffer inventory; JIT pull replenishment. | Strategic safety buffers and surge capacity reserves. |
| **Supplier Relationship** | Long-term partnerships, collocated suppliers. | Dynamic, flexible multi-sourcing networks. |
| **Competitive Edge** | Lowest per-unit delivered operating cost. | Shortest market delivery lead time and adaptability. |
| **Hybrid Strategy (Leagile)** | Upstream supply chain: Lean (cost efficiency in raw material sourcing); Downstream supply chain: Agile (customized, rapid fulfillment near customer). |

---

## 4. Must Remember

- The two foundational pillars of the **Toyota Production System (TPS)** are **Just-in-Time (JIT)** and **Jidoka (Autonomation)**.
- **Jidoka** originated from Sakichi Toyoda's automatic loom that stopped instantly when a thread broke; in logistics, it represents **building defect-detection into machines to stop the line automatically**.
- **Poka-Yoke** is **mistake-proofing** via physical or software constraints that make it impossible to execute an operation incorrectly.
- The **Andon system** uses color-coded visual boards (Green = Normal, Yellow = Warning, Red = Line Stop) to empower operators to signal defects immediately.
- **Heijunka** is **production leveling**—smoothing volume and mix across time to eliminate the unevenness (*Mura*) of batching.
- **Kaizen** focuses on small, incremental, daily improvements involving every organizational tier (*"Better, faster, cheaper"*).
- **Lean is ideal for stable, predictable demand**; **Agile is essential for volatile, high-variety demand**; **Leagile** combines lean upstream efficiency with agile downstream customer responsiveness.

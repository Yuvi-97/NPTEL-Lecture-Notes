# Week 5 – Lecture 4: Safety Function Deployment

## 1. Key Concepts

- **Safety Function Deployment (SFD):** A structured, systematic engineering planning methodology adapted from **Quality Function Deployment (QFD)**. While QFD translates customer preferences into product specifications, SFD systematically translates **stakeholder safety concerns** into actionable **engineering design solutions** using Haddon's hazard control hierarchy.
- **House of Safety (HoS):** The matrix-based deployment structure that formally maps *"What must be prevented"* (stakeholder accident concerns, such as explosions, toxic releases, and fires) to *"How it can be achieved"* (specific engineering design parameters and physical barrier configurations).
- **Prevention through Design (PtD) Focus:** SFD acts as a blueprint to embed safety inherently into process hardware, piping, instrumentation, and control architectures during initial conceptual design or major plant retrofits.
- **The "What's" in SFD:** Defined as credible **Accident Scenarios** (e.g., high-impact fire, toxic gas emission, structural vessel bursting, emergency process shutdown) that stakeholders (operators, maintenance technicians, regulators, and management) insist must never occur.
- **The "How's" in SFD:** Defined as concrete **Design Solutions ($DS$)** derived from the systematic application of Haddon’s nine hazard control principles ($P_1$ to $P_9$).

---

## 2. Important Points

### 2.1 The Ten-Step SFD Implementation Algorithm

```
[ Step 1: Identify Stakeholder Concerns ("What's" - Accident Scenarios) ]
                                   │
                                   ▼
[ Step 2: Quantify Risk of Scenarios (Risk = Frequency x Consequence) ]
                                   │
                                   ▼
[ Step 3: Benchmark with Peer Systems (Compare Risk against Similar Plants) ]
                                   │
                                   ▼
[ Step 4: Categorize via ALARP (Screen Unacceptable & Tolerable Scenarios) ]
                                   │
                                   ▼
[ Step 5: Identify Design Principles ("How's" - Haddon's 9 Principles) ]
                                   │
                                   ▼
[ Step 6: Construct House of Safety Matrix (Map "What's" to "How's") ]
                                   │
                                   ▼
[ Step 7: Benchmark Engineering Solutions against Best-Practice Plants ]
                                   │
                                   ▼
[ Step 8: Calculate Weighted Technical Scores for Candidate Solutions ]
                                   │
                                   ▼
[ Step 9: Select Optimal Design Solutions (Apply MCDM / AHP Selection) ]
                                   │
                                   ▼
[ Step 10: Formulate Design & Operating Specs (Verify No Secondary Hazards) ]
```

1. **Identify Stakeholder Concerns ("What's"):** Formulate the complete inventory of credible accident scenarios.
2. **Quantify Scenario Risks:** Calculate baseline risk using Bow-Tie frequency modeling and consequence estimation.
3. **Benchmark Risk Levels:** Compare scenario risks against similar operating units in the company or industry.
4. **Screen via ALARP Criteria:** Classify scenarios into Unacceptable ($IR > 10^{-4}/\text{yr}$), Tolerable / ALARP, or Acceptable ($IR < 10^{-7}/\text{yr}$) bands.
5. **Formulate Technical Design Strategies ("How's"):** Systematically apply Haddon's principles ($P_1$ to $P_9$) to brainstorm candidate design solutions.
6. **Construct the Deployment Matrix:** Map each accident scenario to applicable design solutions.
7. **Benchmark Solutions:** Compare proposed engineering features against industry best-available technology (BAT).
8. **Compute Weighted Importance Scores:** Multiply scenario risk weights by solution correlation strengths.
9. **Select Final Design Interventions:** Prioritize the highest-ranking design solutions.
10. **Establish Engineering Specifications:** Specify detailed P&IDs, trip thresholds, and SOPs; verify that the intervention does not introduce secondary hazards.

---

### 2.2 Industrial Case Study: Hot Metal Desulphurizing Plant (DSU)

In metallurgical steelmaking, molten iron is desulphurized by pneumatically injecting pulverized calcium carbide ($CaC_2$) and magnesium powder ($Mg$) through a submerged refractory lance using high-pressure nitrogen ($N_2$) as the carrier gas.

#### 1. Identification of Core Hazards & Initiating Mechanisms:
- $H_1$: Moisture present in the high-pressure nitrogen carrier gas line (reacts violently with $CaC_2$ to generate flammable acetylene $C_2H_2$, or with $Mg$ to generate explosive hydrogen $H_2$).
- $H_2$: Physical leakage of $CaC_2 / Mg$ powder mix into the operating bay.
- $H_3$: Oxygen ingress into the bulk magnesium storage silo.
- $H_4$: Pressurization of the induced draft (ID) dust-extraction duct.
- $H_5$: Moisture ingress into the magnesium storage silo.
- $H_6$: Moisture ingress into the calcium carbide storage silo.

#### 2. The Resulting "What's" (Accident Scenarios):
- High-Impact Fire (involving metallic magnesium combustion).
- Low-Impact Localized Fire.
- Toxic Gas Emission (acetylene / sulfurous fumes).
- Duct / Vessel Bursting (gas overpressure).
- Emergency Process Shutdown.

#### 3. Mapping Hazards to Haddon's Design Principles:
A multidisciplinary team of 5 process and safety engineers mapped each hazard against Haddon’s principles:
- **$P_1$ (Avoid Hazard):** Technically impossible; desulphurization inherently requires reactive chemical reagents.
- **Hazard $H_1$ (Moisture in $N_2$ line):** Mapped to $P_2$ (Limit), $P_3$ (Substitute), and $P_4$ (Prevent build-up).
- **Hazards $H_2$ & $H_3$ (Powder leakage & $O_2$ ingress):** Mapped to $P_2$ (Limit), $P_3$ (Substitute), and $P_5$ (Prevent release via containment).
- **Hazard $H_4$ (ID fan duct pressurization):** Screened out as Broadly Acceptable ($IR \ll 10^{-7}/\text{yr}$).

#### 4. The Five Candidate Design Solutions ($DS_1$ to $DS_5$):
- **$DS_1$:** Automated moisture-control skid with continuous optical dew-point hygrometers.
- **$DS_2$:** In-line electrical trace-heating system on nitrogen piping to eliminate moisture condensation.
- **$DS_3$:** Automated dedicated argon ($Ar$) purge line that takes over instantly if $N_2$ dew point rises.
- **$DS_4$:** Optical $CaC_2$ powder concentration analyzer with automated emergency lance retraction.
- **$DS_5$:** Automated inert gas blanket with double-block-and-bleed valves on bulk reagent silos.

---

## 3. Differences / Examples

### 3.1 Comparison: Quality Function Deployment (QFD) vs Safety Function Deployment (SFD)

| Parameter | Quality Function Deployment (QFD) | Safety Function Deployment (SFD) |
| :--- | :--- | :--- |
| **Originating Field** | Total Quality Management (TQM) | Prevention through Design (PtD) / Safety Engineering |
| **Primary Goal** | Maximize customer satisfaction & commercial appeal | Minimize occupational risk, physical harm, and asset loss |
| **Input ("What's")** | "Voice of the Customer" (Product feature desires) | "Voice of Safety" (Accident scenarios, QRA risks, ALARP mandates) |
| **Weighting Basis** | Market survey rankings and consumer importance ratings | Quantitative scenario frequency ($f_i$) and consequence severity ($C_i$) |
| **Output ("How's")** | Product engineering specifications & manufacturing tolerances | Safety design interventions, interlocks, and barrier architectures |
| **Roof Matrix** | Engineering trade-offs between physical product traits | Conflict checking to ensure safety controls do not create new hazards |

---

### 3.2 Peer System Benchmarking Matrix (DSU Example)

| Accident Scenario ("What's") | Base Plant (DSU 1) | Peer Plant A (DSU 2) | Peer Plant B (DSU 3) | Target Status |
| :--- | :---: | :---: | :---: | :--- |
| **Process Shutdown** | High Risk ($R = 1$) | Moderate ($R = 3$) | **Lowest Risk ($R = 5$)** | Benchmark against DSU 3 |
| **Toxic Gas Emission** | **Lowest Risk ($R = 5$)** | Moderate ($R = 3$) | High Risk ($R = 2$) | Maintain existing design |
| **Low-Impact Fire** | Equal Risk ($R = 3$) | Equal Risk ($R = 3$) | Equal Risk ($R = 3$) | Industry-wide issue |
| **High-Impact Fire** | High Risk ($R = 1$) | **Lowest Risk ($R = 4$)** | Moderate ($R = 2$) | Benchmark against DSU 2 |

*Takeaway:* Benchmarking demonstrates that High-Impact Fire risk can be successfully engineered down to the performance level achieved by DSU 2.

---

## 4. Must Remember

- **SFD Essence:** Adapts QFD to systematically convert **Accident Scenarios ("What's")** into **Haddon Design Solutions ("How's")**.
- **Ten-Step Rigor:** Operates from initial hazard identification and ALARP risk screening through to detailed design specifications.
- **Integration of Haddon Hierarchy:** Uses Haddon's 9 principles to ensure solutions emphasize upstream design prevention ($P_1$ to $P_5$) rather than administrative procedures or PPE.
- **Step 10 Imperative (Secondary Hazards):** Introducing a new safety device (e.g., electrical heating jackets or nitrogen purge valves) can introduce new electrical ignition or asphyxiation hazards; every proposed $DS$ must undergo formal HAZOP re-validation.
- **Peer Benchmarking:** Comparing risk scores against peer installations establishes realistic, technically achievable risk-reduction targets.

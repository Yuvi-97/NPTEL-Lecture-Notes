# Week 2 – Lecture 1: Preliminary Hazard List

## 1. Key Concepts
- **Preliminary Hazard List (PHL):** The initial, top-level hazard identification technique executed during the conceptual and early feasibility stages of a system lifecycle.
  - *Primary Objective:* Identify, compile, and screen for major, high-level hazardous elements, hazardous energy sources, and catastrophic threats before detailed engineering design begins.
- **Position in System Safety Lifecycle:** PHL is the first formal deliverable in the hazard analysis sequence. It serves as the direct foundation for the **Preliminary Hazard Analysis (PHA)**; hazards screened out or identified here guide early safety requirements and architectural trade-offs.
- **Top-Level Mishap (TLM):** The ultimate catastrophic accident outcome that a system design seeks to prevent (e.g., vessel rupture, unconfined vapor cloud explosion, structural collapse, fatal electrocution).
- **Hazard Theory Integration:** PHL identifies the dormant **Hazardous Element (HE)** and links it to candidate **Initiating Mechanisms (IM)** and vulnerable **Targets and Threats (TT)**.

---

## 2. Important Points

### The Nine Standard PHL Hazard Categories (Ericson System Safety Framework)
To ensure comprehensive coverage during early conceptual design, PHL evaluates nine standard hazard categories:
1. **Hazardous Energy Sources:** High electrical voltage, kinetic energy in high-speed rotating machinery, potential energy in elevated masses, high pneumatic/hydraulic pressure, and acoustic energy.
2. **Hazardous Materials:** Flammable liquids and gases, toxic substances, pyrophoric materials, reactive chemicals, cryogens, carcinogens, and asphyxiants.
3. **Mechanical and Physical Hazards:** Unshielded rotating shafts, pinch points, cutting edges, high-velocity projectile ejection, and mechanical fatigue.
4. **Thermal Extremes:** Cryogenic cold surfaces, superheated steam lines, molten metal blast environments, and radiant heat sources.
5. **Environmental and Climatic Hazards:** Seismic acceleration, lightning strikes, hurricane wind loads, flooding, extreme ambient humidity, and dust storms.
6. **Human-Machine Interface & Ergonomic Hazards:** Incompatible control levers, confusing display layouts, poor operator visibility, extreme physical reach distances, and heavy manual lifting.
7. **Software and Automated Logic Hazards:** Sensor communication latency, corrupted setpoint inputs, unhandled program exceptions, and unverified safety interlock overrides.
8. **Interface & Co-Location Hazards:** Shared utility headers, adjacent high-pressure gas corridors, flammables stored near electrical sub-stations, and cross-contamination piping tie-ins.
9. **Operational, Maintenance, and Disposal Hazards:** Inadequate Lockout/Tagout isolation provisions, lack of lifting lugs for heavy motors, confined space entry traps, and hazardous material dismantling risks.

### Standard PHL Tabular Worksheet Structure
A rigorous Preliminary Hazard List registers hazards in an 8-column structured table:
- **Column 1 — Item No.:** Sequential index identifier.
- **Column 2 — Hazard ID:** Alphanumeric identifier tracking the hazard across lifecycle documents.
- **Column 3 — Hazard Category:** Classification chosen from the nine standard categories.
- **Column 4 — Hazardous Element (HE):** The specific physical energy source or hazardous condition.
- **Column 5 — Initiating Mechanism (IM):** The trigger event or operational failure mechanism.
- **Column 6 — Target and Threat (TT):** The vulnerable personnel/equipment and the inflicted damage.
- **Column 7 — Causal Factors:** Potential failure causes (component wear, operator error, software bug).
- **Column 8 — Preliminary Mitigation Recommendation:** Early design-stage intervention or requirement.

---

## 3. Differences / Examples

### PHL vs. Preliminary Hazard Analysis (PHA)
| Dimension | Preliminary Hazard List (PHL) | Preliminary Hazard Analysis (PHA) |
| :--- | :--- | :--- |
| **Lifecycle Phase** | Concept & Feasibility stage | Preliminary / Detailed Design stage |
| **Level of Detail** | Broad, high-level list of potential hazards | In-depth hazard causal scenario analysis |
| **Risk Evaluation** | Qualitative screening only; no formal risk matrix ranking | Formally assigns **Severity Categories** and **Probability Levels** |
| **Input Data** | System concept brief, basic process intent | Block diagrams, preliminary P&IDs, equipment specs |
| **Primary Output** | Raw candidate list of hazards to be investigated | Risk Assessment Matrix ranking, design safety criteria |

### Practical PHL Worksheet Demonstration: High-Pressure Gas Storage Facility
| Item | Hazard ID | Category | Hazardous Element (HE) | Initiating Mechanism (IM) | Target & Threat (TT) | Preliminary Recommendation |
| :---: | :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | H-01 | Hazardous Energy | $200\text{ bar}$ compressed nitrogen gas in storage bank | Overpressurization due to ambient solar heating and failed regulator | Tank shell rupture; projectile fragmentation impacting operators | Install certified spring-loaded pressure relief valve and shade canopy |
| **2** | H-02 | Hazardous Material | Flammable solvent (toluene) in transfer piping | Flange gasket degradation and leak near open motor switch | Vapor cloud flash fire causing fatal burns to technicians | Specify spiral-wound metallic gaskets; mandate explosion-proof Class 1 Div 1 motors |
| **3** | H-03 | Interface Hazard | High-voltage ($11\text{kV}$) cable routed adjacent to solvent line | Cable insulation failure causing electrical arc | Pipe ignition, solvent boiling liquid expanding vapor explosion (BLEVE) | Enforce physical spatial segregation ($>3\text{m}$) and install fire barrier trough |

---

## 4. Must Remember
- **PHL is the first formal hazard identification tool** in system safety engineering, conducted during the conceptual phase before detailed P&IDs exist.
- The primary purpose of PHL is **early hazard screening**: identifying major hazardous elements to establish baseline safety design requirements and eliminate hazards before design freeze.
- PHL systematically evaluates **nine core hazard categories**, including hazardous energy, hazardous materials, thermal extremes, software, and co-located interface hazards.
- A **hazard is not an accident**: PHL documents dormant physical conditions (Hazardous Element), potential trigger paths (Initiating Mechanism), and vulnerable assets (Target/Threat).
- PHL does not perform detailed probability quantification; its direct successor, the **Preliminary Hazard Analysis (PHA)**, assigns formal MIL-STD-882D severity and probability ratings to the hazards listed in the PHL.
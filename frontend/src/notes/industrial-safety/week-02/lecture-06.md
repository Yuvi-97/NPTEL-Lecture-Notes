# Week 2 – Lecture 6: Application of Hazard Identification Techniques

## 1. Key Concepts
- **Integrated Hazard Identification:** The complementary, life-cycle deployment of multiple hazard analysis methods (PHL, PHA, HAZOP, FMEA) to systematically eliminate single-point failures, identify process deviations, and prioritize risk mitigation across complex industrial systems.
- **The Benchmark Pressure Tank System:** The canonical safety engineering model used to demonstrate and cross-compare hazard identification tools:
  - *Primary Components:* Electrical power supply, start switch, timer relay, pressure switch (set to trip at $P_{\text{cutoff}}$), electric motor, compressor/pump, discharge check valve, steel pressure vessel, pressure safety relief valve (PSV), and outlet isolation valve.
  - *Normal Operational Cycle:* Closing the start switch energizes the circuit; the timer sets the fill duration; the pump pressurizes the vessel; upon reaching rated pressure $P_{\text{cutoff}}$, the pressure switch opens contacts, de-energizing the pump motor.
- **Methodological Complementarity:**
  - **PHL:** Early conceptual screening of broad energy hazards.
  - **PHA:** Preliminary design hazard scenario risk ranking.
  - **HAZOP:** P&ID process deviation and operability interrogation.
  - **FMEA:** Detailed component-level hardware failure mode and RPN analysis.

---

## 2. Important Points

### Mapping the Pressure Tank Across Hazard Identification Techniques

#### 1. Preliminary Hazard List (PHL) Application
- *Hazardous Energy Source:* Compressed fluid/gas at high pressure ($>30\text{ bar}$ potential energy).
- *Hazard Category:* Hazardous energy release / mechanical projectile ejection.
- *Initiating Mechanism:* Rupture of vessel shell due to uncontrolled pressure accumulation.
- *Target & Threat:* Operating technicians (fatal trauma / blast impact); adjacent plant structures.

#### 2. Preliminary Hazard Analysis (PHA) Application
- *Hazard Scenario:* Overpressure rupture of the pressure tank.
- *Causal Factors:* Pressure switch fails to detect pressure; timer relay contacts weld closed; relief valve blocked or setpoint drifts high.
- *Initial Risk Index:* **Catastrophic (Cat I) / Occasional (Level C) $\rightarrow$ High Risk (1C)** *(Unacceptable)*.
- *Engineered Safeguards Required:* Redundant mechanical spring-loaded relief valve, independent high-pressure trip switch, daily proof-testing schedule.
- *Residual Risk Index:* **Catastrophic (Cat I) / Improbable (Level E) $\rightarrow$ Medium Risk (1E)** *(Acceptable)*.

#### 3. HAZOP Application (Node: Tank Vessel & Inlet Piping)
- *Parameter:* **Pressure**
  - *Deviation:* **MORE PRESSURE**
  - *Causes:* Pump runs continuously due to timer contact welding; pressure switch fails to sense cutoff threshold; gas outlet valve inadvertently closed while pump running.
  - *Consequences:* Vessel pressure exceeds maximum allowable working pressure (MAWP); catastrophic tank shell burst; fragment projection.
  - *Safeguards:* Pressure gauge with visual high-mark indicator, mechanical pressure relief valve, burst disc.
- *Parameter:* **Flow**
  - *Deviation:* **NO FLOW**
  - *Causes:* Pump motor fails to start; intake suction strainer completely clogged.
  - *Consequences:* Loss of pressurized gas supply to downstream users; dry running and overheating of pump.
- *Parameter:* **Flow**
  - *Deviation:* **REVERSE FLOW**
  - *Causes:* Pump trips offline; downstream check valve fails to seat properly.
  - *Consequences:* High-pressure tank gas back-siphons into compressor casing, causing reverse overspeed and casing rupture.

#### 4. FMEA / FMECA Component Breakdown
Component failure modes within the pressure tank circuit are systematically isolated:
- **Timer Relay:**
  - *Failure Mode:* Contacts fail to open (welded closed).
  - *Cause:* Electrical arcing, contact pitting.
  - *Effect:* Pump runs continuously beyond set duration; drives tank to overpressure.
  - *RPN Scoring:* $S = 9, O = 4, D = 6 \rightarrow \text{RPN} = 216$.
- **Pressure Switch:**
  - *Failure Mode:* Diaphragm rupture / contact jammed closed.
  - *Cause:* Fatigue, corrosion.
  - *Effect:* Fails to signal motor contactor to open at $P_{\text{cutoff}}$.
  - *RPN Scoring:* $S = 9, O = 3, D = 7 \rightarrow \text{RPN} = 189$.
- **Pressure Safety Relief Valve (PSV):**
  - *Failure Mode:* Fails to lift / stuck shut.
  - *Cause:* Spring corrosion, seat galling, discharge port blocked with debris.
  - *Effect:* Loss of ultimate overpressure protection; vessel ruptures if controls fail.
  - *RPN Scoring:* $S = 10, O = 2, D = 8 \rightarrow \text{RPN} = 160$.

---

## 3. Differences / Examples

### Comparative Matrix of Hazard Identification Techniques
| Feature | Preliminary Hazard List (PHL) | Preliminary Hazard Analysis (PHA) | HAZOP | FMEA / FMECA |
| :--- | :--- | :--- | :--- | :--- |
| **Applicable Stage** | Concept / Feasibility | Preliminary Design | Detailed Design / P&ID freeze | Detailed Design / Operations |
| **Primary Focus** | Major hazardous energy inventories | Top-level hazard scenarios & severity | Process parameter deviations & operability | Component hardware failure modes & RPN |
| **Method Approach** | Checklist / Category screening | Inductive scenario analysis | Multidisciplinary team brainstorming | Inductive bottom-up component breakdown |
| **Primary Document**| Equipment concept sketches | System block diagrams, preliminary specs | Final Piping & Instrumentation Diagrams | Component bill of materials / schematics |
| **Key Output** | Candidate hazard list | Hazard Risk Index (HRI) Matrix ($4 \times 5$) | Action items for instrumentation & piping | Risk Priority Numbers (RPN) & Pareto ranking |

---

## 4. Must Remember
- No single hazard identification technique is universally sufficient: **PHL, PHA, HAZOP, and FMEA must be applied collaboratively across different lifecycle phases**.
- **PHL** operates at the conceptual stage to screen broad energy and material hazards before design decisions become fixed.
- **PHA** evaluates initial hazard scenarios against **MIL-STD-882D**, classifying severity and probability to mandate engineering safeguards that reduce initial risk to residual acceptable levels.
- **HAZOP** relies on **P&IDs and multidisciplinary teams** applying guide words to process parameters to discover dangerous deviations from design intent.
- **FMEA** investigates hardware component by component, quantifying criticality via the **Risk Priority Number ($\text{RPN} = S \times O \times D$)**.
- In the benchmark **Pressure Tank System**, an accident requires a dual failure: a control failure (timer/pressure switch failing to stop pump) coupled with a safety layer failure (relief valve failing to open).
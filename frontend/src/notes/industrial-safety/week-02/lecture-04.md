# Week 2 – Lecture 4: Failure Modes and Effects Analysis (FMEA)- Identification of Failure Modes

## 1. Key Concepts
- **Failure Modes and Effects Analysis (FMEA):** A systematic, bottom-up, inductive engineering reliability and safety technique that evaluates how individual components or subsystems can physically fail, and traces the ultimate consequences of those failures on the overall system.
  - *Origin & Lineage:* Pioneered by the US military (MIL-P-1629) and aerospace industry (NASA Apollo program), subsequently adopted across automotive (AIAG), nuclear, and process industries.
  - *Inductive Nature:* Reasons from the specific component-level physical failure (**Cause / Mode**) upward to the broad system-level outcome (**Effect**): *"If Component $X$ fails in Mode $Y$, what will happen to System $Z$?"*
- **Failure Mode:** The specific physical or functional manner in which a component fails to meet, sustain, or execute its intended engineering design function (e.g., a valve failing to close, a bearing seizing, a relay contact welding shut).
- **System Breakdown Structure (SBS):** The hierarchical structural decomposition of a facility into manageable functional tiers:
  $$\text{Plant / Facility} \rightarrow \text{System} \rightarrow \text{Subsystem} \rightarrow \text{Component} \rightarrow \text{Sub-Assembly / Part}$$

---

## 2. Important Points

### Three Echelons of Failure Effects
FMEA traces the propagation of a single component failure across three distinct organizational horizons:
1. **Local Effect:**
   - The immediate physical consequence experienced by the specific component itself or its local piping/wiring loop (e.g., internal motor coil burns out, valve stem packing blows out, filter mesh tears).
2. **Next Higher Level / Subsystem Effect:**
   - The functional consequence on the intermediate subsystem or parent assembly containing the component (e.g., loss of hydraulic control fluid pressure, loss of cooling water flow across heat exchanger bundle).
3. **End / System Effect:**
   - The ultimate operational, safety, or environmental impact on the overall plant, operators, or product quality (e.g., chemical reactor thermal runaway, loss of primary vessel containment, total emergency power blackout, toxic atmospheric release).

### Universal Component Failure Mode Taxonomy
Safety engineering classifies component failure modes into four canonical operational categories:
- **Catastrophic Failure Modes:** Complete, sudden termination of component functionality without prior warning (e.g., instantaneous pipe rupture, catastrophic shaft fracture).
- **Degraded / Incipient Failure Modes:** Component operates at substandard performance or impaired efficiency (e.g., pump delivering $50\%$ rated discharge head, partial valve stem sticking).
- **Intermittent Failure Modes:** Component cycles unpredictably between functioning and failing states (e.g., loose wiring terminal causing intermittent sensor dropout).
- **Unintended Operational Modes:** Component activates at an incorrect time or fails to terminate (e.g., fire deluge system starts prematurely, solenoid valve fails to reset).

### Typical Process Equipment Failure Modes
- **Pumps / Compressors:** Fails to start on demand; trips while running; runs in reverse; seal leakage; operates at degraded speed / low head; excessive casing vibration.
- **Valves (Control, Isolation, Relief):** Fails to open on demand; fails to close on demand; internal leakage across seat; external packing blow-out; spurious closure during normal flow; chattering.
- **Piping & Vessels:** Wall thinning via internal corrosion/erosion; external weld cracking; gasket blowout; physical rupture; complete blockage.
- **Sensors & Instrumentation:** Frozen reading / stuck signal; drift away from calibration; loss of electrical loop power; erratic noisy output; false alarm generation.

---

## 3. Differences / Examples

### Inductive vs. Deductive Safety Analysis
| Dimension | Inductive Safety Analysis (FMEA, HAZOP, ETA) | Deductive Safety Analysis (Fault Tree Analysis - FTA) |
| :--- | :--- | :--- |
| **Reasoning Flow** | **Bottom-Up**: Component cause $\rightarrow$ System effect | **Top-Down**: Catastrophic top event $\rightarrow$ Basic causes |
| **Guiding Question**| *"If this component fails in this mode, what happens?"* | *"What combinations of basic events could cause this top event?"* |
| **Starting Point** | Individual physical components on an equipment list | Undesired system disaster (e.g., explosion, toxic release) |
| **Primary Strength** | Exhaustive single-point failure identification across fleets | Uncovers multi-component concurrent common-cause failures |

### FMEA Identification Worksheet: Centrifugal Boiler Feed Pump Subsystem
| Component | Intended Function | Potential Failure Mode | Potential Failure Causes | Local Effect | Subsystem Effect | End System Effect |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Centrifugal Feed Pump P-101** | Deliver $100\text{ m}^3/\text{h}$ treated boiler feedwater at $60\text{ bar}$ | **Fails to start on demand** | Motor winding burnout; power contactor failure; shaft seized | Pump remains idle; zero discharge pressure | Boiler drum water level begins falling rapidly | Low-low boiler water level trips furnace; steam blackout across plant |
| **Discharge Check Valve NRV-102** | Prevent reverse liquid backflow from boiler into pump casing | **Fails to close (stuck open)** | Particulate scale lodged between disc and seat; hinge pin sheared | High-pressure backflow through check valve | Reverse rotation of idle pump; overpressurization of pump suction piping | Pump casing mechanical rupture; high-temperature water scalding operators |
| **Suction Strainer ST-101** | Filter solid debris $>200\text{ }\mu\text{m}$ upstream of pump inlet | **Completely plugged / clogged** | Heavy ingress of corrosion rust flakes and pipe scale | High differential pressure across strainer basket | Pump cavitation, vapor lock, severe impeller pitting | Loss of feedwater delivery; emergency boiler trip |

---

## 4. Must Remember
- **FMEA is a bottom-up, inductive analysis** tracing how individual component failure modes propagate to produce local, subsystem, and end-system effects.
- Analysis requires an accurate **System Breakdown Structure (SBS)**, decomposing the facility from plant to subsystem, component, and sub-assembly levels.
- A **failure mode** is the physical manifestation of failure (e.g., *"valve stuck open"*, not *"valve is broken"*).
- Every failure mode must be traced through three levels of consequences: **Local Effect $\rightarrow$ Next Higher Level Effect $\rightarrow$ End System Effect**.
- FMEA is exceptionally powerful for identifying **Single Point Failures (SPFs)**—components whose individual failure causes total loss of system functionality without redundant backup.
- Failure Mode Identification is the mandatory technical prerequisite for **Criticality Analysis and Risk Priority Number (RPN)** calculation.
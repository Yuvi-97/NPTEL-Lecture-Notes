# Week 2 – Lecture 4: Failure Modes and Effects Analysis (FMEA)- Identification of Failure Modes

## 1. Key Concepts
- **FMEA Definition:** A structured hazard identification and analysis technique primarily used for equipment and machinery failure analysis.
- **Failure Mode:** The specific way an element, component, or system fails to achieve its intended function.
- **Risk Priority Number (RPN):** A metric used to evaluate and prioritize risks associated with failure modes:
  $$\text{RPN} = \text{Severity} \times \text{Probability} \times \text{Detectability}$$
- **Severity ($S$):** Determined by the consequences/effects of the failure mode.
- **Probability ($P$):** Determined by the underlying causes of the failure mode.
- **Detectability ($D$):** The ability of the system's current controls or design verification processes to detect the failure mode before or when it occurs.

## 2. Important Points
- **FMEA System Breakdown Approaches:**
  - **Hardware Approach (Bottom-up):** System is systematically divided into subsystems, components, and individual parts to review failure modes from the bottom level up.
  - **Functional Approach (Top-down):** Used when hardware cannot be uniquely identified or when high system complexity requires progressive functional analysis.
  - **Hybrid Approach:** Combines bottom-up hardware and top-down functional approaches across different subsystems.
- **FMEA Team Requirements:** FMEA is a team effort requiring design knowledge, system knowledge, hazard knowledge, and practical experience.
- **FMEA Methodology Steps:**
  1. Break down the system to the component level.
  2. Identify all failure modes and screen for potential failure modes.
  3. Determine the effects (Severity) and causes (Probability) for each mode.
  4. Evaluate the system's detection capability (Detectability).
  5. Calculate the RPN for each potential failure mode.
  6. Identify corrective action points for high RPNs (aimed at reducing severity, reducing probability, or improving detectability).
  7. Repeat for all failure modes and document results.

## 3. Differences / Examples
- **HAZOP vs. FMEA:**
  - *HAZOP:* Best suited for continuous process systems; focuses on deviations in process parameters.
  - *FMEA:* Best suited for equipment/machinery hardware; focuses on physical failure modes of components.
- **Failure Mode Examples:**
  - *Human:* Fails to perform task, performs task in wrong sequence, performs wrong task, performs additional task.
  - *Compressor:* External leak, external rupture, fails to start, shuts off while running, operates at degraded performance.
  - *Pressure Control:* Fails with no/low/high output signal, spurious output, fails to respond to input changes.
  - *Relief Valve:* Fails to open on demand, fails to reset, opens prematurely, closes prematurely, plugged.

## 4. Must Remember
- **RPN Formula:** $\text{Severity} \times \text{Probability} \times \text{Detectability}$
- **Core Triad of Analysis:** Cause defines *Probability*, Effect defines *Severity*, and Current Controls define *Detectability*.
- **Primary Domain:** FMEA is the dominant technique for machinery and equipment risk assessment (often utilized in Six Sigma and business risk as well).
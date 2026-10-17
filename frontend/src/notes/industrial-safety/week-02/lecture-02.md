# Week 2 – Lecture 2: Preliminary Hazard Analysis

## 1. Key Concepts
- **Preliminary Hazard Analysis (PHA):** A semi-quantitative, inductive system safety analysis technique performed during the preliminary design phase.
  - *Primary Objective:* Formally evaluate, categorize, and rank the hazards inherited from the Preliminary Hazard List (PHL) by assessing their potential **consequence severity** and **occurrence probability**.
- **The MIL-STD-882D Framework:** The standard system safety engineering protocol providing codified criteria for classifying hazard severity, hazard probability, and establishing risk tolerability decision matrices.
- **Risk Assessment Matrix (RAM):** A two-dimensional evaluation grid combining qualitative/quantitative severity categories and probability levels to assign a discrete **Hazard Risk Index (HRI)** to each identified hazard scenario.
- **Initial Risk vs. Residual Risk:**
  - *Initial Risk:* The unmitigated baseline risk level inherent to the hazard scenario before protective measures are engineered.
  - *Residual Risk:* The remaining risk level after engineered safeguards, safety interlocks, and design modifications have been implemented and verified.

---

## 2. Important Points

### MIL-STD-882D Hazard Severity Categories
Consequences are classified into four discrete ordinal categories based on potential casualty level and asset damage:
- **Category I — Catastrophic:**
  - *Personnel Impact:* Fatality, permanent total disability, or widespread irreversible public health crisis.
  - *Asset & Environmental Loss:* Complete system destruction, plant loss ($>\$10\text{M}$ damage), or severe long-term environmental contamination.
- **Category II — Critical:**
  - *Personnel Impact:* Severe bodily injury, severe occupational illness resulting in permanent partial disability or hospitalization of multiple workers.
  - *Asset & Environmental Loss:* Major system damage requiring extended plant shutdown, or reversible environmental violation.
- **Category III — Marginal:**
  - *Personnel Impact:* Minor injury or occupational illness resulting in lost workdays.
  - *Asset & Environmental Loss:* Moderate system damage requiring localized repairs without total process stoppage; minor mitigable environmental release.
- **Category IV — Negligible:**
  - *Personnel Impact:* First-aid level injury with zero lost workdays.
  - *Asset & Environmental Loss:* Minimal equipment damage; zero off-site environmental excursion.

### MIL-STD-882D Hazard Probability Levels
Occurrence likelihood is categorized into five discrete probability tiers:
- **Level A — Frequent ($P > 10^{-1}$ per operating hour / year):** Continuously or repeatedly experienced in the system fleet lifecycle.
- **Level B — Probable ($10^{-1} \ge P > 10^{-2}$):** Will occur frequently in the operational life of a single system.
- **Level C — Occasional ($10^{-2} \ge P > 10^{-3}$):** Will occur several times during the operational life of an installation.
- **Level D — Remote ($10^{-3} \ge P > 10^{-6}$):** Unlikely, but reasonably expected to occur at least once in a system’s operational life.
- **Level E — Improbable ($P < 10^{-6}$):** So exceedingly unlikely that it can be assumed occurrence will not be experienced in the fleet lifecycle.

### The $4 \times 5$ Hazard Risk Assessment Matrix
Combining Severity Categories (Rows I–IV) and Probability Levels (Columns A–E) yields the Hazard Risk Index (HRI):

| Severity Category | Level A (Frequent) | Level B (Probable) | Level C (Occasional) | Level D (Remote) | Level E (Improbable) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Category I (Catastrophic)** | **High (1A)** | **High (1B)** | **High (1C)** | **Serious (1D)** | **Medium (1E)** |
| **Category II (Critical)**     | **High (2A)** | **High (2B)** | **Serious (2C)** | **Medium (2D)** | **Low (2E)** |
| **Category III (Marginal)**   | **Serious (3A)** | **Medium (3B)** | **Medium (3C)** | **Low (3D)** | **Low (3E)** |
| **Category IV (Negligible)** | **Medium (4A)** | **Low (4B)** | **Low (4C)** | **Low (4D)** | **Low (4E)** |

- **Management Decision Criteria:**
  - *High Risk (Red):* **Unacceptable**. Operations prohibited; mandatory engineering redesign required to lower severity or probability.
  - *Serious Risk (Orange):* **Undesirable**. Requires formal written decision and sign-off by senior executive management before work proceeds.
  - *Medium Risk (Yellow):* **Acceptable with Review**. Tolerable provided existing safeguards are verified and monitored.
  - *Low Risk (Green):* **Acceptable without Review**. Routine operational controls and procedures are sufficient.

---

## 3. Differences / Examples

### Structured PHA Worksheet Execution: Chemical Distillation Column
| Hazard ID | Hazard Description | Causal Factors | System Effects | Initial Severity / Prob | Initial HRI | Engineered Controls / Safeguards | Residual Severity / Prob | Residual HRI |
| :---: | :--- | :--- | :--- | :---: | :---: | :--- | :---: | :---: |
| **PHA-01** | Reboiler runaway overpressure in distillation column | Steam control valve fails $100\%$ open; reflux pump stops | Column overpressure, mechanical shell rupture, hot hydrocarbon release | **Cat I / Level C** | **High (1C)** *(Unacceptable)* | Independent high-pressure trip (SIS) closing steam feed; spring-loaded PSV to flare | **Cat I / Level E** | **Medium (1E)** *(Acceptable)* |
| **PHA-02** | Toxic benzene vapor leak from bottom transfer pump | Mechanical seal face wear, dry running, vibration | Localized toxic vapor cloud; operator inhalation toxicity | **Cat II / Level B** | **High (2B)** *(Unacceptable)* | Tandem dual mechanical seals with pressurized barrier fluid and hydrocarbon gas sniffer detector | **Cat II / Level D** | **Medium (2D)** *(Acceptable)* |

---

## 4. Must Remember
- **Preliminary Hazard Analysis (PHA)** advances PHL by quantitatively/semi-quantitatively evaluating **hazard severity and probability** using **MIL-STD-882D**.
- Hazard severity is divided into four standard categories: **I (Catastrophic)**, **II (Critical)**, **III (Marginal)**, and **IV (Negligible)**.
- Hazard probability spans five discrete tiers: **A (Frequent, $>10^{-1}$)**, **B (Probable)**, **C (Occasional)**, **D (Remote)**, and **E (Improbable, $<10^{-6}$)**.
- The **Hazard Risk Index (HRI)** dictates governance decisions: **High Risk (Unacceptable)** demands mandatory redesign, while **Serious Risk** requires senior management sign-off.
- The objective of safety engineering in PHA is transforming **Initial Unacceptable Risk into Residual Acceptable Risk** through the hierarchy of engineered safeguards.
- PHA documents must trace failure modes from **Causal Mechanisms $\rightarrow$ Immediate System Effects $\rightarrow$ Safeguards $\rightarrow$ Residual Risk Verification**.
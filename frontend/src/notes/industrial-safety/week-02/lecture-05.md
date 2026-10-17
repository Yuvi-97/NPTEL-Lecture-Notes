# Week 2 – Lecture 5: Failure Modes and Effects Analysis (FMEA)-Continue

## 1. Key Concepts
- **Failure Modes, Effects, and Criticality Analysis (FMECA):** An extension of qualitative FMEA that quantitatively ranks and prioritizes identified failure modes based on risk criticality.
- **Risk Priority Number (RPN):** A semi-quantitative numerical metric assessing the relative criticality of an equipment failure mode:
  $$\text{RPN} = \text{Severity } (S) \times \text{Occurrence / Probability } (O) \times \text{Detectability } (D)$$
  - *Numerical Scale:* Each parameter is rated on a discrete integer scale from **$1$ to $10$**, resulting in an RPN range of **$1 \le \text{RPN} \le 1000$**.
- **Detectability Reverse-Scoring Logic:** While higher Severity and Occurrence represent worse outcomes, Detectability is scored inversely:
  - $D = 1$: **Almost Certain Detection** (the failure mode is detected immediately by redundant automated instrumentation before any adverse effect occurs).
  - $D = 10$: **Absolute Uncertainty / Undetectable** (no sensors, alarms, or routine inspections can detect the latent failure before the consequence hits).
- **The Pareto Prioritization Principle in Reliability:** Failure modes are ranked in descending order of RPN; applying the $80/20$ Pareto rule identifies the "vital few" failure modes ($20\%$) responsible for the majority ($80\%$) of overall system risk.

---

## 2. Important Points

### Detailed Ten-Point Rating Criteria for FMECA

#### 1. Severity Rating ($S$)
- **$9 - 10$ (Catastrophic / Hazardous):** Fatality, system loss, regulatory violation without warning ($10$), or with warning ($9$).
- **$7 - 8$ (Critical / High):** Major system disruption, severe injury, permanent impairment, extensive property destruction.
- **$4 - 6$ (Moderate):** Minor to moderate injury, equipment damaged but operable, production downtime.
- **$2 - 3$ (Minor / Low):** Minor inconvenience, slight performance reduction, cosmetic or repairable damage.
- **$1$ (Negligible):** Zero injury, zero effect on system performance.

#### 2. Occurrence / Probability Rating ($O$)
- **$9 - 10$ (Very High / Almost Certain):** Failure is practically inevitable ($P > 10^{-1}$; daily or weekly failures).
- **$7 - 8$ (High):** Frequent failures in operational life ($P \approx 10^{-2}$; monthly failure).
- **$4 - 6$ (Moderate):** Occasional failures experienced ($P \approx 10^{-3} - 10^{-4}$; occurs several times in plant lifespan).
- **$2 - 3$ (Low):** Rare failures ($P \approx 10^{-5}$; isolated instance in fleet history).
- **$1$ (Extremely Remote):** Failure is virtually impossible ($P < 10^{-6}$; highly reliable design).

#### 3. Detectability Rating ($D$)
- **$1 - 2$ (Very High Detection):** Continuous automated monitoring, interlocks, or obvious visual/acoustic alarms alert operators immediately.
- **$3 - 5$ (Moderate Detection):** Detected during routine shift walk-arounds, scheduled weekly maintenance, or gauge reading.
- **$6 - 8$ (Low Detection):** Detected only during annual overhauls, dismantling, or through complex offline non-destructive testing (NDT).
- **$9 - 10$ (Undetectable):** Latent/hidden failure; no design mechanism exists to detect the condition prior to catastrophic failure.

### Strategies for Mitigating High RPN Failure Modes
1. **Lowering Severity ($S$):** The most difficult parameter to reduce; requires fundamental inherent design change (e.g., reducing operating pressure, substituting toxic chemicals with non-hazardous solvents, adding containment dikes).
2. **Lowering Occurrence ($O$):** Engineered through equipment derating, using superior corrosion-resistant alloys, adding redundancy, and enforcing proactive preventive maintenance.
3. **Lowering Detectability Score ($D$):** The most cost-effective intervention; achieved by installing online diagnostic sensors (vibration transmitters, thermal imaging cameras, oil-debris monitors, continuous gas sniffers).

---

## 3. Differences / Examples

### Comprehensive FMECA Worksheet: Industrial Compressed Air Storage System
| Component & Failure Mode | Failure Causes | End Effect | Severity ($S$) | Occurrence ($O$) | Detectability ($D$) | Initial RPN | Recommended Corrective Action | Revised $S, O, D$ | Revised RPN |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :---: | :---: |
| **Air Receiver: Mechanical Shell Rupture** | Internal moisture corrosion; fatigue cracking | Massive overpressure blast, shrapnel projection, fatalities | **$10$** | **$2$** | **$7$** *(internal crack hidden)* | **$140$** | Implement annual ultrasonic thickness (UT) inspection; install automatic drain trap | $10, 1, 3$ | **$30$** |
| **Discharge Line: Minor Flange Leak** | Gasket thermal degradation; bolt torque relaxation | Hissing air leak, compressor runs continuously, energy waste | **$3$** | **$8$** | **$2$** *(easily heard)* | **$48$** | Replace elastomer gasket with spiral-wound metallic gasket during scheduled turnaround | $3, 3, 2$ | **$18$** |
| **Electric Motor: Operates at Degraded Speed** | Partial stator coil short; bearing race pitting | Air delivery falls by $40\%$; pneumatic tools stall plant-wide | **$7$** | **$5$** | **$6$** *(difficult to spot without load meter)* | **$210$** | Install continuous motor current signature analyzer and vibration sensor on bearings | $7, 3, 2$ | **$42$** |
| **Pressure Relief Valve: Fails to Open** | Corrosion buildup; spring seized; port clogged | Vessel overpressures beyond design rating; burst hazard | **$10$** | **$3$** | **$8$** *(dormant until demand)* | **$240$** | Institute statutory semi-annual test bench calibration; install rupture disc with telltale gauge | $10, 1, 2$ | **$20$** |

### Pareto Distribution Analysis of Failure Modes
```
RPN Value
 250 ──┐  [PRV: Fails to Open (240)]
       │  [Motor: Degraded Speed (210)]
 200 ──┤    [Shell Rupture (140)]
       │      \
 100 ──┤       \── Cumulative Risk Curve (80% cutoff)
       │        \  [Flange Leak (48)]
   0 ──┴─────────\──────────────────────── Failure Modes
       Vital Few (Top 20-30%)   |   Trivial Many
```
*Takeaway:* Focusing engineering resources on the top three failure modes (PRV, Motor, Shell) eliminates $>85\%$ of the total cumulative failure risk.

---

## 4. Must Remember
- **Criticality analysis** quantifies FMEA by calculating the **Risk Priority Number**: $\text{RPN} = \text{Severity } (S) \times \text{Occurrence } (O) \times \text{Detectability } (D)$.
- Each parameter ranges from **$1$ to $10$**, giving a total RPN spectrum from **$1$ to $1000$**.
- **Detectability is scored inversely**: a score of $1$ represents near-certain immediate detection, while $10$ represents a completely hidden, undetectable failure.
- A high severity failure mode with low probability can have a lower RPN than a moderate severity mode with poor detectability (e.g., degraded motor performance yielding $\text{RPN} = 210$ vs. shell rupture yielding $\text{RPN} = 140$).
- **Pareto analysis** identifies the vital few failure modes ($20\%$) that generate $80\%$ of total RPN, directing maintenance budgets and inspection resources where they deliver maximum risk reduction.
- After corrective actions are implemented, **Revised RPN** must be calculated to confirm and document the measurable reduction in risk.
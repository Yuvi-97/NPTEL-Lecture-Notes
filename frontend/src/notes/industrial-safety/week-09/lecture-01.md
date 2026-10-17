# Week 9 – Lecture 1: Human Error, Classification and Causes

## 1. Key Concepts

### Human Error in Industrial Production Systems
- **Organizational Hierarchy and Decision Levels:** Industrial operations involve a structured multi-tiered human hierarchy:
  $$\text{Strategic Decision Makers (Board/CEO/MD)} \longrightarrow \text{Line Management (Supervisors/Engineers)} \longrightarrow \text{Operating Workforce (Shop-Floor Execution)}$$
  Human error can occur at every organizational echelon, not merely at the sharp end of worker execution.
- **Latent Failures vs. Active Failures (Reason's Accident Causation Framework):**
  - **Latent Failures (Blunt End):** Underlying organizational deficiencies, fallible strategic decisions, inadequate resource allocation, poor maintenance scheduling, or deficient training programs made by management. They lie dormant in the system like "pathogens" until triggered by local circumstances.
  - **Active Failures (Sharp End):** Unsafe acts (slips, lapses, mistakes, or violations) committed by operators, maintenance technicians, or drivers at the direct human-machine interface. Their negative consequences manifest almost immediately.
- **Formal Academic Definitions of Human Error:**
  - **James Reason (1990):** "A generic term to encompass all those occasions in which a planned sequence of mental or physical activities fails to achieve its intended outcome, when these failures cannot be attributed to the intervention of some chance agency."
  - **US Nuclear Regulatory Commission (NRC):** "An out-of-tolerance action or deviation from the norm where the limits of acceptable performance are defined by the system."

---

## 2. Important Points

### 1. Reason's Swiss Cheese and Production-Accident Model
Accidents occur when active failures breach defense barriers aligned with pre-existing latent failures:

```
[ Fallible Strategic Decisions ]  (Latent failure at corporate level)
              │
              ▼
[ Line Management Deficiencies ]  (Latent failure in training, maintenance, scheduling)
              │
              ▼
[ Psychological Precursors ]      (Job stress, fatigue, severe time pressure, overload)
              │
              ▼
[ Unsafe Acts at Sharp End ]      (Active failure: slips, lapses, mistakes, violations)
              │
              ▼
[ Defeated System Defenses ]  ──> [ ACCIDENT & LOSS ]
```

1. **Fallible Decisions:** Strategic choices prioritizing short-term production quotas over equipment reliability or comprehensive safety training.
2. **Line Management Deficiencies:** Substandard standard operating procedures (SOPs), inadequate work permits, or poorly scheduled maintenance.
3. **Psychological Precursors of Unsafe Acts:** Environmental and cognitive stressors that drastically elevate error probability:
   - High cognitive overload or severe time urgency.
   - Shift worker fatigue and circadian disruption.
   - Ambiguous instrument displays and poor control ergonomics.
4. **Inadequate Defenses:** Missing physical interlocks, absent secondary containment, or failed safety relief devices.

---

### 2. Behavioral Taxonomy of Human Performance and Errors
Human actions are systematically classified based on **intention** and **execution**:

```
                              [ Human Action ]
                                      │
                   Is there prior conscious intention to act?
                               /             \
                             No               Yes
                             /                 \
                  [ Involuntary /         Did actions proceed
                    Spontaneous ]              as planned?
                                              /           \
                                            No             Yes
                                           /                 \
                                  [ Unintended Act ]      Did the plan
                                  (Slips & Lapses)       achieve the goal?
                                                          /             \
                                                        No               Yes
                                                        /                 \
                                                  [ Mistake ]        Was procedure
                                                 (Bad planning)     deliberately defied?
                                                                      /         \
                                                                    Yes          No
                                                                    /             \
                                                              [ Violation ]   [ Success ]
```

- **Unintended Actions (Execution Failures):**
  The user had the correct intention and plan, but physical execution deviated from what was planned:
  - **Slips:** Attentional failures where the physical action is executed wrongly (e.g., intending to press button A, but accidentally pushing adjacent button B).
  - **Lapses:** Memory failures where a planned procedural step is inadvertently omitted (e.g., forgetting to re-open an isolation valve after calibration).
- **Intended Actions (Planning Failures vs. Defiance):**
  The actions proceeded exactly as planned, but:
  - **Mistakes:** The plan itself was fundamentally wrong, inadequate, or misguided (e.g., diagnosing a high-temperature alarm as a sensor malfunction instead of a runaway reaction).
  - **Violations:** Deliberate deviations from established rules, codes, or standard operating procedures (e.g., bypassing an interlock to finish a shift early).

---

## 3. Differences / Examples

### Detailed Comparison: Slips, Lapses, Mistakes, and Violations
| Error Category | Intention to Act | Nature of Failure | Cognitive Level | Industrial Example |
| :--- | :--- | :--- | :--- | :--- |
| **Slip** | Intended correctly | Attentional failure during execution | Skill-based | Operator reaches for cooling water valve but turns the adjacent steam valve |
| **Lapse** | Intended correctly | Memory retrieval failure / omission | Skill-based | Technician completes burner maintenance but forgets to reinstall the flame sensor |
| **Mistake** | Flawed intention | Cognitive reasoning / planning error | Rule-based or Knowledge-based | Control engineer misinterprets rising pressure as sensor drift and resets the threshold |
| **Violation** | Deliberate non-compliance | Intentional deviation from safety SOP | Motivational / Cultural | Maintenance crew bypasses a lockout-tagout (LOTO) padlock to expedite pump overhaul |

---

### Worked Scenario: Pressure Tank Operator Intervention
In a pressurized gas storage system:
1. **Planned Action:** Upon hearing an overpressure alarm, the operator must check the pressure gauge to confirm high pressure, then manually trip the electric contactor to de-energize the compressor pump.
2. **Failure Analysis:**
   - **Slip:** The operator hears the alarm and immediately reaches for the trip switch, but his hand slips and flips the panel lighting switch instead.
   - **Lapse:** The operator reads the gauge, confirms dangerous overpressure, receives an urgent phone call, and forgets to trip the pump contactor.
   - **Mistake:** The operator hears the alarm, checks the gauge, concludes that the vessel can withstand the pressure for another 15 minutes, and decides not to trip the pump.
   - **Violation:** The operator wedges a wooden block under the contactor switch to prevent automatic shutdowns during production trials.

---

## 4. Must Remember

- Human error is defined by James Reason as the failure of planned physical or mental activities to achieve their intended outcome, not attributable to random chance.
- System safety distinguishes between:
  - **Latent Failures:** Organizational, design, and line-management deficiencies lurking in the background.
  - **Active Failures:** Direct unsafe acts committed by operators at the human-machine interface.
- Unsafe acts are partitioned into:
  - **Slips:** Execution errors caused by attentional capture.
  - **Lapses:** Execution errors caused by memory omissions.
  - **Mistakes:** Planning errors where the action proceeds as planned, but the chosen plan is incorrect.
  - **Violations:** Deliberate non-compliance with established rules and operating procedures.
- Effective accident prevention requires addressing the organizational precursors (workload, stress, ergonomics) that induce active failures rather than exclusively blaming frontline operators.

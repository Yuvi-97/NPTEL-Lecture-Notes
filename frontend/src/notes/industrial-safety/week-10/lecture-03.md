# Week 10 – Lecture 3: Control Chart Analysis

## 1. Key Concepts
- **Statistical Process Control (SPC):** Application of statistical methods (pioneered by Walter Shewhart) to monitor industrial operations and identify unwanted deviations in safety performance over time.
- **Common Cause vs. Assignable Cause Variation:**
  - *Common Cause (Inherent/Chance):* Random, background variability inherent to stable plant operations.
  - *Assignable Cause (Special):* Specific, identifiable disruptions (e.g., broken safety barrier, untrained temporary worker, defective batch of PPE) requiring immediate corrective action.
- **Control Limits:** Statistically computed bounds set at $\pm 3\sigma$ from the process average: Centerline ($CL$), Upper Control Limit ($UCL$), and Lower Control Limit ($LCL$).

## 2. Important Points
- **Attribute Control Charts for Safety Data:**
  - **$c$-Chart (Count of Incidents):** Used for count of nonconformities/accidents per constant inspection unit or fixed time period (governed by Poisson distribution):
    $$CL = \bar{c}, \quad UCL = \bar{c} + 3\sqrt{\bar{c}}, \quad LCL = \max(0, \bar{c} - 3\sqrt{\bar{c}})$$
  - **$u$-Chart (Incident Rate):** Used when exposure hours or inspection unit sizes vary between periods:
    $$CL = \bar{u}, \quad UCL = \bar{u} + 3\sqrt{\frac{\bar{u}}{n_i}}, \quad LCL = \max\left(0, \bar{u} - 3\sqrt{\frac{\bar{u}}{n_i}}\right)$$
  - **$p$-Chart (Fraction Defective):** Proportion of unsafe audits or non-compliant equipment (governed by Binomial distribution).
- **Out-of-Control Decision Rules (Western Electric Rules):**
  - Any single point falling outside the $3\sigma$ control limits ($> UCL$ or $< LCL$).
  - A run of $8$ consecutive points on one side of the Centerline.
  - A continuous trend of $6$ consecutive points monotonically increasing or decreasing.

## 3. Differences / Examples
| Chart Type | Underlying Distribution | Sample Size Nature | Typical Safety Metric |
| :--- | :--- | :--- | :--- |
| **$c$-Chart** | Poisson | Constant (e.g., fixed monthly count) | Number of near-misses reported per month |
| **$u$-Chart** | Poisson | Variable (e.g., varying monthly man-hours) | Incident rate per 200,000 man-hours worked |
| **$p$-Chart** | Binomial | Fixed or Variable sample | Proportion of scaffolds failing weekly safety inspection |

## 4. Must Remember
- Points exceeding $UCL$ signal **system degradation** (an assignable failure occurred); points falling below $LCL$ may signal genuine safety improvements or under-reporting of incidents.
- Natural $3\sigma$ control limits encompass $99.73\%$ of data points under normal stable operating conditions.

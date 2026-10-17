# Week 10 – Lecture 3: Control Chart Analysis

## 1. Key Concepts

### Statistical Process Control (SPC) in Safety Engineering
- **Purpose of Safety Control Charts:** Control charts monitor industrial safety performance over time, distinguishing between inherent random fluctuations (**common-cause variation**) and actionable systemic disruptions (**assignable-cause variation**).
- **Common-Cause vs. Assignable-Cause Variation:**
  - **Common-Cause Variation:** Inherent background noise arising from the normal, stable design of the plant, existing tooling, and baseline procedures. It can only be reduced by fundamentally redesigning the system.
  - **Assignable-Cause Variation:** Specific, identifiable deviations resulting from a distinct technical failure, operational shortcut, shift turnover issue, or organizational policy change. Assignable causes demand immediate investigation.
- **The "Higher is Better" vs. "Lower is Better" Safety Duality:**
  - **Number of Incidents (NOI):** A defect metric where **lower is better**. Points plotting above the Upper Control Limit indicate severe safety deterioration.
  - **Time Between Occurrences (TBO):** An operational duration metric where **higher is better**. Points plotting above the Upper Control Limit indicate exceptional safety performance that should be studied and standardized.

---

## 2. Important Points

### 1. Control Chart Architecture and Boundaries
A standard Shewhart-style control chart consists of three horizontal reference lines:

```
  Upper Control Limit (UCL) = Mean + 3σ
  ─────────────────────────────────────────────────────────────

  Center Line (CL)          = Mean (μ or c̄)
  ─────────────────────────────────────────────────────────────

  Lower Control Limit (LCL) = Mean - 3σ (or 0)
  ─────────────────────────────────────────────────────────────
```

- **$\pm 3\sigma$ Limits:** Under normal statistical behavior, $99.73\%$ of observations fall naturally within the $\pm 3\sigma$ control limits.
- **Out-of-Control Diagnostic Rules:**
  1. **Single-Point Rule:** Any single observation plotting outside the control limits ($x > \text{UCL}$ or $x < \text{LCL}$).
  2. **Run Rule:** A run of 7 or 8 consecutive points plotting entirely on one side of the Center Line.
  3. **Trend Rule:** Six or more consecutive points steadily increasing or steadily decreasing.
  4. **Cyclical Pattern:** Systematic recurring oscillations corresponding to shift rotations, seasonal temperature extremes, or weekend operations.

---

### 2. Monitoring Number of Incidents (Poisson $c$-Chart)
When evaluating the discrete count of accidents or near-misses occurring over fixed inspection intervals (e.g., per month), the incident occurrence follows a **Poisson distribution**:
- **Distribution Parameters:** For a Poisson distribution with parameter $\lambda = \bar{c}$, the variance is identically equal to the mean:
  $$\text{Mean } E[c] = \bar{c}, \quad \text{Variance } \sigma^2 = \bar{c} \implies \text{Standard Deviation } \sigma = \sqrt{\bar{c}}$$
- **Control Limits Formulation:**
  $$\text{Center Line (CL)} = \bar{c} = \frac{\sum_{i=1}^m c_i}{m}$$
  $$\text{Upper Control Limit (UCL)} = \bar{c} + 3\sqrt{\bar{c}}$$
  $$\text{Lower Control Limit (LCL)} = \max\left(0, \; \bar{c} - 3\sqrt{\bar{c}}\right)$$
  *(Because incident counts cannot physically be negative, if $\bar{c} - 3\sqrt{\bar{c}} < 0$, the LCL is set to zero).*

---

### 3. Monitoring Time Between Occurrences (TBO Chart)
- **Continuous Lifespan Modeling:** The elapsed operating time between successive incidents is a continuous random variable.
- **Governing Distributions:**
  - **Exponential Distribution:** Applied when incidents occur at a strictly constant hazard rate ($h(t) = \lambda$).
  - **Weibull Distribution:** Applied when equipment aging, wear-out, or infant mortality creates a time-dependent hazard rate.
- **Worked Benchmark Values:**
  In an industrial plant study monitoring time between safety incidents:
  $$\text{UCL} = 51.47 \text{ days}, \quad \text{LCL} = 0.33 \text{ days}$$
  - An observation falling below $0.33 \text{ days}$ indicates an alarming cluster of closely spaced accidents requiring emergency intervention.
  - An observation exceeding $51.47 \text{ days}$ indicates an extraordinary incident-free duration; investigators must examine what exceptional maintenance or operational practices sustained this breakthrough.

---

## 3. Differences / Examples

### Synthesis: Comparison of Safety Control Charts
| Attribute | Number of Incidents Chart ($c$-Chart) | Time Between Occurrences Chart (TBO) |
| :--- | :--- | :--- |
| **Monitored Variable** | Count of incidents per fixed time interval | Elapsed operating duration between incidents |
| **Variable Nature** | Discrete integer count ($0, 1, 2, \dots$) | Continuous operational time ($t > 0$) |
| **Statistical Model** | Poisson distribution | Exponential or Weibull distribution |
| **Center Line (CL)** | $\bar{c}$ | Mean Time to Incident |
| **Control Limits** | $\bar{c} \pm 3\sqrt{\bar{c}}$ | Distribution percentiles ($0.135\%$ and $99.865\%$) |
| **Undesirable Direction** | Plotting **above UCL** (excessive accidents) | Plotting **below LCL** (rapid accident clustering) |
| **Desirable Direction** | Plotting near or at LCL ($0$ accidents) | Plotting **above UCL** (prolonged incident-free run) |

---

### Worked Numerical Example: Monthly Safety $c$-Chart
Over a 12-month period, a chemical refinery logs monthly recordable incident counts:
$$\text{Counts: } 4, 3, 5, 2, 6, 4, 3, 7, 2, 4, 5, 3 \implies \sum_{i=1}^{12} c_i = 48$$
1. **Compute Center Line:**
   $$\text{CL} = \bar{c} = \frac{48}{12} = 4.0 \text{ incidents/month}$$
2. **Compute Standard Deviation:**
   $$\sigma = \sqrt{\bar{c}} = \sqrt{4.0} = 2.0$$
3. **Compute Control Limits:**
   $$\text{UCL} = \bar{c} + 3\sigma = 4.0 + 3(2.0) = 4.0 + 6.0 = \mathbf{10.0 \text{ incidents/month}}$$
   $$\text{LCL} = \max(0, \; \bar{c} - 3\sigma) = \max(0, \; 4.0 - 6.0) = \mathbf{0.0}$$
4. **Evaluation:**
   In month 13, if the plant records 11 incidents, the point breaches the UCL ($11 > 10.0$). This signals an out-of-control assignable cause (e.g., major turnaround contractor mobilization) that cannot be excused as normal random variation.

---

## 4. Must Remember

- Control charts distinguish between stable common-cause variation and actionable assignable-cause variation in industrial safety performance.
- A process is declared statistically out of control if any point plots beyond the $\pm 3\sigma$ limits or exhibits non-random runs (7+ consecutive points on one side of CL).
- For incident counts, the Poisson $c$-chart is defined by:
  $$\text{CL} = \bar{c}, \quad \text{UCL} = \bar{c} + 3\sqrt{\bar{c}}, \quad \text{LCL} = \max(0, \; \bar{c} - 3\sqrt{\bar{c}})$$
- For Time Between Occurrences (TBO), higher values represent superior safety; observations plotting above UCL indicate exceptional safe performance that should be institutionalized.
- Out-of-control signals in safety must prompt immediate technical root-cause investigation rather than treating them as inevitable bad luck.

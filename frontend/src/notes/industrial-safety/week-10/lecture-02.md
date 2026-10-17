# Week 10 – Lecture 2: Accident Investigation & Analysis: Descriptive Analytics

## 1. Key Concepts

### Descriptive Analytics in Safety Engineering
- **Definition & Objective:** Descriptive analytics constitutes the foundational tier of industrial data analytics. It condenses, aggregates, and transforms historical incident and injury databases into structured summaries to answer the essential operational question: **"What has happened in the organization?"**
- **Four Core Statistical Measurement Dimensions:**
  1. **Measures of Frequency:** Incident counts, percentages, and relative frequency distributions across departments or equipment.
  2. **Measures of Central Tendency:** Mean ($\bar{x}$), median (50th percentile), and mode (most frequent occurrence).
  3. **Measures of Dispersion / Variability:** Range ($\text{Max} - \text{Min}$), variance ($\sigma^2$), and standard deviation ($\sigma$).
  4. **Measures of Relative Position:** Percentiles and quartile boundaries ($Q_1, Q_2, Q_3$).
- **Data Taxonomies in Incident Databases:**
  - **Categorical Data:** Discrete labels indicating group identity (e.g., day of week, operating shift, plant division, worker category).
  - **Numerical Data:** Continuous or discrete quantitative measurements (e.g., ambient temperature, worker blood pressure, health rating).

---

## 2. Important Points

### 1. Statistical Analysis of a 500-Record Industrial Incident Dataset
From a comprehensive analysis of 500 historical accident investigation records in a manufacturing plant:

#### A. Categorical Safety Metrics
- **Temporal Analysis (Day of Week & Month):**
  - **Day-of-Week Spikes:** Sundays accounted for **$18.4\%$** of all incidents (highest among all 7 days). This unexpected spike reflects reduced weekend staffing levels, lower supervisory presence, and fatigue during weekend maintenance turnarounds.
  - **Seasonal Variation:** November exhibited an annual peak of **$12.0\%$** of all accidents, correlated with year-end production acceleration to meet annual delivery quotas.
- **Geographic & Departmental Distribution:**
  - **Division 3 Hotspot:** Division 3 alone contributed **$37.8\%$** of all plant incidents, identifying it as the primary departmental hotspot requiring prioritized safety audits and capital safety allocation.
- **Worker Category Vulnerability (Contract vs. Permanent):**
  - Contract workers experienced substantially higher accident frequencies than permanent company employees.
  - **Root Causes:** Frequent labor turnover, inadequate job-specific safety training, unfamiliarity with hazardous plant areas, and communication barriers.
- **Shift Distribution:**
  - The **Evening Shift** exhibited the highest incident concentration due to circadian fatigue, reduced natural lighting, and decreased management supervision compared to morning day-shifts.

---

#### B. Continuous Numerical Health and Environmental Metrics
Statistical profiles of environmental and physiological variables captured at the incident scene ($N = 500$):

| Numerical Parameter | Metric Type | Minimum | Maximum | Sample Mean ($\bar{x}$) | Std Dev ($\sigma$) | Safety Management Interpretation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Working Temperature** | Thermal stress | $30.0^\circ\text{C}$ | $45.0^\circ\text{C}$ | **$37.64^\circ\text{C}$** | $4.63^\circ\text{C}$ | High ambient heat induces heat stress, sweating, dehydration, and decreased cognitive alertness |
| **Worker Health Rating** | Physiological score | $1.0 / 10$ | $10.0 / 10$ | **$5.62 / 10$** | $2.60$ | Median health score indicates suboptimal physical fitness, directly compounding fatigue and error rates |

---

### 2. Actionable Safety Decisions from Descriptive Analytics
1. **Targeting Division 3:** Prioritizing mechanical guarding, process safety reviews, and ergonomic improvements specifically within Division 3.
2. **Revising Contractor Safety Management:** Mandating formal pre-job hazard briefings, verified competency certifications, and pairing inexperienced contract laborers with seasoned permanent employees.
3. **Heat Stress Interventions:** Installing localized ventilation cooling hoods, mandating structured fluid intake breaks, and scheduling heavy physical tasks away from peak temperature hours.
4. **Supervisory Rebalancing:** Increasing supervisory oversight and safety officer walk-throughs during the evening shift and weekend operations.

---

## 3. Differences / Examples

### Categorical vs. Continuous Variables in Incident Reports
| Feature Dimension | Categorical Variables | Continuous Numerical Variables |
| :--- | :--- | :--- |
| **Examples in Incident Logs** | Plant Division, Day of Week, Worker Category, Incident Type | Ambient Temperature, Noise Level, Worker Heart Rate, Health Rating |
| **Applicable Statistics** | Frequency counts, mode, percentage distributions, bar charts | Mean, standard deviation, median, range, histograms |
| **Visual Tools** | Pareto charts, pie charts, cross-tabulation tables | Box-and-whisker plots, scatter plots, control charts |
| **Safety Insight** | Identifies *where*, *when*, and *who* is vulnerable | Quantifies environmental stress and physiological physical load |

---

## 4. Must Remember

- Descriptive analytics summarizes historical incident databases to identify accident patterns, departmental hotspots, and vulnerable worker cohorts.
- Categorical variables are evaluated using counts and percentage frequencies, whereas numerical variables are evaluated using central tendency (mean, median) and dispersion (standard deviation, range).
- Disproportionate contract worker accident rates highlight the critical need for robust contractor safety qualification and verified site onboarding.
- Departmental concentration (e.g., Division 3 contributing $37.8\%$ of incidents) directs capital safety investments where they provide the greatest risk reduction.
- Extreme environmental parameters (such as mean working temperature of $37.6^\circ\text{C}$) serve as physiological precursors that degrade cognitive alertness and trigger unsafe acts.

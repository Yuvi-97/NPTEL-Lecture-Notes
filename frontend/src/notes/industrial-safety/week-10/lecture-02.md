# Week 10 – Lecture 2: Accident Investigation & Analysis: Descriptive Analytics

## 1. Key Concepts
- **Descriptive Analytics:** The branch of safety data analytics that synthesizes historical accident records and incident logs into meaningful summaries, statistical metrics, and visual patterns.
- **Safety Data Distributions:** Analyzing frequency patterns of injuries across time (shift, hour, day of week), spatial locations (plant units), and causal categories.
- **Pareto Principle (80/20 Rule):** The empirical observation that approximately $80\%$ of occupational injuries and lost workdays stem from $20\%$ of vital hazard sources.

## 2. Important Points
- **Measures of Central Tendency & Dispersion:**
  - *Central Tendency:* Mean (average incident rate), Median (central value robust to extreme outliers), Mode (most common injury type).
  - *Dispersion:* Range, Variance ($\sigma^2$), Standard Deviation ($\sigma$), and Interquartile Range (IQR).
- **Core Visualization & Aggregation Tools:**
  - **Pareto Charts:** Combines bar graphs (sorted by frequency) with cumulative percentage lines to highlight the "vital few" hazards requiring immediate capital investment.
  - **Histograms:** Display frequency distribution of continuous safety variables (e.g., lost workdays, worker age).
  - **Cross-Tabulation Matrices:** Examines bivariate relationships between categorical safety attributes (e.g., Department vs. Injury Severity; Shift vs. Accident Type).
  - **Time-Series Plots:** Visualizes monthly accident trends to detect seasonal spikes or post-holiday vigilance drops.

## 3. Differences / Examples
| Metric / Tool | Analytical Focus | Practical Safety Utility |
| :--- | :--- | :--- |
| **Mean vs. Median** | Average value vs. 50th percentile | Median prevents a single catastrophic multi-fatality event from distorting typical trends |
| **Pareto Chart** | Identifies top 20% high-risk failure causes | Directs limited safety budgets toward the most impactful hazard categories |
| **Cross-Tabulation** | Correlates two categorical factors | Reveals vulnerable demographics (e.g., contract workers on night shifts) |

## 4. Must Remember
- Descriptive analytics describes **what happened** in historical records, serving as the necessary foundation for predictive models.
- Pareto analysis ensures safety managers address the high-consequence "vital few" problems rather than scattering resources across the "trivial many".

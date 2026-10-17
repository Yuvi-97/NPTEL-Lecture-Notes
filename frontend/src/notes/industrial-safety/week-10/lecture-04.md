# Week 10 – Lecture 4: Accident Data Analysis: Regression

## 1. Key Concepts

### Predictive Analytics in Safety Management
- **Definition & Purpose:** Predictive analytics employs statistical modeling, data mining, and machine learning algorithms on historical accident records to identify empirical cause-and-effect relationships and forecast future safety performance under changing operational conditions.
- **Predictive Analytics Lifecycle:**
  $$\text{Problem Definition} \longrightarrow \text{Data Collection \& Cleaning} \longrightarrow \text{Model Development} \longrightarrow \text{Validation \& Testing} \longrightarrow \text{Operational Deployment} \longrightarrow \text{Performance Monitoring}$$
- **Regression Analysis in Safety:** A supervised parametric technique that models the mathematical relationship between a continuous safety performance metric (the **dependent variable**, $Y$) and one or more safety initiatives or hazard exposures (the **independent variables**, $X_1, X_2, \dots, X_p$).

---

## 2. Important Points

### 1. Multiple Linear Regression (MLR) Mathematical Model
The general multiple linear regression model relating accident rates to $p$ independent variables is:
$$\boxed{Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3 X_3 + \dots + \beta_p X_p + \epsilon}$$
where:
- **$Y$ (Dependent / Response Variable):** Safety metric of interest (e.g., Number of Incidents / Injuries per Month - NOIM, or Lost-Time Injury Frequency Rate).
- **$X_1, X_2, \dots, X_p$ (Independent / Predictor Variables):** Quantitative safety inputs:
  - $X_1$: Number of formal safety inspections conducted per month.
  - $X_2$: Training intensity (percentage of workforce receiving accredited safety training).
  - $X_3$: Number of unsafe acts and near-misses observed during behavioral audits.
- **$\beta_0$ (Intercept):** Expected baseline accident rate when all predictor variables are zero.
- **$\beta_j$ (Partial Regression Coefficients):** The marginal change in the expected accident rate $Y$ resulting from a 1-unit increase in predictor $X_j$, holding all other predictors strictly constant.
- **$\epsilon$ (Random Error / Residual):** Unmodeled stochastic variation, assumed to be normally and independently distributed with zero mean and constant variance: $\epsilon \sim N(0, \sigma^2)$.

---

### 2. Exploratory Data Analysis via Scatter Plots
Before fitting regression equations, bivariate scatter plots between the dependent variable ($Y$) and each candidate predictor ($X_j$) reveal the underlying functional form and directionality:
- **Safety Inspections ($X_1$) vs. Incident Rate ($Y$):**
  Exhibits a distinct **negative slope** ($\beta_1 < 0$). Proactive physical inspections detect and eliminate mechanical and procedural hazards before they escalate into injuries.
- **Safety Training ($X_2$) vs. Incident Rate ($Y$):**
  Exhibits a **negative slope** ($\beta_2 < 0$). Workforce competency and hazard awareness reduce human execution slips and rule-based mistakes.
- **Observed Unsafe Acts ($X_3$) vs. Incident Rate ($Y$):**
  Exhibits a strong **positive slope** ($\beta_3 > 0$). An elevated frequency of active unsafe acts directly elevates the probability of catastrophic barrier defeat and accident occurrence.

---

### 3. Ordinary Least Squares (OLS) Parameter Estimation
The regression coefficients $\hat{\beta}_0, \hat{\beta}_1, \dots, \hat{\beta}_p$ are estimated by minimizing the **Sum of Squared Errors (SSE)** across $n$ historical observations:
$$\text{SSE} = \sum_{i=1}^n e_i^2 = \sum_{i=1}^n (y_i - \hat{y}_i)^2 = \sum_{i=1}^n \left( y_i - \left[ \hat{\beta}_0 + \sum_{j=1}^p \hat{\beta}_j x_{ij} \right] \right)^2$$
Setting partial derivatives with respect to each $\beta_j$ to zero generates the classical system of normal equations.

---

### 4. Model Goodness-of-Fit and Statistical Significance
1. **Coefficient of Determination ($R^2$):**
   Quantifies the proportion of total variability in accident rates explained by the regression model:
   $$R^2 = \frac{\text{SSR}}{\text{SST}} = 1 - \frac{\text{SSE}}{\text{SST}}$$
   where $\text{SST} = \sum (y_i - \bar{y})^2$ is Total Sum of Squares, and $\text{SSR} = \sum (\hat{y}_i - \bar{y})^2$ is Regression Sum of Squares.
2. **Adjusted $R^2$ ($R_{\text{adj}}^2$):**
   Penalizes the inclusion of non-informative predictors:
   $$R_{\text{adj}}^2 = 1 - \left[ \frac{\text{SSE} / (n - p - 1)}{\text{SST} / (n - 1)} \right]$$
3. **Overall Model Significance (ANOVA $F$-Test):**
   Tests the null hypothesis $H_0: \beta_1 = \beta_2 = \dots = \beta_p = 0$:
   $$F = \frac{\text{MSR}}{\text{MSE}} = \frac{\text{SSR} / p}{\text{SSE} / (n - p - 1)}$$
   A $p$-value $< 0.05$ confirms that the safety predictors collectively have a statistically significant relationship with accident rates.
4. **Individual Coefficient Significance ($t$-Test):**
   Tests whether a specific safety initiative $X_j$ significantly impacts accidents ($H_0: \beta_j = 0$):
   $$t_j = \frac{\hat{\beta}_j}{\text{SE}(\hat{\beta}_j)}$$

---

## 3. Differences / Examples

### Synthesis: Directionality of Safety Regression Predictors
| Safety Predictor Variable ($X_j$) | Expected Coefficient Sign ($\beta_j$) | Physical Mechanism in Industrial Safety |
| :--- | :--- | :--- |
| **Safety Inspections Conducted ($X_1$)** | Negative ($\beta_1 < 0$) | Identifies and remedies physical engineering defects prior to failure |
| **Worker Training Hours ($X_2$)** | Negative ($\beta_2 < 0$) | Enhances cognitive competence, reducing execution slips and mistakes |
| **Observed Unsafe Acts ($X_3$)** | Positive ($\beta_3 > 0$) | Active precursors directly elevate incident likelihood |
| **Excessive Overtime Hours ($X_4$)** | Positive ($\beta_4 > 0$) | Cumulative physiological fatigue impairs cognitive alertness |

---

### Worked Numerical Example: Modeling Monthly Recordable Injuries
Based on 30 months of plant safety records, an OLS regression model was fitted:
$$\widehat{\text{NOIM}} = 12.50 - 0.35 (\text{Inspections}) - 0.15 (\text{Trained \%}) + 0.08 (\text{Unsafe Acts})$$
- **Model Interpretation:**
  - With zero safety initiatives, the plant experiences a baseline expected rate of $12.5$ injuries per month ($\beta_0 = 12.50$).
  - Conducting 10 additional safety inspections per month reduces expected monthly injuries by $3.5$ ($\Delta Y = -0.35 \times 10 = -3.5$).
  - Increasing trained workforce proportion by $20\%$ reduces expected monthly injuries by $3.0$ ($\Delta Y = -0.15 \times 20 = -3.0$).
  - Permitting 50 additional unsafe acts in the shop increases expected monthly injuries by $4.0$ ($\Delta Y = +0.08 \times 50 = +4.0$).

---

## 4. Must Remember

- Multiple linear regression quantifies the relationship between accident frequency ($Y$) and proactive safety management initiatives ($X_j$).
- Ordinary Least Squares (OLS) minimizes the sum of squared residual errors $\sum (y_i - \hat{y}_i)^2$.
- Scatter plots must precede regression modeling to confirm linearity, detect outliers, and establish the directionality of safety relationships.
- Proactive safety initiatives (inspections, training) have negative regression coefficients ($\beta < 0$), whereas hazard exposures (unsafe acts, overtime) have positive coefficients ($\beta > 0$).
- Model explanatory power is assessed via $R^2$ and $R_{\text{adj}}^2$, overall significance via the ANOVA $F$-test, and individual predictor impact via the Student's $t$-test.

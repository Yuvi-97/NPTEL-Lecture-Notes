# Week 10 – Lecture 4: Accident Data Analysis: Regression

## 1. Key Concepts
- **Predictive Analytics:** Statistical modeling used to forecast future safety performance or estimate accident occurrence rates based on historical predictor variables.
- **Linear Regression:** A parametric modeling approach modeling the relationship between a dependent safety metric ($Y$, e.g., lost workdays, incident frequency) and one or more independent variables ($X_1, X_2, \dots, X_p$).
- **Ordinary Least Squares (OLS):** The mathematical criterion that determines regression coefficients by minimizing the Sum of Squared Residuals ($\sum e_i^2$).

## 2. Important Points
- **Multiple Linear Regression (MLR) Formulation:**
  $$Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p + \epsilon$$
  Where $\beta_0$ is the intercept, $\beta_i$ are regression slopes, and $\epsilon \sim N(0, \sigma^2)$ is the random error term.
- **Common Safety Predictor Variables ($X$):**
  - Overtime hours worked, worker training hours, average employee age, plant production rate, ambient temperature, and maintenance backlog.
- **Model Evaluation Metrics:**
  - **Coefficient of Determination ($R^2$):** Proportion of total variance in the safety outcome explained by predictors ($0 \le R^2 \le 1$).
  - **Adjusted $R^2$:** Penalizes the addition of extraneous predictors that do not add explanatory power.
  - **ANOVA $F$-Test:** Tests overall model significance ($H_0: \beta_1 = \beta_2 = \dots = \beta_p = 0$).
  - **$t$-Test on Coefficients:** Evaluates the statistical significance of each individual safety predictor ($p$-value $< 0.05$).
- **Key OLS Assumptions:** Linearity, normality of residuals, homoscedasticity (constant error variance), and independence of errors (verified via Durbin-Watson statistic).

## 3. Differences / Examples
| Metric | Purpose | Interpretation Rule |
| :--- | :--- | :--- |
| **$R^2$** | Goodness-of-fit | Higher is better; measures variance explained |
| **$p$-value of $\beta_i$** | Individual predictor significance | $p < 0.05$ indicates significant impact on safety metric |
| **RMSE** | Forecast error magnitude | Lower is better; measures average prediction error in original units |

## 4. Must Remember
- Correlation does not equal causation: an identified regression association must be validated against engineering and behavioral domain knowledge.
- Multicollinearity between predictors (e.g., overtime hours strongly correlated with total production volume) inflates coefficient standard errors and destabilizes regression models.

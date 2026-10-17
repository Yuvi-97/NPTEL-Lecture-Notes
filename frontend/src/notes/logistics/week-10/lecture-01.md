# Week 10 – Lecture 1: Demand Forecasting

## 1. Key Concepts
- **Demand Forecasting:** The scientific process of estimating future customer demand to guide all upstream production scheduling, inventory stocking, capacity planning, and logistics routing.
- **Three Fundamental Laws of Forecasting:**
  1. *Forecasts are always wrong:* Must incorporate both an expected mean value and an estimate of forecast error (standard deviation / confidence intervals).
  2. *Long-term forecasts are less accurate than short-term forecasts.*
  3. *Aggregate forecasts are significantly more accurate than disaggregate item-level forecasts* (risk pooling dampens standard deviation).

## 2. Important Points
- **Primary Forecasting Methodologies:**
  - **Qualitative Methods:** Expert judgment used when historical data is scarce (Delphi Method, Sales Force Composite, Market Research Surveys).
  - **Quantitative Time-Series Methods:**
    - *Moving Average ($n$ periods):* $F_{t+1} = \frac{A_t + A_{t-1} + \dots + A_{t-n+1}}{n}$
    - *Exponential Smoothing:* Weights recent actual demand against prior forecast using smoothing constant $\alpha \in [0, 1]$:
      $$F_{t+1} = \alpha A_t + (1 - \alpha) F_t = F_t + \alpha(A_t - F_t)$$
- **Standard Forecast Error Metrics:**
  - **Mean Absolute Deviation (MAD):** Average absolute error magnitude:
    $$\text{MAD} = \frac{\sum |A_t - F_t|}{n}$$
  - **Mean Squared Error (MSE):** Penalizes large outlier errors ($\text{MSE} = \frac{\sum (A_t - F_t)^2}{n}$).
  - **Mean Absolute Percentage Error (MAPE):** Scale-independent percentage metric ($\text{MAPE} = \frac{1}{n} \sum \left|\frac{A_t - F_t}{A_t}\right| \times 100\%$).
  - **Tracking Signal (TS):** Monitors forecast bias ($\text{TS} = \frac{\text{Running Sum of Forecast Errors (RSFE)}}{\text{MAD}}$, control limits $\pm 4$).

## 3. Differences / Examples
| Metric | Mathematical Formula | Sensitivity | Key Utility |
| :--- | :--- | :--- | :--- |
| **MAD** | $\frac{1}{n}\sum |e_t|$ | Linear penalty | Calculating safety stock buffer levels |
| **MSE** | $\frac{1}{n}\sum e_t^2$ | Quadratic penalty (harsh on large errors) | Statistical regression optimization |
| **MAPE** | $\frac{1}{n}\sum \left|\frac{e_t}{A_t}\right| \times 100$ | Relative percentage | Comparing accuracy across products with vastly different volumes |

## 4. Must Remember
- High $\alpha$ (e.g., $0.8$) makes exponential smoothing highly reactive to recent sales; low $\alpha$ (e.g., $0.1$) smooths out random noise.
- If the **Tracking Signal** drifts outside $\pm 4$, the forecasting model is structurally biased (consistently over- or under-forecasting) and must be recalibrated.

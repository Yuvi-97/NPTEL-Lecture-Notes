# Week 10 – Lecture 1: Demand Forecasting

## 1. Key Concepts

- **Demand Forecasting:** The scientific process of estimating future customer demand for products and services using historical data, market intelligence, statistical models, and judgmental insights to guide production, inventory, and logistics capacity planning.
- **Forecasting Horizons:**
  - *Short-Range (0 to 3 months):* Guides daily inventory replenishment, truck dispatching, and worker scheduling.
  - *Medium-Range (3 months to 2 years):* Guides aggregate sales and operations planning ($S\&OP$), seasonal inventory buildup, and contract labor staffing.
  - *Long-Range (> 2 years):* Guides strategic facility location, capital equipment investments, and new supply chain network design.
- **Time-Series Components:** The four underlying mathematical components that comprise historical demand data: **Base Trend ($T$)**, **Seasonality ($S$)**, **Cyclical Fluctuations ($C$)**, and **Random Noise / Irregular Variance ($R$)**.
- **The Smoothing Constant ($\alpha$):** A weighting parameter in exponential smoothing ($0 \le \alpha \le 1$) that dictates responsiveness to recent demand shocks vs. historical forecast stability.

---

## 2. Important Points

### Mathematical Formulations of Quantitative Forecasting Models
The lecture details four foundational statistical forecasting models:

#### 1. Simple Moving Average (SMA)
Averages the most recent $k$ periods of actual demand to forecast the next period:

$$F_{t+1} = \frac{\sum_{i=0}^{k-1} A_{t-i}}{k} = \frac{A_t + A_{t-1} + \dots + A_{t-k+1}}{k}$$

- *Property:* Smooths out random noise; larger values of $k$ increase stability but lag behind sharp structural demand shifts.

#### 2. Weighted Moving Average (WMA)
Applies non-uniform percentage weights ($w_i$) to past periods, placing higher emphasis on recent data:

$$F_{t+1} = \sum_{i=1}^{k} (w_i \cdot A_{t-i+1}) \quad \text{where } \sum_{i=1}^{k} w_i = 1.0$$

- *Property:* Responds faster to recent trends than SMA while maintaining noise filtering.

#### 3. Exponential Smoothing (ES)
A sophisticated weighted averaging technique that requires storing only three data points: the last period's forecast ($F_t$), the last period's actual demand ($A_t$), and the smoothing constant ($\alpha$):

$$F_{t+1} = F_t + \alpha (A_t - F_t) = \alpha A_t + (1 - \alpha) F_t$$

- *The Role of $\alpha$:*
  - High $\alpha$ (e.g., $0.7\text{–}0.9$): Highly responsive to recent demand fluctuations; ideal for volatile, innovative products.
  - Low $\alpha$ (e.g., $0.1\text{–}0.3$): Highly stable; filters out random blips; ideal for mature, steady commodity goods.

#### 4. Linear Regression Trend Projection
Models linear long-term demand growth over time:

$$\hat{y} = b_0 + b_1 x$$

- Where $\hat{y}$ is predicted demand, $x$ is the time period index, $b_0$ is the intercept, and $b_1$ is the trend slope.
- **Formulas for Parameters:**

$$b_1 = \frac{n \sum (xy) - (\sum x)(\sum y)}{n \sum (x^2) - (\sum x)^2}$$

$$b_0 = \bar{y} - b_1 \bar{x} = \frac{\sum y - b_1 \sum x}{n}$$

### Qualitative / Judgmental Forecasting Techniques
When historical numerical data is unavailable (e.g., brand-new product launches):
- **Delphi Method:** Iterative, anonymous surveying of an expert panel with controlled feedback until statistical consensus is achieved; eliminates dominant personality bias.
- **Sales Force Composite:** Aggregating bottom-up sales estimates from territory sales representatives who interact directly with customers.
- **Market Research / Consumer Surveys:** Direct consumer polling regarding purchase intent.
- **Executive Committee Consensus:** High-level joint evaluation by cross-functional executives.

---

## 3. Differences / Examples

### Synthesis: Quantitative Forecasting Models

| Forecasting Technique | Primary Advantage | Primary Limitation | Optimal Market Conditions |
|---|---|---|---|
| **Simple Moving Average** | Easy to compute; smooths noise. | Lags behind strong upward/downward trends. | Stable demand with zero trend or seasonality. |
| **Weighted Moving Average**| Flexible; emphasizes recent data. | Requires arbitrary selection of past weights. | Recent demand is more indicative than older data. |
| **Exponential Smoothing** | Minimal data storage; adaptive $\alpha$. | Requires choosing appropriate $\alpha$; lags trends. | Short-term forecasting of high-volume SKUs. |
| **Linear Regression Trend** | Captures steady long-term growth. | Ineffective if underlying demand is non-linear. | Multi-year structural growth or decline trends. |

### Worked Numerical Example: Exponential Smoothing Calculation
- An automotive manufacturer forecasted demand for **120 units** ($F_t = 120$) in March. Actual realized demand in March was **140 units** ($A_t = 140$). Management uses a smoothing constant $\alpha = 0.3$.
- **Forecast for April ($F_{t+1}$):**
  $$F_{\text{April}} = F_{\text{March}} + \alpha (A_{\text{March}} - F_{\text{March}})$$
  $$F_{\text{April}} = 120 + 0.3 \times (140 - 120) = 120 + (0.3 \times 20) = 120 + 6 = \mathbf{126\text{ units}}$$

---

## 4. Must Remember

- Time-series demand data comprises four classical components: **Trend ($T$), Seasonality ($S$), Cyclical ($C$), and Random Noise ($R$)**.
- The **Exponential Smoothing formula** is:
  $$F_{t+1} = \alpha A_t + (1 - \alpha) F_t = F_t + \alpha (A_t - F_t)$$
- The smoothing constant $\alpha$ balances responsiveness and stability: **high $\alpha$ tracks volatile shifts**, while **low $\alpha$ smooths random noise**.
- The **Linear Regression Trend line** is $\hat{y} = b_0 + b_1 x$, with slope $b_1 = \frac{n \sum xy - \sum x \sum y}{n \sum x^2 - (\sum x)^2}$.
- The **Delphi Method** achieves objective expert consensus through **anonymous, multi-round iterative questionnaires**, preventing dominant individuals from biasing estimates.
- Accurate demand forecasting is the primary prerequisite for **capacity planning, inventory control, and Bullwhip Effect suppression**.

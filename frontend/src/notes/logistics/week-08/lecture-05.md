# Week 8 – Lecture 5: Supply Chain Performance: Balanced Scorecard Approach (Contd.)

## 1. Key Concepts

- **Operational SCM Metric Deployment:** The practical implementation of specific statistical and mathematical KPIs across the procurement, fulfillment, and demand forecasting nodes of the Balanced Scorecard.
- **Supplier Rejection Rate:** The percentage of inbound raw materials, parts, or components that fail quality inspection standards and are rejected at the factory receiving dock.
- **Forecast Error:** The numeric deviation between actual realized demand ($A_t$) and forecasted demand ($F_t$) during period $t$:
  $$e_t = A_t - F_t$$
- **Mean Absolute Deviation (MAD):** The statistical average of the absolute values of the individual forecast errors over $n$ periods, measuring overall error magnitude regardless of positive or negative direction.
- **Mean Squared Error (MSE):** The statistical average of the squared forecast errors over $n$ periods, disproportionately penalizing large, severe forecasting blunders.
- **Mean Absolute Percentage Error (MAPE):** The average absolute error expressed as a percentage of actual demand, providing a normalized, scale-free percentage metric comparable across diverse SKU lines.
- **Tracking Signal (TS):** A statistical monitoring metric used to detect persistent directional bias (systematic under-forecasting or over-forecasting) over time.

---

## 2. Important Points

### Mathematical Formulations of Demand Forecasting Error Metrics
The lecture details the core statistical formulas utilized to benchmark demand planning performance:

#### 1. Mean Absolute Deviation (MAD)
Measures the average absolute dispersion:

$$MAD = \frac{1}{n} \sum_{t=1}^{n} |A_t - F_t|$$

- Where $A_t$ is actual demand in period $t$, $F_t$ is forecasted demand, and $n$ is the total number of periods.
- *Property:* Treats a 10-unit error on a low-volume SKU with identical mathematical weight as a 10-unit error on a high-volume SKU.

#### 2. Mean Squared Error (MSE)
Measures variance and severely penalizes major outlier errors:

$$MSE = \frac{1}{n} \sum_{t=1}^{n} (A_t - F_t)^2$$

- *Property:* Squaring amplifies large deviations (e.g., an error of 10 units contributes 100 to MSE, while an error of 2 units contributes only 4). Essential for identifying dangerous supply chain inventory shocks.

#### 3. Mean Absolute Percentage Error (MAPE)
Normalizes error into an intuitive percentage:

$$MAPE = \left( \frac{1}{n} \sum_{t=1}^{n} \left| \frac{A_t - F_t}{A_t} \right| \right) \times 100$$

- *Property:* Dimensionless; allows executive leadership to directly compare forecasting accuracy between expensive capital machinery and low-cost consumer consumables.

#### 4. Tracking Signal (TS)
Monitors whether forecast models are systematically biased:

$$TS_t = \frac{\sum_{i=1}^{t} (A_i - F_i)}{MAD_t} = \frac{\text{Running Sum of Forecast Errors (RSFE)}}{MAD_t}$$

- *Control Limits:* An unbiased forecast produces a Tracking Signal fluctuating near zero. If $TS$ exceeds **$+4$ to $+5$**, the model is persistently **under-forecasting** (risking stockouts); if $TS$ falls below **$-4$ to $-5$**, the model is persistently **over-forecasting** (risking severe excess inventory).

---

## 3. Differences / Examples

### Synthesis: Forecast Error Metrics Comparison

| Metric | Mathematical Formula | Units of Measurement | Key Analytical Characteristic |
|---|---|---|---|
| **MAD** | $\frac{1}{n} \sum \|A_t - F_t\|$ | Same physical units as demand (e.g., kg, pieces). | Measures average absolute error magnitude; linear weighting. |
| **MSE** | $\frac{1}{n} \sum (A_t - F_t)^2$ | Physical units squared ($\text{units}^2$). | **Penalizes large errors heavily**; sensitive to extreme outliers. |
| **MAPE** | $\frac{1}{n} \sum \left\| \frac{A_t - F_t}{A_t} \right\| \times 100$ | **Percentage ($\%$)** | **Scale-free**; allows cross-product benchmarking. |
| **Tracking Signal**| $\frac{\text{RSFE}}{MAD}$ | Dimensionless ratio | **Detects systematic directional bias** (over/under forecasting). |

### Concrete Worked Numerical Problem from the Lecture
- An enterprise tracks actual demand vs. forecasted demand for a key component over 4 consecutive months:

| Month ($t$) | Actual Demand ($A_t$) | Forecast Demand ($F_t$) | Error ($e_t = A_t - F_t$) | Absolute Error ($\|e_t\|$) | Squared Error ($e_t^2$) | Percentage Error ($\|\frac{e_t}{A_t}\| \times 100$) |
|---|---|---|---|---|---|---|
| **Month 1** | 100 | 110 | -10 | 10 | 100 | $\frac{10}{100} \times 100 = 10.0\%$ |
| **Month 2** | 125 | 115 | +10 | 10 | 100 | $\frac{10}{125} \times 100 = 8.0\%$ |
| **Month 3** | 140 | 120 | +20 | 20 | 400 | $\frac{20}{140} \times 100 \approx 14.29\%$ |
| **Month 4** | 95 | 105 | -10 | 10 | 100 | $\frac{10}{95} \times 100 \approx 10.53\%$ |
| **TOTAL** | — | — | **+10 (RSFE)** | **50** | **700** | **42.82%** |

- **Computations:**
  - **MAD:**
    $$MAD = \frac{\sum |e_t|}{n} = \frac{50}{4} = \mathbf{12.5\text{ units}}$$
  - **MSE:**
    $$MSE = \frac{\sum e_t^2}{n} = \frac{700}{4} = \mathbf{175.0\text{ units}^2}$$
  - **MAPE:**
    $$MAPE = \frac{\sum |\text{Percentage Error}|}{n} = \frac{42.82\%}{4} = \mathbf{10.71\%}$$
  - **Tracking Signal (TS at Month 4):**
    $$TS = \frac{\text{RSFE}}{MAD} = \frac{+10}{12.5} = \mathbf{+0.80}$$
    *(Since $+0.80$ is well within the acceptable control limits of $\pm 4.0$, the forecasting model exhibits zero dangerous systematic bias).*

---

## 4. Must Remember

- The standard forecast error is $e_t = A_t - F_t$.
- **Mean Absolute Deviation (MAD)** measures average absolute error magnitude:
  $$MAD = \frac{1}{n} \sum |A_t - F_t|$$
- **Mean Squared Error (MSE)** heavily penalizes large outlier errors by squaring deviations:
  $$MSE = \frac{1}{n} \sum (A_t - F_t)^2$$
- **Mean Absolute Percentage Error (MAPE)** provides a scale-independent percentage metric for cross-category comparison:
  $$MAPE = \frac{1}{n} \sum \left| \frac{A_t - F_t}{A_t} \right| \times 100$$
- The **Tracking Signal (TS)** detects persistent directional bias; values outside the $\pm 4$ to $\pm 5$ control limits indicate systematic under-forecasting or over-forecasting requiring model recalibration.
- High forecasting accuracy directly drives higher **OTIF customer fulfillment** and prevents costly bullwhip oscillations.

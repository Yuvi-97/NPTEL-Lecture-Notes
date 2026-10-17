# Week 5 – Lecture 1: Risk Assessment

## 1. Key Concepts

- **Risk Assessment:** A systematic, formal engineering process of identifying workplace hazards, determining credible accident scenarios, quantifying scenario frequencies ($f_i$) and consequence severities ($C_i$), and evaluating overall risk against statutory or organizational criteria to prioritize risk-reduction decisions.
- **Fundamental Risk Equation:** For any specific accident scenario $i$:
  $$\text{Risk}_i = \text{Frequency}_i \times \text{Consequence}_i = f_i \times C_i$$
- **Risk Aggregation Hierarchy:** Risk is fundamentally calculated at the scenario level and aggregated hierarchically across the organization:
  $$\text{Accident Scenario} \longrightarrow \text{Hazard} \longrightarrow \text{Job} \longrightarrow \text{Location} \longrightarrow \text{Section} \longrightarrow \text{Department} \longrightarrow \text{Organization}$$
- **Individual Risk ($IR$):** The frequency at which an individual located at a specific geographical coordinate $(x, y)$ is expected to sustain fatal harm per year due to plant hazards.
- **Societal Risk ($SR$ / $F\text{-}N$ Curve):** The cumulative relationship between accident frequency ($F$) and the number of fatalities ($N$) occurring in an exposed group or community.
- **ALARP Principle (As Low As Reasonably Practicable):** Regulatory framework establishing three risk bands: **Unacceptable Region** (risk must be reduced regardless of cost), **Tolerable / ALARP Region** (risk must be reduced unless costs are grossly disproportionate to the safety benefit gained), and **Broadly Acceptable Region** (routine monitoring only).

---

## 2. Important Points

### 2.1 The Formal Risk Assessment Process

```
[ Description of Intention & Scope ]
                 │
                 ▼
     [ Hazard Identification ]
                 │
                 ▼
[ Frequency Assessment (FTA / ETA) ]  ◄──►  [ Consequence Assessment ]
                 │                                      │
                 └──────────────► [ Risk Calculation ] ◄┘
                                          │
                                          ▼
                               [ Compare with ALARP ]
                                          │
                  ┌───────────────────────┼───────────────────────┐
                  ▼                       ▼                       ▼
            [ Accept Risk ]         [ Reduce Risk ]        [ Transfer Risk ]
            (Broadly Safe)          (Target Action)        (Least Preferred)
```

1. **Description of Intention:** Define assessment goals (e.g., job safety, process unit layout, facility QRA).
2. **Hazard Identification:** Screen physical hazards using PHA, HAZOP, and FMEA.
3. **Accident Scenario Frequency Modeling:** Determine scenario frequencies ($f_i$ events/year) using Bow-Tie, Fault Tree, and Event Tree cut-sets.
4. **Consequence Severity Estimation:** Quantify physical blast footprints, toxic dispersion zones, or monetary damage.
5. **Comparison Against Targets:** Evaluate against ALARP criteria.
6. **Risk Treatment Decision:** Accept, Reduce (engineering/procedural barriers), or Transfer (e.g., specialized third-party handling; least preferred).

### 2.2 Mathematical Model for Individual Risk ($IR$)
Following the spatial risk methodology formulated by Hendershot (1997):
$$IR(x, y) = \sum_{i=1}^{n} f_i \cdot P_{f,i}(x, y)$$
Where:
- $IR(x, y)$ is the total annual fatality risk at coordinate $(x, y)$ (fatalities/year).
- $f_i$ is the annual frequency of accident scenario $i$.
- $P_{f,i}(x, y)$ is the conditional probability that scenario $i$ produces a fatality at $(x, y)$.

#### Binary Spatial Footprint Assumption:
In industrial screening assessments, a binary damage threshold is commonly applied:
$$P_{f,i}(x, y) = \begin{cases} 1.0, & \text{if } (x, y) \text{ lies inside the hazard/damage footprint of scenario } i \\ 0, & \text{if } (x, y) \text{ lies outside the damage footprint} \end{cases}$$
If an individual working at location $C$ is enveloped by three independent hazard footprints (e.g., Scenarios 2, 3, and 4), their total individual risk is the direct sum of the frequencies of those scenarios:
$$IR_C = f_2 + f_3 + f_4$$

### 2.3 Mathematical Model for Societal Risk ($F\text{-}N$ Curve)
Societal risk measures catastrophe potential involving multiple simultaneous deaths:
1. **Scenario Fatality Count ($N_i$):** For each scenario $i$, sum all persons located within its fatal footprint:
   $$N_i = \sum_{(x,y) \in \text{Footprint}_i} \text{Pop}(x,y)$$
2. **Ascending Rank Ordering:** Arrange all scenarios in increasing order of fatalities: $N_1 < N_2 < \dots < N_m$.
3. **Cumulative Exceedance Frequency ($F(N)$):** For any fatality threshold $N$, sum the frequencies of all scenarios causing $N$ or more fatalities:
   $$F(N) = \sum_{j: N_j \ge N} f_j$$
4. **Log-Log Plotting:** Plot $F(N)$ on the vertical axis against $N$ on the horizontal axis on a logarithmic scale.

---

## 3. Differences / Examples

### 3.1 Comparison: Individual Risk vs Societal Risk

| Parameter | Individual Risk ($IR$) | Societal Risk ($SR$ / $F\text{-}N$ Curve) |
| :--- | :--- | :--- |
| **Perspective** | Spatial vulnerability of a single person at coordinate $(x, y)$ | Collective public / workforce hazard from multi-fatality events |
| **Graphical Display** | **Risk Contours** (iso-risk boundary lines overlaid on a plant plot) | **$F\text{-}N$ Curve** (Log-log cumulative frequency vs. fatality count) |
| **Population Sensitivity** | **Independent of population density** (measures geographical danger) | **Highly sensitive to population density** around the plant |
| **Regulatory Benchmark** | Typical Dutch/HSE public limit: $IR < 10^{-6}/\text{year}$; worker: $10^{-4}$ | Criterion slope lines with slope $-1$ or $-2$ on log-log grid |

---

### 3.2 Worked Numerical Example: Hendershot Plant Risk Assessment

A chemical plant features four distinct accident scenarios with calculated frequencies:
- **Scenario 1 (Gas Emission):** $f_1 = 1.95 \times 10^{-5}\text{/year}$; envelops 3 workers ($N_1 = 3$).
- **Scenario 2 (Low-Impact Fire):** $f_2 = 4.00 \times 10^{-5}\text{/year}$; envelops 1 worker ($N_2 = 1$).
- **Scenario 3 (Explosion):** $f_3 = 4.50 \times 10^{-5}\text{/year}$; envelops 2 workers ($N_3 = 2$).
- **Scenario 4 (High-Impact Fire):** $f_4 = 5.00 \times 10^{-7}\text{/year}$; envelops 4 workers ($N_4 = 4$).

#### Part A: Societal Risk Cumulative Table Construction

| Rank ($j$) | Scenario | Fatalities ($N$) | Scenario Freq ($f_j$) | Cumulative Frequency $F(N) = \sum_{N_j \ge N} f_j$ |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Scenario 2 | **1** | $4.00 \times 10^{-5}$ | $F(1) = f_2 + f_3 + f_1 + f_4 = \mathbf{1.05 \times 10^{-4}}$ |
| 2 | Scenario 3 | **2** | $4.50 \times 10^{-5}$ | $F(2) = f_3 + f_1 + f_4 = \mathbf{6.50 \times 10^{-5}}$ |
| 3 | Scenario 1 | **3** | $1.95 \times 10^{-5}$ | $F(3) = f_1 + f_4 = \mathbf{2.00 \times 10^{-5}}$ |
| 4 | Scenario 4 | **4** | $5.00 \times 10^{-7}$ | $F(4) = f_4 = \mathbf{5.00 \times 10^{-7}}$ |

#### Part B: Interpretation
- The frequency of experiencing **at least 1 fatality** is $1.05 \times 10^{-4}$ per year (~1 event in 9,500 years).
- The frequency of experiencing a catastrophic accident with **4 or more fatalities** drops to $5.00 \times 10^{-7}$ per year (~1 event in 2,000,000 years).
- When comparing departments ($D_1$ vs $D_2$), a department whose $F\text{-}N$ curve sits lower and further left on the log-log plot exhibits superior societal safety performance.

---

## 4. Must Remember

- **Risk Product:** Risk is not merely the chance of an event; it is the mathematical product of scenario frequency and consequence loss ($Risk = f \times C$).
- **Calculation Base:** All enterprise risk assessments originate at the **Accident Scenario** level before being aggregated into job, section, or department scores.
- **Individual vs. Societal Distinction:**
  - **Individual Risk** is location-specific and does not change whether 1 person or 100 people stand at that coordinate.
  - **Societal Risk** scales directly with population exposure, reflecting societal aversion to multi-fatality disasters.
- **Cumulative Nature of $F\text{-}N$ Curve:** $F(N)$ represents the probability of $N$ **or more** fatalities; values must strictly decrease or stay constant as $N$ increases.
- **ALARP Decision Rule:** In the ALARP region, the legal burden rests upon the plant owner to demonstrate that further risk-reduction measures are economically and technically disproportionate to the lives saved.

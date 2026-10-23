# NPTEL Logistics and Supply Chain Management — Week 10 Consolidated Notes
**Course Title:** Logistics and Supply Chain Management  
**Weeks Covered:** Week 10 (Lectures 45 to 51)  
**Topics:** Quantitative Forecasting & Time Series Models; Strategic Capacity Planning & Break-Even Analysis; Operational Sequencing & Scheduling (Single-Machine Heuristics, Johnson's Rule); Transportation Management & Freight Economics; Linear Programming Transportation Problems (IBFS: NWCR, LCM, VAM); Optimality Testing (MODI $u-v$ Method & Stepping-Stone); The Assignment Problem & The Hungarian Algorithm  

---

# SECTION A: Consolidated Theory

Week 10 bridges strategic supply chain network planning and shop-floor execution by examining the core quantitative mathematical models and operations research algorithms that govern operational decision-making in logistics. The curriculum progresses systematically through six interconnected analytical pillars: **Demand Forecasting $\rightarrow$ Capacity Planning $\rightarrow$ Sequencing & Scheduling $\rightarrow$ Transportation Infrastructure & Economics $\rightarrow$ Transportation Matrix Optimization $\rightarrow$ Assignment Combinatorial Optimization**.

```
┌─────────────────────────────────────────────────────────────────────────┐
│              WEEK 10 QUANTITATIVE DECISION HIERARCHY                    │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
                   [ 1. DEMAND FORECASTING (L45) ]
          Estimates future customer volume across time horizons
                   (SMA, WMA, Exponential Smoothing, Trend)
                                   │
                                   ▼
                   [ 2. CAPACITY PLANNING (L46) ]
      Determines physical throughput limits & facility scaling strategy
               (Design vs. Effective Capacity, Cushion, BEP)
                                   │
                                   ▼
                [ 3. SEQUENCING & SCHEDULING (L47) ]
      Allocates operational jobs across workstations & machine lines
         (FCFS, SPT, EDD, Critical Ratio, Johnson's 2-Machine Rule)
                                   │
                                   ▼
               [ 4. TRANSPORTATION MANAGEMENT (L48) ]
       Selects physical freight modes, legal documentation & tariffs
        (Road, Rail, Maritime, Air, Pipeline, Intermodal, BOL)
                                   │
                                   ▼
            [ 5. TRANSPORTATION PROBLEM PROGRAMMING (L49-50) ]
       Optimizes multi-source to multi-destination freight allocations
              (IBFS: NWCR, LCM, VAM  ──► Optimality: MODI u-v)
                                   │
                                   ▼
             [ 6. ASSIGNMENT PROBLEM PROGRAMMING (L51) ]
       Optimizes 1-to-1 matching of resources to discrete jobs/routes
                     (Hungarian Kuhn-Munkres Algorithm)
```

---

## 1. Demand Forecasting & Time-Series Models (Lecture 45)

### 1.1 Conceptual Foundations and Planning Horizons
**Demand Forecasting** is the scientific discipline of projecting future customer demand for products, services, and freight volume using historical time-series data, market intelligence, econometric models, and judgmental insights. It serves as the primary driver for all push-based manufacturing, distribution scheduling, and inventory safety buffering.

Forecasting decisions operate across three distinct organizational horizons:
1. **Short-Range Horizons (0 to 3 Months):** Guides daily dispatching, delivery vehicle scheduling, warehouse worker shift staffing, production machine setup, and continuous-review inventory reorders. Heavily relies on quantitative smoothing techniques.
2. **Medium-Range Horizons (3 Months to 2 Years):** Dictates Aggregate Sales and Operations Planning ($S\&OP$), seasonal inventory pre-building, subcontracting agreements, shift additions, and raw material purchase contracts. Combines quantitative trend models with executive oversight.
3. **Long-Range Horizons (> 2 Years):** Drives structural supply chain network design, new factory and mega-distribution center location selections, strategic facility acquisitions, capital machinery investment ($CapEx$), and technology transitions. Heavily relies on qualitative and macroeconomic Delphi methods.

### 1.2 Classical Components of Time-Series Demand
Historical demand data represents a composite signal decomposed into four structural components:
- **Base Trend ($T$):** The persistent, long-term upward or downward movement of demand over multiple years resulting from population growth, demographic shifts, economic expansion, or secular technological adoption.
- **Seasonality ($S$):** Regular, recurring, periodic demand fluctuations repeating at fixed calendar intervals (e.g., weekly grocery surges on weekends, annual winter jacket sales spikes, agricultural harvest peaks).
- **Cyclical Fluctuations ($C$):** Multi-year wave-like macroeconomic expansions and contractions (business cycles, interest rate cycles) lacking fixed periodicity, typically spanning 2 to 10 years.
- **Random Noise / Irregular Variance ($R$):** Unpredictable, erratic demand disturbances caused by localized weather events, labor strikes, unexpected equipment breakdowns, or transient consumer behavior. The primary objective of statistical smoothing models is to filter out random noise without lagging behind true structural trend shifts.

### 1.3 Quantitative Statistical Forecasting Formulations
When historical numeric demand records exist, four foundational mathematical formulations are applied:

#### 1. Simple Moving Average (SMA)
Averages the actual realized demand of the most recent $k$ consecutive operating periods to project the upcoming period:
$$F_{t+1} = \frac{\sum_{i=0}^{k-1} A_{t-i}}{k} = \frac{A_t + A_{t-1} + \dots + A_{t-k+1}}{k}$$
- **Operational Trade-Off:** Larger values of $k$ increase smoothing power and suppress random noise but introduce significant mathematical lag when the underlying demand experiences a structural trend shift. Smaller values of $k$ respond rapidly but overreact to random spikes.

#### 2. Weighted Moving Average (WMA)
Eliminates the uniform-weighting limitation of SMA by assigning customized percentage weights ($w_i$) to past periods, placing higher mathematical emphasis on recent observations:
$$F_{t+1} = \sum_{i=1}^{k} (w_i \cdot A_{t-i+1}) \quad \text{subject to} \quad \sum_{i=1}^{k} w_i = 1.0$$
- Allows planners to reflect market dynamics where recent sales are far more predictive than older history.

#### 3. Single Exponential Smoothing (SES)
A weighted moving average model requiring the storage of only three variables: the previous period's forecast ($F_t$), the previous period's actual realized demand ($A_t$), and an empirically selected **Smoothing Constant** ($\alpha$, where $0 \le \alpha \le 1$):
$$F_{t+1} = F_t + \alpha (A_t - F_t) = \alpha A_t + (1 - \alpha) F_t$$
- **Role of $\alpha$:**
  - **High $\alpha$ ($0.7 \text{ to } 0.9$):** Places heavy weight on the latest actual demand shock ($A_t$). Suitable for highly responsive supply chains managing innovative, high-volatility, or promotional goods.
  - **Low $\alpha$ ($0.1 \text{ to } 0.3$):** Places heavy weight on historical continuity ($F_t$). Suitable for efficient supply chains managing mature, stable commodities with high random noise.

#### 4. Linear Regression Trend Projection
Models structural, steady multi-period demand growth over time:
$$\hat{y} = b_0 + b_1 x$$
Where $\hat{y}$ is projected demand, $x$ is the chronological period index, $b_1$ is the trend slope, and $b_0$ is the intercept:
$$b_1 = \frac{n \sum (xy) - (\sum x)(\sum y)}{n \sum (x^2) - (\sum x)^2}, \quad b_0 = \bar{y} - b_1 \bar{x} = \frac{\sum y - b_1 \sum x}{n}$$

### 1.4 Qualitative / Judgmental Forecasting Methods
When historical quantitative data is absent (e.g., launching an unprecedented product innovation or entering an unmapped territory):
- **Delphi Method:** A structured, multi-round communication process where a panel of independent domain experts completes anonymous questionnaires. A facilitator compiles summary statistics and returns controlled feedback across rounds until convergence and statistical consensus emerge. Eliminates the bandwagon effect, groupthink, and dominant executive biases.
- **Sales Force Composite:** Aggregates bottom-up territorial demand estimates submitted by regional sales agents who directly interface with industrial buyers.
- **Consumer Surveys / Market Research:** Direct consumer polling, focus groups, and test-market trials evaluating stated purchase intent.
- **Executive Committee Consensus:** Cross-functional consensus derived by pooling high-level insights from operations, marketing, finance, and engineering leaders.

---

## 2. Capacity Planning & Facility Scaling (Lecture 46)

### 2.1 The Capacity Hierarchy
**Capacity** defines the upper limit on the rate of throughput or finished production that an operating system (workstation, plant, warehouse, cross-dock, transport fleet) can sustain over a designated time frame.

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CAPACITY SPECTRUM MEASURES                        │
└────────────────────────────────────────────────────────────────────────┘
 [ DESIGN CAPACITY ]      Theoretical maximum under 100% ideal conditions
        │                  (Assumes 24/7 uptime, 0 setups, 0 maintenance)
        ▼
 [ EFFECTIVE CAPACITY ]   Realistic sustainable maximum under normal operations
        │                  (Accounts for maintenance, setups, breaks, scrap)
        ▼
 [ ACTUAL OUTPUT ]        Realized units produced during operating period
                           (Always constrained: Output ≤ Effective ≤ Design)
```

1. **Design Capacity (Theoretical Peak Capacity):** The maximum conceivable theoretical output rate achievable under flawless laboratory conditions—operating 24 hours a day, 7 days a week, with zero machine breakdowns, zero product changeovers, zero maintenance shutdowns, zero material shortages, and zero human fatigue.
2. **Effective Capacity (Normal Operating Capacity):** The realistic, sustainable maximum output rate that an operation can deliver under standard industrial conditions. Incorporates scheduled preventive maintenance, changeover and setup times, operator meal breaks, normal scrap rates, and product mix shifts.
3. **Actual Output:** The realized volume of finished units produced and dispatched during a specific historical operating period. **Actual Output can never exceed Effective Capacity under standard continuous operations**.

### 2.2 Operational Performance Metrics
The relationship between these capacity levels provides two fundamental diagnostic ratios:
- **Capacity Utilization:** Evaluates capital asset deployment relative to theoretical engineering limits:
  $$\text{Utilization (\%)} = \left( \frac{\text{Actual Output}}{\text{Design Capacity}} \right) \times 100$$
- **Capacity Efficiency:** Evaluates operational management execution relative to realistic standard targets:
  $$\text{Efficiency (\%)} = \left( \frac{\text{Actual Output}}{\text{Effective Capacity}} \right) \times 100$$
- **Capacity Cushion:** The reserve capacity maintained above expected average demand to absorb sudden volume surges or equipment breakdowns:
  $$\text{Capacity Cushion} = 100\% - \text{Utilization (\%)} = \frac{\text{Capacity} - \text{Average Demand}}{\text{Capacity}} \times 100$$

### 2.3 Strategic Capacity Expansion Archetypes
Organizations employ three strategic timing policies when adding capacity relative to growing market demand:

```
CAPACITY
  ▲
  │            ┌─────────────────┐
  │            │  LEAD STRATEGY  │  (Capacity strictly leads demand curve)
  │       ┌────┘                 └────┐
  │       │     [ DEMAND CURVE ]      │
  │       │                           │
  │       │    ┌─────────────────┐    │
  │       └────┘  LAG STRATEGY   │    │  (Capacity strictly lags demand curve)
  │            └─────────────────┘    │
  └───────────────────────────────────┴────────────────────────► TIME
```

1. **Lead Strategy (Proactive Capacity Expansion):**
   - *Mechanics:* Adds large, lumpy capacity blocks in advance of forecasted demand growth.
   - *Advantages:* Protects market share during demand surges, prevents lost sales, maintains high customer responsiveness, and erects high barriers to entry deterring competitors.
   - *Risks:* High capital carrying costs and severe financial loss from idle overhead if projected demand fails to materialize.
2. **Lag Strategy (Conservative Capacity Expansion):**
   - *Mechanics:* Expands capacity in small increments only after realized customer demand consistently outstrips existing capacity over sustained periods.
   - *Advantages:* Guarantees high asset utilization (near 100%), maximizes return on invested capital ($ROIC$), and minimizes financial downside risks.
   - *Risks:* Generates chronic stockouts, forces long customer wait times, incurs expensive premium freight expediting, and permanently surrenders market share to aggressive competitors.
3. **Match / Tracking Strategy (Incremental Capacity Expansion):**
   - *Mechanics:* Scales capacity in frequent, moderate increments that closely follow the realized demand trendline, attempting to balance utilization against stockout risk.

### 2.4 Capacity Break-Even Analysis ($BEP$)
When evaluating facility sizing or alternative manufacturing technology options (e.g., highly automated capital-intensive facility vs. manual flexible facility):
$$\text{Total Cost } (TC) = FC + (VC \cdot Q)$$
$$\text{Total Revenue } (TR) = P \cdot Q$$
The **Break-Even Quantity ($Q_{BEP}$)** is the volume at which total revenues precisely offset total costs:
$$Q_{BEP} = \frac{FC}{P - VC}$$
Where $(P - VC)$ is the **Unit Contribution Margin**.

---

## 3. Operational Sequencing & Scheduling (Lecture 47)

### 3.1 Sequencing Terminology and Metrics
- **Scheduling:** The operational allocation of shared organizational resources (workstations, loading docks, forklifts, labor crews) to specific chronological calendar time slots.
- **Sequencing:** The determination of the exact priority execution order of waiting jobs or shipment orders at a specific shared workstation.
- **Flow Time ($F_i$):** The total elapsed time a job spends inside the operating facility from the moment it arrives until processing is finalized:
  $$\text{Flow Time } (F_i) = \text{Completion Time } (C_i) - \text{Arrival Time } (r_i)$$
- **Makespan:** The total elapsed clock time required to complete an entire batch of $n$ jobs, measured from the start of the first job on the first machine to the final completion of the last job on the terminal machine:
  $$\text{Makespan} = \max(C_1, C_2, \dots, C_n) - \min(S_1, S_2, \dots, S_n)$$
- **Lateness ($L_i$) vs. Tardiness ($T_i$):**
  - *Lateness ($L_i = C_i - d_i$):* Can take positive values (late) or negative values (completed ahead of promised due date $d_i$).
  - *Tardiness ($T_i = \max(0, C_i - d_i)$):* Measures strictly non-negative delay penalty. If completed early or on time, $T_i = 0$.

### 3.2 Single-Machine Priority Sequencing Rules
When $n$ distinct jobs await processing at a single bottleneck workstation, five priority dispatching heuristics are applied:

1. **First-Come, First-Served (FCFS):**
   - Dispatches jobs in strict chronological arrival order.
   - *Behavior:* Perceived as fair by human customers; requires zero computation; performs poorly on average flow time, average WIP inventory, and tardiness.
2. **Shortest Processing Time (SPT):**
   - Sequences jobs in ascending order of processing time ($p_1 \le p_2 \le \dots \le p_n$).
   - *Mathematical Property:* **Provably minimizes average job flow time, minimizes average Work-in-Process (WIP) inventory, and maximizes the number of jobs completed per unit time**.
   - *Limitation:* Heavily penalizes long jobs, which may experience chronic starvation if short jobs continuously arrive.
3. **Longest Processing Time (LPT):**
   - Sequences jobs in descending order of processing time; utilized primarily in multi-server operations to balance workloads across parallel assembly lines.
4. **Earliest Due Date (EDD):**
   - Sequences jobs in ascending order of promised delivery due dates ($d_1 \le d_2 \le \dots \le d_n$).
   - *Mathematical Property:* **Provably minimizes the maximum job tardiness ($\max T_i$) across the batch**.
5. **Critical Ratio (CR):**
   - A dynamic, real-time priority index calculated as remaining allowable time divided by remaining required work:
     $$CR = \frac{\text{Due Date} - \text{Current Date}}{\text{Remaining Processing Time}} = \frac{d_i - t}{p_i}$$
   - *Decision Priority Protocol:*
     - Always dispatch the job with the **lowest Critical Ratio first**.
     - If $CR < 1.0$: Job is **behind schedule**; will miss its due date unless expedited.
     - If $CR = 1.0$: Job is **exactly on schedule**; zero slack margin.
     - If $CR > 1.0$: Job is **ahead of schedule**; possesses positive operational slack.

### 3.3 Johnson’s Rule for Sequencing $n$ Jobs on 2 Sequential Machines
When $n$ distinct jobs must all flow through Machine 1 ($M_1$) and then Machine 2 ($M_2$) in strict sequence, **Johnson’s Rule** provides an exact, mathematically optimal sequence that **minimizes total makespan and minimizes total machine idle time**.

#### The 5-Step Johnson's Algorithm:
1. Compile a table listing all $n$ jobs alongside their respective processing times on $M_1$ and $M_2$.
2. Scan the entire table to locate the **absolute minimum processing time** among all currently unassigned jobs.
3. **The Assignment Placement Rule:**
   - If the minimum time lies on **Machine 1 ($M_1$)**, place that job in the **earliest available slot (leftmost position)** of the sequence.
   - If the minimum time lies on **Machine 2 ($M_2$)**, place that job in the **latest available slot (rightmost position)** of the sequence.
4. *Tie-Breaking:* If tied on the same machine, select arbitrarily. If tied between $M_1$ and $M_2$, place the $M_1$ job at the beginning and the $M_2$ job at the end.
5. Cross off the assigned job from the table and repeat Steps 2 through 4 until all $n$ jobs are fully scheduled.

---

## 4. Transportation Management & Freight Economics (Lecture 48)

### 4.1 Value Creation and Core Transportation Modes
Transportation creates two essential spatial-temporal economic utilities:
- **Place Utility:** Ensuring commodities are moved from points of surplus to locations where customer demand exists.
- **Time Utility:** Ensuring cargo arrives punctually when demanded.

The freight logistics network relies on five fundamental physical modes:
1. **Road Haulage (Trucking):** Provides 100% door-to-door physical accessibility, rapid short-haul transit, and highly flexible dispatching. Suffers from high variable costs (fuel, highway tolls, driver wages), weight/volume restrictions, highway congestion, and safety risks. Dominates India's domestic freight movement (**70%–75% of total freight volume**).
2. **Rail Transportation:** High carrying capacity, superior fuel efficiency, and low carbon footprint per ton-km. Highly optimized for long-distance, high-volume bulk commodities (coal, iron ore, cement, food grains). Constrained by fixed track infrastructure, rail-yard switching delays, and dependency on road drayage for last-mile pickup/delivery.
3. **Maritime / Inland Waterway Shipping:** The absolute lowest-cost freight mode per ton-km ($\approx \text{Rs. } 0.25/\text{ton-km}$), offering massive cargo payload capability. Characterized by the slowest transit velocity, port draft limitations, and vulnerability to severe weather.
4. **Air Cargo:** Maximum transit velocity, highest security, and lowest transit damage rates; dramatically compresses pipeline inventory holding costs. Constrained by prohibitive freight tariffs and strict payload weight/cube limitations (represents $< 1\%$ of global tonnage, but $> 30\%$ of global freight value).
5. **Pipeline:** Continuous 24/7 subterranean fluid and gas movement (crude oil, refined fuels, natural gas, slurry). Unaffected by weather or surface traffic; lowest operating labor cost. Incurs massive upfront capital construction cost ($CapEx$) and is restricted to fixed endpoint geographies.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                 COMPARATIVE FREIGHT TARIFF HIERARCHY                    │
└─────────────────────────────────────────────────────────────────────────┘
  Inland Waterways (Rs. 0.25/t-km) < Railways (Rs. 1.50/t-km) < Roadways (Rs. 2.50/t-km)
  ▲                                                                 ▲
  Lowest Freight Cost / Highest Payload           Highest Flexibility / Door-to-Door
```

### 4.2 Legal and Administrative Freight Documentation
- **Bill of Lading (BOL):** The paramount legal document governing freight movement. Serves three concurrent legal functions:
  1. *Receipt of Goods:* Formal confirmation that the carrier received cargo in apparent good condition.
  2. *Contract of Carriage:* Specifies freight terms, transit responsibilities, liabilities, and route agreements.
  3. *Document of Title:* A negotiable legal instrument transferring ownership of the cargo to the consignee upon endorsement.
- **Freight Bill:** The carrier's financial invoice detailing all line-haul charges, fuel surcharges ($FSC$), demurrage/detention penalties, and accessorial fees.
- **Freight Claim:** A legal demand filed by the cargo owner seeking financial reimbursement for loss, damage, theft, or unreasonable transit delays.

### 4.3 Carrier Freight Tariff Structures
Carriers establish freight tariffs via three primary pricing frameworks:
1. **Class Rates:** Standardized baseline rates categorizing thousands of manufactured SKUs into uniform freight classes based on four transportation characteristics: **Density** (weight per cubic foot), **Stowability** (cube utilization and stackability), **Ease of Handling** (fragility and packaging), and **Liability** (theft, spoilage, or hazardous risk).
2. **Exception Rates:** Special negotiated discounts or rate exceptions established below standard class rates to reflect intense carrier competition or unique high-volume corridors.
3. **Commodity Rates:** Direct, specialized low-cost point-to-point tariff rates established for continuous, high-volume bulk commodities moving on dedicated unit trains or chartered vessels.

---

## 5. Linear Programming Transportation Problems (Lectures 49 & 50)

### 5.1 Mathematical Formulation of the Transportation Problem (TP)
The Transportation Problem is a specialized linear programming formulation that determines the cost-minimizing distribution pattern from $m$ supply origins (factories/warehouses) to $n$ demand destinations (distribution centers/markets).

- **Parameters:**
  - $m$ supply origins with available capacities $a_1, a_2, \dots, a_m$.
  - $n$ demand destinations with requirements $b_1, b_2, \dots, b_n$.
  - $c_{ij}$: Unit transportation cost from origin $i$ to destination $j$.
- **Decision Variables:**
  - $x_{ij}$: Number of physical units shipped from origin $i$ to destination $j$ ($x_{ij} \ge 0$).
- **Objective Function:**
  $$\text{Minimize } Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij}$$
- **Subject to Rim Constraints:**
  - *Supply Constraints (Row Limits):* $\sum_{j=1}^{n} x_{ij} = a_i \quad \forall i = 1, \dots, m$
  - *Demand Constraints (Column Limits):* $\sum_{i=1}^{m} x_{ij} = b_j \quad \forall j = 1, \dots, n$
  - *Non-negativity:* $x_{ij} \ge 0 \quad \forall (i, j)$

### 5.2 Balance and Non-Degeneracy Conditions
- **Balanced Transportation Problem:** Total supply equals total demand:
  $$\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$$
- **Unbalanced Problem Resolution:**
  - If Total Supply $>$ Total Demand: Introduce a **Dummy Destination** with demand $b_{\text{dummy}} = \sum a_i - \sum b_j$ and zero shipping costs ($c_{i, \text{dummy}} = 0$).
  - If Total Demand $>$ Total Supply: Introduce a **Dummy Origin** with capacity $a_{\text{dummy}} = \sum b_j - \sum a_i$ and zero shipping costs ($c_{\text{dummy}, j} = 0$).
- **Rim Condition for Non-Degeneracy:** An Initial Basic Feasible Solution (IBFS) in an $m \times n$ matrix is non-degenerate if and only if:
  1. The total number of allocated basic cells equals exactly:
     $$\text{Number of Allocated Cells} = m + n - 1$$
  2. These allocated cells occupy independent, non-looping positions.

### 5.3 Three Algorithms for Finding an Initial Basic Feasible Solution (IBFS)
1. **North-West Corner Rule (NWCR):** Purely positional; starts at cell $(1,1)$ in the upper-left corner. Allocates $\min(a_1, b_1)$, satisfies the row or column, and shifts systematically down or right. **Completely ignores unit transportation costs ($c_{ij}$)**; produces a valid starting solution that is almost always far from optimal.
2. **Least Cost Method (LCM / Matrix Minimum Method):** A greedy cost heuristic. Scans the entire matrix for the absolute lowest unit cost $c_{ij}$, allocates $\min(a_i, b_j)$, crosses out the satisfied row or column, and repeats among remaining cells. Yields a significantly better starting cost than NWCR.
3. **Vogel’s Approximation Method (VAM / Penalty Method):** Computes the **Opportunity Cost / Penalty** for each row and column (calculated as the absolute difference between the lowest and second-lowest cost elements). Selects the row or column displaying the **maximum penalty**, and allocates maximum possible units to the **lowest cost cell** in that selected row/column. **Consistently generates the best starting IBFS**, often identical or extremely close to the true global optimum.

### 5.4 Optimality Testing: The MODI ($u-v$) Method & Stepping-Stone
Once a non-degenerate IBFS satisfying $m + n - 1$ basic allocations is established, its global optimality is verified using the **Modified Distribution (MODI)** algorithm:
1. **Compute Dual Potentials ($u_i, v_j$):** For every **allocated (basic) cell $(i, j)$**, solve:
   $$u_i + v_j = c_{ij}$$
   (Assign $u_1 = 0$ as the starting datum).
2. **Compute Opportunity Cost ($\Delta_{ij}$) for Empty (Non-Basic) Cells:**
   $$\Delta_{ij} = c_{ij} - (u_i + v_j)$$
3. **Optimality Criteria:**
   - If **all $\Delta_{ij} \ge 0$**: The current solution is **globally optimal**.
   - If **all $\Delta_{ij} \ge 0$ and at least one $\Delta_{ij} = 0$**: The solution is **optimal**, and **alternative optimal solutions exist** with the exact same minimum cost.
   - If **any $\Delta_{ij} < 0$**: The solution is sub-optimal and can be improved.
4. **Stepping-Stone Improvement Loop:**
   - Identify the entering cell with the **most negative opportunity cost** ($\min \Delta_{ij} < 0$).
   - Trace a closed orthogonal loop moving horizontally and vertically, turning only on basic cells, alternating signs ($+ \theta, - \theta, + \theta, - \theta$) starting with $+$ at the entering cell.
   - Determine shift quantity $\theta = \min(\text{allocations at negative loop vertices})$. Add $\theta$ to positive vertices and subtract $\theta$ from negative vertices to form the improved basis.

---

## 6. The Assignment Problem & The Hungarian Algorithm (Lecture 51)

### 6.1 Foundations of the Assignment Problem (AP)
The Assignment Problem is a specialized, highly degenerate form of the Transportation Problem where $n$ distinct facilities, workers, or vehicles must be allocated to $n$ distinct jobs, tasks, or delivery routes on a strict **one-to-one basis** ($a_i = 1, b_j = 1$).
- **Mathematical Binary Integer Formulation:**
  - Decision variable: $x_{ij} \in \{0, 1\}$ ($x_{ij} = 1$ if worker $i$ is assigned to job $j$; $0$ otherwise).
  $$\text{Minimize } Z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij}$$
  $$\text{Subject to: } \sum_{j=1}^{n} x_{ij} = 1 \quad \forall i, \quad \sum_{i=1}^{n} x_{ij} = 1 \quad \forall j, \quad x_{ij} \in \{0, 1\}$$

### 6.2 The Step-by-Step Hungarian Algorithm (Kuhn-Munkres)
Evaluating all $n!$ combinations is computationally prohibitive. The Hungarian Method solves the problem in polynomial time via matrix reduction:
1. **Ensure Balance:** The cost matrix must be square ($n \times n$). If $m \ne n$, add dummy row(s) or column(s) with cost zero ($c_{ij} = 0$).
2. **Row Reduction:** Identify the minimum element in each row; subtract it from every element in that row (creates at least one zero per row).
3. **Column Reduction:** In the resulting matrix, identify the minimum element in each column; subtract it from every element in that column (creates at least one zero per column).
4. **Test for Optimality (Line Covering Test):** Draw the **minimum number of horizontal and vertical straight lines ($L$)** necessary to cover all zeros in the matrix.
   - If **$L = n$**: An optimal zero-cost assignment exists! Proceed directly to Step 6.
   - If **$L < n$**: An optimal assignment cannot yet be formed. Proceed to Step 5.
5. **Matrix Modification:**
   - From all **uncovered elements**, find the absolute minimum value, denoted **$k$**.
   - **Subtract $k$** from all uncovered elements.
   - **Add $k$** to elements situated at the **intersection of two lines**.
   - Leave elements covered by a single line **unchanged**.
   - Return to Step 4 and repeat line covering.
6. **Make Final One-to-One Assignments:**
   - Scan rows with exactly one zero $\rightarrow$ enclose in a box ($\square$) and cross out ($\times$) other zeros in that column.
   - Scan columns with exactly one zero $\rightarrow$ enclose in a box ($\square$) and cross out ($\times$) other zeros in that row.
   - Compute total minimum cost by cross-referencing assigned positions with original matrix costs.
7. **Maximization Problems:** Convert a profit/efficiency matrix to a relative loss matrix by subtracting every element from the **global maximum element**: $c_{ij}' = M_{\max} - c_{ij}$, then solve using the standard minimization Hungarian method.

---

# SECTION B: Important Definitions and Terminology

- **Demand Forecasting:** The scientific process of predicting future customer demand using historical time-series data, market drivers, and statistical models.
- **Smoothing Constant ($\alpha$):** A weighting parameter between $0$ and $1$ in exponential smoothing governing the trade-off between responsiveness to recent demand shocks and forecast stability.
- **Design Capacity:** The theoretical maximum engineering output rate achievable under continuous 100% ideal conditions with zero downtime or maintenance.
- **Effective Capacity:** The realistic maximum output rate an operating system can sustainably achieve under standard conditions, accounting for setups, preventive maintenance, and operator breaks.
- **Capacity Utilization:** The percentage ratio of actual realized output to design capacity ($\text{Output} / \text{Design} \times 100$).
- **Capacity Efficiency:** The percentage ratio of actual realized output to effective capacity ($\text{Output} / \text{Effective} \times 100$).
- **Capacity Cushion:** The percentage reserve of capacity held above average expected demand to cushion against volume volatility ($100\% - \text{Utilization}$).
- **Makespan:** The total elapsed clock time from the initiation of the first job in a batch to the completion of the last job on the terminal machine.
- **Job Flow Time ($F_i$):** Total duration a job resides within a facility from its initial arrival until its final completion ($C_i - r_i$).
- **Job Tardiness ($T_i$):** The measure of positive lateness past a promised due date ($\max(0, C_i - d_i)$); equal to zero if delivered on time or early.
- **Shortest Processing Time (SPT):** A single-machine dispatching rule that sequences jobs in ascending order of processing time; provably minimizes average flow time and average WIP.
- **Earliest Due Date (EDD):** A dispatching rule sequencing jobs by ascending due dates; provably minimizes maximum job tardiness.
- **Critical Ratio (CR):** A dynamic sequencing index defined as time remaining divided by work remaining; $CR < 1.0$ indicates an expedited behind-schedule job.
- **Johnson’s Rule:** An exact algorithm that schedules $n$ jobs across 2 sequential machines to minimize total makespan and total idle time.
- **Place Utility:** The economic value created by physically moving freight from surplus origins to customer demand destinations.
- **Time Utility:** The economic value created by ensuring freight arrives punctually when demanded.
- **Bill of Lading (BOL):** The master legal shipping document serving as a receipt of goods, contract of carriage, and negotiable document of title.
- **Transportation Problem (TP):** A linear program allocating freight from $m$ supply origins to $n$ demand destinations at minimum total distribution cost.
- **Balanced TP:** A transportation matrix where total factory supply exactly equals total market demand ($\sum a_i = \sum b_j$).
- **Rim Condition:** The non-degeneracy requirement in an $m \times n$ transportation matrix requiring exactly $m + n - 1$ independent basic allocations.
- **Vogel’s Approximation Method (VAM):** An advanced IBFS method allocating units based on the maximum opportunity penalty between the lowest two costs in each row and column.
- **MODI Method ($u-v$ Method):** An exact dual-variable mathematical technique testing transportation matrix optimality via $\Delta_{ij} = c_{ij} - (u_i + v_j)$.
- **Stepping-Stone Loop:** A closed orthogonal geometric path traversing through basic cells used to re-allocate freight to an entering negative cell.
- **Assignment Problem (AP):** A combinatorial optimization model allocating $n$ resources to $n$ jobs on a strict 1-to-1 binary basis ($x_{ij} \in \{0, 1\}$).
- **Hungarian Method:** A polynomial-time matrix reduction algorithm (Kuhn-Munkres) solving the assignment problem by finding an optimal zero assignment where minimum covering lines $L = n$.

---

# SECTION D: Comparisons and Classification Tables

### Table 1: Quantitative Forecasting Techniques Comparison

| Technique | Primary Strengths | Inherent Limitations | Ideal Context |
|---|---|---|---|
| **Simple Moving Average (SMA)** | Easy to compute; dampens random variance. | Extreme lag during trend shifts; equal past weights. | Stable commodity demand without trend. |
| **Weighted Moving Average (WMA)**| Flexible; emphasizes recent demand. | Subjective weight selection; historical lag. | Recent periods exhibit higher predictive value. |
| **Exponential Smoothing (SES)** | Requires minimal data storage ($F_t, A_t, \alpha$). | Requires tuning $\alpha$; lags strong trends. | Short-range forecasting for thousands of SKUs. |
| **Linear Trend Regression** | Models structural long-term growth. | Assumes straight-line linearity; sensitive to outliers. | Medium-to-long-range strategic planning. |

---

### Table 2: Capacity Expansion Strategies Comparison

| Dimension | Lead Strategy | Lag Strategy | Match / Tracking Strategy |
|---|---|---|---|
| **Expansion Timing** | Proactive (in advance of demand). | Conservative (after demand materializes). | Incremental (closely tracks demand). |
| **Capacity Utilization** | Low to Moderate (idle cushion). | **Extremely High ($\approx 100\%$)** | Balanced / Moderate |
| **Customer Service Level**| **Highest (Zero stockouts)** | Poor (Frequent stockouts, long lead times)| Good |
| **Financial Downside** | Severe loss if demand collapses. | Low capital risk; lost market share. | Moderate overhead and setup costs. |
| **Competitive Impact** | Deters new competitor entry. | Invites aggressive market entry. | Maintains competitive parity. |

---

### Table 3: Single-Machine Priority Sequencing Rules

| Rule | Sequencing Criterion | Mathematical Superiority | Operational Limitation |
|---|---|---|---|
| **FCFS** | Arrival order sequence. | Perceived as fair; zero calculation. | Poor flow time and high WIP inventory. |
| **SPT** | Ascending processing time ($p_i$). | **Minimizes average flow time & WIP**. | Starves long jobs if short jobs arrive. |
| **EDD** | Ascending due date ($d_i$). | **Minimizes maximum job tardiness**. | Ignores job processing time durations. |
| **CR** | Lowest ratio: $\frac{\text{Time Left}}{\text{Work Left}}$. | Dynamically updates priority over time. | Requires continuous shop-floor re-indexing. |

---

### Table 4: Five Modes of Freight Transportation

| Transport Mode | Relative Speed | Cost per Ton-Km | Carrying Capacity | Door-to-Door Reach | India Freight Volume |
|---|---|---|---|---|---|
| **Road (Trucking)** | Fast (Short-haul) | Moderate ($\approx \text{Rs. } 2.50$) | Low to Moderate | **100% (Direct Reach)** | **70%–75% (Dominant)** |
| **Railways** | Moderate | Low ($\approx \text{Rs. } 1.50$) | Very High (Trainload) | Inflexible (Needs drayage) | 20%–25% |
| **Maritime / Water** | **Slowest** | **Lowest ($\approx \text{Rs. } 0.25$)**| **Massive (Capesize/Bulk)**| Restricted to ports | $< 5\%$ |
| **Air Cargo** | **Fastest** | **Highest (Premium)** | Lowest (Payload limits) | Requires airport transfers | $< 1\%$ ($>30\%$ value) |
| **Pipeline** | Continuous | Negligible (after CapEx)| Very High (Fluids/gas) | Fixed dedicated points | Dedicated energy corridors |

---

### Table 5: IBFS Methods for Transportation Problems

| Method | Cost Matrix Awareness | Computational Effort | Quality of Initial Solution | Proximity to Global Optimum |
|---|---|---|---|---|
| **North-West Corner (NWCR)** | **Zero (Purely positional)** | Minimal | Very Poor (High freight cost) | Far from optimum |
| **Least Cost Method (LCM)** | Moderate (Greedy minimum) | Low to Moderate | Fair to Good | Moderate |
| **Vogel's Approx. Method (VAM)**| **High (Penalty/Regret logic)** | Highest | **Superior (Near-Optimal)** | **Closest (Often identical)** |

---

### Table 6: Transportation Problem (TP) vs. Assignment Problem (AP)

| Attribute | Transportation Problem (TP) | Assignment Problem (AP) |
|---|---|---|
| **Matrix Geometry** | Rectangular ($m \times n$); supply $a_i \ne$ demand $b_j$. | Strictly square ($n \times n$); $a_i = 1$, $b_j = 1$. |
| **Decision Variables** | Continuous quantities ($x_{ij} \ge 0$). | **Binary integer values ($x_{ij} \in \{0, 1\}$)**. |
| **Solving Algorithm** | VAM + MODI ($u-v$) Method / Stepping-Stone. | **Hungarian Method (Kuhn-Munkres)**. |
| **Degeneracy** | Rim condition: $m + n - 1$ allocations. | Inherently degenerate as a transportation problem. |
| **Economic Objective** | Minimum freight distribution cost. | Minimum matching cost, time, or penalty. |

---

# SECTION E: Worked Examples and Applications

### Worked Example 1: Exponential Smoothing with Variable Smoothing Constants
**Scenario:** A regional FMCG distribution center forecasted sales of 450 cases ($F_t = 450$) of laundry detergent for August. Realized demand in August turned out to be 520 cases ($A_t = 520$).
1. Compute the September forecast using a conservative smoothing constant $\alpha = 0.2$.
2. Compute the September forecast using a responsive smoothing constant $\alpha = 0.8$.
3. Interpret the managerial implications of both results.

**Solution:**
1. *For $\alpha = 0.2$:*
   $$F_{\text{Sept}} = F_{\text{Aug}} + \alpha (A_{\text{Aug}} - F_{\text{Aug}})$$
   $$F_{\text{Sept}} = 450 + 0.2 \times (520 - 450) = 450 + 0.2 \times 70 = 450 + 14 = \mathbf{464\text{ cases}}$$
2. *For $\alpha = 0.8$:*
   $$F_{\text{Sept}} = 450 + 0.8 \times (520 - 450) = 450 + 0.8 \times 70 = 450 + 56 = \mathbf{506\text{ cases}}$$
3. *Interpretation:* With $\alpha = 0.2$, the planner assumes the 70-case surge was mostly random noise, adjusting the baseline upward by only 14 units. With $\alpha = 0.8$, the planner assumes the surge reflects a sustained structural demand shift, adjusting the baseline upward by 56 units.

---

### Worked Example 2: Capacity Utilization, Efficiency, and Cushion
**Scenario:** A high-speed e-commerce packaging facility is designed to package 300 parcels per hour. The facility operates two 8-hour shifts per day for 25 working days in a month. Due to scheduled daily machine calibration, lunch breaks, and shift handovers, management establishes an effective capacity of 100,000 parcels per month. During October, the facility actually packaged and dispatched 84,000 parcels.
- Calculate Design Capacity, Capacity Utilization, Capacity Efficiency, and Capacity Cushion.

**Solution:**
1. **Design Capacity:**
   $$\text{Design Capacity} = 300\text{ parcels/hr} \times (2 \times 8)\text{ hrs/day} \times 25\text{ days} = 300 \times 16 \times 25 = \mathbf{120,000\text{ parcels/month}}$$
2. **Capacity Utilization:**
   $$\text{Utilization} = \left( \frac{\text{Actual Output}}{\text{Design Capacity}} \right) \times 100 = \left( \frac{84,000}{120,000} \right) \times 100 = \mathbf{70.00\%}$$
3. **Capacity Efficiency:**
   $$\text{Efficiency} = \left( \frac{\text{Actual Output}}{\text{Effective Capacity}} \right) \times 100 = \left( \frac{84,000}{100,000} \right) \times 100 = \mathbf{84.00\%}$$
4. **Capacity Cushion:**
   $$\text{Capacity Cushion} = 100\% - \text{Utilization} = 100\% - 70\% = \mathbf{30.00\%}$$

---

### Worked Example 3: Johnson’s Rule for Sequencing 5 Jobs on 2 Machines
**Scenario:** Five custom logistics container orders ($J_1, J_2, J_3, J_4, J_5$) must be fabricated on Machine 1 (Welding) and then finished on Machine 2 (Painting). The processing times (in hours) are:

| Job | Machine 1 ($M_1$) [Welding] | Machine 2 ($M_2$) [Painting] |
|---|---|---|
| **$J_1$** | 7 | 4 |
| **$J_2$** | 3 | 8 |
| **$J_3$** | 10 | 6 |
| **$J_4$** | 5 | 9 |
| **$J_5$** | 12 | 2 |

**Step-by-Step Derivation:**
1. *Iteration 1:* Absolute minimum time is **2 hours** for **$J_5$ on $M_2$**. Since it is on Machine 2, place $J_5$ in the **rightmost available slot**:
   $$\text{Sequence: } [ \ \underline{\hspace{0.5cm}} \ , \ \underline{\hspace{0.5cm}} \ , \ \underline{\hspace{0.5cm}} \ , \ \underline{\hspace{0.5cm}} \ , \ J_5 \ ]$$
   Cross off $J_5$.
2. *Iteration 2:* Among remaining jobs ($J_1, J_2, J_3, J_4$), minimum time is **3 hours** for **$J_2$ on $M_1$**. Since it is on Machine 1, place $J_2$ in the **leftmost available slot**:
   $$\text{Sequence: } [ \ J_2 \ , \ \underline{\hspace{0.5cm}} \ , \ \underline{\hspace{0.5cm}} \ , \ \underline{\hspace{0.5cm}} \ , \ J_5 \ ]$$
   Cross off $J_2$.
3. *Iteration 3:* Among remaining jobs ($J_1, J_3, J_4$), minimum time is **4 hours** for **$J_1$ on $M_2$**. Place $J_1$ in the **next rightmost slot**:
   $$\text{Sequence: } [ \ J_2 \ , \ \underline{\hspace{0.5cm}} \ , \ \underline{\hspace{0.5cm}} \ , \ J_1 \ , \ J_5 \ ]$$
   Cross off $J_1$.
4. *Iteration 4:* Among remaining jobs ($J_3, J_4$), minimum time is **5 hours** for **$J_4$ on $M_1$**. Place $J_4$ in the **next leftmost slot**:
   $$\text{Sequence: } [ \ J_2 \ , \ J_4 \ , \ \underline{\hspace{0.5cm}} \ , \ J_1 \ , \ J_5 \ ]$$
   Cross off $J_4$.
5. *Iteration 5:* Only $J_3$ remains. Place $J_3$ in the final available middle slot:
   $$\mathbf{\text{Optimal Sequence: } [ \ J_2 \rightarrow J_4 \rightarrow J_3 \rightarrow J_1 \rightarrow J_5 \ ]}$$

**Makespan Schedule Verification:**
- **Machine 1 ($M_1$):**
  - $J_2$: starts 0, ends 3
  - $J_4$: starts 3, ends 8 ($3 + 5$)
  - $J_3$: starts 8, ends 18 ($8 + 10$)
  - $J_1$: starts 18, ends 25 ($18 + 7$)
  - $J_5$: starts 25, ends 37 ($25 + 12$)
- **Machine 2 ($M_2$):**
  - $J_2$: waits until $M_1$ finishes at 3; runs 3 to 11 ($3 + 8$)
  - $J_4$: starts at $\max(11, 8) = 11$; runs 11 to 20 ($11 + 9$)
  - $J_3$: starts at $\max(20, 18) = 20$; runs 20 to 26 ($20 + 6$)
  - $J_1$: starts at $\max(26, 25) = 26$; runs 26 to 30 ($26 + 4$)
  - $J_5$: starts at $\max(30, 37) = 37$ (Machine 2 is idle between 30 and 37!); runs 37 to 39 ($37 + 2$)
- **Total Minimum Makespan = 39 Hours**. Total idle time on $M_2 = 3\text{ hrs (at start)} + 7\text{ hrs (between } J_1 \text{ and } J_5) = \mathbf{10\text{ hours}}$.

---

### Worked Example 4: Transportation Problem (VAM Allocation & MODI Optimality Test)
**Scenario:** A cement manufacturer has 3 plants ($P_1, P_2, P_3$) supplying 3 distribution centers ($D_1, D_2, D_3$). The unit transportation costs (Rs./ton), plant capacities, and warehouse demands are:

$$\begin{array}{|c|ccc|c|}
\hline
\text{Plant} & D_1 & D_2 & D_3 & \text{Supply} \\
\hline
P_1 & 2 & 7 & 4 & 50 \\
P_2 & 3 & 3 & 1 & 40 \\
P_3 & 5 & 4 & 7 & 60 \\
\hline
\text{Demand} & 40 & 50 & 60 & \mathbf{150} \\
\hline
\end{array}$$

**Check Balance & Rim Condition:**
- Total Supply $= 50 + 40 + 60 = 150$. Total Demand $= 40 + 50 + 60 = 150$ (Balanced TP).
- Rim requirement: $m + n - 1 = 3 + 3 - 1 = \mathbf{5\text{ basic allocations}}$.

**Vogel's Approximation Method (VAM) Execution:**
1. *Iteration 1 Penalties:*
   - Row 1: $|4 - 2| = 2$; Row 2: $|3 - 1| = 2$; Row 3: $|5 - 4| = 1$.
   - Col 1: $|3 - 2| = 1$; Col 2: $|4 - 3| = 1$; Col 3: $|4 - 1| = \mathbf{3}$.
   - Max Penalty $= 3$ in Column 3. Minimum cost in Col 3 is $c_{23} = 1$.
   - Allocate $x_{23} = \min(40, 60) = \mathbf{40}$. Plant $P_2$ capacity is exhausted. Cross off Row 2. Remaining demand at $D_3 = 60 - 40 = 20$.
2. *Iteration 2 Penalties (Rows 1 & 3):*
   - Row 1: $|4 - 2| = 2$; Row 3: $|5 - 4| = 1$.
   - Col 1: $|5 - 2| = 3$; Col 2: $|7 - 4| = 3$; Col 3: $|7 - 4| = 3$.
   - Tie in column penalties (3). Break tie by selecting Column 1. Minimum cost is $c_{11} = 2$.
   - Allocate $x_{11} = \min(50, 40) = \mathbf{40}$. Destination $D_1$ demand is met. Cross off Col 1. Remaining supply at $P_1 = 50 - 40 = 10$.
3. *Remaining Allocations:*
   - For cell $(1,3)$: cost $= 4$; allocate $x_{13} = \min(10, 20) = \mathbf{10}$. Row 1 satisfied. Remaining demand at $D_3 = 20 - 10 = 10$.
   - In Row 3: available supply $= 60$. Allocate $x_{32} = \mathbf{50}$ to meet $D_2$ demand. Allocate $x_{33} = \mathbf{10}$ to meet remaining $D_3$ demand.
- **VAM Allocations:** $(1,1) = 40, \ (1,3) = 10, \ (2,3) = 40, \ (3,2) = 50, \ (3,3) = 10$. Exactly 5 allocations (Non-degenerate).
- **Total VAM Cost:**
  $$Z = (40 \times 2) + (10 \times 4) + (40 \times 1) + (50 \times 4) + (10 \times 7) = 80 + 40 + 40 + 200 + 70 = \mathbf{\text{Rs. } 430}$$

**MODI ($u-v$) Optimality Verification:**
- For allocated cells, set $u_i + v_j = c_{ij}$ (let $u_1 = 0$):
  - $(1,1): u_1 + v_1 = 2 \implies 0 + v_1 = 2 \implies \mathbf{v_1 = 2}$
  - $(1,3): u_1 + v_3 = 4 \implies 0 + v_3 = 4 \implies \mathbf{v_3 = 4}$
  - $(2,3): u_2 + v_3 = 1 \implies u_2 + 4 = 1 \implies \mathbf{u_2 = -3}$
  - $(3,3): u_3 + v_3 = 7 \implies u_3 + 4 = 7 \implies \mathbf{u_3 = 3}$
  - $(3,2): u_3 + v_2 = 4 \implies 3 + v_2 = 4 \implies \mathbf{v_2 = 1}$
- Compute $\Delta_{ij} = c_{ij} - (u_i + v_j)$ for empty cells:
  - Cell $(1,2): \Delta_{12} = 7 - (0 + 1) = \mathbf{+6} \ge 0$
  - Cell $(2,1): \Delta_{21} = 3 - (-3 + 2) = 3 - (-1) = \mathbf{+4} \ge 0$
  - Cell $(2,2): \Delta_{22} = 3 - (-3 + 1) = 3 - (-2) = \mathbf{+5} \ge 0$
  - Cell $(3,1): \Delta_{31} = 5 - (3 + 2) = 5 - 5 = \mathbf{0} \ge 0$
- **Conclusion:** Since all $\Delta_{ij} \ge 0$, the VAM allocation is **GLOBALLY OPTIMAL** with minimum cost **Rs. 430**. The fact that $\Delta_{31} = 0$ indicates an alternative optimal solution exists.

---

### Worked Example 5: The Assignment Problem (Hungarian Method)
**Scenario:** A freight distribution center must assign 4 truck drivers ($D_1, D_2, D_3, D_4$) to 4 delivery routes ($R_1, R_2, R_3, R_4$). The cost matrix (in Rs. '00) is:

$$\begin{array}{|c|cccc|}
\hline
\text{Driver} & R_1 & R_2 & R_3 & R_4 \\
\hline
D_1 & 12 & 30 & 21 & 15 \\
D_2 & 18 & 33 & 9 & 31 \\
D_3 & 44 & 25 & 24 & 21 \\
D_4 & 23 & 30 & 28 & 14 \\
\hline
\end{array}$$

**Step-by-Step Hungarian Solution:**
1. **Row Reduction:** Subtract row minimums ($D_1: 12, D_2: 9, D_3: 21, D_4: 14$):
   $$\begin{pmatrix}
   12-12 & 30-12 & 21-12 & 15-12 \\
   18-9  & 33-9  & 9-9   & 31-9  \\
   44-21 & 25-21 & 24-21 & 21-21 \\
   23-14 & 30-14 & 28-14 & 14-14
   \end{pmatrix} = \begin{pmatrix}
   0 & 18 & 9 & 3 \\
   9 & 24 & 0 & 22 \\
   23 & 4 & 3 & 0 \\
   9 & 16 & 14 & 0
   \end{pmatrix}$$
2. **Column Reduction:** Subtract column minimums ($R_1: 0, R_2: 4, R_3: 0, R_4: 0$):
   $$\begin{pmatrix}
   0 & 14 & 9 & 3 \\
   9 & 20 & 0 & 22 \\
   23 & 0 & 3 & 0 \\
   9 & 12 & 14 & 0
   \end{pmatrix}$$
3. **Line Covering Test:**
   - Draw minimum lines to cover all zeros:
     - Line 1: Col 4 (covers zeros at $(3,4)$ and $(4,4)$).
     - Line 2: Col 3 (covers zero at $(2,3)$).
     - Line 3: Row 1 (covers zero at $(1,1)$).
     - Line 4: Row 3 (covers zero at $(3,2)$).
   - Total lines $L = 4$. Since $L = n = 4$, an **optimal zero assignment is immediately possible!**
4. **Final Allocation:**
   - Row 1 has only one zero at $(1,1) \implies \mathbf{D_1 \rightarrow R_1}$ (Original cost $= 12$).
   - Row 2 has only one zero at $(2,3) \implies \mathbf{D_2 \rightarrow R_3}$ (Original cost $= 9$).
   - Row 4 has only one zero at $(4,4) \implies \mathbf{D_4 \rightarrow R_4}$ (Original cost $= 14$). Cross out Col 4.
   - Row 3 now has only zero at $(3,2) \implies \mathbf{D_3 \rightarrow R_2}$ (Original cost $= 25$).
- **Total Minimum Cost** $= 12 + 9 + 25 + 14 = \mathbf{60\text{ (i.e., Rs. 6,000)}}$.

---

# SECTION F: Important NPTEL Exam Points

1. **Shortest Processing Time (SPT) Rule:** Frequently tested MCQ fact. SPT **provably minimizes average flow time and average work-in-process (WIP)** on a single machine. It does *not* minimize maximum tardiness.
2. **Earliest Due Date (EDD) Rule:** Provably **minimizes the maximum job tardiness ($\max T_i$)**.
3. **Critical Ratio ($CR$):** Memorize the condition: $CR < 1.0$ indicates that the job is **behind schedule and will be late** unless expedited.
4. **Johnson’s Rule Placement Criterion:** If the absolute minimum processing time occurs on Machine 1, place the job **first (left)**. If it occurs on Machine 2, place the job **last (right)**.
5. **Design vs. Effective Capacity:** Remember that Design Capacity is theoretical (100% ideal); Effective Capacity accounts for planned maintenance, setups, and breaks. Actual Output $\le$ Effective Capacity $\le$ Design Capacity.
6. **Efficiency vs. Utilization:** Utilization denominator is **Design Capacity**; Efficiency denominator is **Effective Capacity**.
7. **Transportation Problem Non-Degeneracy:** Requires exactly **$m + n - 1$ basic allocations**. If allocations $< m + n - 1$, an infinitesimal $\epsilon \approx 0$ must be introduced into an unallocated independent cell to apply the MODI method.
8. **VAM Penalty Calculation:** A row or column penalty in Vogel’s Approximation Method is the **difference between the two lowest costs in that specific row or column**.
9. **MODI Optimality Criterion:** A transportation solution is globally optimal if and only if **all net evaluations $\Delta_{ij} = c_{ij} - (u_i + v_j) \ge 0$**. A value of $\Delta_{ij} = 0$ signifies an **alternative optimal solution**.
10. **Hungarian Method Optimality Condition:** An assignment is optimal when the **minimum number of straight horizontal and vertical lines covering all zeros equals the order of the square matrix ($L = n$)**.
11. **Hungarian Matrix Modification:** The minimum uncovered value $k$ is **subtracted from uncovered cells, added to line intersections, and left unchanged at single-line covered cells**.
12. **Bill of Lading (BOL):** Serves three distinct legal functions: **Receipt of goods, contract of carriage, and document of title**.
13. **India Freight Modal Split:** Road haulage dominates with **70%–75% of total freight volume**, despite water (Rs. 0.25) and rail (Rs. 1.50) being significantly cheaper than road (Rs. 2.50) per ton-km.

---

# SECTION G: Common Mistakes and Tricky Concepts

- **Confusing Capacity Utilization with Efficiency:** Students frequently swap the denominators. Remember: *Efficiency evaluates operational execution against realistic expectations* (Effective Capacity), whereas *Utilization measures capital deployment against total engineering limits* (Design Capacity). Thus, Efficiency is virtually always numerically higher than Utilization.
- **Johnson’s Rule Placement Reversal:** A common exam blunder is placing a job on the left when its minimum time is on Machine 2. Remember: **$M_1 \rightarrow \text{Front (Left)}; \ M_2 \rightarrow \text{Back (Right)}$**.
- **Makespan Idle Time Calculation:** When calculating the makespan timeline, students often forget that Machine 2 cannot start a job until *both* Machine 2 has finished its previous job *and* Machine 1 has finished processing that specific job: $\text{Start}(M_2, J_i) = \max(\text{Finish}(M_2, J_{i-1}), \text{Finish}(M_1, J_i))$.
- **VAM Penalty Recalculation:** When a row or column is satisfied and crossed out, students frequently fail to **recalculate penalties** for the remaining matrix. Cross-out changes the two lowest available numbers in intersecting rows/columns!
- **MODI Opportunity Cost Sign Convention:** Remember the formula: $\Delta_{ij} = c_{ij} - (u_i + v_j)$. A **negative $\Delta_{ij}$** indicates that shipping along this route *reduces* total costs. The cell with the *most negative* $\Delta_{ij}$ must enter the basis.
- **Stepping-Stone Loop Rules:** A closed loop can only turn 90 degrees at **currently allocated basic cells**. Turning at empty cells is strictly invalid.
- **Hungarian Method Maximization Trap:** When solving a profit maximization assignment problem, students often mistakenly run column and row reductions directly on profits. You **must first convert the matrix into a relative loss matrix by subtracting all elements from the matrix maximum ($c_{ij}' = M_{\max} - c_{ij}$)**.

---

# SECTION H: Quick Revision Sheet

- **Time-Series Components:** Trend ($T$), Seasonality ($S$), Cyclical ($C$), Random Noise ($R$).
- **Exponential Smoothing:** $F_{t+1} = F_t + \alpha (A_t - F_t) = \alpha A_t + (1 - \alpha) F_t$. High $\alpha \rightarrow$ responsive; Low $\alpha \rightarrow$ stable.
- **Linear Trend Regression:** $\hat{y} = b_0 + b_1 x$, where slope $b_1 = \frac{n \sum xy - \sum x \sum y}{n \sum x^2 - (\sum x)^2}$.
- **Delphi Method:** Iterative, anonymous surveying of experts with controlled feedback to eliminate groupthink.
- **Capacity Ratios:**
  $$\text{Utilization} = \frac{\text{Actual Output}}{\text{Design Capacity}} \times 100, \quad \text{Efficiency} = \frac{\text{Actual Output}}{\text{Effective Capacity}} \times 100$$
- **Break-Even Output:** $Q_{BEP} = \frac{FC}{P - VC}$.
- **Sequencing Rules:**
  - **SPT:** Minimizes average flow time and average WIP.
  - **EDD:** Minimizes maximum tardiness.
  - **Critical Ratio ($CR$):** $CR = \frac{d_i - t}{p_i}$. $CR < 1 \rightarrow$ behind schedule.
- **Johnson’s Rule Placement:** Minimum time on $M_1 \rightarrow$ left; Minimum time on $M_2 \rightarrow$ right.
- **Freight Tariffs:** Waterways (Rs. 0.25) $<$ Railways (Rs. 1.50) $<$ Roadways (Rs. 2.50) per ton-km.
- **Bill of Lading:** 3 functions: Receipt of goods, Contract of carriage, Document of title.
- **Transportation Problem Non-Degeneracy:** Exactly $m + n - 1$ basic allocated cells.
- **IBFS Methods:** NWCR (purely positional, worst cost) $<$ LCM (greedy cost) $<$ VAM (penalty-based, best cost).
- **MODI Method Optimality:** All $\Delta_{ij} = c_{ij} - (u_i + v_j) \ge 0$.
- **Hungarian Method:** $L = n$ (minimum covering lines equal matrix order). Uncovered cells: subtract $k$; Intersections: add $k$.

---

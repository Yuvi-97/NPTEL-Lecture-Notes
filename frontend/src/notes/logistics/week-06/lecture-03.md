# Week 6 – Lecture 3: Supply Chain Models and Modelling Systems

## 1. Key Concepts

- **Supply Chain Modeling Systems:** Mathematical, algorithmic, and computational software representations of supply chain networks used to optimize facility locations, inventory policies, production schedules, vehicle routing, and risk scenarios.
- **Deterministic vs. Stochastic Models:**
  - *Deterministic Models:* Assume all input parameters (customer demand, transit lead times, production yields, costs) are fixed, known constants with zero random variance.
  - *Stochastic Models:* Explicitly incorporate uncertainty and risk by modeling parameters as probability distributions (e.g., normal demand distributions, Poisson order arrivals).
- **Optimization vs. Simulation Models:**
  - *Optimization Models:* Formulate mathematical programming algorithms (Linear Programming, Mixed-Integer Linear Programming - MILP) to identify the single provably best global solution (e.g., minimum total network cost).
  - *Simulation Models:* Replicate complex dynamic interactions over simulated time horizons (Monte Carlo simulation, Discrete-Event simulation) to evaluate "what-if" operational policies under volatile conditions.
- **Continuous vs. Discrete Manufacturing Models:**
  - *Continuous Process:* Fluid, unbroken material transformation running 24/7 without discrete component boundaries (e.g., oil refining, chemical plants, steel mills, sugar extraction).
  - *Discrete Manufacturing:* Distinct, countable units assembled from individual separate parts (e.g., automobiles, smartphones, appliances).

---

## 2. Important Points

### Mathematical Formulation: Classical Supply Chain Network Optimization (MILP)
A standard Mixed-Integer Linear Programming model for minimum-cost facility location and freight allocation:

**Decision Variables:**
- $Y_j \in \{0, 1\}$: Binary variable ($1$ if facility $j$ is opened; $0$ otherwise).
- $X_{ij} \ge 0$: Continuous variable representing quantity shipped from node $i$ to facility $j$.

**Objective Function (Minimize Total Network Cost):**
$$\text{Minimize } Z = \sum_{j=1}^{m} F_j \cdot Y_j + \sum_{i=1}^{n} \sum_{j=1}^{m} C_{ij} \cdot X_{ij}$$

Where:
- $F_j$: Fixed annual capital cost of opening and maintaining facility $j$.
- $C_{ij}$: Variable per-unit freight and handling cost to transport product from node $i$ to node $j$.

**Subject to Operational Constraints:**
- *Demand Satisfaction:* $\sum_{j=1}^{m} X_{jk} \ge D_k$ for every customer market $k$.
- *Capacity Limits:* $\sum_{k=1}^{p} X_{jk} \le K_j \cdot Y_j$ (shipments cannot exceed rated capacity $K_j$, and can only occur if facility $j$ is open).
- *Non-negativity & Integrality:* $X_{ij} \ge 0, \quad Y_j \in \{0, 1\}$.

### The Dual-Sourcing Model in Fast Fashion (The Zara Case Study)
The lecture highlights Zara (Inditex) as a masterclass in hybrid supply chain modeling:
- **High-Uncertainty / High-Fashion SKUs (Short Lead Time):**
  - Designed in-house; sourced from flexible nearshore manufacturing facilities in **Spain, Portugal, Morocco, and Turkey**.
  - *Operational Trade-off:* Higher labor and production costs, but an ultra-short **2-to-3-week design-to-shelf lead time**.
  - If a fashion design fails in stores, production stops instantly, eliminating inventory write-downs.
- **Low-Uncertainty / Basic Staple SKUs (Long Lead Time):**
  - Basic items with predictable, steady year-round demand (white t-shirts, basic socks, denim).
  - Sourced from low-cost offshore manufacturers in **Asia (China, India, Bangladesh, Vietnam)**.
  - *Operational Trade-off:* Long ocean transit lead times (2 to 3 months), but maximum scale economies and lowest per-unit procurement costs.

---

## 3. Differences / Examples

### Optimization Models vs. Simulation Models

| Dimension | Mathematical Optimization (LP / MILP) | Computational Simulation (Discrete Event) |
|---|---|---|
| **Analytical Approach** | Solves for the exact mathematically optimal solution. | Evaluates systemic behavior and performance of pre-defined policies. |
| **System Complexity** | Must be simplified into linear or integer algebraic equations. | Handles arbitrary real-world non-linear complexity and queueing. |
| **Treatment of Risk** | Typically deterministic; difficult to handle dynamic randomness. | **Inherently stochastic; models probabilistic random shocks**. |
| **Primary Output** | Optimal values for facility locations, capacities, and flows. | Statistical performance distributions (average wait time, 95th percentile inventory). |

---

## 4. Must Remember

- Supply chain models evaluate strategic network configurations, classifying into **Deterministic** (fixed values) vs. **Stochastic** (probability distributions).
- **Optimization models (MILP)** mathematically compute the provably best global solution (e.g., minimum total cost), while **Simulation models** test "what-if" operational policies under dynamic uncertainty.
- In network optimization models, **binary integer variables ($Y_j \in \{0,1\}$)** represent discrete facility open/close decisions, while **continuous variables ($X_{ij}$)** represent shipment quantities.
- **Continuous manufacturing** operates 24/7 on fluid materials (petroleum, steel, sugar); **discrete manufacturing** builds countable individual assemblies (automobiles, consumer electronics).
- **The Zara Dual-Sourcing Model** sources volatile trendy fashion nearshore (**Spain/Portugal/Morocco**) with 2–3 week lead times, while sourcing predictable basic staples offshore (**Asia**) for lowest unit cost.

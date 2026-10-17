# Week 6 – Lecture 3: Supply Chain Models and Modelling Systems

## 1. Key Concepts
- **Supply Chain Modeling:** The mathematical formulation and computational simulation of supply chain networks to evaluate alternative facility layouts, inventory policies, and transportation routing strategies.
- **Deterministic vs. Stochastic Models:**
  - *Deterministic:* Assumes demand, lead times, and operating parameters are known with mathematical certainty.
  - *Stochastic:* Incorporates probabilistic uncertainty and random fluctuations in customer demand and supplier delivery times.
- **Optimization vs. Simulation:** Optimization algorithms seek mathematically optimal global configurations (e.g., minimum total cost); simulation assesses dynamic system behavior and bottlenecks under complex stochastic scenarios.

## 2. Important Points
- **Primary Mathematical Optimization Techniques:**
  - **Linear Programming (LP) & Mixed-Integer Linear Programming (MILP):**
    - Used for strategic facility location-allocation, plant capacity sizing, and multi-commodity network flow optimization.
    - Decision variables include binary indicators ($Y_i \in \{0, 1\}$ for opening a facility) and continuous shipping quantities ($X_{ij}$).
  - **Non-Linear Programming (NLP):** Accounts for non-linear freight rate discounts, safety stock curves, and congestion delays.
- **Dynamic Simulation Architectures:**
  - **Discrete Event Simulation (DES):** Models detailed operational events over time (e.g., dock queue dynamics, conveyor bottlenecks).
  - **System Dynamics (Jay Forrester):** Evaluates feedback loops, information distortion, and multi-echelon inventory oscillations (**Bullwhip Effect**).
  - **Agent-Based Modeling (ABM):** Simulates decentralized interactions between autonomous supply chain agents (suppliers, carriers, consumers).

## 3. Differences / Examples
| Modeling Approach | Analytical Output | Computational Complexity | Suitable Decision Horizon |
| :--- | :--- | :--- | :--- |
| **Optimization (MILP)** | Exact mathematically optimal network configuration | High for large NP-hard mixed-integer networks | Strategic network design (facilities, capacities) |
| **Simulation (DES/ABM)** | "What-If" scenario performance and sensitivity metrics | Variable; captures real-time operational randomness | Operational dispatch & bottleneck analysis |

## 4. Must Remember
- All optimization models require an explicit **objective function** (e.g., minimize $\sum \text{Fixed Facility Cost} + \sum \text{Transport Cost}$) subject to **demand and capacity constraints**.
- A deterministic model that ignores demand variance typically yields under-dimensioned capacity buffers that fail in real-world volatile markets.

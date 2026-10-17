# Week 9 – Lecture 3: Facility Location Planning

## 1. Key Concepts
- **Facility Location Planning:** The strategic determination of the optimal geographic placement for factories, distribution centers, cross-docks, and retail branches.
- **Center-of-Gravity (Centroid) Method:** A quantitative mathematical optimization technique used to locate a single central distribution facility that minimizes the total weighted transportation distance and freight costs between a network of suppliers and demand points.
- **Factor Rating Method:** A qualitative multi-criteria decision model assigning weighted importance scores to evaluate diverse qualitative and quantitative regional attributes.

## 2. Important Points
- **Mathematical Formulation for Center of Gravity:**
  - Let $(X_i, Y_i)$ represent the Cartesian coordinates of existing facility/market $i$.
  - Let $W_i$ represent the volume, freight tonnage, or shipment count associated with location $i$.
  - The optimal coordinates $(\bar{X}, \bar{Y})$ for the new central distribution hub are:
    $$\bar{X} = \frac{\sum_{i=1}^n (X_i \cdot W_i)}{\sum_{i=1}^n W_i}, \quad \bar{Y} = \frac{\sum_{i=1}^n (Y_i \cdot W_i)}{\sum_{i=1}^n W_i}$$
- **Primary Macro-Location Factors:**
  - Proximity to key consumer markets vs. proximity to raw material sources.
  - Quality of transport infrastructure (expressways, freight rail corridors, deep-water ports, cargo airports).
  - Availability, skill level, and wage rates of local labor.
  - Regional tax structures, government subsidies, and special economic zone (SEZ) incentives.
  - Availability and cost of utilities (power grid stability, industrial water, land acquisition prices).

## 3. Differences / Examples
| Evaluation Method | Type of Input Data | Analytical Output | Application Scope |
| :--- | :--- | :--- | :--- |
| **Center of Gravity** | Quantitative coordinates $(X, Y)$ and shipment volumes $(W)$ | Exact geographical coordinate $(\bar{X}, \bar{Y})$ | Locating a central warehouse among existing retail outlets |
| **Factor Rating Method** | Subjective expert scores and criterion weights | Composite ranking score across candidate cities | Choosing between alternative international countries or states |

## 4. Must Remember
- Facility location decisions are **permanent strategic investments**: once a $50 million distribution center is built, relocating it due to poor planning is prohibitively expensive.
- The Center-of-Gravity method provides an idealized geometric point; final site selection must adjust for actual road networks, geographical terrain barriers, and land zoning laws.

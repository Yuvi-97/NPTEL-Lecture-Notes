# Week 4 – Lecture 2: Bow-Tie: Common Cause Cut Sets

## 1. Key Concepts

- **Dependent Failure:** A condition where the probability of failure of one component is statistically dependent upon or altered by the failure or operational state of another component ($P(A \mid B) \neq P(A)$).
- **Common Cause Failure (CCF):** Defined by Mosleh et al. (1988) as a subset of dependent events in which two or more component fault states exist concurrently or within a short time interval as the direct result of a shared underlying cause, shock, or environmental mechanism.
- **Common Cause Cut Set (CCCS):** A minimal cut-set whose constituent basic events are triggered simultaneously by a single shared common cause (e.g., severe vibration, power outage, or operator error causing multiple redundant valves to fail).
- **Neutral Event ($*$):** A basic event in a fault tree that is functionally and environmentally independent of the specific common cause under evaluation.
- **Dominance Assumption in CCCS Derivation:** In quantitative analysis, neutral (independent random) failure probabilities are typically several orders of magnitude smaller than common-cause shock probabilities:
  $$P(\text{Neutral Event}) \ll P(\text{Common Cause Event})$$

---

## 2. Important Points

### 2.1 The Three Root Causes of Dependent Failures
1. **Coupling Mechanisms:** Physical, functional, or human ties that connect redundant components together.
2. **Failure Propagation Modes:**
   - *Cascade / Domino Propagation:* Failure of component $A$ transfers abnormal mechanical, electrical, or thermal stress to component $B$, inducing secondary failure.
   - *Parallel Common-Mode Shock:* A single external or shared internal disturbance impacts multiple components simultaneously.
3. **Management Deficiencies:** Latent organizational flaws, substandard safety policies, deficient maintenance manuals, or poor contractor oversight that create uniform vulnerabilities across multiple plant systems.

### 2.2 The Four Coupling Mechanisms (Kumamoto & Henley)

```
                       ┌── Functional Coupling (Operating boundary conditions)
                       ├── Common Unit Coupling (Shared utility/power line)
Coupling Mechanisms ───┤
                       ├── Proximity Coupling (Shared environmental stress zone)
                       └── Human Coupling (Shared operator/maintenance technician)
```

1. **Functional Coupling:** Device $A$ provides the necessary boundary condition or process environment for Device $B$ to function (e.g., an air conditioning system cannot cool a space if an automated window damper fails open).
2. **Common Unit Coupling:** Redundant, parallel components share a common physical utility or support line (e.g., two redundant cooling water pumps powered by the same motor control center or main electrical busbar; a bus fault disables both pumps).
3. **Proximity Coupling:** Multiple components are co-located within the same physical **zone of influence** on an environmental stress map (e.g., adjacent to a vibrating compressor, high-temperature furnace, or steam pipe subject to water hammer).
4. **Human Coupling:** Multiple independent safety loops are operated, tested, or maintained by the same individual or maintenance crew (e.g., a technician miscalibrates all pressure transmitters using an out-of-spec calibration gauge).

### 2.3 Taxonomy of Common Cause Categories (Kumamoto & Henley)
- **Environmental / Physical Stresses:**
  - *Impact:* Pipe whip, water hammer, missile hazard, earthquake structural movement.
  - *Vibration:* Rotating machinery resonance, foundation movement.
  - *Pressure:* Pressure surges, out-of-tolerance process changes, pump overspeed.
  - *Grit / Contaminants:* Airborne dust, metallic debris from unlubricated moving parts.
  - *Thermal Stress:* Radiant heat from fire, welding flash, cooling jacket failure, short circuits.
  - *Loss of Energy Source:* Shared drive shaft, common pneumatic air line, shared DC battery bank.
- **Plant Personnel / Human Errors:**
  - *Installation Contractor:* Incompetent installation or incorrect bolt torque across redundant units.
  - *Maintenance:* Misinterpreted maintenance procedures, inadequate technician training.
  - *Operation:* Overstressed operator under emergency conditions, invalid test sequence.
- **Aging & Manufacturing:**
  - *Design / Fabrication:* Batch defect in relay contact plating, substandard seal material.
  - *Simultaneous Aging:* Identical components of the same vintage reaching wear-out limits concurrently.

---

## 3. Differences / Examples

### 3.1 Comparison of Failure Types

| Failure Mechanism | Statistical Independence | Triggering Event | Primary Engineering Defense |
| :--- | :--- | :--- | :--- |
| **Independent Failure** | Fully Independent ($P(A \cap B) = P(A) \cdot P(B)$) | Random hardware component wear | Equipment redundancy (Parallel channels) |
| **Cascade Failure** | Sequential Dependency ($B$ fails after $A$) | Progressive stress transfer | Physical isolation, barriers, fast decoupling |
| **Common Cause Failure (CCF)** | Simultaneous Dependency ($P(A \cap B) \gg P(A) \cdot P(B)$) | Single shared root cause or shock | **Diversity** (different manufacturers/principles) & physical separation |

---

### 3.2 Boolean Representation of Common Cause Failure

For a 3-component redundant system ($A, B, C$), the total failure state of component $A$ is the union of its independent failure and all shared common-mode subsets:
$$A_{\text{total}} = A_{\text{indep}} \cup C_{AB} \cup C_{AC} \cup C_{ABC}$$
Where:
- $A_{\text{indep}}$ is the isolated random failure of $A$.
- $C_{AB}$ is the common-cause event disabling $A$ and $B$.
- $C_{AC}$ is the common-cause event disabling $A$ and $C$.
- $C_{ABC}$ is the global shock event disabling all three components simultaneously.

---

### 3.3 Derivation of Common Cause Cut Sets (CCCS)

#### Gate Reduction Rules Under the Dominance Assumption:
When deriving cut-sets for a specific common cause $C_k$, let neutral events be denoted by $(*)$:
1. **AND Gate with Common Cause Event ($C$) and Neutral Event ($*$):**
   - Since $P(*) \ll P(C)$, the probability of both occurring simultaneously is governed by the rare neutral event. The output is dominated by the **neutral event** ($*$).
2. **OR Gate with Common Cause Event ($C$) and Neutral Event ($*$):**
   - The OR gate fires if either event occurs. Since $P(C) \gg P(*)$, the output is dominated by the **common cause event** ($C$), and the neutral event is eliminated.

#### Step-by-Step Floor Plan Analysis:
Consider an industrial facility with rooms 101, 102, 104, 105, 190, 199:
- Components $5$ and $6$ are located in Room 102.
- Components $3, 4,$ and $12$ are located in Room 104.
- An operational human common cause ($O_1$: operator maintenance error) affects components $\{1, 3, 12\}$, while components $\{4, 6\}$ are neutral ($*$).
- An intermediate AND gate combines Common Cause Event $1$ with Neutral Events $\{4, 6\}$:
  - Applying the AND-rule yields $\{4, 6\}$ as dominant over the independent branch.
- An intermediate OR gate combines the resulting $\{4, 6\}$ with Common Cause Event $12$:
  - Applying the OR-rule eliminates neutral events $\{4, 6\}$ in favor of common cause event $12$.
- Running the MOCUS algorithm on the reduced fault tree for cause $O_1$ yields the final Common Cause Cut Set:
  $$CCCS(O_1) = \{1, 3, 12\}$$
All three components fail together whenever maintenance crew $O_1$ executes the flawed procedure.

---

## 4. Must Remember

- **Mosleh (1988) Definition:** CCF represents concurrent component failures resulting directly from a single shared cause.
- **Redundancy Fallacy:** Redundancy dramatically improves safety against *independent* random failures, but provides **zero protection against common cause failures** unless diversity is implemented.
- **Four Coupling Types:** Functional (process constraints), Common Unit (shared utilities), Proximity (spatial stress zones), and Human (shared personnel).
- **Dominance Rule in CCCS:**
  - Under an **AND gate**, the neutral event dominates.
  - Under an **OR gate**, the common cause event dominates.
- **Best Mitigations for CCF:** Physical spatial separation (defeats proximity coupling) and technological diversity (different operating principles/manufacturers defeat functional and maintenance coupling).

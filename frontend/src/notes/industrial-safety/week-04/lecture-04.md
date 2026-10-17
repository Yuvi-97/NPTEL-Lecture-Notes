# Week 4 – Lecture 4: Bow-Tie: Cut-Sets for Accident Scenarios (Cont.)

## 1. Key Concepts

- **Industrial Fire Protection Bow-Tie Model:** An applied reliability engineering case study (Modarres model) demonstrating scenario cut-set derivation for a chemical process plant under fire emergency conditions.
- **Onsite vs. Offsite Protection Systems:**
  - *Onsite Fire Protection:* Primary active suppression consisting of dual injection nozzles (Nozzle 1 and Nozzle 2) supplied by identical parallel pumps (Pump 1 operating, Pump 2 on auto-standby) drawing from an onsite industrial water reservoir.
  - *Offsite Fire Protection:* Municipal fire services and regional emergency responders summoned by plant operators only after onsite suppression fails.
- **Standby Redundancy & Common Cause Failure (CCF):** Identical standby pumps share common suction headers, identical maintenance crews, and shared power supplies. Incorporating CCF (via the **Beta-Factor Model**) is critical to avoid drastically overestimating system availability.
- **Three Core Accident Scenarios:**
  - **Scenario 1 ($S_1$ - Minor Loss):** Fire initiated $\to$ Onsite protection succeeds. Fire is extinguished locally with negligible asset damage.
  - **Scenario 2 ($S_2$ - Major Loss):** Fire initiated $\to$ Onsite protection fails $\to$ Offsite fire brigade summoned and succeeds. Due to unavoidable transit and mobilization delay, major structural damage occurs.
  - **Scenario 3 ($S_3$ - Catastrophic Loss):** Fire initiated $\to$ Onsite protection fails $\to$ Offsite fire brigade fails (e.g., hydrant failure, road blockage). Total plant destruction and potential fatalities occur.

---

## 2. Important Points

### 2.1 Event Tree Architecture for the Fire Protection System

```
Initiating Event           Onsite Protection             Offsite Fire Brigade              Accident Scenario /
   (Fire: IE)                 (Barrier 1)                    (Barrier 2)                       Consequence
       │                           │                              │
       ├───────────────────────────┼── Success (1 - Q1) ──────────┼─────────────────────────► S1: Minor Loss
       │                           │                              │
       │                           └── Failure (Q1) ──────────────┼── Success (1 - Q2) ─────► S2: Major Loss
       │                                                          │
       │                                                          └── Failure (Q2) ─────────► S3: Catastrophic Loss
```

1. **Scenario 1:** $P(S_1) = f(\text{Fire}) \times [1 - Q_1]$
2. **Scenario 2:** $P(S_2) = f(\text{Fire}) \times Q_1 \times [1 - Q_2]$
3. **Scenario 3:** $P(S_3) = f(\text{Fire}) \times Q_1 \times Q_2$

### 2.2 Fault Tree Decomposition of Onsite Protection Failure ($Q_1$)
Onsite protection fails if **both** injection paths fail (AND Gate):
- **Injection Path 1 Failure:** Nozzle 1 clogged, inlet valve closed, discharge valve closed, Pump 1 failed, or water tank unavailable.
- **Injection Path 2 Failure:** Nozzle 2 clogged, inlet valve closed, discharge valve closed, Pump 2 failed, or water tank unavailable.
- **Standby Pump Sub-Tree:** Pump failure incorporates:
  - Independent hardware wear of Pump 1 ($P_1$) or Pump 2 ($P_2$).
  - Operator failure to manually start standby pump.
  - Automatic alarm actuator failure.
  - Loss of electrical power (offsite grid loss and emergency diesel generator failure).
  - **Dependent Common Cause Failure ($CCF$):** Simultaneous disabling of both pumps due to shared lubrication, maintenance error, or suction line cavitation.

### 2.3 The Beta-Factor Model ($\beta$) for Standby Pumps
The total failure rate of a component ($\lambda_{\text{total}}$) is partitioned into independent ($\lambda_I$) and common-cause ($\lambda_{CC}$) contributions:
$$\lambda_{\text{total}} = \lambda_I + \lambda_{CC}$$
$$\lambda_{CC} = \beta \cdot \lambda_{\text{total}}, \quad \lambda_I = (1 - \beta) \cdot \lambda_{\text{total}}$$
Where $\beta$ is the common-cause fraction (typically $0.05 \le \beta \le 0.20$ for industrial standby pumping units).

---

## 3. Differences / Examples

### 3.1 Quantitative Cut-Set Evaluation for Onsite Protection

The Boolean reduction of the Onsite Fault Tree yields **24 Minimal Cut-Sets**:
- **Order-1 Minimal Cut-Sets (Highest Vulnerability):**
  - $MCS_1 = \{CCF\}$ (Common cause failure of both pumps: $q_{CCF} = 1.8 \times 10^{-3}$).
  - Water tank unavailability (shared single water reservoir).
- **Order-2 Minimal Cut-Sets:**
  - $\{P_1, P_2\}$ (Independent hardware failure of both pumps: $q_1 \times q_2 = 10^{-2} \times 10^{-2} = 10^{-4}$).
  - $\{P_1, \text{Operator Failure}\}$, $\{P_2, \text{Actuator Failure}\}$, etc.

#### Quantitative Impact:
- Total Onsite System Failure Probability:
  $$Q_1 = Q(\text{Onsite Fails}) \approx 0.0028$$
- Fractional Contribution of Common Cause Failure ($CCF$):
  $$\frac{q_{CCF}}{Q_1} = \frac{1.8 \times 10^{-3}}{2.8 \times 10^{-3}} \approx 64.3\%$$
*Critical Finding:* Even though an active-standby redundant pump was installed to achieve high reliability, **a single common cause mode accounts for nearly two-thirds of all onsite system failures**.

---

### 3.2 Importance Measure Application to Accident Sequences

Applying sensitivity measures to the 14 basic events of the fire protection system:
- **Risk Decrease Factor (RDF):**
  $$RDF_i = \frac{Q_0}{Q_0(Q_i = 0)}$$
  - Components with the highest RDF are the **Common Cause Failure ($CCF$) mode** and the **Water Tank Header**.
  - Making the water supply 100% reliable and eliminating common-mode failure yields the steepest drop in catastrophic scenario probability.
- **Risk Increase Factor (RIF):**
  $$RIF_i = \frac{Q_0(Q_i = 1)}{Q_0}$$
  - Primary single-point items (e.g., common suction valve, power busbar) exhibit massive RIF values ($RIF > 10^2$).
  - Taking a shared suction valve offline for maintenance while the process unit operates escalates fire risk to intolerable levels.

---

### 3.3 Offsite Protection Fault Tree ($Q_2$)

The municipal brigade failure logic is modeled as:
$$F_2 = C \cup (A \cap B)$$
Where:
- $C$: Water supply failure at offsite hydrant / pump truck breakdown.
- $A$: Delayed alarm transmission from plant operator to municipal dispatch.
- $B$: Traffic congestion or adverse weather delaying brigade arrival beyond the critical flashover time window ($T_{\text{flashover}}$).

The probability of **Scenario 3 (Catastrophic Loss)** is:
$$P(S_3) = f(\text{Fire}) \times Q_1 \times Q_2$$
Assuming fire frequency $f(\text{Fire}) = 0.01\text{/year}$, $Q_1 = 0.0028$, and $Q_2 = 0.05$:
$$P(S_3) = 0.01 \times 0.0028 \times 0.05 = 1.4 \times 10^{-6}\text{/year}$$
This falls within the acceptable ALARP region ($< 10^{-5}$/year) for industrial catastrophe.

---

## 4. Must Remember

- **Standby Fallacy:** Adding an identical standby pump provides negligible safety improvement if common-cause failures (e.g., shared suction valve, shared power supply, same maintenance technician) are not eliminated.
- **CCF Dominance:** In the benchmark fire protection system, common cause failure ($CCF$) constitutes an Order-1 cut-set contributing **64.3%** of total system failure probability.
- **Beta-Factor Model:** Partitions total component hazard rate into independent ($\lambda_I = (1-\beta)\lambda$) and common-cause ($\lambda_{CC} = \beta\lambda$) components.
- **Offsite Delay Dilemma:** Even when municipal fire brigades are 100% successful, arrival delay means Scenario 2 inevitably incurs **major structural damage**; only onsite automatic systems can achieve **minor loss**.
- **Dual Maintenance Focus:**
  - Use **RDF** to guide engineering upgrades that eliminate common failure modes.
  - Use **RIF** to establish strict Operational Limiting Conditions (Technical Specifications) forbidding online maintenance of single-point components.

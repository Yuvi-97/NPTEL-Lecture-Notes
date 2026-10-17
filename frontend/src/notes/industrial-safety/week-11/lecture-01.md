# Week 11 – Lecture 1: Occupational Health & Safety Management Systems (OH&SMS) and OHSAS 18001-Part I

## 1. Key Concepts
- **System Integrity in Industrial Operations:** The foundational requirement that machines, processes, systems, and personnel operate strictly according to their intended design parameters and safety specifications throughout their operational lifecycle.
- **The Three Pillars of Industrial System Integrity:**
  1. *Operational Integrity:* Ensuring processes, operating envelopes, chemical reactions, and physical flows function precisely as intended by plant designers without hazardous deviations.
  2. *Mechanical Integrity:* Ensuring equipment, containment vessels, piping networks, relief systems, and structural components maintain physical soundness and mechanical reliability under operational stresses.
  3. *Human Integrity:* Ensuring workers, technicians, and managers possess verified competencies, adhere strictly to standard operating procedures (SOP), and execute tasks responsibly without procedural drift or shortcuts.
- **Residual (Inherent) Risk ($R_R$):** The baseline risk built directly into an industrial facility or system at the design, engineering, or manufacturing stage. It arises from technological limitations, capital expenditure constraints, or designers' incomplete hazard perception.
- **Entropic Risk ($R_E$):** The progressive accumulation of risk over time resulting from the natural thermodynamic and organizational degradation (entropy) of operating systems—including mechanical wear, lack of maintenance, procedural violations, and loss of skilled personnel.
- **ALARP Principle (As Low As Reasonably Practicable):** The regulatory and engineering benchmark requiring that risks be mitigated to a level where the cost, time, and effort of further reduction are grossly disproportionate to the safety benefit achieved.

---

## 2. Important Points

### 2.1 The Three Integrities and Catastrophic Industrial Failures
System integrity fails when any of the three dimensions breaks down:
1. **Failure of Operational Integrity — Bhopal Disaster (1984):**
   - Water entered a methyl isocyanate (MIC) storage tank, triggering a violent runaway exothermic reaction and catastrophic toxic gas release (>3,000 immediate fatalities, >600,000 injured).
   - The facility lost operational integrity because operating conditions deviated completely from designer intent (the design never intended water ingress into the MIC storage vessel).
2. **Failure of Mechanical Integrity — Piper Alpha Disaster (1988):**
   - A pressure relief valve was removed from a primary condensate injection pump for routine maintenance, and an unsealed blind flange was fitted loosely by hand.
   - The backup pump tripped; unaware of the maintenance shutdown, operators engaged the primary pump. Condensate leaked at high pressure from the unbolted flange, vaporized, and ignited, triggering escalating explosions that destroyed the offshore platform (167+ fatalities).
   - A breakdown in mechanical tightening (lack of mechanical integrity) coupled with communication lapses led directly to total loss of containment.
3. **Failure of Human Integrity:**
   - Operators bypassing interlocks, failing to follow lockout-tagout (LOTO), operating equipment above rated speeds, or lacking the requisite competency to identify nascent hazards.

### 2.2 Four Dimensions of System Risk
Residual and entropic risks originate from four interconnected operational pillars:
1. **Processes ($P$):** Operating philosophies, flow dynamics, operating temperatures, pressures, and chemical reaction pathways.
2. **Technology ($T$):** Equipment selection, automation levels, fail-safe mechanisms, and instrumentation fidelity.
3. **Physical Environment ($E$):** Ambient temperatures, humidity, wind loads, elevation, corrosive atmospheres, and physical layout.
4. **Human Resources ($H$):** Competency matrix, technical training, staffing levels, supervisory vigilance, and organizational safety culture.

### 2.3 Mathematical Formulation of System Risk
The total operational risk ($R_{\text{Total}}$) of any industrial system across its lifecycle is the sum of its residual baseline risk and its accumulated entropic degradation risk:
$$R_{\text{Total}} = R_R + R_E$$
Where:
- $R_R$: Residual risk established at the drawing board.
- $R_E$: Entropic risk resulting from the compound deterioration across processes, technology, environment, and human capabilities:
  $$R_E = f(P_{\text{degradation}} \times T_{\text{degradation}} \times E_{\text{degradation}} \times H_{\text{degradation}})$$

### 2.4 The Dynamic Risk-Degradation Cycle
1. As an industrial plant operates, lack of timely maintenance, uncalibrated instruments, and worker turnover cause entropic degradation, eroding system integrity and driving $R_{\text{Total}}$ toward unacceptable levels.
2. When risk reaches an alarming threshold, management intervenes with corrective maintenance and inspections, temporarily depressing entropic risk.
3. **Effective OH&SMS Strategy:**
   - *Phase 1:* Control and arrest Entropic Risk ($R_E$) through rigorous preventive maintenance, asset integrity programs, and continuous workforce training.
   - *Phase 2:* Once operational stability is established at a low entropic baseline, systematically re-engineer the system to drive down Residual Risk ($R_R$) toward the ALARP region (e.g., through inherently safer design, physical interlocks, and elimination of elevated working hazards).

---

## 3. Differences / Examples

### 3.1 Residual Risk vs. Entropic Risk

| Characteristic | Residual Risk ($R_R$) | Entropic Risk ($R_E$) |
| :--- | :--- | :--- |
| **Origin** | Introduced during initial design, drawing-board engineering, and capital manufacturing. | Generated during ongoing operations through physical wear and organizational decay. |
| **Primary Driver** | Cost trade-offs, lack of hazard awareness by designers, technology limitations. | Inadequate preventive maintenance, equipment aging, operator fatigue, procedural drift. |
| **Mitigation Method** | Fundamental engineering redesign, substitution, automation, elimination of hazards. | Routine maintenance, inspections, operational discipline, refresher competency training. |
| **Railway Example** | Unmanned level crossings (risk inherently built into track layout). | Brake system degradation or rail track cracking over extended operational use. |
| **Height Example** | Locating valves at high elevation, requiring operators to climb ladders. | Deterioration of safety harnesses, rusted scaffolding, or worn ladder rungs. |

### 3.2 Case Study: Molten Iron Transport in Integrated Steel Plants
An integrated steel manufacturing facility produces 10,000–20,000 tonnes of molten iron per day in a Blast Furnace (BF) and transfers it to the Steel Melting Shop (SMS) at temperatures $>1000^\circ\text{C}$ using 300–500 tonne refractory-lined **Torpedo Ladle Cars**:
- **Mechanical Integrity Demands:** Shell plates, refractory lining thickness, trunnions, wheel sets, and structural axles must withstand extreme thermal and dynamic mechanical loads without catastrophic rupture.
- **Operational Integrity Demands:** Controlled pouring rates, thermal shock management, and transit speed control across track curvatures and switches to prevent derailment.
- **Human Integrity Demands:** Qualified locomotive operators strictly adhering to transit speed restrictions and track signal interlocks.
- Failure of any single integrity pillar with 400 tonnes of molten metal results in catastrophic plant destruction and loss of life.

---

## 4. Must Remember
- **The Three Integrities:** Total system safety requires simultaneous compliance across **Operational Integrity** (runs as designed), **Mechanical Integrity** (hardware containment is sound), and **Human Integrity** (workers follow procedures with verified competencies).
- **Core Risk Identity:** Total System Risk is the composite of design-phase residual risk and operational entropic risk:
  $$R_{\text{Total}} = R_R + R_E$$
- **ALARP Principle:** Risk must be driven down to As Low As Reasonably Practicable, balancing safety gain against economic and technological feasibility.
- **OH&SMS Implementation Priority:** First stabilize and minimize entropic risk ($R_E$) through rigorous maintenance and operating discipline; then systematically re-engineer out the residual risk ($R_R$).
- **Inherent Safety Over Enforcement:** Designing out residual risk (e.g., building a rail overpass or lowering valves to ground level) is far more reliable than forcing human operators to navigate inherent hazards via administrative rules.

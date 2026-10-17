# Week 5 – Lecture 3: Energy Control Model and Hazard Control Hierarchy

## 1. Key Concepts

- **Energy Damage Model:** An accident causation theory originally formulated by William Haddon Jr. stating that all workplace accidents, acute injuries, and structural destruction result from the **uncontrolled transfer or release of energy** (kinetic, potential, thermal, chemical, electrical, or pressure) across boundaries in amounts exceeding the damage threshold of human tissue or engineering structures.
- **Hazard as an Energy Source:** In this paradigm, a hazard is defined as any operational state possessing energy of sufficient magnitude to produce harm if control is lost.
- **The Six Energy States of an Industrial System:**
  1. **Zero Energy State:** The system is completely dormant, isolated, and de-energized (e.g., parked car with engine off; fully depressurized, isolated storage tank).
  2. **Non-Zero Controlled Energy State:** Normal design operation; energy is harnessed, contained, and directed within intended operating envelopes (e.g., car driven at safe speed; vessel within design operating pressure).
  3. **Uncontrolled Energy State:** The system deviates beyond its safe operating limits (e.g., car skidding toward a cyclist; vessel entering an overpressure condition).
  4. **Re-Controlled Energy State:** Active protective intervention arrests the deviation and restores normal equilibrium without loss (e.g., effective anti-lock braking; automated pump shutdown before burst pressure is reached).
  5. **Controlled Dissipation:** Energy escaping the primary envelope is channeled or absorbed harmlessly without causing injury or asset damage (e.g., car steered safely onto a gravel run-off strip; overpressure vented safely through a scrubber flare).
  6. **Uncontrolled Dissipation:** Energy discharges violently across human or structural barriers, causing irreversible trauma, destruction, or fatalities (e.g., vehicle impacts cyclist; pressure vessel ruptures into shrapnel).
- **Hazard Control Hierarchy:** A structured sequence of risk mitigation strategies arranged in strict descending order of engineering effectiveness, prioritizing the elimination of energy at the source over reliance on human behavior.

---

## 2. Important Points

### 2.1 Energy State Transitions in Safety Engineering

```
[ Zero Energy State ] ──(Startup)──► [ Non-Zero Controlled Energy ]
                                                │
                                         (Process Upset)
                                                ▼
                                    [ Uncontrolled Energy ]
                                                │
                          ┌─────────────────────┴─────────────────────┐
                          ▼                                           ▼
            (Successful Intervention)                        (Intervention Fails)
                          │                                           │
                          ▼                                           ▼
               [ Re-Controlled Energy ]                   [ Dissipation of Energy ]
                          │                                           │
                          ▼                         ┌─────────────────┴─────────────────┐
               (Return to Normal)                   ▼                                   ▼
                                          [ Controlled Dissipation ]       [ Uncontrolled Dissipation ]
                                            (Vented Safely to Flare)            (Catastrophic Rupture)
```

### 2.2 Haddon’s Nine Hazard Control Principles (1970)
William Haddon Jr. defined nine fundamental design strategies for energy control, ranked from **most effective** (Principle 1) to **least effective** (Principle 9):

1. **Principle 1 ($P_1$) – Avoid the Hazard (Elimination at Design Stage):**
   - Prevent the hazard from being brought into existence in the first place. The system never departs from a zero-risk state (e.g., designing underground works so elevation/fall hazards do not exist).
2. **Principle 2 ($P_2$) – Limit the Amount of Energy Marshalled:**
   - Reduce the total inventory of energy to the minimum required for function (e.g., handling smaller container batches; reducing crane hoisting speeds; operating at low DC voltages).
3. **Principle 3 ($P_3$) – Substitute the Hazard:**
   - Replace a hazardous material or high-energy mechanism with an inherently benign alternative (e.g., substituting toxic solvent with water-based cleaner; using inert nitrogen instead of combustible gas).
4. **Principle 4 ($P_4$) – Prevent the Build-Up of Energy:**
   - Intervene to prevent energy from accumulating to critical levels (e.g., stress-relief heat treatment of welds; pressure regulator interlocks; ventilation to prevent explosive vapor accumulation).
5. **Principle 5 ($P_5$) – Prevent the Release of the Hazard:**
   - Design high-integrity containment with conservative safety factors to prevent escape (e.g., thick-walled pressure vessels; double-jacketed piping; fail-closed isolation valves).
6. **Principle 6 ($P_6$) – Modify the Rate or Spatial Distribution of Release:**
   - If energy begins to escape, throttle or slow down the release rate to keep it below damaging thresholds (e.g., spring-loaded pressure relief valves; blast orifices; flame arrestors). *Acts to re-control energy.*
7. **Principle 7 ($P_7$) – Separate the Hazard in Space or Time:**
   - *Spatial Separation:* Locate high-pressure or toxic units at remote plant boundaries; install blast-deflecting berms.
   - *Temporal Separation:* Schedule hazardous operations when workers are absent (e.g., blasting in an underground mine only after completely clearing the shaft).
8. **Principle 8 ($P_8$) – Incorporate Material Barriers:**
   - Interpose physical barriers between the released energy and vulnerable targets (e.g., machine guards, acoustic enclosures, safety nets, and Personal Protective Equipment like respirators and arc-flash suits).
9. **Principle 9 ($P_9$) – Modify Relevant Basic Surface Qualities:**
   - Alter contact geometries to minimize point-contact stress and injury (e.g., radiusing sharp machinery corners; installing rubber padding; adding impact-absorbing bumpers).

### 2.3 Synthesis: Energy State Mapping of Haddon's Principles
- **Principles $P_1$ through $P_5$:** Function **upstream** to maintain energy in the **Controlled State** (True Prevention).
- **Principle $P_6$:** Functions at the boundary to **Re-control Energy**.
- **Principles $P_7, P_8, P_9$:** Function **downstream** to force **Controlled Dissipation** after energy has escaped (Consequence Mitigation).

---

## 3. Differences / Examples

### 3.1 Mapping Haddon’s Principles to Industrial Case Studies

| Principle | Core Mechanism | Case 1: Toxic Pressurized Gas Storage | Case 2: Underground Mine Roof Fall |
| :---: | :--- | :--- | :--- |
| **$P_1$ (Avoid)** | Prevent hazard creation | Eliminate on-site storage; generate gas on-demand | Adopt continuous surface mining (eliminate roof) |
| **$P_2$ (Limit)** | Reduce energy inventory | Store mini-cylinders rather than a 50-ton bulk sphere | Minimize gallery width and excavation height |
| **$P_3$ (Substitute)** | Replace with benign form | Replace toxic gas with non-toxic inert argon | Not applicable (geological strata cannot be replaced) |
| **$P_4$ (Prevent Build-up)** | Prevent stress accumulation | Install temperature control jackets to stop pressure rise | Extract pillars systematically to redistribute overburden stress |
| **$P_5$ (Prevent Release)** | High-integrity containment | Seamless forged vessel with safety factor $SF \ge 4.0$ | Install pre-stressed rock bolts to bind rock laminations |
| **$P_6$ (Modify Rate)** | Throttle energy release | High-capacity relief valve venting to a scrubber flare | Install yielding hydraulic props that deform gradually under load |
| **$P_7$ (Time/Space)** | Separate target & energy | Locate vessel 500 m from control room; blast berms | Fire rock-blasting charges only during shift change |
| **$P_8$ (Barriers & PPE)** | Interpose shields / PPE | Install deluge water curtains; mandate SCBA respirators | Install overhead steel wire mesh; mandate hard hats |
| **$P_9$ (Modify Qualities)** | Reduce point-impact shock | Add chemical odorant to alert personnel at trace levels | Chamfer tunnel intersections to eliminate stress-raising sharp corners |

---

### 3.2 The Common Misconception Regarding PPE ($P_8$)
- **The Shop-Floor Fallacy:** Uninformed safety managers frequently treat machine guards and PPE ($P_8$) as the "primary" safety response.
- **The Engineering Reality:** In Haddon’s scientific hierarchy, **material barriers and PPE occupy the 8th position out of 9**. 
- Relying on PPE means the hazardous energy is fully marshalled, uninhibited, and actively escaping containment; PPE relies 100% on continuous human compliance and offers the lowest reliability of any safety intervention.

---

## 4. Must Remember

- **Foundational Definition:** Accidents are physical events caused by the **uncontrolled transfer and dissipation of energy** exceeding human or structural tolerance limits.
- **Six Energy States:** Zero $\to$ Controlled $\to$ Uncontrolled Deviation $\to$ Re-Controlled $\to$ Controlled Dissipation (safe) vs. Uncontrolled Dissipation (disaster).
- **Haddon’s Decreasing Order:** $P_1$ (Avoid) is the most effective and reliable; $P_8$ (Barriers/PPE) and $P_9$ (Padding) are downstream mitigations.
- **Prevention Boundary:** Principles $P_1$ to $P_5$ prevent energy escape; Principle $P_6$ re-controls energy; Principles $P_7$ to $P_9$ govern dissipation.
- **Temporal Separation ($P_7$):** Operating high-energy risks when people are geographically or temporally absent (e.g., mine blasting after evacuation) eliminates societal risk even if energy dissipates destructively.

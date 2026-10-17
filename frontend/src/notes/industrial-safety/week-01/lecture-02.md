# Week 1 – Lecture 2: Key concepts and terminologies

## 1. Key Concepts
- **Safety:** The degree of freedom from unacceptable risk, danger, injury, or operational loss. Because zero-energy operations are impossible in productive industries, absolute ($100\%$) safety is unattainable; safety is the management of risk within broadly acceptable boundaries.
- **Hazard (MIL-STD-882D Standard Definition):** Any real or potential condition that can cause injury, illness, or death to personnel, or damage to or loss of equipment, property, or environment.
  - *Philosophical Nature:* A hazard is a **deterministic entity**—it is a pre-existing physical or operational condition engineered, built into, or created within the system.
- **Mishap / Accident (MIL-STD-882D Standard Definition):** An unplanned event or series of events resulting in death, injury, occupational illness, damage to or loss of equipment or property, or damage to the environment.
  - *Philosophical Nature:* An accident is a **stochastic/random realization** resulting from an activated hazard path.
- **Incident vs. Accident vs. Near Miss:**
  - *Incident:* An undesirable event or sequence of events with any degree of severity, including events with zero harm or property damage (e.g., slipping on a wet floor but catching one's balance).
  - *Accident:* An incident that results in actualized harm, fatality, injury, or physical loss.
  - *Near Miss:* An incident where no injury, illness, or damage occurred, but which had the full potential to do so under marginally altered circumstances.
  - *Key Relationship:* Every accident is an incident, but not every incident is an accident.
- **Hazard Theory (State Transition Model):** A hazard represents the dormant **"Before State"** (potential condition), whereas an accident represents the actualized **"After State"** (consequences). Safety engineering consists of mapping the **State Transition Path** and engineering barriers to prevent the transition.

---

## 2. Important Points

### The Hazard Triangle (Clifton Ericson System Safety Model)
A complete hazard is composed of three interdependent operational elements (*Mnemonic: **HIT***):
1. **Hazardous Element (HE):**
   - The basic source of hazardous energy, chemical toxicity, or physical mass that creates the potential impetus for harm (e.g., high-voltage electrical busbar, compressed flammable gas cylinder, suspended crane load, liquid toxic acid).
2. **Initiating Mechanism (IM):**
   - The trigger event or sequence of interrelated sub-events that destabilizes the dormant hazardous element and initiates energy release (e.g., insulation breakdown leading to exposed electrical contacts, valve gasket failure, an operator inadvertently touching an exposed conductor).
   - Often involves multiple chained mechanisms ($IM_1 \rightarrow IM_2 \rightarrow \dots \rightarrow IM_n$).
3. **Target and Threat (TT):**
   - *Target:* The vulnerable system entity susceptible to damage (workers, plant machinery, facility structure, surrounding community, natural ecosystem).
   - *Threat:* The specific mode of harm or physiological damage inflicted on the target (e.g., ventricular fibrillation / electrocution, severe thermal burns, lung toxicity, structural collapse).

```
          [Hazardous Element (HE)]
                 /      \
                /        \
               /          \
   [Initiating              [Target & Threat]
    Mechanism (IM)]
```
*Principle of Hazard Completion:* An accident cannot occur unless all three elements of the triangle are simultaneously complete and connected. Eliminating any single component prevents the accident.

### Rules for Proper Hazard Documentation
Accident reporting frequently confuses accidents with hazards. A properly documented hazard statement must describe all components of the hazard triangle rather than merely stating a realized injury:
- **Flawed / Poor Hazard Statements:**
  - *"Repair technician slips on oil."* (Describes the realized accident consequence, not the hazard condition).
  - *"Signal MG-71 occurs."* (Unclear; omits the hazardous element and operational consequences).
  - *"Worker falls from platform."* (Describes the accident outcome).
- **Technically Sound / Good Hazard Statements:**
  - *"Overhead lubricating valve V-21 leaks hydraulic oil onto the walkway below; the spill remains uncleaned and unbarricaded, creating a slip-and-fall hazard for operating maintenance technicians."*
  - *"High-voltage ($440\text{V}$) electrical panel PB-4 contains deteriorated wire insulation with exposed terminals accessible without interlocking, presenting an electrocution threat to technicians during routine filter changes."*

---

## 3. Differences / Examples

### Detailed Taxonomical Comparison: Hazard, Incident, and Accident
| Dimension | Hazard | Incident | Accident / Mishap |
| :--- | :--- | :--- | :--- |
| **System State** | Potential / Dormant ("Before State") | Realized dynamic event sequence | Realized loss outcome ("After State") |
| **Mathematical Nature**| Deterministic (built into physical layout) | Probabilistic event activation | Stochastic outcome with loss |
| **Severity Level** | Latent capacity to cause harm | Zero to catastrophic severity | Substantial harm, injury, or loss |
| **Example Scenario** | Unshielded rotating lathe chuck with exposed protruding jaw bolts | Worker's sleeve catches slightly on rotating lathe chuck but tears free without bodily injury | Worker's sleeve is drawn into lathe chuck, resulting in arm fracture and amputation |

### The Electrical Electrocution Causal Path
- **Hazardous Element (HE):** $440\text{V}$ electrical power supply line.
- **Initiating Mechanism 1 ($IM_1$):** Physical insulation degrades over time, creating exposed bare wiring contacts.
- **Initiating Mechanism 2 ($IM_2$):** Maintenance technician touches the exposed contact without turning off the circuit breaker or wearing dielectric gloves.
- **Target:** Maintenance technician.
- **Threat:** Fatal electrical shock, ventricular fibrillation, and thermal contact burns.
- **Engineered Intervention:** Installing ground fault circuit interrupters (GFCI), physical barrier conduit shielding, and enforcing Lockout/Tagout (LOTO) protocols breaks the chain between $HE$ and $IM_2$.

---

## 4. Must Remember
- **MIL-STD-882D** provides the standard engineering definitions: a **hazard** is a potential condition capable of causing mishap, while a **mishap** is the actualized unplanned event causing death, injury, or property loss.
- Hazards are **deterministic physical states** created during design, construction, or maintenance; accidents are **stochastic event realizations**.
- Under the **Hazard Triangle model**, every complete hazard consists of three mandatory elements: **Hazardous Element (HE), Initiating Mechanism (IM), and Target & Threat (TT)**.
- An accident occurs if and only if the hazard triangle is **complete**; removing any one of the three components successfully prevents the mishap.
- An **incident** encompasses all unplanned events (including near misses with zero harm); every accident is an incident, but an incident with no damage is a near miss.
- Proper hazard documentation must never simply state an accident outcome (e.g., *"worker slipped"*); it must specify the **hazardous energy source, initiating physical failure, and vulnerable target**.
# Week 9 – Lecture 3: Human Error Identification

## 1. Key Concepts

### Systematic Human Error Identification (HEI)
- **HEI Process Architecture:** Evaluating human reliability in safety-critical systems requires a structured, multi-phase engineering protocol:
  $$\text{Task Analysis (HTA)} \longrightarrow \text{Human Error Analysis (AEMA / Human HAZOP)} \longrightarrow \text{Error Quantification (HEP)} \longrightarrow \text{Error Reduction Design}$$
- **Task Analysis:** A formal analytical technique that describes how human work is organized to achieve specific operational goals. It breaks down complex jobs into their cognitive and physical components, establishing a baseline against which deviations can be identified.
- **Hierarchical Task Analysis (HTA):** The standard industrial methodology for decomposing a high-level operational goal top-down into subordinate sub-tasks, operations, and elemental physical actions.
- **Action Error Mode Analysis (AEMA):** The human factors equivalent of Failure Mode and Effects Analysis (FMEA), mapping human task errors to their plant consequences and remedial safeguards.

---

## 2. Important Points

### 1. Hierarchical Task Analysis (HTA) Structure
HTA breaks tasks down to the execution level (typically 4 to 5 levels deep) using three structural rules:

```
[ Goal 0: Fill Road Tanker with Chlorine ]
                     │
         Plan 0: Do 1 to 4 in strict order
  ┌──────────────────┬──────────────────┬──────────────────┐
  │                  │                  │                  │
[ 1.0 Park & Check ] [ 2.0 Prepare Tanker ] [ 3.0 Connect & Fill ] [ 4.0 Uncouple & Depart ]
                     │
         Plan 2.0: Do (2.1 or 2.2 in either order), then (2.3 to 2.5 in order)
  ┌──────────────────┬──────────────────┬──────────────────┬──────────────────┐
  │                  │                  │                  │                  │
[ 2.1 Check Valve ] [ 2.2 Check Weight ] [ 2.3 Set Alarm ] [ 2.4 Purge Line ] [ 2.5 Connect Arm ]
```

1. **Plans:** Explicit logic statements that govern the sequence, conditions, and contingencies under which subordinate tasks are executed (e.g., "Do in strict chronological order," "Do 2.1 or 2.2 in either order," "Wait for temperature $\le 40^\circ\text{C}$ before proceeding").
2. **Stopping Rule:** A clear heuristic criterion that prevents infinite decomposition: **"Stop re-describing when further decomposition adds no useful safety or operational information."** (i.e., when elementary physical actions such as turning a switch or checking a gauge are reached).
3. **Numbering Scheme:** Strict decimal numbering (1.0, 2.0, 2.1, 2.1.1) to maintain exact structural traceability from top goal to bottom action.

---

### 2. Action Error Mode Analysis (AEMA / Human FMEA)
Starting from elemental task steps identified in HTA, AEMA systematically identifies how each human action can fail:
- **Worksheet Structure:**
  1. **Action Description:** The intended task step (e.g., "Close manual isolation valve PV-1").
  2. **Action Error Mode:** The physical way the action fails (e.g., "Close wrong valve PV-2," "Valve left partially open," "Valve closed too late").
  3. **Action Error Cause:** The psychological mechanism or PSF (e.g., "Inadequate valve tagging," "Distraction by alarm," "Lapse of attention").
  4. **Error Consequences:** Direct process impact (e.g., "Pressure builds up rapidly, toxic chlorine released, explosion risk").
  5. **Detectability:** How the error will be discovered (e.g., "Control room mimic panel alarm," "Secondary visual check").
  6. **Risk Reduction Measure:** Ergonomic redesign or procedural safeguard (e.g., "Distinctive color-coding," "Mechanical key interlock system").

---

### 3. Human HAZOP Guide Words
Human HAZOP applies standardized guide words to operational procedures and task steps to uncover potential human failures:

| Guide Word | Interpretation for Human Action | Industrial Example |
| :--- | :--- | :--- |
| **Omit / Not Done** | Entire operational step is skipped | Technician forgets to drain condensate before opening steam valve |
| **More / Higher** | Action performed with excessive magnitude or duration | Operator adds twice the prescribed quantity of catalyst to the reactor |
| **Less / Lower** | Action performed with insufficient magnitude | Bolt tightened to only $50\%$ of required torque setting |
| **Early** | Action performed before prerequisite conditions are met | Vessel opened before pressure has dropped to atmospheric |
| **Late** | Action performed after the required operational window | Emergency coolant valve opened only after thermal runaway has initiated |
| **Reverse** | Action performed in opposite sequence or direction | Opening drain valve before closing high-pressure supply line |
| **Other than / Wrong** | An entirely incorrect action is performed | Turning the fuel gas supply valve instead of the nitrogen purge valve |

---

## 3. Differences / Examples

### Synthesis: Comparison of Major HEI Techniques
| Technique | Input Requirement | Core Analytical Mechanism | Primary Strength |
| :--- | :--- | :--- | :--- |
| **Hierarchical Task Analysis (HTA)** | System documentation, SOPs | Top-down goal decomposition with plans | Complete, exhaustive task baseline |
| **Action Error Mode Analysis (AEMA)** | Elemental actions from HTA | FMEA-style error mode and effect worksheet | Simple, intuitive, direct plant impact link |
| **Human HAZOP** | Operating instructions, P&IDs | Applying standardized guide words to tasks | Excellent for batch and sequential processes |
| **SHERPA** | HTA task steps | Categorizing errors into Action, Retrieval, Checking, Selection, Communication | High psychological and ergonomic depth |

---

## 4. Must Remember

- The systematic Human Error Identification (HEI) sequence is:
  $$\text{Task Analysis} \longrightarrow \text{Error Identification} \longrightarrow \text{Error Quantification} \longrightarrow \text{Error Reduction}$$
- Hierarchical Task Analysis (HTA) relies on three essential elements:
  - **Plans:** Define procedural rules and conditional sequencing.
  - **Stopping Rule:** Cease decomposition when no further useful safety insight is added.
  - **Numbering:** Decimal traceability linking sub-tasks to the top goal.
- Action Error Mode Analysis (AEMA) applies FMEA logic to human actions, examining error modes, root causes, process consequences, and risk reduction controls.
- Human HAZOP uses procedural guide words (Omit, More, Less, Early, Late, Reverse, Other than) to uncover operational deviations.
- Effective error identification must always analyze tasks down to individual elemental operations before attempting quantitative reliability modeling.

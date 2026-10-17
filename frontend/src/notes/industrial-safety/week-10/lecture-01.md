# Week 10 – Lecture 1: Accident Investigation

## 1. Key Concepts

### Philosophy and Objective of Accident Investigation
- **Purpose of Investigation:** The primary goal of industrial accident investigation is to identify the underlying **root causes (latent failures)** and system deficiencies to formulate corrective actions that prevent recurrence.
- **The "No-Blame" Engineering Principle:** Modern industrial safety rejects the punitive approach of merely identifying frontline human culprits ("who made the mistake"). Punitive investigations incentivize workers to conceal near-misses and hazards. Effective investigation treats human error as a symptom of deeper systemic, technical, or organizational flaws.
- **Near-Miss Reporting:** Any unplanned event that did not result in injury, illness, or damage, but had the realistic potential to do so under slightly altered circumstances. Investigating high-potential near-misses provides proactive safety insights without suffering actual catastrophic loss.

---

## 2. Important Points

### 1. The Incident Investigation Process Flow
In large industrial facilities, accident and incident investigations follow a standardized multi-stage workflow:

```
[ Incident / Near-Miss Occurs at Workplace ]
                      │
                      ▼
[ Immediate Reporting & Incident Logging to Section Manager ]
                      │
                      ▼
[ Initial Severity Assessment & Notification to Section Head ]
                      │
                      ▼
[ Formation of Multidisciplinary Investigation Team ]
                      │
                      ▼
[ Site Inspection, Evidence Collection, & Witness Interviews ]
                      │
                      ▼
[ Root Cause Analysis (Timeline, 5-Why, Causal Tree) ]
                      │
                      ▼
[ Preparation of Formal Investigation Report & Recommendations ]
                      │
                      ▼
[ Section Head Review & Executive Management Sign-off ]
                      │
                      ▼
[ Safety Personnel Tracking & Implementation Verification ]
```

---

### 2. Information Categories Collected During Investigation
Incident investigations capture four fundamental dimensions of operational data:
1. **Process & Procedural Factors:**
   - Were standard operating procedures (SOPs) available, technically adequate, and clear?
   - Was the correct work permit (e.g., hot work, confined space, cold work) issued and verified?
   - Did operational procedures contain ambiguities or encourage procedural shortcuts?
2. **Technological & Engineering Factors:**
   - Did equipment operate within rated mechanical, electrical, and thermal design limits?
   - Were safety interlocks, relief valves, and automatic trips calibrated and operational?
   - Was preventive maintenance performed on schedule, or were parts deferred?
3. **Physical Workplace Environment:**
   - Ambient environmental stresses: illumination levels, excessive noise, toxic vapor concentration, humidity, extreme temperature, and poor ventilation.
   - Housekeeping: wet floors, tripping obstacles, restricted emergency exit pathways.
4. **Human Resource & Organizational Factors:**
   - Was the worker formally trained, qualified, and medically fit for the assigned duty?
   - Were appropriate Personal Protective Equipment (PPE) items available and used correctly?
   - Shift scheduling factors: overtime hours, consecutive night shifts, and cumulative fatigue.

---

### 3. Risk-Based Investigation Team Composition
Investigation urgency and team seniority are determined by plotting the incident's potential consequence ($A$ to $E$) against its recurrence probability ($1$ to $5$) on a **$5 \times 5$ Risk Matrix**:

| Risk Category | Matrix Cell Score | Team Leadership | Team Composition | Investigation Urgency |
| :--- | :--- | :--- | :--- | :--- |
| **High Risk (Red Zone)** | Scores 1 to 6 (e.g., Major injury, fatality, toxic release) | Led by **Senior Corporate Management** | Multidisciplinary panel: Subject-matter engineering expert, site safety manager, lead investigator, HR representative | Commences **immediately** (within hours) |
| **Medium Risk (Yellow Zone)** | Intermediate scores (Moderate equipment damage, lost-time injury) | Led by **Section Head / Department Head** | Section engineer, safety officer, departmental supervisor | Commences within 24–48 hours |
| **Low Risk (Green Zone)** | Minor minor first-aid or minor property scrape | Handled by **Site / Section Manager** | Local supervisor and area safety steward | Investigated within standard shift review |

---

### 4. Investigation Execution Protocol
1. **Site Preservation & Physical Evidence Gathering:**
   - Cordon off the incident scene immediately to prevent tampering or contamination of physical evidence.
   - Photograph and video-record machine positions, control panel valve alignments, fractured components, fluid spills, and skid marks.
2. **Documentary & Testimonial Evidence:**
   - Retrieve SCADA/DCS process historian trend logs, maintenance history, calibration records, and shift handover logs.
   - Conduct structured, non-judgmental interviews with eyewitnesses, operators, and maintenance technicians as soon as possible.
3. **Causal Analysis Methodologies:**
   - **Timeline Reconstruction:** Chronological mapping of process parameters and operator actions.
   - **5-Why Analysis:** Repeatedly questioning "Why?" to drill down from active sharp-end symptoms to organizational root causes.
   - **Root Cause Analysis (RCA):** Fault Tree Analysis, Causal Factor Trees, and Fishbone (Ishikawa) diagrams.

---

## 3. Differences / Examples

### Traditional Fault-Finding vs. Root Cause Investigation
| Investigation Attribute | Traditional Fault-Finding Approach | Modern Root Cause Safety Analysis |
| :--- | :--- | :--- |
| **Core Philosophy** | Assign individual human blame / fault | Uncover latent organizational & engineering flaws |
| **Scope of Inquiry** | Stops at the frontline operator ("Human Error") | Drills through procedures, design, and management |
| **Worker Response** | Fear, concealment, defensive reporting | Open reporting, active safety partnership |
| **Corrective Action** | Operator reprimand, retraining, or firing | Ergonomic redesign, procedural revision, barrier installation |
| **Long-Term Impact** | Identical accidents recur under other workers | Systemic hazard eliminated permanently |

---

## 4. Must Remember

- The primary objective of incident investigation is identifying systemic root causes to prevent recurrence, not establishing personal guilt or liability.
- Effective safety programs prioritize investigating **high-potential near-misses**, learning from hazards before actual injuries or asset losses occur.
- Incident data must capture four balanced dimensions: process/procedures, technology/equipment, physical environment, and human resource factors.
- Investigation team seniority is proportional to risk potential: high-risk incidents demand senior management leadership and multidisciplinary technical expertise.
- Physical evidence must be secured and documented immediately, followed by structured witness interviews and chronological SCADA/DCS data reconstruction.
- Corrective actions must focus on eliminating latent organizational pathogens rather than superficial worker retraining.

# Week 4 – Lecture 4: Bow-Tie: Cut-Sets for Accident Scenarios (Cont.)

## 1. Key Concepts
- **Fire Protection System Modeling:** An end-to-end industrial case study illustrating scenario cut-set generation when an initial fire breaks out in a chemical processing plant.
- **On-Site vs. Off-Site Protection:**
  - *On-Site Protection:* Primary facility safeguards such as automatic fire detectors, deluge sprinkler systems, and plant emergency response teams.
  - *Off-Site Protection:* External municipal fire services and regional emergency responders.
- **Scenario Risk Ranking:** Evaluating scenario likelihood alongside consequence severity to classify plant accident scenarios into risk priority tiers.

## 2. Important Points
- **Sequence Progression in Fire Scenarios:**
  - **Initiating Event (IE):** Fire outbreak inside a process area.
  - **Pivotal Event 1 ($PV_1$):** On-site fire suppression system (Success vs. Failure).
  - **Pivotal Event 2 ($PV_2$):** Off-site municipal fire brigade intervention (Success vs. Failure).
- **Accident End States:**
  1. *Early Extinction:* Controlled locally ($IE \cap PV_1$).
  2. *Limited Plant Damage:* On-site fails, off-site arrives in time ($IE \cap \overline{PV}_1 \cap PV_2$).
  3. *Catastrophic Facility Loss:* Both on-site and off-site fire protection fail ($IE \cap \overline{PV}_1 \cap \overline{PV}_2$).
- **Cut-Set Decomposition:**
  - The probability of catastrophic loss requires joint failure of all basic events composing the sprinkler system (e.g., dry pipe valve, pump power) AND municipal response failures (e.g., communication breakdown, traffic delay).

## 3. Differences / Examples
| Scenario Outcome | Protection Barrier State | Consequence Level |
| :--- | :--- | :--- |
| **Controlled Fire** | On-site systems function successfully | Minor localized damage |
| **Escalated Fire** | On-site fails; off-site brigade succeeds | Moderate unit-level asset damage |
| **Catastrophic Loss** | Both on-site and off-site systems fail | Total facility loss & severe personnel threat |

## 4. Must Remember
- Case study based on **Modarres** (*Reliability Engineering and Risk Analysis*).
- Even when basic event failure rates are small, the failure of shared utility supplies (e.g., firewater pressure header) forms a critical single cut-set threatening multiple barriers.

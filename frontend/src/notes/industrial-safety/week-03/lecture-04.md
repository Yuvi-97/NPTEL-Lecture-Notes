# Week 3 – Lecture 4: Event Tree Analysis (ETA)

## 1. Key Concepts
- **Event Tree Analysis (ETA):** An inductive (forward-looking), binary graphical modeling technique that traces an initiating event forward through sequential safety barriers to identify all possible accident outcome scenarios.
- **Origins (WASH-1400 Report, 1975):** Developed for the US Nuclear Regulatory Commission's Reactor Safety Study as an alternative to handle systems where fault trees became too large.
- **Binary Branching:** At each safeguard/barrier, the system splits into two discrete operational states: **Success** (upper branch, typically $1 - P$) or **Failure** (lower branch, $P$).

## 2. Important Points
- **Core Elements of Event Tree:**
  1. **Initiating Event (IE):** The initial system disturbance, deviation, or failure triggering the event sequence (e.g., pipe rupture, gas leak).
  2. **Pivotal Events (PV):** Intermediate protection barriers, safety systems, or operator actions designed to mitigate the initiating event (e.g., automatic shutoff, sprinkler activation, fire department response).
  3. **Accident Scenarios (End States):** The terminal states of each branch path (e.g., Safe condition, Small release, Low-impact fire, Catastrophic destruction).
- **Quantification Rules:**
  - **Independent Pivotal Events:** Path probability equals the product of initiating event frequency and each barrier probability along that specific branch:
    $$P(\text{Scenario}) = P(IE) \times P(PV_1) \times P(PV_2) \dots \times P(PV_n)$$
  - **Dependent Pivotal Events:** Requires conditional probabilities:
    $$P(\text{Scenario}) = P(IE) \times P(PV_1 \mid IE) \times P(PV_2 \mid IE \cap PV_1)$$
- **Risk Profile:** A graphical plot of scenario occurrence likelihood versus the severity of accident consequences.

## 3. Differences / Examples
| Parameter | Fault Tree Analysis (FTA) | Event Tree Analysis (ETA) |
| :--- | :--- | :--- |
| **Logic Approach** | **Deductive** (Backward / Top-down: "Why did it occur?") | **Inductive** (Forward / Bottom-up: "What happens next?") |
| **Primary Focus** | Root causes of a top-level mishap | Progression of consequences from an initiating event |
| **Logic Elements** | Logic gates (AND, OR, Priority AND) | Binary split branches (Success / Failure) |
| **Starting Point** | Undesired Top Event | Initiating Event (IE) |

## 4. Must Remember
- **WASH-1400 (1975):** Landmark nuclear safety study by Norman Rasmussen that established Event Tree Analysis.
- **Bow-Tie Model Integration:** FTA models the cause side leading up to the top event (left side of bow-tie); ETA models the consequence mitigation side following the top event (right side).
- **Independent vs. Coupled Design:** Systems where pivotal safety barriers operate independently are inherently safer than coupled systems where one barrier's failure impairs subsequent barriers.

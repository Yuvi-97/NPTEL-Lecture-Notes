# Week 2 – Lecture 5: Failure Modes and Effects Analysis (FMEA)-Continue

## 1. Key Concepts
- **System Breakdown:** Systems are broken down into subsystems, assemblies, subassemblies, and components/parts using either a hardware (bottom-up) approach or a functional approach.
- **Screening Rule:** Breakdown continues only if the failure of an element results in an intolerable or undesirable loss. If failure causes no significant loss, document and terminate that branch of analysis.
- **Risk Priority Number (RPN):** A quantitative prioritization metric calculated by multiplying Probability ($P$), Severity ($S$), and Detectability ($D$):
  $$\text{RPN} = P \times S \times D$$

## 2. Important Points
- **FMEA Parameters & Subjective Scales:**
  - Standard scales use 10 points (alternatives include 3, 5, or 7-point scales; 5-point is commonly used if 10-point causes confusion).
  - **Probability of Occurrence ($P$):** Based on potential causes and failure frequency (Rating $1$ = remote/never occurs; Rating $10$ = certain/daily occurrence).
  - **Severity ($S$):** Based on the potential effect on the system (Rating $1$ = no danger/no injury; Rating $10$ = extremely dangerous, death/fatality).
  - **Detectability ($D$):** Based on the current design verification, detection mechanisms, alarms, and controls. Uses **reverse scoring**—as detectability increases, risk decreases (Rating $1$ = almost certain detection; Rating $10$ = no chance of detection).
- **Corrective Actions:**
  - **Preventive Actions:** Address failure causes to reduce Probability ($P$).
  - **Mitigative Actions:** Lessen consequences to reduce Severity ($S$) or provide mechanisms/sensors to improve Detectability ($D$).
  - After actions are taken, recalculate revised $P, S, D$ values to obtain a lower RPN, and mark the issue as "closed".
- **Types of FMEA:** Design FMEA, Process FMEA, and Operational FMEA.

## 3. Differences / Examples
- **Compressor Subsystem Failure Example:**
  - *External Rupture:* High severity ($S = 10$), but low probability ($P = 1$) $\rightarrow$ Low RPN.
  - *Operates at Degraded Performance:* Moderate severity ($S = 4$), but high probability ($P = 6$) and poor detectability ($D = 7$) $\rightarrow$ Highest RPN ($168$), making it the top priority for intervention.
- **Pareto Analysis (Prioritization):**
  - Failure modes are plotted in decreasing order of RPN alongside a cumulative percentage curve (Pareto chart).
  - Frequently, a small number of failure modes (e.g., 3 out of 7) contribute to the majority (e.g., 80%) of the total risk.

## 4. Must Remember
- **RPN Formula:** $\text{RPN} = P \times S \times D$
- **Detectability Reverse Scoring:** High detectability = low numerical rating ($1$); No detection = high numerical rating ($10$).
- Higher severity alone does not guarantee the highest priority; high probability coupled with poor detectability can yield a significantly higher RPN.
# Week 10 – Lecture 3: Sequencing & Scheduling

## 1. Key Concepts
- **Scheduling:** The precise operational allocation of facility resources, equipment, and personnel over specific calendar hours or shift time slots.
- **Sequencing:** Determining the exact chronological order in which multiple waiting orders or manufacturing jobs are processed on a designated workstation or machine.
- **Makespan:** The total elapsed clock time required to complete an entire batch of jobs from the start of the first job to the completion of the final job.

## 2. Important Points
- **Single-Machine Priority Dispatching Rules:**
  - **FCFS (First-Come, First-Served):** Jobs are processed in the strict order they arrived at the facility (perceived as fair; poor flow time performance).
  - **SPT (Shortest Processing Time):** Jobs with the shortest processing durations are executed first:
    - *Mathematically proven to minimize average job flow time and average work-in-process (WIP) inventory.*
  - **EDD (Earliest Due Date):** Jobs with the nearest delivery deadline are processed first:
    - *Minimizes maximum job lateness/tardiness across all orders.*
  - **CR (Critical Ratio):** Dynamic priority index:
    $$\text{CR} = \frac{\text{Due Date} - \text{Current Date}}{\text{Remaining Processing Time}}$$
    (If $\text{CR} < 1$, job is behind schedule; if $\text{CR} = 1$, exactly on time; if $\text{CR} > 1$, ahead of schedule).
- **Johnson’s Rule for Two Machines in Series ($M_1 \to M_2$):**
  - Algorithm to sequence $n$ jobs across 2 machines to minimize total makespan:
    1. Identify the shortest processing time among all remaining jobs across both machines.
    2. If the minimum time occurs on Machine 1, schedule that job as early as possible.
    3. If the minimum time occurs on Machine 2, schedule that job as late as possible.
    4. Remove the scheduled job and repeat until all jobs are assigned.

## 3. Differences / Examples
| Dispatching Rule | Primary Operational Advantage | Main Weakness |
| :--- | :--- | :--- |
| **SPT (Shortest Processing Time)** | Minimizes average flow time and WIP inventory | Long jobs suffer severe delays/starvation |
| **EDD (Earliest Due Date)** | Minimizes maximum tardiness | Ignores processing duration; higher average WIP |
| **FCFS** | Fair, simple, no calculation needed | Worst average flow time and inventory buildup |

## 4. Must Remember
- **SPT** is mathematically optimal for minimizing **average completion time and WIP**; **EDD** is optimal for minimizing **maximum tardiness**.
- Johnson's rule guarantees the **minimum total makespan** and minimizes machine idle time for two-stage sequential manufacturing lines.

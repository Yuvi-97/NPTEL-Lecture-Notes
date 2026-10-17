# Week 10 – Lecture 3: Sequencing & Scheduling

## 1. Key Concepts

- **Scheduling:** The operational allocation of shared resources (machines, loading bays, labor crews) over specific chronological time horizons to execute production and logistics tasks.
- **Sequencing:** The determination of the exact priority order in which waiting jobs or customer orders are processed through a given workstation or facility.
- **Flow Time ($F_i$):** The total elapsed duration a job spends inside the production facility from its arrival time until its final completion:
  $$\text{Flow Time} = \text{Completion Time} - \text{Arrival Time}$$
- **Makespan:** The total elapsed time required to completely process a batch of $n$ jobs from the start of the first job on the first machine to the completion of the last job on the final machine.
- **Lateness ($L_i$) and Tardiness ($T_i$):**
  - *Lateness:* The algebraic difference between job completion time ($C_i$) and its promised due date ($d_i$): $L_i = C_i - d_i$ (can be negative if completed early).
  - *Tardiness:* The measure of positive delay; $T_i = \max(0, C_i - d_i)$ (zero if completed on or before due date).

---

## 2. Important Points

### Single-Machine Priority Sequencing Rules
The lecture details five foundational dispatching heuristics for a single workstation:

1. **First-Come, First-Served (FCFS):**
   - Jobs are processed in the strict order of their arrival.
   - *Advantage:* Universally perceived as fair by human customers; simple to administer.
   - *Disadvantage:* Performs poorly on average flow time, average tardiness, and WIP inventory.
2. **Shortest Processing Time (SPT):**
   - Jobs are sequenced in ascending order of processing time (shortest jobs processed first).
   - *Mathematical Property:* **Provably minimizes average flow time**, minimizes average work-in-process ($WIP$), and maximizes job completion rates.
   - *Disadvantage:* Long jobs can suffer from chronic starvation if short jobs continuously arrive.
3. **Longest Processing Time (LPT):**
   - Jobs are sequenced in descending order of processing time (longest jobs first); typically deployed to keep multi-machine assembly lines populated.
4. **Earliest Due Date (EDD):**
   - Jobs are sequenced in ascending order of promised delivery due dates ($d_i$).
   - *Mathematical Property:* **Provably minimizes the maximum job tardiness** across the batch.
5. **Critical Ratio (CR):**
   - An adaptive, dynamic dynamic priority indexing rule:

   $$CR = \frac{\text{Due Date} - \text{Current Date}}{\text{Remaining Processing Time}} = \frac{\text{Time Remaining}}{\text{Work Remaining}}$$

   - **Decision Protocol:**
     - Always process the job with the **Lowest Critical Ratio first**.
     - If $CR < 1.0$: Job is **behind schedule**; will be late unless expedited.
     - If $CR = 1.0$: Job is **exactly on schedule**; zero slack time.
     - If $CR > 1.0$: Job is **ahead of schedule**; possesses positive operational slack.

### Johnson’s Rule for Sequencing $n$ Jobs on 2 Machines
When $n$ distinct jobs must all pass sequentially through Machine 1 ($M_1$) and then Machine 2 ($M_2$), Johnson's Rule provides the mathematically optimal sequence that **minimizes total makespan and machine idle time**.

#### The 5-Step Johnson's Algorithm:
1. List all $n$ jobs alongside their respective processing times on $M_1$ and $M_2$.
2. Scan the entire table to locate the **absolute minimum processing time** among all unassigned jobs.
3. **The Placement Rule:**
   - If the minimum processing time occurs on **Machine 1 ($M_1$)**, schedule that job as **early as possible (leftmost available slot)** in the sequence.
   - If the minimum processing time occurs on **Machine 2 ($M_2$)**, schedule that job as **late as possible (rightmost available slot)** in the sequence.
4. *Ties:* If tied on the same machine, choose arbitrarily; if tied between $M_1$ and $M_2$, place the $M_1$ job at the beginning and the $M_2$ job at the end.
5. Cross off the scheduled job from the table and repeat Steps 2 through 4 until all $n$ jobs are allocated.

---

## 3. Differences / Examples

### Synthesis: Single-Machine Priority Sequencing Rules

| Rule | Sequencing Criterion | Mathematical Strength | Primary Limitation |
|---|---|---|---|
| **FCFS** | Arrival order sequence. | Perceived fairness; zero computation. | Poor average flow time; high WIP accumulation. |
| **SPT** | Ascending processing time ($p_i$). | **Minimizes average flow time and average WIP**. | Long jobs experience severe starvation delays. |
| **EDD** | Ascending due date ($d_i$). | **Minimizes maximum job tardiness / delay**. | Ignores processing time; can inflate average flow time. |
| **CR** | Lowest ratio: $\frac{\text{Time Left}}{\text{Work Left}}$. | Dynamically updates priority as time elapses. | Requires continuous computational updates. |

### Worked Problem from the Lecture: Johnson's Rule (4 Jobs on 2 Machines)
- Consider four jobs ($A, B, C, D$) requiring sequential processing on Machine 1 followed by Machine 2:

| Job | Machine 1 ($M_1$) Time (Hours) | Machine 2 ($M_2$) Time (Hours) |
|---|---|---|
| **A** | 5 | 7 |
| **B** | 3 | 2 |
| **C** | 8 | 4 |
| **D** | 10 | 6 |

- **Step-by-Step Johnson's Sequence Derivation:**
  - *Iteration 1:* Absolute minimum time in the table is **2 hours (Job B on $M_2$)**. Since it is on $M_2$, assign **B to the rightmost slot**: `[ _ , _ , _ , B ]`. Eliminate Job B.
  - *Iteration 2:* Next minimum time among remaining ($A, C, D$) is **4 hours (Job C on $M_2$)**. Since it is on $M_2$, assign **C to the next rightmost slot**: `[ _ , _ , C , B ]`. Eliminate Job C.
  - *Iteration 3:* Next minimum time among remaining ($A, D$) is **5 hours (Job A on $M_1$)**. Since it is on $M_1$, assign **A to the leftmost available slot**: `[ A , _ , C , B ]`. Eliminate Job A.
  - *Iteration 4:* Only Job D remains $\rightarrow$ assign **D to the remaining open slot**: `[ A , D , C , B ]`.
- **Optimal Job Sequence:** **A $\rightarrow$ D $\rightarrow$ C $\rightarrow$ B**

- **Makespan Timeline Verification:**
  - $M_1$: Job A (0–5) $\rightarrow$ Job D (5–15) $\rightarrow$ Job C (15–23) $\rightarrow$ Job B (23–26).
  - $M_2$: Idle (0–5); Job A (5–12); Job D starts at 15 (15–21); Job C starts at 23 (23–27); Job B starts at 27 (27–29).
  - **Total Makespan = 29 Hours** (the absolute minimum possible).

---

## 4. Must Remember

- **SPT (Shortest Processing Time)** provably **minimizes average flow time and average WIP inventory** on a single workstation.
- **EDD (Earliest Due Date)** provably **minimizes the maximum tardiness** across jobs.
- The **Critical Ratio (CR)** is:
  $$CR = \frac{\text{Due Date} - \text{Current Date}}{\text{Remaining Processing Time}}$$
  Jobs with $CR < 1.0$ are behind schedule and must be prioritized.
- **Johnson’s Rule** sequences $n$ jobs across 2 sequential machines to **minimize total makespan and machine idle time**.
- Johnson's placement rule: **Minimum time on $M_1 \rightarrow$ place at the beginning (left); Minimum time on $M_2 \rightarrow$ place at the end (right)**.
- **Makespan** is the total clock time from the start of the first job to the completion of the final job in the batch.

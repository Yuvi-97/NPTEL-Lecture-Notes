# Week 8 – Lecture 2: Systems Safety Quantification: Truth Table Approach (Contd.)

## 1. Key Concepts
- **System State Vector ($\mathbf{x}$):** A binary indicator vector $\mathbf{x} = (x_1, x_2, \dots, x_n)$ representing the status of each component, where $x_i = 1$ if component $i$ is operational and $x_i = 0$ if failed.
- **Truth Table Evaluation:** Systematically evaluates the binary output of each logic gate in a fault tree or network for all $2^n$ state permutations to determine whether the Top Event (TE) occurs.
- **Exact Quantification:** Provides an exact probability calculation without relying on rare-event approximations or upper-bound truncations.

## 2. Important Points
- **Procedure for Truth Table Quantification:**
  1. Construct a table with $n$ input columns and $2^n$ rows covering all state combinations $(0, 1)$.
  2. For each row $k$, assign component operational probabilities:
     $$P(\mathbf{x}^{(k)}) = \prod_{i=1}^n [p_i]^{x_i} [1 - p_i]^{1 - x_i}$$
     Where $p_i = P(x_i = 1)$ is component reliability/availability.
  3. Determine the system outcome state $\Phi(\mathbf{x}^{(k)}) \in \{0, 1\}$ for each row by evaluating the gate logic.
  4. Sum the probabilities of all rows where the system state corresponds to system failure ($\Phi = 0$ in success context, or $\Phi = 1$ in fault tree context):
     $$Q_{\text{system}} = \sum_{k: \Phi(\mathbf{x}^{(k)}) = 1} P(\mathbf{x}^{(k)})$$
- **Handling Complex Dependencies:** The truth table readily handles non-independent events and common-mode inputs where analytical gate-by-gate substitution is error-prone.

## 3. Differences / Examples
| Evaluation Method | Strengths | Limitations |
| :--- | :--- | :--- |
| **Truth Table** | Exact solution; handles shared events without double-counting | Computationally impractical for large systems ($2^n$ explosion) |
| **Cut-Set Approximation** | Scales to large industrial fault trees | Introduces slight conservative overestimation if uncorrected |

## 4. Must Remember
- The sum of probabilities across all $2^n$ rows of the truth table must strictly equal $1.0$.
- For small systems ($n \le 5$), the truth table is the most transparent method to verify Boolean logic gate combinations.

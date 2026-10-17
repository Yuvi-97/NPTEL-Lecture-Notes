# Week 3 – Lecture 3: Fault Tree Analysis (FTA) - Cut-Set Method

## 1. Key Concepts

- **Fault Tree Analysis (FTA) Cut-Set Method:** An algorithmic, algebraic approach to evaluate complex fault trees. While the gate-by-gate method is suitable for small, hand-drawn fault trees without repeated events, industrial systems require programmatic cut-set evaluation (Henley & Kumamoto) to handle large trees, cross-linked gates, and common-cause events.
- **Basic Set ($B$):** The universal collection of all elementary component failure events ($B_1, B_2, \dots, B_n$) identified at the bottom-most boundary of a fault tree:
  $$B = \{B_1, B_2, \dots, B_n\}$$
  Occurrence of all elements in the basic set is not required for system failure; specific combinations of basic events trigger the Top Event.
- **Cut-Set ($CS$):** A subset of the basic set ($CS \subseteq B$) such that if all basic events in $CS$ occur simultaneously, the Top Event (TE) is guaranteed to occur. 
- **Minimal Cut-Set (MCS):** A cut-set that cannot be further reduced. If any single basic event is removed from a minimal cut-set, the remaining set of events is no longer sufficient to cause the Top Event:
  $$\forall e \in MCS, \quad (MCS \setminus \{e\}) \text{ is not a cut-set}$$
  Each MCS represents an independent, distinct failure mode of the system.
- **MOCUS Algorithm (Method for Obtaining Cut Sets):** A systematic top-down substitution technique developed by Fussell et al. (1974) to extract all minimal cut-sets from a fault tree represented as a matrix of failure paths.
- **MICSUP Algorithm (Minimal Cut Sets Upward):** A dual bottom-up algorithm that begins at the lowest-level gates and sequentially substitutes failure combinations upward toward the top event.

---

## 2. Important Points

### 2.1 The Two Fundamental MOCUS Principles
MOCUS converts logic gates into matrix rows and columns using two core structural rules:
1. **Principle 1 (AND Gate $\to$ Column Expansion):**
   - An AND gate requires **all** of its inputs to occur simultaneously to produce an output.
   - Encountering an AND gate **increases the number of basic events within a cut-set** (increases matrix columns across the same row). It does *not* create new cut-sets.
2. **Principle 2 (OR Gate $\to$ Row Expansion):**
   - An OR gate produces an output if **any one** of its inputs occurs.
   - Encountering an OR gate **increases the total number of cut-sets** (creates new rows in the matrix). It makes the system vulnerable to alternative, parallel failure paths.

```
       [AND Gate]                             [OR Gate]
   Inputs: {E1, E2}                       Inputs: {E1, E2}
          │                                      │
          ▼                                      ▼
Horizontal Expansion (Columns)          Vertical Expansion (Rows)
      Row: [E1, E2]                          Row 1: [E1]
                                             Row 2: [E2]
```

### 2.2 Gate Pre-Processing Requirement
Before applying MOCUS, all non-standard logic gates (e.g., Priority-AND, Exclusive-OR, Inhibit gates) must be transformed into their equivalent combinations of standard AND and OR gates:
- **Exclusive-OR (XOR):** $A \oplus B = (A \cap \bar{B}) \cup (\bar{A} \cap B)$
- **Inhibit Gate:** Equivalent to an AND gate with input $A$ and conditioning event $C$.

### 2.3 Step-by-Step MOCUS Algorithm Procedure
1. **Notation & Indexing:** Assign unique alphabetical letters ($G_1, G_2, \dots$ or $A, B, C, \dots$) to all intermediate gates and unique numbers ($1, 2, \dots, n$) to all basic events.
2. **Matrix Initialization:** Create a matrix where each **row represents a cut-set** and each **column represents a basic event** within that cut-set. Enter the Top Event gate into Row 1, Column 1.
3. **Top-Down Substitution:**
   - Scan each row from left to right. When an intermediate gate is encountered:
     - If it is an **AND gate** with inputs $X_1, X_2, \dots, X_k$, replace the gate in the current row by expanding the inputs horizontally across $k$ columns.
     - If it is an **OR gate** with inputs $Y_1, Y_2, \dots, Y_m$, replace the gate with $Y_1$ in the current row and duplicate the remaining entries of that row into $m-1$ new rows, placing $Y_2, \dots, Y_m$ into the respective new rows.
4. **Termination:** Repeat substitutions recursively until every element in the matrix is a basic event number (no gate labels remain).
5. **Boolean Algebraic Reduction:** Eliminate redundancy using Boolean laws:
   - **Idempotency Law:** $x_i \cap x_i = x_i$ (remove duplicate basic events in the same row).
   - **Absorption Law:** $x_i \cup (x_i \cap x_j) = x_i$ (if cut-set $CS_1 \subset CS_2$, then $CS_2$ is non-minimal and must be discarded).

### 2.4 Top Event Mathematical Formulation
The Top Event is the union (OR-combination) of all $k$ minimal cut-sets:
$$TE = \bigcup_{j=1}^{k} MCS_j = MCS_1 \cup MCS_2 \cup \dots \cup MCS_k$$
Where each individual minimal cut-set is an intersection (AND-combination) of its constituent basic events:
$$MCS_j = \bigcap_{i \in MCS_j} B_i = B_{j,1} \cap B_{j,2} \cap \dots \cap B_{j,m}$$

Assuming independent basic events, the exact Top Event probability is obtained via the Inclusion-Exclusion Principle or approximated for rare events ($Q_i \ll 1$) by the union bound:
$$Q_{TE} \approx \sum_{j=1}^{k} P(MCS_j) = \sum_{j=1}^{k} \left( \prod_{i \in MCS_j} q_i \right)$$

---

## 3. Differences / Examples

### 3.1 Comparison of Cut-Set Evaluation Methods

| Parameter | Gate-by-Gate Method | MOCUS (Top-Down) | MICSUP (Bottom-Up) |
| :--- | :--- | :--- | :--- |
| **Traversal Direction** | Bottom-up (Gate inputs to Top Event) | Top-down (Top Event to Basic Events) | Bottom-up (Lowest gates upward to Top) |
| **Suitability** | Small, simple trees (< 10 gates) | Large, complex industrial fault trees | Large fault trees with deep branches |
| **Handling of Repeated Events** | **Fails** (causes probability overestimation) | **Accurate** (eliminates via Boolean absorption) | **Accurate** (eliminates via Boolean absorption) |
| **Output Provided** | Top event probability only | Complete set of Minimal Cut-Sets (MCS) | Complete set of Minimal Cut-Sets (MCS) |
| **Computational Ease** | Easy by manual hand calculation | Ideal for computer matrix programming | Algorithmically equivalent to MOCUS |

### 3.2 Worked Example 1: Matrix Derivation of MOCUS

Consider a hypothetical fault tree with Top Event $TE$ and gates $A, B, C, D$:
- Top Gate $A$ is an **AND gate** with inputs Gate $B$ and Gate $D$.
- Gate $B$ is an **OR gate** with inputs Basic Event $1$ and Gate $C$.
- Gate $C$ is an **AND gate** with inputs Basic Event $2$ and Basic Event $3$.
- Gate $D$ is an **OR gate** with inputs Basic Event $2$ and Basic Event $4$.

```
                 Top Event (A) [AND]
                    /         \
              Gate B [OR]    Gate D [OR]
               /      \        /      \
            Event 1  Gate C  Event 2  Event 4
                     [AND]
                    /     \
                Event 2  Event 3
```

#### Step-by-Step Matrix Execution:
1. **Initialize Matrix:**
   $$\begin{bmatrix} A \end{bmatrix}$$
2. **Expand Gate $A$ (AND gate with inputs $B, D$ $\to$ increase columns):**
   $$\begin{bmatrix} B & D \end{bmatrix}$$
3. **Expand Gate $B$ (OR gate with inputs $1, C$ $\to$ duplicate row):**
   $$\begin{bmatrix} 1 & D \\ C & D \end{bmatrix}$$
4. **Expand Gate $C$ (AND gate with inputs $2, 3$ $\to$ increase columns in Row 2):**
   $$\begin{bmatrix} 1 & D \\ 2 & 3 & D \end{bmatrix}$$
5. **Expand Gate $D$ (OR gate with inputs $2, 4$ $\to$ duplicate both Row 1 and Row 2):**
   - Row 1 ($1, D$) splits into: $\{1, 2\}$ and $\{1, 4\}$
   - Row 2 ($2, 3, D$) splits into: $\{2, 3, 2\}$ and $\{2, 3, 4\}$
   $$\begin{bmatrix} 1 & 2 \\ 1 & 4 \\ 2 & 3 & 2 \\ 2 & 3 & 4 \end{bmatrix}$$
6. **Boolean Reduction:**
   - Row 3 contains duplicate event $2$: $\{2, 3, 2\} = \{2, 3\}$ (Idempotency).
   - Compare Row 4 $\{2, 3, 4\}$ with Row 3 $\{2, 3\}$: $\{2, 3\} \subset \{2, 3, 4\}$.
   - By the Absorption Law: $\{2, 3\} \cup \{2, 3, 4\} = \{2, 3\}$. Row 4 is non-minimal and is discarded.
7. **Final Minimal Cut-Sets:**
   $$MCS_1 = \{1, 2\}, \quad MCS_2 = \{1, 4\}, \quad MCS_3 = \{2, 3\}$$

---

### 3.3 Worked Example 2: Kitchen Gas Leakage Fault Tree

From the benchmark kitchen gas burner system:
- **Top Event ($TE$):** Leakage of gas.
- **Basic Events:**
  - $B_1$: Hole in cylinder body ($q_1 = 10^{-4}$)
  - $B_2$: Valve open ($q_2 = 10^{-2}$)
  - $B_3$: Regulator failure ($q_3 = 10^{-2}$)
  - $B_4$: Hose clamp loose ($q_4 = 10^{-1}$)
  - $B_5$: Rubber hose cracked ($q_5 = 10^{-1}$)
  - $B_6$: Burner knob open without ignition ($q_6 = 10^{-1}$)

#### Minimal Cut-Sets Obtained:
- $MCS_1 = \{B_1\}$ (Order-1 cut set: single point of failure)
- $MCS_2 = \{B_2, B_3\}$ (Order-2 cut set)
- $MCS_3 = \{B_2, B_4, B_6\}$ (Order-3 cut set)
- $MCS_4 = \{B_2, B_5, B_6\}$ (Order-3 cut set)

#### Probability Quantification:
$$P(MCS_1) = q_1 = 1 \times 10^{-4} = 0.0001$$
$$P(MCS_2) = q_2 \times q_3 = 10^{-2} \times 10^{-2} = 1 \times 10^{-4} = 0.0001$$
$$P(MCS_3) = q_2 \times q_4 \times q_6 = 10^{-2} \times 10^{-1} \times 10^{-1} = 1 \times 10^{-4} = 0.0001$$
$$P(MCS_4) = q_2 \times q_5 \times q_6 = 10^{-2} \times 10^{-1} \times 10^{-1} = 1 \times 10^{-4} = 0.0001$$

Using rare-event approximation:
$$Q_{TE} \approx \sum_{j=1}^{4} P(MCS_j) = 10^{-4} + 10^{-4} + 10^{-4} + 10^{-4} = 4 \times 10^{-4}$$
If the kitchen stove is operated $10,000$ times, gas leakage will occur approximately $4$ times. Order-1 cut-set $\{B_1\}$ contributes directly to 25% of total failure probability despite having no sub-branch redundancy.

---

## 4. Must Remember

- **MOCUS Core Rules:**
  - **AND Gate:** Increases basic events within a cut-set (expands **columns** across the same row).
  - **OR Gate:** Increases the number of cut-sets (expands **rows** vertically).
- **Cut-Set Order:** The order of a cut-set equals the number of basic events in it. An **Order-1 MCS represents a Single Point of Failure (SPOF)**, indicating complete lack of system redundancy.
- **Absorption Rule ($A + AB = A$):** A larger cut-set that fully contains a smaller cut-set is non-minimal and must be eliminated.
- **Top Event Equivalence:** In Boolean terms, the Top Event is an OR combination of all minimal cut-sets, where each minimal cut-set is an AND combination of basic events.
- **Directional Algorithms:** **MOCUS** is top-down; **MICSUP** is bottom-up. Both yield the exact same minimal cut-sets.

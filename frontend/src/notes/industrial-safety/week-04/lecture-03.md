# Week 4 – Lecture 3: Bow-Tie: Cut-Sets for Accident Scenarios

## 1. Key Concepts

- **Accident Scenarios / End States ($S_k$):** The distinct operational outcomes (ranging from safe containment to catastrophic failure) produced by tracing an Initiating Event through an Event Tree's branching structure.
- **Accident Sequence:** The exact chronological pathway of successful ($\overline{PV}$) and failed ($PV$) pivotal protection barriers connecting the initiating event to an accident scenario.
- **Accident Scenario Cut-Sets:** The minimal combinations of basic hardware failures and human errors—drawn jointly from the initiating event fault tree and the pivotal protection fault trees—whose simultaneous occurrence forces the system into that specific terminal accident scenario.
- **FTA-ETA Mathematical Coupling:** Transforming abstract pivotal event branch probabilities into rigorous Boolean functions by attaching a dedicated fault tree to every pivotal safety barrier.

---

## 2. Important Points

### 2.1 The Need for Scenario-Level Cut-Sets
In conventional Fault Tree Analysis, cut-sets are evaluated only up to the Top Event (the initial loss of control). However, modern process plants feature multiple mitigating layers:
- The occurrence of a Top Event does not automatically mean catastrophe; mitigation layers may succeed.
- To determine the true frequency of catastrophic loss, engineers must derive cut-sets for the **entire accident sequence**, accounting for both the failures that cause the release and the failures that defeat the mitigating barriers.

### 2.2 Mathematical Formulation of Barrier Success and Failure
If a safety barrier $j$'s failure state is represented by Boolean function $F_j$, its successful operation is represented by the complement $\overline{F}_j$:
- If $F_j$ is given by the union of its minimal cut-sets:
  $$F_j = C_1 \cup C_2 \cup \dots \cup C_m = \sum_{p=1}^{m} C_p$$
- By **De Morgan's Laws**, successful operation $\overline{F}_j$ is the intersection of the complements of its cut-sets:
  $$\overline{F}_j = \overline{C_1 \cup C_2 \cup \dots \cup C_m} = \overline{C}_1 \cap \overline{C}_2 \cap \dots \cap \overline{C}_m = \prod_{p=1}^{m} \overline{C}_p$$

### 2.3 Boolean Simplification Axioms for Scenario Cut-Sets
When expanding accident sequence expressions, three fundamental Boolean laws govern algebraic reduction:
1. **Contradiction / Annihilation Law:** An event and its complement cannot occur simultaneously:
   $$x_i \cap \overline{x}_i = \emptyset = 0$$
   *(Any product term containing both a component's failure and its success evaluates to zero and drops out).*
2. **Idempotency Law:** Repeated occurrence of the same failure mode is redundant:
   $$x_i \cap x_i = x_i$$
3. **Absorption Law:** A larger cut-set containing a smaller cut-set is non-minimal:
   $$x_i \cup (x_i \cap x_j) = x_i$$

---

## 3. Differences / Examples

### 3.1 Comparison: Standard FTA Cut-Sets vs Bow-Tie Scenario Cut-Sets

| Feature | Standard Fault Tree Cut-Set | Bow-Tie Accident Scenario Cut-Set |
| :--- | :--- | :--- |
| **System Boundary** | Up to Center / Top Event (Loss of control) | Full pathway through mitigating barriers to terminal consequence |
| **Logic Structure** | Pure union of intersection terms ($TE = \bigcup MCS_j$) | Mixed Boolean product of failure states ($F$) and success states ($\overline{F}$) |
| **Barrier Scope** | Preventive barriers only | Both preventive barriers AND mitigative recovery barriers |
| **Practical Output** | Probability of initial system upset | Exact probability of specific damage states (e.g., Toxic Plume vs Safe Vented) |

---

### 3.2 Fully Worked Algebraic Derivation (Kumamoto & Henley Model)

Consider a process system with an Initiating Event ($IE$) followed by two sequential protection layers:
- **System 1 (Layer 1):** Failure state $F_1$.
- **System 2 (Layer 2):** Failure state $F_2$.

The event tree yields four distinct scenarios:
1. $S_1 = IE \cap \overline{F}_1 \cap \overline{F}_2$ (Both barriers succeed $\to$ Safe / Minimal loss).
2. $S_2 = IE \cap \overline{F}_1 \cap F_2$ (System 1 succeeds, System 2 fails).
3. $S_3 = IE \cap F_1 \cap \overline{F}_2$ (System 1 fails, System 2 succeeds $\to$ Moderate loss).
4. $S_4 = IE \cap F_1 \cap F_2$ (Both barriers fail $\to$ Catastrophic loss).

```
Initiating Event       System 1 (F1)          System 2 (F2)          Scenario
       │                     │                      │
       ├─────────────────────┼── Success (F1_bar) ──┼── Success (F2_bar) ──► S1 (Safe)
       │                     │                      └── Failure (F2) ──────► S2
       │                     └── Failure (F1) ──────┼── Success (F2_bar) ──► S3 (Moderate)
       │                                            └── Failure (F2) ──────► S4 (Catastrophe)
```

#### Given Fault Tree Logic for the Barriers:
- **System 1 Fault Tree:**
  $$F_1 = C \cup F \cup (A \cap B) \cup (D \cap E) = C + F + AB + DE$$
- **System 2 Fault Tree:**
  $$F_2 = A \cup F \cup G = A + F + G$$
*(Notice that basic events $A$ and $F$ appear in both safety systems, introducing potential cross-barrier dependencies).*

#### Step-by-Step Derivation of Cut-Sets for Scenario $S_2 = \overline{F}_1 \cap F_2$:

1. **Calculate the Success Function $\overline{F}_1$ using De Morgan's Laws:**
   $$\overline{F}_1 = \overline{C + F + AB + DE} = \overline{C} \cdot \overline{F} \cdot \overline{(AB)} \cdot \overline{(DE)}$$
   Applying De Morgan's law to the product terms: $\overline{(AB)} = (\overline{A} + \overline{B})$ and $\overline{(DE)} = (\overline{D} + \overline{E})$.
   $$\overline{F}_1 = \overline{C} \cdot \overline{F} \cdot (\overline{A} + \overline{B}) \cdot (\overline{D} + \overline{E})$$
   Expand the product of sums:
   $$\overline{F}_1 = \overline{A}\overline{C}\overline{D}\overline{F} + \overline{B}\overline{C}\overline{D}\overline{F} + \overline{A}\overline{C}\overline{E}\overline{F} + \overline{B}\overline{C}\overline{E}\overline{F}$$

2. **Formulate the Scenario Product $S_2 = \overline{F}_1 \cdot F_2$:**
   Substitute $F_2 = (A + F + G)$:
   $$S_2 = \overline{F}_1 \cdot (A + F + G) = (\overline{F}_1 \cdot A) + (\overline{F}_1 \cdot F) + (\overline{F}_1 \cdot G)$$

3. **Evaluate Each Product Term Individually:**
   - **Term 1 ($\overline{F}_1 \cdot A$):**
     Multiply each term of $\overline{F}_1$ by $A$. Any term containing $\overline{A}$ evaluates to zero ($A \cdot \overline{A} = 0$):
     $$\overline{F}_1 \cdot A = (A \cdot \overline{A}\overline{C}\overline{D}\overline{F}) + (A \cdot \overline{B}\overline{C}\overline{D}\overline{F}) + (A \cdot \overline{A}\overline{C}\overline{E}\overline{F}) + (A \cdot \overline{B}\overline{C}\overline{E}\overline{F})$$
     $$= 0 + A\overline{B}\overline{C}\overline{D}\overline{F} + 0 + A\overline{B}\overline{C}\overline{E}\overline{F} = A\overline{B}\overline{C}\overline{D}\overline{F} + A\overline{B}\overline{C}\overline{E}\overline{F}$$

   - **Term 2 ($\overline{F}_1 \cdot F$):**
     Multiply each term of $\overline{F}_1$ by $F$. Since **every term in $\overline{F}_1$ contains $\overline{F}$**, multiplying by $F$ yields zero across all terms ($F \cdot \overline{F} = 0$):
     $$\overline{F}_1 \cdot F \equiv 0$$
     *Physical Meaning: Component $F$'s failure cannot cause Scenario $S_2$ because $F$ directly fails System 1, which violates the defining condition of $S_2$ (System 1 must succeed).*

   - **Term 3 ($\overline{F}_1 \cdot G$):**
     Basic event $G$ does not appear in System 1's fault tree. Therefore, all four terms survive when multiplied by $G$:
     $$\overline{F}_1 \cdot G = G\overline{A}\overline{C}\overline{D}\overline{F} + G\overline{B}\overline{C}\overline{D}\overline{F} + G\overline{A}\overline{C}\overline{E}\overline{F} + G\overline{B}\overline{C}\overline{E}\overline{F}$$

4. **Assemble the Final Minimal Cut-Sets for Scenario $S_2$:**
   $$S_2 = \{A \cap \overline{B}\overline{C}\overline{D}\overline{F}\} \cup \{A \cap \overline{B}\overline{C}\overline{E}\overline{F}\} \cup \{G \cap \overline{A}\overline{C}\overline{D}\overline{F}\} \cup \{G \cap \overline{B}\overline{C}\overline{D}\overline{F}\} \cup \{G \cap \overline{A}\overline{C}\overline{E}\overline{F}\} \cup \{G \cap \overline{B}\overline{C}\overline{E}\overline{F}\}$$
   These six terms constitute the exact, non-redundant minimal cut-sets governing Scenario $S_2$.

---

## 4. Must Remember

- **Scenario Cut-Set Definition:** Formed by the algebraic product of failed barrier logic and the complemented success logic of intervening barriers.
- **De Morgan Expansion:** A barrier's success is computed by taking the complement of its fault tree cut-set union ($\overline{F} = \prod \overline{C}_p$).
- **Contradiction Law ($x_i \cdot \overline{x}_i = 0$):** Eliminates impossible scenarios where a shared component is simultaneously required to fail in one barrier and succeed in another.
- **Shared Event Impact:** Components that appear in multiple barriers (like $A$ and $F$ above) cross-link the event tree branches, making independent branch multiplication invalid without Boolean scenario reduction.
- **Practical Benefit:** Allows safety engineers to prioritize maintenance on the specific basic events that directly trigger the highest-consequence accident end states.

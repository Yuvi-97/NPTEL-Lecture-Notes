# Week 4 – Lecture 2: Bow-Tie: Common Cause Cut Sets

## 1. Key Concepts
- **Dependent Failures:** Failure events where the probability of occurrence of one component is statistically influenced by or conditional upon the failure of another component.
- **Common Cause Failure (CCF):** Simultaneous or near-simultaneous failure of multiple components or redundant channels resulting from a single shared root cause, shock, or environmental event.
- **Common Cause Cut Set (CCCS):** A minimal cut-set whose constituent basic events share a common failure cause, vulnerability, or coupling mechanism.

## 2. Important Points
- **Three Causes/Mechanisms of Dependent Failures:**
  1. **Coupling Mechanisms:** Physical, functional, or environmental connections that link multiple components together (e.g., shared power supply, identical manufacturing batch, proximity to heat/vibration).
  2. **Propagation Mode:**
     - *Cascade / Domino Propagation:* Failure of one component directly causes physical overload or failure of subsequent components.
     - *Parallel Common-Mode:* Shared environmental shock causes independent redundant components to fail concurrently.
  3. **Management Deficiencies:** Defective policies, flawed operational procedures, improper maintenance practices, or substandard training that uniformly impair multiple system barriers.
- **Impact on Redundancy:** Redundancy assumes independent failures; common cause failures bypass redundancy, substantially elevating system unreliability.

## 3. Differences / Examples
| Failure Type | Independence | Cause | Defense Strategy |
| :--- | :--- | :--- | :--- |
| **Independent Failure** | High ($P(A \cap B) = P(A) \cdot P(B)$) | Random hardware breakdown | Component redundancy |
| **Cascade Failure** | Sequential dependency | Shock propagating through links | Physical isolation / separation |
| **Common Cause Failure** | Simultaneous dependency | Single shared external/internal root cause | Diversity in equipment, separated locations |

## 4. Must Remember
- Management deficiency is a pervasive root cause of common cause failures affecting entire plants.
- Failure to account for common cause cut sets drastically underestimates the true top event probability in safety assessments.

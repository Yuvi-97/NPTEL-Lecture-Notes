# Week 10 – Lecture 5: Accident Data Analysis: Classification Tree

## 1. Key Concepts
- **Classification and Regression Trees (CART):** A non-parametric machine learning algorithm (Breiman et al., 1984) that recursively partitions safety data into mutually exclusive homogeneous subsets based on if-then decision rules.
- **Classification Tree:** Used when the target safety outcome is discrete/categorical (e.g., Accident Severity: *Minor*, *Severe*, *Fatal*).
- **Node Architecture:**
  - *Root Node:* Contains the full training dataset.
  - *Internal / Decision Nodes:* Binary split points based on threshold conditions.
  - *Terminal / Leaf Nodes:* Final assigned categorical class label or probability distribution.

## 2. Important Points
- **Splitting Criteria for Node Partitioning:**
  - **Gini Impurity Index:** Measures the probability of misclassifying a randomly chosen element from a node:
    $$\text{Gini}(t) = 1 - \sum_{i=1}^C p_i^2$$
    Where $p_i$ is the relative frequency of class $i$. The algorithm selects the split that minimizes weighted child node Gini impurity.
  - **Entropy / Information Gain:** Alternative criterion based on Shannon information entropy.
- **Tree Pruning:** Trimming deep, overfitted branches using cost-complexity pruning to ensure the decision rules generalize to unseen plant operations.
- **Classification Performance Evaluation (Confusion Matrix):**
  - **Accuracy:** $\frac{TP + TN}{TP + TN + FP + FN}$
  - **Sensitivity / Recall:** $\frac{TP}{TP + FN}$ (critical in safety: ability to catch true severe accidents).
  - **Precision:** $\frac{TP}{TP + FP}$
  - **Specificity:** $\frac{TN}{TN + FP}$

## 3. Differences / Examples
| Feature | Linear Regression | Classification Tree (CART) |
| :--- | :--- | :--- |
| **Target Variable ($Y$)** | Continuous numerical (e.g., lost workdays) | Categorical classes (e.g., Near-miss, Lost-time injury, Fatality) |
| **Underlying Assumptions** | Strict linearity, normality, homoscedasticity | Non-parametric; handles non-linearities and missing values |
| **Interpretability** | Mathematical equation ($\beta$ coefficients) | Highly intuitive visual flowchart of if-then rules |

## 4. Must Remember
- Reference: **Breiman, Friedman, Olshen, & Stone (1984)**, *Classification and Regression Trees*.
- In industrial safety, **Sensitivity (Recall)** is prioritized over overall accuracy because missing a fatal accident class ($FN$) is catastrophic compared to a false alarm ($FP$).

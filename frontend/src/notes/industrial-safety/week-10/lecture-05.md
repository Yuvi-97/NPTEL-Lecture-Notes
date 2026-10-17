# Week 10 – Lecture 5: Accident Data Analysis: Classification Tree

## 1. Key Concepts
- **Classification in Safety Analytics:** A systematic approach to partitioning workplace entities, environments, or events into distinct, predefined categories based on observable attributes or features. In industrial safety engineering, classification is used to predict:
  - Accident outcome severity (e.g., Near-miss, Minor Injury, Severe Injury, Property Damage).
  - Workplace risk exposure levels (e.g., Safe, Moderately Hazardous, Dangerously Prone).
  - Worker risk-taking propensity or error likelihood given task, psychological, or organizational precursors.
- **Supervised vs. Unsupervised Learning:**
  - *Supervised Classification:* Target classes are known beforehand in historical incident logs (e.g., distinguishing between an incident resulting in property damage vs. personal injury). The algorithm learns the mapping from input attributes ($X$) to the target class ($Y$).
  - *Unsupervised Learning (Clustering):* Target class labels are not predefined. The algorithm groups workplace zones or operations based on inherent similarity/dissimilarity of operating parameters and environmental stress variables.
- **Classification and Regression Tree (CART):** A non-parametric machine learning and data mining methodology developed to split complex, multi-attribute datasets into mutually exclusive homogeneous subsets through binary recursive partitioning.
  - *Classification Tree:* Used when the target variable ($Y$) is categorical (e.g., incident type or injury severity).
  - *Regression Tree:* Used when the target variable ($Y$) is continuous and numerical (e.g., number of lost workdays or monetary cost of plant damage).
- **Tree Topology and Node Architecture:**
  - *Root Node:* The initial, topmost node containing the entire training dataset ($100\%$ of observations). It has zero incoming edges and two outgoing edges in a binary tree.
  - *Internal (Decision) Nodes:* Intermediate nodes where a specific splitting rule/attribute threshold is applied. Each internal node has exactly one incoming edge and two outgoing edges.
  - *Leaf (Terminal) Nodes:* The end points of the tree where no further splitting occurs. Each leaf node has exactly one incoming edge and zero outgoing edges. It represents a final assigned class label or an empirical class probability distribution.
- **Safety Analytics in Industry 4.0:** The modern integration of real-time operational sensors, maintenance histories, environmental monitoring, and organizational logs with predictive machine learning algorithms to enable proactive accident prevention and dynamic risk classification.

---

## 2. Important Points

### 2.1 The CART Algorithmic Lifecycle
The development and deployment of a decision tree follows three sequential stages:
1. **Tree Growing:** Starting from the root node, the algorithm evaluates all available attributes ($X_1, X_2, \dots, X_p$) and selects the attribute and split threshold that maximizes the improvement in subgroup homogeneity (or maximizes the reduction in impurity).
2. **Stopping Criteria:** Recursive partitioning halts when:
   - All observations within a node belong to a single class (maximum purity).
   - Further splitting produces an impurity reduction below a designated minimum threshold ($\Delta \text{Impurity} \le \epsilon$).
   - A prescribed minimum leaf node sample size is reached.
3. **Prediction / Deployment:** An unseen observation from the plant is routed down the tree according to its attribute values until it reaches a terminal leaf node, where it is assigned the majority class of that leaf.

### 2.2 Node Impurity and Splitting Metrics
To select the optimal binary split at any decision node $t$, CART calculates the impurity across classes $k \in \{1, 2, \dots, C\}$ using one of three standard mathematical indices:
1. **Gini Impurity Index:**
   $$\text{Gini}(t) = 1 - \sum_{k=1}^C p(k \mid t)^2$$
   Where $p(k \mid t)$ is the relative frequency of class $k$ at node $t$. A pure node yields $\text{Gini}(t) = 0$.
2. **Entropy Index (Information Gain):**
   $$\text{Entropy}(t) = - \sum_{k=1}^C p(k \mid t) \log_2 p(k \mid t)$$
3. **Misclassification Probability Index:**
   $$\text{Misclassification}(t) = 1 - \max_k [p(k \mid t)]$$

The attribute and split threshold that yields the maximum impurity reduction (homogeneity gain) $\Delta I(s, t)$ is chosen:
$$\Delta I(s, t) = I(t) - \left[ \frac{N_L}{N} I(t_L) + \frac{N_R}{N} I(t_R) \right]$$
Where $N_L$ and $N_R$ are the sample counts of the left and right child nodes, and $N = N_L + N_R$.

### 2.3 Model Validation: Train-Test Partitioning
To prevent overfitting (where the tree memorizes random noise in historical accident logs):
- **Training Set (typically $70\%$ of records):** Used exclusively by the learning algorithm to construct the tree structure and define split rules.
- **Testing Set (typically $30\%$ of records):** Unseen out-of-sample incident records used to evaluate the true predictive performance and generalization capability of the classifier.

### 2.4 Confusion Matrix (Misclassification Matrix)
For a multi-class safety classification problem with $C$ classes (e.g., Class $A$, Class $B$, Class $C$):

| Actual \ Predicted | Predicted Class $A$ | Predicted Class $B$ | Predicted Class $C$ | Row Total (Actual) |
| :--- | :---: | :---: | :---: | :---: |
| **Actual Class $A$** | $E_{AA}$ (Correct) | $E_{AB}$ (Mismatch) | $E_{AC}$ (Mismatch) | $\sum_j E_{Aj}$ |
| **Actual Class $B$** | $E_{BA}$ (Mismatch) | $E_{BB}$ (Correct) | $E_{BC}$ (Mismatch) | $\sum_j E_{Bj}$ |
| **Actual Class $C$** | $E_{CA}$ (Mismatch) | $E_{CB}$ (Mismatch) | $E_{CC}$ (Correct) | $\sum_j E_{Cj}$ |
| **Column Total (Predicted)** | $\sum_i E_{iA}$ | $\sum_i E_{iB}$ | $\sum_i E_{iC}$ | $\sum_i \sum_j E_{ij} = N$ |

- **Diagonal Elements ($E_{ii}$):** Number of correctly classified incident instances.
- **Off-Diagonal Elements ($E_{ij}, i \neq j$):** Misclassifications where actual class $i$ is erroneously predicted as class $j$.

### 2.5 Quantitative Classifier Performance Metrics
1. **Overall Accuracy:** Ratio of all correctly predicted observations to the grand total of observations:
   $$\text{Accuracy} = \frac{\sum_{i=1}^C E_{ii}}{\sum_{i=1}^C \sum_{j=1}^C E_{ij}}$$
2. **Class-Specific Precision:** Ratio of correctly predicted observations of class $k$ to the total observations predicted as class $k$ (evaluates prediction reliability):
   $$\text{Precision}_k = \frac{E_{kk}}{\sum_{i=1}^C E_{ik}} = \frac{E_{kk}}{E_{Ak} + E_{Bk} + E_{Ck}}$$
3. **Class-Specific Recall (Sensitivity):** Ratio of correctly predicted observations of class $k$ to the actual observations belonging to class $k$ (evaluates incident detection rate):
   $$\text{Recall}_k = \frac{E_{kk}}{\sum_{j=1}^C E_{kj}} = \frac{E_{kk}}{E_{kA} + E_{kB} + E_{kC}}$$
4. **$F$-Measure ($F_\beta$ Score):** The weighted harmonic mean balancing precision and recall:
   $$F_\beta = \frac{(1 + \beta^2) \cdot \text{Precision} \cdot \text{Recall}}{\beta^2 \cdot \text{Precision} + \text{Recall}}$$
   When $\beta = 1$, precision and recall are weighted equally, yielding the standard $F_1$ score:
   $$F_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$
5. **Receiver Operating Characteristic (ROC) and Area Under Curve (AUC):**
   - The ROC curve plots **Sensitivity (True Positive Rate)** on the $Y$-axis against **$1 - \text{Specificity}$ (False Positive Rate)** on the $X$-axis across various decision classification thresholds.
   - **Area Under Curve (AUC):** Reflects the overall discriminative capacity of the model. Practical values range from $0.5$ (random guess, no discriminatory power) to $1.0$ (perfect separation).

---

## 3. Differences / Examples

### 3.1 Supervised vs. Unsupervised Learning in Safety

| Dimension | Supervised Classification (e.g., CART) | Unsupervised Learning (e.g., Clustering) |
| :--- | :--- | :--- |
| **Class Labels ($Y$)** | Explicitly known beforehand (e.g., Injury vs. Property Damage). | Completely unknown; discovered via data patterns. |
| **Objective** | Predict class membership for new or incoming operating conditions. | Partition workplace sections into risk zones based on attribute similarity. |
| **Validation** | Cross-validation using Confusion Matrix, Accuracy, Precision, Recall. | Cluster silhouette width, within-cluster vs. between-cluster variance. |
| **Safety Application** | Predicting whether a deviation leads to a near-miss or major injury. | Segmenting industrial units into safety climate clusters. |

### 3.2 Worked Case Study: Industrial Accident Classification ($N = 500$ Plant Records)
A manufacturing plant evaluated 500 historical accident records to classify incident outcomes across three target categories: **Injury ($A$)**, **Near Miss ($B$)**, and **Property Damage ($C$)**.
- Predictor attributes: Time stamps (Month, Day), Location, Process type, Equipment condition, Inspection records, and Worker demographics (e.g., Gender).
- Dataset partitioned: $70\%$ training set ($N = 342$ instances) and $30\%$ testing set.
- Tree growing: The root node evaluated splits; the primary attribute maximizing homogeneity gain was *Month*, followed by secondary splits on *Gender* and *Day*.

#### Test Set Confusion Matrix Results:
Evaluating the learned decision tree on the unseen test dataset produced the following confusion matrix:

| Actual \ Predicted | Predicted Injury | Predicted Near Miss | Predicted Property Damage | Actual Total |
| :--- | :---: | :---: | :---: | :---: |
| **Actual Injury** | $57$ | $13$ | $0$ | $70$ |
| **Actual Near Miss** | $38$ | $7$ | $0$ | $45$ |
| **Actual Property Damage** | $31$ | $12$ | $0$ | $43$ |
| **Predicted Total** | $126$ | $32$ | $0$ | $N_{\text{test}} = 158$ |

#### Step-by-Step Metric Calculations:
1. **Overall Accuracy:**
   $$\text{Accuracy} = \frac{E_{11} + E_{22} + E_{33}}{N_{\text{test}}} = \frac{57 + 7 + 0}{158} = \frac{64}{158} \approx 0.405 \quad (40.5\%)$$
2. **Precision for Injury Class:**
   $$\text{Precision}_{\text{Injury}} = \frac{E_{11}}{\sum_i E_{i1}} = \frac{57}{57 + 38 + 31} = \frac{57}{126} \approx 0.4524 \quad (45.24\%)$$
3. **Recall for Injury Class:**
   $$\text{Recall}_{\text{Injury}} = \frac{E_{11}}{\sum_j E_{1j}} = \frac{57}{57 + 13 + 0} = \frac{57}{70} \approx 0.8143 \quad (81.43\%)$$
4. **$F_1$ Score for Injury Class:**
   $$F_1 = \frac{2 \cdot (0.4524) \cdot (0.8143)}{0.4524 + 0.8143} = \frac{0.7367}{1.2667} \approx 0.5816$$
5. **Diagnostic Safety Engineering Insight:**
   - While the model demonstrated high sensitivity/recall for catching injuries ($81.4\%$), its overall accuracy was poor ($40.5\%$) because it failed completely to classify Property Damage instances (predicting $0$ cases).
   - This real-world example emphasizes that a classifier cannot be deployed based on high recall alone; poor balance across other classes necessitates revising input attributes or gathering higher-fidelity operational variables.

---

## 4. Must Remember
- **Binary Splitting Mechanism:** CART creates decision trees strictly by splitting parent nodes into two child nodes based on the attribute cut-off that yields maximum impurity reduction (Gini, Entropy, or Misclassification error).
- **Node Topology Definitions:**
  - Root Node: 0 incoming edges, $\ge 2$ outgoing edges.
  - Internal Node: Exactly 1 incoming edge, $\ge 2$ outgoing edges.
  - Leaf / Terminal Node: Exactly 1 incoming edge, 0 outgoing edges (assigns final class label).
- **Core Performance Metrics:**
  - $\text{Accuracy} = \frac{\sum E_{ii}}{\sum \sum E_{ij}}$ (Total correct over total instances).
  - $\text{Precision}_k = \frac{E_{kk}}{\text{Column } k \text{ Total}}$ (Fidelity of positive predictions for class $k$).
  - $\text{Recall}_k = \frac{E_{kk}}{\text{Row } k \text{ Total}}$ (Coverage of actual occurrences for class $k$).
- **$F_1$ Score:** The harmonic mean of precision and recall ($F_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$), providing a balanced evaluation metric when classes are imbalanced.
- **ROC-AUC Threshold:** Area Under Curve measures discrimination; $0.5$ represents random performance, while values approaching $1.0$ indicate high diagnostic separation.
- **Model Validation Rule:** Safety prediction models must always be evaluated on an independent test dataset (typically $30\%$ holdout) to ensure rules generalize beyond historical training logs.

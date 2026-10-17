# Week 3 – Lecture 2: FAULT TREE ANALYSIS (FTA)- Gate by Gate method

## 1. Key Concepts
- **Fault Tree Quantification**: The process of determining the probability of the top event occurring, given the probabilities of basic events.
- **Gate by Gate Method**: A bottom-up approach to quantify a fault tree by calculating the output probability of each gate sequentially, starting from the lowest level.
- **Basic Events**: Component-level failure events at the bottom of the fault tree, for which probability data is available.
- **Top Event**: The undesired system-level event whose probability is to be quantified.

## 2. Important Points
- **Inputs for Quantification**:
    1.  A constructed (qualitative) fault tree linking top to basic events.
    2.  Probabilities of all basic events.
- **Sources of Basic Event Probabilities**: Historical data, reliability handbooks, manufacturer specifications, or expert opinion.
- **Assumption**: Basic events are typically assumed to be independent for simpler calculations; dependent events result from common cause failures.
- **Quantification Flow**: Start from the bottom-most gates, compute their output probabilities, and use these as inputs for higher-level gates, progressing upwards until the top event's probability is found.

## 3. Gate Probability Formulas (for independent basic events)
- **AND Gate**: P(Output) = P(Input1) * P(Input2) * ... * P(Input_k)
- **OR Gate**: P(Output) = P(Input1) + P(Input2) - P(Input1) * P(Input2)
- **Priority AND Gate**: P(Output) = P(Input1) * P(Input2) * (1/k!) (where k is the number of inputs, order matters)
- **Exclusive OR Gate**: P(Output) = P(Input1) + P(Input2) - 2 * P(Input1) * P(Input2) (Either Input1 or Input2, but not both)
- **Inhibit Gate**: P(Output) = P(Input1) * P(Input2) (Equivalent to an AND gate)
- **Voting Gate (m out of n)**: For 2 out of 3 inputs (B1, B2, B3): P(Output) = P(B1)P(B2) + P(B2)P(B3) + P(B3)P(B1) - 2 * P(B1)P(B2)P(B3)

## 4. Must Remember
- The gate-by-gate method is a **bottom-up calculation**.
- Non-standard gates can be **transformed into equivalent AND/OR gate combinations** for easier probability calculation.
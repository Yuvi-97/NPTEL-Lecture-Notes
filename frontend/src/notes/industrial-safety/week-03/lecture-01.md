# Week 3 – Lecture 1: FAULT TREE ANALYSIS (FTA)- Construction

## 1. Key Concepts
- **Fault Tree Analysis (FTA):** A graphical and deductive (top-down) mathematical tool used to explore the causes of system-level failures.
- **Top Event:** The system-level failure being analyzed (e.g., tank rupture, oven fails to burn).
- **Basic Event:** A component-level failure at the bottom of the tree where failure probability is quantifiable and sufficient data is available.

## 2. Important Points
- **Origin:** Developed in 1961–62 by Watson and Mearns at Bell Laboratories for the US Air Force Minuteman Launch Control System; later adopted by Boeing, nuclear, and chemical industries.
- **Event Symbols:**
  - *Circle:* Basic/primary failure event (component-level, random, sufficient data).
  - *Rectangle:* State of a system, subsystem, or intermediate event.
  - *Diamond:* Underdeveloped/secondary event (requires further exploration due to insufficient knowledge).
  - *Oval:* Conditional event (conditions under which an event occurs).
  - *House:* Event occurrence and non-occurrence having causal implications.
  - *Triangles (In/Out):* Transfer symbols used to replicate branches elsewhere and reduce fault tree size.
- **Gate Symbols:**
  - *AND Gate:* Output occurs only if **all** input events occur simultaneously.
  - *OR Gate:* Output occurs if **at least one** input event occurs.
  - *Priority AND Gate:* Output occurs if all inputs occur in a specific sequence (e.g., left to right).
  - *Exclusive OR (XOR) Gate:* Output occurs if either input occurs, but **not both**.
  - *Inhibit Gate:* Output occurs when the input occurs **and** an attached condition is satisfied.
  - *Voting Gate ($m/n$):* Output occurs when at least $m$ out of $n$ input events occur.
- **Construction Concepts (Ericson):**
  - *I-N-S:* Identify **I**mmediate, **N**ecessary, and **S**ufficient causes for an event.
  - *SS-SC:* Classifies failure into **S**tate of the **S**ystem (uses I-N-S) or **S**tate of the **C**omponent (uses P-S-C).
  - *P-S-C:* Component failure classification:
    - *Primary (P):* Natural wear and tear within design limits.
    - *Secondary (S):* Caused by excessive stresses outside design limits (human error, environment).
    - *Command (C):* Inadvertent signals, noise, or missing inputs from neighboring components.
- **Construction Steps:**
  1. Identify undesirable top event.
  2. Identify first-level contributors (immediate causes).
  3. Link contributors to the top event using appropriate logic gates.
  4. Identify second-level contributors; continue downward until component-level (basic) events are reached.

## 3. Differences / Examples
- **System Vulnerability via Gates:**
  - *More OR Gates:* System is highly vulnerable because any single basic failure can propagate to cause the top event.
  - *More AND Gates:* System is safer and more reliable because multiple failures/standbys must occur concurrently to trigger the top event.

## 4. Must Remember
- **Deductive Logic:** FTA moves top-down (from top event to basic events) by repeatedly asking "why".
- **Primary vs. Secondary Failure:** Primary occurs within design envelope (aging); Secondary occurs outside design envelope (excessive external stress).
- **$m/n$ Voting Gate:** Requires a threshold of at least $m$ inputs out of $n$ to trigger output.
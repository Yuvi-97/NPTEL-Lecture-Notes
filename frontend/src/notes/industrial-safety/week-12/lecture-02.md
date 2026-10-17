# Week 12 – Lecture 2: Geometry of Virtual World

## 1. Key Concepts
- **Geometric Modeling in Virtual Reality:** The mathematical formulation of physical objects, plant machinery, and spatial environments within three-dimensional Euclidean space ($\mathbb{R}^3$) using Cartesian coordinates.
- **Geometric Primitives and the 3D Triangle:**
  - Solid regions in $\mathbb{R}^3$ contain an infinite number of surface points, which must be discretized into finite computational primitives for real-time GPU rendering.
  - The **3D triangle** is the simplest and most computationally efficient primitive. Defined by three vertices, a triangle is guaranteed to be strictly planar. Higher-order polygons (such as quadrilaterals) can be non-planar or concave, introducing severe computational complexity and rendering latency.
  - Complex industrial geometries (e.g., pressure vessels, piping elbows, furnace shells) are approximated as **triangular surface meshes**.
- **The Half-Edge Data Structure:** A highly efficient topological data structure used to encode 3D polygon meshes without data duplication:
  - *Faces:* Represent individual triangles.
  - *Vertices:* Shared spatial coordinate points $(X, Y, Z)$ common to adjacent triangles.
  - *Half-Edges:* Directed edges bordering triangles. Each half-edge record stores directional pointers to:
    1. The target vertex.
    2. The `next_edge` along the triangle's perimeter.
    3. The `prev_edge` along the perimeter.
    4. The `twin_edge` (the oppositely directed half-edge belonging to the neighboring adjacent triangle).
- **Coherent Models (Inside vs. Outside Property):** A topological condition where every edge borders exactly two adjacent triangles, and triangles intersect only along shared edges. This forms a continuous, watertight 2-manifold barrier separating the "interior" of a solid object from the "exterior," preventing virtual models from visually self-intersecting or floating unanchored.
- **Relativity of Motion and Simulator Sickness:** Translating an object by $(x_t, y_t)$ is mathematically identical to translating the observer's origin in the opposite direction $(-x_t, -y_t)$. However, in VR simulation, displacing the camera/origin while the physical user remains seated creates a visual-vestibular sensory conflict that directly triggers **simulator sickness**.

---

## 2. Important Points

### 2.1 Coordinate Translation and Negation
For a 3D triangle defined by vertices $(x_i, y_i, z_i)$ for $i \in \{1, 2, 3\}$, translating the object by displacement vector $\mathbf{t} = (x_t, y_t, z_t)^T$ shifts every vertex:
$$x_i' = x_i + x_t, \quad y_i' = y_i + y_t, \quad z_i' = z_i + z_t$$
- *Worked Coordinate Example:* If a triangle has initial vertices $(10, 10)$, $(20, 10)$, and $(15, 15)$ in the $XY$ plane and is translated by $x_t = -8$ and $y_t = -7$:
  $$V_1' = (10 - 8, 10 - 7) = (2, 3)$$
  $$V_2' = (20 - 8, 10 - 7) = (12, 3)$$
  $$V_3' = (15 - 8, 15 - 7) = (7, 8)$$

### 2.2 Mathematical Conditions for a Pure 3D Rotation Matrix
A linear transformation matrix $M \in \mathbb{R}^{3 \times 3}$ transforming coordinates $\mathbf{x}' = M\mathbf{x}$ represents a pure physical rotation if and only if it satisfies three strict geometric constraints:
1. **No Stretching of Axes (Orthogonality / Unit Row Length):**
   $$\sum_{k=1}^3 m_{ik}^2 = 1 \quad \forall i \in \{1, 2, 3\}$$
   Ensures spatial distances and physical object dimensions are preserved.
2. **No Shearing or Angular Distortion (Mutual Orthogonality of Rows):**
   $$\sum_{k=1}^3 m_{ik} m_{jk} = 0 \quad \forall i \neq j$$
   Ensures Cartesian coordinate axes remain strictly perpendicular ($90^\circ$).
3. **No Mirror Reflection (Right-Handed Coordinate System):**
   $$\det(M) = +1$$
   If $\det(M) = -1$, the matrix introduces an unnatural left-handed mirror reflection.

### 2.3 Euler Angles: Roll, Pitch, and Yaw Rotations
Any arbitrary 3D spatial rotation can be decomposed into three sequential elemental rotations:
1. **Roll ($\gamma$):** Counter-clockwise rotation by angle $\gamma$ about the **$Z$-axis**:
   $$R_z(\gamma) = \begin{bmatrix} \cos\gamma & -\sin\gamma & 0 \\ \sin\gamma & \cos\gamma & 0 \\ 0 & 0 & 1 \end{bmatrix}, \quad \gamma \in [0, 2\pi)$$
2. **Pitch ($\beta$):** Counter-clockwise rotation by angle $\beta$ about the **$X$-axis**:
   $$R_x(\beta) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\beta & -\sin\beta \\ 0 & \sin\beta & \cos\beta \end{bmatrix}, \quad \beta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$$
3. **Yaw ($\alpha$):** Counter-clockwise rotation by angle $\alpha$ about the **$Y$-axis**:
   $$R_y(\alpha) = \begin{bmatrix} \cos\alpha & 0 & \sin\alpha \\ 0 & 1 & 0 \\ -\sin\alpha & 0 & \cos\alpha \end{bmatrix}, \quad \alpha \in [0, 2\pi)$$
4. **Composite Rotation Matrix:**
   $$R(\alpha, \beta, \gamma) = R_y(\alpha) \cdot R_x(\beta) \cdot R_z(\gamma)$$

### 2.4 $4 \times 4$ Homogeneous Rigid-Body Transformation Matrix ($T_{rb}$)
In $\mathbb{R}^{3 \times 3}$, matrix multiplication can represent rotation and scaling, but cannot perform translation (which is an addition). To combine rotation and translation into a single unified matrix multiplication, **homogeneous coordinates** $(x, y, z, 1)^T$ are used:
$$T_{rb} = \begin{bmatrix} R_{3 \times 3} & \mathbf{t}_{3 \times 1} \\ \mathbf{0}_{1 \times 3} & 1 \end{bmatrix} = \begin{bmatrix} m_{11} & m_{12} & m_{13} & x_t \\ m_{21} & m_{22} & m_{23} & y_t \\ m_{31} & m_{32} & m_{33} & z_t \\ 0 & 0 & 0 & 1 \end{bmatrix}$$
Transforming an arbitrary point $\mathbf{p} = (x, y, z, 1)^T$:
$$\begin{bmatrix} x' \\ y' \\ z' \\ 1 \end{bmatrix} = T_{rb} \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} m_{11}x + m_{12}y + m_{13}z + x_t \\ m_{21}x + m_{22}y + m_{23}z + y_t \\ m_{31}x + m_{32}y + m_{33}z + z_t \\ 1 \end{bmatrix}$$

### 2.5 Inversion of Homogeneous Transformations (Non-Commutativity)
Spatial translation and rotation are **non-commutative** ($T_{\text{trans}} \cdot T_{\text{rot}} \neq T_{\text{rot}} \cdot T_{\text{trans}}$).
- For pure rotation: $R^{-1} = R^T$ (the inverse equals its transpose).
- For pure translation: $\mathbf{t}^{-1} = -\mathbf{t}$.
- The inverse of the composite homogeneous rigid-body matrix must reverse the operation order:
  $$T_{rb}^{-1} = \begin{bmatrix} R^T & -R^T \mathbf{t} \\ \mathbf{0} & 1 \end{bmatrix} \neq \begin{bmatrix} R^T & -\mathbf{t} \\ \mathbf{0} & 1 \end{bmatrix}$$

### 2.6 Viewing Transformations and Projections
To display a 3D virtual environment on a 2D screen or HMD display:
1. **Eye Frame Transformation (Camera View):** The entire virtual world is mapped into the observer's eye coordinate frame by applying the inverse transformation $T_{\text{eye}}^{-1}$ to all model vertices.
2. **Orthographic Projection:**
   - Drops the depth coordinate ($z = 0$), projecting points parallel onto the $XY$ plane:
     $$x' = x, \quad y' = y$$
   - Objects maintain constant size regardless of distance; lacks natural depth perception (used primarily in technical engineering drawings).
3. **Perspective Projection (Mathematical Derivation):**
   - Replicates human optics by projecting 3D points along rays converging at the center of projection (the eye/origin).
   - Any point on a ray passing through origin $(0, 0, 0)$ and point $(x, y, z)$ is parameterized by:
     $$\mathbf{p}(\lambda) = (\lambda x, \lambda y, \lambda z)$$
   - When the virtual projection screen is positioned at distance $d$ along the optical viewing axis ($z = d$ or $z = -1$):
     $$\lambda z = d \implies \lambda = \frac{d}{z}$$
   - Substituting $\lambda$ gives the screen projection coordinates:
     $$x' = \frac{d \cdot x}{z}, \quad y' = \frac{d \cdot y}{z}$$
   - **Visual Significance:** Image coordinates scale inversely with depth ($z$). Distant industrial equipment appears realistically smaller, providing the visual depth cues essential for overhead crane operators, forklift drivers, and scaffolding workers to judge spatial clearances and collision hazards.

---

## 3. Differences / Examples

### 3.1 Orthographic vs. Perspective Projection in Industrial VR

| Dimension | Orthographic Projection | Perspective Projection |
| :--- | :--- | :--- |
| **Projector Ray Paths** | Strictly parallel to each other; perpendicular to projection plane. | Rays converge to a single focal point (center of projection / eye). |
| **Object Size vs. Distance** | Object size remains constant regardless of distance along $Z$-axis. | Object size decreases inversely with depth ($1/z$). |
| **Parallel Lines** | Parallel 3D lines remain strictly parallel on screen. | Parallel lines converge toward a vanishing point. |
| **Depth Perception** | Zero perspective depth cues; difficult to judge proximity. | Natural stereoscopic and monocular depth perception. |
| **Industrial Safety Role** | Dimensional verification in CAD engineering drawings. | Immersive VR hazard recognition and plant walkthroughs. |

### 3.2 Worked Mathematical Example: Perspective Projection of a Plant Hazard
Consider a hazardous steam pipe valve located at spatial coordinates $(x = 4\text{ m}, y = 2\text{ m}, z = 8\text{ m})$ viewed through an HMD with screen focal distance $d = 0.5\text{ m}$:
1. Parameter $\lambda$:
   $$\lambda = \frac{d}{z} = \frac{0.5}{8} = 0.0625$$
2. Screen Projection Coordinates:
   $$x' = \lambda \cdot x = 0.0625 \times 4 = 0.25\text{ m} \quad (250\text{ mm})$$
   $$y' = \lambda \cdot y = 0.0625 \times 2 = 0.125\text{ m} \quad (125\text{ mm})$$
3. If the worker steps back such that depth doubles to $z = 16\text{ m}$:
   $$\lambda_{\text{new}} = \frac{0.5}{16} = 0.03125 \implies x'' = 0.125\text{ m}, \quad y'' = 0.0625\text{ m}$$
   The valve projection shrinks by exactly $50\%$, providing the exact mathematical depth cue the brain requires to gauge separation distance.

---

## 4. Must Remember
- **Primitive of Choice:** The **3D triangle** is the universal foundational primitive of VR meshes because three points unambiguously define a flat plane, eliminating the warping and computational penalties of higher polygons.
- **Half-Edge Data Structure:** Traverses 3D meshes without vertex duplication by maintaining pointers to `target_vertex`, `next_edge`, `prev_edge`, and `twin_edge`.
- **Three Conditions for Pure 3D Rotation:** (1) Unit row length (no stretching, $\sum m_{ik}^2 = 1$), (2) Mutual row orthogonality (no shearing, $\sum m_{ik}m_{jk} = 0$), and (3) $\det(M) = +1$ (no mirror reflection).
- **Euler Sequence:** Any spatial orientation decomposes into **Yaw** ($Y$-axis, $\alpha$), **Pitch** ($X$-axis, $\beta$), and **Roll** ($Z$-axis, $\gamma$):
  $$R(\alpha, \beta, \gamma) = R_y(\alpha) R_x(\beta) R_z(\gamma)$$
- **Homogeneous Matrix Inversion:** Because translation and rotation do not commute, the inverse of a rigid-body transform $T_{rb}$ is:
  $$T_{rb}^{-1} = \begin{bmatrix} R^T & -R^T \mathbf{t} \\ \mathbf{0} & 1 \end{bmatrix}$$
- **Perspective Foreshortening Formula:** Screen coordinates scale inversely with depth ($x' = dx/z, y' = dy/z$), creating the visual realism necessary for workers to perceive proximity to overhead and mobile machinery hazards.

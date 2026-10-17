# Week 12 – Lecture 2: Geometry of Virtual World

## 1. Key Concepts
- **Virtual World Geometry:** The mathematical representations, spatial coordinate systems, and matrix transformations used to construct and render 3D industrial objects and plant environments.
- **Polygon Mesh Modeling:** Representing 3D solid structures as collections of geometric primitives: **Vertices** (points in 3D space), **Edges** (lines connecting vertices), and **Faces** (planar surface polygons, typically triangles or quads).
- **Coordinate Systems:** Transitioning spatial representations from local object coordinates to global world coordinates, camera/eye coordinates, and screen projection coordinates.

## 2. Important Points
- **Spatial Affine Transformations (using $4 \times 4$ homogeneous matrices):**
  - **Translation:** Moving an object by displacement vector $(\Delta x, \Delta y, \Delta z)$ in 3D space:
    $$P' = P + T$$
  - **Rotation:** Reorienting objects around Cartesian axes ($X, Y, Z$) using trigonometric rotation matrices (Euler angles: Pitch, Roll, Yaw).
  - **Scaling:** Modifying dimensions along axes by scale factors $(S_x, S_y, S_z)$.
- **Viewing & Projection Transformations:**
  - *World-to-Camera Transformation:* Repositions the virtual world relative to the user's instantaneous eye coordinates.
  - *Projection Types:*
    - **Perspective Projection:** Distant objects appear smaller, converging toward vanishing points (replicates natural human eye depth perception).
    - **Orthographic Projection:** Parallel projection without depth foreshortening (used in CAD blueprints).

## 3. Differences / Examples
| Projection Mode | Depth Perception | Geometric Line Behavior | Typical Use Case |
| :--- | :--- | :--- | :--- |
| **Perspective Projection** | Highly realistic (closer objects look larger) | Parallel lines converge to a vanishing point | VR Head-Mounted Displays & immersive safety training |
| **Orthographic Projection** | No foreshortening; distance does not alter size | Parallel lines remain strictly parallel | Engineering blueprints, technical CAD dimensional inspections |

## 4. Must Remember
- All complex curved surfaces in industrial VR equipment (vessels, pipes, pumps) are approximated as **triangulated polygon meshes**.
- Homogeneous coordinates ($4 \times 4$ matrices) enable translation, rotation, and scaling to be multiplied together into a single composite transformation matrix.

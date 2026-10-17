# Week 12 – Lecture 3: VR Roadmap - A Case Study

## 1. Key Concepts
- **VR Development Roadmap:** The sequential engineering pipeline required to translate real-world industrial plant environments into interactive, photorealistic virtual reality simulations.
- **EOT Crane & Material Handling Case Study:** A concrete safety implementation at IIT Kharagpur modeling hazardous Electric Overhead Traveling (EOT) crane operations.
- **Game Engine Integration:** Utilizing real-time 3D simulation platforms (e.g., Unity 3D, Unreal Engine) to handle physics calculations, collisions, user interactions, and rendering.

## 2. Important Points
- **The Four Stages of the VR Development Pipeline:**
  1. **Data Acquisition:**
     - Collect physical plant dimensions, equipment layout drawings, structural CAD models, and high-resolution site photographs.
  2. **3D Asset Modeling & Mesh Optimization:**
     - Build polygonal geometry using 3D modeling software (e.g., Blender, 3ds Max, Maya).
     - Optimize polygon count (low-poly modeling with normal maps) to maintain minimum 90 frames-per-second (fps) rendering to eliminate VR motion sickness.
  3. **Texturing, Shading & Lighting:**
     - Apply UV unwrapping, PBR (Physically Based Rendering) material maps (diffuse, roughness, metallic, normal), and realistic factory lighting.
  4. **Logic Scripting & Physics Simulation:**
     - Implement C# scripts in Unity for crane hook movement, swinging load physics, gravity, and collision boundaries (Box / Mesh Colliders).
     - Incorporate audio feedback, hazard alarms, and task assessment metrics.

## 3. Differences / Examples
| Development Stage | Primary Tool | Key Engineering Output | Quality Criteria |
| :--- | :--- | :--- | :--- |
| **Modeling** | Blender / 3ds Max | 3D polygonal geometry (.obj, .fbx) | Clean topology, low polygon budget |
| **Texturing** | Substance Painter / Photoshop | UV maps and texture shaders | Photorealism without excessive texture memory |
| **Interactivity** | Unity / Unreal Engine | Compiled VR executable application | Stable $\ge 90 \text{ fps}$ refresh rate, zero latency |

## 4. Must Remember
- High polygon counts cause frame rate drops: maintaining a minimum of **90 fps** is critical to avoid simulator sickness (cybersickness).
- Collision detection algorithms trigger automated near-miss warnings whenever a worker steps into the crane's suspended load shadow.

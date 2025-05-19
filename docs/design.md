# Rune Architecture Design

## Overview

Rune is a next-generation software creation platform that combines a visual editor, logic graph, and AI-powered code generation. The architecture is designed for maximum extensibility and developer empowerment, while prioritizing simplicity for the MVP (Minimum Viable Product).

## High-Level Architecture

Rune consists of two main components:

- **Editor**: The primary application, containing both the user interface (UI) and a local server for logic/LLM orchestration.
- **Project**: The user's actual application (e.g., a Next.js app), which is created and managed by the editor.

For the MVP, the server is bundled inside the editor for simplicity and rapid iteration.

### Directory Structure

```
<rune-project-root>/
├── editor/         # The full source code for the Rune Editor (UI, server, nodes, etc)
│   ├── ui/         # Editor UI (React, Tauri frontend)
│   ├── server/     # Local server for LLM orchestration, codegen, etc (Node.js)
│   ├── nodes/      # Custom logic nodes as TypeScript files
│   ├── package.json
│   └── ...
├── project/        # The user's actual app (Next.js, shadcn, etc)
│   ├── package.json
│   └── ...
└── README.md
```

## Technology Choices

- **Editor UI:** React (inside Tauri for desktop app experience)
- **Editor Server:** Node.js (bundled with the editor, handles LLM orchestration, codegen, file I/O)
- **Project:** Next.js (web target), shadcn for UI primitives
- **CLI:** To be determined; Node.js, Rust, or Go are all options

## Communication Between Editor and Server

- **Options:**
  - **tRPC:** Type-safe API calls between React frontend and Node backend. Good for tight integration, especially if both are in the same repo.
  - **WebSocket:** For real-time updates (e.g., live preview, collaborative editing in the future).
- **Recommendation for MVP:**
  - Use tRPC for API calls (e.g., save/load project, trigger codegen, run preview).
  - Consider WebSocket for live preview or future collaborative features, but not required for initial MVP.

## Editor UX Layout

When the user opens the editor, they see:

- **Tabbed Interface:** The design canvas and the logic graph each open in their own tabs within the editor. Users can switch between the canvas (for UI composition) and the graph (for logic editing) for a given project.
- **Design Canvas Tab:** Center area for composing UI screens.
- **Graph Tab:** Node-based visual scripting for logic and interactions.
- **Toolbar:** At the bottom, for common actions.
- **Layers Panel:** On the left, shows hierarchy of UI elements.
- **Properties Panel:** On the right, for editing properties of selected elements (like Figma).

### Graph View (for Interactions)
- **Graph:** Primary logic editor (node-based, visual scripting), accessible as a tab.
- **Layers Panel:** Shows objects in the current context.
- **Variables Panel:** Manage component/project state.
- **Functions Panel:** Manage reusable functions.
- **Details Panel:** Adjust text, styling, and properties.

## Custom Logic Node System

### Authoring Custom Nodes

- Custom nodes are authored as TypeScript files in `editor/nodes/`.
- Each file exports a `run` function that implements a standard interface.
- The editor/compiler scans for these files, infers their input/output types, and generates the node UI automatically.
- No React/JSX is required for node authors—just pure logic.

#### Example Node

```ts
// editor/nodes/add.ts

export function run({ a, b }: { a: number; b: number }) {
  return { result: a + b };
}
```

- Inputs (`a`, `b`) and outputs (`result`) are inferred from the function signature and return type.
- The editor generates input pins and controls for `a` and `b`, and an output pin for `result`.

#### NodeDefinition Type (for reference)

```ts
export type NodeDefinition = {
  name: string;
  description?: string;
  inputs: Record<string, { type: string; default?: any }>;
  outputs: Record<string, { type: string }>;
  run: (inputs: Record<string, any>, context?: any) => Record<string, any>;
};
```

- For minimalist authoring, only the `run` function is required. Optionally, a node can export metadata (name, description, etc).

### How It Works

1. **Node Discovery:**
   - At build/startup, the editor/compiler scans `nodes/` for `.ts` files.
   - Each file must export a `run` function.
2. **Type Inference & Metadata:**
   - Inputs/outputs are inferred from the function signature and return type (using TypeScript types or JSDoc if needed).
   - Optionally, allow a `description`, `category`, etc.
3. **UI Generation:**
   - The editor/compiler generates the node UI:
     - Input pins for each input.
     - Output pins for each output.
     - Controls (number input, text input, etc) based on type.
   - No React/JSX authoring required for node authors.
4. **Execution:**
   - When the graph runs, the editor calls the node's `run` function with the resolved inputs, and wires the outputs to downstream nodes.
5. **Hot Reloading:**
   - In dev, adding or editing a node file updates the node palette and logic instantly.

### Developer Experience

- To add a new node, create a `.ts` file in `editor/nodes/` and export a `run` function.
- The node appears in the editor's palette, with UI generated for its inputs/outputs.
- No React/JSX or UI code required.

### Implementation Steps

1. Define the `run` function interface and loader.
2. Build a loader that imports all `.ts` files in `nodes/` and registers them.
3. Build a UI generator that creates node UIs from the inferred types.
4. Wire up the graph runner to call each node's `run` function.
5. (Optional) Add static analysis to infer types from function signatures.

---

## MVP Priorities

Focus on these features for the MVP implementation:

- Simple node authoring: Each node is a `.ts` file exporting a `run` function with explicit input/output types.
- Optional metadata: Allow nodes to export a `meta` object for name, description, and category.
- Error handling: Catch and display errors from node execution in the editor UI.
- Async support: Allow `run` to return a Promise for async operations.
- Graph serialization: Save/load the graph (nodes, edges, layout) as JSON.
- Hot reloading for nodes: Watch the `nodes/` folder and reload node definitions in dev without restarting the editor.
- Palette search/filter: Provide a search/filter bar in the node palette for usability.

---

## MVP User Flow

### Project Creation and Setup
1. User runs the CLI to create a new project, selecting "desktop web" as the primary build target.
2. The CLI clones the template repo, installs the rune-editor, and sets up the following:
   - Runs `cd project/src && npx create-next-app@latest` to scaffold the Next.js app.
   - Sets up shadcn components in the project.
   - Runs itself when done (`cd project && rune .`).

### First Launch
- The editor opens to a blank design canvas with the described layout, and the user can switch to the logic graph via tabs.

### Designing the UI
- User designs a screen with a button centered on the canvas using "frame" and "button" primitives in the canvas tab.

### Adding Interactions
- User right-clicks the button or frame and selects "Add Interaction."
- The Graph tab opens for this component, showing:
  - Graph (logic editor)
  - Layers panel
  - Variables panel
  - Functions panel
  - Details panel

### Creating Click Counter Logic (Example)
1. Add a variable `clickCount` in the Variables panel (initial value: 0).
2. Drag the button from Layers panel onto the graph, creating a node.
3. Drag off the node's pin and select "onClick" from the popover menu.
4. Create a reference node for `clickCount`.
5. Add an "Add" node, set second input to 1.
6. Pipe the result to a "Set Variable" node, targeting `clickCount`.
7. Add a "Log" node to output the current count.

### Previewing the Interaction
- User clicks "Run."
- The editor sends the canvas and graph models to the local server.
- The server orchestrates the LLM to generate the necessary components/code.
- The preview pops up instantly with a loading spinner.
- Each button click increments `clickCount` and logs the message "Button clicked x times."

## Extensibility
- The editor and server are designed to be extensible:
  - Users can add new nodes, logic, or plugins by editing the source in `editor/`.
  - Future: Plugin system for user-contributed nodes or logic blocks.

## Update/Upgrade Path
- Users can update the editor by pulling the latest changes from the template repo.
- Project code in `project/` is user-owned and not overwritten by editor updates.

## Next Steps
- Finalize the minimal structure for both `editor/` (React + Node, Tauri) and `project/` (Next.js, shadcn) in your template repo.
- Implement tRPC endpoints for editor-server communication.
- Build the initial editor UI layout (canvas, panels, toolbar, tabbed interface).
- Scaffold the Graph view and node system for logic editing.
- Implement the custom logic node loader and UI generator.
- Document the user flow and architecture in the README for contributors.
- Plan for CLI implementation (project creation, launching editor, etc). 
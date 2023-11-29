// import { Box, Grid } from "@mui/material";
// import DrawerComp from "./Drawer";
// import { useState, useCallback, useEffect } from "react";
// import ReactFlow, {
//   Controls,
//   Background,
//   applyNodeChanges,
//   applyEdgeChanges,
//   addEdge,
// } from "reactflow";
// import "reactflow/dist/style.css";

// const initialNodes = [
//   {
//     id: "1",
//     data: { label: "Hello" },
//     position: { x: 0, y: 0 },
//     type: "input",
//   },
//   {
//     id: "2",
//     data: { label: "World" },
//     position: { x: 100, y: 100 },
//   },
// ];

// const initialEdges = [];

// export default function Index() {
//   const [accordions, setAccordions] = useState([]);

//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     []
//   );

//   console.log(initialNodes);

//   return (
//     <Box>
//       <Grid container justifyContent={"space-between"}>
//         <Grid item lg={2.8}>
//           <DrawerComp accordions={accordions} setAccordions={setAccordions} />
//         </Grid>

//         <Grid item lg={8}>
//           <div style={{ height: "600px", width: "100%" }}>
//             <ReactFlow
//               nodes={nodes}
//               onNodesChange={onNodesChange}
//               edges={edges}
//               onEdgesChange={onEdgesChange}
//               onConnect={onConnect}
//               fitView
//             >
//               <Background />
//               <Controls />
//             </ReactFlow>
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import React, { useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import { Box, Grid } from "@mui/material";
import DrawerComp from "./Drawer";

export default function Index() {
  const [accordions, setAccordions] = useState([]);

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Accordionsdan nodes yaratish
    const allNodes = accordions.flatMap((accordion) =>
      accordion.columns.map((column, i) => ({
        id: i + 1,
        data: { label: column.title },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      }))
    );
    setNodes(allNodes);
  }, [accordions]);

  const onNodesChange = (changes) =>
    setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  console.log(nodes);

  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Grid item lg={2.8}>
          <DrawerComp accordions={accordions} setAccordions={setAccordions} />
        </Grid>
        <Grid item lg={8}>
          <div style={{ height: "600px", width: "100%" }}>
            <ReactFlow
              nodes={nodes}
              onNodesChange={onNodesChange}
              edges={edges}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

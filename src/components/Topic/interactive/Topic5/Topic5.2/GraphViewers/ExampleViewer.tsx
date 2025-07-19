// // components/GraphViewers/ExampleViewer.tsx
// import BaseGraphViewer from "./BaseGraphViewer";

// interface Segment {
//   points: [number, number][];
//   color: string;
//   label: string;
//   speedCalculation?: string;
// }

// interface ExampleViewerProps {
//   title?: string;
//   xLabel: string;
//   yLabel: string;
//   segments: Segment[];
//   showCalculations?: boolean;
// }

// export default function ExampleViewer({
//   title = "Example Interpretation",
//   xLabel,
//   yLabel,
//   segments,
//   showCalculations = true,
// }: ExampleViewerProps) {
//   return (
//     <BaseGraphViewer
//       boundingbox={[-1, 8, 7, -1]}
//       xAxis={{ name: xLabel }}
//       yAxis={{ name: yLabel }}
//       title={title}
//     >
//       {(board) => {
//         segments.forEach((segment) => {
//           // Draw segment
//           board.create('segment', segment.points, {
//             strokeColor: segment.color,
//             strokeWidth: 3,
//             name: segment.label,
//           });

//           // Add label
//           const midX = (segment.points[0][0] + segment.points[1][0]) / 2;
//           const midY = (segment.points[0][1] + segment.points[1][1]) / 2;
//           board.create('text', [midX, midY + 1, segment.label], {
//             anchorX: 'middle',
//             parse: false
//           });

//           // Add points
//           segment.points.forEach((point) => {
//             board.create('point', point, { size: 2, fixed: true });
//           });

//           // Add calculations if needed
//           if (showCalculations && segment.speedCalculation) {
//             board.create('text', [midX, midY + 3, segment.speedCalculation], {
//               fontSize: 10,
//               color: segment.color,
//               anchorX: 'middle',
//               parse: false
//             });
//           }
//         });
//       }}
//     </BaseGraphViewer>
//   );
// }


// components/GraphViewers/ExampleViewer.tsx
import BaseGraphViewer from "./BaseGraphViewer";

export interface Segment {
  points: [[number, number], [number, number]];
  color: string;
  label: string;
  speedCalculation?: string;
}

interface ExampleViewerProps {
  title?: string;
  xLabel: string;
  yLabel: string;
  segments: Segment[];
  showCalculations?: boolean;
}

export default function ExampleViewer({
  title = "Example Interpretation",
  xLabel,
  yLabel,
  segments,
  showCalculations = true,
}: ExampleViewerProps) {
  return (
    <BaseGraphViewer
      boundingbox={[-1, 8, 7, -1]} // Adjusted for velocity values
      xAxis={{ name: xLabel }}
      yAxis={{ name: yLabel }}
      title={title}
    >
      {(board) => {
        segments.forEach((segment) => {
          // Draw segment
          board.create('segment', segment.points, {
            strokeColor: segment.color,
            strokeWidth: 3,
            name: segment.label,
          });

          // Add label
          const midX = (segment.points[0][0] + segment.points[1][0]) / 2;
          const midY = (segment.points[0][1] + segment.points[1][1]) / 2;
          board.create('text', [midX, midY + 1, segment.label], {
            anchorX: 'middle',
            parse: false
          });

          // Add points
          segment.points.forEach((point) => {
            board.create('point', point, { size: 2, fixed: true });
          });

          // Add calculations if needed
          if (showCalculations && segment.speedCalculation) {
            board.create('text', [midX, midY + 3, segment.speedCalculation], {
              fontSize: 10,
              color: segment.color,
              anchorX: 'middle',
              parse: false
            });
          }
        });

        // Add area calculations for velocity-time graphs
        if (yLabel.includes("Velocity")) {
          let totalArea = 0;
          segments.forEach(segment => {
            const [start, end] = segment.points;
            const width = end[0] - start[0];
            const height = (start[1] + end[1]) / 2; // Average height
            totalArea += width * height;
          });
          
          board.create('text', [8, 23, `Total Distance = Area under graph = ${totalArea.toFixed(0)} m`], {
            fontSize: 12,
            color: '#2c3e50',
            anchorX: 'middle',
            parse: false
          });
        }
      }}
    </BaseGraphViewer>
  );
}
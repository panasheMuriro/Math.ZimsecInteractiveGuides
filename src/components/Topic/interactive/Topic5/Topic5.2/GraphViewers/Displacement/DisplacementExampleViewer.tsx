import BaseGraphViewer from "../BaseGraphViewer";

export default function DisplacementExampleViewer() {
  const curvePoints = Array.from({length: 41}, (_, i) => {
    const t = i * 0.1;
    return [t, 20*t - 5*t*t] as [number, number];
  });

  return (
    <BaseGraphViewer
      boundingbox={[-1, 25, 5, -5]}
      xAxis={{ name: "Time (s)" }}
      yAxis={{ name: "Displacement (m)" }}
      title=""
    >
      {(board) => {
        // Draw the curve
        const x = curvePoints.map(p => p[0]);
        const y = curvePoints.map(p => p[1]);
        board.create('curve', [x, y], {
          strokeColor: "#9b59b6",
          strokeWidth: 3
        });

        // Mark key points
        board.create('point', [0, 0], {name: 'Start', size: 2});
        board.create('point', [2, 20], {name: 'Max height', size: 2});
        board.create('point', [4, 0], {name: 'Return', size: 2});

        // Add labels
        board.create('text', [1, 10, "Upward motion\nDecreasing velocity"], {
          fontSize: 9,
          anchorX: 'middle'
        });
        
        board.create('text', [3, 10, "Downward motion\nIncreasing velocity"], {
          fontSize: 9, 
          anchorX: 'middle'
        });

        // Add analysis
        board.create('text', [2.5, 23, "Maximum displacement = 20m at t = 2s"], {
          fontSize: 10,
          anchorX: 'middle'
        });
        
        board.create('text', [2.5, 22, "Returns to start at t = 4s"], {
          fontSize: 10,
          anchorX: 'middle'
        });
      }}
    </BaseGraphViewer>
  );
}
import BaseGraphViewer from "../BaseGraphViewer";

export default function DisplacementGradientViewer() {
  const segments = [
    {
      points: [[0, 0], [2, 4]] as [[number, number], [number, number]],
      color: "#2ecc71",
      label: "Positive Gradient",
      velocity: "+2 m/s"
    },
    {
      points: [[2, 4], [4, 0]] as [[number, number], [number, number]],
      color: "#e74c3c", 
      label: "Negative Gradient",
      velocity: "-2 m/s"
    },
    {
      points: [[4, 0], [6, 0]] as [[number, number], [number, number]],
      color: "#3498db",
      label: "Zero Gradient",
      velocity: "0 m/s"
    }
  ];

  return (
    <BaseGraphViewer
      boundingbox={[-1, 5, 7, -1]}
      xAxis={{ name: "Time (s)" }}
      yAxis={{ name: "Displacement (m)" }}
      title=""
    >
      {(board) => {
        segments.forEach(segment => {
          board.create('segment', segment.points, {
            strokeColor: segment.color,
            strokeWidth: 3
          });

          const midX = (segment.points[0][0] + segment.points[1][0]) / 2;
          const midY = (segment.points[0][1] + segment.points[1][1]) / 2;
          
          board.create('text', [midX, midY + 0.5, segment.label], {
            fontSize: 10,
            color: segment.color,
            anchorX: 'middle'
          });

          board.create('text', [midX, midY - 0.5, `Velocity = ${segment.velocity}`], {
            fontSize: 9,
            color: segment.color,
            anchorX: 'middle'
          });
        });

        board.create('text', [3, 4.5, "Gradient = Velocity"], {
          fontSize: 11,
          color: "#2c3e50",
          anchorX: 'middle',
          fontWeight: 'bold'
        });
      }}
    </BaseGraphViewer>
  );
}
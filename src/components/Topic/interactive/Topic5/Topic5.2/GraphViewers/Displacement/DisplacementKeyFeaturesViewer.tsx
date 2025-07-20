import BaseGraphViewer from "../BaseGraphViewer";

interface Feature {
  type: 'segment' | 'curve';
  points: [number, number][];
  color: string;
  label: string;
  description: string;
}

export default function DisplacementKeyFeaturesViewer() {
  const features: Feature[] = [
    {
      type: 'segment',
      points: [[1, 1], [4, 1]],
      color: "#2ecc71",
      label: "Positive Displacement",
      description: "Above x-axis (ahead of start)"
    },
    {
      type: 'segment',
      points: [[1, -1], [4, -1]],
      color: "#e74c3c",
      label: "Negative Displacement",
      description: "Below x-axis (behind start)"
    },
    {
      type: 'segment',
      points: [[1, 0], [4, 0]],
      color: "#3498db",
      label: "Zero Displacement",
      description: "On x-axis (at start position)"
    }
  ];

  return (
    <BaseGraphViewer
      boundingbox={[0, 5, 5, -2]}
      xAxis={{ name: "Time (s)" }}
      yAxis={{ name: "Displacement (m)" }}
      title=""
    >
      {(board) => {
        // Draw x-axis (zero displacement reference)
        board.create('segment', [[0,0], [5,0]], {
          strokeColor: '#7f8c8d',
          strokeWidth: 1,
          dash: 2
        });

        features.forEach((feature) => {
          if (feature.type === 'segment') {
            board.create('segment', [feature.points[0], feature.points[1]], {
              strokeColor: feature.color,
              strokeWidth: 3,
            });
          } else {
            const x = feature.points.map(p => p[0]);
            const y = feature.points.map(p => p[1]);
            board.create('curve', [x, y], {
              strokeColor: feature.color,
              strokeWidth: 3,
            });
          }

          const midX = (feature.points[0][0] + feature.points[1][0]) / 2;
          const midY = (feature.points[0][1] + feature.points[1][1]) / 2;
          
          board.create('text', [midX, midY + 0.3, feature.label], {
            fontSize: 10,
            color: feature.color,
            anchorX: 'middle'
          });
        });

        // Add legend
        features.forEach((feature, i) => {
          board.create('text', [0.5, 3.5 - i*0.6, `● ${feature.label}: ${feature.description}`], {
            fontSize: 9,
            color: feature.color,
          });
        });
      }}
    </BaseGraphViewer>
  );
}
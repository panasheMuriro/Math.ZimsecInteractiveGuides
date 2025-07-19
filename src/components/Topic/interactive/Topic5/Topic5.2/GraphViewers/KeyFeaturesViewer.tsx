// components/GraphViewers/KeyFeaturesViewer.tsx
import BaseGraphViewer from "./BaseGraphViewer";

interface SegmentFeature {
  type: 'segment';
  start: [number, number];
  end: [number, number];
  color: string;
  label: string;
  description: string;
}

interface CurveFeature {
  type: 'curve';
  points: [number, number][];
  color: string;
  label: string;
  description: string;
}

export type Feature = SegmentFeature | CurveFeature;

interface KeyFeaturesViewerProps {
  title?: string;
  showLegend?: boolean;
  xLabel: string;
  yLabel: string;
  features: Feature[];
}

export default function KeyFeaturesViewer({
  title = "Key Features",
  showLegend = true,
  xLabel,
  yLabel,
  features,
}: KeyFeaturesViewerProps) {
  return (
    <BaseGraphViewer
      boundingbox={[-1, 16, 11, -2]}
      xAxis={{ name: xLabel }}
      yAxis={{ name: yLabel }}
      title={title}
    >
      {(board) => {
        // Draw each feature
        features.forEach((feature) => {
          if (feature.type === 'segment') {
            // Straight line
            board.create('segment', [feature.start, feature.end], {
              strokeColor: feature.color,
              strokeWidth: 3,
              fixed: true,
              highlight: false,
            });
            
            // Add label at midpoint
            const midX = (feature.start[0] + feature.end[0]) / 2;
            const midY = (feature.start[1] + feature.end[1]) / 2;
            board.create('text', [midX, midY + 1, feature.label], {
              fontSize: 10,
              color: feature.color,
              anchorX: 'middle',
              fixed: true,
            });
          } else {
            // Curve
            const x = feature.points.map(p => p[0]);
            const y = feature.points.map(p => p[1]);
            board.create('curve', [x, y], {
              strokeColor: feature.color,
              strokeWidth: 3,
              fixed: true,
              highlight: false,
            });
            
            // Add label at midpoint
            const midPoint = feature.points[Math.floor(feature.points.length / 2)];
            board.create('text', [midPoint[0], midPoint[1] + 1, feature.label], {
              fontSize: 10,
              color: feature.color,
              anchorX: 'middle',
              fixed: true,
            });
          }
        });

        // Add legend if needed
        if (showLegend) {
          features.forEach((feature, i) => {
            board.create('text', [0.5, 13 - i, `● ${feature.label}: ${feature.description}`], {
              fontSize: 9,
              color: feature.color,
              fixed: true,
            });
          });
        }
      }}
    </BaseGraphViewer>
  );
}
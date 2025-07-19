// components/GraphViewers/MotionTypesViewer.tsx
import BaseGraphViewer from "./BaseGraphViewer";

interface MotionType {
  points: [number, number][];
  color: string;
  name: string;
  description: string;
}

interface MotionTypesViewerProps {
  title?: string;
  showLegend?: boolean;
  xLabel: string;
  yLabel: string;
  motionTypes: MotionType[];
}

export default function MotionTypesViewer({
  title = "Types of Motion",
  showLegend = true,
  xLabel,
  yLabel,
  motionTypes,
}: MotionTypesViewerProps) {
  return (
    <BaseGraphViewer
      boundingbox={[-1, 11, 12, -1]}
      xAxis={{ name: xLabel }}
      yAxis={{ name: yLabel }}
      title={title}
    >
      {(board) => {
        motionTypes.forEach((motion) => {
          if (motion.points.length === 2) {
            // Straight line
            board.create('segment', motion.points, {
              strokeColor: motion.color,
              strokeWidth: 4,
            });
          } else {
            // Curve
            const x = motion.points.map(p => p[0]);
            const y = motion.points.map(p => p[1]);
            board.create('curve', [x, y], {
              strokeColor: motion.color,
              strokeWidth: 4,
            });
          }
          
          // Add label
          const midPoint = motion.points[Math.floor(motion.points.length / 2)];
          board.create('text', [midPoint[0], midPoint[1] + 1, motion.name], {
            fontSize: 11,
            color: motion.color,
            anchorX: 'middle',
            fontWeight: 'bold',
          });
        });

        // Add legend if needed
        if (showLegend) {
          motionTypes.forEach((motion, i) => {
            board.create('text', [6, 9 - i * 0.5, `● ${motion.name}: ${motion.description}`], {
              fontSize: 9,
              color: motion.color,
            });
          });
        }
      }}
    </BaseGraphViewer>
  );
}
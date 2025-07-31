// components/GraphCodeRenderer.tsx
import React from "react";
import Quadrants from "./Topic5.1/GraphViewers/Quadrants";
import PointPlot from "./Topic5.1/GraphViewers/PointPlot";
import LinearGraphPlot from "./Topic5.1/LinearGraphPlot";
import GradientTypes from "./Topic5.1/GraphViewers/GradientTypes";
import QuadraticGraphPlot from "./Topic5.1/GraphViewers/QuadraticGraphPlot";
import QuadraticShapes from "./Topic5.1/GraphViewers/QuadraticShapes";
import MotionGraphKeyFeatures from "./Topic5.2/GraphViewers/MotionGraphKeyFeatures";
import MotionGraphExample from "./Topic5.2/GraphViewers/MotionGraphExample";
import DistanceTimeMotionTypes from "./Topic5.2/GraphViewers/DistanceTime/DistanceTimeMotionTypes";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const GraphCodeRenderer: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {
  if (className === "language-quadrants") {
    try {
      return <Quadrants />
    } catch {
      return <></>;
    }
  }

  if (className === "language-point-plot") {
    try {
      return <PointPlot />
    } catch {
      return <></>;
    }
  }

  if (className === "language-linear-demo") {
    try {
      return <LinearGraphPlot />
    } catch {
      return <></>;
    }
  }

  if (className === "language-gradient-types") {
    try {
      return <GradientTypes />
    } catch {
      return <></>;
    }
  }

  if (className === "language-linear-graph-example") {
    try {
      return <LinearGraphPlot
        gradient={2}
        yIntercept={-1}
        xRange={[-1, 2]}
      />
    } catch {
      return <></>;
    }
  }


  if (className === "language-quadratic-plot-example") {
    try {
      return <QuadraticGraphPlot a={1} b={0} c={0} />
    } catch {
      return <></>;
    }
  }


  if (className === "language-quadratic-plot-example-2") {
    try {
      return <QuadraticGraphPlot
        a={1}
        b={-4}
        c={3}
        xRange={[-1, 5] as [number, number]}
        minX={-2}
        maxX={6}
        minY={-2}
        maxY={6}
        width={400}
        height={400}
        unitSize={50}
      />
    } catch {
      return <></>;
    }
  }


  if (className === "language-quadratic-graph-shapes") {
    try {
      return <QuadraticShapes />
    } catch {
      return <></>;
    }
  }

  if (className === "language-distance-time-features") {
    try {
      return  <MotionGraphKeyFeatures graphType="distance-time" width={400} height={400} unitSize={40} />
    } catch {
      return <pre>Invalid distance-time features data</pre>;
    }
  }

  if (className === "language-distance-time-motion") {
    try {
      return  <DistanceTimeMotionTypes/>
    } catch {
      return <pre>Invalid distance-time motion data</pre>;
    }
  }

  if (className === "language-distance-time-example") {
    try {
      return <MotionGraphExample graphType="distance-time" width={400} height={300} unitSize={40} />
    } catch {
      return <pre>Invalid example graph data</pre>;
    }
  }

  if (className === "language-velocity-time-features") {
    try {
      return  <MotionGraphKeyFeatures graphType="velocity-time" width={400} height={400} unitSize={40} />
    } catch {
      return <pre>Invalid velocity-time features data</pre>;
    }
  }

  if (className === "language-velocity-time-example") {
    try {
      return  <MotionGraphExample graphType="velocity-time" width={400} height={300} unitSize={40} />
    } catch {
      return <pre>Invalid example graph data</pre>;
    }
  }

  if (className === "language-displacement-features") {
    return <MotionGraphKeyFeatures graphType="displacement-time" width={400} height={400} unitSize={40} />

  }

  if (className === "language-displacement-example") {
    return  <MotionGraphExample graphType="displacement-time" width={400} height={300} unitSize={40} />

  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default GraphCodeRenderer;

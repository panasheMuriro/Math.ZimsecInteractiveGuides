// components/GraphCodeRenderer.tsx
import React from "react";
import DistanceTimeMotionTypesViewer from "./Topic5.2/GraphViewers/DistanceTime/DistanceTimeMotionTypesViewer";
import DistanceTimeExampleViewer from "./Topic5.2/GraphViewers/DistanceTime/DistanceTimeExampleViewer";
import DistanceTimeKeyFeatures from "./Topic5.2/GraphViewers/DistanceTime/DistanceTimeKeyFeatures";
import VelocityTimeKeyFeatures from "./Topic5.2/GraphViewers/VelocityTime/VelocityTimeKeyFeatures";
import VelocityTimeExampleViewer from "./Topic5.2/GraphViewers/VelocityTime/VelocityTimeExampleViewer";
import DisplacementKeyFeaturesViewer from "./Topic5.2/GraphViewers/Displacement/DisplacementKeyFeaturesViewer";
import DisplacementGradientViewer from "./Topic5.2/GraphViewers/Displacement/DisplacementGradientViewer";
import DisplacementExampleViewer from "./Topic5.2/GraphViewers/Displacement/DisplacementExampleViewer";
import Quadrants from "./Topic5.1/GraphViewers/Quadrants";
import PointPlot from "./Topic5.1/GraphViewers/PointPlot";
import LinearGraphPlot from "./Topic5.1/LinearGraphPlot";
import GradientTypes from "./Topic5.1/GraphViewers/GradientTypes";
import QuadraticGraphPlot from "./Topic5.1/GraphViewers/QuadraticGraphPlot";
import QuadraticShapes from "./Topic5.1/GraphViewers/QuadraticShapes";

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
      return <Quadrants/>
    } catch {
      return <></>;
    }
  }


  if (className === "language-point-plot") {
    try {
      return <PointPlot/>
    } catch {
      return <></>;
    }
  }

    if (className === "language-linear-demo") {
    try {
      return <LinearGraphPlot/>
    } catch {
      return <></>;
    }
  }


  if (className === "language-gradient-types") {
    try {
      return <GradientTypes/>
    } catch {
      return <></>;
    }
  }

if (className === "language-linear-graph-example") {
    try {
      return<LinearGraphPlot 
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
      return  <QuadraticGraphPlot
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
      return  <QuadraticShapes/>
    } catch {
      return <></>;
    }
  }


// 





  if (className === "language-distance-time-features") {
    try {
      const data = JSON.parse(children as string);
      return <DistanceTimeKeyFeatures {...data} />;
    } catch {
      return <pre>Invalid distance-time features data</pre>;
    }
  }

  if (className === "language-distance-time-motion") {
    try {
      const data = JSON.parse(children as string);
      return <DistanceTimeMotionTypesViewer data={data} />;
    } catch {
      return <pre>Invalid distance-time motion data</pre>;
    }
  }

  if (className === "language-distance-time-example") {
    try {
      const data = JSON.parse(children as string);
      return <DistanceTimeExampleViewer {...data} />;
    } catch {
      return <pre>Invalid example graph data</pre>;
    }
  }

  if (className === "language-velocity-time-features") {
    try {
      const data = JSON.parse(children as string);
      return <VelocityTimeKeyFeatures {...data} />;
    } catch {
      return <pre>Invalid velocity-time features data</pre>;
    }
  }

  if (className === "language-velocity-time-example") {
    try {
      const data = JSON.parse(children as string);
      return <VelocityTimeExampleViewer {...data} />;
    } catch {
      return <pre>Invalid example graph data</pre>;
    }
  }

  if (className === "language-displacement-features") {
    return <DisplacementKeyFeaturesViewer />;
  }

  if (className === "language-displacement-gradient") {
    return <DisplacementGradientViewer />;
  }

  if (className === "language-displacement-example") {
    return <DisplacementExampleViewer />;
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default GraphCodeRenderer;

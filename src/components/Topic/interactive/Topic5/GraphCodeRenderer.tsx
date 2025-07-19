// components/GraphCodeRenderer.tsx
import React from 'react';
import JSXGraphViewer from './Topic5.1/GraphViewers/JSXGraphViewer';
import LinearGraphViewer from './Topic5.1/GraphViewers/LinearGraphViewer';
import GradientViewer from './Topic5.1/GraphViewers/GradientViewer';
import QuadraticGraphViewer from './Topic5.1/GraphViewers/QuadraticGraphViewer';
import DistanceTimeMotionTypesViewer from './Topic5.2/GraphViewers/DistanceTimeMotionTypesViewer';
import DistanceTimeExampleViewer from './Topic5.2/GraphViewers/DistanceTimeExampleViewer';
import DistanceTimeKeyFeatures from './Topic5.2/GraphViewers/DistanceTimeKeyFeatures';
import VelocityTimeKeyFeatures from './Topic5.2/GraphViewers/VelocityTimeKeyFeatures';
import VelocityTimeExampleViewer from './Topic5.2/GraphViewers/VelocityTimeExampleViewer';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const GraphCodeRenderer: React.FC<CodeProps> = ({ className, children, ...props }) => {



  if (className === "language-graph") {
    try {
      const data = JSON.parse(children as string);
      return <JSXGraphViewer data={data} />;
    } catch {
      return <pre>Invalid graph data</pre>;
    }
  }
  
  if (className === "language-linear") {
    try {
      const data = JSON.parse(children as string);
      return <LinearGraphViewer data={data} />;
    } catch {
      return <pre>Invalid linear graph data</pre>;
    }
  }

  if (className === "language-gradient") {
    try {
      const data = JSON.parse(children as string);
      return <GradientViewer data={data} />;
    } catch {
      return <pre>Invalid gradient data</pre>;
    }
  }

  if (className === "language-quadratic") {
    try {
      const data = JSON.parse(children as string);
      return <QuadraticGraphViewer data={data} />;
    } catch {
      return <pre>Invalid quadratic data</pre>;
    }
  }

    if (className === "language-distance-time-features") {
    try {
      const data = JSON.parse(children as string);
      return <DistanceTimeKeyFeatures  {...data} />;
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

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default GraphCodeRenderer;
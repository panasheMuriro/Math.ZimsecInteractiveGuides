// // // /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import JSXGraphViewer from './JSXGraphViewer'; // Adjust the import path as needed
// import LinearGraphViewer from './LinearGraphViewer'; // Adjust the import path as needed
// import GradientViewer from './GradientViewer';

// interface CodeProps extends React.HTMLAttributes<HTMLElement> {
//   className?: string;
//   children?: React.ReactNode;
// }

// const GraphCodeRenderer: React.FC<CodeProps> = ({ className, children, ...props }) => {
//   if (className === "language-graph") {
//     try {
//       const data = JSON.parse(children as string);
//       return <JSXGraphViewer data={data} />;
//     } catch {
//       return <pre>Invalid graph data</pre>;
//     }
//   }
  
//   if (className === "language-linear") {
//     try {
//       const data = JSON.parse(children as string);
//       return <LinearGraphViewer data={data} />;
//     } catch {
//       return <pre>Invalid linear graph data</pre>;
//     }
//   }

//     if (className === "language-gradient") {
//     try {
//       const data = JSON.parse(children as string);
//       return <GradientViewer data={data} />;
//     } catch {
//       return <pre>Invalid gradient data</pre>;
//     }
// }

//   return (
//     <code className={className} {...props}>
//       {children}
//     </code>
//   );
// };

// export default GraphCodeRenderer;

// components/GraphCodeRenderer.tsx
import React from 'react';
import JSXGraphViewer from './Topic5.1/GraphViewers/JSXGraphViewer';
import LinearGraphViewer from './Topic5.1/GraphViewers/LinearGraphViewer';
import GradientViewer from './Topic5.1/GraphViewers/GradientViewer';
import QuadraticGraphViewer from './Topic5.1/GraphViewers/QuadraticGraphViewer';
import DistanceTimeMotionTypesViewer from './Topic5.2/GraphViewers/DistanceTimeMotionTypesViewer';
import DistanceTimeKeyFeaturesViewer from './Topic5.2/GraphViewers/DistanceTimeKeyFeaturesViewer';
import KeyFeaturesGraphViewer from './Topic5.2/GraphViewers/KeyFeaturesGraphViewer';
import DistanceTimeExampleViewer from './Topic5.2/GraphViewers/DistanceTimeExampleViewer';

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
      return <DistanceTimeKeyFeaturesViewer data={data} />;
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

    if (className === "language-keyfeatures") {
    try {
      const data = JSON.parse(children as string);
      return <KeyFeaturesGraphViewer data={data} />;
    } catch {
      return <pre>Invalid key features graph data</pre>;
    }
  }

  if (className === "language-examplegraph") {
  try {
    const data = JSON.parse(children as string);
    return <DistanceTimeExampleViewer data={data} />;
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
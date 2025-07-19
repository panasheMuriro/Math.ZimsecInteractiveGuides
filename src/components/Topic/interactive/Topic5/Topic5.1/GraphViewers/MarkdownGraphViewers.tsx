// // /* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import JSXGraphViewer from './JSXGraphViewer'; // Adjust the import path as needed
import LinearGraphViewer from './LinearGraphViewer'; // Adjust the import path as needed
import GradientViewer from './GradientViewer';

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

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default GraphCodeRenderer;
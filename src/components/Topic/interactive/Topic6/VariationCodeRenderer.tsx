// components/GraphCodeRenderer.tsx
import React from "react";
import VariationVisualizer from "./VariationViewers/VariationVisualizer";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const VariationCodeRenderer: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {
  if (className === "language-direct-variation") {
    try {
      return <VariationVisualizer type="direct-variation"/>
    } catch {
      return <></>;
    }
  }


  if (className === "language-inverse-variation") {
    try {
      return <VariationVisualizer type="inverse-variation"/>
    } catch {
      return <></>;
    }
  }

    if (className === "language-distinguishing-variation") {
    try {
      return <VariationVisualizer type="variation-comparison"/>
    } catch {
      return <></>;
    }
  }

     if (className === "language-joint-variation") {
    try {
      return <VariationVisualizer type="joint-variation"/>
    } catch {
      return <></>;
    }
  }

     if (className === "language-partial-variation") {
    try {
      return<VariationVisualizer type="partial-variation"/>
    } catch {
      return <></>;
    }
  }
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default VariationCodeRenderer;

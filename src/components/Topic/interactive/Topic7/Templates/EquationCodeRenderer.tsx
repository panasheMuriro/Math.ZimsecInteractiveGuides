// components/EqautionCodeRenderer.tsx
import React from "react";
import CommonFactorPractice from "../TopicBackup/Viewers/CommonFactorPractice";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const EquationCodeRenderer: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {
  if (className === "language-am-method-one") {
    return <CommonFactorPractice/>
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default EquationCodeRenderer;

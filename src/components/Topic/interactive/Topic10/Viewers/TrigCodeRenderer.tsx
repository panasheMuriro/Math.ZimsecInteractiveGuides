import PythagorasDemo1 from "./PythagorasDemo1";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const TrigCodeRenderer: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {

  if (className === "language-pythagoras-demo-1") {
    return <PythagorasDemo1/>
  }
  
  // Default code rendering
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};


export default TrigCodeRenderer;
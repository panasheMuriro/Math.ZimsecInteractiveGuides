// components/EquationCodeRenderer.tsx
import { CollinearAngles, LineAnglesExamples, StraightLineSVG } from "./Topic8.1/Viewers/SVGViewer";
import  { AnglesAroundPoint, VerticallyOppositeAngles } from "./Topic8.2/SVGViewer82";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const SVGCodeRenderer: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {
  const content = String(children).trim();
  
  // Handle SVG rendering

  // Handle SVG with options
  if (className === "language-svg-viewer") {
    const options = content.split('\n').reduce((acc, line) => {

    
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) acc[key] = value;

      return acc;
    }, {} as Record<string, string>);

    console.log(options)
    
    return renderSVGBasedOnOptions(options);
  }


    if (className === "language-svg-viewer-8-2") {
    const options = content.split('\n').reduce((acc, line) => {
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) acc[key] = value;

      return acc;
    }, {} as Record<string, string>);

    console.log(options)
    
    return renderSVGBasedOnOptions(options);
  }


  



  // Default code rendering
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

// Helper function to render different SVG components based on options
function renderSVGBasedOnOptions(options: Record<string, string>) {
  switch (options.type) {
    // case "linear-pair":
    //   return <LinearPairSVG />;
    case "collinear-angles":
      return <CollinearAngles />;
    case "line-angles-examples":
      return <LineAnglesExamples />;
    case "straight-line":
      return <StraightLineSVG />;

    case "angles-around-point":
        return <AnglesAroundPoint/>

    case "vertically-opposite-angles":
        return <VerticallyOppositeAngles/>
    default:
      return <>nothing to show</>;
  }
}

export default SVGCodeRenderer;
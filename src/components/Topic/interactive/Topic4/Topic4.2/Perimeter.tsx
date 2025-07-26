import ShapeCalculator, {
  perimeterCalculateAnswer,
  perimeterGenerateDimensions,
  perimeterShapes,
} from "./ShapeCalculator";

export default function PerimeterChallenge() {
  return (
    <ShapeCalculator
      mode="perimeter"
      shapes={perimeterShapes}
      title="Perimeter Challenge"
      calculateAnswer={perimeterCalculateAnswer}
      generateDimensions={perimeterGenerateDimensions}
    />
  );
}

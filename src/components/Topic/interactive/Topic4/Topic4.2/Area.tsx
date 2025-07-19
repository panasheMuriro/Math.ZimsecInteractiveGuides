import ShapeCalculator, {
  areaCalculateAnswer,
  areaGenerateDimensions,
  areaShapes,
} from "./ShapeCalculator";

export default function AreaChallenge() {
  return (
    <>
      <ShapeCalculator
        mode="area"
        shapes={areaShapes}
        title="Area Challenge"
        calculateAnswer={areaCalculateAnswer}
        generateDimensions={areaGenerateDimensions}
      />
    </>
  );
}

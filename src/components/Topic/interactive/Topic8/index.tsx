import AnglesAroundPointQuiz from "./Topic8.1/AnglesAroundPointQuiz";
import AnglesOfElevationDepressionQuiz from "./Topic8.1/AnglesOfElevationDepression";
import AngleTypesVisualizer from "./Topic8.1/AngleTypesVisualizer";
import LinearAngles from "./Topic8.1/LinearAngles";
import ProtractorMeasurementTool from "./Topic8.1/ProtractorUsage";
import BearingProblems from "./Topic8.2/BearingProblems";
import CardinalBearings from "./Topic8.2/CardinalBearings";
import CompassBearings from "./Topic8.2/CompassBearings";
import ThreeFigureBearings from "./Topic8.2/ThreeFigureBearings";
import CircleTheorems from "./Topic8.3/CircleTheorems";
import PolygonAngleCalculations from "./Topic8.3/PolygonAngleCalculations";
import PolygonClassification from "./Topic8.3/PolygonClassification";
import QuadrilateralProperties from "./Topic8.3/QuadrilateralProperties";
import TriangleProperties from "./Topic8.3/TriangleProperties";
import CongruencyTests from "./Topic8.4/CongruencyTests";
import ScaleFactors from "./Topic8.4/ScaleFactors";
import SimilarityCongruency from "./Topic8.4/SimilarityCongruency";
import SimilarShapesProblems from "./Topic8.4/SimilarShapesProblems";
import BasicConstructions from "./Topic8.5/BasicConstructions";
import LineSymmetry from "./Topic8.6/LineSymmetry";
import RotationalSymmetry from "./Topic8.6/RotationalSymmetry";
import ShapeConstructions from "./Topic8.5/ShapeConstructions";

export const topic8Components: Record<string, React.ComponentType> = {
  "angle-types": AngleTypesVisualizer,
  "protractor-usage": ProtractorMeasurementTool,
  "straight-line-angles": LinearAngles,
  "angles-around-point": AnglesAroundPointQuiz,
  "elevation-depression": AnglesOfElevationDepressionQuiz,
  "cardinal-directions": CardinalBearings,
  "compass-bearings": CompassBearings,
  "three-figure-bearings": ThreeFigureBearings,
  "bearing-problems": BearingProblems,
  "polygon-classification": PolygonClassification,
  "triangle-properties": TriangleProperties,
  "quadrilateral-properties": QuadrilateralProperties,
  "polygon-angles": PolygonAngleCalculations,
  "circle-theorems": CircleTheorems,
  "similarity-congruency": SimilarityCongruency,
  "congruence-tests": CongruencyTests,
  "scale-factors": ScaleFactors,
  "similar-shapes-problems": SimilarShapesProblems,
  "basic-constructions": BasicConstructions,
  "shape-constructions": ShapeConstructions,
  "line-symmetry": LineSymmetry,
  "rotational-symmetry": RotationalSymmetry,
};
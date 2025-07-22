import { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import {  useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Include KaTeX styles
import remarkGfm from "remark-gfm";

import Header from "../../Global/Header";
import { useTopicContext } from "../hooks/useTopicContext";

// Interactive components
import NumberClassifier from "../interactive/Topic1/Topic1.1/NumberClassifier";
import RoundingGame from "../interactive/RoundingGame";
import StandardFormConverter from "../interactive/StandardFormConverter";
import BaseConverter from "../interactive/Topic1/Topic1.5/BaseConverter";
import ScaleCalculator from "../interactive/ScaleCalculator";
import NaturalNumbers from "../interactive/Topic1/Topic1.1/NaturalNumbers";
import WholeNumbers from "../interactive/Topic1/Topic1.1/WholeNumbers";
import Integers from "../interactive/Topic1/Topic1.1/Integers";
import RationalNumbers from "../interactive/Topic1/Topic1.1/RationalNumbers";
import DecimalPlacesVisualizer from "../interactive/Topic1/Topic1.2/DecimalPlacesVisualizer";
import EstimationGame from "../interactive/Topic1/Topic1.2/EstimationGame";
import LimitsOfAccuracy from "../interactive/Topic1/Topic1.2/LimitsOfAccuracy";
import LargeNumbers from "../interactive/Topic1/Topic1.4/LargeNumbers";
import SmallNumbers from "../interactive/Topic1/Topic1.4/SmallNumbers";
import RatioSimplifier from "../interactive/Topic1/Topic1.3/RatioSimplifier";
import RateCalculator from "../interactive/Topic1/Topic1.3/RateCalculator";
import ProportionSolver from "../interactive/Topic1/Topic1.3/ProportionSolver";
import Base10Explorer from "../interactive/Topic1/Topic1.5/Base10Explorer";
import BinaryExplorer from "../interactive/Topic1/Topic1.5/BinaryExplorer";
import SetBasics from "../interactive/Topic2/SetBasics";
import SetTypes from "../interactive/Topic2/SetTypes";
import VennTwoSets from "../interactive/Topic2/VennTwoSets";
import VennThreeSets from "../interactive/Topic2/VennThreeSets";
import SetBuilder from "../interactive/Topic2/SetBuilder";
import ConsumerArithmeticCalculator from "../interactive/Topic3/ConsumerArithmeticCalculator";
import HouseholdBills from "../interactive/Topic3/HouseholdBills";
import ProfitLossCalculator from "../interactive/Topic3/ProfitLossCalculator";
import SimpleInterestCalculator from "../interactive/Topic3/SimpleInterestCalculator";
import CompoundInterest from "../interactive/Topic3/CompoundInterest";
import HirePurchaseCalculator from "../interactive/Topic3/HirePurchaseCalculator";
import CommissionTaxCalculator from "../interactive/Topic3/CommissionTaxCalculator";
import ForeignExchange from "../interactive/Topic3/ForeignExchange";
import LengthUnits from "../interactive/Topic4/Topic4.1/LengthUnits";
import TemperatureUnits from "../interactive/Topic4/Topic4.1/TemperatureUnits";
import CapacityUnits from "../interactive/Topic4/Topic4.1/CapacityUnits";
import VolumeUnits from "../interactive/Topic4/Topic4.1/VolumeUnits";
import AreaUnits from "../interactive/Topic4/Topic4.1/AreaUnits";
import DensityUnits from "../interactive/Topic4/Topic4.1/DensityUnits";
import MassUnits from "../interactive/Topic4/Topic4.1/MassUnits";
import TimeUnits from "../interactive/Topic4/Topic4.1/TimeUnits";
import PerimeterChallenge from "../interactive/Topic4/Topic4.2/Perimeter";
import AreaChallenge from "../interactive/Topic4/Topic4.2/Area";
import CombinedShapesCalculator from "../interactive/Topic4/Topic4.2/CombinedShapesCalculator";
import VolumeCuboids from "../interactive/Topic4/Topic4.2/VolumeCuboids";
import { VolumeCylinders } from "../interactive/Topic4/Topic4.2/VolumeCylinders";
import SurfaceAreas from "../interactive/Topic4/Topic4.2/SurfaceAreas";
import { VolumeDensity } from "../interactive/Topic4/Topic4.2/VolumeDensity";
import CartesianPlane from "../interactive/Topic5/Topic5.1/CartesianPlane";
import GraphCodeRenderer from "../interactive/Topic5/GraphCodeRenderer";
import LinearGraphInteractive from "../interactive/Topic5/Topic5.1/LinearGraphs";
import QuadraticGraphs from "../interactive/Topic5/Topic5.1/QuadraticGraphs";
import CubicFunctions from "../interactive/Topic5/Topic5.1/CubicFunctions";
import InverseFunctions from "../interactive/Topic5/Topic5.1/InverseFunctions";
import VelocityTime from "../interactive/Topic5/Topic5.2/Practice/VelocityTime";
import DistanceTime from "../interactive/Topic5/Topic5.2/Practice/DistanceTime";
import DisplacementTimeQuiz from "../interactive/Topic5/Topic5.2/Practice/Displacement";
import DirectVariation from "../interactive/Topic6/DirectVariation";
import InverseVariation from "../interactive/Topic6/InverseVariation";
import PartialVariation from "../interactive/Topic6/PartialVariation";
import JointVariation from "../interactive/Topic6/ JointVariation";
import VariationComparison from "../interactive/Topic6/VariationComparison";
import VariationProblemQuiz from "../interactive/Topic6/VariationProblemQuiz";
import AlgebraicSimplification from "../interactive/Topic7/Topic7.1/AlgebraicSimplification";
import HCFLCM from "../interactive/Topic7/Topic7.1/HCFLCM";
import Factorization from "../interactive/Topic7/Topic7.1/Factorization";
import AngleTypesVisualizer from "../interactive/Topic8/Topic8.1/AngleTypesVisualizer";
import ProtractorMeasurementTool from "../interactive/Topic8/Topic8.1/ProtractorUsage";
import SVGCodeRenderer from "../interactive/Topic8/SVGCodeRenderer";
import LinearAngles from "../interactive/Topic8/Topic8.1/LinearAngles";
import AnglesAroundPointQuiz from "../interactive/Topic8/Topic8.1/AnglesAroundPointQuiz";
import CardinalBearings from "../interactive/Topic8/Topic8.2/CardinalBearings";
import CompassBearings from "../interactive/Topic8/Topic8.2/CompassBearings";
import ThreeFigureBearings from "../interactive/Topic8/Topic8.2/ThreeFigureBearings";
import BearingProblems from "../interactive/Topic8/Topic8.2/BearingProblems";
import PolygonClassification from "../interactive/Topic8/Topic8.3/PolygonClassification";
import TriangleProperties from "../interactive/Topic8/Topic8.3/TriangleProperties";
import QuadrilateralProperties from "../interactive/Topic8/Topic8.3/QuadrilateralProperties";
import PolygonAngleCalculations from "../interactive/Topic8/Topic8.3/PolygonAngleCalculations";
import CircleTheorems from "../interactive/Topic8/Topic8.3/CircleTheorems";
import SimilarityCongruency from "../interactive/Topic8/Topic8.4/SimilarityCongruency";
import CongruencyTests from "../interactive/Topic8/Topic8.4/CongruencyTests";
import ScaleFactors from "../interactive/Topic8/Topic8.4/ScaleFactors";
import SimilarShapesProblems from "../interactive/Topic8/Topic8.4/SimilarShapesProblems";
import BasicConstructions from "../interactive/Topic8/Topic8.5/BasicConstructions";
import ShapeConstructions from "../interactive/Topic8/Topic8.5/ShapeConstructions";
import RotationalSymmetry from "../interactive/Topic8/Topic8.5/RotationalSymmetry";
import DataCollectionQuiz from "../interactive/Topic9/Topic9.1/DataCollection";
import DataClassificationQuiz from "../interactive/Topic9/Topic9.1/DataClassification";
import DataRepresentationViz from "../interactive/Topic9/Topic9.1/DataRepresentation";
import LineSymmetry from "../interactive/Topic8/Topic8.5/LineSymmetry";


const StudyView = () => {
  const { topicData } = useTopicContext();
  const { sectionIndex , topicId} = useParams();
  const navigate = useNavigate();
  const [currentSubsection, setCurrentSubsection] = useState(0);

  const currentSectionIndex = parseInt(sectionIndex || "0");
  const section = topicData.sections[currentSectionIndex];

  const currentContent = section.subsections
    ? section.subsections[currentSubsection]
    : section;

  const renderInteractive = (type: string) => {
    switch (type) {

      // Topic1
      case "number-classifier":
        return <NumberClassifier />;
      case "rounding-game":
        return <RoundingGame />;
      case "standard-form-converter":
        return <StandardFormConverter />;
      case "scale-calculator":
        return <ScaleCalculator />;
      case "natural-numbers":
        return <NaturalNumbers />;
      case "whole-numbers":
        return <WholeNumbers />;
      case "integers":
        return <Integers />;
      case "rational-numbers":
        return <RationalNumbers />;
      case "decimal-places":
        return <DecimalPlacesVisualizer />;
      case "estimation-game":
        return <EstimationGame />;
      case "limits-accuracy":
        return <LimitsOfAccuracy />;
      case "large-numbers":
        return <LargeNumbers />;
      case "small-numbers":
        return <SmallNumbers />;
      case "ratio-simplifier":
        return <RatioSimplifier />;
      case "rate-calculator":
        return <RateCalculator />;
      case "proportion-solver":
        return <ProportionSolver />;
      case "base-10":
        return <Base10Explorer />;
      case "base-2":
        return <BinaryExplorer />;
      case "base-converter":
        return <BaseConverter />;

      // Topic 2
      case "set-basics":
        return <SetBasics />;
      case "set-types":
        return <SetTypes />;
      case "venn-two-sets":
        return <VennTwoSets />;
      case "venn-three-sets":
        return <VennThreeSets />;
      case "set-builder":
        return <SetBuilder />;

      // Topic 3
      case "consumer-arithmetic":
        return <ConsumerArithmeticCalculator />;
      case "household-bills":
        return <HouseholdBills />;
      case "profit-loss":
        return <ProfitLossCalculator />;
      case "simple-interest":
        return <SimpleInterestCalculator />;
      case "compound-interest":
        return <CompoundInterest />;
      case "hire-purchase":
        return <HirePurchaseCalculator />;
      case "commission-tax":
        return <CommissionTaxCalculator />;
      case "foreign-exchange":
        return <ForeignExchange />;

      // Topic4

      case "time-units":
        return <TimeUnits />;
      case "mass-units":
        return <MassUnits />;
      case "length-units":
        return <LengthUnits />;
      case "temperature-units":
        return <TemperatureUnits />;
      case "capacity-units":
        return <CapacityUnits />;
      case "area-units":
        return <AreaUnits />;
      case "volume-units":
        return <VolumeUnits />;
      case "density":
        return <DensityUnits />;
      case "perimeter":
        return <PerimeterChallenge />;
      case "area":
        return <AreaChallenge />;
      case "combined-shapes":
        return <CombinedShapesCalculator />;
      case "volume-cuboids":
        return <VolumeCuboids />;
      case "volume-cylinders":
        return <VolumeCylinders />;
      case "surface-area":
        return <SurfaceAreas />;
      case "volume-density":
        return <VolumeDensity />;

      // Topic 5

      case "cartesian-plane":
        return <CartesianPlane />;
      case "linear-graphs":
        return <LinearGraphInteractive/>
      case "quadratic-graphs":
        return <QuadraticGraphs/>
      case "cubic-functions":
        return <CubicFunctions/>
      case "inverse-functions":
        return <InverseFunctions/>
      case "distance-time":
        return <DistanceTime/>
      case "velocity-time":
        return <VelocityTime/>
      case "displacement-time":
        return <DisplacementTimeQuiz/>
      


      // Topic 6

      case "direct-variation":
        return <DirectVariation/>
      case "inverse-variation":
        return <InverseVariation/>
      case "partial-variation":
        return <PartialVariation/>
      case "joint-variation":
        return <JointVariation/>
      case "variation-comparison":
        return <VariationComparison/>
      case "variation-graphs":
        return <VariationComparison/>
      case "variation-problems":
        return <VariationProblemQuiz/>


      // Topic 7
      case "algebraic-simplification":
        return <AlgebraicSimplification/>
      case "hcf-lcm-algebra":
        return <HCFLCM/>
      case "factorization":
        return <Factorization/>

      //  Topic 8

      case "angle-types":
        return <AngleTypesVisualizer/>
      case "protractor-usage":
        return <ProtractorMeasurementTool/>
      case "straight-line-angles":
        return <LinearAngles/>
      case "angles-around-point":
        return <AnglesAroundPointQuiz/>
      case "cardinal-directions":
        return <CardinalBearings/>
      case "compass-bearings":
        return <CompassBearings/>
      case "three-figure-bearings":
        return <ThreeFigureBearings/>
      case "bearing-problems":
        return <BearingProblems/>
      case "polygon-classification":
        return <PolygonClassification/>
      case "triangle-properties":
        return <TriangleProperties/>
      case "quadrilateral-properties":
        return <QuadrilateralProperties/>
      case "polygon-angles":
        return <PolygonAngleCalculations/>
      case "circle-theorems":
        return <CircleTheorems/>
      case "similarity-congruency":
        return <SimilarityCongruency/>
      case "congruence-tests":
        return <CongruencyTests/>
      case "scale-factors":
        return <ScaleFactors/>
      case "similar-shapes-problems":
        return <SimilarShapesProblems/>
      case "basic-constructions":
        return <BasicConstructions/>
      case "shape-constructions":
        return <ShapeConstructions/>
      case "line-symmetry":
        return <LineSymmetry/>
      case "rotational-symmetry":
        return <RotationalSymmetry/>


      // Topic 9

      case "data-collection":
        return <DataCollectionQuiz/>
      case "data-classification":
        return <DataClassificationQuiz/>
      case "data-representation":
        return <DataRepresentationViz/>

      default:
        return null;
    }
  };

  const handleNext = () => {
    if (
      section.subsections &&
      currentSubsection < section.subsections.length - 1
    ) {
      setCurrentSubsection(currentSubsection + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentSubsection > 0) {
      setCurrentSubsection(currentSubsection - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#3b3a30] p-6 font-serif">
      <div className="max-w-md mx-auto">
        <Header
          title={section.title}
          icon={section.icon}
          showBackButton
          onBack={() => navigate(`/topics/${topicData.id}`)}
        />

        {section.subsections && (
          <h3 className="text-lg font-semibold text-[#4e4b44] mb-4">
            {currentContent.title}
          </h3>
        )}

        <div className="bg-[#fffef9] shadow-lg border border-[#e4ded4] rounded-2xl p-6 mb-6 prose max-w-none">
          <div className="prose max-w-none text-gray-900 leading-[30px]">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
              components={{
                code:topicId == "8" ? SVGCodeRenderer: GraphCodeRenderer
              }}
            >
              {currentContent.content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="text-lg mb-4 font-bold">Practice</div>

        <div className="mb-6">
          {renderInteractive(currentContent.interactive as string)}
        </div>

        {section.subsections && (
          <div className="flex justify-between mb-6">
            <button
              onClick={handlePrev}
              disabled={currentSubsection === 0}
              className={`flex items-center px-4 py-2 rounded-lg border ${
                currentSubsection === 0
                  ? "text-gray-400 border-gray-200"
                  : "hover:bg-[#f0ece6] text-[#333] border-[#ddd]"
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Previous
            </button>
            <div className="text-sm text-[#5c5b57] tracking-wide pt-2">
              {currentSubsection + 1} of {section.subsections.length}
            </div>
            <button
              onClick={handleNext}
              disabled={currentSubsection === section.subsections.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg border ${
                currentSubsection === section.subsections.length - 1
                  ? "text-gray-400 border-gray-200"
                  : "hover:bg-[#f0ece6] text-[#333] border-[#ddd]"
              }`}
            >
              Next <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}

        {/* <Link
          to={`/topics/${topicData.id}`}
          className="w-full mt-6 bg-[#4A9782] text-white font-bold py-4 px-6 rounded-2xl hover:bg-[#f9c77c] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-md mt-10"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mark as Complete</span>
        </Link> */}
      </div>
    </div>
  );
};

export default StudyView;

import ScaleCalculator from "../ScaleCalculator";
import CubesCubeRootsQuiz from "./Topic1.1/CubesCubeRootsQuiz";
import DirectedNumbersQuiz from "./Topic1.1/DirectedNumbersQuiz";
import FactorsHCF from "./Topic1.1/FactorsHCF";
import { FractionsPercentagesQuiz } from "./Topic1.1/FractionsPercentagesQuiz";
import MultiplesLCM from "./Topic1.1/MultiplesLCM";
import NumberPatternsQuiz from "./Topic1.1/NumberPatternsQuiz";
import NumberTypesQuiz from "./Topic1.1/NumberTypesQuiz";
import OrderOfOperationsQuiz from "./Topic1.1/OrderOfOperationsQuiz";
import SquaresSquareRootsQuiz from "./Topic1.1/SquaresSquareRootsQuiz";
import DecimalPlacesGame from "./Topic1.2/DecimalPlacesGame";
import EstimationGame from "./Topic1.2/EstimationGame";
import LimitsOfAccuracyGame from "./Topic1.2/LimitsOfAccuracyGame";
import RoundingGame from "./Topic1.2/RoundingGame";
import DirectProportion from "./Topic1.3/DirectProportion";
import InverseProportion from "./Topic1.3/InverseProportion";
import RateCalculator from "./Topic1.3/RateCalculator";
import RatioQuiz from "./Topic1.3/RatioQuiz";
import LargeNumbers from "./Topic1.4/LargeNumbers";
import SmallNumbers from "./Topic1.4/SmallNumbers";
import StandardFormAdditionSubtraction from "./Topic1.4/StandardFormAdditionSubtraction";
import StandardFormConverter from "./Topic1.4/StandardFormConverter";
import StandardFormDivision from "./Topic1.4/StandardFormDivision";
import StandardFormMultiplication from "./Topic1.4/StandardFormMultiplication";
import StandardFormOperationOverview from "./Topic1.4/StandardFormOperationOverview";
import Base10Quiz from "./Topic1.5/Base10Quiz";
import Base2Quiz from "./Topic1.5/Base2Quiz";
import BaseArithmeticQuiz from "./Topic1.5/BaseArithmeticQuiz";
import BaseConverter from "./Topic1.5/BaseConverter";
import BaseEquationsQuiz from "./Topic1.5/BaseEquationsQuiz";
import OtherBasesQuiz from "./Topic1.5/OtherBasesQuiz";
import ScaleFactorAreaQuiz from "./Topic1.6/ScaleFactorAreaQuiz";
import ScaleMeasurementsQuiz from "./Topic1.6/ScaleMeasurementsQuiz";
import ScaleTypesQuiz from "./Topic1.6/ScaleTypesQuiz";
import ScaleApplicationsQuiz from "./Topic1.6/ScaleApplicationsQuiz";


export const topic1Components: Record<string, React.ComponentType> = {
  "rounding-game": RoundingGame,

  "scale-calculator": ScaleCalculator,
  "number-types": NumberTypesQuiz,
  "factors-hcf": FactorsHCF,
  "multiples-lcm": MultiplesLCM,
  "directed-numbers": DirectedNumbersQuiz,
  "fractions-percentages": FractionsPercentagesQuiz,
  "squares-square-roots": SquaresSquareRootsQuiz,
  "cubes-cube-roots": CubesCubeRootsQuiz,
  "order-operations": OrderOfOperationsQuiz,
  "number-patterns": NumberPatternsQuiz,


  "decimal-places": DecimalPlacesGame,
  "estimation-game": EstimationGame,
  "limits-accuracy": LimitsOfAccuracyGame,
  "large-numbers": LargeNumbers,
  "small-numbers": SmallNumbers,
  "standard-form-addition-subtraction": StandardFormAdditionSubtraction,
  "standard-form-multiplication": StandardFormMultiplication,
  "standard-form-division": StandardFormDivision,
  "standard-form-operations-overview": StandardFormOperationOverview,
  "standard-form-converter": StandardFormConverter,

  "ratio-quiz": RatioQuiz,
  "rate-calculator": RateCalculator,
  "direct-proportion": DirectProportion,
  "inverse-proportion": InverseProportion,
  "base-10": Base10Quiz,
  "base-2": Base2Quiz,
  "other-bases": OtherBasesQuiz,
  "base-converter": BaseConverter,
  "base-arithmetic": BaseArithmeticQuiz,
  "base-equations": BaseEquationsQuiz,
  "scale-types": ScaleTypesQuiz,
  "scale-measurements": ScaleMeasurementsQuiz,
  "area-scale": ScaleFactorAreaQuiz,
  "scale-problems": ScaleApplicationsQuiz
};

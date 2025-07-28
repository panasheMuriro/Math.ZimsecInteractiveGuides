import ScaleCalculator from "../ScaleCalculator";
import Integers from "./Topic1.1/Integers";
import NaturalNumbers from "./Topic1.1/NaturalNumbers";
import NumberClassifier from "./Topic1.1/NumberClassifier";
import RationalNumbers from "./Topic1.1/RationalNumbers";
import WholeNumbers from "./Topic1.1/WholeNumbers";
import DecimalPlacesVisualizer from "./Topic1.2/DecimalPlacesVisualizer";
import EstimationGame from "./Topic1.2/EstimationGame";
import LimitsOfAccuracy from "./Topic1.2/LimitsOfAccuracy";
import RoundingGame from "./Topic1.2/RoundingGame";
import ProportionSolver from "./Topic1.3/ProportionSolver";
import RateCalculator from "./Topic1.3/RateCalculator";
import RatioSimplifier from "./Topic1.3/RatioSimplifier";
import LargeNumbers from "./Topic1.4/LargeNumbers";
import SmallNumbers from "./Topic1.4/SmallNumbers";
import StandardFormConverter from "./Topic1.4/StandardFormConverter";
import Base10Explorer from "./Topic1.5/Base10Explorer";
import BaseConverter from "./Topic1.5/BaseConverter";
import BinaryExplorer from "./Topic1.5/BinaryExplorer";


export const topic1Components: Record<string, React.ComponentType> = {
  "number-classifier": NumberClassifier,
  "rounding-game": RoundingGame,
  "standard-form-converter": StandardFormConverter,
  "scale-calculator": ScaleCalculator,
  "natural-numbers": NaturalNumbers,
  "whole-numbers": WholeNumbers,
  "integers": Integers,
  "rational-numbers": RationalNumbers,
  "decimal-places": DecimalPlacesVisualizer,
  "estimation-game": EstimationGame,
  "limits-accuracy": LimitsOfAccuracy,
  "large-numbers": LargeNumbers,
  "small-numbers": SmallNumbers,
  "ratio-simplifier": RatioSimplifier,
  "rate-calculator": RateCalculator,
  "proportion-solver": ProportionSolver,
  "base-10": Base10Explorer,
  "base-2": BinaryExplorer,
  "base-converter": BaseConverter,
};

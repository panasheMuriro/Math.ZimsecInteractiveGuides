import DataClassification from "./Topic9.1/DataClassification";
import DataCollection from "./Topic9.1/DataCollection";
import DataRepresentationViz from "./Topic9.1/DataRepresentation";
import Mean from "./Topic9.2/Mean";
import MeasureSelection from "./Topic9.2/MeasureSelection";
import Median from "./Topic9.2/Median";
import Mode from "./Topic9.2/Mode";
import OgiveQuartilesQuiz from "./Topic9.3/OgiveQuartilesQuiz";
import QuartileIQRQuiz from "./Topic9.3/QuartileIQRQuiz";
import RangeQuiz from "./Topic9.3/RangeQuiz";
import SemiIQRQuiz from "./Topic9.3/SemiIQRQuiz";

export const topic9Components: Record<string, React.ComponentType> = {
  "data-collection": DataCollection,
  "data-classification": DataClassification,
  "data-representation": DataRepresentationViz,
  "mean-calculations": Mean,
  "median-calculations": Median,
  "mode-identification": Mode,
  "measure-selection": MeasureSelection,
  "range-calculations": RangeQuiz,
  "quartiles-iqr": QuartileIQRQuiz,
  "semi-iqr": SemiIQRQuiz,
  "ogive-quartiles": OgiveQuartilesQuiz,
};
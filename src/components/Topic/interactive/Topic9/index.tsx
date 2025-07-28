import DataClassificationQuiz from "./Topic9.1/DataClassification";
import DataCollectionQuiz from "./Topic9.1/DataCollection";
import DataRepresentationViz from "./Topic9.1/DataRepresentation";
import MeanQuiz from "./Topic9.2/MeanQuiz";
import MeasureSelectionQuiz from "./Topic9.2/MeasureSelectionQuiz";
import MedianQuiz from "./Topic9.2/Median";
import ModeQuiz from "./Topic9.2/Mode";
import OgiveQuartilesQuiz from "./Topic9.3/OgiveQuartilesQuiz";
import QuartileIQRQuiz from "./Topic9.3/QuartileIQRQuiz";
import RangeQuiz from "./Topic9.3/RangeQuiz";
import SemiIQRQuiz from "./Topic9.3/SemiIQRQuiz";

export const topic9Components: Record<string, React.ComponentType> = {
  "data-collection": DataCollectionQuiz,
  "data-classification": DataClassificationQuiz,
  "data-representation": DataRepresentationViz,
  "mean-calculations": MeanQuiz,
  "median-calculations": MedianQuiz,
  "mode-identification": ModeQuiz,
  "measure-selection": MeasureSelectionQuiz,
  "range-calculations": RangeQuiz,
  "quartiles-iqr": QuartileIQRQuiz,
  "semi-iqr": SemiIQRQuiz,
  "ogive-quartiles": OgiveQuartilesQuiz,
};
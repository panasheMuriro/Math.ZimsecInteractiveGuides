import DataClassification from "./Topic9.1/DataClassification";
import DataCollection from "./Topic9.1/DataCollection";
import DataRepresentationViz from "./Topic9.1/DataRepresentation";
import Mean from "./Topic9.2/Mean";
import MeasureSelection from "./Topic9.2/MeasureSelection";
import Median from "./Topic9.2/Median";
import Mode from "./Topic9.2/Mode";
import OgiveQuartiles from "./Topic9.3/OgiveQuartiles";
import QuartilesIQR from "./Topic9.3/QuartileIQR";
import Range from "./Topic9.3/Range";
import SemiIQR from "./Topic9.3/SemiIQR";

export const topic9Components: Record<string, React.ComponentType> = {
  "data-collection": DataCollection,
  "data-classification": DataClassification,
  "data-representation": DataRepresentationViz,
  "mean-calculations": Mean,
  "median-calculations": Median,
  "mode-identification": Mode,
  "measure-selection": MeasureSelection,
  "range-calculations": Range,
  "quartiles-iqr": QuartilesIQR,
  "semi-iqr": SemiIQR,
  "ogive-quartiles": OgiveQuartiles,
};
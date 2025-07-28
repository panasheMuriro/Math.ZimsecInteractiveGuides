import AreaUnits from "./Topic4.1/AreaUnits";
import CapacityUnits from "./Topic4.1/CapacityUnits";
import DensityUnits from "./Topic4.1/DensityUnits";
import LengthUnits from "./Topic4.1/LengthUnits";
import MassUnits from "./Topic4.1/MassUnits";
import TemperatureUnits from "./Topic4.1/TemperatureUnits";
import TimeUnits from "./Topic4.1/TimeUnits";
import VolumeUnits from "./Topic4.1/VolumeUnits";
import AreaChallenge from "./Topic4.2/Area";
import CombinedShapesCalculator from "./Topic4.2/CombinedShapesCalculator";
import PerimeterChallenge from "./Topic4.2/Perimeter";
import SurfaceAreas from "./Topic4.2/SurfaceAreas";
import VolumeCuboids from "./Topic4.2/VolumeCuboids";
import { VolumeCylinders } from "./Topic4.2/VolumeCylinders";
import { VolumeDensity } from "./Topic4.2/VolumeDensity";

export const topic4Components: Record<string, React.ComponentType> = {
  "time-units": TimeUnits,
  "mass-units": MassUnits,
  "length-units": LengthUnits,
  "temperature-units": TemperatureUnits,
  "capacity-units": CapacityUnits,
  "area-units": AreaUnits,
  "volume-units": VolumeUnits,
  "density": DensityUnits,
  "perimeter": PerimeterChallenge,
  "area": AreaChallenge,
  "combined-shapes": CombinedShapesCalculator,
  "volume-cuboids": VolumeCuboids,
  "volume-cylinders": VolumeCylinders,
  "surface-area": SurfaceAreas,
  "volume-density": VolumeDensity,
};
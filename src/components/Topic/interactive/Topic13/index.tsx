import TranslationProblems from "./Topic13.1/TranslationProblems";
import TranslationVisualizer from "./Topic13.1/TranslationVisualizer";
import VectorTranslationVisualizer from "./Topic13.1/VectorTranslationVisualizer";
import ReflectionRotationProblems from "./Topic13.2/ReflectionRotationProblems";
import ReflectionVisualizer from "./Topic13.2/ReflectionVisualizer";
import RotationVisualizer from "./Topic13.2/RotationVisualizer";
import EnlargementProblems from "./Topic13.3/EnlargementProblems";
import EnlargementVisualizer from "./Topic13.3/EnlargementVisualizer";
import ShearVisualizer from "./Topic13.4/ShearVisualizer";
import StretchShearProblems from "./Topic13.4/StretchShearProblems";
import StretchVisualizer from "./Topic13.4/StretchVisualizer";

export const topic13Components: Record<string, React.ComponentType> = {
  "basic-translation": TranslationVisualizer,
  "vector-translation": VectorTranslationVisualizer,
  "translation-problems": TranslationProblems,
  "reflection": ReflectionVisualizer,
  "rotation": RotationVisualizer,
  "reflection-rotation-problems": ReflectionRotationProblems,
  "enlargement": EnlargementVisualizer,
  "enlargement-problems": EnlargementProblems,
  "stretch": StretchVisualizer,
  "shear": ShearVisualizer,
  "stretch-shear-problems": StretchShearProblems
};
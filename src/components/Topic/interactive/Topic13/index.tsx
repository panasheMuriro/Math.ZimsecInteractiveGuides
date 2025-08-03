import TranslationProblems from "./Topic13.1/TranslationProblems";
import TranslationVisualizer from "./Topic13.1/TranslationVisualizer";
import VectorTranslationVisualizer from "./Topic13.1/VectorTranslationVisualizer";
import ReflectionRotationProblems from "./Topic13.2/ReflectionRotationProblems";
import ReflectionVisualizer from "./Topic13.2/ReflectionVisualizer";
import RotationVisualizer from "./Topic13.2/RotationVisualizer";
import EnlargementVisualizer from "./Topic13.3/EnlargementVisualizer";
import ShearVisualizer from "./Topic13.4/ShearVisualizer";
import StretchVisualizer from "./Topic13.4/StretchVisualizer";

export const topic13Components: Record<string, React.ComponentType> = {
  "basic-translation": TranslationVisualizer,
  "vector-translation": VectorTranslationVisualizer,
  "translation-problems": TranslationProblems,
  "reflection": ReflectionVisualizer,
  "rotation": RotationVisualizer,
  "reflection-rotation-problems": ReflectionRotationProblems,
  "enlargement": EnlargementVisualizer,
  "stretch": StretchVisualizer,
  "shear": ShearVisualizer,
};
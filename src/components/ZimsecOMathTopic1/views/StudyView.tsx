import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { MathJax } from "better-react-mathjax";
import { Section } from "../types";
import NumberClassifier from "../interactive/Topic1.1/NumberClassifier";
import RoundingGame from "../interactive/RoundingGame";
import ProportionSolver from "../interactive/ProportionSolver";
import StandardFormConverter from "../interactive/StandardFormConverter";
import BaseConverter from "../interactive/BaseConverter";
import ScaleCalculator from "../interactive/ScaleCalculator";
import NaturalNumbers from "../interactive/Topic1.1/NaturalNumbers";
import WholeNumbers from "../interactive/Topic1.1/WholeNumbers";
import Integers from "../interactive/Topic1.1/Integers";
import RationalNumbers from "../interactive/Topic1.1/RationalNumbers";
import DecimalPlacesVisualizer from "../interactive/Topic1.2/DecimalPlacesVisualizer";
import EstimationGame from "../interactive/Topic1.2/EstimationGame";
import LimitsOfAccuracy from "../interactive/Topic1.2/LimitsOfAccuracy";

interface StudyViewProps {
  section: Section;
  setCurrentView: (view: "home" | "study" | "quiz" | "quiz-complete") => void;
  setCompletedSections: (sections: Set<number>) => void;
  currentSection: number;
  completedSections: Set<number>;
}

const StudyView = ({
  section,
  setCurrentView,
  setCompletedSections,
  currentSection,
  completedSections,
}: StudyViewProps) => {
  const [currentSubsection, setCurrentSubsection] = useState<number>(0);

  const renderInteractive = (type: string) => {
    switch (type) {
      case "number-classifier":
        return <NumberClassifier />;
      case "rounding-game":
        return <RoundingGame />;
      case "proportion-solver":
        return <ProportionSolver />;
      case "standard-form-converter":
        return <StandardFormConverter />;
      case "base-converter":
        return <BaseConverter />;
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
    }
  };

  const handlePrev = () => {
    if (currentSubsection > 0) {
      setCurrentSubsection(currentSubsection - 1);
    }
  };

  const currentContent = section.subsections
    ? section.subsections[currentSubsection]
    : section;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentView("home")}
              className="text-white/60 hover:text-white transition-colors flex items-center"
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
            <div className="text-2xl">{section.icon}</div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            {section.title}
          </h2>

          {section.subsections && (
            <h3 className="text-xl font-semibold text-white/90 mb-4">
              {currentContent.title}
            </h3>
          )}

          <div className="prose prose-invert max-w-none">
            <MathJax>
              {currentContent.content.split("\n").map((paragraph, i) => (
                <p key={i} className="text-white/90 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </MathJax>
          </div>
        </div>

        <div className="mb-6">
          {renderInteractive(currentContent.interactive as string)}
        </div>

        {section.subsections && (
          <div className="flex justify-between mb-6">
            <button
              onClick={handlePrev}
              disabled={currentSubsection === 0}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentSubsection === 0
                  ? "text-white/30"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Previous
            </button>
            <div className="text-white/70">
              {currentSubsection + 1} of {section.subsections.length}
            </div>
            <button
              onClick={handleNext}
              disabled={currentSubsection === section.subsections.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentSubsection === section.subsections.length - 1
                  ? "text-white/30"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              Next <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}

        <button
          onClick={() => {
            const newCompleted = new Set(completedSections);
            newCompleted.add(currentSection);
            setCompletedSections(newCompleted);
            setCurrentView("home");
          }}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mark as Complete</span>
        </button>
      </div>
    </div>
  );
};

export default StudyView;

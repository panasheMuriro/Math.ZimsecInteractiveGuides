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
    if (section.subsections && currentSubsection < section.subsections.length - 1) {
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
    <div className="min-h-screen bg-[#fdfaf6] text-[#3b3a30] p-6 font-serif">
      <div className="max-w-md mx-auto">
        <div className="bg-[#fffef9] shadow-lg border border-[#e4ded4] rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentView("home")}
              className="text-[#5c5b57] hover:text-[#1a1a1a] transition-colors flex items-center"
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
            <div className="text-2xl">{section.icon}</div>
          </div>

          <h2 className="text-2xl font-bold text-[#2e2c28] mb-2">
            {section.title}
          </h2>

          {section.subsections && (
            <h3 className="text-lg font-semibold text-[#4e4b44] mb-4">
              {currentContent.title}
            </h3>
          )}

          <div className="prose prose-neutral max-w-none text-[15px] leading-relaxed">
            <MathJax>
              {currentContent.content.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </MathJax>
          </div>
        </div>

        <div className="mb-6">{renderInteractive(currentContent.interactive as string)}</div>

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

        <button
          onClick={() => {
            const newCompleted = new Set(completedSections);
            newCompleted.add(currentSection);
            setCompletedSections(newCompleted);
            setCurrentView("home");
          }}
          className="w-full bg-gradient-to-r from-[#90be6d] to-[#43aa8b] text-white font-bold py-4 px-6 rounded-2xl hover:from-[#7fae5c] hover:to-[#369b7d] transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mark as Complete</span>
        </button>
      </div>
    </div>
  );
};

export default StudyView;


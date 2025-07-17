import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Include KaTeX styles

import Header from "../../Global/Header";
import { useTopicContext } from "../hooks/useTopicContext";

// Interactive components
import NumberClassifier from "../interactive/Topic1/Topic1.1/NumberClassifier";
import RoundingGame from "../interactive/RoundingGame";
import StandardFormConverter from "../interactive/StandardFormConverter";
import BaseConverter from "../interactive/Topic1/Topic1.5/BaseConverter";
import ScaleCalculator from "../interactive/ScaleCalculator";
import NaturalNumbers from "../interactive/Topic1/Topic1.1/NaturalNumbers";
import WholeNumbers from "../interactive/Topic1/Topic1.1/WholeNumbers";
import Integers from "../interactive/Topic1/Topic1.1/Integers";
import RationalNumbers from "../interactive/Topic1/Topic1.1/RationalNumbers";
import DecimalPlacesVisualizer from "../interactive/Topic1/Topic1.2/DecimalPlacesVisualizer";
import EstimationGame from "../interactive/Topic1/Topic1.2/EstimationGame";
import LimitsOfAccuracy from "../interactive/Topic1/Topic1.2/LimitsOfAccuracy";
import LargeNumbers from "../interactive/Topic1/Topic1.4/LargeNumbers";
import SmallNumbers from "../interactive/Topic1/Topic1.4/SmallNumbers";
import RatioSimplifier from "../interactive/Topic1/Topic1.3/RatioSimplifier";
import RateCalculator from "../interactive/Topic1/Topic1.3/RateCalculator";
import ProportionSolver from "../interactive/Topic1/Topic1.3/ProportionSolver";
import Base10Explorer from "../interactive/Topic1/Topic1.5/Base10Explorer";
import BinaryExplorer from "../interactive/Topic1/Topic1.5/BinaryExplorer";
import SetBasics from "../interactive/Topic2/SetBasics";
import SetTypes from "../interactive/Topic2/SetTypes";
import VennTwoSets from "../interactive/Topic2/VennTwoSets";
import VennThreeSets from "../interactive/Topic2/VennThreeSets";
import SetBuilder from "../interactive/Topic2/SetBuilder";
import ConsumerArithmeticCalculator from "../interactive/Topic3/ConsumerArithmeticCalculator";
import HouseholdBills from "../interactive/Topic3/HouseholdBills";
import ProfitLossCalculator from "../interactive/Topic3/ProfitLossCalculator";
import SimpleInterestCalculator from "../interactive/Topic3/SimpleInterestCalculator";
// import CompoundInterestCalculator from "../interactive/Topic3/CompoundInterest";
import CompoundInterest from "../interactive/Topic3/CompoundInterest";
import HirePurchaseCalculator from "../interactive/Topic3/HirePurchaseCalculator";
import CommissionTaxCalculator from "../interactive/Topic3/CommissionTaxCalculator";

const StudyView = () => {
  const { topicData } = useTopicContext();
  const { sectionIndex } = useParams();
  const navigate = useNavigate();
  const [currentSubsection, setCurrentSubsection] = useState(0);

  const currentSectionIndex = parseInt(sectionIndex || "0");
  const section = topicData.sections[currentSectionIndex];

  const currentContent = section.subsections
    ? section.subsections[currentSubsection]
    : section;

  const renderInteractive = (type: string) => {
    switch (type) {
      case "number-classifier":
        return <NumberClassifier />;
      case "rounding-game":
        return <RoundingGame />;
      case "standard-form-converter":
        return <StandardFormConverter />;
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
      case "large-numbers":
        return <LargeNumbers />;
      case "small-numbers":
        return <SmallNumbers />;
      case "ratio-simplifier":
        return <RatioSimplifier />;
      case "rate-calculator":
        return <RateCalculator />;
      case "proportion-solver":
        return <ProportionSolver />;
      case "base-10":
        return <Base10Explorer />;
      case "base-2":
        return <BinaryExplorer />;
      case "base-converter":
        return <BaseConverter />;

      // Topic 2
      case "set-basics":
        return <SetBasics />;
      case "set-types":
        return <SetTypes />;
      case "venn-two-sets":
        return <VennTwoSets />;
      case "venn-three-sets":
        return <VennThreeSets />;
      case "set-builder":
        return <SetBuilder />;

      // Topic 3
      case "consumer-arithmetic":
        return <ConsumerArithmeticCalculator/>
      case "household-bills":
        return <HouseholdBills/>
      case "profit-loss":
        return <ProfitLossCalculator/>
      case "simple-interest":
        return <SimpleInterestCalculator/>
      case "compound-interest":
        return <CompoundInterest/>
      case "hire-purchase":
        return <HirePurchaseCalculator/>
      case "commission-tax":
        return <CommissionTaxCalculator/>
      
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

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#3b3a30] p-6 font-serif">
      <div className="max-w-md mx-auto">
        <Header
          title={section.title}
          icon={section.icon}
          showBackButton
          onBack={() => navigate(`/topics/${topicData.id}`)}
        />

        {section.subsections && (
          <h3 className="text-lg font-semibold text-[#4e4b44] mb-4">
            {currentContent.title}
          </h3>
        )}

        <div className="bg-[#fffef9] shadow-lg border border-[#e4ded4] rounded-2xl p-6 mb-6 prose max-w-none">

          <div className="prose max-w-none text-gray-900 leading-relaxed">


          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          
            // className="prose max-w-none text-gray-900 leading-relaxed"
          >
            {currentContent.content}
          </ReactMarkdown>
          </div>
        </div>

        <div className="mb-6">{renderInteractive(currentContent.interactive)}</div>

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

        <Link
          to={`/topics/${topicData.id}`}
          className="w-full mt-6 bg-[#ffd28f] text-[#4b3f2f] font-bold py-4 px-6 rounded-2xl hover:bg-[#f9c77c] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-md"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mark as Complete</span>
        </Link>
      </div>
    </div>
  );
};

export default StudyView;

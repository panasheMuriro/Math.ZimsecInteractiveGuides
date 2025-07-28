import { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import {  useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Include KaTeX styles
import remarkGfm from "remark-gfm";

import Header from "../../Global/Header";
import { useTopicContext } from "../hooks/useTopicContext";

// Interactive components
import GraphCodeRenderer from "../interactive/Topic5/GraphCodeRenderer";
import SVGCodeRenderer from "../interactive/Topic8/SVGCodeRenderer";
import { topic1Components } from "../interactive/Topic1";
import { topic10Components } from "../interactive/Topic10";
import { topic11Components } from "../interactive/Topic11";
import { topic12Components } from "../interactive/Topic12";
import { topic13Components } from "../interactive/Topic13";
import { topic14Components } from "../interactive/Topic14";
import { topic2Components } from "../interactive/Topic2";
import { topic3Components } from "../interactive/Topic3";
import { topic4Components } from "../interactive/Topic4";
import { topic5Components } from "../interactive/Topic5";
import { topic6Components } from "../interactive/Topic6";
import { topic7Components } from "../interactive/Topic7";
import { topic8Components } from "../interactive/Topic8";
import { topic9Components } from "../interactive/Topic9";


const StudyView = () => {
  const { topicData } = useTopicContext();
  const { sectionIndex , topicId} = useParams();
  const navigate = useNavigate();
  const [currentSubsection, setCurrentSubsection] = useState(0);

  const currentSectionIndex = parseInt(sectionIndex || "0");
  const section = topicData.sections[currentSectionIndex];

  const currentContent = section.subsections
    ? section.subsections[currentSubsection]
    : section;

const allInteractiveComponents: Record<string, React.ComponentType> = {
  ...topic1Components,
  ...topic2Components,
  ...topic3Components,
  ...topic4Components,
  ...topic5Components,
  ...topic6Components,
  ...topic7Components,
  ...topic8Components,
  ...topic9Components,
  ...topic10Components,
  ...topic11Components,
  ...topic12Components,
  ...topic13Components,
  ...topic14Components,
};



const renderInteractive = (type: string) => {
    if (!type) return null;
    const Component = allInteractiveComponents[type];
    if (!Component) {
      console.warn(`Interactive component not found for type: ${type}`);
      return null;
    }
    return <Component />;
  };


  const handleNext = () => {
    if (
      section.subsections &&
      currentSubsection < section.subsections.length - 1
    ) {
      setCurrentSubsection(currentSubsection + 1);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentSubsection > 0) {
      setCurrentSubsection(currentSubsection - 1);
    }
    // window.scrollTo({ top: 0, behavior: "smooth" });
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
          <div className="prose max-w-none text-gray-900 leading-[30px] list-disc">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
              components={{
                code:topicId == "8" ? SVGCodeRenderer: GraphCodeRenderer
              }}
            >
              {currentContent.content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="text-lg mb-4 font-bold">Practice</div>

        <div className="mb-6">
          {renderInteractive(currentContent.interactive as string)}

          
        </div>

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

        {/* <Link
          to={`/topics/${topicData.id}`}
          className="w-full mt-6 bg-[#4A9782] text-white font-bold py-4 px-6 rounded-2xl hover:bg-[#f9c77c] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-md mt-10"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mark as Complete</span>
        </Link> */}
      </div>
    </div>
  );
};

export default StudyView;

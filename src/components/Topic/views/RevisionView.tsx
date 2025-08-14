import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { renderTextWithMath } from "../../../utils/renderTextWithMath";
import Header from "../../Global/Header";
import { useParams } from "react-router-dom";
import {  set4 } from "../../../data/revision";

const RevisionView = () => {
  const { showSolutions: showSolutionsParam } = useParams<{ showSolutions?: string }>();

  // Convert param string to boolean
  const showSolutions = showSolutionsParam === "true";

  const headerTitle = "HOLIDAY REVISION";
  const title = "ALGEBRA";
  const icon = "𝓧";

  return (
    <div className="min-h-screen bg-[#2a9d8f] text-[#3b3a30] p-6 font-serif">
      <div className="max-w-3xl mx-auto">
        <Header title={headerTitle} icon={icon} />
        <h3 className="text-lg text-center font-semibold text-white mb-4 font-sans">
          {renderTextWithMath(title)}
        </h3>

        <div className="bg-[#fffef9] shadow-lg border-3 border-gray-500 rounded-2xl p-6 mb-6 prose max-w-none">
          <div className="prose max-w-none text-gray-900 leading-[50px] list-disc">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {showSolutions ? set4.solutions : set4.questions}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionView;

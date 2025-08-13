// /* eslint-disable @typescript-eslint/no-explicit-any */
// import ReactMarkdown from "react-markdown";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import "katex/dist/katex.min.css"; // Include KaTeX styles
// import remarkGfm from "remark-gfm";
// import { renderTextWithMath } from "../../../utils/renderTextWithMath";
// import Header from "../../Global/Header";
// import { useState } from "react";
// import { set2 } from "../../../data/revision";

// const RevisionView = () => {
//   const [showSolutions, setShowSolutions] = useState(false);

//   const headerTitle = "Holiday Revision";
//   const title = "Directed Numbers";
//   const icon = "➕";

//   return (
//     <div className="min-h-screen bg-[#e76f51] text-[#3b3a30] p-6 font-serif">
//       <div className="max-w-3xl mx-auto">
//         <Header title={headerTitle} icon={icon} />
//         <h3 className="text-lg text-center font-semibold text-white mb-4">
//           {renderTextWithMath(title)}
//         </h3>

//         <div className="bg-[#fffef9] shadow-lg border-3 border-gray-500 rounded-2xl p-6 mb-6 prose max-w-none">
//           <div className="prose max-w-none text-gray-900 leading-[50px] list-disc">
//             <ReactMarkdown
//               remarkPlugins={[remarkMath, remarkGfm]}
//               rehypePlugins={[rehypeKatex]}
//             >
//               {/* {content} */}
//               {/* {set1.solutions} */}
//                 {showSolutions ? set2.solutions : set2.questions}
//             </ReactMarkdown>
//           </div>
//         </div>

//         <button
//   onClick={() => {
//     setShowSolutions((prev) => !prev);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }}
//   className="w-full py-3 text-lg font-bold rounded-xl 
//              bg-[#f4a261] text-black border-4 border-black 
//              shadow-[6px_6px_0_#000] 
//              hover:shadow-[3px_3px_0_#000] 
//              hover:translate-x-[3px] hover:translate-y-[3px] 
//              transition-all duration-200"
// >
//   {showSolutions ? "See Questions" : "See Solutions"}
// </button>

//       </div>
//     </div>
//   );
// };

// export default RevisionView;



import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { renderTextWithMath } from "../../../utils/renderTextWithMath";
import Header from "../../Global/Header";
import { useParams } from "react-router-dom";
import { set2, set3 } from "../../../data/revision";

const RevisionView = () => {
  const { showSolutions: showSolutionsParam } = useParams<{ showSolutions?: string }>();

  // Convert param string to boolean
  const showSolutions = showSolutionsParam === "true";

  const headerTitle = "Holiday Revision";
  const title = "Directed Numbers";
  const icon = "➕";

  return (
    <div className="min-h-screen bg-[#e76f51] text-[#3b3a30] p-6 font-serif">
      <div className="max-w-3xl mx-auto">
        <Header title={headerTitle} icon={icon} />
        <h3 className="text-lg text-center font-semibold text-white mb-4">
          {renderTextWithMath(title)}
        </h3>

        <div className="bg-[#fffef9] shadow-lg border-3 border-gray-500 rounded-2xl p-6 mb-6 prose max-w-none">
          <div className="prose max-w-none text-gray-900 leading-[50px] list-disc">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {showSolutions ? set3.solutions : set3.questions}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionView;

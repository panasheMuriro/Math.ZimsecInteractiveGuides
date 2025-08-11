import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Include KaTeX styles
import remarkGfm from "remark-gfm";
import { renderTextWithMath } from "../../../utils/renderTextWithMath";
import Header from "../../Global/Header";

const RevisionView = () => {
  const headerTitle = "Holiday Revision";
  const title = "Directed Numbers";
  const icon = "➕";
  const content = `
-1. Solve: $-5 + (-6)$  
2. Solve: $-7 - (-3)$  
3. Solve: $8 + (-12)$  
4. Solve: $-4 - 9$  
5. Solve: $-15 + 20$  
6. Solve: $12 - (-7)$  
7. Solve: $-9 + 14$  
8. Solve: $-8 - (-8)$  
9. Solve: $6 + (-11)$  
10. Solve: $-13 - 5$
`;

  return (
    <div className="min-h-screen bg-[#e76f51] text-[#3b3a30] p-6 font-serif">
      <div className="max-w-md mx-auto">
        <Header title={headerTitle} icon={icon} />
        <h3 className="text-lg text-center font-semibold text-white mb-4">
          {renderTextWithMath(title)}
        </h3>

        <div className="bg-[#fffef9] shadow-lg border-3 border-gray-500 rounded-2xl p-6 mb-6 prose max-w-none">
          <div className="prose max-w-none text-gray-900 leading-[30px] list-disc">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionView;

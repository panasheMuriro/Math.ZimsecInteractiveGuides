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
**Directed Numbers Practice Questions**

1.) $(-8) + (+15) = ?$

2.) $(+12) - (-7) = ?$

3.) $(-9) \\times (+6) = ?$

4.) $(+24) \\div (-3) = ?$

5.) $(-11) + (-13) = ?$

6.) $(+18) - (+25) = ?$

7.) $(-7) \\times (-8) = ?$

8.) $(-36) \\div (+9) = ?$

9.) $(+14) + (-22) = ?$

10.) $(-16) - (-9) = ?$

---

**BODMAS Practice Questions**

1.) $5 + 3 \\times 2 - 1 = ?$

2.) $(8 - 3) \\times 2 + 4 = ?$

3.) $20 \\div 4 + 3 \\times 2 = ?$

4.) $6 + 2 \\times (9 - 5) = ?$

5.) $15 - 3 \\times 2 + 8 \\div 4 = ?$

6.) $(12 + 8) \\div 5 - 2 = ?$

7.) $4 \\times 3 + 6 \\div 2 - 1 = ?$

8.) $25 - (4 + 6) \\times 2 = ?$

9.) $18 \\div 3 + 2 \\times (7 - 4) = ?$

10.) $8 + 12 \\div 4 - 2 \\times 3 = ?$
`
;

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

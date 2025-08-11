/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Include KaTeX styles
import remarkGfm from "remark-gfm";
import { renderTextWithMath } from "../../../utils/renderTextWithMath";
import Header from "../../Global/Header";
import { useState } from "react";

const RevisionView = () => {
  const [showSolutions, setShowSolutions] = useState(false);

  const headerTitle = "Holiday Revision";
  const title = "Directed Numbers";
  const icon = "➕";
const set1 = {
  questions: `
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

11.) $3^3 - 4 \\times 2^2 + 1 = ?$

12.) $6^2 \\div (3 + 6) - 2 = ?$
`,
  solutions:`
**Directed Numbers Practice Questions with Solutions**

---

**1.)** $(-8) + (+15) = ?$

**Solution:**

1. $(-8) + (+15)$  
2. Different signs → subtract: $15 - 8 = 7$  
3. Sign of larger absolute value: $+7$  

**Answer:** $\\mathbf{+7}$

---

**2.)** $(+12) - (-7) = ?$

**Solution:**

1. $(+12) - (-7)$  
2. Subtracting a negative → becomes addition: $12 + 7$  
3. $12 + 7 = 19$  

**Answer:** $\\mathbf{+19}$

---

**3.)** $(-9) \\times (+6) = ?$

**Solution:**

1. $(-9) \\times (+6)$  
2. Negative × Positive = Negative  
3. $9 \\times 6 = 54$ → $-54$  

**Answer:** $\\mathbf{-54}$

---

**4.)** $(+24) \\div (-3) = ?$

**Solution:**

1. $(+24) \\div (-3)$  
2. Positive ÷ Negative = Negative  
3. $24 \\div 3 = 8$ → $-8$  

**Answer:** $\\mathbf{-8}$

---

**5.)** $(-11) + (-13) = ?$

**Solution:**

1. $(-11) + (-13)$  
2. Same signs → add absolute values: $11 + 13 = 24$  
3. Keep the negative sign → $-24$  

**Answer:** $\\mathbf{-24}$

---

**6.)** $(+18) - (+25) = ?$

**Solution:**

1. $(+18) - (+25)$  
2. Different signs → subtract: $25 - 18 = 7$  
3. Larger absolute value is 25 (negative effect) → $-7$  

**Answer:** $\\mathbf{-7}$

---

**7.)** $(-7) \\times (-8) = ?$

**Solution:**

1. $(-7) \\times (-8)$  
2. Negative × Negative = Positive  
3. $7 \\times 8 = 56$  

**Answer:** $\\mathbf{+56}$

---

**8.)** $(-36) \\div (+9) = ?$

**Solution:**

1. $(-36) \\div (+9)$  
2. Negative ÷ Positive = Negative  
3. $36 \\div 9 = 4$ → $-4$  

**Answer:** $\\mathbf{-4}$

---

**9.)** $(+14) + (-22) = ?$

**Solution:**

1. $(+14) + (-22)$  
2. Different signs → subtract: $22 - 14 = 8$  
3. Larger absolute value is 22 (negative) → $-8$  

**Answer:** $\\mathbf{-8}$

---

**10.)** $(-16) - (-9) = ?$

**Solution:**

1. $(-16) - (-9)$  
2. Subtracting a negative → becomes addition: $-16 + 9$  
3. Different signs → subtract: $16 - 9 = 7$, larger absolute value is negative → $-7$  

**Answer:** $\\mathbf{-7}$

---

**BODMAS Practice Questions with Solutions**

---

**1.)** $5 + 3 \\times 2 - 1 = ?$

**Solution:**

1. Multiply first: $3 \\times 2 = 6$  
2. $5 + 6 - 1$  
3. Add: $11 - 1 = 10$  

**Answer:** $\\mathbf{10}$

---

**2.)** $(8 - 3) \\times 2 + 4 = ?$

**Solution:**

1. Brackets first: $8 - 3 = 5$  
2. $5 \\times 2 + 4$  
3. Multiply: $10 + 4 = 14$  

**Answer:** $\\mathbf{14}$

---

**3.)** $20 \\div 4 + 3 \\times 2 = ?$

**Solution:**

1. Division first: $20 \\div 4 = 5$  
2. Multiplication: $3 \\times 2 = 6$  
3. $5 + 6 = 11$  

**Answer:** $\\mathbf{11}$

---

**4.)** $6 + 2 \\times (9 - 5) = ?$

**Solution:**

1. Brackets: $9 - 5 = 4$  
2. Multiply: $2 \\times 4 = 8$  
3. Add: $6 + 8 = 14$  

**Answer:** $\\mathbf{14}$

---

**5.)** $15 - 3 \\times 2 + 8 \\div 4 = ?$

**Solution:**

1. Multiplication: $3 \\times 2 = 6$  
2. Division: $8 \\div 4 = 2$  
3. $15 - 6 + 2 = 9 + 2 = 11$  

**Answer:** $\\mathbf{11}$

---

**6.)** $(12 + 8) \\div 5 - 2 = ?$

**Solution:**

1. Brackets: $12 + 8 = 20$  
2. Division: $20 \\div 5 = 4$  
3. Subtract: $4 - 2 = 2$  

**Answer:** $\\mathbf{2}$

---

**7.)** $4 \\times 3 + 6 \\div 2 - 1 = ?$

**Solution:**

1. Multiplication: $4 \\times 3 = 12$  
2. Division: $6 \\div 2 = 3$  
3. $12 + 3 - 1 = 14$  

**Answer:** $\\mathbf{14}$

---

**8.)** $25 - (4 + 6) \\times 2 = ?$

**Solution:**

1. Brackets: $4 + 6 = 10$  
2. Multiply: $10 \\times 2 = 20$  
3. Subtract: $25 - 20 = 5$  

**Answer:** $\\mathbf{5}$

---

**9.)** $18 \\div 3 + 2 \\times (7 - 4) = ?$

**Solution:**

1. Brackets: $7 - 4 = 3$  
2. Division: $18 \\div 3 = 6$  
3. Multiplication: $2 \\times 3 = 6$  
4. $6 + 6 = 12$  

**Answer:** $\\mathbf{12}$

---

**10.)** $8 + 12 \\div 4 - 2 \\times 3 = ?$

**Solution:**

1. Division: $12 \\div 4 = 3$  
2. Multiplication: $2 \\times 3 = 6$  
3. $8 + 3 - 6 = 5$  

**Answer:** $\\mathbf{5}$

---

**11.)** $3^3 - 4 \\times 2^2 + 1 = ?$

**Solution:**

1. Powers: $3^3 = 27$, $2^2 = 4$  
2. Multiply: $4 \\times 4 = 16$  
3. $27 - 16 + 1 = 12$  

**Answer:** $\\mathbf{12}$

---

**12.)** $6^2 \\div (3 + 6) - 2 = ?$

**Solution:**

1. Powers: $6^2 = 36$  
2. Brackets: $3 + 6 = 9$  
3. Division: $36 \\div 9 = 4$  
4. Subtract: $4 - 2 = 2$  

**Answer:** $\\mathbf{2}$
`

}
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
              {/* {content} */}
              {/* {set1.solutions} */}
                {showSolutions ? set1.solutions : set1.questions}
            </ReactMarkdown>
          </div>
        </div>

          {/* <button
          onClick={() => {setShowSolutions((prev: any) => !prev); window.scrollTo({ top: 0, behavior: "smooth" });}}
          className="w-full py-3 text-lg font-semibold rounded-xl bg-[#2a9d8f] text-white hover:bg-[#21867a] transition"
        >
          {showSolutions ? "See Questions" : "See Solutions"}
        </button> */}

        <button
  onClick={() => {
    setShowSolutions((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="w-full py-3 text-lg font-bold rounded-xl 
             bg-[#f4a261] text-black border-4 border-black 
             shadow-[6px_6px_0_#000] 
             hover:shadow-[3px_3px_0_#000] 
             hover:translate-x-[3px] hover:translate-y-[3px] 
             transition-all duration-200"
>
  {showSolutions ? "See Questions" : "See Solutions"}
</button>

      </div>
    </div>
  );
};

export default RevisionView;

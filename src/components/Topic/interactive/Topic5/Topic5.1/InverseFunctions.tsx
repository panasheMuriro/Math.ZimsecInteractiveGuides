/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const InverseFunctions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Find the inverse of $f(x) = 3x - 5$",
      answer: "$f^{-1}(x) = \\frac{x + 5}{3}$",
      hint: `
1. Replace $f(x)$ with $y$  
2. Swap $x$ and $y$  
3. Solve for $y$  
4. Replace $y$ with $f^{-1}(x)$
      `,
      steps: [
        "$y = 3x - 5$",
        "$x = 3y - 5$",
        "$x + 5 = 3y$",
        "$y = \\frac{x + 5}{3}$",
        "$f^{-1}(x) = \\frac{x + 5}{3}$"
      ],
    },
    {
      question: "Find the inverse of $g(x) = x^3 + 2$",
      answer: "$g^{-1}(x) = \\sqrt[3]{x - 2}$",
      hint: "Remember to use cube root ($\\sqrt[3]{x}$) for cubic functions",
      steps: [
        "$y = x^3 + 2$",
        "$x = y^3 + 2$",
        "$x - 2 = y^3$",
        "$y = \\sqrt[3]{x - 2}$",
        "$g^{-1}(x) = \\sqrt[3]{x - 2}$"
      ],
    },
    {
      question: "Find the inverse of $h(x) = \\frac{1}{2}x + 4$",
      answer: "$h^{-1}(x) = 2x - 8$",
      hint: "Multiply both sides by 2 to eliminate fraction",
      steps: [
        "$y = \\frac{1}{2}x + 4$",
        "$x = \\frac{1}{2}y + 4$",
        "$x - 4 = \\frac{1}{2}y$",
        "$2(x - 4) = y$",
        "$y = 2x - 8$",
        "$h^{-1}(x) = 2x - 8$"
      ],
    },
  ];

  const checkAnswer = () => {
    const normalizedAnswer = userAnswer.trim().replace(/\s+/g, "");
    const normalizedCorrect = questions[currentQuestion].answer.replace(/\s+/g, "");

    if (normalizedAnswer === normalizedCorrect) {
      setFeedback("**Correct!** Well done.");
      setScore(score + 1);
    } else {
      setFeedback(`
**Incorrect.** Try again. The correct steps are:

${questions[currentQuestion].steps.map(step => `- ${step}`).join('\n')}
      `);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setUserAnswer("");
    setFeedback("");
    setShowHint(false);
  };

  const showHintHandler = () => {
    setShowHint(true);
    setFeedback(`**Hint:** ${questions[currentQuestion].hint}`);
  };

  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-1" {...props} />,
        li: ({ node, ...props }) => <li className="pl-2" {...props} />
      }}
    >
      {content}
    </ReactMarkdown>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Inverse Functions Quiz</h2>

      <div className="mb-4 p-4 bg-blue-50 rounded">
        {renderMarkdown(questions[currentQuestion].question)}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Your answer (use $f^{-1}(x) = ...$ format):
        </label>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., f⁻¹(x) = (x + a)/b"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={checkAnswer}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Check Answer
        </button>
        <button
          onClick={showHintHandler}
          disabled={showHint}
          className={`flex-1 py-2 px-4 rounded ${
            showHint ? "bg-gray-300" : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          {showHint ? "Hint Shown" : "Get Hint"}
        </button>
      </div>

      {feedback && (
        <div className={`p-3 mb-4 rounded ${
          feedback.includes("Correct") ? "bg-green-100" : "bg-yellow-100"
        }`}>
          {renderMarkdown(feedback)}
        </div>
      )}

      <button
        onClick={nextQuestion}
        className="w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
      >
        Next Question
      </button>

      <div className="mt-4 pt-4 border-t">
        <p className="font-medium">Score: {score}/{questions.length}</p>
        <div className="mt-2 text-sm text-gray-600">
          {renderMarkdown(`
**Remember:**

- Swap $x$ and $y$ variables
- Solve for $y$
- For $x^n$ use $\\sqrt[n]{x}$
- Check by verifying $f(f^{-1}(x)) = x$
          `)}
        </div>
      </div>
    </div>
  );
};

export default InverseFunctions;
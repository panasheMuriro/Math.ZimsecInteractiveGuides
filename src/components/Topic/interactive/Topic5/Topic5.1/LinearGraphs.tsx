/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import JXG from "jsxgraph";

const LinearGraphInteractive = () => {
  const boardRef = useRef(null);
  const [m, setM] = useState(2);
  const [c, setC] = useState(-1);
  const [question, setQuestion] = useState("");
  const [feedback, setFeedback] = useState("");
  const [mode, setMode] = useState<"identify" | "calculate">("identify");
  const [userAnswer, setUserAnswer] = useState("");
  const [xValue, setXValue] = useState(0);
  const [currentEquation, setCurrentEquation] = useState("");

  // Generate random linear equation questions
  const generateQuestion = () => {
    setUserAnswer("");
    const randomM = (Math.random() * 4 - 2).toFixed(1);
    const randomC = (Math.random() * 6 - 3).toFixed(1);
    const equation = `y = ${randomM}x + ${randomC}`;
    setCurrentEquation(equation);

    if (mode === "identify") {
      setQuestion(`What is the gradient type of: ${equation}?`);
    } else {
      const randomX = Math.floor(Math.random() * 10) - 5; // Random x between -5 and 4
      setXValue(randomX);
      setQuestion(`For ${equation}, calculate y when x = ${randomX}`);
    }
    setFeedback("");
    setM(parseFloat(randomM));
    setC(parseFloat(randomC));
  };

  // Draw the current graph
  useEffect(() => {
    if (!boardRef.current) return;
    const board = JXG.JSXGraph.initBoard(boardRef.current, {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: {
        enabled: false,
      },
      zoom: false,
    });

    // Draw the main line
    board.create("functiongraph", [(x: number) => m * x + c, -5, 5], {
      strokeColor: getColorForGradient(m),
      strokeWidth: 2,
    });

    // Mark y-intercept
    board.create("point", [0, c], {
      name: `(0, ${c})`,
      size: 3,
      fixed: true,
      fillColor: "black",
      strokeColor: "black",
    });

    return () => JXG.JSXGraph.freeBoard(board);
  }, [m, c, mode]);

  const getColorForGradient = (slope: number) => {
    if (isNaN(slope)) return "#d62728"; // undefined (red)
    if (slope > 0) return "#1f77b4"; // positive (blue)
    if (slope < 0) return "#ff7f0e"; // negative (orange)
    return "#2ca02c"; // zero (green)
  };

  const checkAnswer = () => {
    if (mode === "identify") {
      let correctAnswer = "";
      if (isNaN(m)) correctAnswer = "undefined";
      else if (m > 0) correctAnswer = "positive";
      else if (m < 0) correctAnswer = "negative";
      else correctAnswer = "zero";

      if (userAnswer.toLowerCase() === correctAnswer) {
        setFeedback("Correct! Well done.");
      } else {
        setFeedback(`Incorrect. The correct answer is ${correctAnswer}.`);
      }
    } else {
      const correctY = m * xValue + c;
      const userY = parseFloat(userAnswer);

      if (!isNaN(userY)) {
        if (Math.abs(userY - correctY) < 0.1) {
          setFeedback("Correct! Well done.");
        } else {
          setFeedback(
            `Incorrect. The correct y-value is ${correctY.toFixed(1)}.`
          );
        }
      } else {
        setFeedback("Please enter a valid number.");
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-4">Linear Graph Interactive</h3>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setMode("identify");
            setFeedback("");
          }}
          className={`px-4 py-2 rounded ${
            mode === "identify" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Identify Gradient
        </button>
        <button
          onClick={() => {
            setMode("calculate");
            setFeedback("");
          }}
          className={`px-4 py-2 rounded ${
            mode === "calculate" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Calculate Values
        </button>
      </div>

      <div className="mb-4">
        <div ref={boardRef} className="w-full h-64 border"></div>
      </div>

      <div className="mb-4">
        <button
          onClick={generateQuestion}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          New Question
        </button>
      </div>

      {question && (
        <div className="mb-4 p-3 bg-blue-50 rounded">
          <p className="font-semibold">{question}</p>

          <div className="mt-2">
            {mode === "identify" ? (
              <select
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">Select gradient type</option>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
                <option value="zero">Zero</option>
                <option value="undefined">Undefined</option>
              </select>
            ) : (
              <div>
                <p className="mb-2">Equation: {currentEquation}</p>
                <p className="mb-2">x = {xValue}</p>
                <input
                  type="number"
                  step="0.1"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter y value"
                  className="border p-2 rounded w-full"
                />
              </div>
            )}
          </div>

          <button
            onClick={checkAnswer}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded w-full"
          >
            Check Answer
          </button>
        </div>
      )}

      {feedback && (
        <div
          className={`p-3 rounded ${
            feedback.includes("Correct")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {feedback}
        </div>
      )}

      <div className="mt-4 p-3 bg-gray-50 rounded">
        <h4 className="font-bold mb-2">Key Information:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="text-blue-600">Positive gradient</span> (m &gt; 0):
            Line slopes upward
          </li>
          <li>
            <span className="text-orange-600">Negative gradient</span> (m &lt;
            0): Line slopes downward
          </li>
          <li>
            <span className="text-green-600">Zero gradient</span> (m = 0):
            Horizontal line
          </li>
          <li>
            <span className="text-red-600">Undefined gradient</span>: Vertical
            line
          </li>
          <li>
            <strong>y-intercept (c)</strong>: Where the line crosses the y-axis
            (x=0)
          </li>
          <li>
            <strong>To find y</strong>: Substitute x into the equation y = mx +
            c
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinearGraphInteractive;

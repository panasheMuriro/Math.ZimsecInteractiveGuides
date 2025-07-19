/* eslint-disable @typescript-eslint/no-explicit-any */
// components/QuizGraphViewer.tsx
import { useEffect, useRef, useState } from "react";
import JXG from "jsxgraph";
import "../../../../../assets/jsxgraph.css";

const motionTypes = [
  "stationary",
  "uniform motion",
  "acceleration",
  "deceleration",
] as const;

type MotionType = typeof motionTypes[number];

interface GraphExample {
  points: [number, number][];
  correctAnswer: MotionType;
}

export default function DistanceTime() {
  const boxRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<MotionType | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentGraph, setCurrentGraph] = useState<GraphExample | null>(null);
  const [previousGraphIndex, setPreviousGraphIndex] = useState<number | null>(
    null
  );

  const getRandomGraph = () => {
    let availableIndices = graphExamples.map((_, index) => index);

    // Remove the previous graph index from available options
    if (previousGraphIndex !== null) {
      availableIndices = availableIndices.filter(
        (index) => index !== previousGraphIndex
      );
    }

    const randomIndex =
      availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setPreviousGraphIndex(randomIndex);
    return { graph: graphExamples[randomIndex], index: randomIndex };
  };
  const graphExamples: GraphExample[] = [
    // Stationary (horizontal line)
    {
      points: [
        [0, 3],
        [4, 3],
      ],
      correctAnswer: "stationary",
    },
    // Uniform motion (straight line)
    {
      points: [
        [0, 0],
        [4, 8],
      ],
      correctAnswer: "uniform motion",
    },
    // Acceleration (steepening curve)
    {
      points: [
        [0, 0],
        [1, 1],
        [2, 3],
        [3, 6],
        [4, 10],
      ],
      correctAnswer: "acceleration",
    },
    // Deceleration (flattening curve)
    {
      points: [
        [0, 0],
        [1, 3],
        [2, 5],
        [3, 6.5],
        [4, 7],
      ],
      correctAnswer: "deceleration",
    },
  ];

  const createBoard = (graphData: GraphExample) => {
    // Clean up existing board
    if (boardRef.current) {
      try {
        JXG.JSXGraph.freeBoard(boardRef.current);
      } catch (e) {
        console.warn("Error freeing board:", e);
      }
      boardRef.current = null;
    }

    if (!boxRef.current || !JXG?.JSXGraph) return;

    try {
      const board = JXG.JSXGraph.initBoard(boxRef.current, {
        boundingbox: [-1, 11, 5, -2],
        axis: true,
        showNavigation: false,
        showCopyright: false,
        pan: { enabled: false },
        zoom: false,
        grid: false, // Remove grid
      });

      boardRef.current = board;

      // Create custom axis labels as text elements instead of axis labels
      board.create("text", [2, -1, "Time (s)"], {
        fontSize: 14,
        fixed: true,
      });

      board.create("text", [-0.8, 10, "Distance (m)"], {
        fontSize: 14,
        fixed: true,
      });

      // Plot the graph
      const x = graphData.points.map((p) => p[0]);
      const y = graphData.points.map((p) => p[1]);

      board.create("curve", [x, y], {
        strokeColor: "#3498db",
        strokeWidth: 3,
      });
    } catch (error) {
      console.error("Error creating JSXGraph board:", error);
    }
  };

  useEffect(() => {
    // Add a small delay to ensure JSXGraph is fully loaded
    const initializeGraph = () => {
      const { graph: randomGraph } = getRandomGraph();
      setCurrentGraph(randomGraph);

      // Use setTimeout to ensure JSXGraph is ready
      setTimeout(() => {
        createBoard(randomGraph);
      }, 100);
    };

    initializeGraph();

    return () => {
      if (boardRef.current) {
        try {
          JXG.JSXGraph.freeBoard(boardRef.current);
        } catch (e) {
          console.warn("Error cleaning up board:", e);
        }
      }
    };
  }, []);

  // Update board when currentGraph changes
  useEffect(() => {
    if (currentGraph && boxRef.current) {
      // Add small delay to ensure DOM is ready
      setTimeout(() => {
        createBoard(currentGraph);
      }, 50);
    }
  }, [currentGraph]);

  const handleAnswer = (answer: MotionType) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentGraph?.correctAnswer);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    // Select a new random graph (different from previous)
    const { graph: randomGraph } = getRandomGraph();
    setCurrentGraph(randomGraph);
  };

  return (
    <div className="quiz-container p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Motion Type Quiz</h3>
      <div className="mb-4">
        <p className="mb-2">What type of motion does this graph show?</p>
        <div
          ref={boxRef}
          className="w-full h-[300px] border border-gray-200 mb-4"
        ></div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {motionTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleAnswer(type)}
            disabled={selectedAnswer !== null}
            className={`p-2 rounded border ${
              selectedAnswer === type
                ? isCorrect
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
                : "hover:bg-blue-50 border-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div
          className={`p-3 rounded-md ${
            isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {isCorrect ? (
            <p>✅ Correct! This graph shows {currentGraph?.correctAnswer}.</p>
          ) : (
            <p>❌ Incorrect. This graph shows {currentGraph?.correctAnswer}.</p>
          )}
          <button
            onClick={resetQuiz}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Another
          </button>
        </div>
      )}
    </div>
  );
}

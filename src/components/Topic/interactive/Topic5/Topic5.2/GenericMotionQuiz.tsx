/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import JXG from "jsxgraph";
import "../../../../../assets/jsxgraph.css";

type MotionType = 'stationary' | 'uniform motion' | 'acceleration' | 'deceleration';

interface GraphExample {
  points: [number, number][];
  correctAnswer: MotionType;
  description?: string;
}

interface MotionQuizProps {
  graphType: 'distance' | 'velocity';
  graphExamples: GraphExample[];
  yAxisLabel: string;
  motionTypes: MotionType[];
  boundingBox: [number, number, number, number];
}

export default function GenericMotionQuiz({
  graphType,
  graphExamples,
  yAxisLabel,
  motionTypes,
  boundingBox
}: MotionQuizProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<MotionType | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentGraph, setCurrentGraph] = useState<GraphExample | null>(null);
  const [previousGraphIndex, setPreviousGraphIndex] = useState<number | null>(null);

  const getRandomGraph = () => {
    let availableIndices = graphExamples.map((_, index) => index);
    if (previousGraphIndex !== null) {
      availableIndices = availableIndices.filter(index => index !== previousGraphIndex);
    }
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setPreviousGraphIndex(randomIndex);
    return { graph: graphExamples[randomIndex], index: randomIndex };
  };

  const createBoard = (graphData: GraphExample) => {
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
        boundingbox: boundingBox,
        axis: true,
        showNavigation: false,
        showCopyright: false,
        pan: { enabled: false },
        zoom: false,
        grid: false,
      });

      boardRef.current = board;

      board.create("text", [boundingBox[2]/2, boundingBox[3] + 0.5, "Time (s)"], {
        fontSize: 14, 
        fixed: true,
      });

      board.create("text", [boundingBox[0] + 0.2, boundingBox[1] - 0.5, yAxisLabel], {
        fontSize: 14, 
        fixed: true,
      });

      const x = graphData.points.map(p => p[0]);
      const y = graphData.points.map(p => p[1]);
      board.create("curve", [x, y], {
        strokeColor: "#3498db",
        strokeWidth: 3,
      });
    } catch (error) {
      console.error("Error creating JSXGraph board:", error);
    }
  };

  useEffect(() => {
    const initializeGraph = () => {
      const { graph: randomGraph } = getRandomGraph();
      setCurrentGraph(randomGraph);
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

  useEffect(() => {
    if (currentGraph && boxRef.current) {
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
    const { graph: randomGraph } = getRandomGraph();
    setCurrentGraph(randomGraph);
  };

  return (
    <div className="quiz-container p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-4">
        {graphType === 'distance' ? 'Distance-Time' : 'Velocity-Time'} Motion Quiz
      </h3>
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
          {currentGraph?.description && (
            <p className="mt-1 text-sm">{currentGraph.description}</p>
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
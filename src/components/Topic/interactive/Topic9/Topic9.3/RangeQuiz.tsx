/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle, BarChart3, Calculator, Eye, RefreshCw, Target, AlertTriangle } from 'lucide-react';

interface QuizStep {
  id: number;
  title: string;
  concept: string;
  question: string;
  options?: string[];
  correctAnswer: number | string;
  explanation: string;
  formula?: string;
  example?: string;
  interactive?: boolean;
  hasChart?: boolean;
  chartType?: 'dataset' | 'comparison' | 'outlier-effect';
  dataset?: number[];
  showOutliers?: boolean;
}

const RangeCalculationsQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [userInput, setUserInput] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sample datasets for different examples
  const datasets = {
    simple: [12, 8, 15, 23, 7, 19, 11],
    weather: [18, 22, 25, 31, 28, 24, 19, 21],
    withOutlier: [85, 87, 89, 91, 88, 86, 150], // 150 is outlier
    stocks: [45.2, 47.8, 43.1, 49.5, 41.7, 52.3, 46.9],
    quality: [2.1, 2.3, 2.2, 2.4, 2.0, 2.5, 2.1]
  };

  const drawDataVisualization = (type: string, data: number[], showOutliers = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 320;
    canvas.height = 240;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const margin = 40;
    const chartWidth = canvas.width - 2 * margin;

    if (type === 'dataset') {
      // Draw dot plot
      const minVal = Math.min(...data);
      const maxVal = Math.max(...data);
      const range = maxVal - minVal;
      const scale = chartWidth / (range + 2);

      // Draw axes
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(margin, canvas.height - margin);
      ctx.lineTo(canvas.width - margin, canvas.height - margin);
      ctx.stroke();

      // Draw scale
      ctx.fillStyle = '#6B7280';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      
      for (let i = Math.floor(minVal); i <= Math.ceil(maxVal); i += Math.max(1, Math.floor(range / 8))) {
        const x = margin + (i - minVal + 1) * scale;
        ctx.beginPath();
        ctx.moveTo(x, canvas.height - margin);
        ctx.lineTo(x, canvas.height - margin + 5);
        ctx.stroke();
        ctx.fillText(i.toString(), x, canvas.height - margin + 18);
      }

      // Plot data points
      data.forEach((value, index) => {
        const x = margin + (value - minVal + 1) * scale;
        const y = canvas.height - margin - 20 - (index * 8) % 60;
        
        ctx.fillStyle = showOutliers && (value === maxVal || value === minVal) ? '#EF4444' : '#3B82F6';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
        
        // Label extreme values
        if (showOutliers && (value === maxVal || value === minVal)) {
          ctx.fillStyle = '#EF4444';
          ctx.font = '9px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(value.toString(), x, y - 10);
        }
      });

      // Draw range arrow
      const minX = margin + (minVal - minVal + 1) * scale;
      const maxX = margin + (maxVal - minVal + 1) * scale;
      const arrowY = canvas.height - margin - 100;
      
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(minX, arrowY);
      ctx.lineTo(maxX, arrowY);
      ctx.stroke();
      
      // Arrow heads
      ctx.beginPath();
      ctx.moveTo(minX + 5, arrowY - 3);
      ctx.lineTo(minX, arrowY);
      ctx.lineTo(minX + 5, arrowY + 3);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(maxX - 5, arrowY - 3);
      ctx.lineTo(maxX, arrowY);
      ctx.lineTo(maxX - 5, arrowY + 3);
      ctx.stroke();
      
      // Range label
      ctx.fillStyle = '#10B981';
      ctx.font = '11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`Range = ${maxVal - minVal}`, (minX + maxX) / 2, arrowY - 15);

    } else if (type === 'comparison') {
      // Draw multiple datasets comparison
      const datasets = [
        { name: 'Set A', data: [10, 12, 14, 16, 18], color: '#3B82F6' },
        { name: 'Set B', data: [5, 10, 15, 20, 25], color: '#EF4444' },
        { name: 'Set C', data: [13, 13.5, 14, 14.5, 15], color: '#10B981' }
      ];

      let yPos = 30;
      datasets.forEach((set) => {
        const minVal = Math.min(...set.data);
        const maxVal = Math.max(...set.data);
        const range = maxVal - minVal;
        
        // Dataset label
        ctx.fillStyle = set.color;
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${set.name}: Range = ${range}`, 10, yPos);
        
        // Draw range bar
        const barWidth = (range / 25) * (chartWidth - 100);
        ctx.fillStyle = set.color;
        ctx.globalAlpha = 0.6;
        ctx.fillRect(margin + 80, yPos + 5, barWidth, 15);
        ctx.globalAlpha = 1.0;
        
        yPos += 35;
      });
    }

    // Draw title
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
      type === 'dataset' ? 'Data Distribution' : 
      type === 'comparison' ? 'Range Comparison' : 'Outlier Effect',
      canvas.width / 2, 20
    );
  };

  useEffect(() => {
    const currentStepData = steps[currentStep];
    if (currentStepData.hasChart) {
      setTimeout(() => {
        drawDataVisualization(
          currentStepData.chartType || 'dataset', 
          currentStepData.dataset || datasets.simple,
          currentStepData.showOutliers
        );
      }, 100);
    }
  }, [currentStep, showFeedback]);

  const steps: QuizStep[] = [
    {
      id: 0,
      title: "What is Range?",
      concept: "Range is the simplest measure of dispersion, showing the spread between the highest and lowest values in a dataset",
      question: "What does the range of a dataset tell us?",
      options: [
        "The average value of the data",
        "The most frequently occurring value",
        "The spread or variability in the data",
        "The middle value when data is arranged"
      ],
      correctAnswer: 2,
      explanation: "Range measures the spread of data by calculating the difference between the highest and lowest values, giving us an idea of data variability.",
      formula: "Range = Highest Value - Lowest Value"
    },
    {
      id: 1,
      title: "Range Formula",
      concept: "The range is calculated using a simple subtraction formula",
      question: "For the dataset [5, 12, 3, 18, 7, 9], what is the range?",
      correctAnswer: "15",
      explanation: "Range = 18 - 3 = 15. We subtract the lowest value (3) from the highest value (18).",
      interactive: true,
      formula: "Range = Max - Min = 18 - 3 = 15",
      example: "Dataset: [5, 12, 3, 18, 7, 9] → Max: 18, Min: 3",
      hasChart: true,
      chartType: 'dataset',
      dataset: [5, 12, 3, 18, 7, 9]
    },
    {
      id: 2,
      title: "Practical Example - Weather Data",
      concept: "Range is commonly used in weather analysis to show temperature variation",
      question: "If daily temperatures were 18°C, 22°C, 25°C, 31°C, 28°C, 24°C, 19°C, what's the temperature range?",
      correctAnswer: "13",
      explanation: "Temperature range = 31°C - 18°C = 13°C. This shows the day had a 13-degree temperature variation.",
      interactive: true,
      hasChart: true,
      chartType: 'dataset',
      dataset: [18, 22, 25, 31, 28, 24, 19],
      formula: "Range = 31°C - 18°C = 13°C"
    },
    {
      id: 3,
      title: "Advantages of Range",
      concept: "Range has several advantages that make it useful for quick data analysis",
      question: "Which is NOT an advantage of using range?",
      options: [
        "Easy to calculate and understand",
        "Gives quick idea of data spread",
        "Uses all values in the dataset",
        "Provides immediate sense of variability"
      ],
      correctAnswer: 2,
      explanation: "Range only uses two extreme values (highest and lowest), not all values in the dataset. This is actually one of its limitations.",
      example: "Range calculation only needs: Maximum value and Minimum value"
    },
    {
      id: 4,
      title: "Disadvantages - Outlier Sensitivity",
      concept: "Range is heavily influenced by outliers, which can make it misleading",
      question: "In the dataset [85, 87, 89, 91, 88, 86, 150], what problem does the range reveal?",
      options: [
        "The data is normally distributed",
        "The range (65) is distorted by an outlier (150)",
        "All values are equally important",
        "The average is too high"
      ],
      correctAnswer: 1,
      explanation: "The outlier value 150 makes the range 65, which doesn't represent the spread of most data (which ranges only from 85-91).",
      hasChart: true,
      chartType: 'dataset',
      dataset: [85, 87, 89, 91, 88, 86, 150],
      showOutliers: true,
      formula: "Range = 150 - 85 = 65 (misleading due to outlier)"
    },
    {
      id: 5,
      title: "Coefficient of Range",
      concept: "The coefficient of range allows comparison between different datasets by creating a relative measure",
      question: "What is the coefficient of range formula?",
      options: [
        "(H - L) / 2",
        "(H + L) / 2",
        "(H - L) / (H + L)",
        "(H × L) / (H + L)"
      ],
      correctAnswer: 2,
      explanation: "Coefficient of Range = (H - L) / (H + L), where H is highest value and L is lowest value. This gives a relative measure between 0 and 1.",
      formula: "Coefficient of Range = (H - L) / (H + L)"
    },
    {
      id: 6,
      title: "Coefficient Calculation",
      concept: "Let's calculate the coefficient of range for a practical example",
      question: "For stock prices [41.7, 43.1, 45.2, 46.9, 47.8, 49.5, 52.3], what's the coefficient of range? (Round to 3 decimal places)",
      correctAnswer: "0.113",
      explanation: "H = 52.3, L = 41.7. Coefficient = (52.3 - 41.7) / (52.3 + 41.7) = 10.6 / 94.0 = 0.113",
      interactive: true,
      formula: "Coefficient = (52.3 - 41.7) / (52.3 + 41.7) = 10.6 / 94.0 = 0.113",
      hasChart: true,
      chartType: 'dataset',
      dataset: [41.7, 43.1, 45.2, 46.9, 47.8, 49.5, 52.3]
    },
    {
      id: 7,
      title: "Comparing Variability",
      concept: "Range helps compare the spread of different datasets",
      question: "Which dataset shows the most variability?",
      options: [
        "Set A: Range = 8",
        "Set B: Range = 20",
        "Set C: Range = 2",
        "All have equal variability"
      ],
      correctAnswer: 1,
      explanation: "Set B with Range = 20 shows the most variability. Larger range indicates greater spread in the data values.",
      hasChart: true,
      chartType: 'comparison'
    },
    {
      id: 8,
      title: "Quality Control Application",
      concept: "Range is used in quality control to monitor acceptable limits in manufacturing",
      question: "In quality control, if product dimensions should be 2.0-2.5 cm, what's the acceptable range?",
      correctAnswer: "0.5",
      explanation: "Acceptable range = 2.5 - 2.0 = 0.5 cm. Products outside this range would be considered defective.",
      interactive: true,
      formula: "Acceptable Range = Upper Limit - Lower Limit = 2.5 - 2.0 = 0.5",
      hasChart: true,
      chartType: 'dataset',
      dataset: [2.1, 2.3, 2.2, 2.4, 2.0, 2.5, 2.1]
    },
    {
      id: 9,
      title: "Range Limitations",
      concept: "Understanding when range is not suitable for data analysis",
      question: "Range is NOT suitable for:",
      options: [
        "Quick data exploration",
        "Grouped data with open classes",
        "Temperature variations",
        "Initial spread assessment"
      ],
      correctAnswer: 1,
      explanation: "Range cannot be calculated for grouped data with open classes (like '60 and above') because we don't know the actual maximum value.",
      example: "Open class example: [10-20, 20-30, 30-40, 40+] - can't find exact maximum"
    },
    {
      id: 10,
      title: "ICT Tools Benefits",
      concept: "Modern tools can calculate range and identify outliers automatically",
      question: "What's the main benefit of using ICT tools for range calculations?",
      options: [
        "They always give different answers",
        "Automatic calculation and outlier detection",
        "They eliminate the need for understanding",
        "They only work with large datasets"
      ],
      correctAnswer: 1,
      explanation: "ICT tools provide automatic calculations, can handle large datasets efficiently, and often highlight outliers that might affect the range interpretation.",
      formula: "ICT Tools: Quick calculation + Visual representation + Outlier detection"
    },
    {
      id: 11,
      title: "Interpretation Skills",
      concept: "Proper interpretation of range values in context is crucial",
      question: "A company's daily sales range is $200. This means:",
      options: [
        "Average daily sales is $200",
        "Minimum daily sales is $200",
        "The difference between highest and lowest daily sales is $200",
        "Most days have sales of $200"
      ],
      correctAnswer: 2,
      explanation: "Range represents the difference between extreme values. A $200 range means the highest sales day exceeded the lowest by $200.",
      example: "If lowest sales = $800, highest sales = $1000, then Range = $200"
    },
    {
      id: 12,
      title: "Real-world Applications",
      concept: "Range finds applications in various fields for measuring spread and variability",
      question: "Which field would LEAST likely use range as a primary measure?",
      options: [
        "Weather forecasting (temperature ranges)",
        "Stock market analysis (price fluctuations)", 
        "Medical research (precise drug dosages)",
        "Sports statistics (score variations)"
      ],
      correctAnswer: 2,
      explanation: "Medical research requires more precise measures of variability. Range's sensitivity to outliers and limited information make it less suitable for critical dosage decisions.",
      example: "Medical research needs: Standard deviation, variance, confidence intervals"
    }
  ];

  const handleAnswer = (answer: number | string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer.toString() === steps[currentStep].correctAnswer.toString();
    if (isCorrect && !completedSteps.has(currentStep)) {
      setScore(score + 1);
      setCompletedSteps(new Set([...completedSteps, currentStep]));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setUserInput('');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setUserInput('');
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCompletedSteps(new Set());
    setUserInput('');
  };

  const currentStepData = steps[currentStep];
  const isCorrect = selectedAnswer?.toString() === currentStepData.correctAnswer.toString();
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-bold">Range Calculations</h1>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span className="text-sm">{score}/{steps.length}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs mt-1 opacity-90">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Step Title & Concept */}
        <div className="bg-purple-50 rounded-lg p-4">
          <h2 className="font-bold text-gray-800 mb-2">{currentStepData.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{currentStepData.concept}</p>
          
          {/* Formula Display */}
          {currentStepData.formula && (
            <div className="mt-3 bg-white rounded p-3 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-1">
                <Calculator className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-medium text-purple-600">FORMULA</span>
              </div>
              <code className="text-sm text-gray-700">{currentStepData.formula}</code>
            </div>
          )}

          {/* Example */}
          {currentStepData.example && (
            <div className="mt-2 text-xs text-gray-500 italic">
              Example: {currentStepData.example}
            </div>
          )}
        </div>

        {/* Dataset Display */}
        {currentStepData.dataset && (
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Dataset</span>
              {currentStepData.showOutliers && (
                <AlertTriangle className="w-4 h-4 text-orange-500" />
              )}
            </div>
            <div className="text-sm text-gray-700">
              [{currentStepData.dataset.join(', ')}]
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Min: {Math.min(...currentStepData.dataset)} | 
              Max: {Math.max(...currentStepData.dataset)} | 
              Range: {Math.max(...currentStepData.dataset) - Math.min(...currentStepData.dataset)}
            </div>
          </div>
        )}

        {/* Interactive Chart */}
        {currentStepData.hasChart && (
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {currentStepData.chartType === 'comparison' ? 'Range Comparison' : 'Data Visualization'}
              </span>
              {currentStepData.showOutliers && (
                <span className="text-xs text-orange-600">Red dots = outliers</span>
              )}
            </div>
            <div className="flex justify-center">
              <canvas 
                ref={canvasRef}
                className="border border-gray-200 rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        )}

        {/* Question */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-3">{currentStepData.question}</h3>

          {/* Interactive Input */}
          {currentStepData.interactive ? (
            <div className="space-y-3">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter your answer..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={() => handleAnswer(userInput)}
                disabled={!userInput.trim()}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
              >
                Submit Answer
              </button>
            </div>
          ) : (
            /* Multiple Choice Options */
            <div className="space-y-2">
              {currentStepData.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-3 text-left rounded-lg border transition-all text-sm leading-relaxed ${
                    showFeedback
                      ? selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : index === currentStepData.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-gray-100 border-gray-300'
                      : 'bg-white border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && (
                      <>
                        {selectedAnswer === index && (
                          isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        {selectedAnswer !== index && index === currentStepData.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} border`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <h4 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-orange-800'} mb-1`}>
                  {isCorrect ? 'Excellent!' : 'Learning opportunity!'}
                </h4>
                <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-orange-700'} leading-relaxed`}>
                  {currentStepData.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className=" bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {currentStep === steps.length - 1 && (
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default RangeCalculationsQuiz;
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle, BarChart3, Calculator, Eye, RefreshCw, TrendingUp, MousePointer } from 'lucide-react';

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
  chartType?: 'less-than' | 'more-than' | 'both';
  showGuideLines?: boolean;
}

const OgiveQuartilesQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [userInput, setUserInput] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sample grouped data for ogive construction
  const groupedData = {
    classes: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80'],
    frequencies: [3, 7, 12, 18, 15, 8, 5],
    upperBoundaries: [20, 30, 40, 50, 60, 70, 80],
    lowerBoundaries: [10, 20, 30, 40, 50, 60, 70],
    n: 68
  };

  // Calculate cumulative frequencies
  const getCumulativeFrequencies = (type: 'less-than' | 'more-than') => {
    const { frequencies } = groupedData;
    if (type === 'less-than') {
      const cf = [];
      let sum = 0;
      for (let i = 0; i < frequencies.length; i++) {
        sum += frequencies[i];
        cf.push(sum);
      }
      return cf;
    } else {
      const cf = [];
      let sum = groupedData.n;
      for (let i = 0; i < frequencies.length; i++) {
        cf.push(sum);
        sum -= frequencies[i];
      }
      return cf;
    }
  };

  const drawOgive = (type: 'less-than' | 'more-than' | 'both', showGuides = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 320;
    canvas.height = 240;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up coordinate system
    const margin = 40;
    const chartWidth = canvas.width - 2 * margin;
    const chartHeight = canvas.height - 2 * margin;
    
    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, canvas.height - margin);
    ctx.lineTo(canvas.width - margin, canvas.height - margin);
    ctx.stroke();

    // Draw axis labels
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Class Boundaries', canvas.width / 2, canvas.height - 10);
    
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Cumulative Frequency', 0, 0);
    ctx.restore();

    // Scale factors
    const xScale = chartWidth / 80; // 10 to 80
    const yScale = chartHeight / groupedData.n;

    if (type === 'less-than' || type === 'both') {
      const cf = getCumulativeFrequencies('less-than');
      
      ctx.strokeStyle = type === 'both' ? '#3B82F6' : '#8B5CF6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      // Start from origin for less-than ogive
      ctx.moveTo(margin, canvas.height - margin);
      
      for (let i = 0; i < groupedData.upperBoundaries.length; i++) {
        const x = margin + (groupedData.upperBoundaries[i] - 10) * xScale;
        const y = canvas.height - margin - cf[i] * yScale;
        ctx.lineTo(x, y);
        
        // Draw points
        ctx.fillStyle = type === 'both' ? '#3B82F6' : '#8B5CF6';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
      }
      ctx.stroke();
    }

    if (type === 'more-than' || type === 'both') {
      const cf = getCumulativeFrequencies('more-than');
      
      ctx.strokeStyle = type === 'both' ? '#EF4444' : '#8B5CF6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      let firstPoint = true;
      for (let i = 0; i < groupedData.lowerBoundaries.length; i++) {
        const x = margin + (groupedData.lowerBoundaries[i] - 10) * xScale;
        const y = canvas.height - margin - cf[i] * yScale;
        
        if (firstPoint) {
          ctx.moveTo(x, y);
          firstPoint = false;
        } else {
          ctx.lineTo(x, y);
        }
        
        // Draw points
        ctx.fillStyle = type === 'both' ? '#EF4444' : '#8B5CF6';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
      }
      ctx.stroke();
    }

    // Draw guide lines for Q1 if requested
    if (showGuides && (type === 'less-than' || type === 'both')) {
      const q1Position = groupedData.n / 4; // 17
      
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      
      // Q1 horizontal line
      const q1Y = canvas.height - margin - q1Position * yScale;
      ctx.beginPath();
      ctx.moveTo(margin, q1Y);
      ctx.lineTo(canvas.width - margin, q1Y);
      ctx.stroke();
      
      // Q1 label
      ctx.fillStyle = '#10B981';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(`n/4 = ${q1Position}`, margin - 5, q1Y + 3);
      
      ctx.setLineDash([]);
    }

    // Draw scale marks
    ctx.strokeStyle = '#9CA3AF';
    ctx.lineWidth = 1;
    ctx.font = '10px Arial';
    ctx.fillStyle = '#9CA3AF';
    
    // X-axis marks
    for (let i = 20; i <= 80; i += 10) {
      const x = margin + (i - 10) * xScale;
      ctx.beginPath();
      ctx.moveTo(x, canvas.height - margin);
      ctx.lineTo(x, canvas.height - margin + 5);
      ctx.stroke();
      
      ctx.textAlign = 'center';
      ctx.fillText(i.toString(), x, canvas.height - margin + 15);
    }
    
    // Y-axis marks
    for (let i = 0; i <= groupedData.n; i += 10) {
      const y = canvas.height - margin - i * yScale;
      ctx.beginPath();
      ctx.moveTo(margin - 5, y);
      ctx.lineTo(margin, y);
      ctx.stroke();
      
      ctx.textAlign = 'right';
      ctx.fillText(i.toString(), margin - 8, y + 3);
    }

    // Legend for both curves
    if (type === 'both') {
      ctx.font = '11px Arial';
      ctx.fillStyle = '#3B82F6';
      ctx.fillText('Less than ogive', canvas.width - margin - 100, 20);
      ctx.fillStyle = '#EF4444';
      ctx.fillText('More than ogive', canvas.width - margin - 100, 35);
    }
  };

  useEffect(() => {
    const currentStepData = steps[currentStep];
    if (currentStepData.hasChart) {
      setTimeout(() => {
        drawOgive(currentStepData.chartType || 'less-than', currentStepData.showGuideLines);
      }, 100);
    }
  }, [currentStep, showFeedback]);

  const steps: QuizStep[] = [
    {
      id: 0,
      title: "What is an Ogive?",
      concept: "An ogive is a cumulative frequency curve that helps visualize data distribution",
      question: "What does an ogive represent?",
      options: [
        "Individual frequencies only",
        "Cumulative frequencies plotted as a curve", 
        "The mean and standard deviation",
        "Only the quartile values"
      ],
      correctAnswer: 1,
      explanation: "An ogive plots cumulative frequencies against class boundaries, creating a smooth curve that shows how data accumulates across the range."
    },
    {
      id: 1,
      title: "Types of Ogives",
      concept: "There are two types: less-than ogive and more-than ogive",
      question: "In a 'less than' ogive, what do we plot on the x-axis?",
      options: ["Lower class boundaries", "Upper class boundaries", "Class midpoints", "Frequencies"],
      correctAnswer: 1,
      explanation: "Less-than ogives plot cumulative frequencies against upper class boundaries, showing how many values are less than each boundary.",
      formula: "Less than ogive: CF vs Upper boundaries"
    },
    {
      id: 2,
      title: "Sample Data Overview",
      concept: "Let's work with grouped data: Classes 10-20, 20-30, ..., 70-80 with frequencies 3, 7, 12, 18, 15, 8, 5",
      question: "What is the total frequency (n) for our dataset?",
      correctAnswer: "68",
      explanation: "n = 3 + 7 + 12 + 18 + 15 + 8 + 5 = 68. This total is crucial for finding quartile positions.",
      interactive: true,
      example: "Sum all frequencies: 3+7+12+18+15+8+5 = 68"
    },
    {
      id: 3,
      title: "Constructing Less-Than Ogive",
      concept: "Plot cumulative frequencies against upper class boundaries",
      question: "What is the cumulative frequency up to class 30-40?",
      options: ["10", "22", "34", "40"],
      correctAnswer: 1,
      explanation: "CF up to 40 = 3 + 7 + 12 = 22. We add frequencies of classes 10-20, 20-30, and 30-40.",
      hasChart: true,
      chartType: 'less-than',
      formula: "CF(≤40) = f₁ + f₂ + f₃ = 3 + 7 + 12 = 22"
    },
    {
      id: 4,
      title: "Reading Q₁ from Less-Than Ogive",
      concept: "Q₁ position is at n/4 on the cumulative frequency axis",
      question: "For n = 68, at what CF value do we find Q₁?",
      correctAnswer: "17",
      explanation: "Q₁ position = n/4 = 68/4 = 17. We draw a horizontal line from CF = 17 to the curve, then down to read Q₁.",
      interactive: true,
      hasChart: true,
      chartType: 'less-than',
      showGuideLines: true,
      formula: "Q₁ position = n/4 = 68/4 = 17"
    },
    {
      id: 5,
      title: "Estimating Q₁ Value",
      concept: "From the ogive, read where the horizontal line from CF=17 meets the x-axis",
      question: "Looking at the less-than ogive, Q₁ is approximately:",
      options: ["32", "35", "38", "41"],
      correctAnswer: 1,
      explanation: "From the ogive, when CF = 17, the corresponding x-value (Q₁) is approximately 35. This shows 25% of data falls below 35.",
      hasChart: true,
      chartType: 'less-than',
      showGuideLines: true
    },
    {
      id: 6,
      title: "More-Than Ogive Construction",
      concept: "More-than ogive plots cumulative frequencies from the top down using lower boundaries",
      question: "In a more-than ogive for our data, what CF value corresponds to the 40 boundary?",
      options: ["22", "46", "68", "58"],
      correctAnswer: 1,
      explanation: "For 'more than 40': CF = 18 + 15 + 8 + 5 = 46. This represents values greater than or equal to 40.",
      hasChart: true,
      chartType: 'more-than',
      formula: "CF(≥40) = f₄ + f₅ + f₆ + f₇ = 18 + 15 + 8 + 5 = 46"
    },
    {
      id: 7,
      title: "Q₁ from More-Than Ogive",
      concept: "For Q₁ in more-than ogive, we use 3n/4 position (75th percentile from top)",
      question: "What CF position gives Q₁ in a more-than ogive?",
      correctAnswer: "51",
      explanation: "Q₁ from more-than ogive: 3n/4 = 3×68/4 = 51. This is because we're counting from the top down.",
      interactive: true,
      formula: "Q₁ position (more-than) = 3n/4 = 3×68/4 = 51"
    },
    {
      id: 8,
      title: "Comparing Both Ogives",
      concept: "Both ogives should give the same quartile values when read correctly",
      question: "The main advantage of having both ogives is:",
      options: [
        "They look more attractive",
        "Cross-verification of quartile values", 
        "They use different formulas",
        "One is for Q₁, other for Q₃"
      ],
      correctAnswer: 1,
      explanation: "Both ogives provide the same quartiles but from different perspectives, allowing us to verify our readings and ensure accuracy.",
      hasChart: true,
      chartType: 'both'
    },
    {
      id: 9,
      title: "Percentile Applications",
      concept: "Ogives can find any percentile, not just quartiles",
      question: "To find the 90th percentile (P₉₀), what position do we use?",
      correctAnswer: "61.2",
      explanation: "P₉₀ position = (90/100) × n = 0.9 × 68 = 61.2. We find this position on the CF axis and read across to the curve.",
      interactive: true,
      formula: "Pth percentile position = (P/100) × n"
    },
    {
      id: 10,
      title: "Advantages of Ogive Method",
      concept: "Ogives provide visual insights into data distribution patterns",
      question: "Which is NOT an advantage of using ogives for quartiles?",
      options: [
        "Visual representation of distribution",
        "Can estimate any percentile easily", 
        "Always gives exact values",
        "Shows cumulative patterns clearly"
      ],
      correctAnswer: 2,
      explanation: "Ogives provide estimates through interpolation, not exact values. However, they excel at visualization and allow estimation of any percentile.",
      hasChart: true,
      chartType: 'both'
    },
    {
      id: 11,
      title: "Accuracy and Limitations",
      concept: "Ogive accuracy depends on sample size and smooth curve assumptions",
      question: "Ogive accuracy can be improved by:",
      options: [
        "Using fewer class intervals",
        "Increasing sample size and using more classes", 
        "Only plotting every other point",
        "Making the curve more angular"
      ],
      correctAnswer: 1,
      explanation: "Larger sample sizes and more class intervals provide better resolution and smoother curves, leading to more accurate quartile estimates.",
      hasChart: true,
      chartType: 'both'
    },
    {
      id: 12,
      title: "ICT Tools and Applications",
      concept: "Modern tools can create precise ogives and calculate quartiles automatically",
      question: "When using ICT tools to create ogives, the main benefit is:",
      options: [
        "Automatic calculation and precise plotting",
        "Always gives whole number answers", 
        "Eliminates need to understand concepts",
        "Makes all distributions normal"
      ],
      correctAnswer: 0,
      explanation: "ICT tools provide precision in plotting and automatic calculations, but understanding the underlying concepts remains essential for proper interpretation.",
      hasChart: true,
      chartType: 'both'
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
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-bold">Ogives for Quartiles</h1>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
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
        <div className="bg-indigo-50 rounded-lg p-4">
          <h2 className="font-bold text-gray-800 mb-2">{currentStepData.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{currentStepData.concept}</p>
          
          {/* Formula Display */}
          {currentStepData.formula && (
            <div className="mt-3 bg-white rounded p-3 border-l-4 border-indigo-500">
              <div className="flex items-center gap-2 mb-1">
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-medium text-indigo-600">FORMULA</span>
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

        {/* Data Table Display */}
        {currentStep >= 2 && (
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Grouped Data</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-1">Class</th>
                    <th className="text-center p-1">f</th>
                    {currentStep >= 3 && <th className="text-center p-1">CF(≤)</th>}
                  </tr>
                </thead>
                <tbody>
                  {groupedData.classes.map((cls, i) => (
                    <tr key={i} className="text-xs">
                      <td className="p-1">{cls}</td>
                      <td className="text-center p-1">{groupedData.frequencies[i]}</td>
                      {currentStep >= 3 && <td className="text-center p-1">{getCumulativeFrequencies('less-than')[i]}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Interactive Chart */}
        {currentStepData.hasChart && (
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {currentStepData.chartType === 'both' ? 'Both Ogives' : 
                 currentStepData.chartType === 'more-than' ? 'More-Than Ogive' : 'Less-Than Ogive'}
              </span>
            </div>
            <div className="flex justify-center">
              <canvas 
                ref={canvasRef}
                className="border border-gray-200 rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            {currentStepData.showGuideLines && (
              <div className="mt-2 text-xs text-green-600">
                <MousePointer className="w-3 h-3 inline mr-1" />
                Green line shows Q₁ position at n/4 = 17
              </div>
            )}
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={() => handleAnswer(userInput)}
                disabled={!userInput.trim()}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
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
                      : 'bg-white border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'
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
                  {isCorrect ? 'Perfect!' : 'Learning opportunity!'}
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
      <div className="bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4">
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
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
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

export default OgiveQuartilesQuiz;
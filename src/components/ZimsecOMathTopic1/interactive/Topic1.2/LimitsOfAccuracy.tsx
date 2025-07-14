import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { CheckCircle, XCircle, Ruler} from 'lucide-react';


const LimitsOfAccuracy = () => {
  const [measurement, setMeasurement] = useState<string>('5.2');
  const [decimalPlaces, setDecimalPlaces] = useState<number>(1);
  const [userLowerBound, setUserLowerBound] = useState<string>('');
  const [userUpperBound, setUserUpperBound] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const measurements = [
    { value: '5.2', dp: 1 },
    { value: '12.34', dp: 2 },
    { value: '0.7', dp: 1 },
    { value: '156.78', dp: 2 },
    { value: '3.456', dp: 3 }
  ];

  const getLimits = (value: string, dp: number) => {
    const num = parseFloat(value);
    const tolerance = 5 / Math.pow(10, dp + 1);
    return {
      lower: num - tolerance,
      upper: num + tolerance
    };
  };

  const limits = getLimits(measurement, decimalPlaces);

  const checkAnswer = () => {
    const lowerAnswer = parseFloat(userLowerBound);
    const upperAnswer = parseFloat(userUpperBound);
    const correct = Math.abs(lowerAnswer - limits.lower) < 0.001 && 
                   Math.abs(upperAnswer - limits.upper) < 0.001;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const newQuestion = () => {
    const randomMeasurement = measurements[Math.floor(Math.random() * measurements.length)];
    setMeasurement(randomMeasurement.value);
    setDecimalPlaces(randomMeasurement.dp);
    setUserLowerBound('');
    setUserUpperBound('');
    setShowResult(false);
  };

  return (
    <div className="bg-gradient-to-br from-teal-500 to-green-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Ruler className="mr-2" /> Limits of Accuracy
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-lg mb-3">
          If a measurement is <MathJax inline>{`\\(${measurement}\\)`}</MathJax> cm (to {decimalPlaces} d.p.),
          find the limits of accuracy:
        </p>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Lower bound:</label>
            <input
              type="number"
              step="0.001"
              value={userLowerBound}
              onChange={(e) => setUserLowerBound(e.target.value)}
              placeholder="Lower bound..."
              className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-2 text-white placeholder-white/70 font-mono"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Upper bound:</label>
            <input
              type="number"
              step="0.001"
              value={userUpperBound}
              onChange={(e) => setUserUpperBound(e.target.value)}
              placeholder="Upper bound..."
              className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-2 text-white placeholder-white/70 font-mono"
            />
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={checkAnswer}
          disabled={!userLowerBound || !userUpperBound || showResult}
          className="flex-1 bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          Check Bounds
        </button>
        
        <button
          onClick={newQuestion}
          className="flex-1 bg-white/20 hover:bg-white/40 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105"
        >
          New Question
        </button>
      </div>
      
      {showResult && (
        <div className={`bg-white/20 backdrop-blur-sm rounded-xl p-4 ${isCorrect ? 'ring-2 ring-green-400' : 'ring-2 ring-red-400'}`}>
          <div className="flex items-center mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
            ) : (
              <XCircle className="w-5 h-5 mr-2 text-red-300" />
            )}
            <span className="font-bold">
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p>
            Correct bounds: {limits.lower.toFixed(3)} ≤ x ≤ {limits.upper.toFixed(3)}
          </p>
        </div>
      )}
    </div>
  );
};
export default LimitsOfAccuracy;
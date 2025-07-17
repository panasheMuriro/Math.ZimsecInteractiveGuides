import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { CheckCircle, Calculator } from 'lucide-react';

const NumberClassifier = () => {
  const [selectedNumber, setSelectedNumber] = useState<string>('');
  const [classification, setClassification] = useState<string[] | null>(null);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const classifyNumber = (num: string): string[] | null => {
    const number = parseFloat(num);
    if (isNaN(number)) return null;
    
    const types: string[] = [];
    
    // Check if it's a natural number
    if (number > 0 && Number.isInteger(number)) {
      types.push('Natural Number ($\\mathbb{N}$)');
    }
    
    // Check if it's a whole number
    if (number >= 0 && Number.isInteger(number)) {
      types.push('Whole Number ($\\mathbb{W}$)');
    }
    
    // Check if it's an integer
    if (Number.isInteger(number)) {
      types.push('Integer ($\\mathbb{Z}$)');
    }
    
    // All numbers we can input are rational
    types.push('Rational Number ($\\mathbb{Q}$)');
    types.push('Real Number ($\\mathbb{R}$)');
    
    return types;
  };

  const handleClassify = () => {
    const result = classifyNumber(selectedNumber);
    setClassification(result);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white relative overflow-hidden">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Calculator className="mr-2" /> Number Classifier
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <input
          type="text"
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(e.target.value)}
          placeholder="Enter a number..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
        />
      </div>
      
      <button
        onClick={handleClassify}
        className="w-full bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 mb-4"
      >
        Classify Number
      </button>
      
      {classification && (
        <div className={`bg-white/20 backdrop-blur-sm rounded-xl p-4 ${showAnimation ? 'animate-pulse' : ''}`}>
          <p className="font-bold mb-2">This number is:</p>
          <div className="space-y-2">
            {classification.map((type, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                <MathJax inline>{`\\(${type}\\)`}</MathJax>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberClassifier;
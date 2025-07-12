import { useState } from 'react';
import { ChevronRight, CheckCircle, XCircle, Star, Trophy, Target, Zap, Calculator, Hash, Percent } from 'lucide-react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

type Section = {
  title: string;
  icon: string;
  content: string;
  interactive: string;
};

type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

const ZimsecOMathTopic1 = () => {
  const [currentView, setCurrentView] = useState<'home' | 'study' | 'quiz' | 'quiz-complete'>('home');
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [animateScore, setAnimateScore] = useState<boolean>(false);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());

  const mathjaxConfig = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    }
  };

  const sections: Section[] = [
    {
      title: "Number Concepts and Operations",
      icon: "🔢",
      content: `Number types are the foundation of mathematics. Let's explore the different families of numbers:

**NATURAL NUMBERS** ($\\mathbb{N}$)
These are counting numbers: $1, 2, 3, 4, 5, \\ldots$
- Used for counting objects
- Always positive
- Start from 1 and go to infinity

**WHOLE NUMBERS** ($\\mathbb{W}$)
Natural numbers plus zero: $0, 1, 2, 3, 4, 5, \\ldots$
- Include zero (representing "nothing")
- All non-negative integers
- Foundation for basic arithmetic

**INTEGERS** ($\\mathbb{Z}$)
All whole numbers and their negatives: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$
- Include positive, negative, and zero
- Represent opposites (temperature, debt/credit)
- Form a complete number line

**RATIONAL NUMBERS** ($\\mathbb{Q}$)
Numbers that can be expressed as fractions: $\\frac{1}{2}, \\frac{3}{4}, -\\frac{2}{3}, 0.25, 0.\\overline{3}$
- Can be written as $\\frac{p}{q}$ where $p$ and $q$ are integers ($q \\neq 0$)
- Include terminating and repeating decimals
- All integers are rational numbers

**REAL NUMBERS** ($\\mathbb{R}$)
All rational and irrational numbers combined
- Include everything on the number line
- Foundation for advanced mathematics
- Used in real-world measurements`,
      interactive: "number-classifier"
    },
    {
      title: "Approximations and Estimations",
      icon: "📏",
      content: `Approximations help us work with numbers that are easier to handle while maintaining reasonable accuracy.

**ROUNDING OFF NUMBERS**
Rules for rounding:
- Look at the digit to the right of the place you're rounding to
- If it's $\\geq 5$, round up
- If it's $< 5$, round down
- Examples: $3.67 \\rightarrow 3.7$ (to 1 d.p.), $245 \\rightarrow 250$ (to nearest 10)

**DECIMAL PLACES (d.p.)**
Count digits after the decimal point:
- $3.456$ has 3 decimal places
- $0.2$ has 1 decimal place
- $15.0$ has 1 decimal place

**SIGNIFICANT FIGURES (s.f.)**
Count meaningful digits from the first non-zero digit:
- $3.456$ has 4 significant figures
- $0.00456$ has 3 significant figures
- $3400$ has 2 significant figures (assuming trailing zeros aren't significant)

**ESTIMATIONS**
Make quick calculations easier:
- $19.8 \\times 4.2 \\approx 20 \\times 4 = 80$
- $297 \\div 3.1 \\approx 300 \\div 3 = 100$
- Always round to make calculations simpler

**LIMITS OF ACCURACY**
Understanding the range of possible values:
- $5.2$ cm (to 1 d.p.) means the actual value is between $5.15$ and $5.25$ cm
- This is written as $5.15 \\leq x < 5.25$`,
      interactive: "rounding-game"
    },
    {
      title: "Ratios, Rates and Proportions",
      icon: "⚖️",
      content: `Ratios and proportions help us compare quantities and solve real-world problems.

**RATIOS**
Compare quantities of the same type:
- $3:4$ means "3 to 4" or "3 parts to 4 parts"
- Can be simplified like fractions: $6:8 = 3:4$
- Used for mixing, sharing, scaling

**RATES**
Compare quantities of different types:
- Speed: $60\\text{ km/h}$ (distance per time)
- Density: $2.5\\text{ g/cm}^3$ (mass per volume)
- Price: $\\$5\\text{ per kg}$ (cost per weight)

**PROPORTIONS**
When two ratios are equal:
- $3:4 = 6:8$ (this is a proportion)
- Cross multiplication: $3 \\times 8 = 4 \\times 6$
- Used for scaling recipes, maps, currency conversion

**DIRECT PROPORTION**
As one quantity increases, the other increases proportionally:
- $\\text{Cost} \\propto \\text{quantity}$ (more items cost more)
- $\\text{Distance} \\propto \\text{time}$ (at constant speed)
- Formula: $y = kx$ (where $k$ is constant)

**INVERSE PROPORTION**
As one quantity increases, the other decreases proportionally:
- $\\text{Time} \\propto \\frac{1}{\\text{speed}}$ (faster speed means less time)
- $\\text{Workers} \\propto \\frac{1}{\\text{time}}$ (more workers means less time)
- Formula: $y = \\frac{k}{x}$ (where $k$ is constant)

**PRACTICAL APPLICATIONS**
- Recipe scaling: If $2$ cups flour make $12$ cookies, how much for $18$ cookies?
- Map reading: If $2\\text{ cm}$ represents $5\\text{ km}$, what does $7\\text{ cm}$ represent?
- Currency exchange: If £$1 = \\$1.30$, how much is £$25$?`,
      interactive: "proportion-solver"
    },
    {
      title: "Ordinary and Standard Form",
      icon: "🔬",
      content: `Standard form helps us write very large or very small numbers in a manageable way.

**LARGE NUMBERS**
- $5,000,000 = 5 \\times 10^6$
- $340,000,000 = 3.4 \\times 10^8$
- $7,200,000,000 = 7.2 \\times 10^9$

**SMALL NUMBERS**
- $0.005 = 5 \\times 10^{-3}$
- $0.00034 = 3.4 \\times 10^{-4}$
- $0.000000072 = 7.2 \\times 10^{-8}$

**STANDARD FORM RULES**
A number in standard form is written as: $a \\times 10^n$
- Where $1 \\leq a < 10$
- $n$ is an integer (positive for large numbers, negative for small numbers)

**CONVERTING TO STANDARD FORM**
For large numbers:
1. Place decimal point after first digit
2. Count places moved (this is your power)
3. Power is positive

For small numbers:
1. Move decimal point to after first non-zero digit
2. Count places moved (this is your power)
3. Power is negative

**OPERATIONS IN STANDARD FORM**
Multiplication: $(a \\times 10^m) \\times (b \\times 10^n) = (a \\times b) \\times 10^{m+n}$
Division: $(a \\times 10^m) \\div (b \\times 10^n) = (a \\div b) \\times 10^{m-n}$

**REAL-WORLD EXAMPLES**
- Distance to sun: $1.5 \\times 10^8\\text{ km}$
- Mass of electron: $9.1 \\times 10^{-31}\\text{ kg}$
- World population: $8 \\times 10^9\\text{ people}$`,
      interactive: "standard-form-converter"
    },
    {
      title: "Number Bases",
      icon: "💻",
      content: `Number bases show us different ways to represent numbers, essential for computer science and mathematics.

**BASE 10 (DECIMAL)**
Our everyday number system:
- Uses digits $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$
- Each position represents a power of $10$
- $245_{10} = 2\\times10^2 + 4\\times10^1 + 5\\times10^0 = 200 + 40 + 5$

**BASE 2 (BINARY)**
Computer language:
- Uses only digits $0$ and $1$
- Each position represents a power of $2$
- $1011_2 = 1\\times2^3 + 0\\times2^2 + 1\\times2^1 + 1\\times2^0 = 8 + 0 + 2 + 1 = 11_{10}$

**BASE 5 (QUINARY)**
Alternative base system:
- Uses digits $0, 1, 2, 3, 4$
- Each position represents a power of $5$
- $123_5 = 1\\times5^2 + 2\\times5^1 + 3\\times5^0 = 25 + 10 + 3 = 38_{10}$

**CONVERTING BETWEEN BASES**
From base $10$ to other bases:
- Divide by the target base repeatedly
- Read remainders from bottom to top
- Example: $13_{10}$ to base $2$: $13\\div2=6\\text{ R}1$, $6\\div2=3\\text{ R}0$, $3\\div2=1\\text{ R}1$, $1\\div2=0\\text{ R}1$
- So $13_{10} = 1101_2$

From other bases to base $10$:
- Multiply each digit by its place value
- Add all products together

**OPERATIONS IN DIFFERENT BASES**
Addition in base $2$:
- $0 + 0 = 0$
- $0 + 1 = 1$
- $1 + 0 = 1$
- $1 + 1 = 10$ (carry $1$)

**EVERYDAY APPLICATIONS**
- Digital clocks (base $60$ for minutes/seconds)
- Computer memory (base $2$)
- Time (base $24$ for hours, base $60$ for minutes)`,
      interactive: "base-converter"
    },
    {
      title: "Scales and Simple Map Problems",
      icon: "🗺️",
      content: `Scales help us represent large real-world distances on manageable maps and drawings.

**SCALE RATIOS**
A scale shows the relationship between map distance and real distance:
- $1:50,000$ means $1\\text{ cm}$ on map $= 50,000\\text{ cm}$ in reality
- $1:100$ means $1\\text{ cm}$ on drawing $= 100\\text{ cm}$ in reality
- Always written as map distance : real distance

**SCALE CALCULATIONS**
Finding real distance:
- If map distance $= 5\\text{ cm}$ and scale $= 1:20,000$
- Real distance $= 5 \\times 20,000 = 100,000\\text{ cm} = 1\\text{ km}$

Finding map distance:
- If real distance $= 3\\text{ km}$ and scale $= 1:50,000$
- Convert: $3\\text{ km} = 300,000\\text{ cm}$
- Map distance $= 300,000 \\div 50,000 = 6\\text{ cm}$

**SCALE FACTOR**
The number you multiply by to get from map to reality:
- Scale $1:1000$ has scale factor $1000$
- Scale $1:25,000$ has scale factor $25,000$

**AREA FACTOR**
For areas, square the scale factor:
- If linear scale factor is $100$, area factor is $100^2 = 10,000$
- If map area is $4\\text{ cm}^2$, real area is $4 \\times 10,000 = 40,000\\text{ cm}^2$

**PRACTICAL APPLICATIONS**
- Reading road maps for journey planning
- Architectural drawings for buildings
- Model making (trains, planes, etc.)
- Garden design and landscaping
- Engineering blueprints

**SCALE DRAWING STEPS**
1. Choose appropriate scale for your paper size
2. Convert all real measurements to map measurements
3. Draw accurately using ruler and compass
4. Label with scale and measurements`,
      interactive: "scale-calculator"
    }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question: "Which type of number is $-5$?",
      options: ["Natural number", "Whole number", "Integer", "Only negative"],
      correct: 2,
      explanation: "Integers include positive numbers, negative numbers, and zero. So $-5$ is an integer."
    },
    {
      question: "Round $3.6789$ to 2 decimal places:",
      options: ["$3.67$", "$3.68$", "$3.679$", "$3.7$"],
      correct: 1,
      explanation: "Look at the third decimal place ($8$). Since $8 \\geq 5$, round up the second decimal place from $7$ to $8$."
    },
    {
      question: "If $3:4 = x:12$, what is $x$?",
      options: ["$9$", "$16$", "$15$", "$8$"],
      correct: 0,
      explanation: "Cross multiply: $3 \\times 12 = 4 \\times x$, so $36 = 4x$, therefore $x = 9$."
    },
    {
      question: "Write $0.00456$ in standard form:",
      options: ["$4.56 \\times 10^{-3}$", "$4.56 \\times 10^{-2}$", "$45.6 \\times 10^{-4}$", "$4.56 \\times 10^3$"],
      correct: 0,
      explanation: "Move decimal point $3$ places right to get $4.56$, so power is $-3$."
    },
    {
      question: "What is $1011_2$ in base $10$?",
      options: ["$11$", "$9$", "$13$", "$15$"],
      correct: 0,
      explanation: "$1\\times2^3 + 0\\times2^2 + 1\\times2^1 + 1\\times2^0 = 8 + 0 + 2 + 1 = 11$"
    },
    {
      question: "On a map with scale $1:25,000$, what real distance does $8\\text{ cm}$ represent?",
      options: ["$2\\text{ km}$", "$200\\text{ m}$", "$20\\text{ km}$", "$2000\\text{ m}$"],
      correct: 0,
      explanation: "$8\\text{ cm} \\times 25,000 = 200,000\\text{ cm} = 2000\\text{ m} = 2\\text{ km}$"
    }
  ];

  const NumberClassifier = () => {
    const [selectedNumber, setSelectedNumber] = useState<string>('');
    const [classification, setClassification] = useState<string[] | null>(null);
    const [showAnimation, setShowAnimation] = useState<boolean>(false);

    const classifyNumber = (num: string): string[] | null => {
      const number = parseFloat(num);
      if (isNaN(number)) return null;
      
      let types: string[] = [];
      
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

  const RoundingGame = () => {
    const [number, setNumber] = useState<number>(3.6789);
    const [decimalPlaces, setDecimalPlaces] = useState<number>(2);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const correctAnswer = parseFloat(number.toFixed(decimalPlaces));

    const checkAnswer = () => {
      const answer = parseFloat(userAnswer);
      setIsCorrect(Math.abs(answer - correctAnswer) < 0.001);
      setShowResult(true);
    };

    const newQuestion = () => {
      setNumber(parseFloat((Math.random() * 100 + 1).toFixed(4)));
      setDecimalPlaces(Math.floor(Math.random() * 3) + 1);
      setUserAnswer('');
      setShowResult(false);
    };

    return (
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Target className="mr-2" /> Rounding Practice
        </h3>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <p className="text-lg mb-2">
            Round <MathJax inline>{`\\(${number}\\)`}</MathJax> to <MathJax inline>{`\\(${decimalPlaces}\\)`}</MathJax> decimal places
          </p>
          
          <input
            type="number"
            step="0.01"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer..."
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
          />
        </div>
        
        <div className="flex gap-2 mb-4">
          <button
            onClick={checkAnswer}
            disabled={!userAnswer || showResult}
            className="flex-1 bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
          >
            Check Answer
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
            <p>Correct answer: <MathJax inline>{`\\(${correctAnswer}\\)`}</MathJax></p>
          </div>
        )}
      </div>
    );
  };

  const ProportionSolver = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(4);
    const [c, setC] = useState<number>(6);
    const [x, setX] = useState<string>('');
    const [showSolution, setShowSolution] = useState<boolean>(false);

    const correctX = (b * c) / a;

    const solve = () => {
      setShowSolution(true);
    };

    const newProblem = () => {
      setA(Math.floor(Math.random() * 9) + 1);
      setB(Math.floor(Math.random() * 9) + 1);
      setC(Math.floor(Math.random() * 20) + 1);
      setX('');
      setShowSolution(false);
    };

    return (
      <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Percent className="mr-2" /> Proportion Solver
        </h3>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <p className="text-center text-lg mb-4">
            <MathJax inline>{`\\(${a} : ${b} = ${c} : x\\)`}</MathJax>
          </p>
          
          <input
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
            placeholder="Find x..."
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg text-center"
          />
        </div>
        
        <div className="flex gap-2 mb-4">
          <button
            onClick={solve}
            className="flex-1 bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105"
          >
            Show Solution
          </button>
          
          <button
            onClick={newProblem}
            className="flex-1 bg-white/20 hover:bg-white/40 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105"
          >
            New Problem
          </button>
        </div>
        
        {showSolution && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="font-bold mb-2">Solution:</p>
            <p className="mb-2">Cross multiply: <MathJax inline>{`\\(${a} \\times x = ${b} \\times ${c}\\)`}</MathJax></p>
            <p className="mb-2"><MathJax inline>{`\\(${a}x = ${b * c}\\)`}</MathJax></p>
            <p className="text-xl font-bold"><MathJax inline>{`\\(x = ${correctX}\\)`}</MathJax></p>
          </div>
        )}
      </div>
    );
  };

  const StandardFormConverter = () => {
    const [inputNumber, setInputNumber] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);

    const convertToStandardForm = (num: string): string => {
      const number = parseFloat(num);
      if (isNaN(number)) return "0";
      if (number === 0) return "0";
      
      const exponent = Math.floor(Math.log10(Math.abs(number)));
      const mantissa = number / Math.pow(10, exponent);
      
      return `${mantissa.toFixed(2)} \\times 10^{${exponent}}`;
    };

    const convert = () => {
      const standardForm = convertToStandardForm(inputNumber);
      setResult(standardForm);
      setShowResult(true);
    };

    return (
      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Zap className="mr-2" /> Standard Form Converter
        </h3>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <input
            type="number"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            placeholder="Enter a number..."
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg mb-4"
          />
          
          <button
            onClick={convert}
            disabled={!inputNumber}
            className="w-full bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
          >
            Convert to Standard Form
          </button>
        </div>
        
        {showResult && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="font-bold mb-2">Standard Form:</p>
            <MathJax>{`\\[${result}\\]`}</MathJax>
          </div>
        )}
      </div>
    );
  };

  const BaseConverter = () => {
    const [decimal, setDecimal] = useState<string>('');
    const [targetBase, setTargetBase] = useState<number>(2);
    const [result, setResult] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);

    const convertToBase = (num: string, base: number): string => {
      const number = parseInt(num);
      if (isNaN(number)) return "";
      
      if (number === 0) return "0";
      
      let result = "";
      let temp = Math.abs(number);
      
      while (temp > 0) {
        result = (temp % base) + result;
        temp = Math.floor(temp / base);
      }
      
      return number < 0 ? "-" + result : result;
    };

    const convert = () => {
      const converted = convertToBase(decimal, targetBase);
      setResult(converted);
      setShowResult(true);
    };

    return (
      <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Hash className="mr-2" /> Base Converter
        </h3>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <input
            type="number"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
            placeholder="Enter decimal number..."
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg mb-4"
          />
          
          <select
            value={targetBase}
            onChange={(e) => setTargetBase(parseInt(e.target.value))}
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white font-mono text-lg mb-4"
          >
            <option value={2}>Base 2 (Binary)</option>
            <option value={5}>Base 5 (Quinary)</option>
            <option value={8}>Base 8 (Octal)</option>
          </select>
          
          <button
            onClick={convert}
            disabled={!decimal}
            className="w-full bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
          >
            Convert
          </button>
        </div>
        
        {showResult && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="font-bold mb-2">Result:</p>
            <MathJax>{`\\(${decimal}_{10} = ${result}_{${targetBase}}\\)`}</MathJax>
          </div>
        )}
      </div>
    );
  };

  const ScaleCalculator = () => {
    const [mapDistance, setMapDistance] = useState<string>('');
    const [scale, setScale] = useState<string>('50000');
    const [realDistance, setRealDistance] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);

    const calculate = () => {
      const map = parseFloat(mapDistance);
      const scaleFactor = parseFloat(scale);
      
      if (!isNaN(map) && !isNaN(scaleFactor)) {
        const real = (map * scaleFactor) / 100000; // Convert to km
        setRealDistance(real.toFixed(2));
        setShowResult(true);
      }
    };

    return (
      <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-6 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Target className="mr-2" /> Scale Calculator
        </h3>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Map Distance (cm):</label>
            <input
              type="number"
              value={mapDistance}
              onChange={(e) => setMapDistance(e.target.value)}
              placeholder="Enter map distance..."
              className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Scale (1:):</label>
            <input
              type="number"
              value={scale}
              onChange={(e) => setScale(e.target.value)}
              placeholder="Enter scale..."
              className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
            />
          </div>
          
          <button
            onClick={calculate}
            disabled={!mapDistance || !scale}
            className="w-full bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
          >
            Calculate Real Distance
          </button>
        </div>
        
        {showResult && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="font-bold mb-2">Real Distance:</p>
            <p className="text-xl font-mono">{realDistance} km</p>
            <p className="text-sm mt-2">
              <MathJax>{`\\(${mapDistance}\\text{ cm on map} = ${realDistance}\\text{ km in reality}\\)`}</MathJax>
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderInteractive = (type: string) => {
    switch (type) {
      case 'number-classifier':
        return <NumberClassifier />;
      case 'rounding-game':
        return <RoundingGame />;
      case 'proportion-solver':
        return <ProportionSolver />;
      case 'standard-form-converter':
        return <StandardFormConverter />;
      case 'base-converter':
        return <BaseConverter />;
      case 'scale-calculator':
        return <ScaleCalculator />;
      default:
        return null;
    }
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 600);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCurrentView('quiz-complete');
    }
  };

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">📊</div>
          <h1 className="text-3xl font-bold text-white mb-2">ZIMSEC O-Level</h1>
          <h2 className="text-xl text-purple-200">Mathematics Interactive Guide</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-4">
            <p className="text-white/90 font-semibold">Topic 1: Real Numbers</p>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentSection(index);
                setCurrentView('study');
              }}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                completedSections.has(index) ? 'ring-2 ring-green-400' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{section.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{section.title}</h3>
                    <p className="text-purple-200 text-sm">Interactive learning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {completedSections.has(index) && (
                    <CheckCircle className="text-green-400 w-5 h-5" />
                  )}
                  <ChevronRight className="text-white/60" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentView('quiz')}
          className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Trophy className="w-5 h-5" />
          <span>Take Quiz Challenge!</span>
        </button>
      </div>
    </div>
  );

  const StudyView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentView('home')}
              className="text-white/60 hover:text-white transition-colors"
            >
              ← Back
            </button>
            <div className="text-2xl">{sections[currentSection].icon}</div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            {sections[currentSection].title}
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <MathJaxContext config={mathjaxConfig}>
              <MathJax>
                {sections[currentSection].content.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-white/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </MathJax>
            </MathJaxContext>
          </div>
        </div>

        <div className="mb-6">
          {renderInteractive(sections[currentSection].interactive)}
        </div>

        <button
          onClick={() => {
            setCompletedSections(new Set([...completedSections, currentSection]));
            setCurrentView('home');
          }}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Mark as Complete</span>
        </button>
      </div>
    </div>
  );

  const QuizView = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-orange-600 p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentView('home')}
              className="text-white/60 hover:text-white transition-colors"
            >
              ← Back
            </button>
            <div className="flex items-center space-x-2">
              <Star className={`w-6 h-6 ${animateScore ? 'animate-spin text-yellow-300' : 'text-white/60'}`} />
              <span className="text-white font-bold">Score: {quizScore}/{quizQuestions.length}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="bg-white/20 rounded-full h-2 mb-2">
              <div 
                className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                style={{width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`}}
              />
            </div>
            <p className="text-white/80 text-sm">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-6">
            <MathJax inline>{`\\(${quizQuestions[currentQuestion].question}\\)`}</MathJax>
          </h3>

          <div className="space-y-3 mb-6">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 text-left ${
                  showResult
                    ? index === quizQuestions[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white'
                      : 'bg-white/20 text-white/60'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                }`}
              >
                <MathJax inline>{`\\(${option}\\)`}</MathJax>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6">
              <div className="flex items-center mb-2">
                {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                  <CheckCircle className="text-green-400 w-6 h-6 mr-2" />
                ) : (
                  <XCircle className="text-red-400 w-6 h-6 mr-2" />
                )}
                <span className="text-white font-semibold">
                  {selectedAnswer === quizQuestions[currentQuestion].correct ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              <p className="text-white/90 text-sm">
                <MathJax inline>{`\\(${quizQuestions[currentQuestion].explanation}\\)`}</MathJax>
              </p>
            </div>
          )}

          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const QuizCompleteView = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-600 p-6">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-6xl mb-6 animate-bounce">
            {quizScore === quizQuestions.length ? '🏆' : quizScore >= quizQuestions.length / 2 ? '🎉' : '📚'}
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Quiz Complete!
          </h2>
          
          <div className="bg-white/20 rounded-xl p-6 mb-6">
            <p className="text-white/90 mb-2">Your Score:</p>
            <div className="text-4xl font-bold text-white">
              {quizScore}/{quizQuestions.length}
            </div>
            <p className="text-white/90 mt-2">
              {quizScore === quizQuestions.length ? 'Perfect!' :
               quizScore >= quizQuestions.length / 2 ? 'Well Done!' : 'Keep Learning!'}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setQuizScore(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setCurrentView('quiz');
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              Retake Quiz
            </button>
            
            <button
              onClick={() => setCurrentView('home')}
              className="w-full bg-white/20 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MathJaxContext config={mathjaxConfig}>
      <div className="font-sans">
        {currentView === 'home' && <HomeView />}
        {currentView === 'study' && <StudyView />}
        {currentView === 'quiz' && <QuizView />}
        {currentView === 'quiz-complete' && <QuizCompleteView />}
      </div>
    </MathJaxContext>
  );
};

export default ZimsecOMathTopic1;
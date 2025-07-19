/* eslint-disable */
import React, { useState, useEffect, ReactNode } from 'react';
import { RefreshCw, Eye, EyeOff, Check, X, Plus, Minus, HelpCircle } from 'lucide-react';

interface ShapeComponent {
  id: string;
  type: 'rectangle' | 'square' | 'triangle' | 'circle' | 'semicircle';
  name: string;
  dimensions: { [key: string]: number };
  operation: 'add' | 'subtract';
  area: number;
  color: string;
}

interface CombinedShape {
  id: string;
  name: string;
  description: string;
  components: ShapeComponent[];
  totalArea: number;
  totalPerimeter: number;
}

const CombinedShapesCalculator: React.FC = () => {
  const [currentShape, setCurrentShape] = useState<CombinedShape | null>(null);
  const [mode, setMode] = useState<'area' | 'perimeter'>('area');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [, setCurrentStep] = useState<number>(0);

  const calculateComponentArea = (component: ShapeComponent): number => {
    const { type, dimensions } = component;
    switch (type) {
      case 'rectangle':
        return dimensions.length * dimensions.width;
      case 'square':
        return dimensions.side * dimensions.side;
      case 'triangle':
        return 0.5 * dimensions.base * dimensions.height;
      case 'circle':
        return Math.PI * dimensions.radius * dimensions.radius;
      case 'semicircle':
        return 0.5 * Math.PI * dimensions.radius * dimensions.radius;
      default:
        return 0;
    }
  };

  const shapeTemplates: CombinedShape[] = [
    {
      id: 'rect_semicircle',
      name: 'Rectangle with Semicircle',
      description: 'A rectangle with a semicircle attached to one side',
      components: [
        {
          id: 'rect1',
          type: 'rectangle',
          name: 'Rectangle',
          dimensions: { length: 8, width: 5 },
          operation: 'add',
          area: 40,
          color: '#3B82F6'
        },
        {
          id: 'semi1',
          type: 'semicircle',
          name: 'Semicircle',
          dimensions: { radius: 2.5 },
          operation: 'add',
          area: 9.82,
          color: '#EF4444'
        }
      ],
      totalArea: 49.82,
      totalPerimeter: 31.85
    },
    {
      id: 'rect_triangle',
      name: 'Rectangle with Triangle',
      description: 'A rectangle with a triangle on top',
      components: [
        {
          id: 'rect2',
          type: 'rectangle',
          name: 'Rectangle',
          dimensions: { length: 10, width: 6 },
          operation: 'add',
          area: 60,
          color: '#3B82F6'
        },
        {
          id: 'tri1',
          type: 'triangle',
          name: 'Triangle',
          dimensions: { base: 10, height: 4 },
          operation: 'add',
          area: 20,
          color: '#10B981'
        }
      ],
      totalArea: 80,
      totalPerimeter: 36
    },
    // {
    //   id: 'l_shape',
    //   name: 'L-Shape',
    //   description: 'An L-shaped figure made from two rectangles',
    //   components: [
    //     {
    //       id: 'rect3',
    //       type: 'rectangle',
    //       name: 'Rectangle 1',
    //       dimensions: { length: 8, width: 3 },
    //       operation: 'add',
    //       area: 24,
    //       color: '#3B82F6'
    //     },
    //     {
    //       id: 'rect4',
    //       type: 'rectangle',
    //       name: 'Rectangle 2',
    //       dimensions: { length: 4, width: 5 },
    //       operation: 'add',
    //       area: 20,
    //       color: '#8B5CF6'
    //     }
    //   ],
    //   totalArea: 44,
    //   totalPerimeter: 30
    // },
    {
      id: 'circle_cutout',
      name: 'Rectangle with Circle Cutout',
      description: 'A rectangle with a circular hole cut out',
      components: [
        {
          id: 'rect5',
          type: 'rectangle',
          name: 'Rectangle',
          dimensions: { length: 12, width: 8 },
          operation: 'add',
          area: 96,
          color: '#3B82F6'
        },
        {
          id: 'circle1',
          type: 'circle',
          name: 'Circle (cutout)',
          dimensions: { radius: 2 },
          operation: 'subtract',
          area: 12.57,
          color: '#EF4444'
        }
      ],
      totalArea: 83.43,
      totalPerimeter: 52.57
    }
  ];

  // const ShapeSVG = ({ shape }: { shape: CombinedShape }) => {
  //   switch (shape.id) {
  //     case 'rect_semicircle': {
  //       const rect = shape.components.find(c => c.id === 'rect1');
  //       const semi = shape.components.find(c => c.id === 'semi1');
  //       const rectWidth = rect?.dimensions.width || 5;
  //       const rectLength = rect?.dimensions.length || 8;
  //       const semiRadius = semi?.dimensions.radius || 2.5;
        
  //       return (
  //         <svg viewBox="0 0 200 140" width="100%" height="180">
  //           <rect 
  //             x="40" y="40" 
  //             width={rectLength * 10} 
  //             height={rectWidth * 10} 
  //             fill="#BFDBFE" 
  //             stroke="#3B82F6" 
  //             strokeWidth="2"
  //           />
  //           <path 
  //             d={`M 40 ${40 + rectWidth * 10} A ${semiRadius * 10} ${semiRadius * 10} 0 0 0 ${40 + rectLength * 10} ${40 + rectWidth * 10}`} 
  //             fill="#FCA5A5" 
  //             stroke="#EF4444" 
  //             strokeWidth="2"
  //           />
  //           <text 
  //             x={40 + rectLength * 5} 
  //             y={40 + rectWidth * 5} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold"
  //             fill="#1E3A8A"
  //           >
  //             {rectLength} cm
  //           </text>
  //           <text 
  //             x="25" 
  //             y={40 + rectWidth * 5} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold" 
  //             transform="rotate(-90 25 90)"
  //             fill="#1E3A8A"
  //           >
  //             {rectWidth} cm
  //           </text>
  //           <text 
  //             x={40 + rectLength * 5} 
  //             y={40 + rectWidth * 10 + 15} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold"
  //             fill="#B91C1C"
  //           >
  //             r={semiRadius}
  //           </text>
  //         </svg>
  //       );
  //     }
      
  //     case 'rect_triangle': {
  //       const rect = shape.components.find(c => c.id === 'rect2');
  //       const tri = shape.components.find(c => c.id === 'tri1');
  //       const rectWidth = rect?.dimensions.width || 6;
  //       const rectLength = rect?.dimensions.length || 10;
  //       const triHeight = tri?.dimensions.height || 4;
        
  //       return (
  //         <svg viewBox="0 0 200 140" width="100%" height="180">
  //           <rect 
  //             x="50" y="40" 
  //             width={rectLength * 10} 
  //             height={rectWidth * 10} 
  //             fill="#BFDBFE" 
  //             stroke="#3B82F6" 
  //             strokeWidth="2"
  //           />
  //           <polygon 
  //             points={`50,40 ${50 + rectLength * 5},${40 - triHeight * 10} ${50 + rectLength * 10},40`} 
  //             fill="#A7F3D0" 
  //             stroke="#10B981" 
  //             strokeWidth="2"
  //           />
  //           <text 
  //             x={50 + rectLength * 5} 
  //             y={40 + rectWidth * 5} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold"
  //             fill="#1E3A8A"
  //           >
  //             {rectLength} cm
  //           </text>
  //           <text 
  //             x="30" 
  //             y={40 + rectWidth * 5} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold" 
  //             transform="rotate(-90 30 90)"
  //             fill="#1E3A8A"
  //           >
  //             {rectWidth} cm
  //           </text>
  //           <text 
  //             x={50 + rectLength * 5} 
  //             y={40 - triHeight * 5} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold"
  //             fill="#047857"
  //           >
  //             h={triHeight}
  //           </text>
  //         </svg>
  //       );
  //     }
      
  //     // case 'l_shape': {
  //     //   const rect1 = shape.components.find(c => c.id === 'rect3');
  //     //   const rect2 = shape.components.find(c => c.id === 'rect4');
  //     //   const rect1Width = rect1?.dimensions.width || 3;
  //     //   const rect1Length = rect1?.dimensions.length || 8;
  //     //   const rect2Width = rect2?.dimensions.width || 5;
  //     //   const rect2Length = rect2?.dimensions.length || 4;
        
  //     //   return (
  //     //     <svg viewBox="0 0 200 140" width="100%" height="180">
  //     //       <rect 
  //     //         x="40" y="40" 
  //     //         width={rect1Length * 10} 
  //     //         height={rect1Width * 10} 
  //     //         fill="#BFDBFE" 
  //     //         stroke="#3B82F6" 
  //     //         strokeWidth="2"
  //     //       />
  //     //       <rect 
  //     //         x="40" y={40 + rect1Width * 10} 
  //     //         width={rect2Length * 10} 
  //     //         height={rect2Width * 10} 
  //     //         fill="#C4B5FD" 
  //     //         stroke="#8B5CF6" 
  //     //         strokeWidth="2"
  //     //       />
  //     //       <text 
  //     //         x={40 + rect1Length * 5} 
  //     //         y={40 + rect1Width * 5} 
  //     //         textAnchor="middle" 
  //     //         fontSize="12" 
  //     //         fontWeight="bold"
  //     //         fill="#1E3A8A"
  //     //       >
  //     //         {rect1Length} cm
  //     //       </text>
  //     //       <text 
  //     //         x="25" 
  //     //         y={40 + rect1Width * 5} 
  //     //         textAnchor="middle" 
  //     //         fontSize="12" 
  //     //         fontWeight="bold" 
  //     //         transform="rotate(-90 25 70)"
  //     //         fill="#1E3A8A"
  //     //       >
  //     //         {rect1Width} cm
  //     //       </text>
  //     //       <text 
  //     //         x={40 + rect2Length * 5} 
  //     //         y={40 + rect1Width * 10 + rect2Width * 5} 
  //     //         textAnchor="middle" 
  //     //         fontSize="12" 
  //     //         fontWeight="bold"
  //     //         fill="#5B21B6"
  //     //       >
  //     //         {rect2Length} cm
  //     //       </text>
  //     //       <text 
  //     //         x="70" 
  //     //         y={40 + rect1Width * 10 + rect2Width * 5} 
  //     //         textAnchor="middle" 
  //     //         fontSize="12" 
  //     //         fontWeight="bold" 
  //     //         transform="rotate(-90 70 110)"
  //     //         fill="#5B21B6"
  //     //       >
  //     //         {rect2Width} cm
  //     //       </text>
  //     //     </svg>
  //     //   );
  //     // }
      
  //     case 'circle_cutout': {
  //       const rect = shape.components.find(c => c.id === 'rect5');
  //       const circle = shape.components.find(c => c.id === 'circle1');
  //       const rectWidth = rect?.dimensions.width || 8;
  //       const rectLength = rect?.dimensions.length || 12;
  //       const circleRadius = circle?.dimensions.radius || 2;
        
  //       return (
  //         <svg viewBox="0 0 200 140" width="100%" height="180">
  //           <rect 
  //             x="40" y="40" 
  //             width={rectLength * 10} 
  //             height={rectWidth * 10} 
  //             fill="#BFDBFE" 
  //             stroke="#3B82F6" 
  //             strokeWidth="2"
  //           />
  //           <circle 
  //             cx={40 + rectLength * 5} 
  //             cy={40 + rectWidth * 5} 
  //             r={circleRadius * 10} 
  //             fill="white" 
  //             stroke="#EF4444" 
  //             strokeWidth="2" 
  //             strokeDasharray="3,3"
  //           />
  //           <text 
  //             x={40 + rectLength * 5} 
  //             y={40 + rectWidth * 10 + 15} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold"
  //             fill="#1E3A8A"
  //           >
  //             {rectLength} cm
  //           </text>
  //           <text 
  //             x="25" 
  //             y={40 + rectWidth * 5} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold" 
  //             transform="rotate(-90 25 90)"
  //             fill="#1E3A8A"
  //           >
  //             {rectWidth} cm
  //           </text>
  //           <text 
  //             x={40 + rectLength * 5} 
  //             y={40 + rectWidth * 5 + circleRadius * 10 + 15} 
  //             textAnchor="middle" 
  //             fontSize="12" 
  //             fontWeight="bold"
  //             fill="#B91C1C"
  //           >
  //             r={circleRadius}
  //           </text>
  //         </svg>
  //       );
  //     }
      
  //     default:
  //       return null;
  //   }
  // };


  const ShapeSVG = ({ shape }: { shape: CombinedShape }) => {
  switch (shape.id) {
    case 'rect_semicircle': {
      const rect = shape.components.find(c => c.id === 'rect1');
      const semi = shape.components.find(c => c.id === 'semi1');
      const rectWidth = rect?.dimensions.width || 5;
      const rectLength = rect?.dimensions.length || 8;
      const semiRadius = semi?.dimensions.radius || 2.5;
      
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 200 140" width="100%" height="180">
            <rect 
              x="40" y="40" 
              width={rectLength * 10} 
              height={rectWidth * 10} 
              fill="#BFDBFE" 
              stroke="#3B82F6" 
              strokeWidth="2"
            />
            <path 
              d={`M 40 ${40 + rectWidth * 10} A ${semiRadius * 10} ${semiRadius * 10} 0 0 0 ${40 + rectLength * 10} ${40 + rectWidth * 10}`} 
              fill="#FCA5A5" 
              stroke="#EF4444" 
              strokeWidth="2"
            />
          </svg>
          <div className="mt-2 text-sm text-center space-y-1">
            <div>Rectangle: {rectLength}cm × {rectWidth}cm</div>
            <div>Semicircle: r = {semiRadius}cm</div>
          </div>
        </div>
      );
    }
    
    case 'rect_triangle': {
      const rect = shape.components.find(c => c.id === 'rect2');
      const tri = shape.components.find(c => c.id === 'tri1');
      const rectWidth = rect?.dimensions.width || 6;
      const rectLength = rect?.dimensions.length || 10;
      const triHeight = tri?.dimensions.height || 4;
      const triBase = tri?.dimensions.base || 10;
      
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 200 140" width="100%" height="180">
            <rect 
              x="50" y="40" 
              width={rectLength * 10} 
              height={rectWidth * 10} 
              fill="#BFDBFE" 
              stroke="#3B82F6" 
              strokeWidth="2"
            />
            <polygon 
              points={`50,40 ${50 + rectLength * 5},${40 - triHeight * 10} ${50 + rectLength * 10},40`} 
              fill="#A7F3D0" 
              stroke="#10B981" 
              strokeWidth="2"
            />
          </svg>
          <div className="mt-2 text-sm text-center space-y-1">
            <div>Rectangle: {rectLength}cm × {rectWidth}cm</div>
            <div>Triangle: base = {triBase}cm, height = {triHeight}cm</div>
          </div>
        </div>
      );
    }
    
    case 'circle_cutout': {
      const rect = shape.components.find(c => c.id === 'rect5');
      const circle = shape.components.find(c => c.id === 'circle1');
      const rectWidth = rect?.dimensions.width || 8;
      const rectLength = rect?.dimensions.length || 12;
      const circleRadius = circle?.dimensions.radius || 2;
      
      return (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 200 140" width="100%" height="180">
            <rect 
              x="40" y="40" 
              width={rectLength * 10} 
              height={rectWidth * 10} 
              fill="#BFDBFE" 
              stroke="#3B82F6" 
              strokeWidth="2"
            />
            <circle 
              cx={40 + rectLength * 5} 
              cy={40 + rectWidth * 5} 
              r={circleRadius * 10} 
              fill="white" 
              stroke="#EF4444" 
              strokeWidth="2" 
              strokeDasharray="3,3"
            />
          </svg>
          <div className="mt-2 text-sm text-center space-y-1">
            <div>Rectangle: {rectLength}cm × {rectWidth}cm</div>
            <div>Circle (cutout): r = {circleRadius}cm</div>
          </div>
        </div>
      );
    }
    
    default:
      return null;
  }
};

  const generateNewShape = (): void => {
    const randomIndex = Math.floor(Math.random() * shapeTemplates.length);
    const template = shapeTemplates[randomIndex];
    
    // Create variations in dimensions
    const newShape: CombinedShape = {
      ...template,
      components: template.components.map(comp => {
        const newDimensions = { ...comp.dimensions };
        const variation = 0.7 + Math.random() * 0.6; // 0.7 to 1.3 multiplier
        
        Object.keys(newDimensions).forEach(key => {
          newDimensions[key] = Math.round(newDimensions[key] * variation * 10) / 10;
        });
        
        const newArea = calculateComponentArea({ ...comp, dimensions: newDimensions });
        
        return {
          ...comp,
          dimensions: newDimensions,
          area: Math.round(newArea * 100) / 100
        };
      })
    };
    
    // Recalculate totals
    newShape.totalArea = Math.round(
      newShape.components.reduce((sum, comp) => 
        comp.operation === 'add' ? sum + comp.area : sum - comp.area, 0
      ) * 100
    ) / 100;
    
    setCurrentShape(newShape);
    setUserAnswer('');
    setShowHint(false);
    setShowBreakdown(false);
    setFeedback('');
    setIsCorrect(null);
    setCurrentStep(0);
  };

  const checkAnswer = (): void => {
    if (!currentShape || !userAnswer.trim()) return;

    const userValue = parseFloat(userAnswer);
    const correctValue = mode === 'area' ? currentShape.totalArea : currentShape.totalPerimeter;
    const tolerance = 0.5;
    const correct = Math.abs(userValue - correctValue) <= tolerance;

    setIsCorrect(correct);
    setAttempts(attempts + 1);
    
    if (correct) {
      setScore(score + 1);
      setFeedback('Correct! Well done!');
    } else {
      setFeedback(`Incorrect. The correct answer is ${correctValue} ${mode === 'area' ? 'cm²' : 'cm'}`);
    }
  };

  const renderStepByStep = (): JSX.Element => {
    if (!currentShape || !showBreakdown) return <></>;

    return (
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg space-y-3">
        <h3 className="font-semibold text-yellow-800 flex items-center gap-2">
          <HelpCircle size={16} />
          Step-by-Step Breakdown
        </h3>
        
        {currentShape.components.map((component) => (
          <div key={component.id} className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {component.operation === 'add' ? 
                <Plus size={16} className="text-green-600" /> : 
                <Minus size={16} className="text-red-600" />
              }
              <span className="font-medium">{component.name}:</span>
            </div>
            
            {/* <div className="text-gray-700">
              {component.type === 'rectangle' && 
                `${component.dimensions.length} × ${component.dimensions.width} = ${component.area} cm²`
              }
              {component.type === 'triangle' && 
                `½ × ${component.dimensions.base} × ${component.dimensions.height} = ${component.area} cm²`
              }
              {component.type === 'circle' && 
                `π × ${component.dimensions.radius}² = ${component.area} cm²`
              }
              {component.type === 'semicircle' && 
                `½ × π × ${component.dimensions.radius}² = ${component.area} cm²`
              }
            </div> */}

<div className="text-gray-700">
  {mode === 'area' ? (
    <>
      {component.type === 'rectangle' && 
        `${component.dimensions.length} × ${component.dimensions.width} = ${component.area} cm²`}
      {component.type === 'triangle' && 
        `½ × ${component.dimensions.base} × ${component.dimensions.height} = ${component.area} cm²`}
      {component.type === 'circle' && 
        `π × ${component.dimensions.radius}² = ${component.area} cm²`}
      {component.type === 'semicircle' && 
        `½ × π × ${component.dimensions.radius}² = ${component.area} cm²`}
    </>
  ) : (
    <>
      {component.type === 'rectangle' &&
        `2 × (${component.dimensions.length} + ${component.dimensions.width}) = ${
          2 * (component.dimensions.length + component.dimensions.width)
        } cm`}
      {component.type === 'triangle' && 
        `Use Pythagoras or given sides`}
      {component.type === 'circle' && 
        `2π × ${component.dimensions.radius} = ${(2 * Math.PI * component.dimensions.radius).toFixed(2)} cm`}
      {component.type === 'semicircle' && 
        `π × ${component.dimensions.radius} + ${component.dimensions.radius * 2} = ${(
          Math.PI * component.dimensions.radius + component.dimensions.radius * 2
        ).toFixed(2)} cm`}
    </>
  )}
</div>

          </div>
        ))}
        
        <div className="border-t pt-2 font-semibold text-gray-800">
          Total {mode}: {mode === 'area' ? currentShape.totalArea : currentShape.totalPerimeter} {mode === 'area' ? 'cm²' : 'cm'}
        </div>
      </div>
    );
  };

  useEffect(() => {
    generateNewShape();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-3 bg-[#BEE4D0] rounded-xl">
      <div className="text-center mb-6">
   
        <h1 className="text-xl font-bold text-gray-800 mb-2">Combined Shapes Calculator</h1>
        <div className="text-sm text-gray-600 mb-4">
          Score: {score}/{attempts} {attempts > 0 && `(${Math.round((score/attempts) * 100)}%)`}
        </div>
        
        {/* Mode Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button
            onClick={() => setMode('area')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              mode === 'area' 
                ? 'bg-[#6F826A] text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Area
          </button>
          <button
            onClick={() => setMode('perimeter')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              mode === 'perimeter' 
                ? 'bg-[#6F826A] text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Perimeter
          </button>
        </div>
      </div>

      {currentShape && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
              Calculate the {mode} of this combined shape:
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              {currentShape.description}
            </p>
            
            {/* Shape Visualization */}
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200 w-full max-w-md">
                <ShapeSVG shape={currentShape} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Your answer ({mode === 'area' ? 'cm²' : 'cm'}):
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition-colors"
                >
                  <HelpCircle size={16} />
                  {showBreakdown ? 'Hide' : 'Show'} Steps
                </button>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                >
                  {showHint ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showHint ? 'Hide' : 'Show'} Hint
                </button>
              </div>
            </div>

            {showHint && (
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                <p className="text-sm text-blue-800 font-medium">
                  {mode === 'area' ? (
                    <>
                      <strong>Area Strategy:</strong><br />
                      1. Calculate each shape's area separately<br />
                      2. Add areas for attached shapes<br />
                      3. Subtract areas for cutouts/holes
                    </>
                  ) : (
                    <>
                      <strong>Perimeter Strategy:</strong><br />
                      1. Follow the outer boundary only<br />
                      2. Don't include internal edges<br />
                      3. Add all outer edge lengths
                    </>
                  )}
                </p>
              </div>
            )}

            {renderStepByStep() as ReactNode}

            <div className="flex gap-2">
              <input
                type="number"
                step="0.01"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="flex-1 bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your answer..."
              />
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Check size={20} />
              </button>
            </div>

            {feedback && (
              <div className={`p-3 rounded-md flex items-center gap-2 ${
                isCorrect 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {isCorrect ? <Check size={16} /> : <X size={16} />}
                {feedback}
              </div>
            )}

            <button
              onClick={generateNewShape}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <RefreshCw size={20} />
              New Shape
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedShapesCalculator;
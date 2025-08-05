import React, { useState, useEffect } from 'react';

// --- Neubrutalism Styles & Colors (Reused from inspiration) ---
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653', // Darkest color - Text, borders, background
  secondary: '#2a9d8f',   // Teal - Correct, accents, active elements
  neutral: '#e9c46a',     // Sand yellow - Highlights, explanations
  warning: '#f4a261',     // Orange - Warnings, some highlights
  danger: '#e76f51',      // Salmon - Danger, resets, highlights
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(38, 70, 83, 0.2)', // primaryDark with opacity
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: '1rem',
};

const getButtonStyle = (isActive: boolean) => ({
  ...neubrutalismBase,
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  backgroundColor: isActive ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.lightGray,
  color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark,
  borderColor: NEUBRUTALISM_COLORS.primaryDark,
  cursor: 'pointer',
  transition: 'all 0.2s',
  ...(!isActive && {
    ':hover': {
      backgroundColor: NEUBRUTALISM_COLORS.neutral,
    }
  })
});

const getInfoBoxStyle = () => ({
  ...neubrutalismBase,
  backgroundColor: NEUBRUTALISM_COLORS.lightGray,
  borderColor: NEUBRUTALISM_COLORS.primaryDark,
  padding: '0.75rem',
  width: '100%',
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: NEUBRUTALISM_COLORS.primaryDark,
});
// --- End Neubrutalism Styles ---


// --- SVG Construction Illustration Components ---

// 1. Triangle SSS (Side-Side-Side) Construction
const TriangleSssConstruction: React.FC<{ step: number }> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 100, y: 200 };
    const pointB = { x: 300, y: 200 };
    const sideB_len = 150; // aC
    const sideA_len = 180; // bC
    
    // Using circle intersection formula to find point C
    const d = Math.sqrt((pointB.x - pointA.x)**2 + (pointB.y - pointA.y)**2);
    const a = (sideB_len**2 - sideA_len**2 + d**2) / (2*d);
    const h = Math.sqrt(sideB_len**2 - a**2);
    const p2 = { x: pointA.x + a * (pointB.x - pointA.x) / d, y: pointA.y + a * (pointB.y - pointA.y) / d };
    const pointC = { x: p2.x - h * (pointB.y - pointA.y) / d, y: p2.y + h * (pointB.x - pointA.x) / d };

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
            {step >= 1 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointB.x} y2={pointB.y} stroke="#94a3b8" strokeWidth="2" />
                    <text x={pointA.x - 15} y={pointA.y + 5} className="text-sm fill-gray-700">A</text>
                    <text x={pointB.x + 5} y={pointB.y + 5} className="text-sm fill-gray-700">B</text>
                </>
            )}
            {step >= 2 && (
                <circle cx={pointA.x} cy={pointA.y} r={sideB_len} fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
            {step >= 3 && (
                <circle cx={pointB.x} cy={pointB.y} r={sideA_len} fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
            {step >= 3 && (
                <>
                    <circle cx={pointC.x} cy={pointC.y} r="4" fill="#8b5cf6" />
                    <text x={pointC.x} y={pointC.y - 10} className="text-sm fill-gray-700">C</text>
                </>
            )}
            {step >= 4 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                    <line x1={pointB.x} y1={pointB.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                </>
            )}
        </svg>
    );
};

// 2. Triangle SAS (Side-Angle-Side) Construction
const TriangleSasConstruction: React.FC<{ step: number }> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 100, y: 200 };
    const angle = -45 * Math.PI / 180; // Angle in radians
    const sideC_len = 200; // side AB
    const sideB_len = 160; // side AC
    const pointB = { x: pointA.x + sideC_len, y: pointA.y };
    const pointC = { x: pointA.x + sideB_len * Math.cos(angle), y: pointA.y + sideB_len * Math.sin(angle) };

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
            {step >= 1 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointB.x} y2={pointB.y} stroke="#94a3b8" strokeWidth="2" />
                    <text x={pointA.x - 15} y={pointA.y + 5} className="text-sm fill-gray-700">A</text>
                    <text x={pointB.x + 5} y={pointB.y + 5} className="text-sm fill-gray-700">B</text>
                </>
            )}
            {step >= 2 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointA.x + 220 * Math.cos(angle)} y2={pointA.y + 220 * Math.sin(angle)} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
                    <path d={`M ${pointA.x + 30} ${pointA.y} A 30 30 0 0 1 ${pointA.x + 30 * Math.cos(angle)} ${pointA.y + 30 * Math.sin(angle)}`} fill="none" stroke="#ef4444" strokeWidth="1" />
                    <text x={pointA.x + 35} y={pointA.y - 15} className="text-xs fill-red-500">45°</text>
                </>
            )}
            {step >= 3 && (
                <>
                    <circle cx={pointC.x} cy={pointC.y} r="4" fill="#8b5cf6" />
                    <text x={pointC.x + 5} y={pointC.y - 5} className="text-sm fill-gray-700">C</text>
                </>
            )}
            {step >= 4 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                    <line x1={pointB.x} y1={pointB.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                </>
            )}
        </svg>
    );
};

// 3. Rectangle Construction
const RectangleConstruction: React.FC<{ step: number }> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 80, y: 200 };
    const length = 240;
    const rectWidth = 120;
    const pointB = { x: pointA.x + length, y: pointA.y };
    const pointD = { x: pointA.x, y: pointA.y - rectWidth };
    const pointC = { x: pointB.x, y: pointB.y - rectWidth };

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
            {step >= 1 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointB.x} y2={pointB.y} stroke="#94a3b8" strokeWidth="2" />
                    <text x={pointA.x - 15} y={pointA.y + 5} className="text-sm fill-gray-700">A</text>
                    <text x={pointB.x + 5} y={pointB.y + 5} className="text-sm fill-gray-700">B</text>
                </>
            )}
            {step >= 2 && (
                <line x1={pointA.x} y1={pointA.y} x2={pointA.x} y2={50} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
            {step >= 3 && (
                <line x1={pointB.x} y1={pointB.y} x2={pointB.x} y2={50} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
             {step >= 4 && (
                <>
                    <circle cx={pointD.x} cy={pointD.y} r="4" fill="#8b5cf6" />
                    <text x={pointD.x - 15} y={pointD.y - 5} className="text-sm fill-gray-700">D</text>
                </>
            )}
            {step >= 5 && (
                 <>
                    <line x1={pointD.x} y1={pointD.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                    <line x1={pointA.x} y1={pointA.y} x2={pointD.x} y2={pointD.y} stroke="#3b82f6" strokeWidth="2" />
                    <line x1={pointB.x} y1={pointB.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                    <text x={pointC.x + 5} y={pointC.y - 5} className="text-sm fill-gray-700">C</text>
                </>
            )}
        </svg>
    );
};

// 4. Square Construction (using arcs for compass style)
const SquareConstruction: React.FC<{ step: number }> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 125, y: 200 };
    const side = 150;
    const pointB = { x: pointA.x + side, y: pointA.y };
    const pointD = { x: pointA.x, y: pointA.y - side };
    const pointC = { x: pointB.x, y: pointB.y - side };

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
            {step >= 1 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointB.x} y2={pointB.y} stroke="#94a3b8" strokeWidth="2" />
                    <text x={pointA.x - 15} y={pointA.y + 5} className="text-sm fill-gray-700">A</text>
                    <text x={pointB.x + 5} y={pointB.y + 5} className="text-sm fill-gray-700">B</text>
                </>
            )}
            {step >= 2 && (
                <line x1={pointA.x} y1={pointA.y} x2={pointD.x} y2={pointD.y} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
            {step >= 2 && (
                 <>
                    <circle cx={pointD.x} cy={pointD.y} r="4" fill="#ef4444" />
                    <text x={pointD.x - 15} y={pointD.y - 5} className="text-sm fill-gray-700">D</text>
                 </>
            )}
            {step >= 3 && (
                <circle cx={pointD.x} cy={pointD.y} r={side} fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
            {step >= 4 && (
                <circle cx={pointB.x} cy={pointB.y} r={side} fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
             {step >= 4 && (
                <>
                    <circle cx={pointC.x} cy={pointC.y} r="4" fill="#8b5cf6" />
                    <text x={pointC.x + 5} y={pointC.y - 5} className="text-sm fill-gray-700">C</text>
                </>
            )}
            {step >= 5 && (
                <>
                    <line x1={pointA.x} y1={pointA.y} x2={pointD.x} y2={pointD.y} stroke="#3b82f6" strokeWidth="2" />
                    <line x1={pointD.x} y1={pointD.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                    <line x1={pointB.x} y1={pointB.y} x2={pointC.x} y2={pointC.y} stroke="#3b82f6" strokeWidth="2" />
                </>
            )}
        </svg>
    );
};

// --- Main Component ---
const ShapeConstructions = () => {
    type ConstructionType = 'sss' | 'sas' | 'rectangle' | 'square';
    const [activeConstruction, setActiveConstruction] = useState<ConstructionType>('sss');
    const [animationStep, setAnimationStep] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    
    // Auto-play logic
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setAnimationStep(prev => {
                    const maxSteps = constructionData[activeConstruction].maxSteps;
                    if (prev >= maxSteps) {
                        setIsPlaying(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1500);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, activeConstruction]);

    // Reset step when construction changes
    useEffect(() => {
        setAnimationStep(0);
        setIsPlaying(false);
    }, [activeConstruction]);

    // Construction data object
    const constructionData: Record<ConstructionType, { 
        name: string; 
        maxSteps: number; 
        description: string; 
        getSteps: (step: number) => string;
        IllustrationComponent: React.FC<{ step: number }>;
    }> = {
        sss: {
            name: "Triangle (SSS)",
            maxSteps: 4,
            description: "Construct a triangle given the lengths of all three sides.",
            getSteps: (step) => [
                "Draw the base side AB.",
                "From point A, draw an arc with the radius of the second side.",
                "From point B, draw an arc with the radius of the third side to intersect the first arc at C.",
                "Connect points A to C and B to C to complete the triangle."
            ][step - 1] || "Start with the longest side as the base.",
            IllustrationComponent: TriangleSssConstruction,
        },
        sas: {
            name: "Triangle (SAS)",
            maxSteps: 4,
            description: "Construct a triangle given two sides and the included angle.",
            getSteps: (step) => [
                "Draw the first side AB.",
                "Construct the given angle (e.g., 45°) at point A.",
                "Mark the length of the second side on the angle line to find point C.",
                "Join C and B to complete the triangle."
            ][step - 1] || "Start by drawing one of the given sides.",
            IllustrationComponent: TriangleSasConstruction,
        },
        rectangle: {
            name: "Rectangle",
            maxSteps: 5,
            description: "Construct a rectangle given its length and width.",
            getSteps: (step) => [
                "Draw the base AB (length).",
                "Construct a perpendicular line at point A.",
                "Construct a perpendicular line at point B.",
                "Mark the width from A to find point D.",
                "Join D to C (which is at the same width from B) to complete the rectangle."
            ][step - 1] || "Start by drawing the length as a base.",
            IllustrationComponent: RectangleConstruction,
        },
        square: {
            name: "Square",
            maxSteps: 5,
            description: "Construct a square given the length of one side.",
            getSteps: (step) => [
                "Draw the base side AB.",
                "Construct a perpendicular line at A and mark point D where AD = AB.",
                "From D, draw an arc with radius AB.",
                "From B, draw another arc with radius AB, intersecting the previous arc at C.",
                "Connect DC and BC to complete the square."
            ][step - 1] || "A square is a special rectangle where all sides are equal.",
            IllustrationComponent: SquareConstruction,
        }
    };

    const currentConstruction = constructionData[activeConstruction];
    const maxStepsForCurrent = currentConstruction.maxSteps;
    const IllustrationComponent = currentConstruction.IllustrationComponent;

    const handleNext = () => {
        if (animationStep < maxStepsForCurrent) setAnimationStep(p => p + 1);
    };

    const handlePrev = () => {
        if (animationStep > 0) setAnimationStep(p => p - 1);
    };

    const togglePlay = () => {
        if (animationStep >= maxStepsForCurrent) {
            setAnimationStep(0);
            setIsPlaying(true);
        } else {
            setIsPlaying(!isPlaying);
        }
    };
    
    return (
        <div style={{...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: NEUBRUTALISM_COLORS.secondary, borderColor: NEUBRUTALISM_COLORS.primaryDark, color: NEUBRUTALISM_COLORS.primaryDark, borderRadius: '20px', boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`}}>
            <div className="mb-4 mt-3 text-white">
                <h2 className="text-xl font-bold mb-1 text-center">Triangle & Quadrilateral Constructions</h2>
                <p className="text-sm text-center">Visual guide for constructing common shapes.</p>
            </div>

            <div className="flex flex-col gap-4">
                {/* Construction Selector */}
                <div style={{...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.lightGray, borderColor: NEUBRUTALISM_COLORS.primaryDark, padding: '1rem'}}>
                    <div className="flex flex-wrap justify-center gap-2">
                        {(Object.keys(constructionData) as ConstructionType[]).map((type) => (
                            <button key={type} onClick={() => setActiveConstruction(type)} style={getButtonStyle(activeConstruction === type)}>
                                {constructionData[type].name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Construction Visualization */}
                <div style={{...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, borderColor: NEUBRUTALISM_COLORS.primaryDark, padding: '1rem'}}>
                    <h3 className="text-base font-bold mb-2 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>{currentConstruction.name}</h3>
                    <p className="text-sm mb-3 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>{currentConstruction.description}</p>
                    
                    <div className="flex justify-center mb-4">
                        <IllustrationComponent step={animationStep} />
                    </div>

                    {/* Controls */}
                    <div className="flex justify-between items-center mb-3">
                        <button onClick={handlePrev} disabled={animationStep === 0} style={getButtonStyle(false)}>Previous</button>
                        <button onClick={togglePlay} style={{...getButtonStyle(false), backgroundColor: isPlaying ? NEUBRUTALISM_COLORS.warning : NEUBRUTALISM_COLORS.lightGray}}>{isPlaying ? 'Pause' : (animationStep >= maxStepsForCurrent ? 'Replay' : 'Play')}</button>
                        <button onClick={handleNext} disabled={animationStep === maxStepsForCurrent} style={getButtonStyle(false)}>Next</button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4" style={{border: `2px solid ${NEUBRUTALISM_COLORS.primaryDark}`}}>
                        <div className="h-1.5 rounded-full" style={{ width: `${(animationStep / maxStepsForCurrent) * 100}%`, backgroundColor: NEUBRUTALISM_COLORS.secondary }}></div>
                    </div>

                    {/* Step Description */}
                    <div style={getInfoBoxStyle()}>
                        <p style={{ color: NEUBRUTALISM_COLORS.primaryDark, textAlign: 'center' }}>
                            <span className="font-bold">Step {animationStep}:</span> {currentConstruction.getSteps(animationStep) || currentConstruction.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShapeConstructions;
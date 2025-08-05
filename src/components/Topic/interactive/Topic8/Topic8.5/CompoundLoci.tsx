import React, { useState, useEffect } from 'react';

// --- Neubrutalism Styles & Colors (Reused) ---
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653',
  secondary: '#2a9d8f',
  neutral: '#e9c46a',
  warning: '#f4a261',
  danger: '#e76f51',
  white: '#ffffff',
  lightGray: '#f0f0f0',
  shadowGray: 'rgba(38, 70, 83, 0.2)',
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

const getInfoBoxStyle = (variant: 'info' | 'description' = 'info') => ({
  ...neubrutalismBase,
  backgroundColor: variant === 'info' ? NEUBRUTALISM_COLORS.neutral : NEUBRUTALISM_COLORS.lightGray,
  borderColor: NEUBRUTALISM_COLORS.primaryDark,
  padding: '1rem',
  width: '100%',
  color: NEUBRUTALISM_COLORS.primaryDark,
});

const getTabButtonStyle = (isActive: boolean) => ({
  ...neubrutalismBase,
  padding: '0.75rem 1.5rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  backgroundColor: isActive ? NEUBRUTALISM_COLORS.primaryDark : NEUBRUTALISM_COLORS.lightGray,
  color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark,
  borderColor: NEUBRUTALISM_COLORS.primaryDark,
  cursor: 'pointer',
  transition: 'all 0.2s',
  borderBottom: 'none',
  borderRadius: '12px 12px 0 0',
  boxShadow: 'none',
  ...(!isActive && {
    borderBottom: `3px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
  })
});
// --- End Neubrutalism Styles ---


// --- SVG Illustration Components ---
interface CompoundLociProps {
    step: number;
    type: 'pointAndLine' | 'twoPoints';
}

const PointAndLineIllustration: React.FC<CompoundLociProps> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 200, y: 150 };
    const radius = 80;
    const lineY = 250;
    const lineDistance = 50;

    // Calculate intersection points
    const yIntersections = [lineY - lineDistance, lineY + lineDistance];
    const intersections: { x: number, y: number }[] = [];
    yIntersections.forEach(y => {
        const dy = Math.abs(y - pointA.y);
        if (dy <= radius) {
            const dx = Math.sqrt(radius**2 - dy**2);
            intersections.push({ x: pointA.x + dx, y });
            intersections.push({ x: pointA.x - dx, y });
        }
    });

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {/* Locus 1: Circle around Point A */}
            {step >= 1 && (
                <>
                    <circle cx={pointA.x} cy={pointA.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />
                    <text x={pointA.x - 20} y={pointA.y - 10} className="text-sm font-bold">A</text>
                    <circle cx={pointA.x} cy={pointA.y} r={radius} fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
                    <text x={pointA.x + radius} y={pointA.y} className="text-sm font-bold text-red-500" dominantBaseline="central">4cm</text>
                </>
            )}

            {/* Locus 2: Parallel lines from Line l */}
            {step >= 2 && (
                <>
                    <line x1="0" y1={lineY} x2={width} y2={lineY} stroke={NEUBRUTALISM_COLORS.primaryDark} strokeWidth="2" />
                    <text x="10" y={lineY - 10} className="text-sm font-bold">Line $l$</text>
                    <line x1="0" y1={lineY - lineDistance} x2={width} y2={lineY - lineDistance} stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="0" y1={lineY + lineDistance} x2={width} y2={lineY + lineDistance} stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" />
                    <text x="10" y={lineY - lineDistance - 10} className="text-sm font-bold text-green-500" dominantBaseline="central">3cm</text>
                    <text x="10" y={lineY + lineDistance + 20} className="text-sm font-bold text-green-500" dominantBaseline="central">3cm</text>
                </>
            )}

            {/* Intersection Points */}
            {step >= 3 && (
                 <>
                    {intersections.map((p, index) => (
                        <circle key={index} cx={p.x} cy={p.y} r="6" fill={NEUBRUTALISM_COLORS.secondary} stroke={NEUBRUTALISM_COLORS.white} strokeWidth="2" />
                    ))}
                 </>
            )}
        </svg>
    );
};

const TwoPointsIllustration: React.FC<CompoundLociProps> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 100, y: 150 };
    const pointB = { x: 300, y: 150 };
    const radiusA = 100;
    const radiusB = 100;

    // Calculate intersection points of the two arcs (or circles)
    const d = 200;
    const a = (radiusA**2 - radiusB**2 + d**2) / (2 * d);
    const h = Math.sqrt(radiusA**2 - a**2);
    const midpoint = { x: pointA.x + a, y: pointA.y };
    const intersect1 = { x: midpoint.x, y: midpoint.y - h };
    const intersect2 = { x: midpoint.x, y: midpoint.y + h };

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {/* Locus 1: Circle around Point A */}
            {step >= 1 && (
                <>
                    <circle cx={pointA.x} cy={pointA.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />
                    <text x={pointA.x - 20} y={pointA.y - 10} className="text-sm font-bold">A</text>
                    <circle cx={pointA.x} cy={pointA.y} r={radiusA} fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
                    <text x={pointA.x + radiusA - 20} y={pointA.y - 10} className="text-sm font-bold text-red-500">10cm</text>
                </>
            )}

            {/* Locus 2: Circle around Point B */}
            {step >= 2 && (
                <>
                    <circle cx={pointB.x} cy={pointB.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />
                    <text x={pointB.x + 10} y={pointB.y - 10} className="text-sm font-bold">B</text>
                    <circle cx={pointB.x} cy={pointB.y} r={radiusB} fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" />
                    <text x={pointB.x - radiusB + 20} y={pointB.y - 10} className="text-sm font-bold text-green-500">10cm</text>
                </>
            )}
            
            {/* Intersection Points */}
            {step >= 3 && (
                 <>
                    <circle cx={intersect1.x} cy={intersect1.y} r="6" fill={NEUBRUTALISM_COLORS.secondary} stroke={NEUBRUTALISM_COLORS.white} strokeWidth="2" />
                    <circle cx={intersect2.x} cy={intersect2.y} r="6" fill={NEUBRUTALISM_COLORS.secondary} stroke={NEUBRUTALISM_COLORS.white} strokeWidth="2" />
                 </>
            )}
        </svg>
    );
};


const CompoundLoci = () => {
    const [animationStep, setAnimationStep] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<'pointAndLine' | 'twoPoints'>('pointAndLine');

    const maxSteps = 3;

    useEffect(() => {
        setAnimationStep(0); // Reset animation when tab changes
        setIsPlaying(false);
    }, [activeTab]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setAnimationStep(prev => {
                    if (prev >= maxSteps) {
                        setIsPlaying(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1500);
        }
        return () => { if (interval) clearInterval(interval) };
    }, [isPlaying, maxSteps]);

    const stepDescriptions = [
        "First, construct the first locus.",
        "Then, construct the second locus.",
        "Finally, the intersection points are the solution.",
    ];

    const handleNext = () => animationStep < maxSteps && setAnimationStep(p => p + 1);
    const handlePrev = () => animationStep > 0 && setAnimationStep(p => p - 1);
    const togglePlay = () => {
        if (animationStep >= maxSteps) {
            setAnimationStep(0);
            setIsPlaying(true);
        } else {
            setIsPlaying(!isPlaying);
        }
    };

    const currentIllustration = activeTab === 'pointAndLine' ? <PointAndLineIllustration step={animationStep} type={activeTab} /> : <TwoPointsIllustration step={animationStep} type={activeTab} />;
    
    return (
        <div style={{...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: NEUBRUTALISM_COLORS.danger, borderColor: NEUBRUTALISM_COLORS.primaryDark, borderRadius: '20px', boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`}}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                Compound Loci Problems
            </h2>

            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setActiveTab('pointAndLine')}
                    style={getTabButtonStyle(activeTab === 'pointAndLine')}
                >
                    Point & Line
                </button>
                <button
                    onClick={() => setActiveTab('twoPoints')}
                    style={getTabButtonStyle(activeTab === 'twoPoints')}
                >
                    Two Points
                </button>
            </div>

            <div style={{...getInfoBoxStyle('info'), textAlign: 'center', display: 'block' }}>
                <p className="font-bold">Definition:</p>
                <p>Find points that satisfy two or more locus conditions simultaneously.</p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                 <div style={{...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, padding: '1rem'}}>
                    <div className="flex justify-center mb-4">
                        {currentIllustration}
                    </div>
                     <div className="flex justify-between items-center mb-3">
                        <button onClick={handlePrev} disabled={animationStep === 0} style={getButtonStyle(false)}>Previous</button>
                        <button onClick={togglePlay} style={{...getButtonStyle(false), backgroundColor: isPlaying ? NEUBRUTALISM_COLORS.warning : NEUBRUTALISM_COLORS.lightGray}}>
                            {isPlaying ? 'Pause' : (animationStep >= maxSteps ? 'Replay' : 'Play')}
                        </button>
                        <button onClick={handleNext} disabled={animationStep === maxSteps} style={getButtonStyle(false)}>Next</button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4" style={{border: `2px solid ${NEUBRUTALISM_COLORS.primaryDark}`}}>
                        <div className="h-1.5 rounded-full" style={{ width: `${(animationStep / maxSteps) * 100}%`, backgroundColor: NEUBRUTALISM_COLORS.secondary }}></div>
                    </div>
                    <div style={{...getInfoBoxStyle('description'), minHeight: '60px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                        <p style={{ textAlign: 'center' }}>
                            <span className="font-bold">Step {animationStep}:</span> {stepDescriptions[animationStep - 1] || "Select 'Play' or 'Next' to begin construction."}
                        </p>
                    </div>
                 </div>
                 <div style={{...getInfoBoxStyle('info'), display: 'block', textAlign: 'left'}}>
                     <h3 className="font-bold text-center mb-2">Example Problem</h3>
                     {activeTab === 'pointAndLine' ? (
                         <p>Find the points that are <strong className="text-red-500">4 cm from point A</strong> and <strong className="text-green-500">3 cm from line l</strong>. The solution is the intersection of a circle and two parallel lines.</p>
                     ) : (
                         <p>Find the points that are <strong className="text-red-500">10 cm from point A</strong> and <strong className="text-green-500">10 cm from point B</strong>. The solution is the intersection of two circles.</p>
                     )}
                 </div>
            </div>
        </div>
    );
};

export default CompoundLoci;
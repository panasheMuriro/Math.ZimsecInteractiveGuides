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
  backgroundColor: variant === 'info' ? NEUBRUTALISM_COLORS.danger : NEUBRUTALISM_COLORS.lightGray,
  borderColor: NEUBRUTALISM_COLORS.primaryDark,
  padding: '1rem',
  width: '100%',
  color: NEUBRUTALISM_COLORS.primaryDark,
});

const getTabButtonStyle = (isActive: boolean) => ({
  ...neubrutalismBase,
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
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
interface LocusLineProps {
    step: number;
    showAngleBisectors?: boolean;
}

const LocusLineIllustration: React.FC<LocusLineProps> = ({ step }) => {
    const width = 400;
    const height = 300;
    const lineY = 150;
    const distance = 60;

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {/* Original Line */}
            <line x1="0" y1={lineY} x2={width} y2={lineY} stroke={NEUBRUTALISM_COLORS.primaryDark} strokeWidth="3" />
            <text x="10" y={lineY - 10} className="text-sm font-bold">Line $l$</text>

            {/* Perpendiculars */}
            {step >= 1 && (
                <>
                    <line x1="100" y1={lineY} x2="100" y2={lineY + 50} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="200" y1={lineY} x2="200" y2={lineY + 50} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="300" y1={lineY} x2="300" y2={lineY + 50} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                </>
            )}

            {/* Marked points */}
            {step >= 2 && (
                <>
                    <circle cx="100" cy={lineY - distance} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                    <circle cx="200" cy={lineY - distance} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                    <circle cx="300" cy={lineY - distance} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                    <circle cx="100" cy={lineY + distance} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                    <circle cx="200" cy={lineY + distance} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                    <circle cx="300" cy={lineY + distance} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                </>
            )}

            {/* Locus Lines */}
            {step >= 3 && (
                <>
                    <line x1="0" y1={lineY - distance} x2={width} y2={lineY - distance} stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="3" />
                    <line x1="0" y1={lineY + distance} x2={width} y2={lineY + distance} stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="3" />
                    <text x="10" y={lineY - distance - 10} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.secondary}>Locus</text>
                    <text x="10" y={lineY + distance + 20} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.secondary}>Locus</text>
                </>
            )}
        </svg>
    );
};

const LocusAngleBisectorIllustration: React.FC<LocusLineProps> = ({ step }) => {
    const width = 400;
    const height = 300;
    const center = { x: 200, y: 150 };
    const lineAngle1 = -30;
    const lineAngle2 = 30;

    const getLinePoints = (angle: number) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = center.x - 200 * Math.cos(rad);
        const y1 = center.y - 200 * Math.sin(rad);
        const x2 = center.x + 200 * Math.cos(rad);
        const y2 = center.y + 200 * Math.sin(rad);
        return { x1, y1, x2, y2 };
    };

    const line1 = getLinePoints(lineAngle1);
    const line2 = getLinePoints(lineAngle2);

    const bisectorAngle1 = (lineAngle1 + lineAngle2) / 2;
    const bisectorAngle2 = bisectorAngle1 + 90;

    const bisector1 = getLinePoints(bisectorAngle1);
    const bisector2 = getLinePoints(bisectorAngle2);

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {/* Original Lines */}
            <line x1={line1.x1} y1={line1.y1} x2={line1.x2} y2={line1.y2} stroke={NEUBRUTALISM_COLORS.primaryDark} strokeWidth="2" />
            <line x1={line2.x1} y1={line2.y1} x2={line2.x2} y2={line2.y2} stroke={NEUBRUTALISM_COLORS.primaryDark} strokeWidth="2" />
            <text x={line1.x1 + 10} y={line1.y1 - 5} className="text-sm font-bold">Line 1</text>
            <text x={line2.x1 + 10} y={line2.y1 + 15} className="text-sm font-bold">Line 2</text>
            <circle cx={center.x} cy={center.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />

            {/* Construction Arcs */}
            {step >= 1 && (
                <>
                    <circle cx={center.x} cy={center.y} r="50" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                </>
            )}

            {/* Angle Bisector Locus */}
            {step >= 2 && (
                <>
                    <line x1={bisector1.x1} y1={bisector1.y1} x2={bisector1.x2} y2={bisector1.y2} stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="3" />
                    <line x1={bisector2.x1} y1={bisector2.y1} x2={bisector2.x2} y2={bisector2.y2} stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="3" />
                    <text x={bisector1.x2 - 40} y={bisector1.y2 - 10} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.secondary}>Locus</text>
                    <text x={bisector2.x2 - 10} y={bisector2.y2 + 10} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.secondary}>Locus</text>
                </>
            )}
        </svg>
    );
};


const LocusLines = () => {
    const [animationStep, setAnimationStep] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<'line' | 'intersecting'>('line');

    const maxStepsLine = 3;
    const maxStepsIntersecting = 2;
    const maxSteps = activeTab === 'line' ? maxStepsLine : maxStepsIntersecting;

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

    const stepDescriptionsLine = [
        "Start with the original line.",
        "Draw perpendiculars at multiple points along the line.",
        "Mark the required distance and connect the points to form two parallel lines.",
    ];

    const stepDescriptionsIntersecting = [
        "Start with two intersecting lines.",
        "Draw the angle bisectors of the angles formed by the intersection.",
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

    const currentStepDescriptions = activeTab === 'line' ? stepDescriptionsLine : stepDescriptionsIntersecting;
    const currentIllustration = activeTab === 'line' ? <LocusLineIllustration step={animationStep} /> : <LocusAngleBisectorIllustration step={animationStep} />;
    
    return (
        <div style={{...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: NEUBRUTALISM_COLORS.neutral, borderColor: NEUBRUTALISM_COLORS.primaryDark, borderRadius: '20px', boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`}}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                Loci: Equidistant from Lines
            </h2>

            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setActiveTab('line')}
                    style={getTabButtonStyle(activeTab === 'line')}
                >
                    From a Single Line
                </button>
                <button
                    onClick={() => setActiveTab('intersecting')}
                    style={getTabButtonStyle(activeTab === 'intersecting')}
                >
                    From Two Intersecting Lines
                </button>
            </div>

            <div style={{...getInfoBoxStyle('info'), textAlign: 'center', display: 'block' }}>
                <p className="font-bold">Definition:</p>
                {activeTab === 'line' ? (
                    <p>The locus of points at a fixed distance from a line is two parallel lines.</p>
                ) : (
                    <p>The locus of points equidistant from two intersecting lines is their angle bisectors.</p>
                )}
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
                            <span className="font-bold">Step {animationStep}:</span> {currentStepDescriptions[animationStep - 1] || "Select 'Play' or 'Next' to begin construction."}
                        </p>
                    </div>
                 </div>
                 <div style={{...getInfoBoxStyle('info'), display: 'block', textAlign: 'left'}}>
                     <h3 className="font-bold text-center mb-2">Concept & Applications</h3>
                     {activeTab === 'line' ? (
                         <>
                             <p className="mb-2"><strong className="text-sm">Proof Concept:</strong> The perpendicular distance from any point on the parallel lines back to the original line is constant, by definition of parallel lines.</p>
                             <p><strong className="text-sm">Applications:</strong> Road construction, property boundaries, setting up safety barriers.</p>
                         </>
                     ) : (
                         <>
                             <p className="mb-2"><strong className="text-sm">Proof Concept:</strong> Any point on an angle bisector is equidistant from the two arms of the angle.</p>
                             <p><strong className="text-sm">Applications:</strong> Positioning a fire station to be equidistant from two major roads, solving geometric problems within triangles.</p>
                         </>
                     )}
                 </div>
            </div>
        </div>
    );
};

export default LocusLines;
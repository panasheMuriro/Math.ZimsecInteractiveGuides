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
// --- End Neubrutalism Styles ---


// --- SVG Illustration Component ---
const LocusTwoPointsIllustration: React.FC<{ step: number }> = ({ step }) => {
    const width = 400;
    const height = 300;
    const pointA = { x: 100, y: 150 };
    const pointB = { x: 300, y: 150 };
    const arcRadius = 150;

    // Calculate intersection points of the two arcs
    const d = 200; // distance between A and B
    const a = d / 2;
    const h = Math.sqrt(arcRadius**2 - a**2);
    const midpoint = { x: pointA.x + a, y: pointA.y };
    const intersect1 = { x: midpoint.x, y: midpoint.y - h };
    const intersect2 = { x: midpoint.x, y: midpoint.y + h };
    
    // Sample point P for proof
    const pointP = { x: midpoint.x, y: midpoint.y - h * 0.7 };


    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
            {/* Fixed Points and connecting line */}
            {step >= 1 && (
                <>
                    <circle cx={pointA.x} cy={pointA.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />
                    <text x={pointA.x - 20} y={pointA.y + 5} className="text-sm font-bold">A</text>
                    <circle cx={pointB.x} cy={pointB.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />
                    <text x={pointB.x + 10} y={pointB.y + 5} className="text-sm font-bold">B</text>
                    <line x1={pointA.x} y1={pointA.y} x2={pointB.x} y2={pointB.y} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
                </>
            )}

            {/* Construction Arcs */}
            {step >= 2 && (
                <circle cx={pointA.x} cy={pointA.y} r={arcRadius} fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
             {step >= 3 && (
                <circle cx={pointB.x} cy={pointB.y} r={arcRadius} fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,4" />
            )}

            {/* Locus Line (Perpendicular Bisector) */}
            {step >= 4 && (
                <>
                    <circle cx={intersect1.x} cy={intersect1.y} r="4" fill="#8b5cf6" />
                    <circle cx={intersect2.x} cy={intersect2.y} r="4" fill="#8b5cf6" />
                    <line x1={intersect1.x} y1={intersect1.y - 20} x2={intersect2.x} y2={intersect2.y + 20} stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="3" />
                </>
            )}

            {/* Proof Visualization */}
            {step >= 5 && (
                 <>
                    <circle cx={pointP.x} cy={pointP.y} r="4" fill={NEUBRUTALISM_COLORS.danger} />
                    <text x={pointP.x + 10} y={pointP.y} className="text-sm font-bold text-red-500">P</text>
                    {/* Congruent triangles */}
                    <polygon points={`${pointA.x},${pointA.y} ${pointP.x},${pointP.y} ${midpoint.x},${midpoint.y}`} fill={NEUBRUTALISM_COLORS.neutral} fillOpacity="0.4" />
                    <polygon points={`${pointB.x},${pointB.y} ${pointP.x},${pointP.y} ${midpoint.x},${midpoint.y}`} fill={NEUBRUTALISM_COLORS.warning} fillOpacity="0.4" />
                    {/* Equidistant lines */}
                    <line x1={pointA.x} y1={pointA.y} x2={pointP.x} y2={pointP.y} stroke={NEUBRUTALISM_COLORS.danger} strokeWidth="2" />
                    <line x1={pointB.x} y1={pointB.y} x2={pointP.x} y2={pointP.y} stroke={NEUBRUTALISM_COLORS.danger} strokeWidth="2" />
                 </>
            )}
        </svg>
    );
};


const LocusTwoPoints = () => {
    const [animationStep, setAnimationStep] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const maxSteps = 5;

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
    }, [isPlaying]);

    const stepDescriptions = [
      "Start with two fixed points, A and B.",
      "With A as center, draw an arc with a radius more than half of AB's length.",
      "With B as center and the same radius, draw a second arc to intersect the first.",
      "Draw a line through the two intersection points. This is the locus.",
      "Any point P on this line is equidistant from A and B. $|PA| = |PB|$"
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

    return (
        <div style={{...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: NEUBRUTALISM_COLORS.secondary, borderColor: NEUBRUTALISM_COLORS.primaryDark, borderRadius: '20px', boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`}}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                Locus: Equidistant from Two Points
            </h2>
            <div style={{...getInfoBoxStyle('info'), textAlign: 'center', display: 'block' }}>
                <p className="font-bold">Definition:</p>
                <p>The locus of points equidistant from two fixed points is the **perpendicular bisector** of the line segment joining them.</p>
                <p className="font-mono font-bold mt-2">{`Locus = {P : |PA| = |PB|}`}</p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                 <div style={{...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, padding: '1rem'}}>
                    <div className="flex justify-center mb-4">
                        <LocusTwoPointsIllustration step={animationStep} />
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
                     <h3 className="font-bold text-center mb-2">Concept & Applications</h3>
                     <p className="mb-2"><strong className="text-sm">Proof Concept:</strong> Any point P on the bisector forms two congruent right-angled triangles ($\triangle PAM \cong \triangle PBM$), proving that the hypotenuses $|PA|$ and $|PB|$ are equal.</p>
                     <p><strong className="text-sm">Applications:</strong> This concept is used for territorial boundaries (e.g., between two cell towers or towns) and in solving geometric problems.</p>
                 </div>
            </div>
        </div>
    );
};

export default LocusTwoPoints;
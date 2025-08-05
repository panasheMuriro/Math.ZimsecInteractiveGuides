import React, { useState, useEffect } from 'react';
import { renderTextWithMath } from '../../../../../utils/renderTextWithMath';

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


// --- SVG Illustration Component ---
const LocusPointIllustration: React.FC<{
  step: number;
  type: 'equal' | 'less' | 'greater' | 'annulus';
}> = ({ step, type }) => {
  const width = 400;
  const height = 300;
  const center = { x: 200, y: 150 };
  const r1 = 60;
  const r2 = 100;

  const circumference = 2 * Math.PI * r2;

  const showAnimation = type === 'equal';

  const locusShape = () => {
    switch (type) {
      case 'equal':
        return (
          <circle
            cx={center.x}
            cy={center.y}
            r={r2}
            fill="none"
            stroke={NEUBRUTALISM_COLORS.secondary}
            strokeWidth="3"
            style={{
                transition: 'stroke-dashoffset 1s ease-in-out',
                strokeDasharray: circumference,
                strokeDashoffset: showAnimation && step >= 3 ? 0 : circumference,
            }}
          />
        );
      case 'less':
        return (
            <>
                <circle cx={center.x} cy={center.y} r={r2} fill={NEUBRUTALISM_COLORS.secondary} fillOpacity="0.3" />
                <circle cx={center.x} cy={center.y} r={r2} fill="none" stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="2" strokeDasharray="5,5" />
            </>
        );
      case 'greater':
        return (
            <>
                {/* Use a path with a hole to fill the exterior */}
                <path
                    d={`M0,0 H${width} V${height} H0Z M${center.x},${center.y-r2} a${r2},${r2} 0 1,0 1,0 Z`}
                    fill={NEUBRUTALISM_COLORS.secondary}
                    fillOpacity="0.3"
                    fillRule="evenodd"
                />
                <circle cx={center.x} cy={center.y} r={r2} fill="none" stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="2" strokeDasharray="5,5" />
            </>
        );
      case 'annulus':
         return (
            <>
                {/* Use a path with a hole for the annulus/ring */}
                <path
                    d={`M${center.x},${center.y-r2} a${r2},${r2} 0 1,1 0,${2*r2} a${r2},${r2} 0 1,1 0,-${2*r2} Z M${center.x},${center.y-r1} a${r1},${r1} 0 1,0 0,${2*r1} a${r1},${r1} 0 1,0 0,-${2*r1} Z`}
                    fill={NEUBRUTALISM_COLORS.secondary}
                    fillOpacity="0.3"
                    fillRule="evenodd"
                />
                <circle cx={center.x} cy={center.y} r={r1} fill="none" stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="2" strokeDasharray="5,5" />
                <circle cx={center.x} cy={center.y} r={r2} fill="none" stroke={NEUBRUTALISM_COLORS.secondary} strokeWidth="2" strokeDasharray="5,5" />
            </>
        );
    }
  };

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      {/* Fixed Point A */}
      {(showAnimation ? step >= 1 : true) && (
        <>
          <circle cx={center.x} cy={center.y} r="5" fill={NEUBRUTALISM_COLORS.primaryDark} />
          <text x={center.x - 20} y={center.y} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.primaryDark}>A</text>
        </>
      )}

      {/* Radius line for animation */}
      {showAnimation && step >= 2 && (
        <>
            <line x1={center.x} y1={center.y} x2={center.x + r2} y2={center.y} stroke={NEUBRUTALISM_COLORS.danger} strokeWidth="2" strokeDasharray="4,4" />
            <text x={center.x + r2/2 - 5} y={center.y - 10} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.danger}>r</text>
        </>
      )}

      {/* The Locus Shape */}
      {(showAnimation ? step >= 3 : true) && locusShape()}

       {/* Point P on the circle */}
       {(showAnimation ? step >= 4 : true) && type === 'equal' && (
        <>
          <circle cx={center.x + r2} cy={center.y} r="4" fill={NEUBRUTALISM_COLORS.danger} />
          <text x={center.x + r2 + 10} y={center.y + 5} className="text-sm font-bold" fill={NEUBRUTALISM_COLORS.danger}>P</text>
        </>
      )}
    </svg>
  );
};


const LocusPoint = () => {
    type LocusType = 'equal' | 'less' | 'greater' | 'annulus';
    const [locusType, setLocusType] = useState<LocusType>('equal');
    const [animationStep, setAnimationStep] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const isAnimatable = locusType === 'equal';
    const maxSteps = 4;

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (isPlaying && isAnimatable) {
            interval = setInterval(() => {
                setAnimationStep(prev => {
                    if (prev >= maxSteps) {
                        setIsPlaying(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1200);
        }
        return () => { if (interval) clearInterval(interval) };
    }, [isPlaying, isAnimatable]);

    useEffect(() => {
        setAnimationStep(0);
        setIsPlaying(false);
    }, [locusType]);

    const locusData: Record<LocusType, { name: string; description: string; formula: string; }> = {
        equal: {
            name: 'Equal to r',
            description: "The locus of points equidistant from a fixed point is a circle.",
            formula: "|PA| = r",
        },
        less: {
            name: '< r',
            description: "The locus of points less than distance $r$ away is the interior of the circle.",
            formula: "|PA| < r",
        },
        greater: {
            name: '> r',
            description: "The locus of points greater than distance $r$ away is the exterior of the circle.",
            formula: "|PA| > r",
        },
        annulus: {
            name: 'Between $r_1$ & $r_2$',
            description: "The locus of points between two distances is an annulus (a ring).",
            formula: "r_1 < |PA| < r_2",
        }
    };

    const stepDescriptions = [
        "Start with a fixed point A in the plane.",
        "Set the required distance (radius $r$) with a compass.",
        "Draw a full circle with center A and radius $r$.",
        "All points P on the circle are equidistant from A."
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
        <div style={{...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: NEUBRUTALISM_COLORS.danger, borderColor: NEUBRUTALISM_COLORS.primaryDark, borderRadius: '20px', boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`}}>
            <h2 className="text-xl font-bold mb-2 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                Locus: Equidistant from a Fixed Point
            </h2>
            <div style={{...getInfoBoxStyle(), padding: '1rem', textAlign: 'center'}}>
                <div>
                    <p className="font-bold">Definition:</p>
                    <p>The locus of points equidistant from a single fixed point is a circle.</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                 <div style={{...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.lightGray, padding: '1rem' }}>
                    <div className="flex flex-wrap justify-center gap-2">
                        {(Object.keys(locusData) as LocusType[]).map(type => (
                             <button key={type} onClick={() => setLocusType(type)} style={getButtonStyle(locusType === type)}>
                                {renderTextWithMath(locusData[type].name)}
                            </button>
                        ))}
                    </div>
                 </div>

                 <div style={{...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, padding: '1rem'}}>
                    <p className="text-sm mb-3 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark, minHeight: '40px' }}>
                        {renderTextWithMath(locusData[locusType].description)}
                        <br />
                        <span className="font-mono font-bold">{`Locus = {P : ${locusData[locusType].formula}}`}</span>
                    </p>
                    <div className="flex justify-center mb-4">
                        <LocusPointIllustration step={animationStep} type={locusType} />
                    </div>

                    {isAnimatable && (
                        <>
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
                            <div style={getInfoBoxStyle('description')}>
                                <p style={{ textAlign: 'center' }}>
                                    <span className="font-bold">Step {animationStep}:</span> {stepDescriptions[animationStep - 1] || "Select 'Play' or 'Next' to begin."}
                                </p>
                            </div>
                        </>
                    )}
                 </div>
            </div>
        </div>
    );
};

export default LocusPoint;
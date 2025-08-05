// import { useState } from 'react';
// import { RefreshCw, Minus, Plus } from 'lucide-react';

// const SimilarityCongruency = () => {
//   const [scaleFactor, setScaleFactor] = useState(.75);

//   const resetScale = () => setScaleFactor(1);
//   const decreaseScale = () => setScaleFactor(prev => Math.max(0.5, prev - 0.25));
//   const increaseScale = () => setScaleFactor(prev => Math.min(2, prev + 0.25));

//   // Determine current relationship
//   const getCurrentStatus = () => {
//     if (scaleFactor === 1) {
//       return { 
//         text: "Congruent", 
//         bgColor: "bg-green-100", 
//         textColor: "text-green-800",
//         symbol: "≅"
//       };
//     } else {
//       return { 
//         text: "Similar", 
//         bgColor: "bg-blue-100", 
//         textColor: "text-blue-800",
//         symbol: "∼"
//       };
//     }
//   };

//   const status = getCurrentStatus();

//   return (
//     <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 bg-gradient-to-br from-[#0E8388] to-[#2E4F4F] rounded-2xl shadow-lg">
//       <h2 className="text-xl font-bold text-white mb-4 mt-5">Similarity vs Congruency</h2>
      
//       <div className="w-full mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-sm font-medium text-white">Scale Factor: {scaleFactor}x</span>
//           <button 
//             onClick={resetScale}
//             className="flex items-center text-xs text-white hover:text-blue-800"
//           >
//             <RefreshCw size={14} className="mr-1" />
//             Reset
//           </button>
//         </div>
        
//         <div className="flex items-center justify-between bg-gray-100 rounded-3xl p-2">
//           <button 
//             onClick={decreaseScale}
//             className="p-2 rounded-full bg-[#FDA769] shadow hover:bg-gray-50"
//             aria-label="Decrease scale"
//           >
//             <Minus size={16} />
//           </button>
          
//           <div className="w-3/5 mx-2">
//             <input 
//               type="range" 
//               min="0.5" 
//               max="2" 
//               step="0.25"
//               value={scaleFactor}
//               onChange={(e) => setScaleFactor(parseFloat(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>0.5x</span>
//               <span>1x</span>
//               <span>2x</span>
//             </div>
//           </div>
          
//           <button 
//             onClick={increaseScale}
//             className="p-2 rounded-full bg-[#FDA769] shadow hover:bg-gray-50"
//             aria-label="Increase scale"
//           >
//             <Plus size={16} />
//           </button>
//         </div>
//       </div>

//       {/* Current Status Indicator */}
//       <div className={`w-full mb-4 py-2 px-4 rounded-lg flex items-center justify-center ${status.bgColor}`}>
//         <span className={`font-bold text-lg ${status.textColor}`}>
//           {status.text} {status.symbol}
//         </span>
//       </div>

//       <div className="relative w-full h-64 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden mb-4">
//         {/* Congruent Figure (Original) */}
//         <svg 
//           className="absolute transition-all duration-300"
//           style={{ transform: `scale(1)` }}
//           viewBox="0 0 100 100"
//         >
//           <rect 
//             x="20" 
//             y="20" 
//             width="60" 
//             height="60" 
//             fill="none" 
//             stroke="#FDA769" 
//             strokeWidth="3"
//             strokeDasharray="5,5"
//           />
//         </svg>

//         {/* Similar Figure (Transformed) */}
//         <svg 
//           className="absolute transition-all duration-300"
//           style={{ transform: `scale(${scaleFactor})` }}
//           viewBox="0 0 100 100"
//         >
//           <rect 
//             x="20" 
//             y="20" 
//             width="60" 
//             height="60" 
//             fill="none" 
//             stroke="#10B981" 
//             strokeWidth="3"
//           />
//         </svg>
//       </div>

//       {/* Legend */}
//       <div className="flex justify-center gap-6 mb-6 w-full">
//         <div className="flex items-center">
//           <div className="w-6 h-6 border-2 border-dashed border-[#FDA769] mr-2"></div>
//           <span className="text-sm text-white">Original (1x)</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-6 h-6 border-2 border-green-500 mr-2"></div>
//           <span className="text-sm text-white">Transformed ({scaleFactor}x)</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mt-2 w-full">
//         <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//           <h3 className="font-bold text-blue-800 mb-2">Congruent Figures</h3>
//           <ul className="text-sm text-gray-700 space-y-1">
//             <li>• Same shape & size</li>
//             <li>• Equal sides</li>
//             <li>• Equal angles</li>
//             <li>• Symbol: ≅</li>
//           </ul>
//         </div>
        
//         <div className="bg-green-50 p-4 rounded-lg border border-green-100">
//           <h3 className="font-bold text-green-800 mb-2">Similar Figures</h3>
//           <ul className="text-sm text-gray-700 space-y-1">
//             <li>• Same shape</li>
//             <li>• Proportional sides</li>
//             <li>• Equal angles</li>
//             <li>• Symbol: ∼</li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 text-sm text-white bg-white/20 p-3 rounded-lg  w-full">
//         <p className="font-medium mb-1">Key Insight:</p>
//         <p>Congruent → Always Similar</p>
//         <p>Similar → Congruent only when scale factor = 1</p>
//       </div>
//     </div>
//   );
// };

// export default SimilarityCongruency;

import { useState } from 'react';
import { RefreshCw, Minus, Plus } from 'lucide-react';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  cream: '#f4f1de',      // Background, Cards
  orange: '#e07a5f',     // Accents, Selected, Reset Button, Original Figure
  slate: '#3d405b',      // Text, Lines, Center Dot, Borders
  teal: '#81b29a',       // Background Accents, Transformed Figure, Similar
  yellow: '#f2cc8f',     // Accents, Highlights, Button Default
  white: '#ffffff',
  green: '#90a959',      // Congruent
  blue: '#6494aa',       // Info Box Background
  shadow: 'rgba(61, 64, 91, 0.3)', // slate with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

const SimilarityCongruency = () => {
  const [scaleFactor, setScaleFactor] = useState(0.75);

  const resetScale = () => setScaleFactor(1);
  const decreaseScale = () => setScaleFactor(prev => Math.max(0.5, prev - 0.25));
  const increaseScale = () => setScaleFactor(prev => Math.min(2, prev + 0.25));

  // Determine current relationship
  const getCurrentStatus = () => {
    if (scaleFactor === 1) {
      return { 
        text: "Congruent", 
        bgColor: NEUBRUTALISM_COLORS.green, // Green for congruent
        textColor: NEUBRUTALISM_COLORS.white,
        symbol: "≅"
      };
    } else {
      return { 
        text: "Similar", 
        bgColor: NEUBRUTALISM_COLORS.teal, // Teal for similar
        textColor: NEUBRUTALISM_COLORS.white,
        symbol: "∼"
      };
    }
  };

  const status = getCurrentStatus();

  // --- Button Styling Helper ---
  const getButtonStyle = () => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.orange,
      color: NEUBRUTALISM_COLORS.white,
      borderColor: NEUBRUTALISM_COLORS.slate,
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  };

  const getResetButtonStyle = () => {
    return {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.75rem', // text-xs
      fontWeight: '500', // font-medium
      color: NEUBRUTALISM_COLORS.white,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.25rem',
      transition: 'color 0.2s',
    };
  };

  const getInfoBoxStyle = (bgColor: string) => {
    return {
      ...neubrutalismBase,
      backgroundColor: bgColor,
      borderColor: NEUBRUTALISM_COLORS.slate,
      padding: '1rem',
      width: '100%',
    };
  };
  // --- End Button Styling ---

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.teal, // Teal background
        borderColor: NEUBRUTALISM_COLORS.slate,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h2 className="text-xl font-bold mb-1 text-center">
          Similarity vs Congruency
        </h2>
      </div>
      
      <div style={{ width: '100%', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span className="text-sm font-bold" style={{ color: NEUBRUTALISM_COLORS.white }}>
            Scale Factor: {scaleFactor}x
          </span>
          <button 
            onClick={resetScale}
            style={getResetButtonStyle()}
            onMouseEnter={(e) => e.currentTarget.style.color = NEUBRUTALISM_COLORS.yellow}
            onMouseLeave={(e) => e.currentTarget.style.color = NEUBRUTALISM_COLORS.white}
          >
            <RefreshCw size={14} style={{ marginRight: '0.25rem' }} />
            Reset
          </button>
        </div>
        
        <div
          style={{
            ...neubrutalismBase,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: NEUBRUTALISM_COLORS.cream,
            borderColor: NEUBRUTALISM_COLORS.slate,
            padding: '0.5rem',
          }}
        >
          <button 
            onClick={decreaseScale}
            style={getButtonStyle()}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.orange}
            aria-label="Decrease scale"
          >
            <Minus size={16} />
          </button>
          
          <div style={{ width: '60%', margin: '0 0.5rem' }}>
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.25"
              value={scaleFactor}
              onChange={(e) => setScaleFactor(parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '0.5rem',
                // backgroundColor: NEUBRUTALISM_COLORS.lightGray, // Assuming lightGray is defined or use cream
                borderRadius: '0.5rem',
                appearance: 'none',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: NEUBRUTALISM_COLORS.slate, marginTop: '0.25rem' }}>
              <span>0.5x</span>
              <span>1x</span>
              <span>2x</span>
            </div>
          </div>
          
          <button 
            onClick={increaseScale}
            style={getButtonStyle()}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.orange}
            aria-label="Increase scale"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Current Status Indicator */}
      <div
        style={{
          ...neubrutalismBase,
          width: '100%',
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: status.bgColor,
          borderColor: NEUBRUTALISM_COLORS.slate,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="font-bold text-lg" style={{ color: status.textColor }}>
          {status.text} {status.symbol}
        </span>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '16rem', // h-64
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderRadius: '0.5rem', // rounded-lg
          border: `1px solid ${NEUBRUTALISM_COLORS.slate}`, // Assuming borderGray is defined or use slate
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        {/* Congruent Figure (Original) */}
        <svg 
          style={{
            position: 'absolute',
            transition: 'all 0.3s ease',
            transform: `scale(1)`,
          }}
          viewBox="0 0 100 100"
        >
          <rect 
            x="20" 
            y="20" 
            width="60" 
            height="60" 
            fill="none" 
            stroke={NEUBRUTALISM_COLORS.orange} 
            strokeWidth="3"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Similar Figure (Transformed) */}
        <svg 
          style={{
            position: 'absolute',
            transition: 'all 0.3s ease',
            transform: `scale(${scaleFactor})`,
          }}
          viewBox="0 0 100 100"
        >
          <rect 
            x="20" 
            y="20" 
            width="60" 
            height="60" 
            fill="none" 
            stroke={NEUBRUTALISM_COLORS.green} 
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '1.5rem', height: '1.5rem', border: `2px dashed ${NEUBRUTALISM_COLORS.orange}`, marginRight: '0.5rem' }}></div>
          <span className="text-sm" style={{ color: NEUBRUTALISM_COLORS.white }}>Original (1x)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '1.5rem', height: '1.5rem', border: `2px solid ${NEUBRUTALISM_COLORS.green}`, marginRight: '0.5rem' }}></div>
          <span className="text-sm" style={{ color: NEUBRUTALISM_COLORS.white }}>Transformed ({scaleFactor}x)</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', marginTop: '0.5rem' }}>
        <div style={getInfoBoxStyle(NEUBRUTALISM_COLORS.blue)}>
          <h3 className="font-bold mb-2" style={{ color: NEUBRUTALISM_COLORS.white }}>Congruent Figures</h3>
          <ul className="text-sm space-y-1" style={{ color: NEUBRUTALISM_COLORS.white }}>
            <li>• Same shape & size</li>
            <li>• Equal sides</li>
            <li>• Equal angles</li>
            <li>• Symbol: ≅</li>
          </ul>
        </div>
        
        <div style={getInfoBoxStyle(NEUBRUTALISM_COLORS.blue)}>
          <h3 className="font-bold mb-2" style={{ color: NEUBRUTALISM_COLORS.white }}>Similar Figures</h3>
          <ul className="text-sm space-y-1" style={{ color: NEUBRUTALISM_COLORS.white}}>
            <li>• Same shape</li>
            <li>• Proportional sides</li>
            <li>• Equal angles</li>
            <li>• Symbol: ∼</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          ...neubrutalismBase,
          marginTop: '1.5rem',
          fontSize: '0.875rem', // text-sm
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.slate,
          padding: '0.75rem',
          width: '100%',
        }}
      >
        <p className="font-bold mb-1" style={{ color: NEUBRUTALISM_COLORS.slate }}>Key Insight:</p>
        <p style={{ color: NEUBRUTALISM_COLORS.slate }}>Congruent → Always Similar</p>
        <p style={{ color: NEUBRUTALISM_COLORS.slate }}>Similar → Congruent only when scale factor = 1</p>
      </div>
    </div>
  );
};

export default SimilarityCongruency;
// import React, { useState } from 'react';
// import { Coins, RefreshCw } from 'lucide-react';
// import 'katex/dist/katex.min.css';
// import { BlockMath } from 'react-katex';

// const CombinedEventsVisualizer: React.FC = () => {
//   const [coin1, setCoin1] = useState<string | null>(null);
//   const [coin2, setCoin2] = useState<string | null>(null);
//   const outcomes = ['HH', 'HT', 'TH', 'TT'];
//   const outcomeTable = [
//     ['HH', 'HT'],
//     ['TH', 'TT'],
//   ];

//   const flipCoins = () => {
//     const result1 = Math.random() < 0.5 ? 'H' : 'T';
//     const result2 = Math.random() < 0.5 ? 'H' : 'T';
//     setCoin1(result1);
//     setCoin2(result2);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Try It: Flip Two Coins</h2>
//         <p className="text-sm mb-2">
//           Probability of Exactly One Head:
//           <BlockMath math="P(\\text{exactly one head}) = \frac{2}{4} = \frac{1}{2}" />
//         </p>
//         <div className="flex justify-center space-x-4 mb-4">
//           <div className="flex items-center">
//             <Coins className="w-12 h-12 text-blue-500" />
//             <span className="ml-2 text-lg font-bold">{coin1 || '-'}</span>
//           </div>
//           <div className="flex items-center">
//             <Coins className="w-12 h-12 text-blue-500" />
//             <span className="ml-2 text-lg font-bold">{coin2 || '-'}</span>
//           </div>
//         </div>
//         <div className="flex justify-center space-x-2">
//           <button
//             onClick={flipCoins}
//             className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//           >
//             <RefreshCw className="w-5 h-5 mr-2" />
//             Flip Coins
//           </button>
//         </div>
//         {coin1 && coin2 && (
//           <p className="text-sm mt-2 text-center">
//             Result: You got <span className="font-bold">{coin1}{coin2}</span>!
//             {['HT', 'TH'].includes(`${coin1}${coin2}`) ? ' 🎉 Exactly one head!' : ''}
//           </p>
//         )}
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Outcome Table</h2>
//         <p className="text-sm mb-2">Sample space for two coins: {`{${outcomes.join(', ')}}`}</p>
//         <div className="flex justify-center">
//           <table className="text-sm border-collapse">
//             <thead>
//               <tr>
//                 <th className="p-2">First Coin</th>
//                 <th className="p-2 border">H</th>
//                 <th className="p-2 border">T</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="p-2 font-bold">H</td>
//                 {outcomeTable[0].map((outcome, index) => (
//                   <td
//                     key={index}
//                     className={`p-2 border ${
//                       coin1 === 'H' && coin2 === outcome[1] ? 'bg-blue-100' : ''
//                     }`}
//                   >
//                     {outcome}
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">T</td>
//                 {outcomeTable[1].map((outcome, index) => (
//                   <td
//                     key={index}
//                     className={`p-2 border ${
//                       coin1 === 'T' && coin2 === outcome[1] ? 'bg-blue-100' : ''
//                     }`}
//                   >
//                     {outcome}
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CombinedEventsVisualizer;

import React, { useState } from 'react';
import { Coins, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const CombinedEventsVisualizer: React.FC = () => {
  const [coin1, setCoin1] = useState<string | null>(null);
  const [coin2, setCoin2] = useState<string | null>(null);
  const outcomes = ['HH', 'HT', 'TH', 'TT'];
  const outcomeTable = [
    ['HH', 'HT'],
    ['TH', 'TT'],
  ];

  const flipCoins = () => {
    const result1 = Math.random() < 0.5 ? 'H' : 'T';
    const result2 = Math.random() < 0.5 ? 'H' : 'T';
    setCoin1(result1);
    setCoin2(result2);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Try It: Flip Two Coins</h2>
        <p className="text-sm mb-2">
          Probability of Exactly One Head:
          <BlockMath math={"P(\\text{exactly one head}) = \\dfrac{2}{4} = \\dfrac{1}{2}"} />
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="flex items-center">
            <Coins className="w-12 h-12 text-blue-500" />
            <span className="ml-2 text-lg font-bold">{coin1 || '-'}</span>
          </div>
          <div className="flex items-center">
            <Coins className="w-12 h-12 text-blue-500" />
            <span className="ml-2 text-lg font-bold">{coin2 || '-'}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={flipCoins}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Flip Coins
          </button>
        </div>
        {coin1 && coin2 && (
          <p className="text-sm mt-2 text-center">
            Result: You got <span className="font-bold">{coin1}{coin2}</span>!
            {['HT', 'TH'].includes(`${coin1}${coin2}`) ? ' 🎉 Exactly one head!' : ''}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Outcome Table</h2>
        <p className="text-sm mb-2">Sample space for two coins: {`{${outcomes.join(', ')}}`}</p>
        <div className="flex justify-center">
          <table className="text-sm border-collapse">
            <thead>
              <tr>
                <th className="p-2">First Coin</th>
                <th className="p-2 border">H</th>
                <th className="p-2 border">T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-bold">H</td>
                {outcomeTable[0].map((outcome, index) => (
                  <td
                    key={index}
                    className={`p-2 border ${
                      coin1 === 'H' && coin2 === outcome[1] ? 'bg-blue-100' : ''
                    }`}
                  >
                    {outcome}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-bold">T</td>
                {outcomeTable[1].map((outcome, index) => (
                  <td
                    key={index}
                    className={`p-2 border ${
                      coin1 === 'T' && coin2 === outcome[1] ? 'bg-blue-100' : ''
                    }`}
                  >
                    {outcome}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CombinedEventsVisualizer;
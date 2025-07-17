import React, { useState } from 'react';

const VennTwoSets: React.FC = () => {
  const [setAInput, setSetAInput] = useState<string>('1,2,3');
  const [setBInput, setSetBInput] = useState<string>('3,4,5');

  // Parse inputs into actual Set objects
  const parseSet = (input: string): Set<string> => {
    return new Set(
      input
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item !== '')
    );
  };

  const setA = parseSet(setAInput);
  const setB = parseSet(setBInput);

  // Calculate set operations
  const union = new Set([...setA, ...setB]);
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  const differenceA = new Set([...setA].filter((x) => !setB.has(x)));
  const differenceB = new Set([...setB].filter((x) => !setA.has(x)));
  const symmetricDifference = new Set([
    ...differenceA,
    ...differenceB,
  ]);

  const universalSet = new Set([...union]); // Add some default context
  const complementA = new Set([...universalSet].filter((x) => !setA.has(x)));
  const complementB = new Set([...universalSet].filter((x) => !setB.has(x)));

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 rounded-xl text-white">
      <h3 className="text-lg font-bold mb-4">Interactive Venn Diagram (Two Sets)</h3>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <label className="block mb-1 font-bold text-sm">Set A</label>
          <input
            type="text"
            value={setAInput}
            onChange={(e) => setSetAInput(e.target.value)}
            placeholder="e.g., 1,2,3"
            className="w-full bg-white/10 border border-white/30 rounded-md p-2 text-white placeholder-white/70 text-sm"
          />
          <div className="mt-1 text-xs opacity-90">
            A = {`${Array.from(setA).join(', ') || '∅'}`}
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <label className="block mb-1 font-bold text-sm">Set B</label>
          <input
            type="text"
            value={setBInput}
            onChange={(e) => setSetBInput(e.target.value)}
            placeholder="e.g., 3,4,5"
            className="w-full bg-white/10 border border-white/30 rounded-md p-2 text-white placeholder-white/70 text-sm"
          />
          <div className="mt-1 text-xs opacity-90">
            B = {`${Array.from(setB).join(', ') || '∅'}`}
          </div>
        </div>
      </div>

        {/* Visual Venn Diagram Representation */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-md aspect-[4/3]">
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-blue-500 bg-opacity-40 flex items-center justify-center shadow-md">
              <div className="text-center px-2">
                <div className="font-bold">A</div>
                <div className="text-xs">{Array.from(differenceA).join(', ')}</div>
              </div>
            </div>
          </div>

          <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-red-500 bg-opacity-40 flex items-center justify-center shadow-md">
              <div className="text-center px-2">
                <div className="font-bold">B</div>
                <div className="text-xs">{Array.from(differenceB).join(', ')}</div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-32 rounded-full bg-purple-500 bg-opacity-40 flex items-center justify-center shadow-inner">
              <div className="text-center px-1">
                <div className="text-xs font-bold">A ∩ B</div>
                <div className="text-xs">{Array.from(intersection).join(', ')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Visualization Summary */}
      <div className="bg-white/10 rounded-lg p-4 space-y-3 text-sm">
        <div className="font-bold mb-2">Set Operations:</div>
        <div>
          <span className="font-semibold">Union (A ∪ B):</span>{' '}
          {Array.from(union).length > 0 ? `{${Array.from(union).join(', ')}}` : '∅'}
        </div>
        <div>
          <span className="font-semibold">Intersection (A ∩ B):</span>{' '}
          {intersection.size > 0 ? `{${Array.from(intersection).join(', ')}}` : '∅'}
        </div>
        <div>
          <span className="font-semibold">Difference (A \ B):</span>{' '}
          {differenceA.size > 0 ? `{${Array.from(differenceA).join(', ')}}` : '∅'}
        </div>
        <div>
          <span className="font-semibold">Symmetric Difference (A △ B):</span>{' '}
          {symmetricDifference.size > 0
            ? `{${Array.from(symmetricDifference).join(', ')}}`
            : '∅'}
        </div>
        <div>
          <span className="font-semibold">Complement of A (A’):</span>{' '}
          {complementA.size > 0 ? `{${Array.from(complementA).join(', ')}}` : '∅'}
        </div>
        <div>
          <span className="font-semibold">Complement of B (B’):</span>{' '}
          {complementB.size > 0 ? `{${Array.from(complementB).join(', ')}}` : '∅'}
        </div>
      </div>

    

    </div>
  );
};

export default VennTwoSets;
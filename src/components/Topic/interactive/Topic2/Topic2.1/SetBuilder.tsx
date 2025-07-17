import { useState } from 'react';

interface Domain {
  symbol: string;
  name: string;
  range: [number, number];
}

interface PresetCondition {
  name: string;
  condition: string;
  domain: keyof typeof domains;
}

const domains: Record<string, Domain> = {
  integers: { symbol: 'ℤ', name: 'Integers', range: [-10, 10] },
  naturals: { symbol: 'ℕ', name: 'Natural Numbers', range: [1, 20] },
  reals: { symbol: 'ℝ', name: 'Real Numbers', range: [-5, 5] }
};

const presetConditions: PresetCondition[] = [
  { name: 'Even Numbers', condition: 'x % 2 == 0', domain: 'integers' },
  { name: 'Positive Numbers', condition: 'x > 0', domain: 'integers' },
  { name: 'Perfect Squares', condition: 'Math.sqrt(x) % 1 == 0', domain: 'naturals' },
  { name: 'Single Digits', condition: 'x >= 0 && x <= 9', domain: 'integers' }
];

const SetBuilder = () => {
  const [condition, setCondition] = useState<string>('');
  const [domain, setDomain] = useState<keyof typeof domains>('integers');
  const [examples, setExamples] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  const generateExamples = () => {
    if (!condition.trim()) {
      setFeedback('Please enter a condition');
      return;
    }

    try {
      const domainInfo = domains[domain];
      const results: number[] = [];
      
      if (domain === 'reals') {
        // For reals, we'll check a sample of values
        for (let i = domainInfo.range[0]; i <= domainInfo.range[1]; i += 0.5) {
          if (evaluateCondition(condition, i)) {
            results.push(i);
          }
        }
      } else {
        // For integers/naturals
        const start = domain === 'naturals' ? 1 : domainInfo.range[0];
        for (let i = start; i <= domainInfo.range[1]; i++) {
          if (evaluateCondition(condition, i)) {
            results.push(i);
          }
        }
      }

      setExamples(results.slice(0, 10)); // Limit to 10 examples
      setFeedback(results.length > 0 ? 
        `Found ${results.length} elements${results.length > 10 ? ' (showing first 10)' : ''}` :
        'No elements found matching the condition'
      );
    } catch (e) {
        console.log(e)
      setFeedback('Error evaluating condition. Try simple conditions like: x > 0, x < 5, x % 2 = 0');
    }
  };

  const evaluateCondition = (condition: string, x: number): boolean => {
    try {
      // Simple condition parser - replace x with actual value
      let expr = condition.replace(/x/g, x.toString());
      
      // Handle common mathematical operations
      expr = expr.replace(/=/g, '==');
      expr = expr.replace(/mod/g, '%');
      
      // Simple evaluation for basic conditions
      if (expr.includes('>') || expr.includes('<') || expr.includes('==') || expr.includes('%')) {
        return eval(expr) as boolean;
      }
      
      return false;
    } catch {
      return false;
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔍</span> Set Builder Notation
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="mb-3">
          <label className="block mb-2 font-bold">Domain:</label>
          <div className="flex gap-2">
            {Object.entries(domains).map(([key, d]) => (
              <button
                key={key}
                onClick={() => setDomain(key as keyof typeof domains)}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  domain === key ? 'bg-white/40' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {d.symbol} {d.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-3">
          <label className="block mb-2 font-bold">Condition (use 'x' as variable):</label>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="e.g., x > 0, x % 2 == 0"
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70"
          />
        </div>
        
        <button
          onClick={generateExamples}
          className="bg-white/30 hover:bg-white/50 rounded-lg px-4 py-2 font-bold"
        >
          Generate Set
        </button>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="font-bold mb-2">Set Builder Notation:</div>
        <div className="font-mono text-lg mb-2">
          {'{'}x ∈ {domains[domain].symbol} | {condition || 'condition'}{'}'}
        </div>
        <div className="text-sm opacity-90">
          Read as: "The set of all x in {domains[domain].name} such that {condition || 'condition'}"
        </div>
      </div>

      {examples.length > 0 && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="font-bold mb-2">Generated Set:</div>
          <div className="font-mono text-lg">
            {`{${examples.join(', ')}}`}
          </div>
        </div>
      )}

      {feedback && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="text-sm">{feedback}</div>
        </div>
      )}

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
        <div className="font-bold mb-2">Quick Examples:</div>
        <div className="grid grid-cols-2 gap-2">
          {presetConditions.map((preset, index) => (
            <button
              key={index}
              onClick={() => {
                setCondition(preset.condition);
                setDomain(preset.domain);
              }}
              className="bg-white/20 hover:bg-white/30 rounded-lg p-2 text-sm font-bold"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetBuilder;
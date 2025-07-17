import { useState } from "react";
import { RefreshCcw, Search } from "lucide-react";

const VennThreeSets = () => {
  const [setA, setSetA] = useState("1,2,3");
  const [setB, setSetB] = useState("");
  const [setC, setSetC] = useState("");
  const [result, setResult] = useState<string>("");

  const parseSet = (input: string): Set<string> => {
    return new Set(
      input
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "")
    );
  };

  const handleOperation = (type: "union" | "intersection" | "onlyA" | "inABnotC") => {
    const A = parseSet(setA);
    const B = parseSet(setB);
    const C = parseSet(setC);

    let output: string[] = [];

    switch (type) {
      case "union":
        output = Array.from(new Set([...A, ...B, ...C]));
        break;
      case "intersection":
        output = Array.from([...A].filter((x) => B.has(x) && C.has(x)));
        break;
      case "onlyA":
        output = Array.from([...A].filter((x) => !B.has(x) && !C.has(x)));
        break;
      case "inABnotC":
        output = Array.from([...A].filter((x) => B.has(x) && !C.has(x)));
        break;
    }

    setResult(output.length > 0 ? output.join(", ") : "∅");
  };

  const reset = () => {
    setSetA("");
    setSetB("");
    setSetC("");
    setResult("");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-5 bg-white rounded-2xl shadow-lg space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-blue-600">🎯 Venn Diagram — Three Sets</h2>

      {/* Set Inputs */}
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-semibold text-blue-600 mb-1">Set A</label>
          <input
            className="w-full p-2 border-2 border-blue-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 1, 2, 3"
            value={setA}
            onChange={(e) => setSetA(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-green-600 mb-1">Set B</label>
          <input
            className="w-full p-2 border-2 border-green-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g. 2, 3, 4"
            value={setB}
            onChange={(e) => setSetB(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-purple-600 mb-1">Set C</label>
          <input
            className="w-full p-2 border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g. 3, 4, 5"
            value={setC}
            onChange={(e) => setSetC(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => handleOperation("union")}
          className="group flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-700 hover:ring-2 ring-blue-300 rounded-lg transition"
        >
          A ∪ B ∪ C <Search className="w-4 h-4 group-hover:scale-110 transition" />
        </button>
        <button
          onClick={() => handleOperation("intersection")}
          className="group flex items-center gap-1 px-4 py-2 bg-green-100 text-green-700 hover:ring-2 ring-green-300 rounded-lg transition"
        >
          A ∩ B ∩ C <Search className="w-4 h-4 group-hover:scale-110 transition" />
        </button>
        <button
          onClick={() => handleOperation("onlyA")}
          className="group flex items-center gap-1 px-4 py-2 bg-yellow-100 text-yellow-700 hover:ring-2 ring-yellow-300 rounded-lg transition"
        >
          Only A <Search className="w-4 h-4 group-hover:scale-110 transition" />
        </button>
        <button
          onClick={() => handleOperation("inABnotC")}
          className="group flex items-center gap-1 px-4 py-2 bg-purple-100 text-purple-700 hover:ring-2 ring-purple-300 rounded-lg transition"
        >
          A ∩ B \\ C <Search className="w-4 h-4 group-hover:scale-110 transition" />
        </button>
        <button
          onClick={reset}
          className="group flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 hover:ring-2 ring-gray-300 rounded-lg transition"
        >
          Reset <RefreshCcw className="w-4 h-4 group-hover:rotate-90 transition" />
        </button>
      </div>

      {/* Result */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-500 mb-1">Result</p>
        <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm border">
          {result || "No result yet"}
        </div>
      </div>

      {/* Optional Venn SVG placeholder */}
      <div className="mt-4">
        <div className="w-full flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute w-40 h-40 bg-blue-200 opacity-50 rounded-full top-8 left-4" />
            <div className="absolute w-40 h-40 bg-green-200 opacity-50 rounded-full top-8 left-20" />
            <div className="absolute w-40 h-40 bg-purple-200 opacity-50 rounded-full top-16 left-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VennThreeSets;

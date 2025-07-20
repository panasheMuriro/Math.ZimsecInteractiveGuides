// components/PartialVariation.tsx

import VariationGraphTemplate from "./VariationGraphTemplate";

export default function PartialVariation() {
  return (
    <VariationGraphTemplate
      title="Partial Variation"
      formula={`y = a + \\frac{b}{x}`}
      type="partial"
      constantLabels={["a", "b"]}
      defaultConstants={{ a: 5, b: 10 }}
      computeY={(x, { a, b }) => a + b / x}
      lineColor="#ef4444"
    />
  );
}

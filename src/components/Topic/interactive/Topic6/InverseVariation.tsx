// components/InverseVariation.tsx

import VariationGraphTemplate from "./VariationGraphTemplate";

export default function InverseVariation() {
  return (
    <VariationGraphTemplate
      title="Inverse Variation"
      formula={`y = \\frac{k}{x}`}
      type="inverse"
      constantLabels={["Enter the value of k"]}
      defaultConstants={{ k: 20 }}
      computeY={(x, { k }) => k / x}
      lineColor="#f59e0b"
    />
  );
}

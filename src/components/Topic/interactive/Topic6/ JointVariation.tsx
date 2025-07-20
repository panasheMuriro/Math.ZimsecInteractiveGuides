// components/JointVariation.tsx

import VariationGraphTemplate from "./VariationGraphTemplate";

export default function JointVariation() {
  return (
    <VariationGraphTemplate
      title="Joint Variation"
      formula="z = kxy"
      type="joint"
      constantLabels={["k", "y"]}
      defaultConstants={{ k: 1, y: 2 }}
      computeY={(x, { k, y }) => k * x * y}
      lineColor="#6366f1"
    />
  );
}

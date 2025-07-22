import React, { useState } from "react";

const SimilarityCongruency = () => {
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setScaleFactor(value);
    setIsRotated(value < 0);
  };

  // Calculate properties based on scale factor
  const isCongruent = scaleFactor === 1;
  const isEnlargement = scaleFactor > 1;
  const isReduction = scaleFactor > 0 && scaleFactor < 1;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* Title */}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          Interactive Shape Transformer
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Adjust the scale factor to see how the shape changes. Observe
          similarity and congruency!
        </p>

        {/* Scale Factor Slider */}
        <div className="mb-4">
          <label
            htmlFor="scaleFactor"
            className="block text-sm font-medium text-gray-700"
          >
            Scale Factor (k): {scaleFactor.toFixed(2)}
          </label>
          <input
            type="range"
            id="scaleFactor"
            min="-2"
            max="2"
            step="0.1"
            value={scaleFactor}
            onChange={handleScaleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Shape Visualization */}
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-32 h-32">
            {/* Original Shape */}
            <div
              className="absolute border-2 border-blue-500"
              style={{
                width: "50px",
                height: "50px",
                transform: "translate(25px, 25px)",
              }}
            ></div>
            {/* Transformed Shape */}
            <div
              className={`absolute border-2 border-red-500 transition-transform duration-300 ${
                isRotated ? "rotate-180" : ""
              }`}
              style={{
                width: `${50 * Math.abs(scaleFactor)}px`,
                height: `${50 * Math.abs(scaleFactor)}px`,
                transform: `translate(${25 * (1 - Math.abs(scaleFactor))}px, ${
                  25 * (1 - Math.abs(scaleFactor))
                }px)`,
                opacity: 0.7,
              }}
            ></div>
          </div>
        </div>

        {/* Feedback */}
        <div className="text-sm text-gray-600">
          <p>
            <strong>Status:</strong>{" "}
            {isCongruent
              ? "Congruent (k = 1)"
              : isEnlargement
              ? "Enlargement (k > 1)"
              : isReduction
              ? "Reduction (0 < k < 1)"
              : isRotated
              ? "Enlargement/Reduction with Rotation (k < 0)"
              : "Similar"}
          </p>
          <p className="mt-2">
            <strong>Observation:</strong>{" "}
            {isCongruent
              ? "The shapes are identical in size and shape."
              : "The shapes are similar but differ in size."}
            {isRotated &&
              " The shape is rotated due to a negative scale factor."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimilarityCongruency;
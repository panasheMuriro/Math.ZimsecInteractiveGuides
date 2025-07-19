/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Gauge,
  Droplets,
  Gem,
  IceCream,
  Soup,
  FlaskConical,
  TestTube,
} from "lucide-react";

const densityUnitsData = {
  title: "Density",
  icon: <Gauge className="w-10 h-10 mx-auto mb-3 text-blue-100" />,
  colorScheme: {
    primary: "bg-[#3B82F6]", // Blue-500
    secondary: "bg-[#2563EB]", // Blue-600
    tertiary: "bg-[#93C5FD]", // Blue-300
  },
  scenarios: [
    {
      id: "water-density",
      title: "Water Density",
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      description: "Pure water has a density of 1 g/cm³ at 4°C",
      question: "Convert this to kg/m³",
      calculation: "kg/m³ = g/cm³ × 1000 = 1 × 1000 = 1000 kg/m³",
      answer: 1000,
      unit: "kg/m³",
      context: "Water density varies slightly with temperature",
    },
    {
      id: "gold-bar",
      title: "Gold Bar",
      icon: <Gem className="w-6 h-6 text-yellow-500" />,
      description: "A gold bar has density 19.3 g/cm³",
      question: "What is this in kg/m³?",
      calculation: "kg/m³ = g/cm³ × 1000 = 19.3 × 1000 = 19,300 kg/m³",
      answer: 19300,
      unit: "kg/m³",
      context: "Gold is one of the densest common metals",
    },
    {
      id: "ice-float",
      title: "Ice Floating",
      icon: <IceCream className="w-6 h-6 text-blue-300" />,
      description: "Ice has density 0.92 g/cm³",
      question: "Convert this to kg/m³",
      calculation: "kg/m³ = g/cm³ × 1000 = 0.92 × 1000 = 920 kg/m³",
      answer: 920,
      unit: "kg/m³",
      context: "Ice floats because it's less dense than liquid water",
    },
    {
      id: "aluminum-foil",
      title: "Aluminum Foil",
      icon: <TestTube className="w-6 h-6 text-gray-400" />,
      description: "Aluminum has density 2.7 g/cm³",
      question: "What is this in kg/m³?",
      calculation: "kg/m³ = g/cm³ × 1000 = 2.7 × 1000 = 2,700 kg/m³",
      answer: 2700,
      unit: "kg/m³",
      context: "Aluminum's low density makes it useful for aircraft",
    },
    {
      id: "oil-density",
      title: "Cooking Oil",
      icon: <Soup className="w-6 h-6 text-yellow-600" />,
      description: "Vegetable oil has density 0.92 g/ml",
      question: "Convert this to kg/m³",
      calculation: "kg/m³ = g/ml × 1000 = 0.92 × 1000 = 920 kg/m³",
      answer: 920,
      unit: "kg/m³",
      context: "Oil floats on water because it's less dense",
    },
    {
      id: "chemical-density",
      title: "Chemical Solution",
      icon: <FlaskConical className="w-6 h-6 text-purple-500" />,
      description: "A chemical has density 1.2 g/cm³",
      question: "Convert this to kg/m³",
      calculation: "kg/m³ = g/cm³ × 1000 = 1.2 × 1000 = 1,200 kg/m³",
      answer: 1200,
      unit: "kg/m³",
      context: "Chemists often work with density in g/cm³",
    },
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        kg_m3: {
          symbol: "kg/m³",
          name: "Kilograms per cubic meter",
          toBase: (value: any) => value, // kg/m³ is our base unit
          fromBase: (value: any) => value,
        },
        g_cm3: {
          symbol: "g/cm³",
          name: "Grams per cubic centimeter",
          toBase: (value: number) => value * 1000,
          fromBase: (value: number) => value / 1000,
        },
        g_ml: {
          symbol: "g/ml",
          name: "Grams per milliliter",
          toBase: (value: number) => value * 1000,
          fromBase: (value: number) => value / 1000,
        },
      },
    },
  },
  quickReferences: [
    "1 g/cm³ = 1000 kg/m³",
    "1 g/ml = 1 g/cm³ (for liquids)",
    "Water: 1 g/cm³ = 1000 kg/m³",
    "Gold: 19.3 g/cm³ = 19,300 kg/m³",
    "Aluminum: 2.7 g/cm³ = 2,700 kg/m³",
    "Ice: 0.92 g/cm³ = 920 kg/m³",
  ],
};


import MeasurementUnits from "./MeasurementUnits";

export default function DensityUnits() {
  return <MeasurementUnits {...densityUnitsData} />;
}

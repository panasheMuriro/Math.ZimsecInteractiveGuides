/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Scale,
  ShoppingCart,
  Truck,
  Baby,
  Apple,
  Wheat,
  ArrowDownUp,
} from "lucide-react";
import MeasurementUnits from "./MeasurementUnits";

const massUnitsData = {
  title: "Mass",
  icon: <Scale className="w-10 h-10 mx-auto mb-3 text-yellow-400" />,
  colorScheme: {
    primary: "bg-[#98A1BC]", // Blue-gray
    secondary: "bg-[#6B7280]", // Gray-600
    tertiary: "bg-[#A78BFA]", // Purple-400
  },
  scenarios: [
    {
      id: "mealie-meal",
      title: "Mealie Meal",
      icon: <Wheat className="w-6 h-6 text-green-600" />,
      description: "A 10kg bag of mealie meal (staple food in Zimbabwe)",
      question: "How many grams is this bag?",
      calculation: "10 kg × 1000 g/kg = 10,000 g",
      answer: 10000,
      unit: "grams",
      context: "Mealie meal is used to make sadza, the staple food",
      difficulty: "easy",
    },
    {
      id: "sugar-beans",
      title: "Sugar Beans",
      icon: <Apple className="w-6 h-6 text-red-600" />,
      description: "A 2kg packet of sugar beans costs about $3 USD",
      question: "What is the mass in grams?",
      calculation: "2 kg × 1000 g/kg = 2,000 g",
      answer: 2000,
      unit: "grams",
      context: "Sugar beans are a popular protein source",
      difficulty: "easy",
    },
    {
      id: "newborn-baby",
      title: "Newborn Baby",
      icon: <Baby className="w-6 h-6 text-pink-600" />,
      description: "A healthy newborn baby weighs 3.2 kg",
      question: "What is this weight in grams?",
      calculation: "3.2 kg × 1000 g/kg = 3,200 g",
      answer: 3200,
      unit: "grams",
      context: "Normal birth weight ranges from 2.5-4.0 kg",
      difficulty: "easy",
    },
    {
      id: "cooking-oil",
      title: "Cooking Oil",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      description: "A 750ml bottle of cooking oil weighs about 0.75 kg",
      question: "What is this mass in grams?",
      calculation: "0.75 kg × 1000 g/kg = 750 g",
      answer: 750,
      unit: "grams",
      context: "Cooking oil is essential for traditional cooking",
      difficulty: "medium",
    },
    {
      id: "cement-bag",
      title: "Cement Bag",
      icon: <Truck className="w-6 h-6 text-amber-600" />,
      description: "A standard cement bag weighs 50,000 grams",
      question: "What is this mass in kilograms?",
      calculation: "50,000 g ÷ 1000 g/kg = 50 kg",
      answer: 50,
      unit: "kilograms",
      context: "Used for construction and building",
      difficulty: "medium",
    },
    {
      id: "maize-harvest",
      title: "Maize Harvest",
      icon: <Wheat className="w-6 h-6 text-yellow-600" />,
      description: "A small-scale farmer harvests 2.5 tonnes of maize",
      question: "What is this mass in kilograms?",
      calculation: "2.5 tonnes × 1000 kg/tonne = 2,500 kg",
      answer: 2500,
      unit: "kilograms",
      context: "Maize is Zimbabwe's main crop",
      difficulty: "medium",
    },
    {
      id: "gold-nugget",
      title: "Gold Nugget",
      icon: <Scale className="w-6 h-6 text-amber-400" />,
      description: "A gold nugget weighs 15.5 grams",
      question: "What is this mass in milligrams?",
      calculation: "15.5 g × 1000 mg/g = 15,500 mg",
      answer: 15500,
      unit: "milligrams",
      context: "Gold mining is important to Zimbabwe's economy",
      difficulty: "hard",
    },
    {
      id: "medicine-dose",
      title: "Medicine Dose",
      icon: <Baby className="w-6 h-6 text-purple-600" />,
      description:
        "A paracetamol tablet contains 500 milligrams of active ingredient",
      question: "What is this mass in grams?",
      calculation: "500 mg ÷ 1000 mg/g = 0.5 g",
      answer: 0.5,
      unit: "grams",
      context: "Understanding medicine dosages is important for health",
      difficulty: "hard",
    },
    {
      id: "truck-load",
      title: "Truck Load",
      icon: <Truck className="w-6 h-6 text-gray-600" />,
      description: "A delivery truck carries 3.2 tonnes of goods",
      question: "What is this mass in grams?",
      calculation: "3.2 tonnes × 1000 kg/tonne × 1000 g/kg = 3,200,000 g",
      answer: 3200000,
      unit: "grams",
      context: "Heavy goods transport for commerce",
      difficulty: "hard",
    },
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        mg: {
          symbol: "mg",
          name: "Milligram",
          toBase: (value: number) => value * 0.001, // to grams
          fromBase: (value: number) => value / 0.001,
        },
        g: {
          symbol: "g",
          name: "Gram",
          toBase: (value: any) => value,
          fromBase: (value: any) => value,
        },
        kg: {
          symbol: "kg",
          name: "Kilogram",
          toBase: (value: number) => value * 1000,
          fromBase: (value: number) => value / 1000,
        },
        tonne: {
          symbol: "t",
          name: "Tonne",
          toBase: (value: number) => value * 1000000,
          fromBase: (value: number) => value / 1000000,
        },
      },
    },
    imperial: {
      name: "Imperial",
      units: {
        oz: {
          symbol: "oz",
          name: "Ounce",
          toBase: (value: number) => value * 28.3495, // to grams
          fromBase: (value: number) => value / 28.3495,
        },
        lb: {
          symbol: "lb",
          name: "Pound",
          toBase: (value: number) => value * 453.592,
          fromBase: (value: number) => value / 453.592,
        },
        st: {
          symbol: "st",
          name: "Stone",
          toBase: (value: number) => value * 6350.29,
          fromBase: (value: number) => value / 6350.29,
        },
        ton: {
          symbol: "ton",
          name: "Ton",
          toBase: (value: number) => value * 907185,
          fromBase: (value: number) => value / 907185,
        },
      },
    },
  },
  quickReferences: [
    "1 kg = 1000 g",
    "1 g = 1000 mg",
    "1 tonne = 1000 kg",
    "1 pound = 16 ounces ≈ 453.6 g",
    "1 stone = 14 pounds ≈ 6.35 kg",
  ],
  swapIcon: <ArrowDownUp className="w-5 h-5" />,
};


export default function MassUnits() {
  return (
    <>
      return <MeasurementUnits {...massUnitsData} />;
    </>
  );
}

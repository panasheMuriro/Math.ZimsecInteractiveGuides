/* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  Thermometer, 
  Sun, 
  Snowflake, 
  Flame, 
  Stethoscope,
  Calculator
} from 'lucide-react';
import MeasurementUnitsTemplate from './MeasurementUnitsTemplate';

const temperatureUnitsData = {
  title: "Temperature",
  icon: <Thermometer className="w-10 h-10 mx-auto mb-3 text-yellow-300" />,
  colorScheme: {
    primary: "bg-[#D96F32]", // Red-600
    secondary: "bg-[#C75D2C]", // Red-800
    tertiary: "bg-[#F8B259]", // Amber-500
  },
  scenarios: [
    {
      id: 'harare-summer',
      title: 'Harare Summer',
      icon: <Sun className="w-6 h-6 text-orange-500" />,
      description: 'Peak summer temperature in Harare reaches 28°C in December',
      question: 'What is this temperature in Fahrenheit?',
      calculation: '°F = (28 × 9/5) + 32 = 50.4 + 32 = 82.4°F',
      answer: 82.4,
      unit: '°F',
      context: 'Harare has a subtropical highland climate with warm summers',
      // Add options for MCQ
      options: [78.8, 80.6, 82.4, 84.2],
    },
    {
      id: 'winter-morning',
      title: 'Winter Morning',
      icon: <Snowflake className="w-6 h-6 text-blue-400" />,
      description: 'Early morning temperature in Bulawayo in July is 5°C',
      question: 'Convert this to Kelvin scale',
      calculation: 'K = °C + 273.15 = 5 + 273.15 = 278.15 K',
      answer: 278.15,
      unit: 'K',
      context: 'Zimbabwe winters are dry with cool mornings and warm afternoons',
      options: [268.15, 273.15, 278.15, 283.15],
    },
    {
      id: 'cooking-sadza',
      title: 'Cooking Sadza',
      icon: <Flame className="w-6 h-6 text-red-500" />,
      description: 'Water for cooking sadza boils at 100°C in Harare',
      question: 'What is the boiling point in Fahrenheit?',
      calculation: '°F = (100 × 9/5) + 32 = 180 + 32 = 212°F',
      answer: 212,
      unit: '°F',
      context: "Harare's altitude (1,483m) slightly affects boiling point",
      options: [194, 203, 212, 221],
    },
    {
      id: 'fever-check',
      title: 'Fever Check',
      icon: <Stethoscope className="w-6 h-6 text-purple-600" />,
      description: 'A patient has a temperature of 102°F',
      question: 'Convert this fever temperature to Celsius',
      calculation: '°C = (102 - 32) × 5/9 = 70 × 5/9 = 38.9°C',
      answer: 38.9,
      unit: '°C',
      context: 'Normal body temperature is 37°C, so this indicates fever',
      options: [37.8, 38.3, 38.9, 39.4],
    },

  ],
  systems: {
    temperature: {
      name: "Temperature Scales",
      units: {
        celsius: {
          symbol: "°C",
          name: "Celsius",
          toBase: (value: any) => value, // Celsius as base
          fromBase: (value: any) => value,
        },
        fahrenheit: {
          symbol: "°F",
          name: "Fahrenheit",
          toBase: (value: number) => (value - 32) * 5/9, // F to C
          fromBase: (value: number) => (value * 9/5) + 32, // C to F
        },
        kelvin: {
          symbol: "K",
          name: "Kelvin",
          toBase: (value: number) => value - 273.15, // K to C
          fromBase: (value: number) => value + 273.15, // C to K
        },
      },
    },
  },
  quickReferences: [
    "Human body: 37°C = 98.6°F = 310.15 K",
    "Room temperature: 22°C = 72°F = 295.15 K",
    "Water freezes: 0°C = 32°F = 273.15 K",
    "Water boils: 100°C = 212°F = 373.15 K",
    "Absolute zero: -273.15°C = -459.67°F = 0 K"
  ],
  swapIcon: <Calculator className="w-5 h-5" />,
};

export default function TemperatureUnits() {
  return (
    <MeasurementUnitsTemplate {...temperatureUnitsData} />
  );
}
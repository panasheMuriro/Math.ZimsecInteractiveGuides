/* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  Thermometer, 
  Sun, 
  Snowflake, 
  Flame, 
  Cloud, 
  Droplets, 
  Stethoscope,
  Calculator
} from 'lucide-react';
import MeasurementUnits from './MeasurementUnits';

const temperatureUnitsData = {
  title: "Temperature",
  icon: <Thermometer className="w-10 h-10 mx-auto mb-3 text-yellow-300" />,
  colorScheme: {
    primary: "bg-[#C41E3A]", // Red-600
    secondary: "bg-[#991B1B]", // Red-800
    tertiary: "bg-[#F59E0B]", // Amber-500
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
      context: 'Harare has a subtropical highland climate with warm summers'
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
      context: 'Zimbabwe winters are dry with cool mornings and warm afternoons'
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
      context: "Harare's altitude (1,483m) slightly affects boiling point"
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
      context: 'Normal body temperature is 37°C, so this indicates fever'
    },
    {
      id: 'hwange-heat',
      title: 'Hwange Heat',
      icon: <Cloud className="w-6 h-6 text-amber-600" />,
      description: 'Hwange National Park reaches 35°C during hot season',
      question: 'What is this temperature in Fahrenheit?',
      calculation: '°F = (35 × 9/5) + 32 = 63 + 32 = 95°F',
      answer: 95,
      unit: '°F',
      context: 'Hwange experiences extreme heat during the dry season'
    },
    {
      id: 'vumba-cool',
      title: 'Vumba Mountains',
      icon: <Droplets className="w-6 h-6 text-green-500" />,
      description: 'The cool Vumba Mountains average 15°C in winter',
      question: 'Convert this to Kelvin',
      calculation: 'K = °C + 273.15 = 15 + 273.15 = 288.15 K',
      answer: 288.15,
      unit: 'K',
      context: 'The Vumba Mountains are known for their cool, misty climate'
    }
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
    <MeasurementUnits {...temperatureUnitsData} />
  );
}

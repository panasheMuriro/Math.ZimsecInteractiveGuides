/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  Ruler, 
  Home, 
  Car, 
  TreePine, 

  ArrowDownUp,
  Landmark
} from 'lucide-react';

import MeasurementUnitsTemplate from './MeasurementUnitsTemplate';

const lengthUnitsData = {
  title: "Length",
  icon: <Ruler className="w-10 h-10 mx-auto mb-3 text-yellow-400" />,
  colorScheme: {
    primary: "bg-[#4A9782]", // Green-800
    secondary: "bg-[#004030]", // Green-900
    tertiary: "bg-[#DCD0A8]", // Yellow-400
  },
  scenarios: [
    {
      id: 'house',
      title: 'House Plot',
      icon: <Home className="w-6 h-6 text-green-600" />,
      description: 'A typical residential plot in Harare suburbs is 300m²',
      question: 'If the plot is square, what is one side length in meters?',
      calculation: '√300 = 17.32 meters (approximately 17.3m)',
      answer: 17.3,
      unit: 'meters',
      context: 'Most suburban plots in areas like Avondale or Borrowdale',
      // Add options for MCQ
      options: [15.0, 16.5, 17.3, 18.0],
    },
    {
      id: 'kombi',
      title: 'Kombi Route',
      icon: <Car className="w-6 h-6 text-blue-600" />,
      description: 'The distance from Harare CBD to Chitungwiza is 30km',
      question: 'How many meters is this distance?',
      calculation: '30 km × 1000 m/km = 30,000 meters',
      answer: 30000,
      unit: 'meters',
      context: 'One of the busiest kombi routes in Zimbabwe',
      options: [25000, 28000, 30000, 35000],
    },
    {
      id: 'msasa',
      title: 'Msasa Tree',
      icon: <TreePine className="w-6 h-6 text-emerald-600" />,
      description: 'A mature msasa tree can grow up to 25 meters tall',
      question: 'How many centimeters is this height?',
      calculation: '25 m × 100 cm/m = 2,500 centimeters',
      answer: 2500,
      unit: 'centimeters',
      context: 'Msasa trees are common in Zimbabwe\'s miombo woodlands',
      options: [2000, 2250, 2500, 3000],
    },
    {
      id: 'great-wall',
      title: 'Great Zimbabwe Wall',
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      description: 'The Great Enclosure wall is about 11 meters high',
      question: 'How many millimeters is this height?',
      calculation: '11 m × 1000 mm/m = 11,000 millimeters',
      answer: 11000,
      unit: 'millimeters',
      context: 'The iconic stone walls of Great Zimbabwe monument',
      options: [10000, 10500, 11000, 12000],
    },
  
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        mm: {
          symbol: "mm",
          name: "Millimeter",
          toBase: (value: number) => value * 0.001, // to meters
          fromBase: (value: number) => value / 0.001,
        },
        cm: {
          symbol: "cm",
          name: "Centimeter",
          toBase: (value: number) => value * 0.01,
          fromBase: (value: number) => value / 0.01,
        },
        m: {
          symbol: "m",
          name: "Meter",
          toBase: (value: any) => value, // Note: Should be (value: number) => value
          fromBase: (value: any) => value, // Note: Should be (value: number) => value
        },
        km: {
          symbol: "km",
          name: "Kilometer",
          toBase: (value: number) => value * 1000,
          fromBase: (value: number) => value / 1000,
        },
      },
    },
    imperial: {
      name: "Imperial",
      units: {
        in: {
          symbol: "in",
          name: "Inch",
          toBase: (value: number) => value * 0.0254,
          fromBase: (value: number) => value / 0.0254,
        },
        ft: {
          symbol: "ft",
          name: "Foot",
          toBase: (value: number) => value * 0.3048,
          fromBase: (value: number) => value / 0.3048,
        },
        yd: {
          symbol: "yd",
          name: "Yard",
          toBase: (value: number) => value * 0.9144,
          fromBase: (value: number) => value / 0.9144,
        },
        mi: {
          symbol: "mi",
          name: "Mile",
          toBase: (value: number) => value * 1609.344,
          fromBase: (value: number) => value / 1609.344,
        },
      },
    },
  },
  quickReferences: [
    "1 m = 100 cm = 1000 mm",
    "1 km = 1000 m = 100,000 cm",
    "1 foot = 12 inches = 30.48 cm",
    "1 mile = 1.609 km",
    "1 yard = 3 feet = 0.9144 m"
  ],
  swapIcon: <ArrowDownUp className="w-5 h-5" />,
};

// Fix the component return statement
export default function LengthUnits() {
  // Remove the erroneous `<>` and `</>` wrapper
  return <MeasurementUnitsTemplate {...lengthUnitsData} />;
}
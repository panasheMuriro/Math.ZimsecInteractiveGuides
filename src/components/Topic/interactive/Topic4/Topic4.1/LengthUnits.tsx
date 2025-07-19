/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  Ruler, 
  Home, 
  Car, 
  TreePine, 
  Map, 
  Mountain, 

  ArrowDownUp,
  Landmark
} from 'lucide-react';

const lengthUnitsData = {
  title: "Length",
  icon: <Ruler className="w-10 h-10 mx-auto mb-3 text-yellow-400" />,
  colorScheme: {
    primary: "bg-[#2D5A27]", // Green-800
    secondary: "bg-[#166534]", // Green-900
    tertiary: "bg-[#FACC15]", // Yellow-400
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
      context: 'Most suburban plots in areas like Avondale or Borrowdale'
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
      context: 'One of the busiest kombi routes in Zimbabwe'
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
      context: 'Msasa trees are common in Zimbabwe\'s miombo woodlands'
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
      context: 'The iconic stone walls of Great Zimbabwe monument'
    },
    {
      id: 'vic-falls',
      title: 'Victoria Falls',
      icon: <Mountain className="w-6 h-6 text-cyan-600" />,
      description: 'Victoria Falls is 1.7 kilometers wide',
      question: 'How many meters wide is the waterfall?',
      calculation: '1.7 km × 1000 m/km = 1,700 meters',
      answer: 1700,
      unit: 'meters',
      context: 'One of the Seven Natural Wonders of the World'
    },
    {
      id: 'field',
      title: 'Maize Field',
      icon: <Map className="w-6 h-6 text-yellow-600" />,
      description: 'A communal farming plot is typically 2 hectares',
      question: 'If rectangular with 200m length, what is the width?',
      calculation: '2 hectares = 20,000 m². Width = 20,000 ÷ 200 = 100 meters',
      answer: 100,
      unit: 'meters',
      context: 'Common size for communal land farming plots'
    }
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
          toBase: (value: any) => value,
          fromBase: (value: any) => value,
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


import MeasurementUnits from './MeasurementUnits';

export default function LengthUnits() {
  return (
    <>
     <MeasurementUnits {...lengthUnitsData} />
    </>
  );
}

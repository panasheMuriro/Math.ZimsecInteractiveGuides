/* eslint-disable @typescript-eslint/no-explicit-any */
import { Crop, Home, LandPlot, Mountain, Ruler, Trees, Warehouse } from "lucide-react";
import MeasurementUnits from "./MeasurementUnits";

export const areaUnitsData = {
  title: "Area Units",
  icon: <LandPlot className="w-10 h-10 mx-auto mb-3 text-green-100" />,
  colorScheme: {
    primary: "bg-[#4caf50]",
    secondary: "bg-[#15803d]",
    tertiary: "bg-[#86efac]"
  },
  scenarios: [
    {
      id: 'house-size',
      title: 'House Size',
      icon: <Home className="w-6 h-6 text-amber-600" />,
      description: 'A typical suburban house occupies 200 square meters',
      question: 'How many square centimeters is this?',
      calculation: 'cm² = m² × 10,000 = 200 × 10,000 = 2,000,000 cm²',
      answer: 2000000,
      unit: 'cm²',
      context: 'House sizes are typically measured in square meters'
    },
    {
      id: 'farm-land',
      title: 'Farm Land',
      icon: <Trees className="w-6 h-6 text-green-600" />,
      description: 'A farm measures 5 hectares',
      question: 'Convert this to acres',
      calculation: 'acres = ha × 2.471 = 5 × 2.471 ≈ 12.36 acres',
      answer: 12.36,
      unit: 'acres',
      context: 'Agricultural land is often measured in hectares or acres'
    },
    {
      id: 'city-area',
      title: 'City Area',
      icon: <Warehouse className="w-6 h-6 text-gray-600" />,
      description: 'Harare covers approximately 960 square kilometers',
      question: 'How many hectares is this?',
      calculation: 'ha = km² × 100 = 960 × 100 = 96,000 ha',
      answer: 96000,
      unit: 'ha',
      context: 'City areas are typically measured in square kilometers'
    },
    {
      id: 'construction',
      title: 'Construction Site',
      icon: <Ruler className="w-6 h-6 text-blue-600" />,
      description: 'A construction plot measures 10,000 square feet',
      question: 'Convert this to square meters',
      calculation: 'm² = ft² × 0.093 = 10,000 × 0.093 ≈ 930 m²',
      answer: 930,
      unit: 'm²',
      context: 'Construction projects often use both metric and imperial units'
    },
    {
      id: 'national-park',
      title: 'National Park',
      icon: <Mountain className="w-6 h-6 text-brown-600" />,
      description: 'Hwange National Park covers 14,651 square kilometers',
      question: 'Convert this to hectares',
      calculation: 'ha = km² × 100 = 14,651 × 100 = 1,465,100 ha',
      answer: 1465100,
      unit: 'ha',
      context: 'Large natural areas are measured in square kilometers'
    },
    {
      id: 'garden-plot',
      title: 'Garden Plot',
      icon: <Crop className="w-6 h-6 text-lime-600" />,
      description: 'A vegetable garden measures 800 square feet',
      question: 'Convert this to square yards',
      calculation: 'yd² = ft² ÷ 9 = 800 ÷ 9 ≈ 88.89 yd²',
      answer: 88.89,
      unit: 'yd²',
      context: 'Residential gardens are often measured in square feet'
    }
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        mm2: {
          symbol: "mm²",
          name: "Square Millimeter",
          toBase: (value: number) => value / 1000000,
          fromBase: (value: number) => value * 1000000
        },
        cm2: {
          symbol: "cm²",
          name: "Square Centimeter",
          toBase: (value: number) => value / 10000,
          fromBase: (value: number) => value * 10000
        },
        m2: {
          symbol: "m²",
          name: "Square Meter",
          toBase: (value: any) => value,
          fromBase: (value: any) => value
        },
        ha: {
          symbol: "ha",
          name: "Hectare",
          toBase: (value: number) => value * 10000,
          fromBase: (value: number) => value / 10000
        },
        km2: {
          symbol: "km²",
          name: "Square Kilometer",
          toBase: (value: number) => value * 1000000,
          fromBase: (value: number) => value / 1000000
        }
      }
    },
    imperial: {
      name: "Imperial",
      units: {
        in2: {
          symbol: "in²",
          name: "Square Inch",
          toBase: (value: number) => value * 0.00064516,
          fromBase: (value: number) => value / 0.00064516
        },
        ft2: {
          symbol: "ft²",
          name: "Square Foot",
          toBase: (value: number) => value * 0.092903,
          fromBase: (value: number) => value / 0.092903
        },
        yd2: {
          symbol: "yd²",
          name: "Square Yard",
          toBase: (value: number) => value * 0.836127,
          fromBase: (value: number) => value / 0.836127
        },
        acre: {
          symbol: "acres",
          name: "Acre",
          toBase: (value: number) => value * 4046.86,
          fromBase: (value: number) => value / 4046.86
        }
      }
    }
  },
  quickReferences: [
    "1 m² = 10.764 ft² = 1.196 yd²",
    "1 km² = 247 acres = 100 ha",
    "1 acre = 4046.86 m² = 0.405 ha",
    "1 ha = 2.471 acres = 10,000 m²"
  ]
};

export default function AreaUnits() {
  return (
    <MeasurementUnits {...areaUnitsData} />
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const volumeUnitsData = {
  title: "Volume Units",
  icon: <Box className="w-10 h-10 mx-auto mb-3 text-purple-100" />,
  colorScheme: {
    primary: "bg-[#7E22CE]",
    secondary: "bg-[#5E35B1]",
    tertiary: "bg-[#9575CD]"
  },
  scenarios: [
    {
      id: 'swimming-pool',
      title: 'Swimming Pool',
      icon: <Container className="w-6 h-6 text-blue-600" />,
      description: 'An Olympic swimming pool contains 2,500 cubic meters of water',
      question: 'Convert this to liters',
      calculation: 'L = m³ × 1000 = 2,500 × 1000 = 2,500,000 L',
      answer: 2500000,
      unit: 'L',
      context: 'Large volumes of liquids are often measured in cubic meters or liters'
    },
    {
      id: 'shipping-container',
      title: 'Shipping Container',
      icon: <Truck className="w-6 h-6 text-orange-600" />,
      description: 'A standard shipping container has 33.2 cubic meters of volume',
      question: 'Convert this to cubic feet',
      calculation: 'ft³ = m³ × 35.315 = 33.2 × 35.315 ≈ 1,172 ft³',
      answer: 1172,
      unit: 'ft³',
      context: 'Shipping containers use both metric and imperial measurements'
    },
    {
      id: 'science-lab',
      title: 'Science Lab',
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      description: 'A chemical solution measures 500 cubic centimeters',
      question: 'How many milliliters is this?',
      calculation: 'ml = cm³ = 500 ml',
      answer: 500,
      unit: 'ml',
      context: 'In science, 1 cm³ equals exactly 1 milliliter'
    },
    {
      id: 'construction-site',
      title: 'Construction Site',
      icon: <Building className="w-6 h-6 text-gray-600" />,
      description: 'A concrete pour requires 15 cubic yards of material',
      question: 'Convert this to cubic meters',
      calculation: 'm³ = yd³ × 0.765 = 15 × 0.765 ≈ 11.47 m³',
      answer: 11.47,
      unit: 'm³',
      context: 'Construction projects often use cubic yards for large volumes'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: <Factory className="w-6 h-6 text-red-600" />,
      description: 'A machine part has a volume of 120 cubic inches',
      question: 'Convert this to cubic centimeters',
      calculation: 'cm³ = in³ × 16.387 = 120 × 16.387 ≈ 1,966 cm³',
      answer: 1966,
      unit: 'cm³',
      context: 'Precision manufacturing often uses cubic inches or centimeters'
    },
    {
      id: 'warehouse',
      title: 'Warehouse',
      icon: <Warehouse className="w-6 h-6 text-brown-600" />,
      description: 'A warehouse has 50,000 cubic feet of storage space',
      question: 'Convert this to cubic meters',
      calculation: 'm³ = ft³ × 0.028 = 50,000 × 0.028 ≈ 1,400 m³',
      answer: 1400,
      unit: 'm³',
      context: 'Warehouse capacities are often measured in cubic feet'
    }
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        mm3: {
          symbol: "mm³",
          name: "Cubic Millimeter",
          toBase: (value: number) => value / 1000000000,
          fromBase: (value: number) => value * 1000000000
        },
        cm3: {
          symbol: "cm³",
          name: "Cubic Centimeter",
          toBase: (value: number) => value / 1000000,
          fromBase: (value: number) => value * 1000000
        },
        m3: {
          symbol: "m³",
          name: "Cubic Meter",
          toBase: (value: any) => value,
          fromBase: (value: any) => value
        },
        km3: {
          symbol: "km³",
          name: "Cubic Kilometer",
          toBase: (value: number) => value * 1000000000,
          fromBase: (value: number) => value / 1000000000
        },
        l: {
          symbol: "L",
          name: "Liter",
          toBase: (value: number) => value / 1000,
          fromBase: (value: number) => value * 1000
        }
      }
    },
    imperial: {
      name: "Imperial",
      units: {
        in3: {
          symbol: "in³",
          name: "Cubic Inch",
          toBase: (value: number) => value * 0.000016387,
          fromBase: (value: number) => value / 0.000016387
        },
        ft3: {
          symbol: "ft³",
          name: "Cubic Foot",
          toBase: (value: number) => value * 0.0283168,
          fromBase: (value: number) => value / 0.0283168
        },
        yd3: {
          symbol: "yd³",
          name: "Cubic Yard",
          toBase: (value: number) => value * 0.764555,
          fromBase: (value: number) => value / 0.764555
        }
      }
    }
  },
  quickReferences: [
    "1 m³ = 35.315 ft³ = 1.308 yd³",
    "1 L = 1,000 cm³ = 61.02 in³",
    "1 ft³ = 28.317 L = 0.028 m³",
    "1 yd³ = 0.765 m³ = 764.555 L"
  ]
};

import { Box, Building, Container, Factory, FlaskConical, Truck, Warehouse } from 'lucide-react';
import MeasurementUnits from './MeasurementUnits';

export default function VolumeUnits() {
  return (
   <MeasurementUnits  {...volumeUnitsData} />
  );
}

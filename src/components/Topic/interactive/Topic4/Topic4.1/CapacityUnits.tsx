/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  Droplet, 
  FlaskConical, 
  GlassWater, 
  CookingPot, 
  Fuel, 
  Syringe,
  RefreshCw
} from 'lucide-react';

const capacityUnitsData = {
  title: "Capacity",
  icon: <Droplet className="w-10 h-10 mx-auto mb-3 text-blue-100" />,
  colorScheme: {
    primary: "bg-[#1E88E5]", // Blue-600
    secondary: "bg-[#1E40AF]", // Blue-800
    tertiary: "bg-[#60A5FA]", // Blue-400
  },
  scenarios: [
    {
      id: 'cooking-recipe',
      title: 'Cooking Recipe',
      icon: <CookingPot className="w-6 h-6 text-amber-600" />,
      description: 'A recipe calls for 2.5 liters of water',
      question: 'How many milliliters is this?',
      calculation: 'ml = L × 1000 = 2.5 × 1000 = 2500 ml',
      answer: 2500,
      unit: 'ml',
      context: 'Most cooking measurements use metric units for precision'
    },
    {
      id: 'fuel-purchase',
      title: 'Fuel Purchase',
      icon: <Fuel className="w-6 h-6 text-blue-800" />,
      description: 'A car fuel tank holds 45 liters of petrol',
      question: 'Convert this to gallons (imperial)',
      calculation: 'gal = L ÷ 4.546 = 45 ÷ 4.546 ≈ 9.90 gal',
      answer: 9.9,
      unit: 'gal',
      context: 'Fuel is often measured in liters but some countries use gallons'
    },
    {
      id: 'medical-dose',
      title: 'Medical Dose',
      icon: <Syringe className="w-6 h-6 text-red-500" />,
      description: 'A child needs 5 ml of medicine',
      question: 'Convert this to fluid ounces',
      calculation: 'fl oz = ml ÷ 29.57 = 5 ÷ 29.57 ≈ 0.17 fl oz',
      answer: 0.17,
      unit: 'fl oz',
      context: 'Medical doses are typically in ml for accuracy'
    },
    {
      id: 'beverage-serving',
      title: 'Beverage Serving',
      icon: <GlassWater className="w-6 h-6 text-blue-400" />,
      description: 'A pub serves beer in 568 ml pints',
      question: 'How many liters is one pint?',
      calculation: 'L = ml ÷ 1000 = 568 ÷ 1000 = 0.568 L',
      answer: 0.568,
      unit: 'L',
      context: 'Pubs often serve both metric and imperial measures'
    },
    {
      id: 'water-bottle',
      title: 'Water Bottle',
      icon: <Droplet className="w-6 h-6 text-blue-300" />,
      description: 'A water bottle contains 750 ml',
      question: 'Convert this to fluid ounces',
      calculation: 'fl oz = ml ÷ 29.57 = 750 ÷ 29.57 ≈ 25.36 fl oz',
      answer: 25.36,
      unit: 'fl oz',
      context: 'Bottled water sizes vary internationally'
    },
    {
      id: 'swimming-pool',
      title: 'Swimming Pool',
      icon: <FlaskConical className="w-6 h-6 text-cyan-500" />,
      description: 'A pool contains 50,000 liters of water',
      question: 'Convert this to kiloliters',
      calculation: 'kL = L ÷ 1000 = 50000 ÷ 1000 = 50 kL',
      answer: 50,
      unit: 'kL',
      context: 'Large volumes are often measured in kiloliters'
    }
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        ml: {
          symbol: "ml",
          name: "Milliliter",
          toBase: (value: any) => value, // ml is base
          fromBase: (value: any) => value,
        },
        l: {
          symbol: "L",
          name: "Liter",
          toBase: (value: number) => value * 1000,
          fromBase: (value: number) => value / 1000,
        },
        kl: {
          symbol: "kL",
          name: "Kiloliter",
          toBase: (value: number) => value * 1000000,
          fromBase: (value: number) => value / 1000000,
        },
      },
    },
    imperial: {
      name: "Imperial",
      units: {
        floz: {
          symbol: "fl oz",
          name: "Fluid Ounce",
          toBase: (value: number) => value * 29.5735,
          fromBase: (value: number) => value / 29.5735,
        },
        pt: {
          symbol: "pt",
          name: "Pint",
          toBase: (value: number) => value * 568.261,
          fromBase: (value: number) => value / 568.261,
        },
        qt: {
          symbol: "qt",
          name: "Quart",
          toBase: (value: number) => value * 1136.52,
          fromBase: (value: number) => value / 1136.52,
        },
        gal: {
          symbol: "gal",
          name: "Gallon",
          toBase: (value: number) => value * 4546.09,
          fromBase: (value: number) => value / 4546.09,
        },
      },
    },
  },
  quickReferences: [
    "1 liter = 1000 ml = 33.81 fl oz",
    "1 gallon = 4.546 L = 8 pints",
    "1 pint = 568 ml = 20 fl oz",
    "1 fl oz = 29.57 ml",
    "1 ml = 1 cm³ (for liquids)"
  ],
  swapIcon: <RefreshCw className="w-5 h-5" />,
};

import MeasurementUnits from './MeasurementUnits';

export default function CapacityUnits() {
  return (
    <>
     <MeasurementUnits {...capacityUnitsData} />
    </>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Clock,
  Calendar,
  Sunrise,
  BookOpen,
  Bus,
  Home,
  Coffee,
  ArrowDownUp,
} from "lucide-react";

const timeUnitsData = {
  title: "Time",
  icon: <Clock className="w-10 h-10 mx-auto mb-3 text-fuchsia-600" />,
  colorScheme: {
    primary: "bg-[#78B9B5]", // Teal
    secondary: "bg-[#4B7B8F]", // Darker teal
    tertiary: "bg-[#A78BFA]", // Purple-400
  },
  scenarios: [
    {
      id: "school",
      title: "School Day",
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      description:
        "Zimbabwean schools typically start at 7:30 AM and end at 4:30 PM",
      question: "How many hours is a typical school day?",
      calculation: "4:30 PM - 7:30 AM = 16:30 - 7:30 = 9 hours",
      answer: 9,
      unit: "hours",
      context: "This includes lessons, breaks, and lunch time",
    },
    {
      id: "kombi",
      title: "Kombi Journey",
      icon: <Bus className="w-6 h-6 text-teal-600" />,
      description:
        "Journey from Harare to Bulawayo by kombi takes about 5.5 hours",
      question: "How many minutes is this journey?",
      calculation: "5.5 hours × 60 minutes/hour = 330 minutes",
      answer: 330,
      unit: "minutes",
      context: "The 430km journey is a common intercity route",
    },
    {
      id: "cooking",
      title: "Cooking Sadza",
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      description: "Making sadza takes about 45 minutes from start to finish",
      question: "How many seconds is this cooking time?",
      calculation: "45 minutes × 60 seconds/minute = 2700 seconds",
      answer: 2700,
      unit: "seconds",
      context: "This includes preparing the fire and cooking time",
    },
    {
      id: "rainfall",
      title: "Rainy Season",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      description: "Zimbabwe's rainy season lasts from November to March",
      question: "How many weeks is this approximately?",
      calculation: "5 months × 4 weeks/month = 20 weeks",
      answer: 20,
      unit: "weeks",
      context: "This is the main agricultural season",
    },
    {
      id: "sunrise",
      title: "Daylight Hours",
      icon: <Sunrise className="w-6 h-6 text-orange-500" />,
      description: "In December, sunrise is at 5:30 AM, sunset at 6:30 PM",
      question: "How many hours of daylight is this?",
      calculation: "6:30 PM - 5:30 AM = 18:30 - 5:30 = 13 hours",
      answer: 13,
      unit: "hours",
      context: "Zimbabwe has long summer days",
    },
    {
      id: "work",
      title: "Working Week",
      icon: <Home className="w-6 h-6 text-indigo-600" />,
      description: "A standard working week in Zimbabwe is 40 hours",
      question: "How many minutes is this?",
      calculation: "40 hours × 60 minutes/hour = 2400 minutes",
      answer: 2400,
      unit: "minutes",
      context: "This is spread across Monday to Friday",
    },
  ],
  systems: {
    standard: {
      name: "Standard",
      units: {
        seconds: {
          symbol: "sec",
          name: "Seconds",
          toBase: (value: any) => value,
          fromBase: (value: any) => value,
        },
        minutes: {
          symbol: "min",
          name: "Minutes",
          toBase: (value: number) => value * 60,
          fromBase: (value: number) => value / 60,
        },
        hours: {
          symbol: "hrs",
          name: "Hours",
          toBase: (value: number) => value * 3600,
          fromBase: (value: number) => value / 3600,
        },
        days: {
          symbol: "days",
          name: "Days",
          toBase: (value: number) => value * 86400,
          fromBase: (value: number) => value / 86400,
        },
        weeks: {
          symbol: "wks",
          name: "Weeks",
          toBase: (value: number) => value * 604800,
          fromBase: (value: number) => value / 604800,
        },
        months: {
          symbol: "mths",
          name: "Months",
          toBase: (value: number) => value * 2629800, // Approximate
          fromBase: (value: number) => value / 2629800,
        },
        years: {
          symbol: "yrs",
          name: "Years",
          toBase: (value: number) => value * 31557600, // Approximate
          fromBase: (value: number) => value / 31557600,
        },
      },
    },
    military: {
      name: "Military",
      units: {
        militaryHours: {
          symbol: "hrs",
          name: "Military Hours",
          toBase: (value: number) => value * 3600,
          fromBase: (value: number) => value / 3600,
        },
        shifts: {
          symbol: "shifts",
          name: "8-hour Shifts",
          toBase: (value: number) => value * 28800,
          fromBase: (value: number) => value / 28800,
        },
        watches: {
          symbol: "watches",
          name: "4-hour Watches",
          toBase: (value: number) => value * 14400,
          fromBase: (value: number) => value / 14400,
        },
      },
    },
  },
  quickReferences: [
    "1 hour = 60 minutes = 3600 seconds",
    "1 day = 24 hours = 1440 minutes",
    "1 week = 7 days = 168 hours",
    "1 month ≈ 4 weeks ≈ 30 days",
    "1 year = 365 days ≈ 52 weeks",
  ],
  swapIcon: <ArrowDownUp className="w-5 h-5" />,
};

import MeasurementUnits from "./MeasurementUnits";

export default function TimeUnits() {
  return <MeasurementUnits {...timeUnitsData} />;
}

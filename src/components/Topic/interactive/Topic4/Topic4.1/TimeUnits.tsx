
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Clock,
  BookOpen,
  Bus,
  Coffee,
  ArrowDownUp,
} from "lucide-react";
import MeasurementUnitsTemplate from "./MeasurementUnitsTemplate";

const timeUnitsData = {
  title: "Time",
  icon: <Clock className="w-10 h-10 mx-auto mb-3 text-fuchsia-600" />,
  colorScheme: {
    primary: "bg-[#456882]", 
    secondary: "bg-[#1B3C53]", // Darker teal
    tertiary: "bg-[#D2C1B6]", // Purple-400
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
      options: [7, 8, 9, 10], // Added options for MCQ
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
      options: [300, 315, 330, 360], // Added options for MCQ
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
      options: [1800, 2400, 2700, 3000], // Added options for MCQ
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

export default function TimeUnits() {
  return <MeasurementUnitsTemplate {...timeUnitsData} />;
}
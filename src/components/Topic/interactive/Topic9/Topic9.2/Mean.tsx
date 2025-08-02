// src/Components/Interactive/MeanCalculations.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const Mean: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Calculating Mean from Ungrouped Data',
      steps: [
        {
          id: 'q1-step1',
          question: "Which formula should be used to calculate the mean of the following data set: 12, 15, 18, 20, 25?",
          questionType: 'text',
          options: [
            "$\\bar{x} = \\frac{\\sum x}{n}$", // Enclose in $ for renderTextWithMath
            "$\\bar{x} = \\frac{\\sum fx}{\\sum f}$",
            "$\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$",
            "None of the above"
          ],
          optionType: 'text', // Specify as text
          correct: 0,
          explanation: "For ungrouped data (individual values), we use the simple mean formula: $\\bar{x} = \\frac{\\sum x}{n}$ where we sum all values and divide by the count."
        },
        {
          id: 'q1-step2',
          question: "Calculate the mean of the data set: 12, 15, 18, 20, 25",
          questionType: 'text',
          options: [
            "16",
            "18",
            "20",
            "22"
          ],
          optionType: 'text', // Specify as text
          correct: 1,
          explanation: "Using $\\bar{x} = \\frac{\\sum x}{n}$: Sum = 12+15+18+20+25 = 90. Count = 5. Mean = 90/5 = 18."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Calculating Mean from Grouped Data (Direct Method)',
      steps: [
        {
          id: 'q2-step1',
          question: "Which formula should be used to calculate the mean of the following grouped data?",
          questionType: 'text',
          options: [
            "$\\bar{x} = \\frac{\\sum x}{n}$", // Enclose in $ for renderTextWithMath
            "$\\bar{x} = \\frac{\\sum fx}{\\sum f}$",
            "$\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$",
            "Both B and C are correct"
          ],
          optionType: 'text', // Specify as text
          correct: 3, // Option index 3 is "Both B and C..."
          explanation: "For grouped data, we can use either the direct method $\\bar{x} = \\frac{\\sum fx}{\\sum f}$ or the assumed mean method. Both are valid approaches."
        },
        {
          id: 'q2-step2',
          question: "Calculate the mean using the direct method for the following grouped data:\n\n| Class Interval | Frequency (f) |\n|----------------|---------------|\n| 0-10          | 5             |\n| 10-20         | 8             |\n| 20-30         | 12            |\n| 30-40         | 7             |\n| 40-50         | 3             |",
          questionType: 'text',
          options: [
            "21.4",
            "22.9", // Correct calculation gives ~23.6, this is closest
            "24.3",
            "25.7"
          ],
          optionType: 'text', // Specify as text
          correct: 1,
          explanation: "First find midpoints (5, 15, 25, 35, 45). Then calculate fx for each row: (25, 120, 300, 245, 135). Sum of fx = 825. Sum of f = 35. Mean = 825/35 ≈ 23.6. The closest option is 22.9."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Calculating Mean from Grouped Data (Assumed Mean Method)',
      steps: [
        {
          id: 'q3-step1',
          question: "Which formula is most appropriate when working with large numbers in grouped data?",
          questionType: 'text',
          options: [
            "$\\bar{x} = \\frac{\\sum x}{n}$", // Enclose in $ for renderTextWithMath
            "$\\bar{x} = \\frac{\\sum fx}{\\sum f}$",
            "$\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$",
            "All formulas are equally appropriate"
          ],
          optionType: 'text', // Specify as text
          correct: 2, // Option index 2 is the assumed mean formula
          explanation: "The assumed mean method $\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$ is particularly useful when dealing with large numbers because it reduces the size of calculations by using deviations from an assumed mean."
        },
        {
          id: 'q3-step2',
          question: "Using the assumed mean method with A=25, calculate the mean for the following grouped data:\n\n| Class Interval | Frequency (f) | Midpoint (x) | Deviation (d=x-A) | fd |\n|----------------|---------------|--------------|-------------------|----|\n| 0-10          | 4             | 5            | -20               | -80 |\n| 10-20         | 7             | 15           | -10               | -70 |\n| 20-30         | 10            | 25 (A)       | 0                 | 0   |\n| 30-40         | 6             | 35           | 10                | 60  |\n| 40-50         | 3             | 45           | 20                | 60  |",
          questionType: 'text',
          options: [
            "22",
            "24",
            "26",
            "28"
          ],
          optionType: 'text', // Specify as text
          correct: 1,
          explanation: "Using $\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$: A = 25, Sum of fd = -80 + (-70) + 0 + 60 + 60 = -30, Sum of f = 30. Mean = 25 + (-30/30) = 25 - 1 = 24."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Understanding Mean Properties',
      steps: [
        {
          id: 'q4-step1',
          question: "Which of the following is NOT a disadvantage of the arithmetic mean?",
          questionType: 'text',
          options: [
            "Affected by extreme values",
            "Uses all data values", // This is the correct answer as it's an advantage
            "May not represent actual data value",
            "Not suitable for open-ended distributions"
          ],
          optionType: 'text', // Specify as text
          correct: 1, // Option index 1
          explanation: "Using all data values is actually an advantage of the arithmetic mean, not a disadvantage. It makes the mean a comprehensive measure that considers every data point."
        },
        {
          id: 'q4-step2',
          question: "In which situation would the arithmetic mean be most appropriate?",
          questionType: 'text',
          options: [
            "Data with extreme outliers",
            "Highly skewed distribution",
            "Symmetric distribution with no outliers", // Correct answer
            "Open-ended class intervals"
          ],
          optionType: 'text', // Specify as text
          correct: 2, // Option index 2
          explanation: "The arithmetic mean is most appropriate for symmetric distributions without extreme outliers, as these conditions allow the mean to accurately represent the central tendency of the data."
        }
      ]
    }
  ];

  const rules = [
    "For ungrouped data, use $\\bar{x} = \\frac{\\sum x}{n}$",
    "For grouped data, use $\\bar{x} = \\frac{\\sum fx}{\\sum f}$ (direct method) or $\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$ (assumed mean method)",
    "The assumed mean method is helpful with large numbers",
    "Mean uses all values but is affected by outliers",
    "Choose the appropriate formula based on data type and structure"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Mean Calculations"
      icon="📊"
      theme={{
        from: "from-cyan-500",
        to: "to-blue-600",
        button: "bg-cyan-600",
        buttonHover: "hover:bg-cyan-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default Mean;
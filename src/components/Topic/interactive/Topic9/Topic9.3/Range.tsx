// src/Components/Interactive/RangeCalculations.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const Range: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Basic Range Calculation',
      steps: [
        {
          id: 'q1-step1',
          question: "What is the formula for calculating the simple range?",
          questionType: 'text',
          options: [
            "$Range = \\frac{H + L}{2}$",
            "$Range = H - L$",
            "$Range = \\frac{H - L}{H + L}$",
            "$Range = \\sqrt{H \\times L}$"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "The simple range is calculated as the difference between the highest value (H) and the lowest value (L): $Range = H - L$."
        },
        {
          id: 'q1-step2',
          question: "Find the range of the following data set: 12, 18, 9, 25, 14, 22, 16",
          questionType: 'text',
          options: [
            "12",
            "16",
            "18",
            "25"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "First, identify the highest and lowest values. Highest = 25, Lowest = 9. Range = 25 - 9 = 16."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Coefficient of Range',
      steps: [
        {
          id: 'q2-step1',
          question: "What is the formula for the coefficient of range?",
          questionType: 'text',
          options: [
            "$\\frac{H + L}{H - L}$",
            "$\\frac{H - L}{2}$",
            "$\\frac{H - L}{H + L}$",
            "$\\frac{H \\times L}{100}$"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The coefficient of range is a relative measure of dispersion calculated as $\\frac{H - L}{H + L}$, where H is the highest value and L is the lowest value."
        },
        {
          id: 'q2-step2',
          question: "Calculate the coefficient of range for the data set: 5, 12, 8, 15, 10, 20",
          questionType: 'text',
          options: [
            "0.33",
            "0.50",
            "0.60",
            "0.75"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "Highest value (H) = 20, Lowest value (L) = 5. Coefficient of range = $\\frac{20 - 5}{20 + 5} = \\frac{15}{25} = 0.60$."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Understanding Range Properties',
      steps: [
        {
          id: 'q3-step1',
          question: "Which of the following is NOT a disadvantage of using the range?",
          questionType: 'text',
          options: [
            "It only considers two extreme values",
            "It is heavily influenced by outliers",
            "It's easy to calculate and understand",
            "It doesn't show the distribution of middle values"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "Being easy to calculate and understand is actually an advantage of the range, not a disadvantage. The other options describe limitations of the range as a measure of dispersion."
        },
        {
          id: 'q3-step2',
          question: "In which situation would the range be most misleading?",
          questionType: 'text',
          options: [
            "A data set with all values very close together",
            "A data set with several extreme outliers",
            "A perfectly symmetric data set",
            "A data set with an equal number of positive and negative values"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "The range is highly sensitive to outliers because it only uses the highest and lowest values. In a data set with extreme outliers, the range would give a misleading impression of the overall variability."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Range Applications',
      steps: [
        {
          id: 'q4-step1',
          question: "For which application is the range most appropriate?",
          questionType: 'text',
          options: [
            "Detailed analysis of income distribution",
            "Comparing the variability of test scores between two classes",
            "Initial assessment of data spread in quality control",
            "Calculating precise statistical inference"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The range is most appropriate for initial assessments of data spread, such as in quality control where you need a quick measure of whether values fall within acceptable limits. It's not suitable for detailed analysis or precise calculations."
        },
        {
          id: 'q4-step2',
          question: "Why is the range not suitable for grouped data with open classes?",
          questionType: 'text',
          options: [
            "Because it's too complex to calculate",
            "Because we cannot determine the exact highest or lowest values",
            "Because it requires the mean to be calculated first",
            "Because it only works with continuous data"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "In grouped data with open classes (e.g., 'less than 10' or 'more than 100'), we don't know the exact values of the highest or lowest data points, making it impossible to calculate an accurate range."
        }
      ]
    }
  ];

  const rules = [
    "Simple Range formula: $Range = H - L$ (Highest value minus Lowest value)",
    "Coefficient of Range formula: $\\frac{H - L}{H + L}$ (Relative measure of dispersion)",
    "Range is easy to calculate but only uses extreme values",
    "Range is heavily influenced by outliers",
    "Larger range indicates greater variability in the data",
    "Range is useful for initial data exploration and quality control",
    "Range cannot be calculated for grouped data with open classes"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Range Calculations"
      icon="📏"
      theme={{
        from: "from-teal-500",
        to: "to-teal-700",
        button: "bg-lime-600",
        buttonHover: "hover:bg-lime-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default Range;
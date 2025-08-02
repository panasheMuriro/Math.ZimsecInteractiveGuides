// src/Components/Interactive/QuartilesIQR.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const QuartilesIQR: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Understanding Quartiles',
      steps: [
        {
          id: 'q1-step1',
          question: "What percentage of data lies below the third quartile (Q₃)?",
          questionType: 'text',
          options: [
            "25%",
            "50%",
            "75%",
            "100%"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "By definition, the third quartile (Q₃) is the value below which 75% of the data falls."
        },
        {
          id: 'q1-step2',
          question: "In a data set of 20 values arranged in ascending order, what is the position of Q₁ using the formula $\\frac{n+1}{4}$?",
          questionType: 'text',
          options: [
            "5th value",
            "5.25th position",
            "6th value",
            "10th position"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "Using the formula for Q₁ position: $\\frac{n+1}{4} = \\frac{20+1}{4} = \\frac{21}{4} = 5.25$. This means Q₁ is located at the 5.25th position, which requires interpolation between the 5th and 6th values."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Calculating Quartiles for Ungrouped Data',
      steps: [
        {
          id: 'q2-step1',
          question: "For the data set: 12, 15, 18, 20, 25, 28, 30, 35, what is the position of Q₃ using $\\frac{3(n+1)}{4}$?",
          questionType: 'text',
          options: [
            "6.75",
            "7",
            "7.25",
            "8"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "With n=8, the position of Q₃ is $\\frac{3(n+1)}{4} = \\frac{3(8+1)}{4} = \\frac{27}{4} = 6.75$. This means Q₃ is located at the 6.75th position, requiring interpolation between the 6th and 7th values."
        },
        {
          id: 'q2-step2',
          question: "Using the data set from the previous question (12, 15, 18, 20, 25, 28, 30, 35), if Q₁ = 16.5 and Q₃ = 29.25, what is the Interquartile Range (IQR)?",
          questionType: 'text',
          options: [
            "12.75",
            "15.75",
            "18.75",
            "21.75"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "The Interquartile Range (IQR) is calculated as Q₃ - Q₁. IQR = 29.25 - 16.5 = 12.75. This represents the spread of the middle 50% of the data."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Quartiles for Grouped Data',
      steps: [
        {
          id: 'q3-step1',
          question: "Which formula is used to calculate Q₁ for grouped data?",
          questionType: 'text',
          options: [
            "$Q_1 = L + \\frac{\\frac{n}{2} - CF}{f} \\times h$",
            "$Q_1 = L + \\frac{\\frac{n}{4} - CF}{f} \\times h$",
            "$Q_1 = L + \\frac{\\frac{3n}{4} - CF}{f} \\times h$",
            "$Q_1 = \\frac{n+1}{4}$"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "For grouped data, Q₁ is calculated using: $Q_1 = L + \\frac{\\frac{n}{4} - CF}{f} \\times h$, where L is the lower boundary of the Q₁ class, CF is the cumulative frequency before that class, f is the frequency of the Q₁ class, and h is the class width."
        },
        {
          id: 'q3-step2',
          question: "What is the main advantage of using IQR over the simple range as a measure of spread?",
          questionType: 'text',
          options: [
            "IQR is easier to calculate",
            "IQR uses all data values",
            "IQR is less affected by outliers",
            "IQR always gives a larger value"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The IQR focuses on the middle 50% of the data, making it much less sensitive to extreme values or outliers compared to the range, which only considers the highest and lowest values."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Outliers and Interpretation',
      steps: [
        {
          id: 'q4-step1',
          question: "How are outliers typically identified using the IQR?",
          questionType: 'text',
          options: [
            "Values below Q₁ or above Q₃",
            "Values below $Q_1 - 1.5 \\times IQR$ or above $Q_3 + 1.5 \\times IQR$",
            "Values more than 2 standard deviations from the mean",
            "Values that appear only once in the data set"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "Outliers are commonly defined as data points that fall below $Q_1 - 1.5 \\times IQR$ or above $Q_3 + 1.5 \\times IQR$. This method uses the IQR to establish 'fences' beyond which values are considered unusual."
        },
        {
          id: 'q4-step2',
          question: "In a box plot, what does the box itself represent?",
          questionType: 'text',
          options: [
            "The range of the entire data set",
            "The interquartile range (IQR)",
            "The mean and standard deviation",
            "The mode of the data set"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "In a box plot, the box represents the interquartile range (IQR), spanning from the first quartile (Q₁) to the third quartile (Q₃). This box contains the middle 50% of the data."
        }
      ]
    }
  ];

  const rules = [
    "Quartiles divide data into four equal parts: Q₁ (25%), Q₂/median (50%), Q₃ (75%)",
    "For ungrouped data: Q₁ position = $\\frac{n+1}{4}$ and Q₃ position = $\\frac{3(n+1)}{4}$",
    "For grouped data: $Q_1 = L + \\frac{\\frac{n}{4} - CF}{f} \\times h$ and $Q_3 = L + \\frac{\\frac{3n}{4} - CF}{f} \\times h$",
    "Interquartile Range (IQR) = $Q_3 - Q_1$, representing the middle 50% of data",
    "Outliers are values < $Q_1 - 1.5 \\times IQR$ or > $Q_3 + 1.5 \\times IQR$",
    "IQR is less affected by outliers than the simple range",
    "Box plots visually display quartiles, IQR, and potential outliers"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Quartiles and IQR"
      icon="📊"
      theme={{
        from: "from-indigo-500",
        to: "to-blue-600",
        button: "bg-indigo-600",
        buttonHover: "hover:bg-indigo-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default QuartilesIQR;
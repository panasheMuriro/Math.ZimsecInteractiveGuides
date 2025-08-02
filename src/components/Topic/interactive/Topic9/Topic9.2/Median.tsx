// src/Components/Interactive/MedianCalculations.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const Median: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Finding Median from Ungrouped Data',
      steps: [
        {
          id: 'q1-step1',
          question: "What is the first step in finding the median of ungrouped data?",
          questionType: 'text',
          options: [
            "Calculate the mean",
            "Identify the mode",
            "Arrange the data in ascending order",
            "Find the range"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The first step is always to arrange the data in ascending (or descending) order to identify the middle value(s)."
        },
        {
          id: 'q1-step2',
          question: "Find the median of the following data set: 12, 18, 9, 25, 14, 22, 16",
          questionType: 'text',
          options: [
            "14",
            "16",
            "18",
            "22"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "First arrange in order: 9, 12, 14, 16, 18, 22, 25. There are 7 values (odd), so median is the $\\frac{7+1}{2} = 4$th value, which is 16."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Median with Even Number of Values',
      steps: [
        {
          id: 'q2-step1',
          question: "How do you calculate the median when there is an even number of data values?",
          questionType: 'text',
          options: [
            "Take the middle value",
            "Average the two middle values",
            "Use the formula $\\frac{n+1}{2}$",
            "Subtract the smallest from the largest"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "For an even number of values, the median is the average (mean) of the two middle values after arranging the data in order."
        },
        {
          id: 'q2-step2',
          question: "What is the median of: 5, 12, 8, 15, 10, 20?",
          questionType: 'text',
          options: [
            "10",
            "11",
            "12",
            "15"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "First arrange in order: 5, 8, 10, 12, 15, 20. There are 6 values (even), so median is the average of the 3rd and 4th values: $\\frac{10+12}{2} = 11$."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Finding Median from Grouped Data',
      steps: [{
        id: 'q3-step1',
          question: "Which formula is used to find the median for grouped data?",
          questionType: 'text',
          options: [
            "$Median = L + \\frac{\\frac{n}{2} - CF}{f} \\times h$",
            "$Median = \\frac{\\sum fx}{\\sum f}$",
            "$Median = \\frac{L_1 + L_2}{2}$",
            "$Median = \\frac{n+1}{2}$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "The formula for grouped median is $Median = L + \\frac{\\frac{n}{2} - CF}{f} \\times h$, where L is the lower boundary of the median class."
        },
        {
          id: 'q3-step2',
          question: "For the grouped data below, what is the median class?\n\n| Class Interval | Frequency (f) | Cumulative Frequency (CF) |\n|----------------|---------------|---------------------------|\n| 0-10          | 5             | 5                         |\n| 10-20         | 8             | 13                        |\n| 20-30         | 12            | 25                        |\n| 30-40         | 7             | 32                        |\n| 40-50         | 3             | 35                        |",
          questionType: 'text',
          options: [
            "0-10",
            "10-20",
            "20-30",
            "30-40"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "Total frequency n = 35. We need the class containing the $\\frac{n}{2} = \\frac{35}{2} = 17.5$th value. Looking at cumulative frequencies, 17.5 falls between 13 and 25, so the median class is 20-30."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Using Ogives to Find Median',
      steps: [
        {
          id: 'q4-step1',
          question: "How can you use an ogive (cumulative frequency curve) to find the median?",
          questionType: 'text',
          options: [
            "Find the highest point on the curve",
            "Draw a vertical line at the total frequency",
            "Draw a horizontal line at $\\frac{n}{2}$ and read the corresponding x-value",
            "Measure the slope of the curve"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "To find the median from an ogive, draw a horizontal line at the cumulative frequency of $\\frac{n}{2}$, then read the corresponding value on the x-axis."
        },
        {
          id: 'q4-step2',
          question: "Which of the following is NOT an advantage of using the median?",
          questionType: 'text',
          options: [
            "It is not affected by extreme values",
            "It is suitable for open-ended distributions",
            "It uses all data values in its calculation",
            "It always exists for numerical data"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The median does not use all data values in its calculation; it only depends on the middle value(s). This is actually a disadvantage compared to the mean, but it makes the median robust against outliers."
        }
      ]
    }
  ];

  const rules = [
    "For ungrouped data, arrange values in order and find the middle value(s)",
    "For odd n: Median = $\\frac{n+1}{2}$th term",
    "For even n: Median = average of two middle values",
    "For grouped data: $Median = L + \\frac{\\frac{n}{2} - CF}{f} \\times h$",
    "On an ogive, draw horizontal line at $\\frac{n}{2}$ to find median",
    "Median is robust against outliers and works with skewed data"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Median Determination"
      icon="📊"
      theme={{
        from: "from-amber-500",
        to: "to-orange-600",
        button: "bg-amber-600",
        buttonHover: "hover:bg-amber-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default Median;
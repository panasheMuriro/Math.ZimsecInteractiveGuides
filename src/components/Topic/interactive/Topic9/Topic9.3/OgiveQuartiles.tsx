// src/Components/Interactive/OgiveQuartiles.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const OgiveQuartiles: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Understanding Ogives',
      steps: [
        {
          id: 'q1-step1',
          question: "What is the main difference between a 'less than' ogive and a 'more than' ogive?",
          questionType: 'text',
          options: [
            "Less than uses upper boundaries, more than uses lower boundaries",
            "Less than plots frequency, more than plots cumulative frequency",
            "Less than is for discrete data, more than is for continuous data",
            "There is no difference; they are the same curve"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "A 'less than' ogive plots cumulative frequency against upper class boundaries, while a 'more than' ogive plots cumulative frequency against lower class boundaries."
        },
        {
          id: 'q1-step2',
          question: "Which axis represents the cumulative frequency in an ogive?",
          questionType: 'text',
          options: [
            "X-axis",
            "Y-axis",
            "Both axes",
            "Neither axis"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "In an ogive, the cumulative frequency is plotted on the Y-axis (vertical axis), while the class boundaries are plotted on the X-axis (horizontal axis)."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Finding Quartiles from Ogives',
      steps: [
        {
          id: 'q2-step1',
          question: "To find the first quartile (Q₁) using a 'less than' ogive, what value should you mark on the Y-axis?",
          questionType: 'text',
          options: [
            "$n$",
            "$\\frac{n}{2}$",
            "$\\frac{n}{4}$",
            "$\\frac{3n}{4}$"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "For a 'less than' ogive, to find Q₁ you mark $\\frac{n}{4}$ on the Y-axis, where n is the total frequency. This represents the point below which 25% of the data lies."
        },
        {
          id: 'q2-step2',
          question: "Using the example from the content (n=40), if you were finding Q₁ using a 'more than' ogive, what value would you mark on the Y-axis?",
          questionType: 'text',
          options: [
            "10",
            "20",
            "30",
            "40"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "For a 'more than' ogive, to find Q₁ you mark $\\frac{3n}{4}$ on the Y-axis. With n=40, this is $\\frac{3 \\times 40}{4} = 30$. This is because a 'more than' ogive shows cumulative frequencies from the top down."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Percentiles and Ogives',
      steps: [
        {
          id: 'q3-step1',
          question: "What is the formula for finding the position of the Pth percentile?",
          questionType: 'text',
          options: [
            "$\\frac{P + n}{100}$",
            "$\\frac{P \\times n}{100}$",
            "$\\frac{P}{n \\times 100}$",
            "$P \\times \\frac{n}{100}$"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "The position of the Pth percentile is calculated using the formula $\\frac{P \\times n}{100}$, where P is the percentile (e.g., 90 for 90th percentile) and n is the total number of data points."
        },
        {
          id: 'q3-step2',
          question: "Which of the following is NOT an advantage of using ogives?",
          questionType: 'text',
          options: [
            "Visual representation of data distribution",
            "Easy to estimate any percentile",
            "Provides exact values for all data points",
            "Useful for large datasets"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "Ogives provide estimates and visual representations, but they do not give exact values for individual data points. The values read from an ogive are approximations based on the plotted curve."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Applying Ogive Concepts',
      steps: [
        {
          id: 'q4-step1',
          question: "Based on the example in the content (Q₁ ≈ 158 cm, Q₃ ≈ 167 cm), what is the Interquartile Range (IQR)?",
          questionType: 'text',
          options: [
            "9 cm",
            "158 cm",
            "167 cm",
            "325 cm"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "The Interquartile Range (IQR) is calculated as Q₃ - Q₁. IQR = 167 - 158 = 9 cm. This represents the spread of the middle 50% of the height data."
        },
        {
          id: 'q4-step2',
          question: "What is an important consideration when reading values from an ogive?",
          questionType: 'text',
          options: [
            "Ogives can only be used for small datasets",
            "Values are exact and don't require interpolation",
            "The curve should be drawn as a series of straight lines",
            "Accuracy depends on smooth curve assumption and interpolation"
          ],
          optionType: 'text',
          correct: 3,
          explanation: "When reading values from an ogive, accuracy depends on assuming a smooth curve between plotted points and using interpolation. The estimates become more accurate with larger sample sizes and careful curve drawing."
        }
      ]
    }
  ];

  const rules = [
    "Less than ogive: Plot cumulative frequency vs. upper class boundaries",
    "More than ogive: Plot cumulative frequency vs. lower class boundaries",
    "To find Q₁ from less than ogive: Mark $\\frac{n}{4}$ on Y-axis",
    "To find Q₁ from more than ogive: Mark $\\frac{3n}{4}$ on Y-axis",
    "Pth percentile position: $\\frac{P \\times n}{100}$",
    "Ogives provide visual representation and easy percentile estimation",
    "Values from ogives are estimates based on curve interpolation",
    "Accuracy improves with larger sample sizes and smooth curves"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Using Ogives for Quartiles"
      icon="📈"
      theme={{
        from: "from-slate-500",
        to: "to-slate-700",
        button: "bg-rose-600",
        buttonHover: "hover:bg-rose-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default OgiveQuartiles;
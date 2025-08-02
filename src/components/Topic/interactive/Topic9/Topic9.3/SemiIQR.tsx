// src/Components/Interactive/SemiIQR.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const SemiIQR: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Understanding Semi-IQR',
      steps: [
        {
          id: 'q1-step1',
          question: "What is the formula for calculating the Semi-Interquartile Range?",
          questionType: 'text',
          options: [
            "$Semi\\text{-}IQR = Q_3 - Q_1$",
            "$Semi\\text{-}IQR = \\frac{Q_3 + Q_1}{2}$",
            "$Semi\\text{-}IQR = \\frac{Q_3 - Q_1}{2}$",
            "$Semi\\text{-}IQR = \\frac{Q_3 - Q_1}{4}$"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The Semi-Interquartile Range (Semi-IQR) is calculated as half of the Interquartile Range: $Semi\\text{-}IQR = \\frac{Q_3 - Q_1}{2}$."
        },
        {
          id: 'q1-step2',
          question: "What is another name for the Semi-Interquartile Range?",
          questionType: 'text',
          options: [
            "Standard deviation",
            "Mean absolute deviation",
            "Quartile deviation",
            "Variance"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The Semi-Interquartile Range is also known as the quartile deviation or Q-deviation."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Calculating Semi-IQR',
      steps: [
        {
          id: 'q2-step1',
          question: "If Q₁ = 25 and Q₃ = 65, what is the Semi-IQR?",
          questionType: 'text',
          options: [
            "20",
            "40",
            "80",
            "100"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "First calculate the IQR: IQR = Q₃ - Q₁ = 65 - 25 = 40. Then calculate Semi-IQR: Semi-IQR = IQR/2 = 40/2 = 20."
        },
        {
          id: 'q2-step2',
          question: "For a dataset with Q₁ = 10, Median = 20, and Q₃ = 35, what does a Semi-IQR of 12.5 tell us?",
          questionType: 'text',
          options: [
            "The total range is 25",
            "The mean is 20",
            "Data values typically deviate by 12.5 units from the median",
            "All values are within 12.5 units of the mean"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The Semi-IQR of 12.5 represents half the IQR (35-10=25). It indicates that, on average, the middle 50% of data values deviate by 12.5 units from the median in either direction."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Properties and Applications',
      steps: [
        {
          id: 'q3-step1',
          question: "Which of the following is NOT a characteristic of the Semi-IQR?",
          questionType: 'text',
          options: [
            "It is robust against outliers",
            "It measures average spread around the median",
            "It uses all data values in its calculation",
            "It is always a positive value"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The Semi-IQR only uses the first and third quartiles (Q₁ and Q₃) in its calculation, not all data values. This makes it robust against outliers but means it doesn't utilize the complete dataset."
        },
        {
          id: 'q3-step2',
          question: "In which situation would the Semi-IQR be particularly useful?",
          questionType: 'text',
          options: [
            "When calculating precise statistical inference",
            "When analyzing perfectly symmetric data",
            "When dealing with skewed distributions",
            "When all data values are needed for analysis"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The Semi-IQR is particularly useful for skewed distributions because, like the median, it is not affected by extreme values and focuses on the central spread of the data."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Comparing Measures of Dispersion',
      steps: [
        {
          id: 'q4-step1',
          question: "How does the Semi-IQR compare to the range as a measure of spread?",
          questionType: 'text',
          options: [
            "Semi-IQR is more affected by outliers than the range",
            "Semi-IQR is less affected by outliers than the range",
            "Both measures are equally affected by outliers",
            "Semi-IQR can only be used with continuous data"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "The Semi-IQR is less affected by outliers than the range because it only considers the middle 50% of data (between Q₁ and Q₃), while the range uses the extreme values which can be outliers."
        },
        {
          id: 'q4-step2',
          question: "When interpreting data, why is it beneficial to use the Semi-IQR alongside the median?",
          questionType: 'text',
          options: [
            "They are both easy to calculate",
            "They both use all data values",
            "They provide a complete picture of central tendency and variability around the median",
            "They are the only measures appropriate for ordinal data"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "Using the median (measure of central tendency) with the Semi-IQR (measure of variability around the median) provides a complete descriptive summary. The median tells us the center, and the Semi-IQR tells us the typical spread around that center."
        }
      ]
    }
  ];

  const rules = [
    "Formula: $Semi\\text{-}IQR = \\frac{IQR}{2} = \\frac{Q_3 - Q_1}{2}$",
    "Also called Quartile Deviation or Q-deviation",
    "Measures average spread around the median",
    "Robust against outliers (focuses on middle 50% of data)",
    "Always a positive value",
    "Particularly useful for skewed distributions and ordinal data",
    "Interpretation: Typical deviation from the median",
    "More stable than range, less sensitive than standard deviation"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Semi-Interquartile Range"
      icon="📏"
      theme={{
        from: "from-teal-500",
        to: "to-cyan-600",
        button: "bg-teal-600",
        buttonHover: "hover:bg-teal-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default SemiIQR;
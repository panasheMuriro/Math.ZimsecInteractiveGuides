// src/Components/Interactive/ModeIdentification.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const Mode: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Finding Mode from Ungrouped Data',
      steps: [
        {
          id: 'q1-step1',
          question: "What is the mode of the following data set: 3, 7, 5, 3, 9, 7, 3, 1?",
          questionType: 'text',
          options: [
            "3",
            "7",
            "5",
            "No mode"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "The mode is the value that appears most frequently. In this data set, 3 appears three times, which is more frequent than any other value."
        },
        {
          id: 'q1-step2',
          question: "A data set has the following values: 2, 4, 4, 6, 6, 8, 8. How would you classify this distribution?",
          questionType: 'text',
          options: [
            "Unimodal",
            "Bimodal",
            "Multimodal",
            "No mode"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "This distribution is bimodal because it has two modes (4 and 6), each appearing twice, which is the highest frequency in the data set."
        }
      ]
    },
    {
      id: 'q2',
      title: 'Understanding Mode Properties',
      steps: [
        {
          id: 'q2-step1',
          question: "Which of the following is NOT an advantage of using the mode?",
          questionType: 'text',
          options: [
            "It is not affected by extreme values",
            "It can be used for qualitative data",
            "It is suitable for further mathematical calculations",
            "It's easy to identify in frequency distributions"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The mode is not suitable for further mathematical calculations, which is actually a disadvantage. Measures like the mean are better for mathematical operations."
        },
        {
          id: 'q2-step2',
          question: "In which situation is the mode most useful?",
          questionType: 'text',
          options: [
            "When calculating precise averages",
            "When identifying the most popular item in a survey",
            "When analyzing income distributions with outliers",
            "When finding the center of a symmetric data set"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "The mode is most useful for identifying the most frequently occurring value, such as the most popular product, favorite color, or common category in a data set."
        }
      ]
    },
    {
      id: 'q3',
      title: 'Finding Mode from Grouped Data',
      steps: [
        {
          id: 'q3-step1',
          question: "In grouped data, what is the 'modal class'?",
          questionType: 'text',
          options: [
            "The class with the lowest frequency",
            "The class containing the median value",
            "The class with the highest frequency",
            "The first class in the distribution"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The modal class in grouped data is the class interval that has the highest frequency, meaning it contains the most data values."
        },
        {
          id: 'q3-step2',
          question: "Which formula is used to estimate the mode for grouped data?\n\nGiven:\n- $L$ = lower boundary of modal class\n- $f_1$ = frequency of modal class\n- $f_0$ = frequency of class before modal class\n- $f_2$ = frequency of class after modal class\n- $h$ = class width",
          questionType: 'text',
          options: [
            "$Mode = L + \\frac{f_1 - f_0}{f_1 + f_0} \\times h$",
            "$Mode = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$",
            "$Mode = L + \\frac{f_1 + f_0}{f_1 - f_2} \\times h$",
            "$Mode = \\frac{f_1 - f_0}{f_1 + f_2} \\times h$"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "The formula for estimating the mode in grouped data is $Mode = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$. This formula interpolates within the modal class to find a more precise mode estimate."
        }
      ]
    },
    {
      id: 'q4',
      title: 'Applying Mode Concepts',
      steps: [
        {
          id: 'q4-step1',
          question: "For the following grouped frequency distribution, which class is the modal class?\n\n| Class Interval | Frequency |\n|----------------|-----------|\n| 0-10          | 5         |\n| 10-20         | 12        |\n| 20-30         | 18        |\n| 30-40         | 15        |\n| 40-50         | 7         |",
          questionType: 'text',
          options: [
            "0-10",
            "10-20",
            "20-30",
            "30-40"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The modal class is 20-30 because it has the highest frequency of 18, which is more than any other class interval."
        },
        {
          id: 'q4-step2',
          question: "What is a key disadvantage of the mode compared to the mean and median?",
          questionType: 'text',
          options: [
            "It is affected by extreme values",
            "It may not exist or be unique in a data set",
            "It cannot be used for qualitative data",
            "It is difficult to calculate"
          ],
          optionType: 'text',
          correct: 1,
          explanation: "A significant disadvantage of the mode is that a data set may have no mode (if all values appear equally) or multiple modes (bimodal, multimodal), making it less definitive than the mean or median."
        }
      ]
    }
  ];

  const rules = [
    "For ungrouped data, mode is the most frequently occurring value",
    "A distribution can be unimodal (1 mode), bimodal (2 modes), or multimodal (3+ modes)",
    "For grouped data, identify the modal class (highest frequency) then estimate mode using $Mode = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$",
    "Mode is useful for categorical data and identifying most common values",
    "Mode is not affected by extreme values but may not exist or be unique"
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Mode Identification"
      icon="📊"
      theme={{
        from: "from-violet-500",
        to: "to-purple-600",
        button: "bg-violet-600",
        buttonHover: "hover:bg-violet-700"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default Mode;
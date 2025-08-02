// src/Components/Interactive/DataClassification.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const DataClassification: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "What is the main characteristic of discrete data?",
      options: [
        "It can take any value within a range",
        "It is measured rather than counted",
        "It consists of distinct, countable values",
        "It must be organized in class intervals"
      ],
      correct: 2,
      explanation: "Discrete data consists of distinct, separate values that can be counted. Examples include the number of students in a class or the number of cars in a parking lot.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which of the following is an example of continuous data?",
      options: [
        "Number of goals scored in a match",
        "Temperature readings throughout the day",
        "Number of books on a shelf",
        "Students' grades (A, B, C, D, F)"
      ],
      correct: 1,
      explanation: "Continuous data can take any value within a range and is typically measured. Temperature is measured on a continuous scale and can have infinite possible values within a range.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "What is a key advantage of grouped data over ungrouped data?",
      options: [
        "It preserves the exact values of all data points",
        "It makes the mode immediately visible",
        "It provides a more compact representation for large datasets",
        "It eliminates the need for class boundaries"
      ],
      correct: 2,
      explanation: "Grouped data organizes values into class intervals, which creates a more compact representation that's especially useful for large datasets. However, this comes at the cost of losing individual value precision.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "In a frequency table with class intervals, what is the midpoint of the interval 10-20?",
      options: [
        "10",
        "15",
        "20",
        "30"
      ],
      correct: 1,
      explanation: "The midpoint of a class interval is calculated as (lower boundary + upper boundary) ÷ 2. For the interval 10-20, the midpoint is (10+20) ÷ 2 = 15.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which data classification is most appropriate for recording the exact heights of students in a school?",
      options: [
        "Ungrouped discrete data",
        "Grouped discrete data",
        "Ungrouped continuous data",
        "Grouped continuous data"
      ],
      correct: 3,
      explanation: "Heights are continuous data (measurable values that can take any value within a range). When recording exact heights, we preserve individual values, making it ungrouped data.",
      questionType: "text",
      optionType: "text"
    }
  ];

  const rules = [
    "Discrete data consists of distinct, countable values (e.g., number of students)",
    "Continuous data can take any value within a range and is measured (e.g., height, weight)",
    "Ungrouped data lists individual values separately, preserving precision",
    "Grouped data organizes values in class intervals for large datasets",
    "Class intervals have boundaries, midpoints, and widths for analysis"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Data Classification"
      icon="📊"
      theme={{
        from: "from-[#5A827E]",
        to: "to-teal-600",
        button: "bg-emerald-600",
        buttonHover: "hover:bg-emerald-700"
      }}
      rules={rules}
      rulesTitle="Key Concepts:"
      questions={questions}
    />
  );
};

export default DataClassification;
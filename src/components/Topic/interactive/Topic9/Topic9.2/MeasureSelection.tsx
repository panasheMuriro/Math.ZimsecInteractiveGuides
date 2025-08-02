// src/Components/Interactive/MeasureSelection.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const MeasureSelection: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "For a symmetric distribution, which of the following statements is true?",
      options: [
        "Mean < Median < Mode",
        "Mean > Median > Mode",
        "Mean = Median = Mode",
        "Mean and Median are equal, but Mode is different"
      ],
      correct: 2,
      explanation: "In a perfectly symmetric distribution, the mean, median, and mode all have the same value and are located at the center of the distribution.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which measure of central tendency is most appropriate for nominal data (e.g., favorite colors)?",
      options: [
        "Mean",
        "Median",
        "Mode",
        "All three measures are equally appropriate"
      ],
      correct: 2,
      explanation: "Nominal data consists of categories without a natural order. The mode, which identifies the most frequent category, is the only appropriate measure of central tendency for nominal data.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "When analyzing income data that is skewed by a few very high earners, which measure is most representative of a typical income?",
      options: [
        "Mean",
        "Median",
        "Mode",
        "Range"
      ],
      correct: 1,
      explanation: "Income data is typically positively skewed due to high earners. The median is the best choice because it is not affected by extreme values and represents the middle income when all incomes are ordered.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "In a negatively skewed distribution, what is the correct relationship between mean, median, and mode?",
      options: [
        "Mean > Median > Mode",
        "Mean = Median = Mode",
        "Mode > Median > Mean",
        "Median > Mean > Mode"
      ],
      correct: 2,
      explanation: "In a negatively skewed distribution, the tail is on the left side. The mode (peak) is greater than the median (middle value), which is greater than the mean (pulled left by extreme low values).",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "A researcher wants to find the most popular item in a store's sales data. Which measure should they use?",
      options: [
        "Mean",
        "Median",
        "Mode",
        "Standard deviation"
      ],
      correct: 2,
      explanation: "To find the most popular item (the one sold most frequently), the researcher should use the mode, which identifies the value that occurs most often in the dataset.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which scenario is most appropriate for using all three measures (mean, median, and mode) together?",
      options: [
        "Analyzing eye color data",
        "Describing house prices in a diverse market",
        "Finding the total number of students",
        "Ranking movies from 1st to 5th place"
      ],
      correct: 1,
      explanation: "House prices often have a skewed distribution with outliers. Using all three measures together provides a comprehensive understanding: the mean shows the average, the median shows the typical price, and the mode shows the most common price range.",
      questionType: "text",
      optionType: "text"
    }
  ];

  const rules = [
    "For symmetric distributions: Mean = Median = Mode",
    "For positively skewed distributions: Mean > Median > Mode",
    "For negatively skewed distributions: Mode > Median > Mean",
    "Nominal data: Use Mode only",
    "Ordinal data: Use Median and Mode",
    "Numerical data: All three measures can be used",
    "With outliers: Prefer Median",
    "Without outliers: Mean is preferred for calculations",
    "Use multiple measures together for complete data understanding"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Choosing Appropriate Measures"
      icon="⚖️"
      theme={{
        from: "from-fuchsia-900",
        to: "to-fuchsia-900",
        button: "bg-fuchsia-600",
        buttonHover: "hover:bg-fuchsia-700"
      }}
      rules={rules}
      rulesTitle="Selection Guidelines:"
      questions={questions}
    />
  );
};

export default MeasureSelection;
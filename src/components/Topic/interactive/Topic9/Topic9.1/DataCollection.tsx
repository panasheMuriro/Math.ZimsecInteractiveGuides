// src/Components/Interactive/DataCollectionMethods.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const DataCollection: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "Which of the following is a primary data collection method?",
      options: [
        "Reading government reports",
        "Conducting a survey",
        "Using data from a research paper",
        "Analyzing historical records"
      ],
      correct: 1,
      explanation: "Primary data is collected directly by the researcher for a specific purpose. Conducting a survey is a primary method. The other options are examples of secondary data collection.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "What is the main advantage of random sampling?",
      options: [
        "It is the quickest method",
        "It ensures every member of the population has an equal chance of being selected",
        "It is the cheapest method",
        "It requires no planning"
      ],
      correct: 1,
      explanation: "Random sampling minimizes selection bias by giving every member of the population an equal opportunity to be included in the sample, which helps ensure the sample is representative.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which sampling method divides the population into groups and then randomly selects entire groups?",
      options: [
        "Stratified sampling",
        "Systematic sampling",
        "Random sampling",
        "Cluster sampling"
      ],
      correct: 3,
      explanation: "Cluster sampling involves dividing the population into clusters (often geographic areas) and then randomly selecting entire clusters for inclusion in the sample.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "What does 'validity' refer to in data collection?",
      options: [
        "The data is free from errors",
        "The data is collected quickly",
        "The data measures what it claims to measure",
        "The data is consistent when collected multiple times"
      ],
      correct: 2,
      explanation: "Validity is about accuracy in measurement - whether the data collection method actually measures the concept it is intended to measure.",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which of the following is an example of secondary data?",
      options: [
        "Interviewing customers in a store",
        "Observing animal behavior in the wild",
        "Conducting a controlled experiment",
        "Using statistics from a government website"
      ],
      correct: 3,
      explanation: "Secondary data is information that has already been collected by someone else for a different purpose. Government statistics are a classic example of secondary data.",
      questionType: "text",
      optionType: "text"
    }
  ];

  const rules = [
    "Primary data is collected directly by the researcher for a specific purpose",
    "Secondary data is information collected by others for different purposes",
    "Sampling methods help select representative subsets of populations",
    "Validity ensures data measures what it claims to measure",
    "Reliability means consistent results over time"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Data Collection Methods"
      icon="📊"
      theme={{
        from: "from-[#5459AC]",
        to: "to-[#52357B]",
        button: "bg-indigo-600",
        buttonHover: "hover:bg-indigo-700"
      }}
      rules={rules}
      rulesTitle="Key Concepts:"
      questions={questions}
    />
  );
};

export default DataCollection;
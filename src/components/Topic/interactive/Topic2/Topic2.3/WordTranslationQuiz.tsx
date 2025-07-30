
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const wordTranslationQuizQuestions: QuizQuestion[] = [
  {
    question: `What set notation represents "Students who are in the Chess Club OR the Debate Club"?`,
    questionType: 'text',
    optionType: 'math', // Options are pure math expressions
    options: [
      `C \\cap D`,
      `C \\cup D`,
      `C' \\cap D'`,
      `(C \\cup D)'`
    ],
    correct: 1, // Index of `C \\cup D`
    explanation: `The word "OR" typically translates to the \\textbf{Union} operation. $C \\cup D$ represents students who are in C, in D, or in both.`,
    explanationType: 'math'
  },
  {
    question: `How would you express "People who are NOT in the loyalty program" using set notation?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `L`,
      `L'`,
      `U \\setminus L`,
      `\\emptyset`
    ],
    correct: 1, // Index of `L'`
    explanation: `The word "NOT" indicates the \\textbf{Complement} of the set. $L'$ (or $L^c$) represents all elements in the universal set that are not in $L$. $U \\setminus L$ is also correct but $L'$ is the standard notation for complement.`,
    explanationType: 'math'
  },
  {
    question: `"Items that are in set A but NOT in set B" translates to which operation?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `A \\cap B`,
      `A \\cup B`,
      `A \\setminus B`,
      `B \\setminus A`
    ],
    correct: 2, // Index of `A \\setminus B`
    explanation: `Phrases like "A but not B" or "Only A" indicate the \\textbf{Set Difference} (or Relative Complement). This is written as $A \\setminus B$ or $A \\cap B'$.`,
    explanationType: 'math'
  },
  {
    question: `Which notation correctly represents "People who are members of BOTH the gym AND the pool"?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `G \\cup P`,
      `G \\cap P`,
      `G' \\cap P'`,
      `(G \\cap P)'`
    ],
    correct: 1, // Index of `G \\cap P`
    explanation: `The word "BOTH" signifies the \\textbf{Intersection} of the sets. $G \\cap P$ represents elements that are in $G$ and also in $P$.`,
    explanationType: 'math'
  },
  {
    question: `What does the phrase "Neither in set X nor in set Y" translate to?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `X \\cap Y`,
      `X \\cup Y`,
      `(X \\cup Y)'`,
      `X' \\cap Y`
    ],
    correct: 2, // Index of `(X \\cup Y)'`
    explanation: `"Neither X nor Y" means NOT in X AND NOT in Y. This is the complement of the union, $(X \\cup Y)'$, which is equivalent to $X' \\cap Y'$ by De Morgan's Law.`,
    explanationType: 'math'
  },
  {
    question: `Select the correct set notation for "All items in the universal set U EXCEPT those in set S".`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `S`,
      `S'`,
      `U \\cap S`,
      `U \\setminus S`
    ],
    correct: 3, // Index of `U \\setminus S`
    explanation: `The phrase "All items in U except those in S" directly describes the \\textbf{Set Difference} of $U$ and $S$. While $S'$ is often equivalent in many contexts ($U \\setminus S$), $U \\setminus S$ is the most literal translation of the given phrase.`,
    explanationType: 'math'
  },
  {
    question: `Which of the following represents "Elements that are exclusively in set P"?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `P \\cap Q`, // Assuming another set Q exists for exclusivity context, but this is less precise
      `P \\setminus Q`, // Also context dependent
      `P \\cap (Q \\cup R)'`, // Getting complex and context dependent
      `P` // This is the most accurate for "exclusively in P" without other sets mentioned
    ],
    correct: 3, // Index of `P`
    explanation: `The phrase "exclusively in set P" is a bit ambiguous without context of other sets. However, if we interpret it as simply "the set P itself", then $P$ is the answer. If it meant "in P and nowhere else", and other sets were defined, it would be a difference or intersection with complements (e.g., $P \\cap Q' \\cap R'$). Given the options and standard interpretations, $P$ is the most suitable choice.`,
    explanationType: 'math'
  },
  {
    question: `"Common elements to sets M and N" is best represented by:`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `M \\cup N`,
      `M \\cap N`,
      `M \\setminus N`,
      `M' \\cap N'`
    ],
    correct: 1, // Index of `M \\cap N`
    explanation: `The word "Common" refers to elements shared by both sets, which is the definition of \\textbf{Intersection}. $M \\cap N$ is the correct notation.`,
    explanationType: 'math'
  }
];

const wordTranslationRules = [
  "Union (OR): $A \\cup B$ - Elements in A, or B, or both.",
  "Intersection (AND/BOTH): $A \\cap B$ - Elements in both A and B.",
  "Complement (NOT): $A'$ or $A^c$ - Elements NOT in A.",
  "Set Difference (BUT NOT/ONLY): $A \\setminus B$ or $A \\cap B'$ - Elements in A but not in B.",
  "Neither/Nor: $(A \\cup B)'$ or $A' \\cap B'$ - Elements in neither A nor B."
];

const wordTranslationQuizTitle = "Word Problems to Set Notation";
const wordTranslationQuizIcon = "🔤";
const wordTranslationQuizTheme = {
  from: "from-blue-500",
  to: "to-indigo-700",
  button: "bg-indigo-500",
  buttonHover: "hover:bg-indigo-400"
};



const WordTranslationQuiz: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title={wordTranslationQuizTitle}
      icon={wordTranslationQuizIcon}
      theme={wordTranslationQuizTheme}
      rules={wordTranslationRules}
      rulesTitle="Translation Guide:"
      questions={wordTranslationQuizQuestions}
    />
  );
};

export default WordTranslationQuiz;
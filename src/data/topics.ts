// data/topics.ts
import { TopicData } from '../types';
import { sections as topic1Sections, quizQuestions as topic1Quiz } from './topic1';
import { sections as topic2Sections, quizQuestions as topic2Quiz } from './topic2';
import { sections as topic3Sections, quizQuestions as topic3Quiz } from './topic3';
import { sections as topic4Sections, quizQuestions as topic4Quiz } from './topic4';

export const topics: TopicData[] = [
  {
    id: 1,
    title: "Real Numbers",
    description: "Number concepts, approximations, ratios, and number bases",
    icon: "🔢",
    sections: topic1Sections,
    quizQuestions: topic1Quiz
  },
  {
    id: 2,
    title: "Sets",
    description: "Set theory and operations",
    icon: "🧮",
    sections: topic2Sections,
    quizQuestions: topic2Quiz
  },
  {
    id: 3,
    title: "Financial Mathematics",
    description: "Consumer arithmetic, profit & loss, interest, and financial planning",
    icon: "💰",
    sections: topic3Sections,
    quizQuestions: topic3Quiz
  },

  {
    id: 4,
    title: "Measures and Mensuration",
    description: "Units of measurement, perimeter, area, volume, and surface area",
    icon: "📏",
    sections: topic4Sections,
    quizQuestions: topic4Quiz
  },




];
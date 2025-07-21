// data/topics.ts
import { TopicData } from '../types';
import { sections as topic1Sections, quizQuestions as topic1Quiz } from './topic1';
import { sections as topic2Sections, quizQuestions as topic2Quiz } from './topic2';
import { sections as topic3Sections, quizQuestions as topic3Quiz } from './topic3';
import { sections as topic4Sections, quizQuestions as topic4Quiz } from './topic4';
import { sections as topic5Sections, quizQuestions as topic5Quiz } from './topic5';
import { sections as topic6Sections, quizQuestions as topic6Quiz } from './topic6';
import { sections as topic7Sections, quizQuestions as topic7Quiz } from './topic7';
import { sections as topic8Sections, quizQuestions as topic8Quiz } from './topic8';

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

  {
    id:5,
    title: "Graphs",
    description:"Functional graphs, travel graphs",
    icon: "📊",
    sections: topic5Sections,
    quizQuestions: topic5Quiz
  },

  {
    id:6,
    title: "Variation",
    description:"Direct, Partial, Inverse, Joint, Combined",
    icon: "📈",
    sections: topic6Sections,
    quizQuestions: topic6Quiz
  },
    {
    id:7,
    title: "Algebra",
    description:"Algebraic manipulation, Equations, Inequalities, and Indices and logarithms",
    icon: "𝒳",
    sections: topic7Sections,
    quizQuestions: topic7Quiz
  },
   {
    id:8,
    title: "Geometry",
    description:"Points, lines, angles, bearings, polygons, circles, loci, symmetry",
    icon: "📐",
    sections: topic8Sections,
    quizQuestions: topic8Quiz
  }
];
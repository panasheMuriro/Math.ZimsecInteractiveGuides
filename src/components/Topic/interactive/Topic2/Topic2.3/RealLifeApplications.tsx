/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Components/RealLifeApplications.tsx
import React, { useState } from 'react';

// Define the structure for an application area
interface ApplicationArea {
  title: string;
  icon: string;
  points: string[];
}

// Define the structure for an example scenario
interface ExampleScenario {
  description: string;
}

// Props for the component - Keep them optional
interface RealLifeApplicationsProps {
  title?: string;
  icon?: string;
  applicationAreas?: ApplicationArea[];
  exampleScenariosTitle?: string;
  exampleScenarios?: ExampleScenario[];
  additionalContent?: React.ReactNode;
}

// DEFAULT VALUES
const DEFAULT_APPLICATION_AREAS: ApplicationArea[] = [
  {
    title: "Market Research and Surveys",
    icon: "📊",
    points: [
      "Customer preferences and demographics",
      "Product usage patterns",
      "Brand loyalty analysis",
      "Target audience identification"
    ]
  },
  {
    title: "Database Management",
    icon: "🗄️",
    points: [
      "Query operations (SELECT, JOIN)",
      "Data filtering and sorting",
      "Relationship mapping",
      "Information retrieval systems"
    ]
  },
  {
    title: "Probability and Statistics",
    icon: "📈",
    points: [
      "Event relationships in probability",
      "Statistical sampling",
      "Hypothesis testing",
      "Risk analysis"
    ]
  },
  {
    title: "Biology and Medicine",
    icon: "🧬",
    points: [
      "Disease symptom patterns",
      "Genetic trait inheritance",
      "Drug interaction studies",
      "Medical diagnosis systems"
    ]
  },
  {
    title: "Computer Science",
    icon: "💻",
    points: [
      "Boolean logic operations",
      "Search algorithms",
      "Data structure operations",
      "Network analysis"
    ]
  },
  {
    title: "Education and Academia",
    icon: "🎓",
    points: [
      "Course enrollment patterns",
      "Student performance analysis",
      "Curriculum planning",
      "Resource allocation"
    ]
  }
];

const DEFAULT_EXAMPLE_SCENARIOS: ExampleScenario[] = [
  { description: "Social media platform user analysis" },
  { description: "Hospital patient treatment tracking" },
  { description: "School extracurricular activity participation" },
  { description: "E-commerce customer behavior studies" }
];

const RealLifeApplications: React.FC<RealLifeApplicationsProps> = ({
  title = "Real-Life Applications",
  icon = "🌍",
  applicationAreas = DEFAULT_APPLICATION_AREAS,
  exampleScenariosTitle = "Example Scenarios:",
  exampleScenarios = DEFAULT_EXAMPLE_SCENARIOS,
  additionalContent = null
}) => {
  // State for card navigation
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Combine application areas and example scenarios into a single list of items to display
  const allItems = [
    ...applicationAreas,
    { type: 'examples', title: exampleScenariosTitle, scenarios: exampleScenarios }
  ];

  const totalCards = allItems.length;
  const currentItem = allItems[currentCardIndex];

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className="flex flex-col items-center w-full p-6 bg-gradient-to-br from-blue-400 to-purple-300 rounded-3xl shadow-lg max-w-2xl"> {/* Reduced max-width */}
      {/* Header */}
      <div className="flex items-center justify-center mb-4 w-full"> {/* Reduced margin */}
        <h2 className="text-2xl font-bold flex items-center text-white"> {/* Smaller text */}
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h2>
      </div>

      {/* Card Display Area */}
      <div className="w-full mb-4"> {/* Reduced margin */}
        <div className="bg-white rounded-2xl p-5 shadow-md border border-indigo-100 h-[350px] flex flex-col"> {/* Fixed height card */}
          
          {/* Card Content */}
          <div className="flex-grow overflow-y-auto pr-2"> {/* Scrollable content area */}
            {/* Application Area Card */}
            {Object.prototype.hasOwnProperty.call(currentItem, 'points') && (
              <>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{(currentItem as ApplicationArea).icon}</span>
                  <h3 className="text-xl font-bold text-indigo-700">{(currentItem as ApplicationArea).title}</h3> {/* Smaller heading */}
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {(currentItem as ApplicationArea).points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm">{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Example Scenarios Card */}
            {Object.prototype.hasOwnProperty.call(currentItem, 'scenarios') && (
              <>
                <h3 className="text-xl font-bold mb-3 text-indigo-700">{currentItem.title}</h3> {/* Smaller heading */}
                <div className="bg-indigo-50 rounded-xl p-4 shadow-inner border border-indigo-200 flex-grow"> {/* Flex grow to fill space */}
                  <ul className="space-y-2">
                    {(currentItem as any).scenarios.map((scenario: ExampleScenario, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{scenario.description}</span> {/* Smaller text */}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Card Counter */}
          <div className="text-center text-sm text-gray-500 mt-2">
            {currentCardIndex + 1} of {totalCards}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full mb-4"> {/* Reduced margin */}
        <button
          onClick={handlePrevious}
          className="px-4 py-3 bg-white rounded-full hover:bg-indigo-600 transition-colors duration-200 flex items-center text-sm" // Smaller button
        >
          <span className="mr-1">←</span> Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-3 bg-white rounded-full hover:bg-indigo-600 transition-colors duration-200 flex items-center text-sm" // Smaller button
        >
          Next <span className="ml-1">→</span>
        </button>
      </div>

      {/* Additional Content (if provided) - Outside the main card flow */}
      {additionalContent && (
        <div className="w-full mt-2"> {/* Reduced margin */}
          {additionalContent}
        </div>
      )}
    </div>
  );
};

export default RealLifeApplications;
// src/Components/RealLifeApplications.tsx
import React, { useState } from 'react';

// --- Neubrutalism Styles & Colors (Using provided palette) ---
const NEUBRUTALISM_COLORS = {
  // Provided palette
  red: '#e63946',       // Red - Danger, accents, main background
  light: '#f1faee',     // Light - Backgrounds, text
  teal: '#a8dadc',      // Teal - Info boxes, highlights
  blue: '#457b9d',      // Blue - Primary, buttons
  dark: '#1d3557',      // Dark - Text, borders

  // Derived/Additional Neubrutalism colors for consistency
  white: '#ffffff',
  shadow: 'rgba(29, 53, 87, 0.2)', // dark with opacity
  buttonHover: '#5a96bd', // Lighter blue for hover
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.dark}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};

// --- End Neubrutalism Styles ---

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
    <div style={{
      ...neubrutalismBase,
      maxWidth: '600px', // Consistent with other components
      width: '100%',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.red, // Red background
      borderColor: NEUBRUTALISM_COLORS.dark, // Dark border
      color: NEUBRUTALISM_COLORS.dark, // Dark text
      borderRadius: '20px',
      boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.dark}`, // Dark shadow
    }}>
      {/* Header */}
      <div className="flex items-center justify-center mb-4 w-full">
        <h2 className="text-2xl font-extrabold flex items-center" style={{ color: NEUBRUTALISM_COLORS.light }}>
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h2>
      </div>

      {/* Card Display Area */}
      <div className="w-full mb-4">
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.light, // Light background
          borderColor: NEUBRUTALISM_COLORS.blue, // Blue border
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          
          {/* Card Content */}
          <div className="flex-grow overflow-y-auto pr-2">
            {/* Application Area Card */}
            {'points' in currentItem && (
              <>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{currentItem.icon}</span>
                  <h3 className="text-xl font-extrabold" style={{ color: NEUBRUTALISM_COLORS.dark }}>{currentItem.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {currentItem.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm" style={{ color: NEUBRUTALISM_COLORS.dark }}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Example Scenarios Card */}
            {'scenarios' in currentItem && (
              <>
                <h3 className="text-xl font-extrabold mb-3" style={{ color: NEUBRUTALISM_COLORS.dark }}>{currentItem.title}</h3>
                <div style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.teal, // Teal background
                  borderColor: NEUBRUTALISM_COLORS.blue, // Blue border
                  flexGrow: 1, // Flex grow to fill space
                }}>
                  <ul className="space-y-2">
                    {currentItem.scenarios!.map((scenario: ExampleScenario, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2" style={{ color: NEUBRUTALISM_COLORS.blue }}>•</span>
                        <span className="text-sm" style={{ color: NEUBRUTALISM_COLORS.dark }}>{scenario.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Card Counter */}
          <div className="text-center text-sm mt-2" style={{ color: NEUBRUTALISM_COLORS.dark }}>
            {currentCardIndex + 1} of {totalCards}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full mb-4">
        <button
          onClick={handlePrevious}
          style={{
            ...neubrutalismBase,
            padding: '0.75rem 1rem',
            fontWeight: 'bold',
            backgroundColor: NEUBRUTALISM_COLORS.blue, // Blue background
            color: NEUBRUTALISM_COLORS.light, // Light text
            borderColor: NEUBRUTALISM_COLORS.light, // Light border
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.blue}
        >
          <span className="mr-1">←</span> Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            ...neubrutalismBase,
            padding: '0.75rem 1rem',
            fontWeight: 'bold',
            backgroundColor: NEUBRUTALISM_COLORS.blue, // Blue background
            color: NEUBRUTALISM_COLORS.light, // Light text
            borderColor: NEUBRUTALISM_COLORS.light, // Light border
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.blue}
        >
          Next <span className="ml-1">→</span>
        </button>
      </div>

      {/* Additional Content (if provided) - Outside the main card flow */}
      {additionalContent && (
        <div className="w-full mt-2">
          {additionalContent}
        </div>
      )}
    </div>
  );
};

export default RealLifeApplications;
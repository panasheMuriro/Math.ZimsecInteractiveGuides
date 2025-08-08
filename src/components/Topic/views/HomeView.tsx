import { Link} from 'react-router-dom'
import { ChevronRight, CheckCircle} from 'lucide-react'
import { useTopicContext } from '../hooks/useTopicContext'
import Header from '../../Global/Header'

const HomeView = () => {
  const { topicData, completedSections } = useTopicContext()

  // Define the neubrutalism color palette, consistent with TopicsList
  const neubrutalismPalette = {
    background: "#f4f1de", // Creamy off-white
    primary: "#e07a5f",    // Coral red
    secondary: "#3d405b",  // Deep blue
    accent: "#81b29a",     // Sage green
    text: "#3d405b",       // Deep blue for main text
    border: "#000000",      // Pure black for strong borders
    shadow: "#f2cc8f",     // Sandy yellow for prominent shadows
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: neubrutalismPalette.background }}>
      <div className="max-w-md mx-auto">
        {/* Header component - assuming it adapts or is styled externally */}
      
         {/* <AppBar title="" showBackButton onBack={() => navigate("/home")} /> */}

        <Header
          title="ZIMSEC O-Level"
          description="Mathematics Interactive Guide"
          icon={topicData.icon}
        />

        {/* Topic Information Box */}
        <div
          className="bg-[#e07a5f] text-white border-2 rounded-xl p-4 mt-8 mb-6" // Changed background to white, border to 2px
          style={{
            borderColor: neubrutalismPalette.border, // Use black border
            boxShadow: `6px 6px 0 0 ${neubrutalismPalette.secondary}`, // Use secondary for shadow
          }}
        >
          <p className="text-xl font-bold"> {/* Bold, secondary color */}
            Topic {topicData.id}: {topicData.title}
          </p>
          <p className="text-md mt-2"> {/* Text color */}
            {topicData.description}
          </p>
        </div>

        {/* List of Sections */}
        <div className="space-y-6"> {/* Increased space-y for more visual separation */}
          {topicData.sections.map((section, index) => (
            <Link
              key={index}
              to={`study/${index}`}
              className={`block bg-white border-2 rounded-xl p-5 transition-transform duration-100 ease-in-out hover:scale-[1.02]`}
              style={{
                borderColor: neubrutalismPalette.border, // Black border
                boxShadow: completedSections.has(index)
                  ? `6px 6px 0 0 ${neubrutalismPalette.accent}, 0 0 0 4px ${neubrutalismPalette.accent}` // Accent for completed ring
                  : `6px 6px 0 0 ${neubrutalismPalette.shadow}` // Shadow for uncompleted
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4"> {/* Increased space-x */}
                  <div className="text-3xl" style={{ color: neubrutalismPalette.primary }}> {/* Primary for icon color */}
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: neubrutalismPalette.secondary }}> {/* Bold, secondary color */}
                      {section.title}
                    </h3>
                    <p className="text-sm" style={{ color: neubrutalismPalette.text }}> {/* Text color */}
                      Interactive learning
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {completedSections.has(index) && (
                    <CheckCircle
                      className="w-6 h-6" // Slightly larger icon
                      style={{ color: neubrutalismPalette.accent }} // Accent color for checkmark
                    />
                  )}
                  <ChevronRight
                    className="w-6 h-6" // Slightly larger icon
                    style={{ color: neubrutalismPalette.secondary }} // Secondary color for arrow
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeView

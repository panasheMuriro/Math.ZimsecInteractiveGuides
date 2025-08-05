// import { Link, useNavigate } from 'react-router-dom'
// import { ChevronRight, CheckCircle} from 'lucide-react'
// import { useTopicContext } from '../hooks/useTopicContext'
// import Header from '../../Global/Header'

// const HomeView = () => {
//   const { topicData, completedSections } = useTopicContext()
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-screen bg-[#f2cc8f] p-6">
//       <div className="max-w-md mx-auto">
//         <Header
//           title="ZIMSEC O-Level"
//           description="Mathematics Interactive Guide"
//           icon={topicData.icon}
//           showBackButton
//           onBack={() => navigate('/')}
//         />

//         <div className="bg-[#e07a5f] border-4 border-[#264653] rounded-2xl p-3 mt-4 mb-6" style={{boxShadow: "3px 3px #264653"}}>
//           <p className="text-white text-lg font-bold">Topic {topicData.id}: {topicData.title}</p>
//           <p className="text-white text-sm mt-1">{topicData.description}</p>
//         </div>

//         <div className="space-y-4">
//           {topicData.sections.map((section, index) => (
//             <Link
//               key={index}
//               to={`study/${index}`}
//               style={{boxShadow: '3px 3px #0000005D'}}
//               className={`block bg-white border-2 border-[#000] shadow-sm rounded-2xl p-4 transition-all duration-300 hover:bg-[#fefaf2] hover:scale-[1.02] ${
//                 completedSections.has(index) ? 'ring-2 ring-green-400' : ''
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <div className="text-2xl">{section.icon}</div>
//                   <div>
//                     <h3 className="text-[#3f3f3f] font-semibold">{section.title}</h3>
//                     <p className="text-[#94846e] text-sm">Interactive learning</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   {completedSections.has(index) && <CheckCircle className="text-green-500 w-5 h-5" />}
//                   <ChevronRight className="text-[#b0a99d]" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
// {/* 
//         <Link
//           to="quiz"
//           className="w-full mt-6 bg-[#ffd28f] text-[#4b3f2f] font-bold py-4 px-6 rounded-2xl hover:bg-[#f9c77c] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-md"
//         >
//           <Trophy className="w-5 h-5" />
//           <span>Take Quiz Challenge!</span>
//         </Link> */}
//       </div>
//     </div>
//   )
// }

// export default HomeView

import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, CheckCircle} from 'lucide-react'
import { useTopicContext } from '../hooks/useTopicContext'
import Header from '../../Global/Header'

const HomeView = () => {
  const { topicData, completedSections } = useTopicContext()
  const navigate = useNavigate()

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
        <Header
          title="ZIMSEC O-Level"
          description="Mathematics Interactive Guide"
          icon={topicData.icon}
          showBackButton
          onBack={() => navigate('/home')}
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

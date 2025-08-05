// import { Link } from 'react-router-dom'
// import { ChevronRight } from 'lucide-react'
// import { topics } from '../../data/topics'

// const TopicsList = () => {
//   // f2cc8f
//   //  og background fdf8f3 f2cc8f
//   return (
//     <div className="min-h-screen bg-[#f2cc8f] p-6">
//       <div className="max-w-md mx-auto">
//         <div className="text-center mb-8 mt-12">
//           <h1 className="text-3xl font-bold text-[#3e3e3e] mb-2">ZIMSEC O-Level</h1>
//           <h2 className="text-lg text-[#7b5e48]">Mathematics Interactive Guide</h2>
//         </div>

//         <div className="space-y-4">
//           {topics.map((topic) => (
//             <Link
//               key={topic.id}
//               to={`/topics/${topic.id}`}
//               style={{boxShadow: '3px 3px #000'}}
//               className="block bg-white border-2 border-[#3d405b] shadow-sm rounded-2xl p-4 transition-all duration-300 hover:bg-[#fefaf2] hover:scale-[1.02]"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <div className="text-2xl">{topic.icon}</div>
//                   <div>
//                     <h3 className="text-[#3f3f3f] font-semibold">Topic {topic.id}: {topic.title}</h3>
//                     <p className="text-[#94846e] text-sm">{topic.description}</p>
//                   </div>
//                 </div>
//                 <ChevronRight className="text-[#b0a99d]" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className='text-center my-8'>Zimsec Interactive Guides </div>
//     </div>
//   )
// }

// export default TopicsList

import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { topics } from '../../data/topics' // Assuming this path is correct

const TopicsList = () => {
  // Define the neubrutalism color palette
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
        <div className="text-center mb-8 mt-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 border-b-4 pb-2 inline-block"
            style={{ borderColor: neubrutalismPalette.primary, color: neubrutalismPalette.secondary }}
          >
            ZIMSEC O-Level
          </h1>
          <h2 className="text-lg sm:text-xl" style={{ color: neubrutalismPalette.text }}>
            Mathematics Interactive Guide
          </h2>
        </div>

        <div className="space-y-6"> {/* Increased space-y for more visual separation */}
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}`}
              className="block bg-white border-2 rounded-xl p-5 transition-transform duration-100 ease-in-out hover:scale-[1.02]"
              style={{
                borderColor: neubrutalismPalette.border,
                boxShadow: `6px 6px 0 0 ${neubrutalismPalette.shadow}`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4"> {/* Increased space-x */}
                  <div className="text-3xl" style={{ color: neubrutalismPalette.primary }}> {/* Used primary for icon color */}
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: neubrutalismPalette.secondary }}> {/* Bold and secondary color for title */}
                      Topic {topic.id}: {topic.title}
                    </h3>
                    <p className="text-sm" style={{ color: neubrutalismPalette.text }}> {/* Text color for description */}
                      {topic.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6" style={{ color: neubrutalismPalette.secondary }} /> {/* Secondary color for arrow */}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='text-center my-12 text-lg font-semibold' style={{ color: neubrutalismPalette.text }}>
        Zimsec Interactive Guides
      </div>
    </div>
  )
}

export default TopicsList

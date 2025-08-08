
import { Link} from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { topics } from '../../data/topics' 

const TopicsList = () => {

  
  const neubrutalismPalette = {
    background: "#f4f1de", 
    primary: "#e07a5f",    
    secondary: "#3d405b",  
    accent: "#81b29a",     
    text: "#3d405b",       
    border: "#000000",      
    shadow: "#f2cc8f",     
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: neubrutalismPalette.background }}>
      <div className="max-w-md mx-auto">

        <Link to="/">
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
        </Link>

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

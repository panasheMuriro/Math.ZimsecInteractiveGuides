import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { topics } from '../../data/topics'

const TopicsList = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f3] p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#3e3e3e] mb-2">ZIMSEC O-Level</h1>
          <h2 className="text-lg text-[#7b5e48]">Mathematics Interactive Guide</h2>
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}`}
              className="block bg-white border border-[#e6dccf] shadow-sm rounded-2xl p-4 transition-all duration-300 hover:bg-[#fefaf2] hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{topic.icon}</div>
                  <div>
                    <h3 className="text-[#3f3f3f] font-semibold">Topic {topic.id}: {topic.title}</h3>
                    <p className="text-[#94846e] text-sm">{topic.description}</p>
                  </div>
                </div>
                <ChevronRight className="text-[#b0a99d]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopicsList
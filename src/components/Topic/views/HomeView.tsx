import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, CheckCircle, Trophy } from 'lucide-react'
import { useTopicContext } from '../hooks/useTopicContext'
import Header from '../../Global/Header'

const HomeView = () => {
  const { topicData, completedSections } = useTopicContext()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#fdf8f3] p-6">
      <div className="max-w-md mx-auto">
        <Header
          title="ZIMSEC O-Level"
          description="Mathematics Interactive Guide"
          icon={topicData.icon}
          showBackButton
          onBack={() => navigate('/')}
        />

        <div className="bg-[#fffdf8] border border-[#e2dac9] shadow-inner rounded-lg p-3 mt-4 mb-6">
          <p className="text-[#4b3f2f] font-medium">Topic {topicData.id}: {topicData.title}</p>
          <p className="text-[#6b5d48] text-sm mt-1">{topicData.description}</p>
        </div>

        <div className="space-y-4">
          {topicData.sections.map((section, index) => (
            <Link
              key={index}
              to={`study/${index}`}
              className={`block bg-white border border-[#e6dccf] shadow-sm rounded-2xl p-4 transition-all duration-300 hover:bg-[#fefaf2] hover:scale-[1.02] ${
                completedSections.has(index) ? 'ring-2 ring-green-400' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{section.icon}</div>
                  <div>
                    <h3 className="text-[#3f3f3f] font-semibold">{section.title}</h3>
                    <p className="text-[#94846e] text-sm">Interactive learning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {completedSections.has(index) && <CheckCircle className="text-green-500 w-5 h-5" />}
                  <ChevronRight className="text-[#b0a99d]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="quiz"
          className="w-full mt-6 bg-[#ffd28f] text-[#4b3f2f] font-bold py-4 px-6 rounded-2xl hover:bg-[#f9c77c] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-md"
        >
          <Trophy className="w-5 h-5" />
          <span>Take Quiz Challenge!</span>
        </Link>
      </div>
    </div>
  )
}

export default HomeView
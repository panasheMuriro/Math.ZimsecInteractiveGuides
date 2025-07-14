import { ChevronRight, CheckCircle, Trophy } from 'lucide-react';
import { Section } from '../types';

interface HomeViewProps {
  sections: Section[];
  completedSections: Set<number>;
  setCurrentView: (view: 'home' | 'study' | 'quiz' | 'quiz-complete') => void;
  setCurrentSection: (index: number) => void;
}

const HomeView = ({
  sections,
  completedSections,
  setCurrentView,
  setCurrentSection
}: HomeViewProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">📊</div>
          <h1 className="text-3xl font-bold text-white mb-2">ZIMSEC O-Level</h1>
          <h2 className="text-xl text-purple-200">Mathematics Interactive Guide</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-4">
            <p className="text-white/90 font-semibold">Topic 1: Real Numbers</p>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentSection(index);
                setCurrentView('study');
              }}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                completedSections.has(index) ? 'ring-2 ring-green-400' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{section.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{section.title}</h3>
                    <p className="text-purple-200 text-sm">Interactive learning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {completedSections.has(index) && (
                    <CheckCircle className="text-green-400 w-5 h-5" />
                  )}
                  <ChevronRight className="text-white/60" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentView('quiz')}
          className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Trophy className="w-5 h-5" />
          <span>Take Quiz Challenge!</span>
        </button>
      </div>
    </div>
  );
};

export default HomeView;
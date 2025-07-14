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
    <div className="min-h-screen bg-[#fdf8f3] p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📘</div>
          <h1 className="text-3xl font-bold text-[#3e3e3e] mb-2">ZIMSEC O-Level</h1>
          <h2 className="text-lg text-[#7b5e48]">Mathematics Interactive Guide</h2>
          <div className="bg-[#fffdf8] border border-[#e2dac9] shadow-inner rounded-lg p-3 mt-4">
            <p className="text-[#4b3f2f] font-medium">Topic 1: Real Numbers</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentSection(index);
                setCurrentView('study');
              }}
              className={`bg-white border border-[#e6dccf] shadow-sm rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-[#fefaf2] hover:scale-[1.02] ${
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
                  {completedSections.has(index) && (
                    <CheckCircle className="text-green-500 w-5 h-5" />
                  )}
                  <ChevronRight className="text-[#b0a99d]" />
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Quiz button */}
        <button
          onClick={() => setCurrentView('quiz')}
          className="w-full mt-6 bg-[#ffd28f] text-[#4b3f2f] font-bold py-4 px-6 rounded-2xl hover:bg-[#f9c77c] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-md"
        >
          <Trophy className="w-5 h-5" />
          <span>Take Quiz Challenge!</span>
        </button>
      </div>
    </div>
  );
};

export default HomeView;

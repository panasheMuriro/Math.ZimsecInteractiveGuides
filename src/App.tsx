import { Routes, Route, Navigate } from 'react-router-dom'
import StudyView from './components/Topic/views/StudyView'
import HomeView from './components/Topic/views/HomeView'
import QuizView from './components/Topic/views/QuizView'
import QuizCompleteView from './components/Topic/views/QuizCompleteView'
import TopicsList from './components/Topics/TopicList'
import TopicLayout from './components/Topics/TopicLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopicsList />} />
      <Route path="/topics/:topicId" element={<TopicLayout />}>
        <Route index element={<HomeView />} />
        <Route path="study/:sectionIndex" element={<StudyView />} />
        <Route path="quiz" element={<QuizView />} />
        <Route path="quiz-complete" element={<QuizCompleteView />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
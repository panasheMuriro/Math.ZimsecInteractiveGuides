// components/Topic/TopicLayout.tsx
import { Outlet, useParams, Navigate, useNavigate } from "react-router-dom";
import { topics } from "../../data/topics";
import { useState } from "react";
import AppBar from "../Global/AppBar";

const TopicLayout = () => {
  const { topicId } = useParams();
  const [completedSections] = useState<Set<number>>(new Set());
  const [quizScore, setQuizScore] = useState(0);
  const topicData = topics.find((t) => t.id === Number(topicId));
  const navigate = useNavigate();

  if (!topicData) {
    return <Navigate to="/" replace />;
  }

  const contextValue = {
    topicData,
    completedSections,
    quizState: {
      score: quizScore,
      setScore: setQuizScore,
    },
  };

  return (
    <div className="font-sans">
  <AppBar title="" showBackButton onBack={() => navigate(-1)} />
      <Outlet context={contextValue} />
    </div>
  );
};

export default TopicLayout;

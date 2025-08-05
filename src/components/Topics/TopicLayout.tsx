// components/Topic/TopicLayout.tsx
import { Outlet, useParams, Navigate } from "react-router-dom";
import { topics } from "../../data/topics";
import { useState } from "react";

const TopicLayout = () => {
  const { topicId } = useParams();
  const [completedSections] = useState<Set<number>>(new Set());
  const [quizScore, setQuizScore] = useState(0);
  const topicData = topics.find((t) => t.id === Number(topicId));

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
      <Outlet context={contextValue} />
    </div>
  );
};

export default TopicLayout;

// hooks/useTopicContext.ts
import { useOutletContext } from 'react-router-dom';
import { TopicContext } from '../../../types';


export const useTopicContext = () => {
  return useOutletContext<TopicContext>();
};
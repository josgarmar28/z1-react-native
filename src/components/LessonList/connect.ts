import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Lesson } from 'models/Lesson';

const useConnect = () => {
  const { navigate } = useNavigation();

  const handleNavigateToLessonDetail = useCallback(
    (item: Lesson) => {
      navigate('Details', { lesson: item });
    },
    [navigate],
  );

  return {
    handleNavigateToLessonDetail,
  };
};

export default useConnect;

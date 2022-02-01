import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { LessonNormalized } from 'models/Lesson';

const useConnect = () => {
  const { navigate } = useNavigation();

  const handleDetails = useCallback(
    (item: LessonNormalized) => {
      navigate('Details', { lesson: item });
    },
    [navigate],
  );

  return {
    handleDetails,
  };
};

export default useConnect;

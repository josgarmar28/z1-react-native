import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useLessonsQuery } from 'apollo/generated/lessons';

const useConnect = () => {
  const { navigate } = useNavigation();

  const { data } = useLessonsQuery();

  const lessons = data?.items;

  const handleDetails = useCallback(() => {
    navigate('Details');
  }, [navigate]);

  return {
    handleDetails,
    lessons,
  };
};

export default useConnect;

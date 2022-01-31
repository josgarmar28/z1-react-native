import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Lesson } from 'apollo/generated/globalTypes';

const useConnect = () => {
  const { navigate } = useNavigation();

  const handleDetails = useCallback(
    (item: Lesson | null | undefined) => {
      navigate('Details', { lesson: item });
    },
    [navigate],
  );

  return {
    handleDetails,
  };
};

export default useConnect;

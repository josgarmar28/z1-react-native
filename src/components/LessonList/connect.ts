import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';

const useConnect = () => {
  const { navigate } = useNavigation();

  const handleDetails = useCallback(() => {
    navigate('Details');
  }, [navigate]);

  return {
    handleDetails,
  };
};

export default useConnect;

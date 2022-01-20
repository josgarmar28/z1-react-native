import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LogicParams } from './types';

const useLogic = ({ jumpTo, routeName }: LogicParams) => {
  const { t } = useTranslation();

  const onPress = useCallback(() => {
    jumpTo(routeName);
  }, [jumpTo, routeName]);

  const title = useMemo(() => {
    if (routeName === 'Alerts') return t('alerts');
    if (routeName === 'Discover') return t('discover');
    if (routeName === 'Feed') return t('feed');
    if (routeName === 'Home') return t('home');

    return '';
  }, [routeName, t]);

  return { title, onPress };
};

export default useLogic;

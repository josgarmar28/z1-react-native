import React, { FC, useCallback } from 'react';
import { Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Text } from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const { t, i18n } = useTranslation();

  const onPress = useCallback(() => {
    const language = i18n.language === 'en_US' ? 'es_ES' : 'en_US';
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <Container>
      <Text>{t('home')}</Text>
      <Button title={t('changeLanguage')} onPress={onPress} />
    </Container>
  );
};

export default Home;

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from './styles';
import { Props } from './types';

const Discover: FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Text>{t('discover')}</Text>
    </Container>
  );
};

export default Discover;

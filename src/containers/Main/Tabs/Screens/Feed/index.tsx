import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from './styles';
import { Props } from './types';

const Feed: FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Text>{t('feed')}</Text>
    </Container>
  );
};

export default Feed;

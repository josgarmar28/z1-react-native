import React, { FC, memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Article, Author, Container, Image, Title } from './styles';
import { Props } from './types';

const HorizontalLessonCard: FC<Props> = ({ lesson, onPress }) => {
  const handlePress = useCallback(() => {
    onPress(lesson);
  }, [onPress, lesson]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container>
        <Image source={{ uri: lesson?.image }} />

        <Article>Article</Article>

        <Title>{lesson?.title}</Title>

        <Author>{lesson?.author}</Author>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HorizontalLessonCard);

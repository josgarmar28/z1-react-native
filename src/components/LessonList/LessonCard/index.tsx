import React, { FC, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Author, Category, Container, Image, Title } from './styles';
import { Props } from './types';

const LessonCard: FC<Props> = ({ lesson, onPress }) => {
  const handlePress = useCallback(() => {
    onPress(lesson);
  }, [onPress, lesson]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container>
        <Image source={{ uri: lesson?.image }} />

        <Category>{lesson?.category.title}</Category>

        <Title>{lesson?.title}</Title>

        <Author>{lesson?.author}</Author>
      </Container>
    </TouchableOpacity>
  );
};

export default LessonCard;

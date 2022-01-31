import React, { FC } from 'react';
import { Author, Category, Container, Image, Title } from './styles';
import { Props } from './types';

const LessonCard: FC<Props> = (lesson) => {
  const item = lesson.lesson;
  return (
    <Container>
      <Image source={{ uri: item?.image }} />

      <Category>{item?.category.title}</Category>

      <Title>{item?.title}</Title>

      <Author>{item?.author}</Author>
    </Container>
  );
};

export default LessonCard;

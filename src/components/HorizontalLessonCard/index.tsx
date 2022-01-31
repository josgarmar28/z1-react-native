import React, { FC } from 'react';
import { Article, Author, Container, Image, Title } from './styles';
import { Props } from './types';

const HorizontalLessonCard: FC<Props> = (lesson) => {
  const item = lesson.lesson;
  return (
    <Container>
      <Image source={{ uri: item?.image }} />

      <Article>Article</Article>

      <Title>{item?.title}</Title>

      <Author>{item?.author}</Author>
    </Container>
  );
};

export default HorizontalLessonCard;

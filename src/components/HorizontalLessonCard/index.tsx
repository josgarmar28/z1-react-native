import React, { FC } from 'react';
import { Article, Author, Container, Image, Title } from './styles';
import { Props } from './types';

const HorizontalLessonCard: FC<Props> = () => {
  return (
    <Container>
      <Image source={{ uri: 'https://placeimg.com/640/360/animals' }} />

      <Article>Article</Article>

      <Title>Title</Title>

      <Author>Author</Author>
    </Container>
  );
};

export default HorizontalLessonCard;

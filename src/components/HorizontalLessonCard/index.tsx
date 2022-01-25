import React, { FC } from 'react';
import { Article, Author, Container, Title } from './styles';
import { Props } from './types';

const HorizontalLessonCard: FC<Props> = () => {
  return (
    <Container>
      {/* <Image source={{ uri: urlImage }} /> */}

      <Article>Article</Article>

      <Title>Title</Title>

      <Author>Author</Author>
    </Container>
  );
};

export default HorizontalLessonCard;

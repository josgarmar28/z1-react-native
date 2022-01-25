import React, { FC } from 'react';
import { Author, Category, Container, Title } from './styles';
import { Props } from './types';

const LessonCard: FC<Props> = () => {
  return (
    <Container>
      {/* <Image source={{ uri: urlImage }} /> */}

      <Category>Category</Category>

      <Title>Title</Title>

      <Author>Author</Author>
    </Container>
  );
};

export default LessonCard;

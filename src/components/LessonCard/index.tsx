import React, { FC } from 'react';
import { Author, Category, Container, Image, Title } from './styles';
import { Props } from './types';

const LessonCard: FC<Props> = () => {
  return (
    <Container>
      <Image source={{ uri: 'https://placeimg.com/640/360/animals' }} />

      <Category>Category</Category>

      <Title>Title</Title>

      <Author>Author</Author>
    </Container>
  );
};

export default LessonCard;

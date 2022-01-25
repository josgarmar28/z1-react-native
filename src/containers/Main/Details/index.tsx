import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Close from 'components/Icons/Close';
import useConnect from './connect';
import { Article, Author, Container, Content, Scroll, Title } from './styles';
import { Props } from './types';

const Details: FC<Props> = () => {
  const { handleBack } = useConnect();
  return (
    <Scroll showsVerticalScrollIndicator={false}>
      <Container>
        <BorderlessButton activeOpacity={0.75} onPress={handleBack}>
          <Close />
        </BorderlessButton>

        <Article>Article</Article>

        <Title>Title</Title>

        <Author>Author</Author>

        {/* <Image source={{ uri: urlImagen }} /> */}

        <Content>Content</Content>
      </Container>
    </Scroll>
  );
};

export default Details;

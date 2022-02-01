import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Close } from '../../../../components/Icons';
import useConnect from './connect';
import {
  Article,
  Author,
  Container,
  Content,
  Image,
  Scroll,
  Title,
} from './styles';
import { Props } from './types';

const Details: FC<Props> = ({ route }) => {
  const { handleClose } = useConnect();
  const { lesson } = route.params;
  return (
    <Scroll showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Container>
          <BorderlessButton activeOpacity={0.75} onPress={handleClose}>
            <Close />
          </BorderlessButton>

          <Article>Article</Article>
          <Title>{lesson?.title}</Title>
          <Author>{lesson?.author}</Author>
          <Image source={{ uri: lesson?.image }} />
          <Content>{lesson?.content}</Content>
        </Container>
      </SafeAreaView>
    </Scroll>
  );
};

export default Details;

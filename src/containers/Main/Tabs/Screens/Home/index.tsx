import React, { FC } from 'react';
import { View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CategoryCard from 'components/CategoryCard';
import LessonCard from 'components/LessonCard';
import useConnect from './connect';
import { CategoryBar, Container, Title } from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const { handleDetails } = useConnect();
  return (
    <Container>
      <Title>Learn</Title>
      <CategoryBar
        data={['TODO']}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <CategoryCard />}
        horizontal={true}
      />

      <FlatList
        key={'2'}
        data={['TODO', '2', '3', 'TODO', '2', '3']}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({}) => (
          <View>
            <TouchableOpacity onPress={handleDetails}>
              <LessonCard />
            </TouchableOpacity>
          </View>
        )}
      />
    </Container>
  );
};

export default Home;

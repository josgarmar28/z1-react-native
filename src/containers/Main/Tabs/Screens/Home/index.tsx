import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryCard from 'components/CategoryCard';
import LessonList from 'components/LessonList';
import { CategoryBar, Container, Content, Header, Title } from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  // const selector = 'Category'.localeCompare('All') === 0;
  const selector = 'All'.localeCompare('All') === 0;

  return (
    <Container>
      <SafeAreaView>
        <Content>
          <Header>
            <Title>Learn</Title>
            <CategoryBar
              data={['TODO', '2', '3', 'TODO', '2', '3']}
              showsHorizontalScrollIndicator={false}
              renderItem={() => <CategoryCard />}
              horizontal={true}
            />
          </Header>
          <LessonList selector={selector} />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default Home;

import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryCard, LessonList } from '../../../../../components';
import useConnect from './connect';
import { CategoryBar, Container, Content, Header, Title } from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const { categoryList, filteredList, filter } = useConnect();

  return (
    <Container>
      <SafeAreaView>
        <Content>
          <Header>
            <Title>Learn</Title>
            <CategoryBar
              data={categoryList}
              showsHorizontalScrollIndicator={false}
              renderItem={(lesson) => <CategoryCard category={lesson.item} />}
              horizontal={true}
            />
          </Header>
          <LessonList lessons={filteredList} filter={filter} />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default Home;

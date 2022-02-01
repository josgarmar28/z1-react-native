import React, { FC, memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Lesson } from 'models/Lesson';
import useConnect from './connect';
import HorizontalLessonCard from './HorizontalLessonCard';
import LessonCard from './LessonCard';
import { Horizontal, Vertical } from './styles';
import { Props } from './types';

const LessonList: FC<Props> = ({ lessons, filter }) => {
  const showVerticalCards = filter === 'All';
  const { handleNavigateToLessonDetail } = useConnect();

  const handleKeyExtractor = (item: Lesson) => item.id;

  return (
    <>
      {showVerticalCards ? (
        <Vertical>
          <FlatList
            keyExtractor={handleKeyExtractor}
            data={lessons}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <LessonCard
                lesson={item}
                onPress={handleNavigateToLessonDetail}
              />
            )}
          />
        </Vertical>
      ) : (
        <Horizontal>
          <FlatList
            keyExtractor={handleKeyExtractor}
            data={lessons}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            renderItem={({ item }) => (
              <HorizontalLessonCard
                lesson={item}
                onPress={handleNavigateToLessonDetail}
              />
            )}
          />
        </Horizontal>
      )}
    </>
  );
};

export default memo(LessonList);

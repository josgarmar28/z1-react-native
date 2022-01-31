import React, { FC } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import useConnect from './connect';
import HorizontalLessonCard from './HorizontalLessonCard';
import LessonCard from './LessonCard';
import { Horizontal, Vertical } from './styles';
import { Props } from './types';

const LessonList: FC<Props> = ({ lessons, filter }) => {
  const selector = 'All'.localeCompare(filter) === 0;
  const { handleDetails } = useConnect();

  return (
    <>
      {selector ? (
        <Vertical>
          <FlatList
            key={'2'}
            data={lessons}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <LessonCard lesson={item} onPress={handleDetails} />
            )}
          />
        </Vertical>
      ) : (
        <Horizontal>
          <FlatList
            key={'1'}
            data={lessons}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            renderItem={({ item }) => (
              <HorizontalLessonCard lesson={item} onPress={handleDetails} />
            )}
          />
        </Horizontal>
      )}
    </>
  );
};

export default LessonList;

import React, { FC } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import HorizontalLessonCard from '../HorizontalLessonCard';
import LessonCard from '../LessonCard';
import useConnect from './connect';
import { Horizontal, Vertical } from './styles';
import { Props } from './types';

const LessonList: FC<Props> = ({ lessons, filter }) => {
  const { handleDetails } = useConnect();
  const selector = 'All'.localeCompare(filter) !== 0;

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
              <TouchableOpacity onPress={handleDetails}>
                <LessonCard lesson={item} />
              </TouchableOpacity>
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
              <TouchableOpacity onPress={handleDetails}>
                <HorizontalLessonCard lesson={item} />
              </TouchableOpacity>
            )}
          />
        </Horizontal>
      )}
    </>
  );
};

export default LessonList;

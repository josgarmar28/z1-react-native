import React, { FC } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import HorizontalLessonCard from 'components/HorizontalLessonCard';
import LessonCard from 'components/LessonCard';
import useConnect from './connect';
import { Horizontal, Vertical } from './styles';
import { Props } from './types';

const LessonList: FC<Props> = ({ selector }) => {
  const { handleDetails } = useConnect();

  return (
    <>
      {selector ? (
        <Vertical>
          <FlatList
            key={'2'}
            data={['TODO', '2', '3', 'TODO', '2', '3']}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({}) => (
              <TouchableOpacity onPress={handleDetails}>
                <LessonCard />
              </TouchableOpacity>
            )}
          />
        </Vertical>
      ) : (
        <Horizontal>
          <FlatList
            key={'1'}
            data={['TODO', '2', '3', 'TODO', '2', '3']}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            renderItem={({}) => (
              <TouchableOpacity onPress={handleDetails}>
                <HorizontalLessonCard />
              </TouchableOpacity>
            )}
          />
        </Horizontal>
      )}
    </>
  );
};

export default LessonList;

import React, { FC, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category, Name, Selected } from './styles';
import { Props } from './types';

const CategoryCard: FC<Props> = ({ category, filter, setFilter }) => {
  const selector = category.localeCompare(filter) === 0;

  const handlePress = useCallback(() => {
    setFilter(category);
  }, [category, setFilter]);

  return (
    <TouchableOpacity onPress={handlePress}>
      {selector ? (
        <Selected>
          <Name>{category}</Name>
        </Selected>
      ) : (
        <Category>
          <Name>{category}</Name>
        </Category>
      )}
    </TouchableOpacity>
  );
};

export default CategoryCard;

import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category, Name, Selected } from './styles';
import { Props } from './types';

const CategoryCard: FC<Props> = ({ category, filter }) => {
  const selector = category.localeCompare(filter) === 0;
  return (
    <TouchableOpacity>
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

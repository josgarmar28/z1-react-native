import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category, Name, Selected } from './styles';
import { Props } from './types';

const CategoryCard: FC<Props> = (category) => {
  const item: string = category.category;
  const selector = item.localeCompare('All') === 0; //TO_DO
  return (
    <TouchableOpacity>
      {selector ? (
        <Selected>
          <Name>{item}</Name>
        </Selected>
      ) : (
        <Category>
          <Name>{item}</Name>
        </Category>
      )}
    </TouchableOpacity>
  );
};

export default CategoryCard;

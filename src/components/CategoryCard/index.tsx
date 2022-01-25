import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Name, Selected } from './styles';
import { Props } from './types';

const CategoryCard: FC<Props> = () => {
  return (
    <TouchableOpacity>
      {/* <TouchableOpacity activeOpacity={0.9} onPress={() => setFilter(category)}> */}
      {/* {category === filter ? ( */}
      <Selected>
        <Name>{'category'}</Name>
      </Selected>
      {/* ) : (
        <CategoryCardContainer>
          <CategoryCardName>{category}</CategoryCardName>
        </CategoryCardContainer>
      )} */}
    </TouchableOpacity>
  );
};

export default CategoryCard;

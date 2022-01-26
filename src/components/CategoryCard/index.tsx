import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category, Name } from './styles';
import { Props } from './types';

const CategoryCard: FC<Props> = () => {
  return (
    <TouchableOpacity>
      {/* <TouchableOpacity activeOpacity={0.9} onPress={() => setFilter(category)}> */}
      {/* {category === filter ? ( */}
      <Category>
        <Name>Category</Name>
      </Category>
      {/* ) : (
        <CategoryCardContainer>
          <CategoryCardName>{category}</CategoryCardName>
        </CategoryCardContainer>
      )} */}
    </TouchableOpacity>
  );
};

export default CategoryCard;

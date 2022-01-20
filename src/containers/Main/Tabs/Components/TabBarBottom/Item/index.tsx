import React, { FC, memo } from 'react';
import Icon from './Icon';
import useLogic from './logic';
import { Content, Container, Label } from './styles';
import { Props } from './types';

const TabBarBottomItem: FC<Props> = ({ jumpTo, isFocused, routeName }) => {
  const { title, onPress } = useLogic({ jumpTo, routeName });

  return (
    <Container>
      <Content onPress={onPress}>
        <Icon icon={routeName} focused={isFocused} />
        <Label focused={isFocused}>{title}</Label>
      </Content>
    </Container>
  );
};

export default memo(TabBarBottomItem);

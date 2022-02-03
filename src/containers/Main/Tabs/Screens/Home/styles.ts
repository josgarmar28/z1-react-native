import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-bottom: 67px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Title = styled.Text`
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 30px;
  font-family: 'CooperBT-Medium';
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  align-items: center;
`;

export const Header = styled.View`
  height: 95px;
`;

export const CategoryBar = styled.FlatList`
  margin-left: 20px;
`;

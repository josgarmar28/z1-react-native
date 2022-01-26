import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-bottom: 67px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #ffffff;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Header = styled.View`
  height: 90;
`;

export const CategoryBar = styled.FlatList`
  margin-top: 12px;
  margin-left: 20px;
`;

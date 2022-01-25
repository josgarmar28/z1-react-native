import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grape};
  margin-bottom: ${({ theme }) => theme.device.height * 0.1}px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #ffffff;
`;

export const CategoryBar = styled.FlatList`
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 10px;
  height: 50px;
`;

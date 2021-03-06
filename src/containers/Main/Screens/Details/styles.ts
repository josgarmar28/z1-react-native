import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Container = styled.View`
  flex: 1;
  margin-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Article = styled.Text`
  font-family: 'SofiaProSemiBold';
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellow_les};
  margin-horizontal: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-family: 'CooperBT-Medium';
  font-size: 34px;
  color: ${({ theme }) => theme.colors.white};
  margin-horizontal: 20px;
  margin-vertical: 7px;
`;

export const Author = styled.Text`
  font-family: 'SofiaProLight';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  margin-horizontal: 20px;
  margin-vertical: 7px;
`;

export const Content = styled.Text`
  font-family: 'SofiaProRegular';
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
  margin-horizontal: 17px;
  margin-vertical: 10px;
  line-height: 25px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-vertical: 10px;
`;

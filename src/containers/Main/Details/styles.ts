import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Container = styled.View`
  flex: 1;
  margin-horizontal: 20px;
  margin-top: 25px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Article = styled.Text`
  font-size: 13px;
  text-transform: uppercase;
  color: #fddb6f;
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  margin-horizontal: 10px;
  margin-vertical: 7px;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #ffffff;
  margin-horizontal: 10px;
  margin-vertical: 7px;
`;

export const Content = styled.Text`
  font-size: 13px;
  color: #ffffff;
  margin-horizontal: 10px;
  margin-vertical: 7px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-vertical: 7px;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #60306f;
  shadow-color: #000;
  height: 300px;
  width: ${({ theme }) => theme.device.width * 0.44}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 38%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Category = styled.Text`
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fddb6f;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const Author = styled.Text`
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 13px;
`;

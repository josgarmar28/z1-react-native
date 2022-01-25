import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #60306f;
  shadow-color: #000;
  height: 125px;
  width: ${({ theme }) => theme.device.width * 0.9}px;
`;

export const Image = styled.Image`
  width: 30%;
  height: 107px;
  margin-vertical: 8px;
  margin-horizontal: 8px;
  border-radius: 10px;
`;

export const Article = styled.Text`
  position: absolute;
  left: 115px;
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fddb6f;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  position: absolute;
  top: 35px;
  left: 115px;
  width: 220px;
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const Author = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 115px;
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 13px;
`;

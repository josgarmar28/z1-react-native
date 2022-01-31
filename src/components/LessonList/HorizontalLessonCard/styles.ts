import styled from 'styled-components/native';

export const Container = styled.View`
  fill: 'content';
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple_les};
  width: ${({ theme }) => theme.device.width * 0.91}px;
`;

export const Image = styled.Image`
  height: 110px;
  width: 110px;
  margin-vertical: 10px;
  margin-horizontal: 10px;
  border-radius: 10px;
`;

export const Article = styled.Text`
  position: absolute;
  left: 130px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.yellow_les};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  position: absolute;
  top: 35px;
  left: 130px;
  margin-right: 20px;
  width: 215px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const Author = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 130px;
  margin-right: 20px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

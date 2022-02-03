import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  fill: 'content';
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple_les};
  width: ${({ theme }) => theme.device.width * 0.91}px;
`;

export const Image = styled.Image`
  height: 100px;
  width: 100px;
  margin-vertical: 10px;
  margin-horizontal: 10px;
  border-radius: 10px;
`;

export const Article = styled.Text`
  position: absolute;
  left: 120px;
  margin-right: 20px;
  margin-top: 15px;
  ${({ theme }) =>
    theme.device.isAndroid &&
    css`
      margin-top: 10px;
    `};
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.yellow_les};
  font-size: 14px;
  font-family: 'SofiaProSemiBold';
  text-transform: uppercase;
`;

export const Title = styled.Text`
  position: absolute;
  top: 37px;
  left: 120px;
  width: 215px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: 'SofiaProSemiBold';
  line-height: 28px;
`;

export const Author = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 120px;
  margin-right: 20px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: 'SofiaProLight';
`;

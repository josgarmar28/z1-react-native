import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple_les};
  height: 275px;
  width: ${({ theme }) => theme.device.width * 0.44}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 37%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Category = styled.Text`
  margin-left: 12px;
  margin-top: 15px;
  ${({ theme }) =>
    theme.device.isAndroid &&
    css`
      margin-top: 10px;
    `};
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.yellow_les};
  font-size: 14px;
  font-family: 'SofiaProSemiBold';
  text-transform: uppercase;
`;

export const Title = styled.Text`
  margin-left: 12px;
  margin-right: 18px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: 'SofiaProSemiBold';
  line-height: 25px;
`;

export const Author = styled.Text`
  margin-left: 12px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: 'SofiaProLight';
`;

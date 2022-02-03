import styled, { css } from 'styled-components/native';

export const Category = styled.View`
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.dark_purple_cat};
  height: 35px;
`;

export const Selected = styled.View`
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light_purple_cat};
  height: 35px;
`;

export const Name = styled.Text`
  margin-vertical: 9px;
  ${({ theme }) =>
    theme.device.isAndroid &&
    css`
      margin-vertical: 3px;
    `};
  font-family: 'SofiaProSemiBold';
  font-size: 18px;
  margin-horizontal: 10px;
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
`;

import styled from 'styled-components/native';

export const Category = styled.View`
  margin-right: 10px;
  border-radius: 10px;
  background-color: #593c71;
  height: 30px;
  justify-content: center;
`;

export const Selected = styled.View`
  margin-right: 10px;
  border-radius: 10px;
  background-color: #b77ac4;
  height: 30px;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-horizontal: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

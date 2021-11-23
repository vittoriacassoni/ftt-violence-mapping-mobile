import styled from 'styled-components/native';
import constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;

  padding-top: ${constants.statusBarHeight + 16}px;
`;

export const Title = styled.Text`
  padding: 0 16px;

  font-size: 24px;
  color: #2c2c2c;
  font-weight: bold;
`;

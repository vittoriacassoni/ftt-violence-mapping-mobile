import styled from 'styled-components/native'
import constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  background-color: #F9F9F9;
  padding: 0 16px;
  padding-top: ${constants.statusBarHeight + 16 }px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #2C2C2C;
  font-weight: bold;
`;

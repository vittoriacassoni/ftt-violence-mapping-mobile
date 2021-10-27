import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  padding: 0 24px;
  height: 50px;
  background-color: #101E3A;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`

export const Label = styled.Text`
  font-size: 16px;
  color: #FFF;
`

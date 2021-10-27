import styled, { css }  from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

interface SelectReportProps {
  isSelected: boolean;
}

export const Container = styled.View`

`
export const SelectReport = styled(TouchableOpacity)<SelectReportProps>`
  padding: 0 24px;
  height: 40px;
  background-color: #EEEEEE;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  ${(props) => props.isSelected && css`
     background-color: #213C73;
  `}
`

export const Label = styled.Text<SelectReportProps>`
  font-size: 16px;
  color: #2C2C2C;
  
  ${(props) => props.isSelected && css`
    color: #FFFFFF;
  `}
`

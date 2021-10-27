import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import { Container, Label, SelectReport } from './styles';
import { SelectReportEnum } from '../../../../shared/Enums/SelectReportEnum';

interface Props {
  containerStyle?: ViewStyle;
}

export default function SelectReportCategory({ containerStyle }: Props) {
  const [selectedOption, setSelectedOption] = useState<SelectReportEnum>(
    SelectReportEnum.Default
  );

  return (
    <Container style={containerStyle}>
      <SelectReport
        onPress={() => setSelectedOption(SelectReportEnum.NewReport)}
        isSelected={selectedOption === SelectReportEnum.NewReport}
        activeOpacity={0.9}
      >
        <Label isSelected={selectedOption === SelectReportEnum.NewReport}>
          Reportar ocorrido recente
        </Label>
      </SelectReport>

      <SelectReport
        onPress={() => setSelectedOption(SelectReportEnum.OldReport)}
        isSelected={selectedOption === SelectReportEnum.OldReport}
        activeOpacity={0.9}
      >
        <Label isSelected={selectedOption === SelectReportEnum.OldReport}>
          Reportar ocorrido antigo
        </Label>
      </SelectReport>
    </Container>
  );
}

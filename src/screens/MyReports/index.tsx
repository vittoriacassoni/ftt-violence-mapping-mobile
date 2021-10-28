import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Card from "../../components/Card";
import { Container, Title } from "./styles";

export default function Reports() {
  return (
    <Container>
      <Title>Meus Reportes</Title>
      <View style = {{borderBottomColor: "#213C73", borderBottomWidth: 2,  marginBottom: 24, width: 40 }}/>
      <SafeAreaView>
        <ScrollView>
          <Card
            date="27/10/2021"
            address="Estr. dos Alvarengas, 4001 - Alvarenga, São Bernardo do Campo - SP, 09850-550"
          />

          <Card
            date="20/10/2021"
            address="Estr. dos Alvarengas, 4001 - Alvarenga, São Bernardo do Campo - SP, 09850-550"
          />

          <Card
            date="18/10/2021"
            address="Estr. dos Alvarengas, 4001 - Alvarenga, São Bernardo do Campo - SP, 09850-550"
          />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Card from "../../components/Card";
import { Container, Title } from "./styles";
import api from "../../services/api";

interface Report {
  id_user: string;
  latitude: string;
  longitude: string;
  address: string;
  cep: string;
  type: string;
  date: string;
  description: string;
}

export default function Reports() {

const [reports,setReports] = useState<Report[]>([])

useEffect(() => {
  api.get("/reports").then(response => {
    setReports(response.data);
  })
},[])

  return (
    <Container>
      <Title>Meus Reportes</Title>
      <View style = {{borderBottomColor: "#213C73", borderBottomWidth: 2,  marginBottom: 24, width: 40 }}/>
      <SafeAreaView>
        <ScrollView>
          {reports.map((report)=>{
            return <Card 
            date= {report.date}
            address={report.address}
          />
          })}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
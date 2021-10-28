import React, { useState, useEffect } from "react";
import { Alert, Text } from "react-native";
import MapView from "react-native-maps";
import { Container } from "./styles";
import Modal from "../../components/Modal";
import SelectReportCategory from "./ModalContent/SelectReportCategory";
import ReportForm from "./ModalContent/ReportForm";
import * as Location from "expo-location";
import api from "../../services/api";

import mapStyle from "../../shared/Maps/styles.json";

export default function Main() {
  const [region, setRegion] = useState({
    latitude: -23.6457705,
    longitude: -46.5573336,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [modalIndex, setModalIndex] = useState(0);

  function saveReport () {
    api
      .post("report", {
        id_user: 2,
        latitude: -23.6430259,
        longitude: -46.5523647,
        address: "R. Marina, 1399 - Campestre, Santo André - SP",
        cep: "09070-510",
        type: 1,
        date: "2021-10-20",
        description: "Fui roubada",
      })
      .then(() => console.log("deu bom!"))
      .catch(() => console.log("deu erro!"));
  };

  const getCurrentLocation = async () => {
    const locationPermission = await requestLocationPermission();

    if (!locationPermission) {
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    setRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0422,
      longitudeDelta: 0.0221,
    });
  };

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Erro",
        "Você precisa aceitar as permissões de localização para utilizar o App."
      );
      return false;
    }
    return true;
  };

  function fillTitle() {
    switch (modalIndex) {
      case 0:
      case 1:
        return "Novo Reporte";
      case 2:
        return "Sucesso";
      default:
        return "";
    }
  }

  function fillSubtitle() {
    switch (modalIndex) {
      case 0:
        return "Você deseja reportar um ocorrido recente ou antigo?";
      case 1:
        return "Que triste que passou por essa situação, mas estamos aqui para ajudar.Nos conte o que aconteceu, quando e onde.";
      case 2:
        saveReport();
        return "Recebemos seu reporte com sucesso, esperamos que isso não aconteça de novo!Outras usuárias por perto receberão notificação do ocorrido, obrigado pela colaboração.";
      default:
        return "";
    }
  }

  return (
    <Container>
      <Modal
        visible={true}
        title={fillTitle()}
        subtitle={fillSubtitle()}
        buttonText="Próximo"
        buttonAction={() => setModalIndex((current) => current + 1)}
      >
        {modalIndex === 0 && <SelectReportCategory />}
        {modalIndex === 1 && <ReportForm containerStyle={{ marginTop: 20 }} />}
      </Modal>
      <MapView
        region={region}
        provider="google"
        customMapStyle={mapStyle}
        style={{ flex: 1 }}
        showsUserLocation
        scrollEnabled={true}
        zoomTapEnabled={false}
        maxZoomLevel={16}
        minZoomLevel={8}
      ></MapView>
    </Container>
  );
}

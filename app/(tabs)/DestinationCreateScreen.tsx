import React, { useState } from "react";
import { Text, Button, Image, TextInput, StyleSheet, ScrollView } from "react-native";
import { NewDestination, Destination } from "../constants/interfaces";
import BackendCaller from "../auxiliar-classes/BackendCaller";
import { useFlag } from "../components/Global/ReloadFlagContext";
import { useRouter } from "expo-router";
import EditableForm from "../components/Global/EditableForm";


const DestinationCreateScreen = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [destination, setDestination] = useState<NewDestination | null>(null);

  const formSubmitHandler = (destinationData: NewDestination) => {
    setDestination(destinationData);
  };
  
  const router = useRouter();

  const { reload_flag, setFlag } = useFlag();

  const handleSubmitToBackend = async () => {

    if (!destination) {
      setError("No destination data available");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await BackendCaller.createSingle(destination);
      
      if (response) {
        const { statusCode, data } = response;
        if (statusCode === 201) {

          setFlag(true);
          router.back();
        
        } else {
          setError("Error al crear el destination.");
        }
      } else {
        setError("No se recibió respuesta de la API.");
      }
    } catch (err) {
      setError("Ha ocurrido un error.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create a New Destiation</Text>

      <EditableForm formSubmitFunction={formSubmitHandler}/>

      <Button title="Create Destination" onPress={handleSubmitToBackend} disabled={loading} />
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
  },
});

export default DestinationCreateScreen;

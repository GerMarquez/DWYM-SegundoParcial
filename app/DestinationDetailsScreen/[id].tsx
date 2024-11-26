import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, ActivityIndicator, Image, ScrollView, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ApiResponse_DestinationDetail, NewDestination, Destination } from '@/app/constants/interfaces';
import BackendCaller from '@/app/auxiliar-classes/BackendCaller';
import { useFlag } from '../components/Global/ReloadFlagContext';
import EditableForm from '../components/Global/EditableForm';
import DropDownSelector from '../components/Global/DropDownSelector';

const DestinationDetailsScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [destination, setDestination] = useState<Destination>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVisibility, setModalvisibility] = useState(false);
  const [editedDestination, setEditedDestination] = useState<NewDestination>();

  const { reload_flag, setFlag } = useFlag();

  const router = useRouter();

  const formSubmitHandler = (destinationData: NewDestination) => {
    setEditedDestination(destinationData);
  };

  const fetchSingleDestination = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await BackendCaller.getSingle(id);
      if (response) {
        const { statusCode, data }: ApiResponse_DestinationDetail = response;
        if (statusCode === 200) {
          setDestination(data);
        } else {
          setError("Error al obtener item.");
        }
      } else {
        setError("No se recibió respuesta de la API.");
      }
    } catch (err) {
      setError("Ha ocurrido un error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleDestination();
  }, []);

  const handleEditButton = () => {
    toggleModal();
  };

  const handleSaveEdit = async () => {
    setLoading(true);
    setError(null);
    console.log("entra a borrado");

    try {
      const response = await BackendCaller.editSingle(destination?.id, editedDestination);
      console.log("edit llamado");
      if (response) {
        console.log("response status code = " + response.statusCode);
        const { statusCode, data } = response;
        if (statusCode === 200) {
          
          setDestination({
            ...editedDestination,
            id: destination?.id || '0', 
            name: editedDestination?.name || 'error', 
            description: editedDestination?.description || 'error', 
            difficulty: editedDestination?.difficulty || 'easy',
            isFavorite: editedDestination?.isFavorite || false
          });
          setFlag(true);
          toggleModal();
        
        } else {
          setError("Error al borrar el item.");
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

  const toggleModal = () => {
    setModalvisibility(!modalVisibility);
  };

  const handleSubmitDelete = async () => {
    setLoading(true);
    setError(null);
    console.log("entra a borrado");

    try {
      const response = await BackendCaller.deleteSingle(destination?.id);
      console.log("borrado llamado");
      if (response) {
        console.log("response status code = " + response.statusCode);
        const { statusCode, data } = response;
        if (statusCode === 200) {

          setFlag(true);
          router.back();
        
        } else {
          setError("Error al borrar el item.");
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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {destination && (
        <>
          <Text style={styles.name}>{destination.name}</Text>
          <Text style={styles.description}>{destination.description}</Text>
          <Text style={styles.difficulty} >{destination.difficulty}</Text>
          <Text style={styles.favorite}>{destination.isFavorite ? "Favorited" : "Not Favorited"} </Text>
        </>
      )}
      <View style={styles.buttonsContainer}>
        <Button title="Editar" onPress={handleEditButton} />
        <Button title="Borrar" onPress={handleSubmitDelete} color="red" />
      </View>
      <Modal visible={modalVisibility}>
        <ScrollView>
          <EditableForm formSubmitFunction={formSubmitHandler} initDestinationData={destination}/>
          <Button title="Save Changes" onPress={handleSaveEdit} />
          <Button title="Cancel" onPress={toggleModal} color="gray" />
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  difficulty: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  favorite: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  destinationImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  buttonsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DestinationDetailsScreen;

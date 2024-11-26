import { View, Text, Image, Dimensions, StyleSheet, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Destination, ApiResponse_DestiantionList } from "@/app/constants/interfaces";
import BackendCaller from "@/app/auxiliar-classes/BackendCaller";
import React, { useState, useEffect } from "react";
import routes from "@/app/constants/routes";
import { useFlag } from "@/app/components/Global/ReloadFlagContext";



const DestinationListContainer: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { reload_flag, setFlag } = useFlag();

  const fetchDestinations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await BackendCaller.getList();
      if (response) {
        const { statusCode, data }: ApiResponse_DestiantionList = response;
        if (statusCode === 200) {
          const sorted = sortDestinations(data);
          setDestinations(sorted);
        } else {
          setError("Error al obtener lista.");
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
    fetchDestinations();
  }, []);

  useEffect(() => {
    fetchDestinations();
    if (reload_flag) {
      setFlag(false);
    }
  }, [reload_flag]);

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

  const sortDestinations = (destinations: any[]) => {
    const fav = destinations.filter(dest => dest.isFavorite);
    const notFav = destinations.filter(dest => !dest.isFavorite);
    const sortedFavorites = fav.sort((a, b) => a.name.localeCompare(b.name));
    const sortedNonFavorites = notFav.sort((a, b) => a.name.localeCompare(b.name));
    return [...sortedFavorites, ...sortedNonFavorites];
  };

  return (
    <FlatList
      data={destinations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Link href={routes.DETAILS_ROUTE.replace('[id]', item.id)} style={styles.nameLink}>
            <Text style={styles.name}>{item.name}</Text>
          </Link>

          <Text
            style={
              item.difficulty === 'easy' ? styles.diffEasy : 
              item.difficulty === 'medium' ? styles.diffMedium : 
              styles.diffHard
            }
          >{item.difficulty}</Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  link: {
    marginRight: 15,
  },
  nameLink: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  diffEasy: {
    color: 'green',
  },
  diffMedium: {
    color: 'yellow',
  },
  diffHard: {
    color: 'purple',
  },
});

export default DestinationListContainer;

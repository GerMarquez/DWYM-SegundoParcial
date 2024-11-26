import React, { useState, useEffect } from 'react';
import * as ImagePicker from "expo-image-picker";
import { View, TextInput, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NewDestination } from '@/app/constants/interfaces';
import DropDownSelector from './DropDownSelector';

interface EditableFormProps {
    formSubmitFunction: (destination: NewDestination) => void;
    initDestinationData?: NewDestination;
}

const EditableForm: React.FC<EditableFormProps> = ({ formSubmitFunction, initDestinationData }) => {
    const [destination, setDestination] = useState<NewDestination>({
      name: initDestinationData?.name || '',
      description: initDestinationData?.description || '',
      difficulty: initDestinationData?.difficulty || '',
      isFavorite: initDestinationData?.isFavorite || false
    });

    const [selectedItem, setSelectedItem] = useState<{ label: string; value: string } | null>(null);

    useEffect(() => {
        handleSubmit();  
    }, [destination]);

    const handleSubmit = () => {
        formSubmitFunction(destination);
    };

    const handleStringChange = (name: string, value: string) => {
        setDestination(prevDestination => ({
            ...prevDestination,
            [name]: value,
        }));
    };

    const handleBooleanChange = (name: string, value: boolean) => {
      setDestination(prevDestination => ({
        ...prevDestination,
        [name]: value,
    }));
    }

    const handleDropdownSelection = (item: { label: string; value: string }) => {
      handleStringChange('difficulty', item.value);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>  

          <View style={styles.inputContainer}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={destination.name}
              onChangeText={(value) => handleStringChange('name', value)}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text>Description:</Text>
            <TextInput
              style={styles.textarea}
              placeholder="Enter description"
              multiline
              value={destination.description}
              onChangeText={(value) => handleStringChange('description', value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Difficulty:</Text>
            <DropDownSelector 
              items={[
                { label: "Easy", value: "easy" }, 
                { label: "Medium", value: "medium" }, 
                { label: "Hard", value: "hard" }
              ]}
              onSelectionChange={handleDropdownSelection}
            />
          </View>

          <View> 
          <Text>Favorited?</Text> 
            <Button 
              title={destination.isFavorite ? "Yes" : "No"} 
              onPress={() => handleBooleanChange('isFavorite', !destination.isFavorite)} 
            />
          </View>

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
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "100%",
    borderRadius: 4,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "100%",
    borderRadius: 4,
    height: 100,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
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

export default EditableForm;

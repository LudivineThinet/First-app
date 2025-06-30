import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, } from 'react-native';
import { useState } from 'react';
import GestionListe from './GestionListe';

const image = {uri: 'https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg'};


export default function App() {
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon", 
  ]);
  const [text, onChangeText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    setGoals([...goals, text]);
    onChangeText('');
  };

  const handleDelete = (indexToDelete) => {
    setGoals(goals.filter((_, index) => index !== indexToDelete));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Sample Goals</Text>

    
      <GestionListe goals={goals} handleDelete={handleDelete} />

      <StatusBar style="auto" />

      <View style={styles.Ajouter}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ajoutez un objectif"
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  
  input: {
  backgroundColor: '#eadbec',
  borderColor: '#ccc',
  borderWidth: 3,
  padding: 8,
  borderRadius: 2,
},
Ajouter: {
  flexDirection: 'row',  
  marginBottom: 14,
},
image: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 60,
    paddingHorizontal: 20,
  },



});



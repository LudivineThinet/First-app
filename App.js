import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground,Modal } from 'react-native';
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
        
        <Pressable onPress={() => handleAdd(true)}>
                <Text style={styles.add}>OK</Text>
              </Pressable>
      </View>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
    color: '#4a2e4e',
  },
  input: {
    flex: 1,
    backgroundColor: '#eadbec',
    borderColor: '#4a2e4e',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontSize: 16,
    marginRight: 8,
  },
add: {
  backgroundColor: '#4a2e4e',
  color: 'white',
  padding: 10,
  borderRadius: 5,
  marginLeft: 10,
},
Ajouter: {
  flexDirection: 'row',  
  marginBottom: 2,
  width: 300,
},
image: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 60,
    paddingHorizontal: 20,
  },



});



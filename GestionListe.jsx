import { View, FlatList,StyleSheet } from 'react-native';
import GestionItem from './GestionItem';

const GestionListe = ({ goals, handleDelete, }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <GestionItem  goals={item} handleDelete={handleDelete} index={index} />
        )}
 
      />
    </View>
  );
}

const styles = StyleSheet.create({

container : {
  height: '80%',

}


})





export default GestionListe;

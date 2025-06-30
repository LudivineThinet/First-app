import { View, FlatList, } from 'react-native';
import GestionItem from './GestionItem';

const GestionListe = ({ goals, handleDelete, }) => {
  return (
    <View>
      <FlatList
        data={goals}
        renderItem={({item, index}) => (
          <GestionItem  goals={item} handleDelete={handleDelete} index={index} />
        )}
 
      />
    </View>
  );
}






export default GestionListe;

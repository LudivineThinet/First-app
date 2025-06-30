import { View, Text, Pressable,StyleSheet } from 'react-native';
      
          
 const GestionItem = ({goals, handleDelete, index }) => (     
        <View  style={styles.itemRow}>
          <Text style={styles.item}>{goals}</Text>
          <Pressable onPress={() => handleDelete(index)}>
            <Text style={styles.delete}>x</Text>
          </Pressable>
        </View>

 )


const styles = StyleSheet.create({
item: {
    fontSize: 16,
    marginBottom: 15,
  },
delete: {
  fontSize: 18,
  marginLeft: 10,
  color: 'blue',
},
itemRow: {
  flexDirection: 'row',            
  alignItems: 'center',            
  justifyContent: 'space-between', 
  marginBottom: 10,                
},

});

export default GestionItem;


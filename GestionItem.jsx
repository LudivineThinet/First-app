import { View, Text, Pressable, StyleSheet, Modal, Alert } from 'react-native';
import { useState } from 'react';

const GestionItem = ({ goals, handleDelete, index }) => {   
  const [modalVisible, setModalVisible] = useState(false);  

  return (
    <View style={styles.itemRow}>
      <Text style={styles.item}>{goals}</Text>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.delete}>x</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Voulez-vous vraiment supprimer cet objectif ?</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonDelete]}
              onPress={() => {
                handleDelete(index);
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Supprimer</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    color: '#333',
    flex: 1,               
    paddingVertical: 12,   
    paddingLeft: 10,
  },
  itemRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 12,
  backgroundColor: 'rgba(255, 255, 255, 0.36)', 
  borderRadius: 8,
  padding: 3,
},              
  delete:{
  backgroundColor: '#4a2e4e',
  color: 'white',
  padding: 10,
  borderRadius: 5,
  marginLeft: 10,
},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // fond semi-transparent
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: 120,
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonDelete: {
    backgroundColor: '#FF3B30',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default GestionItem;

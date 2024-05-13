import React from 'react';
import { Modal, Text, View, Image, Button,} from 'react-native';
import estilo from './style';

const CustomModal = ({ modalVisible, closeModal, selectedItem }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={estilo.modalContainer}>
        <View style={estilo.innerModalContainer}>
          <Image style={estilo.imagemModal} source={{ uri: selectedItem?.imagem }} />
          <Text style={estilo.titulo}>{selectedItem?.titulo}</Text>
          <Text style={estilo.descricao}>{selectedItem?.descricao}</Text>
          <Text style={estilo.preco}>R$ {selectedItem?.preco}</Text>
          <View style={estilo.buttonsContainer}>
            <Button title="Fechar" onPress={closeModal} />
            <Button title="Adicionar ao Carrinho" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;

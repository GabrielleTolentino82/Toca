import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Modal, Dimensions, Button } from "react-native";
import Header from "./componentes/header";
import Card from "./componentes/card";
import DATA from './data';
import Footer from "./componentes/footer";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }


  return (
    <View style={estilo.container}>

     <Header />
     <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => closeModal()}
     >
       <View style={estilo.modalContainer}>
         <View style={estilo.innerModalContainer}>
           <Image style={estilo.imagemModal} source={{uri: selectedItem?.imagem}}/>
           <Text style={estilo.titulo}>{selectedItem?.titulo}</Text>
           <Text style={estilo.descricao}>{selectedItem?.descricao}</Text>
           <Text style={estilo.preco}>{selectedItem?.preco}</Text>
           <View style={estilo.buttonsContainer}>
             <Button title="Fechar" onPress={() => closeModal()} />
             <Button title="Adicionar ao Carrinho"/>
           </View>
         </View>
       </View>
     </Modal>
     <View style = {{flex: 1, width: '100%'}}>

     <View style={estilo.topLine}></View>
     <View style={estilo.categoriaContainer}> 
       <Text style={estilo.tituloCategoria}>Comidas</Text>
       </View>
       <FlatList
         data={DATA.comidas}
         keyExtractor={(item) => item.id}
         numColumns={2}
         renderItem={({ item }) => (
           <TouchableOpacity style={{margin: 20, marginLeft: '6%'}} onPress={() => openModal(item)}>
             <Card 
               id={item.id}
               imagem={item.imagem}
               titulo={item.titulo}
               descricao={item.descricao}
               preco={item.preco}
             /> 
           </TouchableOpacity>
         )}
       />
       <View style={estilo.topLine}></View> 
       <View style={estilo.categoriaContainer}>
       <Text style={estilo.tituloCategoria}>Bebidas</Text>
       </View>
       <FlatList
         data={DATA.bebidas}
         keyExtractor={(item) => item.id}
         numColumns={2}
         renderItem={({ item }) => (
           <TouchableOpacity style={{margin: 20, marginLeft: '6%'}} onPress={() => openModal(item)}>
             <Card 
               id={item.id}
               imagem={item.imagem}
               titulo={item.titulo}
               descricao={item.descricao}
               preco={item.preco}
             /> 
           </TouchableOpacity>
         )}
       />
     </View>
     
     <Footer />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'pink',
  },

  categoriaContainer: {
    marginHorizontal: 30, 
    marginTop: 10, 
    backgroundColor: '#333',
    width: '8%',
    borderRadius: 10,
    border: '4px solid white',
  },

  tituloCategoria: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    
  },

  topLine: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },

  innerModalContainer: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.8, // 80% da largura da tela
  },

  imagemModal: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },

  descricao: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },

  titulo: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
  preco: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  }
});

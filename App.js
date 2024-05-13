import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity, } from "react-native";
import Header from "./componentes/header";
import Card from "./componentes/card";
import DATA from './data';
import Footer from "./componentes/footer";
import CustomModal from "./componentes/modal";

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
     <CustomModal modalVisible={modalVisible} closeModal={closeModal} selectedItem={selectedItem}/>
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

  
});

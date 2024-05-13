import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import estilo from "./style";
import { Entypo} from '@expo/vector-icons';
import NavBar from "../navbar";


export default function Header() {
    return(
     <>
     <NavBar />
    <View style={estilo.header}> 

          <Image style={estilo.imagem} source={{uri: 'https://files.menudino.com/cardapios/59084/logo.png'}}/>
    <Text style={estilo.titulo}> TOCA DO MAM</Text>
      <View style={{display: 'inline-block'}}>
         <Entypo name="location-pin" size={24} color="white" />
        <Text style={estilo.subtitulo}> Avenida Naylor de Oliveira, 1714, São Paulo, SP</Text>
      </View>
      <View style={{ marginTop: 5,display: 'inline-block'}}>
      <Entypo name="clock" size={24} color="white" />
        <Text style={estilo.subtitulo}> 19:00 às 23:59</Text>
      </View>
   </View>
   
    </>
    )
}


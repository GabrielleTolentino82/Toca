import { Text, StyleSheet, View, Image } from "react-native";

const estilo = StyleSheet.create({

    header:{
         backgroundColor: 'black',
         width: '100%',
         height: 'auto',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         
    },

    titulo: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 20,
    },
    subtitulo: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 15,
    },

    imagem: {
      marginTop: 10,
      width: 200,
      height: 200,
      border: '4px solid white',
    },
  })
;

export default estilo;
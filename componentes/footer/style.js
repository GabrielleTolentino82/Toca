import { Text, StyleSheet, View, Image } from "react-native";

const estilo = StyleSheet.create({
    footerContainer: {
        marginTop: 60,
        backgroundColor: 'black',
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
      },
      logoContainer: {
        alignItems: 'center',
      },

      topLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
      },

      footerSectionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribui os itens uniformemente ao longo do eixo principal (horizontal)
        flexWrap: 'wrap',
      },
      footerSection: {
        width: '25%',
        alignItems: 'center',
      },
      footerSectionTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'left',
      },
      footerLink: {
        color: 'white',
        marginBottom: 5,
        fontSize: 25,
        textAlign: 'left',
      },
      imagem: {
        width: 150,
        height: 150,
        border: '4px solid white',
        marginTop: 10,
      },
    });
export default estilo;
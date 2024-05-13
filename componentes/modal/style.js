import { StyleSheet, Dimensions } from "react-native";

const estilo = StyleSheet.create({
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
        width: Dimensions.get('window').width * 0.8, 
      },
    
      imagemModal: {
        border: '4px solid white',
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
      },
    
      descricao: {
        color: 'white',
        fontSize: 18,
        marginVertical: 10,
      },
    
      titulo: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 30,
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

export default estilo;

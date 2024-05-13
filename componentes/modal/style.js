import { StyleSheet, Dimensions } from "react-native";

const estilo = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    
      innerModalContainer: {
        backdropFilter: "blur(19px)",
        backgroundColor: 'trasnparent',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        border:"2px solid white",
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.6, 
      },
    
      imagemModal: {
        width: 300,
        height: 300,
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
        fontSize: 35,
        marginVertical: 10,
      },
      preco: {
        color: 'white',
        fontSize: 25,
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

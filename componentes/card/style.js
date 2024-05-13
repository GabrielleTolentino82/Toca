import{StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
   
  container: {
    marginTop: 20,
    backgroundColor: '#333',
    width: '100%',
    borderRadius: 30,
    border: '4px solid white',
    height: 400,
    flexDirection: 'column',
    padding: 10,
  },
  
  card: {
    marginTop: 80,
    marginBottom: 100,
    justifyContent:'space-between',
    flexDirection: 'row',
  },


      texto: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        width: 500,
        marginLeft: 1,
      },

      imagem: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginRight: 10,
        border: '4px solid white',
      },
      titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
      },
})

export default estilo;

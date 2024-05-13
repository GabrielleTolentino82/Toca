import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  navegacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '98%',
    marginTop: 10,
  },
  leftIcons: {
    flexDirection: 'row',
    width: '98%',
    alignItems: 'flex-start',
  },

  barra: {
    width:180, 
    height: 30, 
    marginLeft: 10,
    color: 'white',
    marginTop: 5, 
    borderWidth: 2, 
    borderColor: 'white', 
    outlineWidth: 0,
    borderRadius: 5,
  },
});

export default estilo;

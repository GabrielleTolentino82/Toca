import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import estilo from "./style";

export default function NavBar() {
  return (
    <View style={estilo.navegacao}>
      <View style={estilo.leftIcons}>
        <TouchableOpacity>
          <Entypo name="menu" size={45} color="white" style={{ marginRight: 20 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" size={35} color="white" style={{ marginTop: 4 }}/>
        </TouchableOpacity>
        <TextInput
            style={estilo.barra}  placeholder="Pesquisar" placeholderTextColor="white"
          />
      </View>

      <TouchableOpacity>
        <FontAwesome5 name="shopping-cart" size={35} color="white" style={{ marginTop: 5 }}/>
      </TouchableOpacity>
    </View>
  );
}

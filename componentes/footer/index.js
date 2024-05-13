import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import estilo from "./style";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Footer() {
    return(
        <>
        <View style={estilo.footerContainer}>
        <View style={estilo.topLine}></View> 
            <View style={estilo.logoContainer}>
                <Image style={estilo.imagem} source={{uri: 'https://files.menudino.com/cardapios/59084/logo.png'}}/>
            </View>
            <View style={estilo.footerSectionsContainer}>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Ajuda</Text>
                    <TouchableOpacity>
                    <Text style={estilo.footerLink}>Perguntas frequentes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={estilo.footerLink}>Política de privacidade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={estilo.footerLink}>Termos de serviço</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Pedidos</Text>
                    <TouchableOpacity>
                    <Text style={estilo.footerLink}>Cardápio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={estilo.footerLink}>Fazer pedido online</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Contato</Text>
                    <Text style={estilo.footerLink}>Telefone: (11) 1234-5678</Text>
                    <Text style={estilo.footerLink}>Email: contato@tocadomam.com</Text>
                </View>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Siga-nos</Text>
                    <TouchableOpacity>
                    <AntDesign name="instagram" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Entypo name="facebook" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <AntDesign name="twitter" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
    );
}
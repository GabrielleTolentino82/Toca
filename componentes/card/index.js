import {Text, View, Image} from 'react-native'
import estilo from './style';

export default function Card({id,preco,titulo,imagem,descricao }){
    return(
        <View style={estilo.container}>
            <Text style = {{fontSize: 25, textAlign: 'right', color: 'white', fontWeight: 'bold'}}>{id}.</Text>
        <View style={estilo.card}>
            <View style={{ marginLeft:15}}>
                  <Text style={estilo.titulo}>{titulo}</Text>
                <Text style={estilo.texto}>{descricao}</Text>
                <Text style={{fontSize: 35, color: 'white', fontWeight: 'bold'}}>R$ {preco}</Text>
            </View>
            <Image style={estilo.imagem} source={{uri: imagem}}/>

        </View>
        </View>
    )
}
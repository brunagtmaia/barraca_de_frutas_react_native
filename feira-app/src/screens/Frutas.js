import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
//font
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function Frutas({ navigation }) {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    //se a font não for carregada vai carregar a fote padrão
    const font = fontsLoaded ? 'Poppins_400Regular' : null;

    //usestates
    const [opcoesVisiveis, setOpcoesVisiveis] = useState(false);
    const [text, onChangeText] = React.useState('');


    //vamos usar o use state para exibir quando mudar a valor, ou seja, o valor unicial é falso
    const abrirOpcoes = () =>{
        setOpcoesVisiveis(!opcoesVisiveis);
    }
    return (
        
        <SafeAreaView style={styles.frutasTela}>
            <View style={styles.fruta}>
                <StatusBar style="auto" />
                <Image
                    source={require('../assets/images/Icon_lupa.png')}
                    style={{padding:0, marginRight:10, marginLeft:10}}
                />
                <TextInput style={[styles.frutasTextoPesquisar, {fontFamily: font}]} onChangeText={onChangeText} placeholder="Pesquisar fruta" value={text}>
                </TextInput>
            </View>

            <TouchableOpacity style={styles.frutaButtonAdd} onPress={abrirOpcoes}>
                <Image
                    source={require('../assets/images/icon_mais_branco.png')}
                    style={{padding:0, marginRight:10, marginLeft:10, width:25, height:25}}
                />
            </TouchableOpacity>

            {/* opções */}
            {opcoesVisiveis && (
                <View style={styles.menuFrutasOpcoes}>
                <TouchableOpacity style={styles.frutaopcao} onPress={() => navigation.navigate('editarFruta')}>
                    <Image
                    source={require('../assets/images/icon_editar_fruta.png')}
                    style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 30, height: 30 }}
                    />
                    <Text style={{ fontFamily: font, fontSize: 16 }}>Editar fruta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.frutaopcao}>
                    <Image
                    source={require('../assets/images/icon_excluir_fruta.png')}
                    style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 30, height: 30 }}
                    />
                    <Text style={{ fontFamily: font, fontSize: 16 }}>Excluir fruta</Text>
                </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}

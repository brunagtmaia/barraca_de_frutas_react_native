import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity , Image, Text, View } from 'react-native';
//font
import { useFonts, Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins';
// style
import { styles } from '../global/style';



export default function Home({navigation}) {
    const [fontsLoaded] = useFonts({
        Poppins_300Light, Poppins_400Regular,
    });

    //se a font não for carregada vai carregar a fote padrão
    const font = fontsLoaded ? 'Poppins_300Light' : null;
    const font2 = fontsLoaded ? 'Poppins_400Regular' : null;

    return (
        <View style={styles.homeTela}>
            
            <Text style={[styles.homeText, {fontFamily: font}]}>Cadastre sua primeira fruta:</Text>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('cadastrarFrutas')}>
                <Image 
                    source={require('../assets/images/icon_mais_branco.png')} 
                    style={{width:20, height:20, padding:0, marginRight:10}}
                />
                <Text style={[styles.homeButtonText, {fontFamily: font2}]}>
                    Cadastre sua fruta
                </Text>

            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

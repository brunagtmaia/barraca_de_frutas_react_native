import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
//font
import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function Frutas() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        
        <SafeAreaView style={styles.frutasTela}>
            <View style={styles.fruta}>
                <StatusBar style="auto" />
                <Image
                    source={require('../assets/images/Icon_lupa.png')}
                    style={{padding:0, marginRight:10, marginLeft:10}}
                />
                <Text style={styles.frutasTextoPesquisar}>Pesquisar fruta</Text>
            </View>

            <TouchableOpacity style={styles.frutaButtonAdd}>
                <Image
                    source={require('../assets/images/icon_mais_branco.png')}
                    style={{padding:0, marginRight:10, marginLeft:10, width:25, height:25}}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

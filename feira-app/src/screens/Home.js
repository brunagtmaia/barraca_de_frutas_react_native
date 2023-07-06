import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity , Image, Text, View } from 'react-native';
//font
import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function Home() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.homeTela}>
            
            <Text style={styles.homeText}>Cadastre sua primeira fruta:</Text>
            <TouchableOpacity style={styles.homeButton}>
                <Image 
                    source={require('../assets/images/icon_mais_branco.png')} 
                    style={{width:30, height:30, padding:0, marginLeft:10}}
                />
                <Text style={styles.homeButtonText}>
                    Cadastre sua fruta
                </Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

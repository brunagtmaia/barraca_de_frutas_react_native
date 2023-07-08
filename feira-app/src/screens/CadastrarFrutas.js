import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';

//font
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function CadastrarFrutas() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,Poppins_500Medium,Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return(
        <SafeAreaView style={styles.CadastrarFrutasTela}>
            <StatusBar style="auto" />
            <View style={styles.cadastrarFrutaConteiner}>
                <Text style={styles.CadastrarFrutasTitle}>Cadastrar Fruta</Text>
                <TouchableOpacity style={styles.cadastrarFrutaButtonX}>
                    <Image
                        source={require('../assets/images/icon_x.png')}
                        style={{padding:0, marginRight:10, marginLeft:10, width:20, height:20}}
                    />
                </TouchableOpacity>
            </View>
            

            <View style={styles.formCadastroFruta}>
                <View style={styles.itemCadastroFruta}>
                    <StatusBar style="auto" />
                    <Image
                        source={require('../assets/images/icon_nome_fruta.png')}
                        style={{padding:0, marginRight:16, width: 30, height: 30}}
                    />
                    <Text style={styles.itemCadastroFrutaText}>Nome da fruta</Text>
                </View>

                <View style={styles.itemCadastroFruta}>
                    <StatusBar style="auto" />
                    <Image
                        source={require('../assets/images/icon_cash_fruta.png')}
                        style={{padding:0, marginRight:16, width: 30, height: 30}}
                    />
                    <Text style={styles.itemCadastroFrutaText}>Preço do Kilo</Text>
                </View>

                <View style={styles.itemCadastroFruta}>
                    <StatusBar style="auto" />
                    <Image
                        source={require('../assets/images/icon_quantidade_fruta.png')}
                        style={{padding:0, marginRight:16, width: 30, height: 30}}
                    />
                    <Text style={styles.itemCadastroFrutaText}>Quantidade no estoque</Text>
                </View>
            </View>


            <TouchableOpacity style={styles.cadastrarFrutaButton}>
                <Text style={styles.cadastrarFrutaButtonText}>Cadastra fruta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';

//font
import { useFonts, Poppins_300Light, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function CadastroSucesso({navigation}) {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return null;
    }
    return(
        <View style={styles.cadastroSucessoTela}>
            <TouchableOpacity style={styles.        cadastroSucessoButtonX}>
                    <Image
                        source={require('../assets/images/icon_x.png')}
                        style={{padding:0, marginRight:10, marginLeft:10, width:20, height:20}}
                    />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/cadastro_sucesso.png')}
                style={{ width: 200, height:250 }}
            />
            <View style={styles.cadastroSucessoConfirm}>
                <Text style={styles.cadastroSucessoTitle}>Fruta cadastrada</Text>
                <Text style={styles.cadastroSucessoTxt}>Você cadastrou a [nome da fruta] com sucesso.</Text>
            </View>
            
            <TouchableOpacity style={styles.cadastrarFrutaButton}>
                <Text style={styles.cadastrarFrutaButtonText}>Voltar ao início</Text>
            </TouchableOpacity>
        </View>
    )
    
}
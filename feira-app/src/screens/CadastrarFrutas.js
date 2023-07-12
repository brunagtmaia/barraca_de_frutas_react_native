import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView, TextInput } from 'react-native';

//font
import { useFonts, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function CadastrarFrutas({navigation}) {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,Poppins_500Medium,
    });

    //se a font não for carregada vai carregar a fote padrão
    const font = fontsLoaded ? 'Poppins_400Regular' : null;
    const font500 = fontsLoaded ? 'Poppins_500Medium' : null;

    //usestates
    const [nomeFruta, setNomeFruta] = React.useState('');
    const [precoKilo, setPrecoKilo] = React.useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = React.useState('');

    return(
        <SafeAreaView style={styles.CadastrarFrutasTela}>
            <StatusBar style="auto" />
            <View style={styles.cadastrarFrutaConteiner}>
                <Text style={[styles.CadastrarFrutasTitle, {fontFamily:font500}]}>Cadastrar Fruta</Text>
                <TouchableOpacity style={styles.cadastrarFrutaButtonX} onPress={() => navigation.navigate('home')}>
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
                    <TextInput style={[styles.itemCadastroFrutaText, {fontFamily: font}]} onChangeText={setNomeFruta} placeholder="Nome da fruta" value={nomeFruta}></TextInput>
                </View>

                <View style={styles.itemCadastroFruta}>
                    <StatusBar style="auto" />
                    <Image
                        source={require('../assets/images/icon_cash_fruta.png')}
                        style={{padding:0, marginRight:16, width: 30, height: 30}}
                    />
                    <TextInput style={[styles.itemCadastroFrutaText, {fontFamily: font}]} onChangeText={setPrecoKilo} placeholder="Preço do kilo" value={precoKilo}></TextInput>
                </View>

                <View style={styles.itemCadastroFruta}>
                    <StatusBar style="auto" />
                    <Image
                        source={require('../assets/images/icon_quantidade_fruta.png')}
                        style={{padding:0, marginRight:16, width: 30, height: 30}}
                    />
                    <TextInput style={[styles.itemCadastroFrutaText, {fontFamily: font}]} onChangeText={setQuantidadeEstoque} placeholder="Quantidade no estoque" value={quantidadeEstoque}></TextInput>
                </View>
            </View>


            <TouchableOpacity style={styles.cadastrarFrutaButton} onPress={() => navigation.navigate('cadastroSucesso')}>
                <Text style={styles.cadastrarFrutaButtonText}>Cadastra fruta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
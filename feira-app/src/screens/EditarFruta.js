import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//font
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';

export default function EditarFruta({ navigation, route }) {
    const { frutaSelecionada } = route.params;

    const [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_500Medium,
    });
    //se a font não for carregada vai carregar a fonte padrão
    const font = fontsLoaded ? 'Poppins_400Regular' : null;
    const font500 = fontsLoaded ? 'Poppins_500Medium' : null;

    // usestates
    const [novoNomeFruta, setNovoNomeFruta] = React.useState(frutaSelecionada);
    const [precoKilo, setPrecoKilo] = React.useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = React.useState('');

    const atualizarFruta = async () => {
        try {
            const novosDados = {
                nome: novoNomeFruta,
                precoKilo: precoKilo,
                quantidadeEstoque: quantidadeEstoque,
            };

            // Verificar se a fruta já foi cadastrada
            const frutaExistente = await AsyncStorage.getItem(`${frutaSelecionada}`);
            if (frutaExistente === null) {
                console.log('A fruta não existe no cadastro.');
                return;
            }

            // Converter os dados da fruta para objeto
            const frutaAtual = JSON.parse(frutaExistente);

            // Verificar se o nome da fruta foi alterado
            if (novoNomeFruta !== frutaSelecionada) {
                // Remover a fruta com o nome antigo
                await AsyncStorage.removeItem(`${frutaSelecionada}`);
            }

            // Atualizar os dados da fruta no AsyncStorage com o novo nome
            await AsyncStorage.setItem(`${novoNomeFruta}`, JSON.stringify({ ...frutaAtual, ...novosDados }));

            console.log('Fruta atualizada com sucesso:', novoNomeFruta);
        } catch (error) {
            console.error('Erro ao atualizar os dados:', error);
        }
        navigation.navigate('frutas');
    };

    const fecharTeclado = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={fecharTeclado}>
            <SafeAreaView style={styles.CadastrarFrutasTela}>
                <StatusBar style="auto" />
                <View style={styles.cadastrarFrutaConteiner}>
                    <Text style={[styles.CadastrarFrutasTitle, { fontFamily: font500 }]}>Editar Fruta</Text>
                    <TouchableOpacity style={styles.cadastrarFrutaButtonX} onPress={() => navigation.navigate('frutas')}>
                        <Image
                            source={require('../assets/images/icon_x.png')}
                            style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.formCadastroFruta}>
                    <View style={styles.itemCadastroFruta}>
                        <Image
                            source={require('../assets/images/icon_nome_fruta.png')}
                            style={{ padding: 0, marginRight: 16, width: 30, height: 30 }}
                        />
                        <TextInput
                            style={[styles.itemCadastroFrutaText, { fontFamily: font }]}
                            onChangeText={setNovoNomeFruta}
                            placeholder="Novo nome da fruta"
                            value={novoNomeFruta}
                        />
                    </View>

                    <View style={styles.itemCadastroFruta}>
                        <Image
                            source={require('../assets/images/icon_cash_fruta.png')}
                            style={{ padding: 0, marginRight: 16, width: 30, height: 30 }}
                        />
                        <TextInput
                            style={[styles.itemCadastroFrutaText, { fontFamily: font }]}
                            onChangeText={setPrecoKilo}
                            placeholder="Preço do kilo"
                            value={precoKilo}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.itemCadastroFruta}>
                        <Image
                            source={require('../assets/images/icon_quantidade_fruta.png')}
                            style={{ padding: 0, marginRight: 16, width: 30, height: 30 }}
                        />
                        <TextInput
                            style={[styles.itemCadastroFrutaText, { fontFamily: font }]}
                            onChangeText={setQuantidadeEstoque}
                            placeholder="Quantidade no estoque"
                            value={quantidadeEstoque}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.cadastrarFrutaButton} onPress={atualizarFruta}>
                    <Text style={styles.cadastrarFrutaButtonText}>Atualizar fruta</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

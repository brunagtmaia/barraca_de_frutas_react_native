import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
//font
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

// style
import { styles } from '../global/style';


function excluirFruta() {
  return (
    <View style={styles.excluirFrutaTela}>
      <Text>Excluir fruta</Text>
    </View>
  );
}

export default function Frutas({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  //se a font não for carregada vai carregar a fote padrão
  const font = fontsLoaded ? 'Poppins_400Regular' : null;

  //usestates
  const [opcoesVisiveis, setOpcoesVisiveis] = useState(false);
  const [excluirFruta, setExcluirFruta] = useState(false);
  const [text, onChangeText] = useState('');
  const [frutas, setFrutas] = useState([]);
  //sempre que ocorre alguma evanto em navigate recarrega a função carregar frutas 
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarFrutas();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    carregarFrutas();
  }, []);

  const abrirOpcoes = () => {
    setOpcoesVisiveis(!opcoesVisiveis);
  };
  const excluir = () => {
    setExcluirFruta(!excluirFruta);
  };

  const carregarFrutas = async () => {
    try {
      // array que guarda todas as chaves
      const keys = await AsyncStorage.getAllKeys();
      //recupera os valores correspondentes a essas chaves
      const frutas = await AsyncStorage.multiGet(keys);
      const frutasObj = frutas.map(([key, value]) => {
        return {
          nome: key,
          ...JSON.parse(value),
        };
      });
      setFrutas(frutasObj);
    } catch (error) {
      console.error('Ops, parece que você ainda não tem nenhuma fruta cadastrada', error);
    }
  };

  const apagarTudo = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Todos os dados cadastrados foram apagados com sucesso.');
    } catch (error) {
      console.error('Erro ao apagar os dados cadastrados:', error);
    }
  };
  
  return (
    <SafeAreaView style={styles.frutasTela}>
        <View style={styles.fruta}>
            <StatusBar style="auto" />
            <Image
            source={require('../assets/images/Icon_lupa.png')}
            style={{ padding: 0, marginRight: 10, marginLeft: 10 }}
            />
            <TextInput
            style={[styles.frutasTextoPesquisar, { fontFamily: font }]}
            onChangeText={onChangeText}
            placeholder="Pesquisar fruta"
            value={text}
            />
        </View>

        {/* onde as frutas salvas na memória vão ficar */}

        {frutas.map((fruta, index) => (
            <View style={styles.frutaItem} key={index}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: font, fontSize: 16, overflow: 'hidden' }}>{fruta.nome}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../assets/images/icon_cash.png')}
                    style={{ width: 16, height: 16, marginRight: 5 }}
                />
                <Text style={{ fontFamily: font, fontSize: 14, color: '#008C21' }}>R${fruta.precoKilo}</Text>

                <Text style={{ fontFamily: font, fontSize: 14, color: '#6C7072', marginLeft: 20 }}>
                    {fruta.quantidadeEstoque} em estoque
                </Text>
                </View>
            </View>
            <TouchableOpacity onPress={abrirOpcoes}>
                <Image
                source={require('../assets/images/icon_config.png')}
                style={{ width: 25, height: 25 }}
                />
            </TouchableOpacity>
            </View>
        ))}

        <TouchableOpacity style={styles.frutaButtonAdd} onPress={() => navigation.navigate('cadastrarFrutas')}>
            <Image
            source={require('../assets/images/icon_mais_branco.png')}
            style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 25, height: 25 }}
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

                <TouchableOpacity style={styles.frutaopcao} onPress={apagarTudo}>
                    <Image
                    source={require('../assets/images/icon_excluir_fruta.png')}
                    style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 30, height: 30 }}
                    />
                    <Text style={{ fontFamily: font, fontSize: 16 }}>Excluir fruta</Text>
                </TouchableOpacity>
            </View>
        )}
        {excluirFruta && (
            <View> 
                <Text>Deu certo</Text>
            </View>
        )}

    
        
    </SafeAreaView>
  );
}

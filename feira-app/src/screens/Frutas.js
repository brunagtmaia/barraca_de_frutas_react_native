import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
// style
import { styles } from '../global/style';
//font
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Frutas({ navigation }) {
  // Carrega as fontes necessárias
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const font = fontsLoaded ? 'Poppins_400Regular' : null;

  // Estados do componente
  const [opcoesVisiveis, setOpcoesVisiveis] = useState(false); // Estado para controlar a visibilidade das opções
  const [excluirFruta, setExcluirFruta] = useState(false); // Estado para controlar a exclusão da fruta
  const [text, onChangeText] = useState(''); // Estado para armazenar o texto do campo de pesquisa
  const [frutas, setFrutas] = useState([]); // Estado para armazenar a lista de frutas
  const [frutaSelecionada, setFrutaSelecionada] = useState(null); // Estado para armazenar a fruta selecionada
  const [searchResults, setSearchResults] = useState([]); // Estado para armazenar os resultados da pesquisa

  // useEffect é usado para executar ações quando o componente é montado ou atualizado
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarFrutas();
    });

    // Retorna uma função de limpeza para executar ação quando o componente é desmontado
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    carregarFrutas();
  }, [excluirFrutaSim]);

  function abrirOpcoes(nome) {
    setOpcoesVisiveis(!opcoesVisiveis); // Alterna a visibilidade das opções
    if(frutaSelecionada !== null){
      setFrutaSelecionada(null); //primeiro "zeramos" o valor 
    }
    setFrutaSelecionada(nome); // Armazena a fruta selecionada
  }

  const excluir = () => {
    setExcluirFruta(!excluirFruta); // Alterna a exclusão da fruta
  };

  const excluirFrutaNao = () => {
    setOpcoesVisiveis(!opcoesVisiveis); // Alterna a visibilidade das opções
    setExcluirFruta(!excluirFruta); // Alterna a exclusão da fruta
  };

  const excluirFrutaSim = async () => {
    try {
      await AsyncStorage.removeItem(frutaSelecionada); // Remove a fruta selecionada do AsyncStorage
      console.log(`Fruta ${frutaSelecionada} removida com sucesso.`);
      
      setExcluirFruta(false); // Desativa a exclusão da fruta

      
    } catch (error) {
      console.error(`Erro ao remover a fruta ${frutaSelecionada}:`, error);
    }
    carregarFrutas(); // Recarrega a lista de frutas após a exclusão
    setOpcoesVisiveis(!opcoesVisiveis); // Alterna a visibilidade das opções
    setExcluirFruta(!excluirFruta); // Alterna a exclusão da fruta
  };

  const carregarFrutas = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const frutas = await AsyncStorage.multiGet(keys);
      const frutasObj = frutas.map(([key, value]) => {
        return {
          nome: key,
          ...JSON.parse(value),
        };
      });
      setFrutas(frutasObj); // Atualiza a lista de frutas
    } catch (error) {
      console.error('Ops, parece que você ainda não tem nenhuma fruta cadastrada', error);
    }
  };

  const editarFruta = () =>{
    setOpcoesVisiveis(!opcoesVisiveis); // Alterna a visibilidade das opções
    
    navigation.navigate('editarFruta', {frutaSelecionada: frutaSelecionada});
  };

  const apagarTudo = async () => {
    try {
      await AsyncStorage.clear(); // Remove todos os dados do AsyncStorage
      console.log('Todos os dados cadastrados foram apagados com sucesso.');
    } catch (error) {
      console.error('Erro ao apagar os dados cadastrados:', error);
    }
  };

  const realizarPesquisa = () => {
    const filteredResults = frutas.filter((fruta) =>
      fruta.nome.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
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
          onSubmitEditing={realizarPesquisa} // Chamada da função de pesquisa
        />
      </View>

      <SafeAreaView>
        <ScrollView style={styles.frutasLista}>
          {(searchResults.length > 0 ? searchResults : frutas).map((fruta, index) => (
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
              <TouchableOpacity onPress={() => abrirOpcoes(fruta.nome)}>
                <Image
                  source={require('../assets/images/icon_config.png')}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={styles.frutaButtonAdd} onPress={() => navigation.navigate('cadastrarFrutas')}>
        <Image
          source={require('../assets/images/icon_mais_branco.png')}
          style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 25, height: 25 }}
        />
      </TouchableOpacity>
      
      {/* navigation.navigate('editarFruta', {frutaSelecionada: frutaSelecionada}) */}
      {opcoesVisiveis && (
        <View style={styles.menuFrutasOpcoes}>
          <TouchableOpacity style={styles.frutaopcao} onPress={editarFruta}>
            <Image
              source={require('../assets/images/icon_editar_fruta.png')}
              style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 30, height: 30 }}
            />
            <Text style={{ fontFamily: font, fontSize: 16 }}>Editar fruta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.frutaopcao} onPress={excluir}>
            <Image
              source={require('../assets/images/icon_excluir_fruta.png')}
              style={{ padding: 0, marginRight: 10, marginLeft: 10, width: 30, height: 30 }}
            />
            <Text style={{ fontFamily: font, fontSize: 16 }}>Excluir fruta</Text>
          </TouchableOpacity>
        </View>
      )}

      {excluirFruta && (
        <View style={[styles.excluirFrutaTela, { fontFamily: font }]}>
          <View style={[styles.alert, { fontFamily: font }]}>
            <Text style={{ color: '#DA0D1E', fontFamily: font, fontSize: 25, marginBottom: 20 }}>Excluir Fruta</Text>
            <Text style={{ color: '#383B3D', fontFamily: font, fontSize: 14 }}>
              Tem certeza que quer excluir essa fruta?{'\n'}
              Você perderá todas as informações cadastradas sobre ela.
            </Text>
            <View style={styles.alertBotoes}>
              <TouchableOpacity style={[styles.alertButaoNao, { fontFamily: font }]} onPress={excluirFrutaNao}>
                <Text style={{ fontFamily: font, color: '#DA0D1E' }}>Não</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.alertButaoSim} onPress={excluirFrutaSim}>
                <Text style={{ fontFamily: font, color: '#FFFF' }}>Sim, Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

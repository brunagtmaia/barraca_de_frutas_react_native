import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { TouchableOpacity , Image, Text, View } from 'react-native';
//font
import { useFonts, Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins';
// style
import { styles } from '../global/style';
//memoria
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    //font
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
    });
    
    //se a font não for carregada vai carregar a fote padrão
    const font = fontsLoaded ? 'Poppins_300Light' : null;
    const font2 = fontsLoaded ? 'Poppins_400Regular' : null;

    const [keys, setKeys] = useState([]); // Armazena as chaves das frutas cadastradas
    const [tela1, monstrarTela1] = useState(false);
    const [tela2, monstrarTela2] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          carregarFrutas();
        });
    
        return unsubscribe;
    }, [navigation]);
    
    //executa a função uma vex após o componente Home ser renderizado 
    useEffect(() => {
        carregarFrutas();
    }, []);
          
    const carregarFrutas = async () => {
        try {
          const chaves = await AsyncStorage.getAllKeys();
          setKeys(chaves);
          if (chaves.length === 0) {
            monstrarTela1(true);
            monstrarTela2(false);
          } else {
            monstrarTela1(false);
            monstrarTela2(true);
          }
        } catch (error) {
          console.error(error);
        }
      };

    
    return(
        <View style={styles.homeTela}>
            {tela1 && (
                <View>
                    <Text style={[styles.homeText, { fontFamily: font }]}>
                        Cadastre sua primeira fruta:
                    </Text>
                    <TouchableOpacity
                        style={styles.homeButton}
                        onPress={() =>navigation.navigate('cadastrarFrutas')
                        }
                    >
                        <Image
                            source={require('../assets/images/icon_mais_branco.png')}
                            style={{ width: 20, height: 20, padding: 0, marginRight: 10 }}
                        />
                        <Text style={[styles.homeButtonText, { fontFamily: font2 }]}>
                            Cadastre sua fruta
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            {tela2 && (
                <View>
                    <Text style={[styles.homeText, { fontFamily: font }]}>
                        Olá, bem vindo{'('}a{')'} de volta{"!"}
                    </Text>
                    <TouchableOpacity
                        style={styles.homeButton}
                        onPress={() => navigation.navigate('frutas')}
                    >
                        <Text style={[styles.homeButtonText, { fontFamily: font2 }]}>
                            Veja suas frutas cadastradas
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

// export default function Home({ navigation }) {
    //font
    // const [fontsLoaded] = useFonts({
    //   Poppins_300Light,
    //   Poppins_400Regular,
    // });
  
    // //se a font não for carregada vai carregar a fote padrão
    // const font = fontsLoaded ? 'Poppins_300Light' : null;
    // const font2 = fontsLoaded ? 'Poppins_400Regular' : null;
  
//     const [keys, setKeys] = useState([]); // Armazena as chaves das frutas cadastradas
//     //mudar o conteúdo da tela
//     const [tela1, monstrarTela1] = useState('false');
//     const [tela2, monstrarTela2] = useState('false');
  
//     useEffect(() => {
//       carregarFrutas();
//     }, []);
  
//     const carregarFrutas = async () => {
//       try {
//         const chaves = await AsyncStorage.getAllKeys();
//         setKeys(chaves);
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
//     const paraCadastro = () =>{
//         // keys.length === 0 ? return true : navigation.navigate('frutas')
//         if(keys.length === 0){
//             monstrarTela1(!tela1);
//         }
//     };

//     const paraFrutas= () => {
//         if(keys.length === 0){
//             monstrarTela2(!tela2);
//         }
//     }
    
//     return (
//         <paraCadastro/>
//         {tela1 && (
//             <View>
//             </View>
//         )}
//       <View style={styles.homeTela}>
//         <Text style={[styles.homeText, { fontFamily: font }]}>
//           Cadastre sua primeira fruta:
//         </Text>
//         <TouchableOpacity
//           style={styles.homeButton}
//           onPress={() =>
//             keys.length === 0
//               ? navigation.navigate('cadastrarFrutas')
//               : navigation.navigate('frutas')
//           }
//         >
//           <Image
//             source={require('../assets/images/icon_mais_branco.png')}
//             style={{ width: 20, height: 20, padding: 0, marginRight: 10 }}
//           />
//           <Text style={[styles.homeButtonText, { fontFamily: font2 }]}>
//             Cadastre sua fruta
//           </Text>
//         </TouchableOpacity>
//         <StatusBar style="auto" />
//       </View>
//     );
// }
  
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

import styles from './src/global/style';

//import Home from './src/screens/Home';
import Frutas from './src/screens/Frutas';
import Home from './src/screens/Home';
import CadastrarFrutas from './src/screens/CadastrarFrutas';
import EditarFruta from './src/screens/EditarFruta';
import CadastroSucesso from './src/screens/CadastroSucesso';

export default function App() {
  return (
    <CadastroSucesso/>
  );
}


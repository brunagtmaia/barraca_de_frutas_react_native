import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Frutas from "../screens/Frutas";
import EditarFruta from "../screens/EditarFruta";
import CadastrarFrutas from "../screens/CadastrarFrutas";
import CadastroSucesso from "../screens/CadastroSucesso";

const Stack = createStackNavigator();
 
export default function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="frutas" component={Frutas}/>
            <Stack.Screen name="editarFruta" component={EditarFruta}/>
            <Stack.Screen name="cadastrarFrutas" component={CadastrarFrutas}/>
            <Stack.Screen name="cadastroSucesso" component={CadastroSucesso}/>
        </Stack.Navigator>
    )
}
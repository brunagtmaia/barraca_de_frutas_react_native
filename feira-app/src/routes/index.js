import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./AppRoutes";

export default function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}
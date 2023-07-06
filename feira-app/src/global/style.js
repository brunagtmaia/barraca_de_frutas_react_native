import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    homeTela: {
        flex: 1,
        fontFamily: 'Poppins_300Light',
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft: 20
    },
    homeText: {
        fontFamily: 'Poppins_300Light',
        marginBottom: 30
    },
    homeButton:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#DA0D1E',
        width: 328,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    homeButtonText:{
        color:'#D9D9D9',
    }
});

export { styles };

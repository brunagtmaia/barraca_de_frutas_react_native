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
    },
    //frutas
    frutasTela:{
        flex: 1,
        flexDirection: 'row',
        fontFamily: 'Poppins_300Light',
        backgroundColor: '#fff',
        alignItems: 'top',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    pesquisarFrutas:{
        backgroundColor: 'red',
        width: 100,
        height: 100,
        top: 10
    },
    fruta: {
        display:'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: '90%',
        height: 56,
        alignItems:'center',
        justifyContent: 'left',
        borderRadius: 8,
        marginTop: 20
    },
    frutasTextoPesquisar:{
        fontFamily: 'Poppins_300Light',
        fontSize:15
    },
    frutaButtonAdd:{
        position: 'absolute',
        backgroundColor: 'red',
        bottom: 50,
        right: 30,
        width: 60,
        height: 60, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});

export { styles };

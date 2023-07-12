import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    homeTela: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft: 20
    },
    homeText: {
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
    //frutas =============================================
    frutasTela:{
        flex: 1,
        flexDirection: 'row',
        //fontFamily: 'Poppins_300Light',
        backgroundColor: '#fff',
        alignItems: 'top',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    pesquisarFrutas:{
        backgroundColor: 'rgba(218, 13, 30, 1)',
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
        //fontFamily: 'Poppins_300Light',
        fontSize:15
    },
    frutaButtonAdd:{
        position: 'absolute',
        backgroundColor: 'rgba(218, 13, 30, 1)',
        bottom: 100,
        right: 30,
        width: 60,
        height: 60, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    menuFrutasOpcoes:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: 150, 
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor:'#FFFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        paddingLeft:16,
        paddingBottom: 40, 
        paddingTop: 24
    },
    frutaopcao:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        fontSize: 50
    },
    //tela de cadastro de frutas ================================
    CadastrarFrutasTela:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: 'white'
    },
    cadastrarFrutaConteiner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        marginTop: 20
    },
    CadastrarFrutasTitle: {
        flex: 1,
        color: 'rgba(218, 13, 30, 1)',
        fontSize: 24,
        textAlign: 'left',
        //fontFamily: 'Poppins_500Medium',
        marginLeft: 10
    },
    cadastrarFrutaButtonX:{
        backgroundColor: 'transparent',
        marginRight: 10
    },
    cadastrarFrutaButton:{
        position: 'absolute',
        backgroundColor: 'rgba(218, 13, 30, 1)',
        bottom: 50,
        width: '90%',
        height: 56, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    cadastrarFrutaButtonText:{
        //fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 1)'
    },
    formCadastroFruta:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        marginTop: 30
    },
    itemCadastroFruta:{
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
        alignItems:'center',
        justifyContent: 'left',
        borderRadius: 8,
        padding: 16,
        margin: 10
    },
    itemCadastroFrutaText:{
        color:'#6C7072',
        fontSize: 16,
        //fontFamily: 'Poppins_400Regular'
    },
    
    //Editar fruta: mesmo estilização de cadastrar, adapitar somento o text
    //cadastro sucesso =====================================
    cadastroSucessoTela:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cadastroSucessoButtonX:{
        position: 'absolute',
        top:50,
        right:30
    },
    cadastroSucessoTitle:{
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 20,
    },
    cadastroSucessoTxt:{
        fontFamily: 'Poppins_300Light',
        fontSize: 15
    },
    cadastroSucessoConfirm:{
        marginTop: 50,
        margin: 10
    }
});

export { styles };

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    screen: {
       backgroundColor: "#222222",
       flex: 1,
    },
    title: {
        color: "#555777",
        fontSize: 30,
        margin: 10,
        textAlign: "center"
    },
    section: {
        color:  "#333666",
        fontSize: 40,
        fontWeight: '900',
        margin: 20,
        textAlign: 'center',
        
    },
    exception: {
        fontSize: 20,
        fontWeight: '900',
        backgroundColor: "#333333",
        padding: 40,
        color: "red",
        textAlign: 'center'
    },
    roundedButton : {
        
        backgroundColor:  "#444777",
        alignSelf: "flex-end",
        justifyContent: 'center',
        alignItems:'center', 
        borderRadius: 30,
        width: 50,
        height: 50, 
        position: "absolute",
        bottom: 38,
        right: 30, 
    },
    roundedButtonText: {
        fontSize: 28,
        color: "#777777",
        fontWeight: '400',
    },
    textInput:{
        backgroundColor: "#888888",
        width: "60%",
        borderStyle: "solid",
        borderWidth: 2,
        fontSize: 15,
        borderRadius: 20,
        height:40,
        alignSelf: "center",
        color: "#111222",
        fontWeight: '700',
        textAlign: "center"
    },
    radioItem: {
        color: "#999999"
    },
    supplyTitle: {
        fontSize: 17,
        alignSelf: "center",
        margin: 30
    }
 
    
})

export default styles;
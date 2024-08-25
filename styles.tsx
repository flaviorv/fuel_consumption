import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    screen: {
       backgroundColor: "#222222",
       flex: 1,
    },
    title: {
        color: "#999999",
        fontSize: 30,
        margin: 10,
        textAlign: "center",
        textDecorationStyle: "solid"
    },
    section: {
        color:  "#000000",
        fontSize: 40,
        fontWeight: '900',
        margin: 20,
        textAlign: 'center', 
        textDecorationLine: 'underline',
        fontStyle: "italic"
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
        
        backgroundColor:  "#000000",
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
        fontSize: 23,
        alignSelf: "center",
        marginBottom: 15,
        color: "#556466",
        fontFamily: "RobotoCondensed-Light"
    },
    vehiclesIcon: {
        marginTop: 20,
        width: 60,
        height: 60,
        alignSelf: "center"
    },
    newVehicleIcon: {
        width: "100%",
        height: "50%",
        alignSelf: "center",
    }
 
    
})

export default styles;
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
        fontSize: 20,
        fontWeight: '900',
        backgroundColor: "#555777",
        paddingLeft: 68,
        color: "#222555",
        padding: 6,
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
        
        backgroundColor: "#666999",
        alignSelf: "flex-end",
        justifyContent: 'center',
        alignItems:'center', 
        borderRadius: 22,
        width: 50,
        height: 50, 
        position: "absolute",
        bottom: 38,
        right: 30,

        // fle
        
        
        
        

    },
    roundedButtonText: {
        fontSize: 28,
        color: "#222666",
        fontWeight: '900',
        

    }
    
})

export default styles;
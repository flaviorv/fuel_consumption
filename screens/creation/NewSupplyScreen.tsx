import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import styles from "../../styles"
import { useIsFocused, useRoute } from "@react-navigation/native"
import { TextInput } from "react-native-paper";
import { Supply } from "../../classes/Supply";
import * as RNFS from "react-native-fs"

export function NewSupplyScreen({navigation}){
    const route = useRoute();
    const vheicleName: string = route.params.toString();

    const [lastSupply, setLastSupply] = useState(Object);

    const supply = new Supply(0, 0, 0)
    supply.setCurrentDate()

    const isFocused = useIsFocused();

    useEffect(()=>{
        if(isFocused){
            RNFS.readFile(Supply.getFilePath(), "utf8")
            .then((content) => {
                let lines = content.split("\n")
                let lastLine = lines[lines.length -2]
                let _lastSupply = lastLine.split(",")
                let __lastSupply = new Supply(Number(_lastSupply[1]), Number(_lastSupply[2]), Number(_lastSupply[3]));
                setLastSupply(__lastSupply);
                console.log(lastSupply)
            })
            .catch((error: Error) => {
                console.log(error.message);
                console.log("The data may have been deleted")
            })
        }
    },[isFocused])


    return (
        <View style={[styles.screen, {justifyContent: "center"}]}>    
            <Text style={styles.supplyTitle}>{supply.date}</Text>
            <Text style={styles.supplyTitle}>{"Abastecimento de "+vheicleName}</Text>
        
            <TextInput style={_styles.textInputs} placeholder="Quilometragem" onChangeText={(_km: string) => {supply.realKm = supply.adjustOdometerLength(Number(_km), lastSupply); supply.kmTiped = Number(_km)}}/>
            <TextInput style={_styles.textInputs} placeholder="Litros" onChangeText={(_liters: string) => {supply.liters = Number(_liters);}}/>
           
           
            <TouchableOpacity style={{alignItems: "center", margin: 30, backgroundColor: "#000000", width: "40%", padding: 11, alignSelf: "center", borderRadius: 20}} onPress={() => {
                Supply.setVehicleName(vheicleName), Supply.saveSupply(supply)}} >
                <Image source={require("../../images/gas_station/gs5.png")}/>
                <Text style={{fontSize: 15,  fontFamily: "RobotoCondensed-Bold"}}>CONFIRMAR</Text>
            </TouchableOpacity>
           
           
        </View>
    )
}

const _styles = StyleSheet.create({
    textInputs: {width: "40%", textAlign: "center", height: 50, alignSelf: "center", margin: 20, backgroundColor: "#777777"}
})
import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "../../styles"
import { useRoute } from "@react-navigation/native"
import { TextInput } from "react-native-paper";
import { Supply } from "../../classes/Supply";

export function NewSupplyScreen({navigation}){
    const route = useRoute();
    const vheicleName: string = route.params.item.name;

    const supply = new Supply(0, 0)
    const currentDate: string = supply.date;

    const [km, setKm] = useState(0);
    const [liters, setLiters] = useState(0)
   
    useEffect(() => {
        console.log(supply)
        console.log(km, liters)
    },[km, liters])

    return (
        <View style={styles.screen}>    
            <Text style={styles.title}>{currentDate}{"\n"}ABASTECIMENTO DE {vheicleName.toUpperCase()}</Text>
            <TextInput placeholder="km" onChangeText={(_km: string) => setKm(Number(_km))}/>
            <TextInput placeholder="litros" onChangeText={(_liters: string) => {setLiters(Number(_liters))}}/>
            <TouchableOpacity style={{alignItems: "center"}} onPress={()=>{
                supply.km = km, supply.liters = liters,
                Supply.setVehicleName(vheicleName), Supply.saveSupply(supply)}} >
                <Image source={require("../../images/icons8-bomba-de-gasolina-40.png")}/>
                <Text style={{fontSize: 20}}>Confirmar</Text>
            </TouchableOpacity>
           
        </View>
    )
}
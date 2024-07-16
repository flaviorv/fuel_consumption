import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "../../styles"
import { useRoute } from "@react-navigation/native"
import { TextInput } from "react-native-paper";
import { Supply } from "../../classes/Supply";

export function NewSupplyScreen({navigation}){
    const route = useRoute();
    const vheicleName: string = route.params.toString();

    const supply = new Supply(0, 0)
    supply.setCurrentDate()

    return (
        <View style={styles.screen}>    
            <Text style={styles.supplyTitle}>{supply.date+"\nAbastecimento de "+vheicleName}</Text>
            <TextInput placeholder="km" onChangeText={(_km: string) => {supply.km = Number(_km);}}/>
            <TextInput placeholder="litros" onChangeText={(_liters: string) => {supply.liters = Number(_liters);}}/>
            <TouchableOpacity style={{alignItems: "center"}} onPress={() => {
                Supply.setVehicleName(vheicleName), Supply.saveSupply(supply)}} >
                <Image source={require("../../images/icons8-bomba-de-gasolina-40.png")}/>
                <Text style={{fontSize: 20}}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: "center"}} onPress={() => {
                Supply.setVehicleName(vheicleName), Supply.deleteVehicles()}} >
                <Text style={{fontSize: 20}}>Excluir abastecimentos</Text>
            </TouchableOpacity>
           
        </View>
    )
}
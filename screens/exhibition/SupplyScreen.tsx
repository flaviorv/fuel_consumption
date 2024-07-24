import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import styles from "../../styles";
import { useEffect, useState } from "react";
import * as RNFS from "react-native-fs"
import { Supply } from "../../classes/Supply";
import { DataTable } from "react-native-paper";
import {ConsumptionAverage} from "../../classes/ConsumptionAverage"



export function SupplyScreen({navigation, route}) {
    
    let date = route.params.item.date.split("-")
    let day = date[0];
    let hour = date[1];
    return (
        <View style={styles.screen}>
            <View style={{marginTop: 50}}>
                <Text style={styles.supplyTitle}>Dia: {day}</Text>
                <Text style={styles.supplyTitle}>Horário: {hour}</Text>
                <Text style={styles.supplyTitle}>Quantidade: {route.params.item.liters} litros</Text>
                <Text style={styles.supplyTitle}>Odômetro: {route.params.item.km} Km</Text>       
            </View>
            
        </View>
    )   
}
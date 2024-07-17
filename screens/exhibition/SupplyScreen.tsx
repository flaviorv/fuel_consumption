import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import styles from "../../styles";
import { useEffect, useState } from "react";
import * as RNFS from "react-native-fs"
import { Supply } from "../../classes/Supply";
import { DataTable } from "react-native-paper";
import {ConsumptionAverage} from "../../classes/ConsumptionAverage"



export function SupplyScreen({navigation, route}) {
    

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{route.params.item.date}</Text>
            <Text style={styles.title}>{route.params.item.liters} litros abastecidos</Text>
            <Text style={styles.title}>Odômetro: {route.params.item.km} km</Text>
           
           
        </View>
    )   
}
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import styles from "../../styles";
import { useEffect, useState } from "react";
import * as RNFS from "react-native-fs"
import { Supply } from "../../classes/Supply";
import { DataTable } from "react-native-paper";
import {ConsumptionAverage} from "../../classes/ConsumptionAverage"



export function ConsumptionScreen({navigation, route}) {
    
    const isFocused = useIsFocused();
    const [supplies, setSupplies] = useState(Array<Supply>);
    const [average, setAverage] = useState(0);

    Supply.setVehicleName(route.params.item.name);
    
    useEffect(()=>{
        if(isFocused){
            RNFS.readFile(Supply.getFilePath(), "utf8")
            .then((content) => {
                let lines = content.split("\n")
                let _supplies: Array<Supply> = []
                let conAverage = new ConsumptionAverage()
                for(let i = 0; i < lines.length-1; i++) {
                    let supply = lines[i].split(",");
                    let km = Number(supply[1]);
                    let l =  Number(supply[2])
                    let currentSupply = new Supply(km, l);
                    currentSupply.date = supply[0]
                    if(i != 0){
                        let _previousSupply = lines[i-1].split(",");
                        let prevKm = Number(_previousSupply[1]);
                        let prevL = Number(_previousSupply[2]);
                        let previousSupply = new Supply(prevKm, prevL);
                        currentSupply.calculateKmTraveled(previousSupply);
                        currentSupply.calculateConsumption();
                        conAverage.totalKm += currentSupply.kmTraveledSincePrevious;
                        console.log(conAverage.totalKm)
                        conAverage.totalL += l;
                        console.log(conAverage.totalL)
                    }
                   
                    _supplies.push(currentSupply);
                }
                let average = conAverage.calculate(conAverage.totalKm, conAverage.totalL);
                setAverage(average);
                setSupplies(_supplies);
            })
            .catch((error: Error) => {
                console.log(error.message);
                console.log("The data may have been deleted")
                setSupplies([]);
            })
        }
    },[isFocused])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{route.params.item.type} {route.params.item.name}</Text>
            {supplies.length === 0 ? <Text>Não há abastecimentos ainda</Text> :
                <>
                <Text style={styles.title}>{average}</Text>
                <DataTable>
                    <DataTable.Header style={{ backgroundColor: "#654879", borderColor: "#000000"}}>
                        <DataTable.Cell>CONSUMO</DataTable.Cell>
                        <DataTable.Cell>DATA</DataTable.Cell>
                    </DataTable.Header>
                
                    <FlatList 
                        data={supplies}
                        renderItem={({item})=>
                            <DataTable.Row key={item.date} style={{ backgroundColor: "#866989"}} onPress={()=>{
                                navigation.navigate("SupplyScreen", {item});
                            }}>
                                <DataTable.Cell>{item.consumptionSincePrevious}</DataTable.Cell>
                                <DataTable.Cell>{item.date}  </DataTable.Cell>
                            </DataTable.Row>
                            
                        }
                        />
                </DataTable>
                </>
            }
            <TouchableOpacity style={styles.roundedButton} onPress={()=> {
                navigation.navigate("NewSupplyScreen", Supply.getVehicleName())}}>
                <Text style={styles.roundedButtonText} >+</Text>
            </TouchableOpacity>          
           
        </View>
    )   
}
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
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
    Supply.setFilePath();
    
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
                        conAverage.totalL += l;
                        console.log("km " + conAverage.totalKm + "liters " + conAverage.totalL);
                    }
                   
                    _supplies.push(currentSupply);
                }
                let average = conAverage.calculate(conAverage.totalKm, conAverage.totalL);
                setAverage(Number(average));
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
            {route.params.item.type === "car" ? 
                <Image style={styles.vehiclesIcon} source={require("../../images/cars/c7.png")}/> : 
                <Image style={[styles.vehiclesIcon, {width: 80}]} source={require("../../images/motorcycles/m4.png")}/>} 
            <Text style={{textAlign: "center", fontFamily: "", color: "#556466", fontSize: 17}}>{route.params.item.name}</Text>
            {supplies.length === 0 ? <Text style={styles.exception}>Não há abastecimentos ainda</Text> :
                <>
                
                <Text style={{fontSize: 20, fontFamily: "RobotoCondensed-Italic", color: "#556466", textAlign: "center"}}>Consumo médio:</Text>
                <Text style={{fontSize: 30, fontFamily: "RobotoCondensed-Italic", color: "#664578", textAlign: "center"}}>{isNaN(average) ? "--" : average + " litros"}</Text>
                <DataTable style={{alignSelf: "center", width: "100%", marginTop: 40, height: 350, borderWidth: 3, borderColor: "#777777", backgroundColor: "#333666"}}>
                    <DataTable.Header style={{ backgroundColor: "#333666", borderColor: "#000000"}}>
                        <DataTable.Cell><Text style={{fontSize: 15}}>CONSUMO</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={{fontSize: 15}}>DATA</Text></DataTable.Cell>
                    </DataTable.Header>
                
                    <FlatList 
                        data={supplies}
                        renderItem={({item})=>
                            <DataTable.Row key={item.date} style={{ backgroundColor: "#664578", borderColor: "#000000"}} onPress={()=>{
                                navigation.navigate("SupplyScreen", {item});
                            }}>
                                <DataTable.Cell><Text>{isNaN(Number(item.consumptionSincePrevious))? "--" : Number(item.consumptionSincePrevious).toFixed(1) }</Text></DataTable.Cell>
                                <DataTable.Cell><Text>{item.date}</Text></DataTable.Cell>
                            </DataTable.Row>
                            
                        }
                        />
                </DataTable>
                </>
            }

            <TouchableOpacity style={[styles.roundedButton]} onPress={()=> {
                navigation.navigate("NewSupplyScreen", Supply.getVehicleName())}}>
                <Text style={styles.roundedButtonText} >+</Text>
            </TouchableOpacity>          
           
        </View>
    )   
}
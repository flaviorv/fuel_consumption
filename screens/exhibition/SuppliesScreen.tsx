import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused, useRoute } from "@react-navigation/native";
import styles from "../../styles";
import { useEffect, useState } from "react";
import * as RNFS from "react-native-fs"
import { Supply } from "../../classes/Supply";
import { DataTable } from "react-native-paper";



export default function SuppliesScreen({navigation}) {
    const route = useRoute();
    const isFocused = useIsFocused();

    const [supplies, setSupplies] = useState(Array<Supply>);
    Supply.setVehicleName(route.params.item.name)
    useEffect(()=>{
        if(isFocused){
            RNFS.readFile(Supply.getFilePath(), "utf8")
            .then((content) => {
                let lines = content.split("\n")
                let _supplies: Array<Supply> = []
                for(let i = 0; i < lines.length-1; i++) {
                    let supply = lines[i].split(",");
                    let s = new Supply(Number(supply[1]), Number(supply[2]));
                    s.date = supply[0]
                    _supplies.push(s);
                    console.log(s.csvData())
                    console.log(Supply.getFilePath())
                }
                setSupplies(_supplies);
                console.log(_supplies.length);
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
                <DataTable>
                    <DataTable.Header style={{ backgroundColor: "#654879", borderColor: "#000000"}}>
                        <DataTable.Cell>KM</DataTable.Cell>
                        <DataTable.Cell>LITROS</DataTable.Cell>
                        <DataTable.Cell>DATA</DataTable.Cell>
                    </DataTable.Header>
                
                    <FlatList 
                        data={supplies}
                        renderItem={({item})=>
                            <DataTable.Row key={item.date} style={{ backgroundColor: "#866989"}}>
                                <DataTable.Cell>{item.km}</DataTable.Cell>
                                <DataTable.Cell>{item.liters}</DataTable.Cell>
                                <DataTable.Cell>{item.date}  </DataTable.Cell>
                            </DataTable.Row>
                            
                        }
                        />
                </DataTable>
            }
            <TouchableOpacity style={styles.roundedButton} onPress={()=> navigation.navigate("NewSupplyScreen", Supply.getVehicleName())}><Text style={styles.roundedButtonText} >+</Text></TouchableOpacity>   
            
                
           
        </View>
    )   
}
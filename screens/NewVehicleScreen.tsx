
import { useState, useEffect } from "react";
import Vehicle from "../classes/Vehicle";
import { Button, Text, View } from "react-native";
import styles from "../styles"
import * as RNFS from "react-native-fs"

export default function NewVehicleScreen(){
    
    const [newVehicle, setNewVehilce] = useState("");

      
    
    useEffect(()=>{
        RNFS.readFile(Vehicle.getFilePath(), 'utf8')
        .then((vehicles)=>{
            setNewVehilce(vehicles)
        })
        .catch((err: Error)=>{
            console.log(err)
        })

    },[])
   
    return (
        <View style = {styles.screen}>

            <Text style={styles.title}>Resposta: {newVehicle}</Text>
           
        </View>
    )

    
}

import { useState, useEffect } from "react";
import Vehicle from "../classes/Vehicle";
import { Button, Text, View } from "react-native";
import styles from "../styles"
import * as RNFS from "react-native-fs"

export default function NewVehicleScreen({navigation}){

    function generateNewVehicles(){
        let vehicles :Array<Vehicle> = [];
        const v1 = new Vehicle();
        v1.name = "Gol Quadrado"
        v1.setType("car");

        const v2 = new Vehicle();
        v2.name = "Maveric"
        v2.setType("car");

        const v3 = new Vehicle();
        v3.name = "Twister"
        v3.setType("motorcycle");


        Vehicle.saveVehicle(v1);
        Vehicle.saveVehicle(v2);
        Vehicle.saveVehicle(v3);

        vehicles.push(v1, v2, v3);
        setStatus("Veículos gerados")

    }

    function deleteVehicles(){
        RNFS.unlink(Vehicle.getFilePath())
        setStatus("Todos veículos foram deletados")
    }

    const [status, setStatus] = useState("");
    const [pageChangeStatus, setPageChangeStatus] = useState("")

    function pageChangeCount(){
       
        let count = 5
        let interval = setInterval(()=>{
            if(count==0){
                clearInterval(interval)
                return  navigation.navigate("VehiclesScreen")

            }
            count--; 
            setPageChangeStatus("Indo para página de veículos em "+count);
        }, 1000)
        

    }

   
    return (
        <View style = {styles.screen}>

            <Text style={styles.title}>{status}</Text>
            <Text style={styles.title}>{pageChangeStatus}</Text>

            <Button title="Genetate Vehicles" onPress={()=>{generateNewVehicles(), pageChangeCount()}}  disabled={status!==""}/>
            <Button title="Delete Vehicles" onPress={()=>{deleteVehicles()}}  disabled={status!==""}/>
           
        </View>
    )

    
}
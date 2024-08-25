
import { useEffect, useState } from "react";
import { Vehicle } from "../../classes/Vehicle";
import { Button, Image, ScrollView, Text, TextInput, Touchable, View } from "react-native";
import styles from "../../styles"
import * as RNFS from "react-native-fs"
import { RadioButton } from "react-native-paper";
import { Supply } from "../../classes/Supply";
import { useIsFocused } from "@react-navigation/native";

export default function NewVehicleScreen({navigation}){

    function deleteVehicles(){
        deleteSupplies(vehicles)
        RNFS.unlink(Vehicle.getFilePath())
    }

    function deleteSupplies(vehicles: Array<Vehicle>){
        for (let i = 0; i < vehicles.length; i++) {
            vehicles[i]
            console.log(vehicles[i].name + " supplies were deleted");
            Supply.setVehicleName(vehicles[i].name);
            RNFS.unlink(Supply.getFilePath());
        }
    }

    const [status, setStatus] = useState("");

    const [name, setName] = useState("")
    const [type, setType] = useState("car")
    
    const [vehicles, setVehicles] = useState(Array<Vehicle>);
    const isFocused = useIsFocused()   
    useEffect(()=>{
        if(isFocused){
            RNFS.readFile(Vehicle.getFilePath(), 'utf8')
            .then((content)=>{
            console.log(content)
            let lines = content.split("\n")
            console.log(lines + "lines")
            let _vehicles: Array<Vehicle> = [];
            for(let i = 0; i < lines.length-1; i++){
                console.log(i)
                let vehicle = lines[i].split(",")
                console.log(vehicle)
                let v = new Vehicle(vehicle[0], vehicle[1]);
                _vehicles.push(v)
            }
            setVehicles(_vehicles)
            console.log(_vehicles.length)
            
            })
            .catch((err: Error)=>{
            console.log(err)
            console.log("The data may have been deleted")
            setVehicles([])
            })
        
        }
    },[isFocused])

    return (
        <View style = {[styles.screen]}>

            {type === "car" ? <Image style={styles.newVehicleIcon} source={require("../../images/cars/c14.png")}/> : <Image style={styles.newVehicleIcon} source={require("../../images/motorcycles/m1.png")}/> }

            <ScrollView>
                <TextInput placeholder="Nome do veículo" style={[styles.textInput, {marginTop: 70}]}  onChangeText={(e) => {setName(e.toString())}} value={name} editable={status==="Registrando..."? false : true} />

                <RadioButton.Group onValueChange={value => setType(value)} value={type}>
                    <View style={{ justifyContent: "center" }}>     
                        <RadioButton.Item style={{flexDirection: "column-reverse"}} label="Carro" value="car" 
                        labelStyle={{color: "#444777", fontWeight: "bold", fontStyle: "italic"}} disabled={status==="Registrando..."} />
                        <RadioButton.Item style={{flexDirection: "column-reverse"}} label="Moto" value="motorcycle" 
                        labelStyle={{color: "#444777", fontWeight: "bold", fontStyle: "italic"}} disabled={status==="Registrando..."}/>
                    </View>
                </RadioButton.Group>

                <View style={{width: "40%", alignSelf: "center"}}>
                    <Button color={"#000000"} title="Cadastrar" onPress={()=>{setStatus("Aguarde..."), Vehicle.saveVehicle(new Vehicle(name, type))}}  disabled={status==="Aguarde..."}/>
                </View>

                <Button title="Delete Vehicles" onPress={()=>{deleteVehicles()}}  disabled={status!==""}/>
                
            </ScrollView>
           
        </View>
    )

    
}

import { useState } from "react";
import { Vehicle } from "../../classes/Vehicle";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../../styles"
import * as RNFS from "react-native-fs"
import { RadioButton } from "react-native-paper";

export default function NewVehicleScreen({navigation}){

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

    
    const [name, setName] = useState("")
    const [type, setType] = useState("car")
    
    return (
        <View style = {styles.screen}>

            <TextInput placeholder="Nome do veículo" style={styles.textInput}  onChangeText={(e) => {setName(e.toString())}} value={name} editable={status==="Registrando..."? false : true} />

            <Text style={styles.title}>Tipo: {type === "car" ? "Carro" : type === "motorcycle" ? "Moto" : null}</Text>
            <RadioButton.Group onValueChange={value => setType(value)} value={type}>
                <View>     
                    <RadioButton.Item style={{flexDirection: "column-reverse"}} label="Carro" value="car" 
                    labelStyle={{color: "#444777", fontWeight: "bold", fontStyle: "italic"}} disabled={status==="Registrando..."} />
                    <RadioButton.Item style={{flexDirection: "column-reverse"}} label="Moto" value="motorcycle" 
                    labelStyle={{color: "#444777", fontWeight: "bold", fontStyle: "italic"}} disabled={status==="Registrando..."}/>
                </View>
            </RadioButton.Group>

           
            <Button title="Registrar" onPress={()=>{setStatus("Registrando..."), Vehicle.saveVehicle(new Vehicle(name, type)), pageChangeCount()}}  disabled={status==="Registrando..."}/>


            <Text style={styles.title}>{status}</Text>

            <Text style={styles.title}>{pageChangeStatus}</Text>

            <Button title="Delete Vehicles" onPress={()=>{deleteVehicles()}}  disabled={status!==""}/>
           
        </View>
    )

    
}

import { useState } from "react";
import { Vehicle } from "../../classes/Vehicle";
import { Button, Image, ScrollView, Text, TextInput, Touchable, View } from "react-native";
import styles from "../../styles"
import * as RNFS from "react-native-fs"
import { RadioButton } from "react-native-paper";

export default function NewVehicleScreen({navigation}){

    function deleteVehicles(){
        RNFS.unlink(Vehicle.getFilePath())
        setStatus("Todos veículos foram deletados")
    }

    const [status, setStatus] = useState("");

    
    const [name, setName] = useState("")
    const [type, setType] = useState("car")
    
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
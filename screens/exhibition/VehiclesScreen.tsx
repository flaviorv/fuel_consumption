import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState} from "react";
import React from "react";
import styles from "../../styles";
import { Vehicle } from "../../classes/Vehicle";
import RNFS from "react-native-fs"
import { useIsFocused } from '@react-navigation/native'

function VehiclesScreen({ navigation }) {

  const [vehicles, setVehicles] = useState(Array<Vehicle>);
  let isFocused = useIsFocused()
   
       useEffect(()=>{
        if(isFocused){
          RNFS.readFile(Vehicle.getFilePath(), 'utf8')
          .then((content)=>{
          let lines = content.split("\n")
          let _vehicles: Array<Vehicle> = [];
          for(let i = 0; i < lines.length-1; i++){
            let vehicle = lines[i].split(",")
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

  let vehiclesVisible = false;
  let carsVisible = false;
  let motorcyclesVisible = false;
 

  if(vehicles.length > 0) {
    let types: Array<string> = findVehicleTypes(vehicles);
    vehiclesVisible = true;
    
    if(types.includes("motorcycle")){
      motorcyclesVisible = true;
    }
  
    if(types.includes("car")) {
      carsVisible = true;
    }
  }
 
  return(
    
    <View style={styles.screen}>  
      { !vehiclesVisible ?(<Text style={styles.exception}>Nenhum veículo registrado</Text>) : (<>
      
        {carsVisible ? 
          (<>
            <Text id="123" style={styles.section}>Carros:</Text>
            <FlatList
              data={vehicles}
              renderItem={
                ({item})=> item.type === "car" ?  
                  <Text key={item.name}  style={styles.title} onPress={()=>{navigation.navigate("SppliesScreen", {item})}}>{item.name}</Text> : <></>
              }
            />
          </>) : <></>}
          
        {motorcyclesVisible ? 
          (<>
            <Text style={styles.section}>Motos:</Text>
            <FlatList
              data={vehicles}
              renderItem={
                ({item})=> item.type === "motorcycle" ?
                  <Text key={item.name} style={styles.title} onPress={()=>{navigation.navigate("SuppliesScreen", {item})}}>{item.name}</Text> : <></>
              }
            />
          </>): <></>}
            
      </>)}
      <TouchableOpacity style={styles.roundedButton} onPress={()=> navigation.navigate("NewVehicleScreen")}><Text style={styles.roundedButtonText} >+</Text></TouchableOpacity>          
    </View>
      
  )
}


function findVehicleTypes(content: Array<Vehicle>): Array<string> {
  let types: Array<string> = []
  
  for(let i = 0; i < content.length; i++) {
    if(!(types.includes(content[i].type))){
      types.push(content[i].type);
    }
  }
  return types;
}

export default VehiclesScreen;
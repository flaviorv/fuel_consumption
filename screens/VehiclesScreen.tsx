import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState, Component} from "react";
import React from "react";
import styles from "../styles";
import Vehicle from "../classes/Vehicle";
import RNFS from "react-native-fs"




const VehiclesScreen = ({ navigation }) => {

  const [vehicles, setVehicles] = useState(Array<Vehicle>);
  

  
    

  useEffect(()=>{
    RNFS.readFile(Vehicle.getFilePath(), 'utf8')
    .then((content)=>{
      let lines = content.split("\n")
      let _vehicles: Array<Vehicle> = [];
      for(let i = 0; i < lines.length-1; i++){
        let vehicle = lines[i].split(",")
        let v = new Vehicle();
        v.name = vehicle[0]
        v.setType(vehicle[1])
        _vehicles.push(v)
      
       
      
      }
    
     
      setVehicles(_vehicles)
      
    })
    .catch((err: Error)=>{
      console.log(err)
    })
  },[])
   

  console.log(vehicles.length)



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
            <Text style={styles.section}>Carros:</Text>
            <FlatList
              data={vehicles}
              renderItem={
                ({item})=> item.getType() === "car" ?  
                  <Text key={item.name}  style={styles.title} onPress={()=>{navigation.navigate("SuppliesScreen", {item})}}>{item.name}</Text> : <></>
              }
            />
          </>) : <></>}
          
        {motorcyclesVisible ? 
          (<>
            <Text style={styles.section}>Motos:</Text>
            <FlatList
              data={vehicles}
              renderItem={
                ({item})=> item.getType() === "motorcycle" ?
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
    if(!(types.includes(content[i].getType()))){
      types.push(content[i].getType());
    }
  }
  return types;
}

export default VehiclesScreen;
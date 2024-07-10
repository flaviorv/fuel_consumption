import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import Vehicle from "../classes/Vehicle";



const VehiclesScreen = ({ navigation }) => {
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


  let vehiclesVisible = false;
  let carsVisible = false;
  let motorcyclesVisible = false;

  
  console.log(vehicles.length)
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
  

  Vehicle.checkfile()
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
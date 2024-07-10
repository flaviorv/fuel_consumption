import { FunctionComponentFactory } from "react";
import * as RNFS from "react-native-fs";

class Vehicle {
    name!: string;
    type!: string;

    setType(value: string){
        if(value === "car" || value === "motorcycle") {
            this.type = value;
        }else{
            throw new Error("Vehicle type must be 'car' or 'motorcycle'.");
        }
    }

    getType(): string {
        return this.type;
    }

    csvData(): string{
        return `${this.name},${this.type}\n`
    }
    
    private static filePath = `${RNFS.DocumentDirectoryPath}/vehicles.csv`;

    static getFilePath(): string{
        return this.filePath;
    }
    
    static checkfile(){
        RNFS.exists(this.filePath)
        .then((exists) => {
            if (exists) {
            console.log('File exists');
            } else {
            console.log('File does not exist');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    static saveVehicle(vehicle: Vehicle){
        RNFS.appendFile(this.filePath, vehicle.csvData(), 'utf8')
        .then(() => {
        console.log('FILE WRITTEN! ' + vehicle.csvData());
        })
        .catch((err: Error) => {
        console.log(err.message);
        }); 
    }
    

}

export default Vehicle;
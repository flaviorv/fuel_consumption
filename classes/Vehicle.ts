import { FunctionComponentFactory } from "react";
import * as RNFS from "react-native-fs";

export class Vehicle {
    name: string;
    type: string;

    constructor(name: string, type: string){
        name = name.replace(name[0], name[0].toUpperCase())
        this.name = name,
        this.type = type
    }

    csvData(): string{
        return `${this.name},${this.type}\n`
    }
    
    private static filePath = `${RNFS.DocumentDirectoryPath}/vehicles.csv`;

    static getFilePath(): string{
        return this.filePath;
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
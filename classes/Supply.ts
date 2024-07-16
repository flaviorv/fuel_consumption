import React from "react"
import * as RNFS  from "react-native-fs"

export class Supply {
    date!: string;
    km: number;
    liters: number;
    private static vehicleName?: string;
    
    constructor(km: number, liters: number){
        this.km = km,
        this.liters = liters;
    }

    setCurrentDate(){
        let currentDate = new Date().toLocaleString("BR").replace(", ", "-");
        this.date = currentDate;
    }

    csvData(): string{
        return `${this.date},${this.km},${this.liters}\n`;
    }

    private static filePath = RNFS.DocumentDirectoryPath + "/"+this.vehicleName+"_supplies.csv"

    static getFilePath(): string{
        return this.filePath;
    }

    static setVehicleName(vehicleName: string){
        this.vehicleName = vehicleName;
    }

    static getVehicleName(): string{
        return this.vehicleName!;
    }

    static saveSupply(supplie: Supply){
        RNFS.appendFile(this.filePath, supplie.csvData(), "utf8")
        .then(() => {console.log(`FILE WRITTEN! - ${supplie.csvData()}` )})
        .catch((error: Error) => {console.log(error.message)})
    }

    static deleteVehicles(){
        RNFS.unlink(this.filePath)
    }

    
}
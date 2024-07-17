import React from "react"
import * as RNFS  from "react-native-fs"

export class Supply {
    date!: string;
    km: number;
    liters: number;
    kmTraveledSincePrevious: number= 0;
    consumptionSincePrevious: string = "--";
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
        console.log(this.filePath);
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

    calculateConsumption(){
        if(this.kmTraveledSincePrevious != 0){
            this.consumptionSincePrevious = `${this.kmTraveledSincePrevious/this.liters}`;
        }else{
            console.log("Error - kmTraveledSincePrevious needs to be calculated")
        }
    }

    calculateKmTraveled(previousSupply: Supply){
        let traveled = this.km - previousSupply.km;
        return this.kmTraveledSincePrevious = traveled;
    }

    fixLengthOdometerOnTurning(current: number, last: number){
        if(current < last){
            current += Math.pow(10, last.toString().length);
        }
        return current;
    }
    
}
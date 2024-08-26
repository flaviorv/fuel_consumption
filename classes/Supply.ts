import React from "react"
import * as RNFS  from "react-native-fs"

export class Supply {
    date!: string;
    realKm: number;
    kmTiped: number;
    liters: number;
    kmTraveledSincePrevious: number= 0;
    consumptionSincePrevious: string = "--";
    private static vehicleName?: string;
    private static filePath: string;

    
    constructor( kmTiped: number, realKm: number, liters: number){
        this.kmTiped = kmTiped;
        this.realKm = realKm,
        this.liters = liters;
    }

    setCurrentDate(){
        let currentDate = new Date().toLocaleString("BR");
        this.date = currentDate;
    }

    csvData(): string{
        return `${this.date},${this.kmTiped},${this.realKm},${this.liters}\n`;
    }

    
    static getFilePath(): string{
        return this.filePath;
    }

    static setFilePath() {
        this.filePath =  RNFS.DocumentDirectoryPath + "/"+this.vehicleName+"_supplies.csv";
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
        let traveled = this.realKm - previousSupply.realKm;
        return this.kmTraveledSincePrevious = traveled;
    }

    adjustOdometerLength(current: number, last: Supply): Number{
    
        if(last.kmTiped != undefined) {
            let currentLength = current.toString().length
            let lastLength = last.realKm.toString().length
            
            if(currentLength < lastLength){
                let difference = lastLength - currentLength;
                let missingPart = last.realKm.toString().slice(0, difference) 
                console.log(missingPart)
                let join = missingPart + current.toString()
                console.log(join)
                let _current = Number(join)
                
                if(_current <= last.realKm){
                    _current += Math.pow(10, last.kmTiped.toString().length);
                }
                console.log(_current , "current")
                return Number(_current);
            
            }
        }
        return current;
    }
    
    
}
import React from "react"
import * as RNFS  from "react-native-fs"
import { Vehicle } from "./Vehicle";

export class Supply {
    date!: string;
    realKm: number;
    kmTiped: number;
    liters: number;
    kmTraveledSincePrevious: number= 0;
    consumptionSincePrevious: string = "--";
    private static vehicleName?: string;
    private static filePath: string;
    odometerDigits:number;

    
    constructor( kmTiped: number, realKm: number, liters: number, odometerDigitis: number){
        this.kmTiped = kmTiped;
        this.realKm = realKm,
        this.liters = liters,
        this.odometerDigits = odometerDigitis;
    }

    setCurrentDate(){
        let currentDate = new Date().toLocaleString("BR");
        this.date = currentDate;
    }

    csvData(): string{
        return `${this.date},${this.kmTiped},${this.realKm},${this.liters},${this.odometerDigits}\n`;
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

    adjustOdometerLength(currentTyped: number, last: Supply){
        if(last.kmTiped != undefined) {
            return this.notReachedNumbers(last) + this.checkTurning(currentTyped, last) + currentTyped;
        
        }       
        return currentTyped;
    }

    checkTurning(currentTyped: number, last: Supply): number{
        if(last.kmTiped != undefined) {
            if(currentTyped <= last.kmTiped){
                if(this.odometerDigits == 0){
                    this.odometerDigits = last.kmTiped.toString().length
                }
                console.log(this.odometerDigits, "odometer digites ")
                return Math.pow(10, this.odometerDigits);
            } 
        }
        return 0;
    }

    notReachedNumbers(last: Supply): number{
        let notReachedNumbers = 0;
        console.log(last, " last")
        if(last.kmTiped != undefined) {

            if(last.odometerDigits != 0){
                this.odometerDigits = last.odometerDigits;
                notReachedNumbers = last.realKm.toString().length - this.odometerDigits
                let zeros = ""
                for(let i = 0; i < this.odometerDigits; i++) {
                    zeros += "0"
                    console.log(0);
                }
                notReachedNumbers = Number(last.realKm.toString().slice(0, notReachedNumbers)+zeros)
            }    
        }
        console.log(notReachedNumbers, " --- not reached numbers")
        return notReachedNumbers;
    }
    
    
}
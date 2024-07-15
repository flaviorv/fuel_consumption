import React from "react"
import * as RNFS  from "react-native-fs"

export class Supply {
    date: string;
    km: number;
    liters: number;
    private static vehicleName?: string;
    
    constructor(km: number, liters: number){
        this.date = new Date().toLocaleString("BR"),
        this.km = km,
        this.liters = liters;
    }

    csvData(): string{
        return `${this.date},${this.km},${this.liters}`
    }

    private static filePath = RNFS.DocumentDirectoryPath + "/"+this.vehicleName+"/supplies.csv"

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
        RNFS.appendFile(this.filePath, supplie.csvData())
    }

    
}
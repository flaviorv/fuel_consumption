import { Supply } from "./Supply";

export class ConsumptionAverage{
    totalKm: number = 0;
    totalL: number = 0;

    calculate(totalKm: number, totalL: number): string{
        let average =  totalKm/totalL;
        if(!isNaN(average)){
            return average.toFixed(1);
        }
        return "--";
    }
}
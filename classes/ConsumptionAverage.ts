import { Supply } from "./Supply";

export class ConsumptionAverage{
    totalKm: number = 0;
    totalL: number = 0;

    calculate(totalKm: number, totalL: number): number{
        return totalKm/totalL;
    }
}
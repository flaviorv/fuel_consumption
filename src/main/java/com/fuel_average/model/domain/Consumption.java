package com.fuel_average.model.domain;

import java.util.ArrayList;
import java.util.List;

public class Consumption {

    private int odometerLength;
    private List<FillUp> fills = new ArrayList<>();

    public Consumption(int odometerLength) {
        this.odometerLength = odometerLength;
    }

    public FillUp toFill(float km, float liters, float price){
        FillUp fillUp = new FillUp(km, liters, price);
        fills.add(fillUp);

        return fillUp;
    }

    public void allFillsConsumption(){
        for (FillUp fill : fills) {
            if(fills.indexOf(fill) != 0){

            }
        }

    }

    public List<StringBuilder> eachFillConsumption() {
        List<StringBuilder> fillConsumptions = new ArrayList<>();
        for (FillUp fill : fills) {
            if(fills.indexOf(fill) != 0){
                StringBuilder sb = new StringBuilder();
                sb.append(fill.getDate()+" ");
                sb.append(fill.formattedKm(KmPerLiter(fill, fills.get(fills.indexOf(fill) -1)))+"/l"+" ");
                sb.append(fill.formattedMoney(fill.moneySpent()));
                fillConsumptions.add(sb);
            }
        }
        System.out.println(fillConsumptions);
        return fillConsumptions;
    }

    public float KmPerLiter(FillUp current, FillUp last){
        return kmSinceLastFill(current, last) / litersFilled(current);
    }

    public float litersFilled(FillUp current){
        return current.getLiters();
    }

    public float kmSinceLastFill(FillUp current, FillUp last){
        float realCurrentHm = checkOdometerTurn(current.getKilometers(), last.getKilometers());
        float lastHm = last.getKilometers();

        return realCurrentHm - lastHm;
    }

    public float checkOdometerTurn(float current, float last){
        if(current < last){
            current += 10^odometerLength;
        }
        return current;
    }

    public boolean moreThanOneFill(){
        return fills.size() > 1;
    }

    public int getOdometerLength() {
        return odometerLength;
    }

    public void setOdometerLength(int odometerLength) {
        this.odometerLength = odometerLength;
    }
}

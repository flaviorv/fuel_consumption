package com.fuel_average.model.domain;

import java.util.ArrayList;
import java.util.List;

public class Consumption {

    private int odometerLength;
    private List<FillUp> fills = new ArrayList<>();

    public Consumption(int odometerLength) {
        this.odometerLength = odometerLength;
    }

    public void allFillsConsumption(){
    }

    public void eachFillConsumption() {
        for (FillUp fill : fills) {
            if(fills.indexOf(fill) != 0){
                System.out.println( "KmPerLiter: " + KmPerLiter(fill, fills.get(fills.indexOf(fill) -1)));
            }
        }

    }

    public float KmPerLiter(FillUp current, FillUp last){
        return (float) kmSinceLastFill(current, last) / (float) litersFilled(current);
    }

    public FillUp toFill(int panelKm, int liters, int centsPrice){
        FillUp fillUp = new FillUp(panelKm, liters, centsPrice);
        fills.add(fillUp);
        System.out.println(fillUp.getDate());
        return fillUp;
    }

    public int litersFilled(FillUp current){
        return current.getLiters();
    }

    public int kmSinceLastFill(FillUp current, FillUp last){

        int realCurrentKm = checkOdometerTurn(current.getPanelKm(), last.getPanelKm());
        int lastKm = last.getPanelKm();

        return realCurrentKm - lastKm;
    }

    public int checkOdometerTurn(int current, int last){
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

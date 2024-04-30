package com.fuel_average.model.domain;

import java.util.ArrayList;
import java.util.List;

public class Consumption {

    private int odometerLength;
    private List<FillUp> fills = new ArrayList<>();

    public Consumption(int odometerLength) {
        this.odometerLength = odometerLength;
    }

    public FillUp toFill(int hectometers, int deciliters, int centsPrice){
        FillUp fillUp = new FillUp(hectometers, deciliters, centsPrice);
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
                sb.append(fill.getDeciliters()+" ");
                sb.append(fill.getCentsPrice()+" ");
                sb.append(KmPerLiter(fill, fills.get(fills.indexOf(fill) -1))+"Km/l"+" ");
                sb.append(fill.formattedMoney(fill.moneySpent()));
                fillConsumptions.add(sb);
            }
        }
        System.out.println(fillConsumptions);
        return fillConsumptions;
    }

    public float KmPerLiter(FillUp current, FillUp last){
        System.out.println(hmSinceLastFill(current, last));
        System.out.println(decilitersFilled(current));
        return ((float) hmSinceLastFill(current, last)/10) / ((float) decilitersFilled(current)/10);
    }

    public int decilitersFilled(FillUp current){
        return current.getDeciliters();
    }

    public int hmSinceLastFill(FillUp current, FillUp last){
        int realCurrentHm = checkOdometerTurn(current.getHectometers(), last.getHectometers());
        int lastHm = last.getHectometers();

        return realCurrentHm - lastHm;
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

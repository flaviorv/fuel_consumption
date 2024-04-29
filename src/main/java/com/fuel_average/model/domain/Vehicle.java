package com.fuel_average.model.domain;

import java.util.ArrayList;
import java.util.List;

public class Vehicle {

    private String name;
    private String type;
    private String model;
    private int odometerLength;
    private List<FillUp> fills = new ArrayList<>();

    public Vehicle(String name, String type, String model, int odometerLength) {
        this.name = name;
        this.type = type;
        this.model = model;
        this.odometerLength = odometerLength;
    }

    public FillUp toFill(int panelKm, int liters, int centsPrice){
        FillUp fillUp = new FillUp(panelKm, liters, centsPrice);
        fills.add(fillUp);
        return fillUp;
    }

    public float fuelConsumption(){
        if(moreThanOneFill()) {
            float kmPerLiter = (float) kmSinceLastFill() / (float) litersFilled();
            return kmPerLiter;
        }
        return 0;
    }

    public int litersFilled(){
        FillUp fillUp = fills.get(fills.size() -1);
        return fillUp.getLiters();
    }

    public int kmSinceLastFill(){

            FillUp current = fills.get(fills.size() -1);
            FillUp last = fills.get(fills.size() -2);

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getOdometerLength() {
        return odometerLength;
    }

    public void setOdometerLength(int odometerLength) {
        this.odometerLength = odometerLength;
    }
}

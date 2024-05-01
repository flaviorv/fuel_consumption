package com.vehicle_consumption.model.domain.consumption;

import com.vehicle_consumption.model.domain.FillUp;
import com.vehicle_consumption.model.domain.Vehicle;

import java.util.List;

public abstract class Consumption {

    protected Vehicle vehicle;
    protected float kmPerLiter;
    protected float kmPrice;

    public Consumption(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Consumption(Vehicle vehicle, float kmPerLiter, float kmPrice) {
        this.vehicle = vehicle;
        this.kmPerLiter = kmPerLiter;
        this.kmPrice = kmPrice;
    }

    public abstract void calculateConsumption();

    public float KmPerLiter(FillUp current, FillUp last){
        return kmSinceLastFill(current, last) / current.getLiters();
    }

    public float kmSinceLastFill(FillUp current, FillUp last){
        float realCurrentHm = checkOdometerTurn(current.getKilometers(), last.getKilometers());
        float lastHm = last.getKilometers();

        return realCurrentHm - lastHm;
    }

    public float checkOdometerTurn(float current, float last){
        if(current < last){
            current += 10^vehicle.getOdometerLength();
        }
        return current;
    }

    public float getKmPrice() {
        return kmPrice;
    }

    public void setKmPrice(float kmPrice) {
        this.kmPrice = kmPrice;
    }

    public float getKmPerLiter() {
        return kmPerLiter;
    }

    public void setKmPerLiter(float kmPerLiter) {
        this.kmPerLiter = kmPerLiter;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}

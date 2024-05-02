package com.vehicle_consumption.model.domain;

import com.vehicle_consumption.model.domain.consumption.Consumption;
import com.vehicle_consumption.model.domain.consumption.FillUpConsumption;
import com.vehicle_consumption.model.domain.consumption.VehicleConsumption;
import java.util.ArrayList;
import java.util.List;

public class Vehicle {

    private String name;
    private String type;
    private String model;
    private int odometerLength;
    private List<FillUp> fills = new ArrayList<>();
    private VehicleConsumption consumption;

    public Vehicle(String name, String type, String model, int odometerLength) {
        this.name = name;
        this.type = type;
        this.model = model;
        this.odometerLength = odometerLength;
    }

    public void toFill(float kilometers, float liters, float price) {
        FillUp fill = new FillUp(kilometers, liters, price);
        fills.add(fill);
        calculateConsumption(fill);
        showVehicleConsumption(fill);
    }

    public void calculateConsumption(FillUp fillUp){
        FillUpConsumption fc = new FillUpConsumption(this);
        fillUp.setConsumption(fc);
        fc.calculateConsumption();

        if(consumption == null){
            consumption = new VehicleConsumption(this, 0,0);
        }
        consumption.calculateConsumption();

    }

    public void showVehicleConsumption(FillUp fu){
        System.out.println("________________________________________________________________");
        System.out.println("Vehicle Consumption");
        System.out.println(consumption.getVehicle().getName());
        System.out.println("km/l: "+fu.floatDecimalPlaces(consumption.getKmPerLiter(), 1));
        System.out.println("Money spent per liter: "+fu.formattedMoney(consumption.getKmPrice()));
        System.out.println("________________________________________________________________");
        System.out.println("Fill");
        System.out.println("Filled on: " + fu.getDate());
        System.out.println(fu.formattedLiters(fu.getLiters()));
        System.out.println(fu.formattedMoney(fu.getPrice()));
        System.out.println("________________________________________________________________");
        System.out.println("Km since last fill");
        System.out.println(fu.formattedKm(fu.getConsumption().getKmSinceLastFill()));
        System.out.println("________________________________________________________________");
        System.out.println("Consumptions since last fill");
        System.out.println("km/l :" +fu.floatDecimalPlaces(fu.getConsumption().getKmPerLiter(), 1));
        System.out.println("Money spent per liter: "+fu.formattedMoney(fu.getConsumption().getKmPrice()));
        System.out.println("________________________________________________________________");




    }



    public VehicleConsumption getConsumption() {
        return consumption;
    }

    public void setConsumption(VehicleConsumption consumption) {
        this.consumption = consumption;
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

    public List<FillUp> getFills() {
        return fills;
    }

}

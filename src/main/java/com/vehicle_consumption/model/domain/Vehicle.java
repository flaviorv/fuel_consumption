package com.vehicle_consumption.model.domain;

import com.vehicle_consumption.model.domain.consumption.Consumption;
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

    public void addFill(FillUp fill) {
        fills.add(fill);
    }

}

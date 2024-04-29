package com.fuel_average.model.domain;

import java.util.ArrayList;
import java.util.List;

public class Vehicle {

    private String name;
    private String type;
    private String model;
    private Consumption consumption;

    public Vehicle(String name, String type, String model, int consumption) {
        this.name = name;
        this.type = type;
        this.model = model;
        this.consumption = new Consumption(consumption);
    }

    public Consumption getConsumption() {
        return consumption;
    }

    public void setConsumption(Consumption consumption) {
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


}

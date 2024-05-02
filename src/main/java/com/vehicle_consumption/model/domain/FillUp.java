package com.vehicle_consumption.model.domain;

import com.vehicle_consumption.model.domain.consumption.Consumption;
import com.vehicle_consumption.model.domain.consumption.FillUpConsumption;

import java.text.SimpleDateFormat;
import java.util.Date;

public class FillUp {

    private String date;
    private float kilometers;
    private float liters;
    private float price;
    private FillUpConsumption consumption;


    public FillUp(float kilometers, float liters, float price) {
        this.date = formattedDate(new Date());
        this.kilometers = kilometers;
        this.liters = liters;
        this.price = price;
    }

    public String formattedDate(Date date){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        return sdf.format(date);
    }

    public float moneySpent(){
        return liters * price;
    }

    public String formattedMoney(float money){
        String formattedMoney = floatDecimalPlaces(money, 2);
        formattedMoney = formattedMoney.replace(".", ",");
        formattedMoney = "R$"+formattedMoney;

        return formattedMoney;
    }

    public String formattedLiters(float liters){
        return floatDecimalPlaces(liters, 1)+"l";
    }

    public String formattedKm(float kilometers){
        return floatDecimalPlaces(kilometers, 1)+"km";
    }

    public String floatDecimalPlaces(float f, int places){
        return String.format("%."+places+"f", f);
    }

    public float getKilometers() {
        return kilometers;
    }

    public void setKilometers(float kilometers) {
        this.kilometers = kilometers;
    }

    public float getLiters() {
        return liters;
    }

    public void setLiters(float liters) {
        this.liters = liters;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public FillUpConsumption getConsumption() {
        return consumption;
    }

    public void setConsumption(FillUpConsumption consumption) {
        this.consumption = consumption;
    }
}

package com.fuel_average.model.domain;

import java.text.SimpleDateFormat;
import java.util.Date;

public class FillUp {

    private String date;
    //The latest number is equivalent to a decimal place - Ex: 1000 = 100.0
    private int hectometers;
    private int deciliters;
    //The latests two numbers is equivalent to two decimal places - Ex: 1000 = 10.00
    private int centsPrice;


    public FillUp(int hectometers, int deciliters, int centsPrice) {
        this.date = formattedDate(new Date());
        this.hectometers = hectometers;
        this.deciliters = deciliters;
        this.centsPrice = centsPrice;
    }

    public String formattedDate(Date date){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        return sdf.format(date);
    }

    public float moneySpent(){
        //1000 is to transform deciliter in liter and centsPrice in reais
        return (float) deciliters * (float) centsPrice / 1000;
    }

    public float convertToReais(float cents){
        return cents/100;
    }

    public float convertToLitersOrKms(float decilitersOrHectometers){
        return decilitersOrHectometers/10;
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

    public String formattedKilometers(float kilometers){
        return floatDecimalPlaces(kilometers, 1)+"km";
    }

    public String floatDecimalPlaces(float f, int places){
        return String.format("%."+places+"f", f);
    }

    public int getHectometers() {
        return hectometers;
    }

    public void setHectometers(int hectometers) {
        this.hectometers = hectometers;
    }

    public int getDeciliters() {
        return deciliters;
    }

    public void setDeciliters(int deciliters) {
        this.deciliters = deciliters;
    }

    public int getCentsPrice() {
        return centsPrice;
    }

    public void setCentsPrice(int centsPrice) {
        this.centsPrice = centsPrice;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}

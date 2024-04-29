package com.fuel_average.model.domain;

public class FillUp {

    //The latest number is equivalent to a decimal place - Ex: 1000 = 100.0
    private int panelKm;
    private int liters;
    //The latests two numbers is equivalent to two decimal places - Ex: 1000 = 10.00
    private int centsPrice;

    public FillUp(int panelKm, int liters, int centsPrice) {
        this.panelKm = panelKm;
        this.liters = liters;
        this.centsPrice = centsPrice;
    }

    public int fuelConsumption(){
        int average = 0;
        try{
            average = panelKm /liters;
        }
        catch (ArithmeticException e) {
            System.out.println(e);
            System.out.println("Cannot divide by zero");
        }
        return average;
    }

}

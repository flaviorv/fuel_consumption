package com.fuel_average.model.domain;

import java.util.Date;

public class FillUp {

    private Date date;
    //The latest number is equivalent to a decimal place - Ex: 1000 = 100.0
    private int panelKm;
    private int liters;
    //The latests two numbers is equivalent to two decimal places - Ex: 1000 = 10.00
    private int centsPrice;


    public FillUp(int panelKm, int liters, int centsPrice) {
        this.date = new Date();
        this.panelKm = panelKm;
        this.liters = liters;
        this.centsPrice = centsPrice;
    }

    public int getPanelKm() {
        return panelKm;
    }

    public void setPanelKm(int panelKm) {
        this.panelKm = panelKm;
    }

    public int getLiters() {
        return liters;
    }

    public void setLiters(int liters) {
        this.liters = liters;
    }

    public int getCentsPrice() {
        return centsPrice;
    }

    public void setCentsPrice(int centsPrice) {
        this.centsPrice = centsPrice;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

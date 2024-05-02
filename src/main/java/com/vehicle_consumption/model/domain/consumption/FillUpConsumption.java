package com.vehicle_consumption.model.domain.consumption;

import com.vehicle_consumption.model.domain.FillUp;
import com.vehicle_consumption.model.domain.Vehicle;

import java.util.List;

public class FillUpConsumption extends Consumption{

    float kmSinceLastFill;

    public FillUpConsumption(Vehicle vehicle){
        super(vehicle);
    }

    public void calculateConsumption() {
        List<FillUp> fills = vehicle.getFills();
        if(fills.size() >= 2){


            FillUp current = fills.get(fills.size()-1);
            FillUp last = fills.get(fills.size()-2);

            kmSinceLastFill = kmSinceLastFill(current, last);

            kmPerLiter = KmPerLiter(current, last);
            kmPrice = current.getPrice()/kmPerLiter;

            setKmPrice(kmPrice);
            setKmPerLiter(kmPerLiter);

        }
    }

    public float getKmSinceLastFill() {
        return kmSinceLastFill;
    }

    public void setKmSinceLastFill(float kmSinceLastFill) {
        this.kmSinceLastFill = kmSinceLastFill;
    }
}

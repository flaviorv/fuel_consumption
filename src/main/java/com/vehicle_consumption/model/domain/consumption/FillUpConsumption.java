package com.vehicle_consumption.model.domain.consumption;

import com.vehicle_consumption.model.domain.FillUp;
import com.vehicle_consumption.model.domain.Vehicle;

import java.util.List;

public class FillUpConsumption extends Consumption{

    public FillUpConsumption(Vehicle vehicle){
        super(vehicle);
    }

    public void calculateConsumption() {
        List<FillUp> fills = vehicle.getFills();
        if(fills.size() >= 2){


            FillUp current = fills.get(fills.size()-1);
            FillUp last = fills.get(fills.size()-2);

            kmPerLiter = KmPerLiter(current, last);
            kmPrice = current.getPrice()/kmPerLiter;
            System.out.println(vehicle.getFills().size());
            System.out.println("Fill day: " + current.getDate());
            System.out.println("kmPerLiter: " + kmPerLiter);
            System.out.println("kmPrice: " + kmPrice);
            setKmPrice(kmPrice);
            setKmPerLiter(kmPerLiter);

        }
    }

}

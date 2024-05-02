package com.vehicle_consumption.model.domain.consumption;

import com.vehicle_consumption.model.domain.FillUp;
import com.vehicle_consumption.model.domain.Vehicle;

import java.util.List;

public class VehicleConsumption extends Consumption {

    public VehicleConsumption(Vehicle vehicle, float kmPerLiter, float kmPrice){
        super(vehicle, kmPerLiter, kmPrice);
    }

    public void calculateConsumption(){
        List<FillUp> fills = vehicle.getFills();

        if(fills.size() >= 2){

            FillUp currentFill = fills.get(fills.size()-1);
            FillUpConsumption fConsumption = currentFill.getConsumption();

            float fKmPerLiter = fConsumption.getKmPerLiter();
            float fKmPrice = fConsumption.getKmPrice();

            if(fills.size() == 2){
                kmPerLiter = fKmPerLiter;
                kmPrice = fKmPrice;
            }
            else{
                VehicleConsumption vConsumption = vehicle.getConsumption();

                float vKmPerLiter = vConsumption.getKmPerLiter();
                float vKmPrice = vConsumption.getKmPrice();

                kmPerLiter = (vKmPerLiter + fKmPerLiter)/2;
                kmPrice = (vKmPrice + fKmPrice)/2;
            }
        }
    }

}

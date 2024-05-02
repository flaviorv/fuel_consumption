package com.vehicle_consumption;


import com.vehicle_consumption.model.domain.FillUp;
import com.vehicle_consumption.model.domain.Vehicle;
import com.vehicle_consumption.model.domain.consumption.FillUpConsumption;
import com.vehicle_consumption.model.domain.consumption.VehicleConsumption;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class VehicleTests {
    @Test
    void test1(){
        Vehicle v = new Vehicle("Ferrari", "Carro", "Gol Quadrado 94", 5);
        VehicleConsumption vc = new VehicleConsumption(v, 0, 0);
        v.setConsumption(vc);

        FillUp f1 = new FillUp(100, 100, 12);
        v.getFills().add(f1);
        FillUpConsumption fc1 = new FillUpConsumption(v);
        f1.setConsumption(fc1);
        fc1.calculateConsumption();
        vc.calculateConsumption();

        FillUp f2 = new FillUp(180, 100, 13.5f);
        v.getFills().add(f2);
        FillUpConsumption fc2 = new FillUpConsumption(v);
        f2.setConsumption(fc2);
        fc2.calculateConsumption();
        vc.calculateConsumption();

        FillUp f3 = new FillUp(273, 100, 11.2f);
        v.getFills().add(f3);
        FillUpConsumption fc3 = new FillUpConsumption(v);
        f3.setConsumption(fc3);
        fc3.calculateConsumption();
        vc.calculateConsumption();


        v.toFill(180, 100, 13.5f);

        v.toFill(273, 100, 11.2f);

        v.toFill(300, 100, 11.32f);

    }

}

package com.fuel_average;

import com.fuel_average.model.domain.Vehicle;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class VehicleTests {

//    @Test
//    void fuelConsumptionReturnsCorrectValue() {
//        Vehicle ferrari = new Vehicle("Ferrari", "Carro", "Gol Quadrado 94", 5);
//        ferrari.getConsumption().toFill(120, 10, 800);
//        ferrari.getConsumption().toFill(255, 10, 853);
//
//        float fuelConsumption = ferrari.getConsumption().fuelConsumption();
//
//        Assertions.assertEquals( 13.5, fuelConsumption);
//    }
//
//    @Test
//    void fuelConsumptionReturns0() {
//        Vehicle ferrari = new Vehicle("Ferrari", "Carro", "Gol Quadrado 94", 5);
//        ferrari.getConsumption().toFill(120, 10, 800);
//
//        float fuelConsumption = ferrari.getConsumption().fuelConsumption();
//
//
//        Assertions.assertEquals( 0, fuelConsumption);
//    }

    @Test
    void eachFillConsumptionReturnsCorrectValue() {
        Vehicle ferrari = new Vehicle("Ferrari", "Carro", "Gol Quadrado 94", 5);
        ferrari.getConsumption().toFill(120, 10, 800);
        ferrari.getConsumption().toFill(255, 10, 853);
        ferrari.getConsumption().toFill(368, 10, 853);
        ferrari.getConsumption().toFill(400, 15, 853);

        ferrari.getConsumption().eachFillConsumption();
    }

}

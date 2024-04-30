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
        ferrari.getConsumption().toFill(120, 10, 8);
        ferrari.getConsumption().toFill(240, 10, 8.0f);
        ferrari.getConsumption().toFill(3680, 9, 8.37f);
        ferrari.getConsumption().toFill(4000, 15, 8.53f);

        ferrari.getConsumption().eachFillConsumption();
    }

}

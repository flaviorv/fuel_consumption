package com.fuel_average;

import com.fuel_average.model.domain.FillUp;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class FuelAverageApplicationTests {

    @Test
    void fuelConsumption_divisionByZero_returnsZero() {
        FillUp ftest = new FillUp(583, 0, 10);

        int consumptionAverage = ftest.fuelConsumption();

        assertEquals(0, consumptionAverage);
    }

    @Test
    void fuelConsumption_returnsCorrectValue() {
        FillUp ftest = new FillUp(2500, 2, 10);

        int consumptionAverage = ftest.fuelConsumption();

        assertEquals(1250, consumptionAverage);
    }
}

package com.vehicle_consumption;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FuelAverageApplication {

    public static void main(String[] args) {
        SpringApplication.run(FuelAverageApplication.class, args);
        System.out.println("running application");
        float f = 1.8f;
        String s = String.format("%.2f", f);
        System.out.println(f +" to "+ s);
    }

}

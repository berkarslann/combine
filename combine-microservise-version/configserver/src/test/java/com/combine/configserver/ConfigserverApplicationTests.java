package com.combine.configserver;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import com.combine.configserver.ConfigserverApplication;

import org.springframework.test.context.ContextConfiguration;

@SpringBootTest(classes = ConfigserverApplication.class, webEnvironment = WebEnvironment.RANDOM_PORT)
@SpringJUnitConfig
@ContextConfiguration
public class ConfigserverApplicationTests {

    @Test
    public void contextLoads() {
        // Test case logic here
    }
}

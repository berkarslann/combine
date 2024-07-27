package com.combine.projects.kafka;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class ProjectKafkaProducer {

    private final KafkaTemplate<String, Object> kafkaTemplate;

    public ProjectKafkaProducer(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(String topic, Object message) {
        kafkaTemplate.send(topic, message);
    }
}

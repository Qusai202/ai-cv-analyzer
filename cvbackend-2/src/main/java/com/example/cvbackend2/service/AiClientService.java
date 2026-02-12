package com.example.cvbackend2.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class AiClientService {

    @Value("${hf.api.base}")
    private String baseUrl;

    @Value("${hf.model}")
    private String model;

    @Value("${hf.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Sends a prompt to HuggingFace LLM and returns raw JSON response
     */
    public String analyze(String prompt) {

        // ✅ Full HF Router URL
        String url = baseUrl + "/" + model;

        // ✅ Headers
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        // ✅ Correct HF request body
        Map<String, Object> body = Map.of(
                "inputs", prompt
        );

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(body, headers);

        ResponseEntity<String> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.POST,
                        request,
                        String.class
                );

        return response.getBody();
    }
}

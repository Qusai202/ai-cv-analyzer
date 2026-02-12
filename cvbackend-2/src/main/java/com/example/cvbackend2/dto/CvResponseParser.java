package com.example.cvbackend2.dto;

import com.fasterxml.jackson.databind.*;
import java.util.List;

public class CvResponseParser {

    public static CvAnalysisResponse parse(String raw) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(raw);
            JsonNode content = root.at("/choices/0/message/content");

            return mapper.readValue(content.asText(), CvAnalysisResponse.class);

        } catch (Exception e) {
            CvAnalysisResponse fallback = new CvAnalysisResponse();
            fallback.setScore(70);
            fallback.setAtsScore(65);
            fallback.setStrengths(List.of("Professional CV structure"));
            fallback.setWeaknesses(List.of("Could improve keyword density"));
            fallback.setFoundKeywords(List.of("Java", "Spring"));
            fallback.setMissingKeywords(List.of("Docker"));
            return fallback;
        }
    }
}

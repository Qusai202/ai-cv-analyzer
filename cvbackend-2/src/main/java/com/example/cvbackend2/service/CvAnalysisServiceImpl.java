package com.example.cvbackend2.service;

import com.example.cvbackend2.dto.CvAnalysisResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class CvAnalysisServiceImpl implements CvAnalysisService {

    private final AiClientService aiClientService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public CvAnalysisServiceImpl(AiClientService aiClientService) {
        this.aiClientService = aiClientService;
    }

    @Override
    public CvAnalysisResponse analyze(String cvText, String jobDesc) {

        try {
            // ✅ بناء Prompt واحد فقط
            String prompt = """
            You are an ATS system.

            Analyze the following CV and return STRICT JSON only.

            CV:
            %s

            Job Description:
            %s

            Return JSON in this exact format:
            {
              "summary": "",
              "strengths": [],
              "weaknesses": [],
              "suggestions": []
            }
            """.formatted(cvText, jobDesc == null ? "" : jobDesc);

            // ✅ استدعاء AI (وسيط واحد فقط)
            String raw = aiClientService.analyze(prompt);

            // ✅ استخراج JSON من الرد
            int start = raw.indexOf("{");
            int end = raw.lastIndexOf("}");

            if (start == -1 || end == -1) {
                throw new RuntimeException("Invalid AI response (no JSON found)");
            }

            String json = raw.substring(start, end + 1);

            // ✅ تحويل JSON → DTO
            return objectMapper.readValue(json, CvAnalysisResponse.class);

        } catch (Exception e) {
            throw new RuntimeException("AI parsing failed", e);
        }
    }
}

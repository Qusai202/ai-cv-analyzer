package com.example.cvbackend2.service;

import com.example.cvbackend2.dto.CvAnalysisResponse;

public interface CvAnalysisService {
    CvAnalysisResponse analyze(String cvText, String jobDescription);
}

package com.example.cvbackend2.dto;

import lombok.Data;
import java.util.List;

@Data
public class CvAnalysisResponse {
    private int score;
    private int atsScore;
    private List<String> strengths;
    private List<String> weaknesses;
    private List<String> foundKeywords;
    private List<String> missingKeywords;
}

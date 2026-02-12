package com.example.cvbackend2.dto;

import lombok.Data;

@Data
public class CvAnalyzeRequest {
    private String cvText;
    private String jobDescription;
}

package com.example.cvbackend2.dto;

import lombok.Data;

@Data
public class AnalyzeRequest {
    private String cvText;
    private String jobDescription;
}

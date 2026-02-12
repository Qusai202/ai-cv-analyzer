package com.example.cvbackend2.dto;

import lombok.Data;

@Data
public class CvRewriteRequest {
    private String cvText;
    private String jobDescription;
}

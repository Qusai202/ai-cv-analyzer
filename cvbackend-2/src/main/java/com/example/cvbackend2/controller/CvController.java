package com.example.cvbackend2.controller;

import com.example.cvbackend2.dto.AnalyzeRequest;
import com.example.cvbackend2.dto.CvAnalysisResponse;
import com.example.cvbackend2.service.CvAnalysisService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cv")
@RequiredArgsConstructor
@CrossOrigin
public class CvController {

    private final CvAnalysisService cvAnalysisService;

    @PostMapping("/analyze")
    public CvAnalysisResponse analyze(@RequestBody AnalyzeRequest request) {
        return cvAnalysisService.analyze(
                request.getCvText(),
                request.getJobDescription()
        );
    }
}

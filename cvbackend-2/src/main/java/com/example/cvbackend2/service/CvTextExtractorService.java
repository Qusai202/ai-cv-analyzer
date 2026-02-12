package com.example.cvbackend2.service;

import org.springframework.stereotype.Service;

@Service
public class CvTextExtractorService {

    public String extract(String text) {
        return text == null ? "" : text;
    }
}

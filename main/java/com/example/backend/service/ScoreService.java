// ScoreService.java
package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.Score;
import com.example.backend.repository.ScoreRepository;

import java.util.List;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }

    public List<Score> getScoresByEmail(String email) {
        return scoreRepository.findByEmail(email);
    }
}

// ScoreController.java
package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.Score;
import com.example.backend.service.ScoreService;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
@CrossOrigin(origins = "http://localhost:3000")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PostMapping("/add")
    public Score addScore(@RequestBody Score score) {
        return scoreService.saveScore(score);
    }

    @GetMapping("/{email}")
    public List<Score> getScoresByEmail(@PathVariable String email) {
        return scoreService.getScoresByEmail(email);
    }
}

import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.page.html',
  styleUrls: ['./scoreboard.page.scss'],
})
export class ScoreboardPage implements OnInit {
  trophyUrl = "https://cdn3.iconfinder.com/data/icons/back-to-school-12/30/school_object_study_student-5-512.png";
  scoreboard = [];

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit() {
    this.scoreboardService.getScoreboard().subscribe(data => {
      console.log(data);
      let rankings = data.ranking;
      let scores = [];
      rankings.forEach(element => {
        scores.push({
          name: element[0],
          score: element[1],
        })
      });

      this.scoreboard = scores;
    })
  }

}

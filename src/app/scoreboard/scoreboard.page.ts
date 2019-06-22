import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.page.html',
  styleUrls: ['./scoreboard.page.scss'],
})
export class ScoreboardPage implements OnInit {

  scoreboard: any = [
    {
      name: 'Test',
      score: 100
    },
    {
      name: 'Test',
      score: 200
    },
  ];

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit() {
    this.scoreboardService.getScoreboard().subscribe(data => {
      console.log(data);
    })
  }

}

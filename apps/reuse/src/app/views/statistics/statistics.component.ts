import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @Input() data = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data = [];
  @Input() headers = [];
  @Input() classNames = '';

  constructor() { }

  ngOnInit(): void {
  }

}

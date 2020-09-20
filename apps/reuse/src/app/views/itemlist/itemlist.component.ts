import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  @Input() items = [];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];
  items = [
    { 
      image: '/assets/images/chair1.jpg',
      title: 'Chair',
      description: 'This is a fantastic chair to sit on'
    },
    { 
      image: '/assets/images/lenore.jpg',
      title: 'Couch',
      description: 'This is a fantastic Couch to sit on'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

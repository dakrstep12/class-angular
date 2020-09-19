import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterButtonType } from '../../model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() labels: FilterButtonType
  @Output() outTab = new EventEmitter<string>()
  @Input() clicked

  constructor() { }

  handlerClick(label: string) {
    this.clicked = label
    this.outTab.emit(label);
  }
}

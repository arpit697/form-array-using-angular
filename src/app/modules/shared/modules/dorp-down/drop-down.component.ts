import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() DATA !: Array<any>;
  @Input() Text !: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  eventEmit(event: any) {
    this.onClick.emit(event.value);
  }
}

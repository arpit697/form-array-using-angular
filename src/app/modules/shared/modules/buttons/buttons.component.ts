import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() Text !: string;
  @Input() buttonClass !:string;
  @Output() Click: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eventEmit() {
    this.Click.emit();
  }

}

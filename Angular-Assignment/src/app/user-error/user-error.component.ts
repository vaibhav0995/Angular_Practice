import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-error',
  templateUrl: './user-error.component.html',
  styleUrls: ['./user-error.component.css']
})
export class UserErrorComponent implements OnInit {

  @Input('errorObj') errorObj: any;
  @Output('cancel') $cancelEvent: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
  }

  closeErrorPopUp() {
    this.$cancelEvent.emit(true);
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.css']
})
export class NavBtnComponent {
  @Input() isClicked: boolean = true;
  @Output("eventNavVisible") eventVisible = new EventEmitter();
  testBtn() {
    console.log("Pruebita test");
    this.isClicked = !this.isClicked
    console.log("Negacion?: ", this.isClicked);
    this.eventVisible.emit(this.isClicked)
    // throw new Error('Method not implemented.');
  }


}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() currentRoute: string;
  title: string;
  icon: string;
  showBack = false;

  constructor() { }

  ngOnInit() {
    this.title = 'CF Style Guide';
    this.icon = 'insert_emoticon'; // keyboard_backspace for back
  }

  ngOnChanges(changes) {
    if (changes.currentRoute) {
      this.showBack = this.currentRoute !== '';
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  icon: string;

  constructor() { }

  ngOnInit() {
    this.title = 'CF Style Guide';
    this.icon = 'insert_emoticon'; // keyboard_backspace for back
  }

}

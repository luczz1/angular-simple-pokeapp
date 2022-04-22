import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {

  darkModeClick: boolean = false
  backgroundClass: string

  constructor() { }

  ngOnInit(): void {
  }

  turnDarkMode() {
    if(!this.darkModeClick){
      console.log('dark mode enabled')
      this.darkModeClick = true
      this.backgroundClass = 'bg-dark'
    } else {
      console.log('dark mode disabled')
      this.darkModeClick = false
      this.backgroundClass = 'bg-light'
    }

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css']
})
export class AuthcomponentComponent implements OnInit {
  title = 'landing-page';
  constructor() { }

  ngOnInit(): void {
  }

}

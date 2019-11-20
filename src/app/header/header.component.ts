import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //@Input() title: string;
  public currPath: string;
  constructor(private location: Location) { 
  }

  ngOnInit() {
    
  }
  ngDoCheck() {
    console.log('CURRENTPATH', this.location.path());
  }
  
}

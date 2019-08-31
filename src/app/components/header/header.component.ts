import { Component, OnInit } from '@angular/core';
import { SidemenuService } from '../../providers/sidemenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  title = '';

  constructor(private sideMenuService: SidemenuService) {}

  ngOnInit() {
  	this.getTitle()
  }

  getTitle(){
    console.log("getTitle :",this.sideMenuService.getTitle());
  	this.title = this.sideMenuService.getTitle();
  }

}

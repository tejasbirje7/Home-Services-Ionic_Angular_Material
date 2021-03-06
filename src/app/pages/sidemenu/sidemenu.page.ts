import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SidemenuService } from '../../providers/sidemenu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  selections = [];

  selectedPath = ""

  constructor(private router: Router, private sidemenuService: SidemenuService) { 
    this.router.events
    .subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.selections = this.sidemenuService.get_selections();
  }

  setTitle(title: string){
    console.log('Side Menu Title :',title);
    this.sidemenuService.setTitle(title);
  }

}

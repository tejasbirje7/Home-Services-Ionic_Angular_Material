import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SidemenuService } from '../../providers/sidemenu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  pages = [
    {
      'title' : 'Home',
      'url' : '/sidemenu/home',
      'icon' : '../../../assets/home.png'
    },
    {
      'title' : 'Become a Proffessional',
      'url' : '/sidemenu/proffessional',
      'icon' : '../../../assets/proffessional.png'
    },
    {
    'title' : 'Shop',
    'url' : '/sidemenu/shop',
    'icon' : '../../../assets/shop.png'
  },
    {
      'title' : 'Help',
      'url' : '/sidemenu/help',
      'icon' : '../../../assets/help.png'
    }
  ];

  selectedPath = ""

  constructor(private router: Router, private sidemenu: SidemenuService) { 
    this.router.events
    .subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

  setTitle(title: string){
    console.log('Side Menu Title :',title);
    this.sidemenu.setTitle(title);
  }

}

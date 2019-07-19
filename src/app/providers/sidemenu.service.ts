import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  _title = 'Home'
  
  selections = [
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

  constructor() { }

  setTitle(title: string){
  	this._title = title;
  }

  getTitle(){
  	return this._title;
  }

  get_selections(){
    return this.selections;
  }
}

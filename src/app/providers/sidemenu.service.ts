import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

	_title = 'Home'

  constructor() { }

  setTitle(title: string){
  	this._title = title;
  }

  getTitle(){
  	return this._title;
  }
}

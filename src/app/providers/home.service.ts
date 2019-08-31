import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  services = [
  {
    'title' : 'Cleaning',
    'url' : '/sidemenu/cleaning',
    'icon' : '../../../assets/images/cleaning.jpg'
  },
  {
    'title' : 'Electronics',
    'url' : '/sidemenu/electronics',
    'icon' : '../../../assets/images/electronics.jpg'
  },
  {
    'title' : 'Assembly',
    'url' : '/sidemenu/assembly',
    'icon' : '../../../assets/images/assembly.jpg'
  },
  {
    'title' : 'Plumbing',
    'url' : '/sidemenu/plumbing',
    'icon' : '../../../assets/images/plumbing.jpg'
  },
  {
    'title' : 'Housing/Office',
    'url' : '/sidemenu/housingoffice',
    'icon' : '../../../assets/images/housingoffice.jpg'
  },
  {
    'title' : 'Delivery',
    'url' : '/sidemenu/delivery',
    'icon' : '../../../assets/images/delivery.jpg'
  },
  {
    'title' : 'Moving',
    'url' : '/sidemenu/moving',
    'icon' : '../../../assets/images/moving.jpg'
  },
  {
    'title' : 'Storage',
    'url' : '/sidemenu/storage',
    'icon' : '../../../assets/images/storage.jpg'
  }
]

ads = [
  {
    url:'../../../assets/images/shop2.jpg'
  },
  {
    url:'../../../assets/images/shop3.jpg'
  },
  {
    url:'../../../assets/images/shop4.jpg'
  }
]

worksContent = [
  {
    heading : "Select Service",
    body : "Select the type of service you like to get completed with our assistant",
    image : "../../../assets/se.gif"
  },
  {
    heading : "Location Information",
    body : "Share information of location where the selected service is to be accomplished",
    image : "../../../assets/ll.gif"
  },
  {
    heading : "Payment",
    body : "Pay once the job is completed",
    image : "../../../assets/pp.gif"
  }
]

  get_services(){
    return this.services;
  }

  get_ads(){
    return this.ads;
  }

  get_worksContent(){
    return this.worksContent;
  }



}

  /* 
  Simple HTTP get and post request example

  baseUrl = 'http://127.0.0.1:5000'

  constructor(private httpClient: HttpClient) { }

  get_products(){
    this.httpClient.get(this.baseUrl + '/').subscribe((res)=>{
        console.log(res);
    });
  }

  post_request(){
    this.httpClient.post(this.baseUrl + '/add',{'id':'12','name':'tejas'}).subscribe((res)=>{
      console.log(res);
    });
  }

  */

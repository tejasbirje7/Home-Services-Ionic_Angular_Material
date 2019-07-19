import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SidemenuService } from '../../providers/sidemenu.service';
import { NavController,IonSlides } from '@ionic/angular';
import { HomeService } from '../../providers/home.service';
import { MatDialogRef, MatDialog ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  category = '';
  selectedPath = ""
  pages = [
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
  ];
  items = [
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
  cardsContent = [
    {
      heading : "Select Service",
      body : "Select the type of service you like to get completed with our assistant",
      //image : "../../../assets/selectservice.jpg"
      image : "../../../assets/se.gif"
    },
    {
      heading : "Location Information",
      body : "Share information of location where the selected service is to be accomplished",
      //image : "../../../assets/location.jpg"
      image : "../../../assets/ll.gif"
    },
    {
      heading : "Payment",
      body : "Pay once the job is completed",
      //image : "../../../assets/payment.jpg"
      image : "../../../assets/pp.gif"
    }
  ]
  slides: IonSlides;


   sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 2.6
  };

  slideOptsOne = {
   initialSlide: 0,
   slidesPerView: 1,
   autoplay:true
  };

  slideOpts = {
    slidesPerView: 2.5,
    freeMode: true,
    initialSlide: 0,
    autoplay:true,
    spaceBetween: 10
  };

  constructor(private router: Router,
     private sideMenuService: SidemenuService,
      private navCtrl: NavController,
      private dialog: MatDialog,
      private homeService: HomeService) { 
    this.router.events
    .subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    //this.homeService.get_products();
    //this.homeService.post_request();
    console.log("In home page");
  }
  
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  setTitle(title: string){
    console.log("title :",title);
    this.sideMenuService.setTitle(title);
  }

  openDialog(cat : string): void {
    console.log("category is :", cat);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      height: '250px',
      data: {category: cat}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.category = cat;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {


  services = ['home','office','local place'];
  serv = ''
 
  appDetailsForm: FormGroup = this._formBuilder.group({
    'name': ['', Validators.required],
    'address': [null, Validators.maxLength(200)],
    'service': [this.services, Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  category: string;
}

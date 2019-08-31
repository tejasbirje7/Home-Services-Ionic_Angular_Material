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
  services = [];
  ads = [];
  worksContent = [];
  slides: IonSlides;

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
      private dialog: MatDialog,
      private homeService: HomeService) { 
    this.router.events
    .subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
<<<<<<< HEAD
=======
    //this.homeService.get_products();
    //this.homeService.post_request();
>>>>>>> 6ae1d2482bd8bb4411ebce77dd9f4a1dc18f7356
    console.log("In home page");
    this.services = this.homeService.get_services();
    this.ads = this.homeService.get_ads();
    this.worksContent = this.homeService.get_worksContent();
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

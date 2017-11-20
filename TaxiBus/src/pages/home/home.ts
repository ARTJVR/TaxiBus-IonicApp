import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapsPage} from "./maps/maps";
import {ReserverPage} from "./reserver/reserver";
import {InformationPage} from "./information/information"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {
    
  }
  

  
  showReserver(){
    this.navCtrl.push(ReserverPage);
  }
   showMaps(){
    this.navCtrl.push(MapsPage);
    
  }
  showInformation(){
    this.navCtrl.push(InformationPage);
  }

}

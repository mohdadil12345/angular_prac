import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { OnlineStatusService } from '../onlinestatus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {



   menu : any[] = []

constructor(private x : FoodserviceService, private status : OnlineStatusService) {
     
}


getAllMenus() {
  if(this.status.isOnline){
    this.x.getData().subscribe((data) => {
      console.log("data", data)
      this.menu = data
    })
  }else{
    let lsdata = JSON.parse(localStorage.getItem("offline_prod") || "[]");
    this.menu = lsdata
    
  }



}

ngOnInit(): void {
  this.getAllMenus()


}







}

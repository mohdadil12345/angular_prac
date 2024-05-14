import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {



   menu : any[] = []

constructor(private x : FoodserviceService) {
     
}


getAllMenus() {
   this.x.getData().subscribe((data) => {
       console.log("data", data)
       this.menu = data
   })


}

ngOnInit(): void {
  this.getAllMenus()


}







}

import { Component } from '@angular/core';
import { OnlineStatusService } from '../onlinestatus.service';
import { NgForm } from '@angular/forms';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-addmenus',
  templateUrl: './addmenus.component.html',
  styleUrl: './addmenus.component.scss'
})
export class AddmenusComponent {


  title : string = ""
  image : string = ""
  price : string = ""
  category : string = ""


  constructor(private foodService: FoodserviceService, private statusService: OnlineStatusService,) {
    
  }

  handle_form(ele : NgForm) {
    
  console.log(ele.value)
  // console.log(ele.value.title)


  if (!this.statusService.isOnline) {
    let lsdata = JSON.parse(localStorage.getItem("offline_prod") || "[]");
    lsdata.push(ele.value);
    localStorage.setItem("offline_prod", JSON.stringify(lsdata));
  } else {
    this.foodService.addData(ele.value).subscribe(() => {
      console.log('Item added to server:', ele.value);
    });
    this.foodService.getData()
  }

  alert("Item added");
    



  }

}

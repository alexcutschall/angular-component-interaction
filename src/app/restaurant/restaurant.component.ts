import { Component, OnInit } from '@angular/core';
import { ITEMS, MenuItem } from './../menu-item';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  items = ITEMS;
  newItems = [];
  sir = 'Sir';

  constructor() { }

  ngOnInit() {
  }

  onMenuItemAdded(itemInformation) {
    let item = new MenuItem (itemInformation.name, itemInformation.amount);
    this.newItems.push(item);
  }

}

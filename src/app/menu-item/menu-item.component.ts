import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit { 

  @Output() menuItemCreated = new EventEmitter<{name: string, amount: number}>();
  newMenuName = "";
  newMenuAmount = 0;
  constructor() { }

  ngOnInit() {
  }

  addMenuItem() {
    this.menuItemCreated.emit({name: this.newMenuName, amount: this.newMenuAmount});
  }

}

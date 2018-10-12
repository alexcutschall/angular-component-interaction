import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  @Input() item: MenuItem;
  @Input('greeting') sir: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
})
export class HeroChildComponent implements OnInit {

  @Output() heroCreated = new EventEmitter<{name: string, power: string}>();
  newHeroName = '';
  newHeroPower = '';
  
  constructor() { }

  ngOnInit() {
  } 

  addHero() {
    this.heroCreated.emit({name: this.newHeroName, power: this.newHeroPower});
  }  

}

import { Component, OnInit, Output } from '@angular/core';

import { HEROES, Hero } from './../hero';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  heroes = HEROES;
  newHeroes = [];
  
  constructor() { }

  ngOnInit() {
  }

  onHeroAdded(heroInformation) {
    let hero = new Hero (heroInformation.name, heroInformation.power);
    this.newHeroes.push(hero)
  }
 

}

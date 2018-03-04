import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../sat-mock-heroes';
 
@Component({
  selector: 'app-saturday-heroes',
  templateUrl: './saturday-heroes.component.html',
  styleUrls: ['./saturday-heroes.component.css']
})
export class SaturdayHeroesComponent implements OnInit {
 
  heroes = HEROES;

  selectedHero: Hero;
 
  constructor() { }
 
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
}
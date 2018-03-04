import { Component, OnInit } from '@angular/core';
import { satHero } from '../satHero';

@Component({
  selector: 'app-saturday-heroes',
  templateUrl: './saturday-heroes.component.html',
  styleUrls: ['./saturday-heroes.component.css']
})
export class SaturdayHeroesComponent implements OnInit {
  hero: satHero = {
    id: 1,
    name: 'Windstrom'
  };

  constructor() { }

  ngOnInit() {
  }

}

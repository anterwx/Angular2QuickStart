import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "./hero";
import {HeroService} from './hero.service';

@Component({
    moduleId : module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [`heroes.component.css`]
})
export class HeroesComponent implements OnInit{
    selectedHero : Hero;
    heroes : Hero[];

    /**
     * 注入服务
     * @param heroService
     */
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit():void{
        this.getHeroes();
    }

    getHeroes(): void{
         this.heroService.getHeroesSlowly().then(heroes =>this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }
}

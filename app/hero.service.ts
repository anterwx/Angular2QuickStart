import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/**
 * 服务可被注入
 */
@Injectable()
export class HeroService{

   /* getHeroes() : Hero[]{
        return HEROES;
    }*/

    getHeroes() : Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero[]>(resolve => setTimeout(resolve,2000)).then(() =>this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }


}
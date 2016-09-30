import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


/**
 * 服务可被注入
 */
@Injectable()
export class HeroService{

   /* getHeroes() : Hero[]{
        return HEROES;
    }*/

    /*getHeroes() : Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }*/

    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }


    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero[]>(resolve => setTimeout(resolve,2000)).then(() =>this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
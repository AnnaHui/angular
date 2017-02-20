import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'feature.component.html',
    // providers: [HeroService]
})
export class FeatureComponent implements OnInit {
    constructor(private http : Http) { }
    // constructor(private service : Service) {}

    posts: any[];

    ngOnInit() { 
        // this.heroes = this.service.getHeroes();
        this.http.get('/api/articles.json')
            .map(res => res.json())
            .subscribe( (obj) => {
                this.posts = obj
            })
    }

    // selectHero(hero: Hero) {
    //     this.selectedHero = hero
    // }
}


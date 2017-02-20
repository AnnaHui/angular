import { Component, OnInit } from '@angular/core';

import { Article } from '../constructor/article';
import { DataService } from '../shared/data.service';

@Component({
    moduleId: module.id,
    selector: 'app-article',
    templateUrl: 'article.component.html',
    styleUrls: ['article.component.scss']
})
export class ArticleComponent implements OnInit {

    articles: Article[];

    constructor( private ds: DataService ) { }

    ngOnInit() { 
        this.ds
            .getBlogList()
            .subscribe(data => this.articles = data);
    }
}

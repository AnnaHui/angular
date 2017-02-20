import { Component, OnInit } from '@angular/core';

import { Article } from '../constructor/article';
import { DataService } from '../shared/data.service';

@Component({
    moduleId: module.id,
    selector: 'app-right-list',
    templateUrl: 'right-list.component.html',
    styleUrls: ['right-list.component.scss']
})
export class RightListComponent implements OnInit {
    
    articles: Article[];

    sorts = [
        'Design Mind', 
        'About ZealMass | 關於群悅',
        '產品設計ID',
        '介面設計 | GUI',
        '攝影',
        '影像合成',
        '插畫繪圖',
        'Animation | 動畫影片',
        '科技新知',
        '粉絲團連結'
    ];
    constructor( private ds: DataService ) {}

    model = new Article('a', 'b', 'c', 'd', 'e', 'F');

    submitted = false;

    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.model); }

    newPower(){
        this.model = new Article('a', '', '', '', 'e', 'F');
    }

    //search
    onEnter(value: string){
        if(value){
            this.sorts.push(value)
        }
    }

    ngOnInit() { 
        this.ds
            .getBlogList()
            .subscribe(data => this.articles = data);
    }

    
}




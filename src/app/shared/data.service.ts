import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    url = './api/blog.json';

    constructor(private http: Http) {}

    
    getBlogList() { 
        return this.http
                   .get(this.url)
                   .map(res => res.json());
    }
}
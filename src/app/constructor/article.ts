export class Article {
    constructor(
        public imageurl: string,
        public date: string,
        public category: string,
        public title: string,
        public summary: string,
        public alterEgo?: string    //notice ?    
    ) { }
 }

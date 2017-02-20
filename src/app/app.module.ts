import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { RightListComponent } from './right/right-list.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './shared/data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    ArticleComponent,
    RightListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

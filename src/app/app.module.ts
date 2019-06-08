import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { LocalizationComponent } from './localization/localization.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    DescriptionComponent,
    LocalizationComponent,
    CarouselComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AngularFontAwesomeModule,
    ScrollToModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

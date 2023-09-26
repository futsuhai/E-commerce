import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header/header.component';
import { FooterComponent } from './components/layout/footer/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page/home-page.component';
import { AuthPageComponent } from './components/pages/auth-page/auth-page/auth-page.component';
import { AppRoutingModule } from './components/routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

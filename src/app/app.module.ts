import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ChildComponent } from 'src/app/pages/child/child.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent,
    HomeComponent,
    ChildComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

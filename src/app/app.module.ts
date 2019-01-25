import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './/app-routing.module';
import { AppMaterialModule } from './/app-material.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { HighchartsChartModule } from 'highcharts-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { ChapchapLoginComponent } from './chapchap-login/chapchap-login.component';
import { ChapNavComponent } from './shared/chap-nav/chap-nav.component';
import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { ChapchapStatisticsComponent } from './stats/chapchap-statistics/chapchap-statistics.component';

// added icons to library for all access in all components
library.add(faFacebook, faTwitter, faWhatsapp, faLinkedin, faEnvelope);
@NgModule({
  declarations: [
    AppComponent,
    ChapchapLoginComponent,
    ChapNavComponent,
    ChapDashboardComponent,
    ChapchapStatisticsComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HighchartsChartModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer) {

    overlayContainer.getContainerElement().classList.add('chapchap-light-theme');

  }

 }

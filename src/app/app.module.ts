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
import { ChapAdminComponent } from './admin/chap-admin/chap-admin.component';
import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { ChapchapStatisticsComponent } from './stats/chapchap-statistics/chapchap-statistics.component';
import { ChapchapHelpComponent } from './help/chapchap-help/chapchap-help.component';
import { ChapchapMonitorPanelComponent } from './monitor/chapchap-monitor-panel/chapchap-monitor-panel.component';
import { ChapchapMonitorMapComponent } from './monitor/chapchap-monitor-map/chapchap-monitor-map.component';
import { ChapchapMonitorTransactComponent } from './monitor/chapchap-monitor-transact/chapchap-monitor-transact.component';
import { ChapchapContactComponent } from './shared/chapchap-contact/chapchap-contact.component';
import { ChapchapDistributorChatComponent } from './shared/chapchap-distributor-chat/chapchap-distributor-chat.component';
import { ChapchapDistributorChatlistComponent } from './shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component';

// added icons to library for all access in all components
library.add(faFacebook, faTwitter, faWhatsapp, faLinkedin, faEnvelope);
@NgModule({
  declarations: [
    AppComponent,
    ChapchapLoginComponent,
    ChapNavComponent,
    ChapDashboardComponent,
    ChapchapStatisticsComponent,
    ChapAdminComponent,
    ChapchapHelpComponent,
    ChapchapMonitorPanelComponent,
    ChapchapMonitorMapComponent,
    ChapchapMonitorTransactComponent,
    ChapchapContactComponent,
    ChapchapDistributorChatComponent,
    ChapchapDistributorChatlistComponent
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
  entryComponents: [
    ChapchapDistributorChatlistComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer) {

    overlayContainer.getContainerElement().classList.add('chapchap-light-theme');

  }

 }

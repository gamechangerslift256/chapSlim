import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
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
import { ChapchapProductsalesComponent } from './stats/chapchap-productsales/chapchap-productsales.component';
import { ChapchapProductsalesgrowthComponent } from './stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component';
import { ChapchapProductsalespieComponent } from './stats/chapchap-productsalespie/chapchap-productsalespie.component';
import { ChapchapRevenueTableComponent } from './model/chapchap-revenue-table/chapchap-revenue-table.component';
import { ChapchapSalesTableComponent } from './model/chapchap-sales-table/chapchap-sales-table.component';
import { ChapchapadminMainComponent } from './admin/chapchapadmin-main/chapchapadmin-main.component';
import { ChapchapadminEmplistComponent } from './admin/chapchapadmin-emplist/chapchapadmin-emplist.component';
import { ChapchapadminDistributorslistComponent } from './admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component';
import { ChapchapadminAdduserComponent } from './admin/chapchapadmin-adduser/chapchapadmin-adduser.component';
import { ChapchapDistributorTableComponent } from './model/chapchap-distributor-table/chapchap-distributor-table.component';
import { ChapchapSettingsComponent } from './chapchap-settings/chapchap-settings.component';
import { ChapchapDistributorAddnewComponent } from './shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component';

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
    ChapchapDistributorChatlistComponent,
    ChapchapProductsalesComponent,
    ChapchapProductsalesgrowthComponent,
    ChapchapProductsalespieComponent,
    ChapchapRevenueTableComponent,
    ChapchapSalesTableComponent,
    ChapchapadminMainComponent,
    ChapchapadminEmplistComponent,
    ChapchapadminDistributorslistComponent,
    ChapchapadminAdduserComponent,
    ChapchapDistributorTableComponent,
    ChapchapSettingsComponent,
    ChapchapDistributorAddnewComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HighchartsChartModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    ChapchapDistributorChatlistComponent,
    ChapchapDistributorAddnewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer) {

    overlayContainer.getContainerElement().classList.add('chapchap-light-theme');

  }

 }

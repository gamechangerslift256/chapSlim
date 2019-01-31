import { ChapchapHelpComponent } from './help/chapchap-help/chapchap-help.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapchapLoginComponent } from './chapchap-login/chapchap-login.component';
import { ChapNavComponent } from './shared/chap-nav/chap-nav.component';
import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { ChapchapStatisticsComponent } from './stats/chapchap-statistics/chapchap-statistics.component';
import { ChapAdminComponent } from './admin/chap-admin/chap-admin.component';
import { ChapchapMonitorPanelComponent } from './monitor/chapchap-monitor-panel/chapchap-monitor-panel.component';
import { ChapchapRevenueTableComponent } from './model/chapchap-revenue-table/chapchap-revenue-table.component';
import { ChapchapSalesTableComponent } from './model/chapchap-sales-table/chapchap-sales-table.component';
import { ChapchapDistributorTableComponent } from './model/chapchap-distributor-table/chapchap-distributor-table.component';
import { ChapchapSettingsComponent } from './chapchap-settings/chapchap-settings.component';

const routes: Routes = [
                          {
                              path: '',
                              redirectTo: '/login',
                              pathMatch: 'full'
                          },
                          {
                              path: 'login',
                            component: ChapchapLoginComponent
                          },
                          {
                            path: 'nav',
                            component: ChapNavComponent
                          },
                          {
                              path: 'dashboard',
                              component: ChapDashboardComponent
                          },
                          {
                              path: 'stats',
                            component: ChapchapStatisticsComponent
                          },
                          {
                              path: 'admin',
                            component: ChapAdminComponent
                          },
                          {
                              path: 'help',
                            component: ChapchapHelpComponent
                          },
                          {
                              path: 'monitor',
                            component: ChapchapMonitorPanelComponent
                          },
                          {
                              path: 'revenue',
                            component: ChapchapRevenueTableComponent
                          },
                          {
                              path: 'sales',
                            component: ChapchapSalesTableComponent
                          },
                          {
                              path: 'distributors',
                            component: ChapchapDistributorTableComponent
                          },
                          {
                              path: 'settings',
                            component: ChapchapSettingsComponent
                          }
                        ];

@NgModule({
  imports: [
              RouterModule.forRoot(routes)
           ],
  exports: [
            RouterModule
           ]

})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapchapLoginComponent } from './chapchap-login/chapchap-login.component';
import { ChapNavComponent } from './shared/chap-nav/chap-nav.component';
import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { ChapchapStatisticsComponent } from './stats/chapchap-statistics/chapchap-statistics.component';


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

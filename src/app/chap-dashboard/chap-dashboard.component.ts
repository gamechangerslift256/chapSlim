import { Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-chap-dashboard',
  templateUrl: './chap-dashboard.component.html',
  styleUrls: ['./chap-dashboard.component.scss'],

})
export class ChapDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'business_center', cvalue: '335BN', cunit: 'UGX',
            trend_icon: 'trending_up', trend: '80.0%', trend_color: 'primary',
            tool_tip: 'The total revenue got from sales'
          },
          {
            title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
            trend_icon: 'trending_down', trend: '26.4%', trend_color: 'warn',
            tool_tip: 'The total sales up to now'
          }
        ];
      }

      return [
        {
          title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'monetization_on', cvalue: '335BN', cunit: 'UGX',
          trend_icon: 'trending_up', trend: '80.5%', trend_color: 'primary',
          tool_tip: 'The total revenue got from sales'
        },
        {
          title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
          trend_icon: 'trending_down', trend: '26.4%', trend_color: 'warn',
          tool_tip: 'The total sales up to now'
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

}

import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from './../../model/company.model';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-chap-nav',
  templateUrl: './chap-nav.component.html',
  styleUrls: ['./chap-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ChapNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

      company: Company = {
        company_name: 'Unilever'
      };

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/19'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/19'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/19'),
    }
  ];

}

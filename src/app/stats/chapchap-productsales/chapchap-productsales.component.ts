declare var require: any;

import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';


const HC_exporting = require('highcharts/modules/exporting');
const HC_sl = require('highcharts/modules/series-label');
const HC_drill = require('highcharts/modules/drilldown');
const HC_exportdata = require('highcharts/modules/export-data');

HC_exporting(Highcharts);
HC_sl(Highcharts);
HC_drill(Highcharts);
HC_exportdata(Highcharts);

@Component({
  selector: 'app-chapchap-productsales',
  templateUrl: './chapchap-productsales.component.html',
  styleUrls: ['./chapchap-productsales.component.scss']
})
export class ChapchapProductsalesComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Product Sales by category',
      style: {
        color: '#F73233'
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total '
      }

    },
    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        },
        colors: [
          '#4267b2',
          '#3cba54',
          '#F73233'
        ]
      }
    },

    series: [{
      name: 'Products',
      colorByPoint: true,
      data: [{
        name: 'Homecare',
        y: 6,
        drilldown: 'homecare'
      }, {
        name: 'Personal',
        y: 10,
        drilldown: 'personal'
      }, {
        name: 'Food',
        y: 6,
        drilldown: 'food'
      }]
    }],
    drilldown: {
      title: {
        text: 'Product Sales for Homecare category'
      },
      series: [{
        id: 'homecare',
        name: 'Homecare',
        data: [
          {
            name: 'Sunlight',
            y: 45,
            drilldown: 'sunlight'
          }, {
            name: 'Omo',
            y: 45,
            drilldown: 'omo'
          }, {
            name: 'vim',
            y: 45,
            drilldown: 'vim'
          }, {
            name: 'Clear',
            y: 45,
            drilldown: 'clear'
          }, {
            name: 'Comfort',
            y: 45,
            drilldown: 'comfort'
          }, {
            name: 'Domex',
            y: 45,
            drilldown: 'domex'
          }, {
            name: 'Rin',
            y: 45,
            drilldown: 'rin'
          }
        ]
      }, {
        id: 'sunlight',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62,
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'omo',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'vim',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'clear',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'comfort',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'domex',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'rin',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'personal',
        data: [
          {
            name: 'Axe',
            y: 74,
            drilldown: 'axe'
          }, {
            name: 'Close Up',
            y: 62,
            drilldown: 'closeUp'
          }, {
            name: 'Dove',
            y: 51,
            drilldown: 'dove'
          }, {
            name: 'Fair & Lovely',
            y: 48,
            drilldown: 'fair'
          }, {
            name: 'Lifebouy',
            y: 42,
            drilldown: 'lifebouy'
          }, {
            name: 'Lux',
            y: 40,
            drilldown: 'lux'
          }, {
            name: 'Rexona',
            y: 39,
            drilldown: 'rexona'
          }, {
            name: 'Sure',
            y: 35,
            drilldown: 'sure'
          }, {
            name: 'Vaseline',
            y: 31,
            drilldown: 'vaseline'
          }
        ]
      }, {
        id: 'axe',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'closeUp',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'dove',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'fair',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'lifebouy',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'lux',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'rexona',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'sure',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'vaseline',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'food',
        data: [
          {
            name: 'Lipton tea',
            y: 65,
            drilldown: 'lipton'
          }, {
            name: 'Knorr',
            y: 57,
            drilldown: 'knorr'
          }, {
            name: 'Kissan',
            y: 43,
            drilldown: 'kissan'
          }, {
            name: 'Blueband',
            y: 38,
            drilldown: 'blueband'
          }, {
            name: 'Bru coffee',
            y: 24,
            drilldown: 'brucoffee'
          }, {
            name: 'PiKwalitu Walls',
            y: 16,
            drilldown: 'pikwa'
          }]
      }, {
        id: 'lipton',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'knorr',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'kissan',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'blueband',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'brucoffee',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }, {
        id: 'pikwa',
        data: [
          {
            name: 'North',
            y: 74
          }, {
            name: 'East',
            y: 62
          }, {
            name: 'Central',
            y: 51
          }, {
            name: 'West',
            y: 44
          }
        ]
      }
      ],
    }
  };

  constructor() { }

  ngOnInit() {
  }

}

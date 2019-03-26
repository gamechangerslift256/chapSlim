import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChapchaprestService } from '../../shared/chapchaprest.service';
import { DistributorProfile } from './../distributor.model';


export class RestDataSource implements OnInit {

    /*
    getProducts(): Observable<DistributorProfile[]> {
        return this.http.get<DistributorProfile[]>(this.baseUrl + 'products');
    }
    */


    distro: any = [];

    constructor(
        private restService: ChapchaprestService
    ) { }

    ngOnInit() {
        this.getDistributors();
    }

    getDistributors() {
        this.distro = [];
        this.restService.getDistributors().subscribe((data: {}) => {
            console.log(data);
            this.distro = data;
        });
    }
}

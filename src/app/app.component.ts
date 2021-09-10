import {Component, OnInit} from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  columnDefs = [
       {field: 'ID', sortable: true, filter: true},
       {field: 'Nome', sortable: true, filter: true},
       {field: 'Estado', sortable: true, filter: true}
   ];

   rowData: City[] = [];

   constructor(private carService: CityService) { }
   
   ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.carService.getCities().subscribe(cities => this.rowData = cities);
  } 

}
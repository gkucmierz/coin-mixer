import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {
  address: string;

  selectedValue: number;

  amounts = [
    { value: 0, viewValue: '5 BTC' },
    { value: 1, viewValue: '2 BTC' },
    { value: 2, viewValue: '1 BTC' },
    { value: 3, viewValue: '0.5 BTC' },
    { value: 4, viewValue: '0.2 BTC' },
    { value: 5, viewValue: '0.1 BTC' },
    { value: 6, viewValue: '0.05 BTC' },
    { value: 7, viewValue: '0.02 BTC' },
    { value: 8, viewValue: '0.01 BTC' }
  ];

  constructor (private data: DataService) {}

  next() {
    this.data.get('http://localhost:8080')
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() {
  }

}

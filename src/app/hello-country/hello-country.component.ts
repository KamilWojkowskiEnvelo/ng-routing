import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-country',
  templateUrl: './hello-country.component.html',
  styleUrls: ['./hello-country.component.scss'],
})
export class HelloCountryComponent implements OnInit {
  countryCode = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.countryCode = this.route.snapshot.params['id'];
  }
}

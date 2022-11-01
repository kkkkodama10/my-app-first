import { products } from './../../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodact-listing',
  templateUrl: './prodact-listing.component.html',
  styleUrls: ['./prodact-listing.component.scss']
})
export class ProdactListingComponent implements OnInit {

  products:any = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
  }

}

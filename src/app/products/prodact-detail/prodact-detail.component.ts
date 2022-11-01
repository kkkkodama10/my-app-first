import { products } from './../../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodact-detail',
  templateUrl: './prodact-detail.component.html',
  styleUrls: ['./prodact-detail.component.scss']
})
export class ProdactDetailComponent implements OnInit {
  product: any;
  constructor(private route : ActivatedRoute) { }

  // ngOnInit(): void {
  // }
  ngOnInit(){
      this.route.paramMap.subscribe(params =>
        this.product = products[+params.get('productId')!])
  }

}

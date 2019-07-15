import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Album} from '../album';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response)
  }

}

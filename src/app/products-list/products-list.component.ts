import { Product } from './../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * @ProductsList: A component for rendering all ProductRows and storing the currently selected Product
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  ngOnInit() {}

  clicked(product: Product): void {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }
}

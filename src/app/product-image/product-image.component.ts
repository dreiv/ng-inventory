import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() imageUrl: string;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {}

  ngOnInit() {}
}

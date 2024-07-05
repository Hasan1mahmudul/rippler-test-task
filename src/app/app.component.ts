import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rippler-test-task';

  products = [
    {
      src: '../../../assets/product-images/Image-Master.png',
      price: 129.99,
      brand: 'Burberry',
      title: 'Flowy Dress with Pink and Gold',
      size: '4',
      rent_price: 12.00
    },  
    {
      src: '../../../assets/product-images/Image-Master-1.png',
      price: 129.99,
      brand: 'Prada',
      title: 'Beach Dress ',
      size: '8',
      rent_price: 12.00
    },
    {
      src: '../../../assets/product-images/Image-Master-2.png',
      price: 129.99,
      brand: 'Bhandage',
      title: 'Red Dress for evening wear',
      size: '12',
      rent_price: 12.00
    },
    {
      src: '../../../assets/product-images/Image-Master-3.png',
      price: 129.99,
      brand: 'Prada',
      title: 'Wedding Guest',
      size: '12',
      rent_price: 12.00
    },
    {
      src: '../../../assets/product-images/Image-Master-4.png',
      price: 129.99,
      brand: 'Ansell',
      title: 'NightWear',
      size: '12',
      rent_price: 12.00
    },
    {
      src: '../../../assets/product-images/Image-Master-5.png',
      price: 129.99,
      brand:'Desacade',
      title: 'Summer Dress',
      size: '14',
      rent_price: 12.00
    }
  ];
}

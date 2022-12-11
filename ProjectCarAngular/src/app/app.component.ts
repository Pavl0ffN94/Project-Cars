import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  });

  carsData = [
    {
      image: '1.png',
      name: 'Lamborghini Huracan Spyder',
      gear: 'автомат',
      engene: 5.2,
      year: 2019,
    },
    {
      image: '2.png',
      name: 'Chevrolet Corvette',
      gear: 'автомат',
      engene: 6.2,
      year: 2017,
    },
    {
      image: '3.png',
      name: 'Ferrari California',
      gear: 'автомат',
      engene: 3.9,
      year: 2010,
    },
    {
      image: '4.png',
      name: 'Lamborghini Urus',
      gear: 'автомат',
      engene: 3.9,
      year: 2010,
    },
    {
      image: '5.png',
      name: 'Audi R8',
      gear: 'автомат',
      engene: 5.2,
      year: 2018,
    },
    {
      image: '6.png',
      name: 'Chevrolet Camaro',
      gear: 'автомат',
      engene: 2.0,
      year: 2019,
    },
    {
      image: '7.png',
      name: 'Maserati Quattroporte',
      gear: 'автомат',
      engene: 3.0,
      year: 2018,
    },
    {
      image: '8.png',
      name: 'Dodge Challenger',
      gear: 'автомат',
      engene: 6.4,
      year: 2018,
    },
    {
      image: '9.png',
      name: 'Nissan GT-R',
      gear: 'автомат',
      engene: 3.8,
      year: 2019,
    },
  ];

  constructor(private fb: FormBuilder) {}
  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({ behavior: 'smooth' });
    if (car) {
      this.priceForm.patchValue({ car: car.name });
    }
  }
  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {
      transform:
        'translate3d(' +
        (e.clientX * 0.3) / 8 +
        'px,' +
        (e.clientY * 0.3) / 8 +
        'px,0px)',
    };
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = { backgroundPositionX: '0' + 0.3 * window.scrollY + 'px' };
  }
  oneSubmit() {
    if (this.priceForm.valid) {
      alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время');
      this.priceForm.reset();
    }
  }
}

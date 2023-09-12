import { Component } from '@angular/core';
import { MusicalInstrument } from 'src/app/models/MusicalInstrument';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css'],
})
export class InstrumentosComponent {
  musicalInsList: Array<MusicalInstrument> = [
    {
      name: 'Korg X5D',
      description: 'A synthesizer used by cumbia´s bands',
      imageSRC:
        'https://files.soniccdn.com/images/products/original/218/korg-x5d-23218.jpg',
    },
    {
      name: 'Roland D50',
      description: 'A synthesizer used by cumbia´s bands',
      imageSRC:
        'https://static.roland.com/assets/images/products/gallery/rc_d-50_gal.jpg?_ga=2.175881890.1631167708.1693943851-1259623013.1693943851',
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { MusicalInstResp } from 'src/app/models/musicalInstrument';
import { InstrumentsService } from 'src/app/services/instruments.service';
@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css'],
})
export class InstrumentosComponent implements OnInit {
  // musicalInsList: Array<MusicalInstrument> = [
  //   {
  //     name: 'Korg X5D',
  //     description: 'A synthesizer used by cumbia´s bands',
  //     image:
  //       'https://files.soniccdn.com/images/products/original/218/korg-x5d-23218.jpg',
  //   },
  //   {
  //     name: 'Roland D50',
  //     description: 'A synthesizer used by cumbia´s bands',
  //     image:
  //       'https://static.roland.com/assets/images/products/gallery/rc_d-50_gal.jpg?_ga=2.175881890.1631167708.1693943851-1259623013.1693943851',
  //   },
  //   {
  //     name: 'Yamaha DX7',
  //     description: 'A synth used by rock bands like A-ha',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/YAMAHA_DX7.jpg/1024px-YAMAHA_DX7.jpg',
  //   },
  // ];
  musicalInsList: Array<MusicalInstResp> = [];
  constructor(private instService: InstrumentsService) {}
  ngOnInit(): void {
    this.getInstruments();
  }
  getInstruments(): void {
    // this.instService.getInstruments().subscribe((instrumentos) => {
    //   this.musicalInsList = instrumentos.map(
    //     (i: { name: any; image: any; description: any }) => ({
    //       name: i.name,
    //       imageSRC: i.image,
    //       description: i.description,
    //     })
    //   );
    // });

    this.instService.getInstruments().subscribe((instrumentos) => {
      this.musicalInsList = instrumentos;
    });
  }
}

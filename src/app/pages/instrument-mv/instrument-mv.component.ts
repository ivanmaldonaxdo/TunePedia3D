import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicalInstResp } from 'src/app/models/musicalInstrument';
import { InstrumentsService } from 'src/app/services/instruments.service';

@Component({
  selector: 'app-instrument-mv',
  templateUrl: './instrument-mv.component.html',
  styleUrls: ['./instrument-mv.component.css']
})
export class InstrumentMvComponent implements OnInit{
  slug!: string;
  instrument!: MusicalInstResp;
  urlFile:string="";
  constructor(private route:ActivatedRoute, private instService: InstrumentsService){}
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id'];
    this.getInstrument();
}
  
  getInstrument(): void{
    this.instService.getInstrument(this.slug).subscribe((ins) => {
      this.instrument = ins[0]
      if (this.instrument && this.instrument.glbModel) {

        this.urlFile = this.instService.getURLFile(ins[0].glbModel)
      }
      console.log(ins)
      
      
    });
       // Verificar si instrument.glbModel es definido antes de obtener la URL del archivo

  }
  // getURLFile(){
  //     this.urlFile = this.instService.getURLFile(this.instrument.glbModel);
  //     console.log(this.urlFile);
      

  // }

}

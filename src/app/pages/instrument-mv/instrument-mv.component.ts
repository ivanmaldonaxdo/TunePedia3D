import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicalInstResp } from 'src/app/models/musicalInstrument';
import { InstrumentsService } from 'src/app/services/instruments.service';

@Component({
  selector: 'app-instrument-mv',
  templateUrl: './instrument-mv.component.html',
  styleUrls: ['./instrument-mv.component.css'],
})
export class InstrumentMvComponent implements OnInit, AfterViewInit{
  slug!: string;
  instrument!: MusicalInstResp;
  urlFile: string = '';

  @ViewChild('mViewer')
  modelVw!: ElementRef;

  @ViewChild('imgDetail') 
  imgDetail!: ElementRef;
  marginTop:string = "0px"

  @ViewChild('audioConfig')
  audioConfig!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private instService: InstrumentsService,
    private renderer: Renderer2
  ) {}
  ngAfterViewInit(): void {
    // console.log(getComputedStyle(this.modelVw.nativeElement).height);
    // const mvHeight = getComputedStyle(this.modelVw.nativeElement).height
    const px = this.getPX().replace('px','')
    const padding = parseInt(px)+40;
    this.marginTop = `${padding}px`

    /**
     * Ajuste de nivel de volumen por defecto
     */
    this.audioConfig.nativeElement.volume = 0.18;
  
  }
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id'];
    this.getInstrument();
    
  }

  /**
   * Se obtiene intrumento desde 
   */
  getInstrument(): void {
    this.instService.getInstrument(this.slug).subscribe((ins) => {
      this.instrument = ins[0];
      if (this.instrument && this.instrument.glbModel) {
        this.urlFile = this.instService.getURLFile(ins[0].glbModel);
      }
      console.log(ins);
    });
  
    // Verificar si instrument.glbModel es definido antes de obtener la URL del archivo
  }
  getPX(){
    if(this.urlFile != ''){
      return getComputedStyle(this.modelVw.nativeElement).height;
    }
    return getComputedStyle(this.imgDetail.nativeElement).height;
  }
  // getURLFile(){
  //     this.urlFile = this.instService.getURLFile(this.instrument.glbModel);
  //     console.log(this.urlFile);

  // }
}

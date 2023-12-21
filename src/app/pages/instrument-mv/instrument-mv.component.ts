import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicalInstResp } from 'src/app/models/musicalInstrument';
import { InstrumentsService } from 'src/app/services/instruments.service';

@Component({
  selector: 'app-instrument-mv',
  templateUrl: './instrument-mv.component.html',
  styleUrls: ['./instrument-mv.component.css'],
})
export class InstrumentMvComponent implements OnInit, AfterViewInit, OnDestroy{
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

  isPhoneScreen: boolean = false;
  
  private mediaQueryList!: MediaQueryList;
  private mediaQueryListener!: () => void;

  constructor(
    private route: ActivatedRoute,
    private instService: InstrumentsService,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,  // Importa ChangeDetectorRef
    private zone: NgZone
  ) {
    // Configurar un observador de medios para detectar cambios en la pantalla
    this.mediaQueryList = window.matchMedia('(max-width: 500px)');
    this.isPhoneScreen = this.mediaQueryList.matches;

    this.mediaQueryListener = () => {
      this.zone.run(() => {
        this.isPhoneScreen = this.mediaQueryList.matches;
        this.calculateMarginTop();
        this.cdr.detectChanges();
      });
    };

    this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
  

  }
  ngOnDestroy(): void {
    this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
  }
  ngAfterViewInit(): void {
    // console.log(getComputedStyle(this.modelVw.nativeElement).height);
    // const mvHeight = getComputedStyle(this.modelVw.nativeElement).height
    // const px = this.getPX().replace('px','')
    // const padding = parseInt(px)+40;
    // this.marginTop = `${padding}px`
    this.zone.runOutsideAngular(() => {
      this.calculateMarginTop();
    });
    

    /**
     * Ajuste de nivel de volumen por defecto
     */
    this.audioConfig.nativeElement.volume = 0.18;
    this.cdr.detectChanges(); // Llamada a detectChanges

  }
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id'];
    this.getInstrument();
    
  }

  /**
   * Se obtiene intrumento por slug
   */
  getInstrument(): void {
    this.instService.getInstrument(this.slug).subscribe((ins) => {
      this.instrument = ins[0];
      if (this.instrument && this.instrument.glbModel) {
        this.urlFile = this.instService.getURLFile(ins[0].glbModel);
      }
      console.log(ins);
    });
  
  }
  getPX(){
    if(this.urlFile != ''){
      return getComputedStyle(this.modelVw.nativeElement).height;
    }
    return getComputedStyle(this.imgDetail.nativeElement).height;
  }

  calculateMarginTop(): void {
    const px = this.getPX().replace('px', '');
    let padding = parseInt(px) + 40;

    // Ajuste adicional para tamaños de pantalla más pequeños
    if (this.isPhoneScreen) {
      // Ajusta el margen según tus necesidades para tamaños de pantalla más pequeños
      padding = padding-10;
    }

    this.marginTop = `${padding}px`;
  }
  // getURLFile(){
  //     this.urlFile = this.instService.getURLFile(this.instrument.glbModel);
  //     console.log(this.urlFile);

  // }
}

import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.css']
})
export class HeaderBaseComponent implements OnInit {
  @Input() isNavVisible: boolean = true;

  isPhoneScreen: boolean = false;
  private mobileQuery!: MediaQueryList;

  constructor(
    private mediaMatcher: MediaMatcher,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    // Configurar un observador de medios para detectar cambios en la pantalla
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 768px)');
    this.mobileQuery.addListener(this.handleScreenChange.bind(this));
  }
  ngOnInit(): void {
    this.handleScreenChange();
  }

    // Función de retorno de llamada para manejar cambios en el tamaño de la pantalla
    handleScreenChange(): void {
      // Ejecuta el código en la zona de Angular para evitar problemas de detección de cambios
      this.zone.run(() => {
        // si es mobile se niega a false, en caso contrario false
        this.isNavVisible = !this.mobileQuery.matches
        this.cdr.detectChanges()
      });
    }
}

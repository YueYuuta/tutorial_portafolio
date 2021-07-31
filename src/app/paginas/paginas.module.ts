import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlantillaModule } from '../plantilla/plantilla.module';
import { AcercaComponent } from './acerca/acerca.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { CualificadoComponent } from './cualificado/cualificado.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ModalInfoServicesComponent } from './servicios/components/modal-info-services/modal-info-services.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    PaginasComponent,
    InicioComponent,
    AcercaComponent,
    HabilidadesComponent,
    CualificadoComponent,
    ServiciosComponent,
    ModalInfoServicesComponent,
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    PlantillaModule,
    ModalModule.forRoot(),
  ],
})
export class PaginasModule {}

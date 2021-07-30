import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlantillaModule } from '../plantilla/plantilla.module';
import { AcercaComponent } from './acerca/acerca.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { CualificadoComponent } from './cualificado/cualificado.component';

@NgModule({
  declarations: [PaginasComponent, InicioComponent, AcercaComponent, HabilidadesComponent, CualificadoComponent],
  imports: [CommonModule, PaginasRoutingModule, PlantillaModule],
})
export class PaginasModule {}

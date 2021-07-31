import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { CualificadoComponent } from './cualificado/cualificado.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasComponent } from './paginas.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path: 'portafolio',
    component: PaginasComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'acerca',
        component: AcercaComponent,
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent,
      },
      {
        path: 'cualificado',
        component: CualificadoComponent,
      },

      {
        path: 'servicios',
        component: ServiciosComponent,
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'portafolio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, PiePaginaComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PiePaginaComponent],
})
export class PlantillaModule {}

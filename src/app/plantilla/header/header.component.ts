import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  element: HTMLElement;

  public showMenu: boolean = false;

  public itemsMenu = [
    {
      nombre: 'Inicio',
      icono: 'fas fa-home',
      ruta: 'inicio',
    },
    {
      nombre: 'Acerca',
      icono: 'fas fa-user',
      ruta: 'app/portafolio/acerca',
    },
    {
      nombre: 'Habilidades',
      icono: 'fas fa-file-alt',
      ruta: 'app/portafolio/habilidades',
    },
    {
      nombre: 'Servicios',
      icono: 'fas fa-briefcase',
      ruta: 'app/portafolio/servicios',
    },
    {
      nombre: 'Proyectos',
      icono: 'fas fa-image',
      ruta: 'app/portafolio/proyectos',
    },
    {
      nombre: 'Contactame',
      icono: 'fas fa-comments',
      ruta: 'app/portafolio/contactame',
    },
  ];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  cambioEstadoNav(ruta?: string): void {
    this.showMenu = !this.showMenu;
    if (ruta) {
      this.router.navigate([ruta]);
    }
  }
}

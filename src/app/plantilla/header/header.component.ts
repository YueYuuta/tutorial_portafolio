import { Component, OnInit } from '@angular/core';

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
    },
    {
      nombre: 'Acerca',
      icono: 'fas fa-user',
    },
    {
      nombre: 'Habilidades',
      icono: 'fas fa-file-alt',
    },
    {
      nombre: 'Servicios',
      icono: 'fas fa-briefcase',
    },
    {
      nombre: 'Proyectos',
      icono: 'fas fa-image',
    },
    {
      nombre: 'Contactame',
      icono: 'fas fa-comments',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  cambioEstadoNav(): void {
    this.showMenu = !this.showMenu;
  }
}

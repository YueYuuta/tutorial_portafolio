import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalInfoServicesComponent } from './components/modal-info-services/modal-info-services.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  public dataServices = [
    {
      titulo1: 'Ui/Ux',
      titulo2: 'Diseñador',
      icono: 'fas fa-th-large',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Desarrollador',
      titulo2: 'Frontend',
      icono: 'fas fa-code',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Diseñador de',
      titulo2: 'marcas',
      icono: 'fas fa-pencil-alt',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
  ];
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(data: any): void {
    this.modalService.show(ModalInfoServicesComponent, {
      initialState: { data: data },
    });
  }
}

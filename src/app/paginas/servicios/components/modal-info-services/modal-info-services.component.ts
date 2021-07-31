import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-info-services',
  templateUrl: './modal-info-services.component.html',
  styleUrls: ['./modal-info-services.component.css'],
})
export class ModalInfoServicesComponent implements OnInit {
  public data: any;
  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}
}

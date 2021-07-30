import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cualificado',
  templateUrl: './cualificado.component.html',
  styleUrls: ['./cualificado.component.css'],
})
export class CualificadoComponent implements OnInit {
  public openList = 'educacion';

  constructor() {}

  ngOnInit(): void {}

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}

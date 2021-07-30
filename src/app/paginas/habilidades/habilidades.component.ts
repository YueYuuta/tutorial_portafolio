import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  public openList = 'frontend';

  constructor() {}

  ngOnInit(): void {}

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}

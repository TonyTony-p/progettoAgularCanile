import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cane-list',
  imports: [CommonModule],
  templateUrl: './cane-list.html',
  styleUrl: './cane-list.css'
})
export class CaneList implements OnInit {
  listaCani = [
    {
      nome: 'Cane1',
      peso: 11,
      razza: 'Labrador',
      dataNascita: '15/03/2020',
      pedigree: 'PED-1001'
    },
    {
      nome: 'Cane2',
      peso: 8,
      razza: 'Beagle',
      dataNascita: '10/07/2019',
      pedigree: 'PED-1002'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceCani } from '../service-cani';
import { Cane } from '../cane';

@Component({
  selector: 'app-cane-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './cane-list.html',
  styleUrl: './cane-list.css'
})
export class CaneList implements OnInit {
  searchTerm: string = '';
  caniFiltrati: any[] = [];
  listaCani: Cane[] = [
  ];
  


  constructor(private router: Router, private serviceCani : ServiceCani) {}

  goToNewCane() {

    this.router.navigate(['/nuovo-cane']);
  }

  goToEditCane(id: number) {
  this.router.navigate(['/modifica-cane', id]);
}


  ngOnInit(): void {
    this.listaCani = this.serviceCani.listaCani;
    this.caniFiltrati = this.listaCani;
  }

  

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.caniFiltrati = this.listaCani;
    } else {
      this.caniFiltrati = this.listaCani.filter(cane =>
        cane.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
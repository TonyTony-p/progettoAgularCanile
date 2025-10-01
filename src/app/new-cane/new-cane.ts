import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
 
interface Proprietario {
  id: number;
  nome: string;
}
 
interface Cane {
  nome: string;
  peso: number;
  dataNascita: string;
  pedigree: string;
  razza: string;
  proprietarioId?: number;
}
 
@Component({
  selector: 'app-new-cane',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-cane.html',
  styleUrl: './new-cane.css'
})
export class NewCane implements OnInit {
  caneForm!: FormGroup;
 
  razze: string[] = [
   
 
  ];
 
  proprietari: Proprietario[] = [
    
  ];
 
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.initForm();
  }
 
  private initForm(): void {
    this.caneForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      peso: [null, [Validators.required, Validators.min(0.1), Validators.max(200)]],
      dataNascita: ['', Validators.required],
      pedigree: ['', Validators.required],
      razza: ['', Validators.required],
      proprietario: ['']
    });
  }
 
  onSubmit(): void {
    if (this.caneForm.valid) {
      const formValue = this.caneForm.value;
     
      const newCane: Cane = {
        nome: formValue.nome,
        peso: formValue.peso,
        dataNascita: formValue.dataNascita,
        pedigree: formValue.pedigree,
        razza: formValue.razza,
        proprietarioId: formValue.proprietario || undefined
      };
 
      console.log('Nuovo cane creato:', newCane);
     
      this.router.navigate(['/cani']);
    } else {
      this.markFormGroupTouched(this.caneForm);
    }
  }
 
  onCancel(): void {
    if (this.caneForm.dirty) {
      if (confirm('Sei sicuro di voler annullare? Le modifiche non salvate andranno perse.')) {
        this.router.navigate(['/cani']);
      }
    } else {
      this.router.navigate(['/cani']);
    }
  }
 
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
 
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
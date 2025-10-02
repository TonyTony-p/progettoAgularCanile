import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Proprietario {
  id: number;
  nome: string;
}

interface Cane {
  id?: number;
  nome: string;
  peso: number;
  dataNascita: string;
  pedigree: string;
  razza: string;
  proprietarioId?: number;
}

@Component({
  selector: 'app-new-cane',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-cane.html',
  styleUrls: ['./new-cane.css']
})
export class NewCane implements OnInit {
  caneForm!: FormGroup;
  editing = false;
  caneId?: number;

  razze: string[] = [
    'labrador'
  ];

  proprietari: Proprietario[] = [
    
  ];
  listaCani: Cane[] = [
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();

    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editing = true;
        this.caneId = +id;
        const cane = this.listaCani.find(c => c.id === this.caneId);
        if (cane) {
          this.caneForm.patchValue(cane);
        }
      }
    });
  }

  private initForm(): void {
    this.caneForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      peso: [null, [Validators.required, Validators.min(0.1), Validators.max(200)]],
      dataNascita: ['', Validators.required],
      pedigree: ['', Validators.required],
      razza: ['', Validators.required],
      proprietarioId: ['']
    });
  }

  onSubmit(): void {
    if (this.caneForm.valid) {
      const formValue = this.caneForm.value;

      if (this.editing && this.caneId) {
        const updatedCane: Cane = { id: this.caneId, ...formValue };
        console.log('Cane aggiornato:', updatedCane);
        
      } else {
        const newCane: Cane = { id: Date.now(), ...formValue };
        console.log('Nuovo cane creato:', newCane);
       
      }

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

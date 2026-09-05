import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicamentosService } from '../../services/medicamentos.service';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-agregar-medicamento.component',
  standalone: true,
  styleUrl: './agregar-medicamento.component.css',
  templateUrl: './agregar-medicamento.component.html',
})
export class AgregarMedicamentoComponent implements OnInit {

  medicamentosForm!: FormGroup;
  mensaje: string = '';
  categoria: string[] = ['Analgesicos', 'Antibioticos', 'Anticonceptivos', 'Antiinfecciosos', 'Antiinflamatorios', 'Digestivos'];
  titulo = 'Agregar medicamento';

  constructor(
    private fb: FormBuilder,
    private medicamentosService: MedicamentosService,
  ) { }

  ngOnInit(): void {
      this.medicamentosForm = this.fb.group({
      codigoMedicamento: [null, [Validators.required, Validators.min(1)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', [Validators.required]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      fechaVencimiento: ['', [Validators.required]],
      requiereReceta: [false],
    })
  }

  noValido(controlName: string): boolean {
    const control = this.medicamentosForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched))
  }

  onSubmit(): void {
    if(this.medicamentosForm.valid) {
      this.medicamentosService.guardarmedicamento(this.medicamentosForm.value).subscribe({
        next: (response) => {
          this.mensaje = 'medicamento agregado correctamente';
          this.medicamentosForm.reset( { requiereReceta: false});
        },
        error: (err) => {
          this.mensaje = 'Error al agregar el medicamento';
        }
      });
    }else{
      this.medicamentosForm.markAllAsTouched();
    }
      
    }
  }
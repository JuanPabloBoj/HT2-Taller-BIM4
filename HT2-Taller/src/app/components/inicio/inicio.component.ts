import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MedicamentosService } from '../../services/medicamentos.service';
import { Medicamentos } from '../../models/medicamento';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  listaMedicamentos: Medicamentos[] = [];

  constructor(private medicamentosService: MedicamentosService) {}

  ngOnInit(): void {
    this.cargarMedicamentos();
  }

  cargarMedicamentos(): void {
    this.medicamentosService.obtenerMedicamentos().subscribe({
      next: (datos) => {
        this.listaMedicamentos = datos;
      },
      error: (err) => {
        console.error('Error al obtener medicamentos:', err);
      }
    });
  }
}
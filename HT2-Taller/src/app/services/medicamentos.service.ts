import { Injectable } from '@angular/core';
import { Medicamentos } from '../models/medicamento';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MedicamentosService {

  private listarMedicamentos: Medicamentos[] = [];

  constructor() { }

  obtenerMedicamentos(): Observable<Medicamentos[]> {
    return of(this.listarMedicamentos);
  }

    guardarmedicamento(medicamento: Medicamentos): Observable<{ status: string, data: Medicamentos }> {
      this.listarMedicamentos.push(medicamento);
      return of({ status: 'SUCCES', data: medicamento });
    }
}

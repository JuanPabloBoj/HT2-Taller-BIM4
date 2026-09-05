import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarMedicamentoComponent } from './components/agregar-medicamento/agregar-medicamento.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'agregar-medicamento',
        component: AgregarMedicamentoComponent
    },
    {
        path: '**',
        component: InicioComponent
    }
];

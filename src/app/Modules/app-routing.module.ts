import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../Guards/authGuard';

import { HomeComponent } from '../Components/home/home.component';
import { ManualComponent } from '../Components/manual/manual.component';
import { DatosyanaliticaComponent } from '../Components/manual/datosyanalitica/datosyanalitica.component';
// import { TransformaciondigitalComponent } from '../Components/manual/transformaciondigital/transformaciondigital.component';
// import { OrganizacionypersonasComponent } from '../Components/manual/organizacionypersonas/organizacionypersonas.component';
// import { ProcesosComponent } from '../Components/manual/procesos/procesos.component';
// import { ProcesosdenegocioComponent } from '../Components/manual/procesos/procesosdenegocio/procesosdenegocio.component';

// import { AccessControlComponent } from '../Components/accesscontrol/accesscontrol.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'manual', component: ManualComponent, data: {animation:'manual'}},
    { path: 'manual/datosyanalitica/:section', component: DatosyanaliticaComponent, data: {animation:'da'}},
    // { path: 'manual/transformaciondigital/:section', component: TransformaciondigitalComponent, data: {animation:'td'}},
    // { path: 'manual/organizacionypersonas/:section', component: OrganizacionypersonasComponent, data: {animation:'op'}},
    // { path: 'manual/procesos/:section', component: ProcesosComponent, data: {animation:'pr'}},
    // { path: 'manual/procesos/procesosdenegocio/:section', component: ProcesosdenegocioComponent, data: {animation:'pn'}},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

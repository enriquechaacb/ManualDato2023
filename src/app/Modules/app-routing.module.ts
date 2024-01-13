import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../Guards/authGuard';

import { HomeComponent } from '../Components/home/home.component';
import { ManualComponent } from '../Components/manual/manual.component';
import { DatosyanaliticaComponent } from '../Components/manual/datosyanalitica/datosyanalitica.component';
import { AnaliticadedatosComponent } from '../Components/manual/datosyanalitica/analiticadedatos/analiticadedatos.component';
import { SistemasespecializadosComponent } from '../Components/manual/datosyanalitica/sistemasespecializados/sistemasespecializados.component';
import { HerramientasdeanaliticaComponent } from '../Components/manual/datosyanalitica/herramientasdeanalitica/herramientasdeanalitica.component';
import { PresentacionesComponent } from '../Components/manual/datosyanalitica/presentaciones/presentaciones.component';
import { ModelosmatematicosComponent } from '../Components/manual/datosyanalitica/modelosmatematicos/modelosmatematicos.component';
// import { TransformaciondigitalComponent } from '../Components/bibliosmart/transformaciondigital/transformaciondigital.component';
// import { OrganizacionypersonasComponent } from '../Components/bibliosmart/organizacionypersonas/organizacionypersonas.component';
// import { ProcesosComponent } from '../Components/bibliosmart/procesos/procesos.component';
// import { ProcesosdenegocioComponent } from '../Components/bibliosmart/procesos/procesosdenegocio/procesosdenegocio.component';

// import { AccessControlComponent } from '../Components/accesscontrol/accesscontrol.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'bibliosmart', component: ManualComponent, data: {animation:'bibliosmart'}},
    { path: 'bibliosmart/datosyanalitica', component: DatosyanaliticaComponent, data: {animation:'da'}},
    { path: 'bibliosmart/datosyanalitica/sistemasespecializados/:section', component: SistemasespecializadosComponent, data: {animation:'se'}},
    { path: 'bibliosmart/datosyanalitica/analiticadedatos/:section', component: AnaliticadedatosComponent, data: {animation:'ad'}},
    { path: 'bibliosmart/datosyanalitica/herramientasanalitica/:section', component: HerramientasdeanaliticaComponent, data: {animation:'ha'}},
    { path: 'bibliosmart/datosyanalitica/presentaciones/:section', component: PresentacionesComponent, data: {animation:'pr'}},
    { path: 'bibliosmart/datosyanalitica/modelosmatematicos/:section', component: ModelosmatematicosComponent, data: {animation:'mm'}},
    // { path: 'bibliosmart/transformaciondigital/:section', component: TransformaciondigitalComponent, data: {animation:'td'}},
    // { path: 'bibliosmart/organizacionypersonas/:section', component: OrganizacionypersonasComponent, data: {animation:'op'}},
    // { path: 'bibliosmart/procesos/:section', component: ProcesosComponent, data: {animation:'pr'}},
    // { path: 'bibliosmart/procesos/procesosdenegocio/:section', component: ProcesosdenegocioComponent, data: {animation:'pn'}},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

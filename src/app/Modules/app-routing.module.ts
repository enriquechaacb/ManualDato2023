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
// import { TransformaciondigitalComponent } from '../Components/manual/transformaciondigital/transformaciondigital.component';
// import { OrganizacionypersonasComponent } from '../Components/manual/organizacionypersonas/organizacionypersonas.component';
// import { ProcesosComponent } from '../Components/manual/procesos/procesos.component';
// import { ProcesosdenegocioComponent } from '../Components/manual/procesos/procesosdenegocio/procesosdenegocio.component';

// import { AccessControlComponent } from '../Components/accesscontrol/accesscontrol.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'manual', component: ManualComponent, data: {animation:'manual'}},
    { path: 'manual/datosyanalitica', component: DatosyanaliticaComponent, data: {animation:'da'}},
    { path: 'manual/datosyanalitica/sistemasespecializados/:section', component: SistemasespecializadosComponent, data: {animation:'se'}},
    { path: 'manual/datosyanalitica/analiticadedatos/:section', component: AnaliticadedatosComponent, data: {animation:'ad'}},
    { path: 'manual/datosyanalitica/herramientasanalitica/:section', component: HerramientasdeanaliticaComponent, data: {animation:'ha'}},
    { path: 'manual/datosyanalitica/presentaciones/:section', component: PresentacionesComponent, data: {animation:'pr'}},
    { path: 'manual/datosyanalitica/modelosmatematicos/:section', component: ModelosmatematicosComponent, data: {animation:'mm'}},
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

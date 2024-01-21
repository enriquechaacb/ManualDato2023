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

import { ProcesosComponent } from '../Components/manual/procesos/procesos.component';
import { AmbientesdigitalesComponent } from '../Components/manual/procesos/ambientesdigitales/ambientesdigitales.component';
import { LogisticaComponent } from '../Components/manual/procesos/logistica/logistica.component';
import { ProcesosdenegocioComponent } from '../Components/manual/procesos/procesosdenegocio/procesosdenegocio.component';

import { TransformaciondigitalComponent } from '../Components/manual/transformaciondigital/transformaciondigital.component';
import { InteligencianegocioComponent } from '../Components/manual/transformaciondigital/inteligencianegocio/inteligencianegocio.component';
import { IntroduccionComponent } from '../Components/manual/transformaciondigital/introduccion/introduccion.component';
import { MediosdepagoComponent } from '../Components/manual/transformaciondigital/mediosdepago/mediosdepago.component';
import { ModelosdenegocioComponent } from '../Components/manual/transformaciondigital/modelosdenegocio/modelosdenegocio.component';
import { PlaneacionComponent } from '../Components/manual/transformaciondigital/planeacion/planeacion.component';

import { OrganizacionypersonasComponent } from '../Components/manual/organizacionypersonas/organizacionypersonas.component';
import { CulturaorganizacionalComponent } from '../Components/manual/organizacionypersonas/culturaorganizacional/culturaorganizacional.component';

import { HabilidadesdigitalesComponent } from '../Components/manual/habilidadesdigitales/habilidadesdigitales.component';

import { CanalesdeventaComponent } from '../Components/manual/canalesdeventa/canalesdeventa.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'bibliosmart', component: ManualComponent, data: {animation:'bibliosmart'}},

    { path: 'bibliosmart/datosyanalitica', component: DatosyanaliticaComponent, data: {animation:'da'}},
    { path: 'bibliosmart/datosyanalitica/sistemasespecializados/:section', component: SistemasespecializadosComponent, data: {animation:'se'}},
    { path: 'bibliosmart/datosyanalitica/analiticadedatos/:section', component: AnaliticadedatosComponent, data: {animation:'ad'}},
    { path: 'bibliosmart/datosyanalitica/herramientasanalitica/:section', component: HerramientasdeanaliticaComponent, data: {animation:'ha'}},
    { path: 'bibliosmart/datosyanalitica/presentaciones/:section', component: PresentacionesComponent, data: {animation:'pr'}},
    { path: 'bibliosmart/datosyanalitica/modelosmatematicos/:section', component: ModelosmatematicosComponent, data: {animation:'mm'}},
    
    { path: 'bibliosmart/procesos', component: ProcesosComponent, data: {animation:'pr'}},
    { path: 'bibliosmart/procesos/ambientesdigitales/:section', component: AmbientesdigitalesComponent, data: {animation:'al'}},
    { path: 'bibliosmart/procesos/logistica/:section', component: LogisticaComponent, data: {animation:'l'}},
    { path: 'bibliosmart/procesos/procesosdenegocio/:section', component: ProcesosdenegocioComponent, data: {animation:'pn'}},
    
    { path: 'bibliosmart/estrategiaytransformaciondigital', component: TransformaciondigitalComponent, data: {animation:'pr'}},
    { path: 'bibliosmart/estrategiaytransformaciondigital/inteligenciadenegocio/:section', component: InteligencianegocioComponent, data: {animation:'in'}},
    { path: 'bibliosmart/estrategiaytransformaciondigital/introduccion/:section', component: IntroduccionComponent, data: {animation:'i'}},
    { path: 'bibliosmart/estrategiaytransformaciondigital/mediosdepago/:section', component: MediosdepagoComponent, data: {animation:'mp'}},
    { path: 'bibliosmart/estrategiaytransformaciondigital/modelosdenegocio/:section', component: ModelosdenegocioComponent, data: {animation:'mn'}},
    { path: 'bibliosmart/estrategiaytransformaciondigital/planeacionyestretagiadigital/:section', component: PlaneacionComponent, data: {animation:'pp'}},

    { path: 'bibliosmart/organizacionypersonas', component: OrganizacionypersonasComponent, data: {animation:'op'}},
    { path: 'bibliosmart/organizacionypersonas/culturaorganizacional/:section', component: CulturaorganizacionalComponent, data: {animation:'co'}},

    { path: 'bibliosmart/tecnologiasyhabilidadesdigitales', component: HabilidadesdigitalesComponent, data: {animation:'hd'}},
    // { path: 'bibliosmart/tecnologiasyhabilidadesdigitales/_/:section', component: _, data: {animation:'co'}},

    { path: 'bibliosmart/comunicacionycanalesdeventa', component: CanalesdeventaComponent, data: {animation:'cv'}},
    // { path: 'bibliosmart/comunicacionycanalesdeventa/_/:section', component: _, data: {animation:'co'}},

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

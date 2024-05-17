import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../Guards/authGuard';

import { HomeComponent } from '../Components/home/home.component';
import { TerminosComponent } from '../Components/terminos/terminos.component';
import { PrivacidadComponent } from '../Components/privacidad/privacidad.component';
import { ManualComponent } from '../Components/manual/manual.component';
import { CreditosComponent } from '../Components/creditos/creditos.component';
import { SitemapComponent } from '../Components/sitemap/sitemap.component';

import { ComunicacionycanalesdeventaComponent } from '../Components/manual/canalesdeventa/canalesdeventa.component';
import { CanalesdeventaComponent } from '../Components/manual/canalesdeventa/canalesdeventa/canalesdeventa.component';
import { ArquetiposdeclientesComponent } from '../Components/manual/canalesdeventa/arquetiposdeclientes/arquetiposdeclientes.component';
import { CanalesdigitalesComponent } from '../Components/manual/canalesdeventa/canalesdigitales/canalesdigitales.component';
import { ComercioelectronicoComponent } from '../Components/manual/canalesdeventa/comercioelectronico/comercioelectronico.component';
import { MarketingdigitalComponent } from '../Components/manual/canalesdeventa/marketingdigital/marketingdigital.component';
import { GestiondeclientesComponent } from '../Components/manual/canalesdeventa/gestiondeclientes/gestiondeclientes.component';

import { DatosyanaliticaComponent } from '../Components/manual/datosyanalitica/datosyanalitica.component';
import { AnaliticadedatosComponent } from '../Components/manual/datosyanalitica/analiticadedatos/analiticadedatos.component';
import { SistemasespecializadosComponent } from '../Components/manual/datosyanalitica/sistemasespecializados/sistemasespecializados.component';
import { HerramientasdeanaliticaComponent } from '../Components/manual/datosyanalitica/herramientasdeanalitica/herramientasdeanalitica.component';
import { PresentacionesComponent } from '../Components/manual/datosyanalitica/presentaciones/presentaciones.component';
import { ModelosmatematicosComponent } from '../Components/manual/datosyanalitica/modelosmatematicos/modelosmatematicos.component';

import { HabilidadesdigitalesComponent } from '../Components/manual/habilidadesdigitales/habilidadesdigitales.component';
import { InfraestructuraComponent } from '../Components/manual/habilidadesdigitales/infraestructurayciberseguridad/infraestructurayciberseguridad.component';
import { CompetenciasComponent } from '../Components/manual/habilidadesdigitales/competencias/competencias.component';
import { TecnologiasComponent } from '../Components/manual/habilidadesdigitales/tecnologiasyherramientas/tecnologiasyherramientas.component';

import { OrganizacionypersonasComponent } from '../Components/manual/organizacionypersonas/organizacionypersonas.component';
import { CulturaorganizacionalComponent } from '../Components/manual/organizacionypersonas/culturaorganizacional/culturaorganizacional.component';
import { GestiondetalentohumanoComponent } from '../Components/manual/organizacionypersonas/gestiondetalentohumano/gestiondetalentohumano.component';
import { IndicadoresComponent } from '../Components/manual/organizacionypersonas/indicadores/indicadores.component';
import { EstrategiadenegociosComponent } from '../Components/manual/organizacionypersonas/estrategiadenegocios/estrategiadenegocios.component';

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


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'creditos', component: CreditosComponent, data: {animation:'creditos'}},
    { path: 'terminos', component: TerminosComponent, data: {animation:'terminos'}},
    { path: 'privacidad', component: PrivacidadComponent, data: {animation:'privacidad'}},
    { path: 'sitemap', component: SitemapComponent, data: {animation:'sitemap'}},
    { path: 'bibliosmart', component: ManualComponent, data: {animation:'bibliosmart'}},

    { path: 'bibliosmart/comunicacionycanalesdeventa', component: ComunicacionycanalesdeventaComponent, data: {animation:'ccv'}},
    { path: 'bibliosmart/comunicacionycanalesdeventa/arquetiposdeclientes/:section', component: ArquetiposdeclientesComponent, data: {animation:'ac'}},
    { path: 'bibliosmart/comunicacionycanalesdeventa/canalesdeventa/:section', component: CanalesdeventaComponent, data: {animation:'cv'}},
    { path: 'bibliosmart/comunicacionycanalesdeventa/canalesdigitalesdecomunicacion/:section', component: CanalesdigitalesComponent, data: {animation:'cd'}},
    { path: 'bibliosmart/comunicacionycanalesdeventa/ecommerce/:section', component: ComercioelectronicoComponent, data: {animation:'ce'}},
    { path: 'bibliosmart/comunicacionycanalesdeventa/gestiondeclientes/:section', component: GestiondeclientesComponent, data: {animation:'gc'}},
    { path: 'bibliosmart/comunicacionycanalesdeventa/digitalmarketing/:section', component: MarketingdigitalComponent, data: {animation:'dm'}},

    { path: 'bibliosmart/datosyanalitica', component: DatosyanaliticaComponent, data: {animation:'da'}},
    { path: 'bibliosmart/datosyanalitica/sistemasespecializados/:section', component: SistemasespecializadosComponent, data: {animation:'se'}},
    { path: 'bibliosmart/datosyanalitica/analiticadedatos/:section', component: AnaliticadedatosComponent, data: {animation:'ad'}},
    { path: 'bibliosmart/datosyanalitica/herramientasanalitica/:section', component: HerramientasdeanaliticaComponent, data: {animation:'ha'}},
    { path: 'bibliosmart/datosyanalitica/presentaciones/:section', component: PresentacionesComponent, data: {animation:'pr'}},
    { path: 'bibliosmart/datosyanalitica/modelosmatematicos/:section', component: ModelosmatematicosComponent, data: {animation:'mm'}},
    
    { path: 'bibliosmart/tecnologiasyhabilidadesdigitales', component: HabilidadesdigitalesComponent, data: {animation:'hd'}},
    { path: 'bibliosmart/tecnologiasyhabilidadesdigitales/competenciasyhabilidadesdigitales/:section', component: CompetenciasComponent, data: {animation:'cc'}},
    { path: 'bibliosmart/tecnologiasyhabilidadesdigitales/infraestructurayciberseguridad/:section', component: InfraestructuraComponent, data: {animation:'ic'}},
    { path: 'bibliosmart/tecnologiasyhabilidadesdigitales/tecnologiasyherramientashabilitadoras/:section', component: TecnologiasComponent, data: {animation:'tc'}},

    { path: 'bibliosmart/organizacionypersonas', component: OrganizacionypersonasComponent, data: {animation:'op'}},
    { path: 'bibliosmart/organizacionypersonas/culturaorganizacional/:section', component: CulturaorganizacionalComponent, data: {animation:'co'}},
    { path: 'bibliosmart/organizacionypersonas/estrategiasdenegocio/:section', component: EstrategiadenegociosComponent, data: {animation:'co'}},
    { path: 'bibliosmart/organizacionypersonas/gestiontalentohumano/:section', component: GestiondetalentohumanoComponent, data: {animation:'co'}},
    { path: 'bibliosmart/organizacionypersonas/metricasentornosdigitales/:section', component: IndicadoresComponent, data: {animation:'co'}},

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

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

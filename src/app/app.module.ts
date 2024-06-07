import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Modules/app-routing.module';
import { AppMaterialModule } from './Modules/app-material.module';

import { GlobalService, VariablesService, SearchService } from './Services/global.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ManualComponent } from './Components/manual/manual.component';
import { TransformaciondigitalComponent } from './Components/manual/transformaciondigital/transformaciondigital.component';
import { OrganizacionypersonasComponent } from './Components/manual/organizacionypersonas/organizacionypersonas.component';
import { ProcesosComponent } from './Components/manual/procesos/procesos.component';
import { ProcesosdenegocioComponent } from './Components/manual/procesos/procesosdenegocio/procesosdenegocio.component';
import { WidgetSeparator, BreadcrumbComponent, AxisMenu, ToolsComponent } from './Components/widgets/widgets.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DatosyanaliticaComponent } from './Components/manual/datosyanalitica/datosyanalitica.component';
import { SistemasespecializadosComponent } from './Components/manual/datosyanalitica/sistemasespecializados/sistemasespecializados.component';
import { AnaliticadedatosComponent } from './Components/manual/datosyanalitica/analiticadedatos/analiticadedatos.component';
import { HerramientasdeanaliticaComponent } from './Components/manual/datosyanalitica/herramientasdeanalitica/herramientasdeanalitica.component';
import { PresentacionesComponent } from './Components/manual/datosyanalitica/presentaciones/presentaciones.component';
import { ModelosmatematicosComponent } from './Components/manual/datosyanalitica/modelosmatematicos/modelosmatematicos.component';
import { AmbientesdigitalesComponent } from './Components/manual/procesos/ambientesdigitales/ambientesdigitales.component';
import { LogisticaComponent } from './Components/manual/procesos/logistica/logistica.component';
import { InteligencianegocioComponent } from './Components/manual/transformaciondigital/inteligencianegocio/inteligencianegocio.component';
import { IntroduccionComponent } from './Components/manual/transformaciondigital/introduccion/introduccion.component';
import { MediosdepagoComponent } from './Components/manual/transformaciondigital/mediosdepago/mediosdepago.component';
import { ModelosdenegocioComponent } from './Components/manual/transformaciondigital/modelosdenegocio/modelosdenegocio.component';
import { PlaneacionComponent } from './Components/manual/transformaciondigital/planeacion/planeacion.component';
import { CulturaorganizacionalComponent } from './Components/manual/organizacionypersonas/culturaorganizacional/culturaorganizacional.component';
import { HabilidadesdigitalesComponent } from './Components/manual/habilidadesdigitales/habilidadesdigitales.component';
import { ComunicacionycanalesdeventaComponent } from './Components/manual/canalesdeventa/canalesdeventa.component';
import { CanalesdeventaComponent } from './Components/manual/canalesdeventa/canalesdeventa/canalesdeventa.component';
import { ArquetiposdeclientesComponent } from './Components/manual/canalesdeventa/arquetiposdeclientes/arquetiposdeclientes.component';
import { CanalesdigitalesComponent } from './Components/manual/canalesdeventa/canalesdigitales/canalesdigitales.component';
import { ComercioelectronicoComponent } from './Components/manual/canalesdeventa/comercioelectronico/comercioelectronico.component';
import { MarketingdigitalComponent } from './Components/manual/canalesdeventa/marketingdigital/marketingdigital.component';
import { GestiondeclientesComponent } from './Components/manual/canalesdeventa/gestiondeclientes/gestiondeclientes.component';
import { InfraestructuraComponent } from './Components/manual/habilidadesdigitales/infraestructurayciberseguridad/infraestructurayciberseguridad.component';
import { CompetenciasComponent } from './Components/manual/habilidadesdigitales/competencias/competencias.component';
import { TecnologiasComponent } from './Components/manual/habilidadesdigitales/tecnologiasyherramientas/tecnologiasyherramientas.component';
import { GestiondetalentohumanoComponent } from './Components/manual/organizacionypersonas/gestiondetalentohumano/gestiondetalentohumano.component';
import { IndicadoresComponent } from './Components/manual/organizacionypersonas/indicadores/indicadores.component';
import { EstrategiadenegociosComponent } from './Components/manual/organizacionypersonas/estrategiadenegocios/estrategiadenegocios.component';
import { TerminosComponent } from './Components/terminos/terminos.component';
import { PrivacidadComponent } from './Components/privacidad/privacidad.component';
import { CreditosComponent } from './Components/creditos/creditos.component';
import { BuscadorComponent, BuscadorModalComponent } from './Components/buscador/buscador.component';
import { SitemapComponent } from './Components/sitemap/sitemap.component';
import { TutorialComponent, TutorialModalComponent } from './Components/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ManualComponent,
    TransformaciondigitalComponent,
    OrganizacionypersonasComponent,
    ProcesosComponent,
    ProcesosdenegocioComponent,
    WidgetSeparator, BreadcrumbComponent, AxisMenu, ToolsComponent,
    DatosyanaliticaComponent,
    SistemasespecializadosComponent,
    AnaliticadedatosComponent,
    HerramientasdeanaliticaComponent,
    PresentacionesComponent,
    ModelosmatematicosComponent,
    AmbientesdigitalesComponent,
    LogisticaComponent,
    InteligencianegocioComponent,
    IntroduccionComponent,
    MediosdepagoComponent,
    ModelosdenegocioComponent,
    PlaneacionComponent,
    CulturaorganizacionalComponent,
    HabilidadesdigitalesComponent,
    ComunicacionycanalesdeventaComponent,
    CanalesdeventaComponent,
    ArquetiposdeclientesComponent,
    CanalesdigitalesComponent,
    ComercioelectronicoComponent,
    MarketingdigitalComponent,
    GestiondeclientesComponent,
    InfraestructuraComponent,
    CompetenciasComponent,
    TecnologiasComponent,
    GestiondetalentohumanoComponent,
    IndicadoresComponent,
    EstrategiadenegociosComponent,
    TerminosComponent,
    PrivacidadComponent,
    CreditosComponent,
    BuscadorComponent, BuscadorModalComponent, SitemapComponent, TutorialComponent, TutorialModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    GlobalService, VariablesService, SearchService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

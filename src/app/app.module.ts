import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Modules/app-routing.module';
import { AppMaterialModule } from './Modules/app-material.module';

import { GlobalService } from './Services/global.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ManualComponent } from './Components/manual/manual.component';
import { TransformaciondigitalComponent } from './Components/manual/transformaciondigital/transformaciondigital.component';
import { OrganizacionypersonasComponent } from './Components/manual/organizacionypersonas/organizacionypersonas.component';
import { ProcesosComponent } from './Components/manual/procesos/procesos.component';
import { ProcesosdenegocioComponent } from './Components/manual/procesos/procesosdenegocio/procesosdenegocio.component';
import { WidgetSeparator } from './Components/widgets/widgets.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DatosyanaliticaComponent } from './Components/manual/datosyanalitica/datosyanalitica.component';
import { SistemasespecializadosComponent } from './Components/manual/datosyanalitica/sistemasespecializados/sistemasespecializados.component';
import { AnaliticadedatosComponent } from './Components/manual/datosyanalitica/analiticadedatos/analiticadedatos.component';

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
    WidgetSeparator,
    DatosyanaliticaComponent,
    SistemasespecializadosComponent,
    AnaliticadedatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    GlobalService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

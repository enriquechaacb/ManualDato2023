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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ManualComponent,
    TransformaciondigitalComponent,
    OrganizacionypersonasComponent,
    ProcesosComponent,
    ProcesosdenegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

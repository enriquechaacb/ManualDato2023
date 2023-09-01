import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../Guards/authGuard';

import { HomeComponent } from '../Components/home/home.component';
import { ManualComponent } from '../Components/manual/manual.component';
import { TransformaciondigitalComponent } from '../Components/manual/transformaciondigital/transformaciondigital.component';
import { OrganizacionypersonasComponent } from '../Components/manual/organizacionypersonas/organizacionypersonas.component';
import { ProcesosComponent } from '../Components/manual/procesos/procesos.component';
import { ProcesosdenegocioComponent } from '../Components/manual/procesos/procesosdenegocio/procesosdenegocio.component';

// import { AccessControlComponent } from '../Components/accesscontrol/accesscontrol.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'datasmart', component: ManualComponent, data: {animation:'datasmart'}},
    { path: 'datasmart/transformaciondigital/:section', component: TransformaciondigitalComponent, data: {animation:'td'}},
    { path: 'datasmart/organizacionypersonas/:section', component: OrganizacionypersonasComponent, data: {animation:'op'}},
    { path: 'datasmart/procesos/:section', component: ProcesosComponent, data: {animation:'pr'}},
    { path: 'datasmart/procesos/procesosdenegocio/:section', component: ProcesosdenegocioComponent, data: {animation:'pn'}},
//     { path: 'login', component: LoginComponent, data: { animation: 'login' } },
//     { path: 'dashboard', component: DashboardComponent, data: { animation: 'dashboard', permits: [] } },
//     { path: 'accesscontrol/:type', component: AccessControlComponent, data: { animation: 'accesscontrol', permits: [50] }, canActivate:[AuthGuard] },
//     { path: 'accesscontrolschedule', component: AccesscontrolScheduleComponent, data: { animation: 'accesscontrolschedule', permits: [50] }, canActivate:[AuthGuard] },
//     // //{ path: 'validation', component: ValidationinfoComponent, data: { animation: 'validation', permits: [60] }, canActivate:[AuthGuard] },
//     { path: 'interchangesschedule', component: InterchangesScheduleComponent, data: { animation: 'interchangesschedule', permits: [60] }, canActivate:[AuthGuard] },
//     // // //{ path: 'checkprocess', component: CheckprocessComponent, data: { animation: 'checkprocess', permits: [60]  }, canActivate:[AuthGuard] },
//     { path: 'fleet', component: FleetadministrationComponent, data: { animation: 'fleet', permits: [120, 200] }, canActivate:[AuthGuard] },
//     { path: 'fuel', component: FuelComponent, data: { animation: 'fuel', permits: [160] } },
//     { path: 'units', component: UnitsadministrationComponent, data: { animation: 'units', permits: [90] } },
//     { path: 'trailers', component: TrailersadministrationComponent, data: { animation: 'trailers', permits: [90] } },
//     { path: 'employees', component: EmployeesComponent, data: { animation: 'employees', permits: [400] }, canActivate:[AuthGuard] },
//     // // { path: 'dinningservice', component: DinningServiceComponent, data: { animation: 'dinningservice', permits: [153] }, canActivate:[AuthGuard] },
//     { path: 'checkup', component: CheckUpComponent, data: { Animation: 'checkup', permits:[152] }, canActivate:[AuthGuard]},
//     // // { path: 'agreements', component: ClientAgreementsComponent, data: { animation: 'agreements', permits: [140] } },
//     { path: 'rates', component: RatesComponent, data: { animation: 'rates', permits: [660] } },
//     { path: 'locations', component: LocationsComponent, data: { animation: 'locations', permits: [440] } },
//     { path: 'clients', component: ClientsadministrationComponent, data: { animation: 'clients', permits: [30] }, canActivate:[AuthGuard] },
//     { path: 'shipping/:type', component: ShippingComponent, data: { animation: 'shipping', permits: [570,571,572,573,574,575] } },
//     { path: 'shippingdepositonroute', component: ShippingDepositonRoute, data: { animation: 'shipping', permits: [520] }, canActivate: [AuthGuard] },
//     { path: 'shippingdepositonrouteauthorize', component: ShippingDepositOnRouteAuthorizeComponent, data: { animation: 'shipping', permits: [620] }, canActivate: [AuthGuard] },
//     { path: 'unitassignments', component: UnitAssignments, data: { animation: 'unitassignments', permits: [102] } },
//     // // { path: 'importtolls', component: ImportTollsComponent, data: { animation: 'unitassignments', permits: [600] } },
//     { path: 'policy', component: InsurancePolicy, data: {animation: 'policy', permits: [130]}},
//     { path: 'seals', component: SealsComponent, data: {animation: 'seals', permits:[270]}, canActivate:[AuthGuard] },
//     { path: 'invoices/:type', component: InvoicesComponent, data:{animation:'invoices', permits: [530]} },
//     { path: 'billing', component: BillingComponent, data:{animation:'billing', permits: [530]} },
//     { path: 'creditcards/:type', component: CreditcardsComponent, data: {animation: 'creditcards', permits: [466,467]}},
//     { path: 'creditdebitnotes/:type', component: CreditDebitNotesComponent, data: { animation: 'creditdebitnotes', permits: [540] } },
//     // // { path: 'invoicestemplates', component: InvoicesTemplateComponent, data:{animation:'invoicescomponent', permits:[531]}},
//     { path: 'incidences/:type', component: IncidencesComponent, data:{animation:'incidences', permits:[450]}},
//     { path: 'routeutilitykm', component: RateUtilityKmComponent, data:{animation: '', permits:[420]}, canActivate:[AuthGuard] },
//     { path: 'traveltag', component: TraveltagComponent, data: {animation:'traveltag', permits:[266]}, canActivate:[AuthGuard]},
//     { path: 'traveltagassingment', component: TravelTagAssingmentComponent, data: {animation:'traveltagassingment', permits:[267]}},
//     // // { path: 'mobileapp', component: MobileAppView, data:{animation: 'mobileapp', permits:[800]}, canActivate:[AuthGuard]},
//     // // { path: 'useradministration', component: UserAdministrationComponent, data: { animation: 'useradministration', permits: [10] } },
//     { path: 'controldesk', component: ControldeskComponent, data: { animation: 'controldesk', permits: [511] }, canActivate:[AuthGuard] },
//     { path: 'proofofexpenses', component: ProofofexpensesComponent, data:{animation: '', permits:[512]}, canActivate:[AuthGuard]},
//     { path: 'gps', component: GpsComponent, data: {animation:'gps', permits:[210]}, canActivate:[AuthGuard] },
//     { path: 'gpsassingment', component: GpsAssingmentsComponent, data: {animation:'gpsassingment', permits:[215]}, canActivate:[AuthGuard] },
//     // // // { path: 'test', component: TestComponent, data: { animation: 'test', permits: [602] } },
//     { path: 'bankTransfers', component: BanktransfersComponent, data:{animation: 'bankTransfers', permits:[461]}, canActivate:[AuthGuard]},
//     { path: 'bankreconciliation', component: BankreconciliationComponent, data:{animation: 'bankreconciliation', permits:[462]}, canActivate:[AuthGuard]},
//     // // { path: 'liquidations', component: LiquidationsComponent, data:{animation: 'liquidaciones', permits:[470]}, canActivate:[AuthGuard]},
//     // // { path: 'employeedebts', component: EmployeedebtsComponent, data:{animation: 'employeedebts', permits:[480]}, canActivate:[AuthGuard] },
//     { path: 'paymentapplications', component: PaymentApplicationsComponent, data:{animation: 'paymentapplications', permits:[495]}, canActivate:[AuthGuard]},
//     { path: 'paymentreception', component: PaymentReceptionComponent, data:{animation: 'paymentreception', permits:[495]}, canActivate:[AuthGuard]},
//     // // { path: 'reports/:type', component: ReportsComponent, data:{animation: 'reports', permits:[900]}, canActivate:[AuthGuard] },
//     { path: "reportdownloader", component: ReportDownloaderComponent, data: { animation: "reports", permits: [900] }, canActivate: [AuthGuard] },
//     { path: 'integrations', component: IntegrationsComponent, data:{animation: 'integrations', permits:[655]}, canActivate:[AuthGuard]},
//     // // { path: 'documentshipping', component: DocumentShippingComponent, data:{animation: 'documentshipping', permits:[500]}, canActivate:[AuthGuard]},
//     // // { path: 'payroll', component: PayRollComponent, data:{animation: 'payroll', permits:[700]}, canActivate:[AuthGuard] },
//     { path: 'recurringpayments', component: RecurringpaymentsComponent, data: {animation: 'recurringpayments', permits: [500]}},
//     { path: 'vacations', component: VacationsComponent, data:{animation: 'vacations', permits:[700]}, canActivate:[AuthGuard] },
//     { path: 'attendances', component: AttendancesComponent, data:{animation: 'attendances', permits:[700]}, canActivate:[AuthGuard] },
//     // // { path: 'support/:type', component: ITControlComponent, data: { animation: 'itcontrols', permits: [950] } },
//     { path: 'itcontrols', component: ItcontrolsComponent, data: { animation: 'itcontrols', permits: [999] } },    
//     { path: 'monitoring', component: MonitoringComponent, data: { animation: 'monitoring', permits: [630] }, canActivate:[AuthGuard] },
//     // { path: 'agreements', component: AgreementsComponent, data: { animation: 'agreements', permits: [140] }, canActivate:[AuthGuard] },
//     { path: 'suppliers', component: SupplieradministrationComponent, data: { animation: 'suppliers', permits: [190] }, canActivate:[AuthGuard] },
//     { path: 'supplierinvoices/:type', component: SupplierinvoicesComponent, data: { animation: 'suppliers', permits: [560] }, canActivate:[AuthGuard] },
//     // // { path: 'shippingorder', component: ShippingorderGridComponent, data: { animation: 'shippingorder', permits: [999] } },
//     { path: 'purcharseorders/:type', component: PurchaseordersComponent, data: {animation: 'purcharseorders', permits: [500]}},
//     { path: 'productservices', component: ProductsservicesComponent, data: {animation: 'productservices', permits: [290]}},
//     { path: 'warehouse/:type', component: WarehouseComponent, data: {animation: 'warehouse', permits: [230]}},
//     { path: 'debts', component: DebtsComponent, data: {animation: 'debts', permits: [999]}},
//     // // { path: 'swagger', redirectTo: '/swagger/index.html' },
//     // // { path: 'ReportViewer/reportePruebas', redirectTo: '/ReportViewer/reportePruebas'},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

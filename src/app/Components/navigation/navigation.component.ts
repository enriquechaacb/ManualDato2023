import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @Output() change = new EventEmitter<any>();
    public menuItems: Array<any> = Menu;
    menuToggle(){this.change.emit();}
}

const Menu = [
    {Url:"",Icono:"chevron_right",Nombre:"Link 1",Seccion:""},
    {Url:"",Icono:"chevron_right",Nombre:"Link 2",Seccion:""},
    {Url:"",Icono:"chevron_right",Nombre:"Link 3",Seccion:""},
    {Url:"",Icono:"chevron_right",Nombre:"Link 4",Seccion:""},
    {Url:"",Icono:"chevron_right",Nombre:"Link 5",Seccion:""},
    {Url:"",Icono:"chevron_right",Nombre:"Link 6",Seccion:""},
    {Url:"",Icono:"chevron_right",Nombre:"Link 7",Seccion:""},
];
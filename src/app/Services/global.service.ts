import { HostListener, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { siteContent } from '../Models/sitecontent';
import { htmlDocContent } from '../Models/models'

@Injectable()
export class GlobalService {
    constructor(
        private _dialog: MatDialog
    ){}
    @HostListener('window:resize', ['$event'])
    ScreenHeight() {
        const footerHeight = 142;
        var hgt = window.innerHeight - footerHeight;
        return hgt + "px";
    }
    public openModal(modal: any, type: number, width: string, info: any, user: number): Observable<any> {
        const dialog = this._dialog.open(modal, {
            width: width,
            disableClose: false,
            data: { type:type, info:info, user:user }
        });
        return dialog.afterClosed();
    }
    public scrollToTop(id?:string) {
        var currentScroll = document.documentElement.scrollTop;
        if(currentScroll > 0){
            if(id){
                var w = window.innerWidth;
                var element = document.getElementById(id);
                var headerOffset = w < 768 ? 0 : 110;
                var elementPosition = element ? element.getBoundingClientRect().top : 0;
                var offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }else{
                window.scrollTo(0, 0);
            }
        }
	}
}


@Injectable({
    providedIn: 'root'
})
export class VariablesService {
    private PageTitle = new BehaviorSubject<string>('');
    private Url = new BehaviorSubject<string>('');

    public pageTitle = this.PageTitle.asObservable();
    public url = this.Url.asObservable();

    public setPageTitle(x: any) { this.PageTitle.next(x); }
    public setUrl(x: any) { this.Url.next(x); }
}

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    staticContent = siteContent;
    
    search(query: string): htmlDocContent[] {
        const results: htmlDocContent[] = [];
    
        this.staticContent.forEach(item => {
          const lowerCaseContent = item.Contenido.toLowerCase();
          const lowerCaseQuery = query.toLowerCase();
    
          // Buscar la posición del texto buscado en el contenido
          const startIndex = lowerCaseContent.indexOf(lowerCaseQuery);
          if (startIndex !== -1) {
            // Determinar el contexto alrededor del texto buscado
            const contextLength = 150; // Longitud del contexto (puedes ajustar esto según tus necesidades)
            const contextStartIndex = Math.max(0, startIndex) //- contextLength);
            const contextEndIndex = Math.min(lowerCaseContent.length, startIndex + lowerCaseQuery.length + contextLength);
    
            // Extraer el fragmento del contenido con el contexto
            const context = lowerCaseContent.substring(contextStartIndex, contextEndIndex);
    
            // Crear un nuevo resultado con el título, el fragmento del contenido y la URL
            const result: htmlDocContent = {
              Titulo: item.Titulo,
              Contenido: context + '...',
              Url: item.Url
            };
    
            // Agregar el resultado a la lista de resultados
            results.push(result);
          }
        });
    
        return results;
    }
}


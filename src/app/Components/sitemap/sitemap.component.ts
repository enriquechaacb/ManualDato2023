import { Component } from "@angular/core";
import { sectionsAnimation } from "../../Services/animations.service";
import { siteContent } from "../../Models/sitecontent";

@Component({
    selector: "app-sitemap",
    templateUrl: "./sitemap.component.html",
    styleUrls: ["./sitemap.component.scss"],
    animations: [sectionsAnimation]
})
export class SitemapComponent {
    public links: any = links;
    constructor() {}
}

const links = [
    { Url: "/", Nombre:"Inicio" },
    { Url: "/presentacion", Nombre:"Presentación" },
    { Url: "/bienvenida", Nombre:"Bienvenida" },
    { Url: "/objetivos", Nombre:"Objetivos" },
    { Url: "/bibliosmart", Nombre:"BiblioSmart", Secciones: [
        { Url: "/bibliosmart/comunicacionycanalesdeventa", Nombre:"Comunicación y canales de venta", Secciones: [
            { Url: "/bibliosmart/comunicacionycanalesdeventa/arquetiposdeclientes/Introduccion", Nombre:"Arquetipos de clientes"},
            { Url: "/bibliosmart/comunicacionycanalesdeventa/canalesdeventa/Introduccion", Nombre:"Canales de venta"},
            { Url: "/bibliosmart/comunicacionycanalesdeventa/canalesdigitalesdecomunicacion/Introduccion", Nombre:"Canales digitales de comunicación"},
            { Url: "/bibliosmart/comunicacionycanalesdeventa/ecommerce/Introduccion", Nombre:"Comercio electrónico"},
            { Url: "/bibliosmart/comunicacionycanalesdeventa/gestiondeclientes/Introduccion", Nombre:"Gestión de clientes"},
            { Url: "/bibliosmart/comunicacionycanalesdeventa/digitalmarketing/Introduccion", Nombre:"Marketing digital"}
        ]},
        { Url: "/bibliosmart/datosyanalitica", Nombre:"Datos y analítica", Secciones: [
            { Url: "/bibliosmart/datosyanalitica/sistemasespecializados/Introduccion", Nombre:"Sistemas especializados"},
            { Url: "/bibliosmart/datosyanalitica/analiticadedatos/Introduccion", Nombre:"Analítica de datos"},
            { Url: "/bibliosmart/datosyanalitica/herramientasanalitica/Introduccion", Nombre:"Herramientas de analítica"},
            { Url: "/bibliosmart/datosyanalitica/presentaciones/Introduccion", Nombre:"Presentaciones"},
            { Url: "/bibliosmart/datosyanalitica/modelosmatematicos/Introduccion", Nombre:"Modelos matemáticos"}
        ]},
        { Url: "/bibliosmart/tecnologiasyhabilidadesdigitales", Nombre:"Tecnologías y habilidades digitales", Secciones: [
            { Url: "/bibliosmart/tecnologiasyhabilidadesdigitales/competenciasyhabilidadesdigitales/Introduccion", Nombre:"Competencias y habilidades digitales"},
            { Url: "/bibliosmart/tecnologiasyhabilidadesdigitales/infraestructurayciberseguridad/Introduccion", Nombre:"Infraestructura y ciberseguridad"},
            { Url: "/bibliosmart/tecnologiasyhabilidadesdigitales/tecnologiasyherramientashabilitadoras/Introduccion", Nombre:"Tecnologías digitales y herramientas habilitadoras"}
        ]},
        { Url: "/bibliosmart/organizacionypersonas", Nombre:"Organización y personas", Secciones: [
            { Url: "/bibliosmart/organizacionypersonas/culturaorganizacional/Introduccion", Nombre:"Cultura organizacional"},
            { Url: "/bibliosmart/organizacionypersonas/estrategiasdenegocio/Introduccion", Nombre:"Estrategia de negocios en la era digital"},
            { Url: "/bibliosmart/organizacionypersonas/gestiontalentohumano/Introduccion", Nombre:"Gestión del talento humano en la era digital"},
            { Url: "/bibliosmart/organizacionypersonas/metricasentornosdigitales/Introduccion", Nombre:"Indicadores y métricas en entornos digitales"}
        ]},
        { Url: "/bibliosmart/procesos", Nombre:"Procesos", Secciones: [
            { Url: "/bibliosmart/procesos/ambientesdigitales/Introduccion", Nombre:"Desarrollo de ambientes digitales"},
            { Url: "/bibliosmart/procesos/logistica/Introduccion", Nombre:"Logística"},
            { Url: "/bibliosmart/procesos/procesosdenegocio/Introduccion", Nombre:"Procesos de negocio"}
        ]},
        { Url: "/bibliosmart/estrategiaytransformaciondigital", Nombre:"Estrategia y transformación digital", Secciones: [
            { Url: "/bibliosmart/estrategiaytransformaciondigital/introduccion/Introduccion", Nombre:"Introducción a la transformación digital"},
            { Url: "/bibliosmart/estrategiaytransformaciondigital/inteligenciadenegocio/Introduccion", Nombre:"Inteligencia de negocio"},
            { Url: "/bibliosmart/estrategiaytransformaciondigital/mediosdepago/Introduccion", Nombre:"Medios de pago"},
            { Url: "/bibliosmart/estrategiaytransformaciondigital/modelosdenegocio/Introduccion", Nombre:"Modelos de negocio"},
            { Url: "/bibliosmart/estrategiaytransformaciondigital/planeacionyestretagiadigital/Introduccion", Nombre:"Planeación y estrategia digital"}
        ]}
    ]},
    { Url: "/creditos", Nombre:"Créditos"},
    { Url: "/terminos", Nombre:"Términos y condiciones"},
    { Url: "/privacidad", Nombre:"Política de privacidad"},
    { Url: "/sitemap", Nombre:"Mapa de sitio"},
]
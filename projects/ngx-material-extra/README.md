# NgxMaterialExtra

[![npm version](https://badge.fury.io/js/ngx-material-extra.svg)](https://www.npmjs.com/package/ngx-material-extra)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Changelog](https://img.shields.io/badge/changelog-19.0.0-blue.svg)](../../CHANGELOG.md)

Una biblioteca de componentes y utilidades adicionales para Angular Material. NgxMaterialExtra extiende las funcionalidades de Angular Material con componentes personalizados que mantienen la estética y experiencia de Material Design.

## Características

- 🎨 **Totalmente personalizable**: Todos los componentes se adaptan a tu tema de Material Design.
- 🎯 **Componentes adicionales**: Amplía tu conjunto de herramientas de Angular Material con componentes que no están incluidos en la biblioteca principal.
- 🔧 **Fácil integración**: Diseñado para trabajar sin problemas con Angular y Angular Material.
- 📱 **Responsive**: Todos los componentes están diseñados para funcionar en dispositivos móviles y de escritorio.

## Instalación

```bash
npm i ngx-material-extra
```

### Requisitos previos

NgxMaterialExtra requiere:

- Angular v19.2.0 o superior
- Angular Material v19.2.15 o superior
- Angular CDK v19.2.15 o superior

## Configuración rápida

### 1. Importa los estilos

En tu archivo `styles.scss`:

```scss
/* Importa los estilos de Angular Material primero */
@import "@angular/material/prebuilt-themes/azure-blue.css";

/* Luego importa los estilos de NgxMaterialExtra */
@import "ngx-material-extra/src/lib/styles/ngx-material-extra.scss";
```

### 2. Importa los módulos que necesites en tu aplicación

```typescript
// En tu módulo o componente standalone
import { MatExtraAvatar } from 'ngx-material-extra';

@NgModule({
  imports: [
    // ...
    MatExtraAvatar
  ]
})
export class AppModule { }

// O si usas la API de componentes standalone
@Component({
  // ...
  imports: [
    MatExtraAvatar
  ]
})
```

## Componentes disponibles

### Avatar

Un componente flexible de avatar que admite diferentes tamaños y bordes.

```typescript
<mat-extra-avatar acronym="JS" size="medium" border="medium"></mat-extra-avatar>
```

#### Propiedades

| Nombre  | Tipo                                                      | Valor predeterminado | Descripción                                              |
| ------- | --------------------------------------------------------- | -------------------- | -------------------------------------------------------- |
| acronym | string                                                    | 'Hola'               | Texto a mostrar (se mostrarán los 2 primeros caracteres) |
| size    | 'small' \| 'medium' \| 'large' \| 'extra-large'           | 'medium'             | Tamaño del avatar                                        |
| border  | 'small' \| 'medium' \| 'large' \| 'extra-large' \| 'none' | 'medium'             | Radio del borde                                          |

### Personalización de estilos

NgxMaterialExtra define variables CSS para personalizar la apariencia de los componentes. Puedes sobrescribir estas variables en tu archivo de estilos principal:

```scss
:root {
  --mat-extra-sys-primary-container: #your-color;
  --mat-extra-sys-on-primary-container: #your-color;

  /* Tamaños de avatar */
  --mat-extra-sys-avatar-small: 24px;
  --mat-extra-sys-avatar-medium: 48px;
  --mat-extra-sys-avatar-large: 72px;
  --mat-extra-sys-avatar-extra-large: 96px;

  /* Radios de borde */
  --mat-extra-sys-corner-small: 8px;
  --mat-extra-sys-corner-medium: 12px;
  --mat-extra-sys-corner-large: 16px;
  --mat-extra-sys-corner-extra-large: 24px;
}
```

## Desarrollo

### Construyendo la biblioteca

Para construir la biblioteca, ejecuta:

```bash
ng build ngx-material-extra
```

Los artefactos de compilación se colocarán en el directorio `dist/`.

### Ejecutando pruebas unitarias

Para ejecutar las pruebas unitarias:

```bash
ng test ngx-material-extra
```

### Publicación

Una vez construida la biblioteca, puedes publicarla siguiendo estos pasos:

```bash
cd dist/ngx-material-extra
npm publish
```

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, siente libre de enviar pull requests o abrir issues para mejorar esta biblioteca.

1. Fork el repositorio
2. Crea tu rama de características (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios
4. Ejecuta las pruebas (`ng test ngx-material-extra`)
5. Haz commit de tus cambios (`git commit -m 'feat: añade funcionalidad increíble'`)
6. Push a la rama (`git push origin feature/amazing-feature`)
7. Abre un Pull Request

## Changelog

Mantenemos un registro detallado de los cambios en el archivo [CHANGELOG.md](../../CHANGELOG.md).

La primera versión estable es la 19.0.0, que incluye:

- Componente Avatar
- Sistema de estilos personalizable
- Compatibilidad con Angular 19.2.x

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](../../LICENSE) para más detalles.

## Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en el repositorio del proyecto.

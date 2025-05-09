# NgxMaterialExtra Workspace

[![Angular](https://img.shields.io/badge/Angular-19.2.0-dd0031.svg)](https://angular.io/)
[![npm version](https://badge.fury.io/js/ngx-material-extra.svg)](https://www.npmjs.com/package/ngx-material-extra)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Changelog](https://img.shields.io/badge/changelog-19.0.0-blue.svg)](./CHANGELOG.md)

Un espacio de trabajo monorepo que contiene la biblioteca `ngx-material-extra` y una aplicación de demostración. Esta biblioteca proporciona componentes adicionales para Angular Material, extendiendo sus funcionalidades con componentes personalizados que mantienen la estética y experiencia de Material Design.

## Estructura del proyecto

El workspace contiene dos proyectos principales:

- **ngx-material-extra**: La biblioteca de componentes reutilizables
- **demo-app**: Una aplicación Angular para demostrar y probar los componentes

## Iniciar el servidor de desarrollo

Para iniciar un servidor de desarrollo local con la aplicación de demostración, ejecuta:

```bash
npm start
```

Una vez que el servidor esté funcionando, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquiera de los archivos fuente.

## Desarrollo de la biblioteca

Para trabajar en el desarrollo de la biblioteca mientras utilizas la aplicación de demostración, puedes usar el modo watch:

```bash
npm run watch:lib
```

Este comando compilará la biblioteca y vigilará los cambios, actualizando la compilación automáticamente cuando modifiques algún archivo.

## Construir los proyectos

### Biblioteca

Para construir solo la biblioteca:

```bash
npm run build:lib
```

### Aplicación de demostración

Para construir la aplicación de demostración:

```bash
npm run build
```

Los artefactos de compilación se almacenarán en el directorio `dist/`. Por defecto, la compilación de producción optimiza tu aplicación para rendimiento y velocidad.

## Pruebas

### Ejecutando pruebas unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io), usa el siguiente comando:

```bash
npm test
```

## Publicación de la biblioteca

Una vez que la biblioteca está lista para ser publicada, sigue estos pasos:

1. Asegúrate de haber construido la última versión de la biblioteca:

   ```bash
   npm run build:lib
   ```

2. Navega al directorio de distribución:

   ```bash
   cd dist/ngx-material-extra
   ```

3. Publica en el registro de npm:
   ```bash
   npm publish
   ```

## Componentes disponibles

Actualmente, la biblioteca incluye los siguientes componentes:

### Avatar

Un componente flexible para mostrar avatares con iniciales, que soporta diferentes tamaños y estilos de borde.

```html
<mat-extra-avatar acronym="JS" size="medium" border="medium"> </mat-extra-avatar>
```

Para más detalles sobre todos los componentes disponibles y su uso, consulta el [README de la biblioteca](./projects/ngx-material-extra/README.md).

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el repositorio
2. Crea tu rama de características
3. Realiza tus cambios
4. Asegúrate de ejecutar las pruebas
5. Envía un pull request

## Changelog

Mantenemos un registro detallado de los cambios en el archivo [CHANGELOG.md](./CHANGELOG.md).

La primera versión estable es la 19.0.0, que incluye:

- Componente Avatar
- Sistema de estilos personalizable
- Compatibilidad con Angular 19.2.x

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](./LICENSE) para más detalles.

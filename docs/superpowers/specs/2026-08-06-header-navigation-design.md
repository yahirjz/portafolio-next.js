# Diseño: navegación persistente del portafolio

## Objetivo

Hacer que las secciones clave del portafolio estén siempre disponibles para
reclutadores y visitantes, sin alterar el contenido ni la dirección visual
actual.

## Alcance

- Renderizar el `Header` existente en la página principal.
- Mantener la navegación fija durante todo el desplazamiento.
- Mantener el aspecto transparente al inicio y aplicar el tratamiento visual
  translúcido existente al desplazarse.
- Conservar los enlaces a Sobre mí, Proyectos, Habilidades y Contacto.
- Garantizar objetivos táctiles utilizables y enlaces que no desborden en
  móvil.
- Incorporar estados de foco visibles para navegación con teclado.

## Fuera de alcance

- No cambiar el copy, secciones, orden del contenido ni la identidad visual.
- No introducir un menú hamburguesa ni una nueva dependencia.
- No modificar el formulario de contacto, el CV ni otros hallazgos de la
  revisión.

## Decisión de UX

Se elimina el comportamiento de ocultar el Header al desplazarse hacia abajo.
En un portafolio de una sola página, la navegación persistente reduce el coste
de volver a Proyectos o Contacto. La barra conserva bajo peso visual por ser
transparente al inicio y usar el estilo `glass-panel` solo después de iniciar
el scroll.

## Arquitectura y componentes

`app/page.tsx` orquesta las secciones de la página e incluirá `Header` como
componente de navegación global. `components/Header.tsx` conservará la
responsabilidad de presentar y estilizar los enlaces; no gestionará el estado
de visibilidad porque ese comportamiento deja de formar parte del diseño.

No se cambia la fuente de datos ni se introduce estado global.

## Accesibilidad y responsive

- Los enlaces conservarán texto visible y destinos de ancla semánticos.
- Los estilos de foco serán visibles y diferenciables de hover.
- El Header no quedará fuera de la pantalla ni permanecerá enfocable mientras
  esté visualmente oculto, porque no habrá estado oculto.
- La distribución actual compacta se comprobará en viewport móvil; si no cabe,
  se ajustarán espaciado y tipografía antes de considerar una navegación
  alternativa.

## Verificación

1. Ejecutar lint y build de producción.
2. Comprobar que el Header se renderiza en la carga inicial.
3. Comprobar que cambia de apariencia al hacer scroll, pero no desaparece.
4. Recorrer los enlaces con teclado y comprobar el foco visible.
5. Probar cada ancla y la vista móvil.

## Criterio de éxito

Un visitante puede llegar a cualquier sección principal desde cualquier punto
de la página, con ratón, toque o teclado, y la navegación no provoca
desbordamiento ni bloquea el contenido en pantallas pequeñas.

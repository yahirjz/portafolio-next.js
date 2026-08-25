# Persistent Header Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mostrar una navegación fija, accesible y responsiva en toda la página principal.

**Architecture:** `app/page.tsx` orquesta la página y debe montar el `Header` existente. `components/Header.tsx` conserva únicamente la presentación y el estilo de la navegación; el estado de ocultamiento se elimina, mientras que el estado visual al hacer scroll permanece local al componente.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS y Framer Motion.

## Global Constraints

- No cambiar copy, secciones, orden del contenido ni identidad visual.
- No agregar dependencias ni un menú hamburguesa.
- La barra debe permanecer disponible durante todo el scroll.
- Los enlaces deben ser utilizables con teclado y no desbordar en móvil.

---

## File structure

- Modificar: `app/page.tsx` — montar la navegación global antes de las secciones.
- Modificar: `components/Header.tsx` — eliminar el estado y la animación de ocultamiento; conservar el estilo según scroll y añadir foco visible.

### Task 1: Integrar la navegación en la página

**Files:**
- Modify: `app/page.tsx:1-30`

**Interfaces:**
- Consumes: el componente por defecto exportado desde `components/Header.tsx`.
- Produces: una página que incluye una única región de navegación antes de Hero.

- [ ] **Step 1: Localizar la composición de la página**

Confirma que `app/page.tsx` importa y renderiza, en orden, Hero, About, Projects, Skills, Contact y Footer. Observa que `Header` no aparece todavía.

- [ ] **Step 2: Montar la navegación**

Importa el componente `Header` y colócalo una sola vez dentro de la página principal, como elemento hermano de `main` o como primer hijo de la composición. Debe estar disponible desde la carga inicial y no dentro de una sección con `overflow-hidden` que pudiera recortarlo.

- [ ] **Step 3: Comprobar la estructura renderizada**

Ejecuta `npm run dev`, abre la raíz del sitio y confirma que hay una región `header` con cuatro enlaces: Sobre mí, Proyectos, Habilidades y Contacto.

- [ ] **Step 4: Registrar el cambio aislado**

Revisa el diff para confirmar que esta tarea solo modifica `app/page.tsx`; no incluyas correcciones de CV, lint o formulario en este commit.

### Task 2: Hacer persistente el Header

**Files:**
- Modify: `components/Header.tsx:1-56`

**Interfaces:**
- Consumes: la posición de scroll proporcionada por Framer Motion.
- Produces: un `header` fijo que solo cambia su tratamiento visual al superar el umbral de scroll.

- [ ] **Step 1: Identificar responsabilidades de estado**

Separa mentalmente los dos comportamientos actuales: `scrolled` controla la apariencia y `hidden` controla la visibilidad. Solo el primero pertenece al diseño aprobado.

- [ ] **Step 2: Simplificar el comportamiento**

Elimina el estado, callback y variantes que hacen que el Header se desplace fuera de la pantalla. Conserva el mecanismo que detecta que la página superó el umbral de scroll para cambiar de transparente a `glass-panel`.

- [ ] **Step 3: Añadir foco visible**

En `NavLink`, asegúrate de que un enlace enfocado por teclado recibe el mismo tipo de señal visual clara que el hover, sin depender exclusivamente del color. Usa variantes `focus-visible` de Tailwind, no un listener de JavaScript.

- [ ] **Step 4: Verificar interacción con teclado**

Con la página abierta, presiona `Tab` desde la parte superior. Comprueba, uno por uno, que los cuatro enlaces muestran foco, que Enter lleva a su ancla y que ninguno desaparece durante el scroll.

- [ ] **Step 5: Verificar responsive**

Prueba los anchos de 320 px, 375 px y 768 px. Confirma que los enlaces quedan dentro del viewport, pueden tocarse y no se superponen al contenido inicial.

### Task 3: Validación de entrega

**Files:**
- Verify: `app/page.tsx`
- Verify: `components/Header.tsx`

- [ ] **Step 1: Ejecutar validación estática**

Ejecuta `npm run lint`. El resultado esperado para esta tarea es que no aparezcan errores nuevos del Header o de `app/page.tsx`. El error ya identificado en `Skills.tsx` pertenece al siguiente lote y no debe ocultarse con cambios no relacionados.

- [ ] **Step 2: Ejecutar build de producción**

Ejecuta `npm run build`. El resultado esperado es una compilación exitosa y la ruta `/` como contenido estático.

- [ ] **Step 3: Revisar el diff final**

Confirma que los únicos archivos de producto modificados son `app/page.tsx` y `components/Header.tsx`, y que el comportamiento coincide con el criterio de éxito del diseño.

- [ ] **Step 4: Commit de la implementación**

Cuando las verificaciones anteriores estén completas, crea un commit aislado con un mensaje que describa navegación persistente y accesible.

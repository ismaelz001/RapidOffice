# CODE STANDARD

> Estándar oficial de desarrollo de Ofiponiente Digital.
>
> Este documento define cómo debe escribirse el código del proyecto.
>
> No depende del lenguaje utilizado.
> Aplica a frontend, backend, IA, automatizaciones y scripts.

---

# Objetivo

Construir una base de código sencilla.

Escalable.

Fácil de mantener.

Comprensible para cualquier desarrollador o IA.

---

# Filosofía

El mejor código no es el más inteligente.

Es el más fácil de entender.

Toda decisión deberá priorizar:

- claridad
- simplicidad
- mantenibilidad

---

# Principios

## Simplicidad

Preferir siempre la solución más sencilla.

---

## Legibilidad

El código debe poder entenderse sin comentarios excesivos.

---

## Modularidad

Una función.

Una responsabilidad.

Un componente.

Una responsabilidad.

---

## Escalabilidad

Diseñar pensando en el crecimiento.

No en el MVP únicamente.

---

## Reutilización

Evitar duplicar lógica.

Crear componentes reutilizables.

---

## Consistencia

Todo el proyecto deberá seguir el mismo estilo.

---

# Nombres

Utilizar nombres descriptivos.

Correcto

calculateProjectPrice()

Incorrecto

calc()

---

Variables.

Siempre descriptivas.

---

# Funciones

Cada función deberá hacer únicamente una cosa.

Si necesita explicar demasiado lo que hace...

Probablemente hace demasiado.

---

# Componentes

Un componente.

Una responsabilidad.

Evitar componentes gigantes.

---

# Estructura

Agrupar por dominio.

No por tipo de archivo.

Ejemplo.

features/

catalog/

projects/

configurator/

crm/

---

# Comentarios

Comentar únicamente.

Por qué.

No.

Qué.

El código ya debe explicar qué hace.

---

# Errores

Gestionar siempre.

No ocultarlos.

Registrar información útil.

---

# Logs

Nunca dejar logs innecesarios.

Eliminar console.log() antes de producción.

---

# Configuración

Nunca hardcodear.

Utilizar variables de entorno.

---

# Dependencias

Antes de instalar una librería responder.

¿Realmente la necesitamos?

¿Podemos resolverlo sin añadir dependencias?

---

# Rendimiento

Evitar.

Renderizados innecesarios.

Consultas repetidas.

Código muerto.

Dependencias pesadas.

---

# Seguridad

Nunca confiar en datos del cliente.

Validar siempre.

Escapar siempre.

Sanear siempre.

---

# Testing

Toda funcionalidad importante deberá poder probarse.

No crear código imposible de testear.

---

# IA

La IA podrá generar código.

Nunca deberá aprobarse automáticamente.

Todo código deberá revisarse.

---

# Refactorización

Mejorar continuamente.

No esperar al final del proyecto.

---

# Regla de oro

Si dentro de un año cuesta entender una función.

Está mal escrita.

El código deberá ser tan claro que cualquier desarrollador pueda comprenderlo en pocos minutos.

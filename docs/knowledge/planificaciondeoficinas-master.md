# PlanificacionDeOficinas.com — Documento Maestro del Proyecto

**Estado:** En definición
**Proyecto base:** RapidOffice / Ofiponiente
**Dominio principal:** `planificaciondeoficinas.com`
**Marca de respaldo:** Ofiponiente
**Objetivo del documento:** Servir como fuente única de verdad para definir el producto, preparar el alcance comercial y generar después prompts exactos y eficientes para Claude Opus 4.8.

---

# Índice de trabajo

1. [Visión y posicionamiento](#1-visión-y-posicionamiento)
2. Público objetivo
3. Propuesta de valor
4. Modelo de negocio
5. Arquitectura de información
6. Embudo de captación
7. Planificador de oficinas
8. Catálogo y tipos de producto
9. Ecommerce
10. Área privada y gestión interna
11. Reutilización de RapidOffice
12. Arquitectura técnica
13. Contenidos y SEO
14. Redes sociales y publicidad
15. Fases de desarrollo
16. Alcance, exclusiones y riesgos
17. Métricas de éxito
18. Información pendiente del cliente
19. Presupuesto y mantenimiento
20. Prompts de implementación para Claude Opus 4.8

---



# 0. Fuentes de información y jerarquía de datos

## 0.1 Fuente provisional principal

Durante la definición inicial del proyecto se utilizará:

> `https://ofiponiente.es`

como fuente provisional para extraer y organizar:

- Categorías actuales.
- Familias de mobiliario.
- Marcas y fabricantes mostrados.
- Servicios descritos.
- Información corporativa.
- Datos de contacto.
- Historia y experiencia.
- Tipos de espacios.
- Fotografías disponibles.
- Proyectos o referencias publicadas.
- Textos legales existentes.
- Mensajes comerciales utilizados actualmente.

Esta información servirá para construir el primer inventario funcional y evitar pedir al cliente datos que ya tiene publicados.

---

## 0.2 Qué se puede reutilizar inicialmente

Se podrá reutilizar como punto de partida:

- Taxonomía de categorías.
- Nombres de servicios.
- Marcas.
- Descripciones corporativas.
- Datos de ubicación y contacto.
- Fotografías cuya propiedad o permiso de uso correspondan a Ofiponiente.
- Proyectos reales autorizados.
- Preguntas frecuentes.
- Información legal.
- Argumentos comerciales verificables.

La reutilización no implica copiar automáticamente toda la estructura, diseño o redacción antigua.

La información se reorganizará según la nueva arquitectura de PlanificacionDeOficinas.com.

---

## 0.3 Datos que no se considerarán definitivos

Aunque aparezcan en `ofiponiente.es`, deberán confirmarse antes de publicar:

- Precios.
- Stock.
- Plazos.
- Disponibilidad.
- Garantías.
- Cobertura geográfica.
- Costes de transporte.
- Costes de montaje.
- Financiación.
- Descuentos.
- Promociones.
- Marcas actualmente distribuidas.
- Cifras de proyectos o clientes.
- Años de experiencia.
- Servicios que puedan haber cambiado.
- Política de devoluciones.
- Textos legales desactualizados.

Estos datos pueden afectar contratos, rentabilidad, cumplimiento legal o expectativas del cliente.

---

## 0.4 Jerarquía de fuentes

Cuando existan contradicciones, se aplicará este orden:

1. Confirmación directa de Ofiponiente.
2. Documentación interna actualizada.
3. ERP, tarifas, catálogos o inventarios vigentes.
4. Información publicada en `ofiponiente.es`.
5. Inferencias o propuestas del equipo de desarrollo.

Las inferencias nunca se publicarán como hechos.

---

## 0.5 Auditoría previa a la migración

Antes de utilizar el contenido de la web antigua se realizará un inventario con:

- URL actual.
- Tipo de página.
- Título.
- Categoría.
- Contenido útil.
- Imágenes.
- Marca o producto relacionado.
- Estado de actualización.
- Reutilizar.
- Reescribir.
- Fusionar.
- Eliminar.
- Redirigir.
- Validación pendiente.

Resultado esperado:

> Un mapa de contenido antiguo → nueva URL.

---

## 0.6 Regla para Claude Opus 4.8

Cuando se le encargue la auditoría del sitio antiguo, Claude deberá:

- Revisar primero `ofiponiente.es`.
- Extraer estructura y contenido sin modificar código.
- Entregar un inventario compacto.
- Marcar cualquier dato comercial como provisional.
- Detectar duplicados y contenido obsoleto.
- Proponer correspondencia con la nueva arquitectura.
- No copiar el diseño antiguo.
- No inventar precios, stock, servicios o garantías.
- No comenzar la implementación hasta finalizar la auditoría.

---

## 0.7 Estado de acceso

En la preparación de este documento no se ha podido cargar de forma fiable `ofiponiente.es` desde el entorno de análisis.

Por tanto:

- No se han inventariado todavía sus páginas.
- No se han validado sus contenidos.
- La web queda definida como fuente provisional pendiente de auditoría.
- La auditoría deberá realizarse cuando se disponga de acceso funcional desde el entorno de trabajo o mediante una exportación/copia del sitio.


# 1. Visión y posicionamiento

## 1.1 Nombre del proyecto

**PlanificacionDeOficinas.com**

Presentación comercial recomendada:

> **Planificación de Oficinas by Ofiponiente**

El dominio funciona como nombre descriptivo del servicio y Ofiponiente aporta respaldo, experiencia, proveedores, instalaciones, proyectos realizados y capacidad operativa.

---

## 1.2 Qué se va a construir

Una plataforma digital especializada en ayudar a empresas, profesionales y organizaciones a:

- Planificar espacios de trabajo.
- Definir sus necesidades de mobiliario.
- Solicitar una propuesta personalizada.
- Comprar productos concretos online.
- Consultar mobiliario nuevo, outlet o reacondicionado.
- Recibir asesoramiento, presupuesto, suministro y montaje.

No se plantea como una tienda online genérica de muebles.

La plataforma debe funcionar como un **canal comercial completo** que combine:

1. Captación de proyectos.
2. Cualificación de oportunidades.
3. Catálogo de producto.
4. Venta online.
5. Preparación de propuestas comerciales.
6. Seguimiento de clientes y solicitudes.

---

## 1.3 Problema que resuelve

Los clientes que necesitan amueblar una oficina suelen encontrarse con varios problemas:

- No saben qué productos necesitan.
- No saben cuántos puestos caben realmente.
- No conocen las medidas, configuraciones ni requisitos ergonómicos.
- Les resulta difícil calcular un presupuesto completo.
- Encuentran catálogos extensos sin orientación.
- Deben coordinar mobiliario, transporte, montaje, divisiones y retirada.
- No pueden visualizar fácilmente el resultado final.
- Pierden tiempo solicitando presupuestos poco definidos.

La plataforma debe reducir esta incertidumbre mediante un proceso guiado.

---

## 1.4 Solución propuesta

El proyecto ofrecerá tres caminos principales:

### A. Planificar una oficina

Para clientes que quieren montar, renovar o redistribuir un espacio completo.

Acción principal:

> **Planifica tu oficina**

El usuario completará un cuestionario visual con datos como:

- Tipo de espacio.
- Metros cuadrados.
- Número de personas.
- Necesidades.
- Estilo.
- Presupuesto.
- Plazo.
- Ubicación.
- Plano o fotografías.

El equipo comercial recibirá una solicitud estructurada y podrá preparar una propuesta con mucha más información que mediante un formulario convencional.

### B. Comprar mobiliario

Para usuarios que ya saben qué producto necesitan.

Acción principal:

> **Ver catálogo**

Permitirá consultar categorías, comparar productos y comprar directamente aquellos artículos aptos para ecommerce.

### C. Consultar outlet o reacondicionado

Para clientes que priorizan precio, disponibilidad rápida o sostenibilidad.

Acción principal:

> **Ver oportunidades**

Mostrará productos con stock limitado, liquidaciones, exposición, segunda vida o mobiliario reacondicionado.

---

## 1.5 Posicionamiento comercial

La marca no debe presentarse como:

> “Una tienda de muebles de oficina.”

Debe presentarse como:

> **Un servicio especializado para diseñar, presupuestar y equipar espacios de trabajo.**

Mensaje principal recomendado:

> **Diseñamos, presupuestamos y equipamos tu oficina.**

Mensaje complementario:

> Cuéntanos cómo es tu espacio, cuántas personas trabajan en él y qué necesitas. Te ayudamos a convertirlo en una oficina funcional, cómoda y preparada para trabajar.

---

## 1.6 Diferenciación

La diferenciación no dependerá únicamente del precio del producto.

Debe apoyarse en:

- Asesoramiento especializado.
- Planificación guiada.
- Proyectos completos.
- Conocimiento real del mobiliario.
- Selección de fabricantes profesionales.
- Instalación y montaje.
- Posibilidad de nuevo, outlet y reacondicionado.
- Atención humana.
- Visualización y preparación de propuestas.
- Experiencia real de Ofiponiente.
- Herramientas digitales superiores a las de un ecommerce convencional.

---

## 1.7 Referencia competitiva

La principal referencia inicial es **Grupo Montiel Oficinas** por su combinación de:

- Ecommerce.
- Producto nuevo y reacondicionado.
- Presupuestos personalizados.
- Contenido en redes sociales.
- Promociones.
- Casos reales.
- Comunicación cercana.
- Estrategia multicanal.

La intención no es copiar su web, identidad, textos ni diseño.

Se estudiará su modelo para:

- Detectar prácticas comerciales útiles.
- Entender cómo organiza catálogo, captación y contenido.
- Mejorar los puntos donde su experiencia resulte compleja o poco guiada.
- Crear una propuesta propia vinculada a Ofiponiente.

---

## 1.8 Principios del producto

Todas las decisiones futuras deberán respetar estos principios:

1. **El usuario no tiene por qué saber de mobiliario.**
   La plataforma debe guiarlo.

2. **Captar un proyecto vale más que mostrar mil productos.**
   El planificador será una pieza central.

3. **No todos los productos se venden igual.**
   Algunos tendrán compra directa, otros presupuesto y otros ambas opciones.

4. **Primero se valida la captación; después se amplía el ecommerce.**
   No se construirá todo de golpe.

5. **La herramienta debe ayudar también al equipo comercial.**
   No será únicamente una interfaz para clientes.

6. **La experiencia móvil es prioritaria.**
   Formularios, anuncios y redes dirigirán mucho tráfico móvil.

7. **La tecnología debe servir al negocio.**
   No se añadirán funciones complejas sin una utilidad comercial demostrable.

8. **Se reutilizará RapidOffice cuando aporte valor real.**
   No se arrastrará código o arquitectura innecesaria.

---

## 1.9 Alcance inicial de alto nivel

La primera versión comercial deberá incluir:

- Página de inicio.
- Páginas de soluciones.
- Planificador/cuestionario multistep.
- Subida de planos o fotografías.
- Captación y almacenamiento de leads.
- Avisos por correo.
- Panel interno sencillo.
- Catálogo inicial.
- Productos de compra directa y productos bajo presupuesto.
- Proyectos realizados.
- Información de Ofiponiente.
- Analítica.
- SEO técnico básico.
- Cumplimiento legal y protección de datos.

El ecommerce completo, el editor 2D y las automatizaciones avanzadas se dividirán en fases posteriores.

---

## 1.10 Decisiones cerradas en este punto

- El dominio principal será `planificaciondeoficinas.com`.
- La marca estará respaldada por Ofiponiente.
- El producto no será solamente un ecommerce.
- El planificador será el elemento diferencial central.
- Existirán tres rutas: proyecto completo, compra directa y outlet/reacondicionado.
- RapidOffice se utilizará como base de componentes y herramientas, no necesariamente como repositorio final.
- El editor 2D comenzará como herramienta interna del equipo comercial.
- El desarrollo se realizará por fases.
- La referencia competitiva será una inspiración de modelo, nunca una copia.

---

## 1.11 Pendientes relacionados con este punto

Antes de cerrar completamente la identidad se deberá decidir:

- Nombre visual exacto de la marca.
- Uso del logotipo de Ofiponiente.
- Relación entre ambas marcas.
- Colores y sistema visual definitivo.
- Ámbito geográfico inicial.
- Si el reacondicionado será una línea principal desde el lanzamiento.
- Mensaje comercial definitivo de portada.

---


# 2. Público objetivo

## 2.1 Objetivo de esta sección

Definir con precisión qué tipos de clientes debe atraer PlanificacionDeOficinas.com, quién toma la decisión de compra, qué problema intenta resolver y qué segmentos deben priorizarse durante el lanzamiento.

La plataforma no debe intentar vender a todo el mundo desde el primer día. La captación, los contenidos, la publicidad y el planificador se diseñarán primero para los clientes con:

- Necesidad real.
- Presupuesto suficiente.
- Capacidad de decisión.
- Proyecto relativamente próximo.
- Posibilidad de generar una operación rentable.
- Potencial para convertirse en caso de éxito.

---

## 2.2 Cliente ideal principal

El cliente ideal inicial es una empresa o profesional que necesita montar, renovar o ampliar un espacio de trabajo y busca un proveedor capaz de resolver el proyecto completo.

Características habituales:

- Tiene entre 5 y 100 puestos de trabajo.
- Está abriendo, trasladando, reformando o ampliando una oficina.
- Necesita varios tipos de mobiliario.
- Valora el asesoramiento y el montaje.
- No quiere coordinar varios proveedores.
- Tiene una fecha prevista para ejecutar el proyecto.
- Puede facilitar medidas, planos o fotografías.
- Busca una solución profesional, no únicamente el producto más barato.
- Tiene un presupuesto orientativo o capacidad para definirlo.

Este perfil será el centro del mensaje comercial, el cuestionario y las campañas de captación.

---

## 2.3 Segmentos prioritarios

### Segmento A — Empresas que abren o trasladan una oficina

Ejemplos:

- Nuevas empresas.
- Delegaciones.
- Empresas que cambian de local.
- Negocios que amplían plantilla.
- Empresas que abren una nueva sede.

Necesidades habituales:

- Puestos de trabajo.
- Sillas ergonómicas.
- Despachos.
- Salas de reuniones.
- Recepción.
- Almacenamiento.
- Mamparas.
- Cableado y complementos.
- Transporte y montaje.

Valor comercial:

**Muy alto**, porque suele tratarse de proyectos completos, con varias categorías y una fecha definida.

Prioridad:

**Máxima.**

---

### Segmento B — Empresas que renuevan o redistribuyen su espacio

Ejemplos:

- Oficinas antiguas.
- Empresas que incorporan más puestos.
- Negocios que quieren mejorar ergonomía o imagen.
- Empresas que adoptan espacios colaborativos.
- Oficinas que necesitan zonas acústicas o de reunión.

Necesidades habituales:

- Sustitución parcial de mobiliario.
- Reaprovechamiento de elementos existentes.
- Redistribución del espacio.
- Nuevas sillas.
- Mesas multipuesto.
- Divisiones.
- Almacenamiento.
- Retirada del mobiliario anterior.

Valor comercial:

**Alto**, especialmente cuando se combina suministro, retirada, adaptación y montaje.

Prioridad:

**Muy alta.**

---

### Segmento C — Despachos profesionales, clínicas y centros de servicios

Ejemplos:

- Asesorías.
- Abogados.
- Consultorías.
- Clínicas.
- Centros médicos.
- Academias.
- Centros de formación.
- Agencias.
- Inmobiliarias.

Necesidades habituales:

- Recepción.
- Sala de espera.
- Despachos.
- Archivo.
- Privacidad.
- Imagen profesional.
- Aprovechamiento de espacios pequeños.
- Mobiliario resistente y fácil de mantener.

Valor comercial:

**Medio-alto**, con proyectos más pequeños que una sede empresarial, pero con ciclos de decisión más rápidos.

Prioridad:

**Alta.**

---

### Segmento D — Centros educativos, academias y colectividades

Ejemplos:

- Academias.
- Centros de formación.
- Colegios privados.
- Bibliotecas.
- Asociaciones.
- Salas polivalentes.
- Espacios de formación empresarial.

Necesidades habituales:

- Mesas y sillas de formación.
- Mobiliario apilable.
- Almacenamiento.
- Bibliotecas.
- Recepciones.
- Zonas comunes.
- Equipamiento resistente y modular.

Valor comercial:

**Medio-alto**, con posibilidad de pedidos por volumen.

Prioridad:

**Alta**, siempre que Ofiponiente tenga producto, logística y referencias para este segmento.

---

### Segmento E — Coworkings, centros de negocio e interioristas

Incluye dos perfiles distintos:

#### Coworkings y centros de negocio

Necesitan:

- Muchos puestos.
- Flexibilidad.
- Salas de reunión.
- Cabinas o soluciones acústicas.
- Zonas comunes.
- Mobiliario modular.
- Imagen diferenciada.

Valor comercial:

**Alto**, aunque el proceso de comparación puede ser más competitivo.

#### Arquitectos, interioristas y reformistas

No siempre son el cliente final. Pueden actuar como prescriptores o colaboradores.

Necesitan:

- Catálogo profesional.
- Fichas técnicas.
- Dimensiones.
- Acabados.
- Muestras.
- Precios o presupuestos rápidos.
- Apoyo en instalación.

Valor comercial:

**Muy alto a medio plazo**, porque pueden aportar varios proyectos.

Prioridad:

**Media durante el lanzamiento y alta en una fase posterior de colaboración profesional.**

---

### Segmento F — Compradores de producto individual

Ejemplos:

- Autónomos.
- Teletrabajadores.
- Pequeñas oficinas.
- Personas que buscan una silla, mesa o cajonera.
- Empresas que necesitan reponer pocas unidades.

Necesidades habituales:

- Precio visible.
- Entrega rápida.
- Información clara.
- Compra online.
- Confianza.
- Garantía.

Valor comercial:

**Bajo o medio por operación**, pero útil para ecommerce, recurrencia, visibilidad y retargeting.

Prioridad:

**Secundaria.**

No debe condicionar toda la propuesta de valor del lanzamiento.

---

### Segmento G — Compradores de outlet o reacondicionado

Ejemplos:

- Startups.
- Autónomos.
- Asociaciones.
- Academias.
- Empresas con presupuesto limitado.
- Negocios que necesitan mobiliario inmediato.
- Compradores sensibles a sostenibilidad.

Necesidades habituales:

- Stock real.
- Fotografías fieles.
- Estado del producto.
- Medidas.
- Unidades disponibles.
- Plazo de entrega.
- Garantía.
- Transporte y montaje.

Valor comercial:

Variable, pero puede mejorar la rotación de stock y captar clientes que después compren otros servicios.

Prioridad:

**Condicionada a que Ofiponiente disponga de stock real y un proceso operativo claro.**

---

## 2.4 Público objetivo geográfico

El ámbito geográfico inicial debe ajustarse a la capacidad real de Ofiponiente para:

- Transportar.
- Montar.
- Visitar el espacio.
- Resolver incidencias.
- Mantener márgenes rentables.

Estrategia recomendada:

### Zona primaria

Área donde Ofiponiente puede prestar asesoramiento, transporte y montaje con sus propios medios o colaboradores habituales.

Esta zona debe recibir:

- Publicidad local.
- Páginas SEO específicas.
- Mensajes de visita y medición.
- Casos reales cercanos.
- Promesa de servicio completo.

### Zona secundaria

Provincias o comunidades donde se pueda vender producto y coordinar transporte, pero con una operativa menos directa.

Esta zona debe recibir:

- Ecommerce.
- Solicitudes de presupuesto.
- Productos de envío viable.
- Proyectos sujetos a validación logística.

### Zona no cubierta inicialmente

Localidades donde transporte, montaje o postventa hagan inviable la operación.

No se debe prometer cobertura nacional completa hasta comprobar costes y capacidad operativa.

**Decisión pendiente:** Ofiponiente debe confirmar las provincias y condiciones reales de servicio.

---

## 2.5 Personas que intervienen en la compra

La web no hablará únicamente al “cliente empresa”. Debe tener en cuenta a las personas que participan en la decisión.

### Propietario o gerente

Le preocupa:

- Inversión total.
- Plazos.
- Imagen de la empresa.
- Durabilidad.
- Evitar problemas.
- Tener un único responsable.

Mensaje adecuado:

> Una solución completa, con presupuesto claro y acompañamiento desde la planificación hasta el montaje.

---

### Responsable de administración o compras

Le preocupa:

- Comparar propuestas.
- Tener documentación.
- Controlar costes.
- Cumplir plazos.
- Gestionar proveedores.
- Facturación y garantías.

Mensaje adecuado:

> Centralice mobiliario, transporte, montaje y seguimiento en una sola propuesta.

---

### Responsable de recursos humanos u office manager

Le preocupa:

- Ergonomía.
- Comodidad.
- Bienestar.
- Aprovechamiento del espacio.
- Incorporación de nuevos empleados.
- Quejas internas.

Mensaje adecuado:

> Cree un espacio cómodo y funcional adaptado al número real de personas y a su forma de trabajar.

---

### Arquitecto, interiorista o reformista

Le preocupa:

- Compatibilidad con el diseño.
- Medidas.
- Acabados.
- Plazos.
- Fichas técnicas.
- Coordinación con la obra.
- Fiabilidad del proveedor.

Mensaje adecuado:

> Catálogo profesional, apoyo técnico y suministro coordinado para ejecutar el proyecto sin fricciones.

---

### Usuario final

Puede influir, aunque no firme la compra.

Le preocupa:

- Comodidad.
- Ergonomía.
- Privacidad.
- Espacio.
- Estética.
- Facilidad de uso.

El contenido debe mostrar beneficios reales, no solo especificaciones técnicas.

---

## 2.6 Momentos que activan la compra

Las campañas y contenidos deben conectar con situaciones concretas.

Principales desencadenantes:

- Apertura de una empresa.
- Traslado de oficina.
- Reforma.
- Contratación de nuevos empleados.
- Ampliación de instalaciones.
- Mobiliario deteriorado.
- Quejas por ergonomía.
- Cambio de imagen corporativa.
- Creación de nuevas salas.
- Necesidad de dividir espacios.
- Subvención o presupuesto anual disponible.
- Compra urgente por rotura o falta de stock.
- Liquidación o sustitución de mobiliario anterior.

Estos desencadenantes serán útiles para:

- Anuncios.
- Artículos SEO.
- Reels.
- Casos de éxito.
- Preguntas del planificador.
- Automatizaciones comerciales.

---

## 2.7 Problemas y objeciones habituales

### “No sé cuánto cuesta montar una oficina”

Respuesta de la plataforma:

- Rangos orientativos cuando sea viable.
- Cuestionario guiado.
- Propuesta por fases.
- Alternativas de nuevo, outlet o reacondicionado.

### “Todavía no sé exactamente qué necesito”

Respuesta:

- Planificador visual.
- Recomendaciones.
- Llamada de asesoramiento.
- Posibilidad de enviar plano o fotografías.

### “Necesito comparar varios presupuestos”

Respuesta:

- Propuesta clara.
- Desglose.
- Fichas.
- Plazos.
- Garantías.
- Valor añadido del servicio completo.

### “Me parece caro”

Respuesta:

- Explicar durabilidad, ergonomía, instalación y servicio.
- Ofrecer configuraciones alternativas.
- Combinar gamas.
- Proponer reacondicionado cuando exista.
- Evitar competir únicamente mediante descuento.

### “No quiero complicaciones con transporte y montaje”

Respuesta:

- Comunicar cobertura.
- Mostrar proceso.
- Explicar quién coordina cada fase.
- Facilitar un único contacto.

### “No puedo parar la actividad de la empresa”

Respuesta:

- Planificación de entrega.
- Montaje por fases.
- Coordinación horaria.
- Sustitución gradual cuando sea posible.

---

## 2.8 Criterios de decisión del cliente

Los factores que más deben reforzarse en la web son:

1. Confianza en la empresa.
2. Calidad del asesoramiento.
3. Claridad del presupuesto.
4. Capacidad de cumplir plazos.
5. Diseño y funcionalidad.
6. Garantía.
7. Transporte y montaje.
8. Calidad y durabilidad.
9. Precio total.
10. Casos reales.
11. Marcas disponibles.
12. Atención posterior a la compra.

La plataforma debe probar estas capacidades mediante:

- Proyectos realizados.
- Testimonios.
- Fotografías reales.
- Marcas.
- Explicación del proceso.
- Garantías.
- Equipo.
- Cobertura.
- Preguntas frecuentes.
- Datos verificables de experiencia.

---

## 2.9 Cliente ideal prioritario para el lanzamiento

El perfil prioritario queda definido así:

> Empresa, despacho profesional o centro de servicios que necesita amueblar o renovar un espacio de entre 5 y 100 puestos, dentro de la zona operativa de Ofiponiente, con una ejecución prevista en los próximos seis meses y necesidad de suministro, asesoramiento o montaje.

Datos que elevan la prioridad:

- Proyecto dentro de 90 días.
- Presupuesto superior a 3.000 €.
- Más de 5 puestos.
- Plano o medidas disponibles.
- Interés en montaje.
- Responsable de decisión identificado.
- Teléfono válido.
- Localidad cubierta.
- Necesidad de varias categorías de producto.

---

## 2.10 Clasificación comercial de leads

La plataforma asignará una prioridad inicial, que podrá modificarse manualmente.

### Lead A — Oportunidad prioritaria

Cumple varios de estos criterios:

- Proyecto en menos de 90 días.
- Presupuesto medio o alto.
- Más de 10 puestos.
- Necesita proyecto completo.
- Solicita montaje.
- Ha aportado plano o fotografías.
- Se encuentra en zona primaria.
- Es decisor o contacto directo con el decisor.

Acción recomendada:

- Contacto comercial rápido.
- Revisión humana.
- Programar llamada o visita.

---

### Lead B — Oportunidad válida

Características:

- Necesidad clara.
- Ejecución entre 3 y 6 meses.
- Presupuesto sin cerrar.
- Proyecto pequeño o medio.
- Información suficiente para continuar.

Acción:

- Contactar.
- Solicitar datos pendientes.
- Nutrir con casos y soluciones.

---

### Lead C — Exploración temprana

Características:

- Sin fecha definida.
- Sin presupuesto.
- Consulta general.
- Poca información.
- Proyecto lejano.

Acción:

- Enviar resumen.
- Añadir a seguimiento.
- Automatización de contenidos.
- No consumir excesivo tiempo comercial inmediato.

---

### Lead D — Compra puntual

Características:

- Busca uno o pocos productos.
- No necesita proyecto.
- Puede resolverse mediante ecommerce o presupuesto rápido.

Acción:

- Dirigir a producto.
- Resolver disponibilidad y transporte.
- Activar venta cruzada cuando tenga sentido.

---

### Lead no viable

Ejemplos:

- Fuera de cobertura sin solución logística rentable.
- Presupuesto incompatible con la necesidad.
- Solicitud sin datos reales tras varios intentos.
- Proyecto que Ofiponiente no puede ejecutar.
- Consulta ajena al mobiliario o planificación.

Acción:

- Respuesta educada.
- No mantenerlo como oportunidad activa.

---

## 2.11 Segmentos que no deben dominar el lanzamiento

No se priorizarán inicialmente:

- Venta masiva de mobiliario doméstico.
- Decoración general del hogar.
- Clientes que solo buscan el precio más bajo sin valorar servicio.
- Proyectos públicos con licitación compleja, salvo experiencia previa.
- Grandes corporaciones nacionales con requisitos de homologación no disponibles.
- Envíos nacionales de productos voluminosos sin logística validada.
- Configuraciones 3D públicas complejas.
- Consumidores sin relación con espacios de trabajo.

Esto no significa rechazarlos siempre. Significa que no dirigirán la primera versión del producto ni la inversión publicitaria.

---

## 2.12 Implicaciones para la web

La definición del público objetivo obliga a que la plataforma:

- Hable primero de proyectos y resultados.
- Muestre claramente que trabaja con empresas.
- Incluya una ruta rápida para compras puntuales.
- Solicite fecha, ubicación, puestos y presupuesto.
- Permita subir planos y fotografías.
- Muestre casos reales por tipo de espacio.
- Explique transporte, montaje y cobertura.
- Separe nuevo, outlet y reacondicionado.
- Adapte las llamadas a la acción al tipo de usuario.
- Priorice móvil.
- Permita clasificar leads automáticamente.
- Evite una navegación centrada únicamente en categorías de producto.

---

## 2.13 Decisiones cerradas en este punto

- El foco principal será B2B.
- Los proyectos completos tendrán prioridad frente a la venta unitaria.
- El cliente ideal inicial tendrá entre 5 y 100 puestos.
- Se priorizarán aperturas, traslados, reformas y ampliaciones.
- Despachos, clínicas, academias y centros de servicios serán segmentos relevantes.
- Autónomos y teletrabajadores se atenderán principalmente mediante ecommerce.
- Arquitectos e interioristas serán un canal de colaboración posterior.
- La cobertura geográfica dependerá de la capacidad logística real.
- El cuestionario clasificará los leads por valor y urgencia.
- No se prometerá cobertura nacional completa sin validación operativa.

---

## 2.14 Información pendiente del cliente

Ofiponiente debe confirmar:

- Zona primaria de servicio.
- Zona secundaria.
- Pedido mínimo rentable.
- Importe medio actual de sus proyectos.
- Tamaño habitual de sus clientes.
- Sectores donde tiene más experiencia.
- Capacidad mensual de instalaciones.
- Disponibilidad de equipo de montaje.
- Experiencia con centros educativos y colectividades.
- Interés real en reacondicionado.
- Marcas y productos prioritarios.
- Casos de éxito disponibles.
- Tipos de clientes que actualmente generan más margen.
- Tipos de operaciones que suelen causar problemas o pérdidas.



# 3. Propuesta de valor

## 3.1 Objetivo de esta sección

Definir con precisión qué promete PlanificacionDeOficinas.com, por qué un cliente debería elegirla frente a una tienda de mobiliario convencional y cómo debe comunicarse ese valor en la web, los anuncios, las propuestas comerciales y las conversaciones de venta.

La propuesta de valor debe ser:

- Clara.
- Comprensible.
- Creíble.
- Diferenciadora.
- Medible cuando sea posible.
- Adaptada a distintos tipos de cliente.
- Coherente con la capacidad real de Ofiponiente.

No debe basarse en afirmaciones genéricas como:

- “La mejor calidad.”
- “El mejor servicio.”
- “Los mejores precios.”
- “Soluciones innovadoras.”
- “Atención personalizada.”

Estas expresiones solo se utilizarán si van acompañadas de hechos verificables.

---

## 3.2 Propuesta de valor principal

Propuesta recomendada:

> **Diseñamos, presupuestamos y equipamos tu oficina de principio a fin.**

Explicación complementaria:

> Cuéntanos cómo es tu espacio, cuántas personas trabajan en él y qué necesitas. Te ayudamos a elegir el mobiliario adecuado, organizar el espacio y coordinar suministro, transporte y montaje.

Esta propuesta comunica:

- Planificación.
- Asesoramiento.
- Mobiliario.
- Ejecución.
- Acompañamiento.
- Resultado completo.

No presenta la empresa como una simple tienda.

---

## 3.3 Promesa central

La promesa de la marca será:

> **Convertir una necesidad confusa en una propuesta clara y ejecutable.**

El cliente no tiene por qué llegar sabiendo:

- Qué mesa necesita.
- Qué medidas son adecuadas.
- Cuántos puestos caben.
- Qué silla elegir.
- Qué distribución funciona.
- Qué presupuesto es realista.
- Cómo organizar transporte y montaje.

La plataforma debe ayudarle a pasar de:

> “Tengo que montar una oficina y no sé por dónde empezar.”

A:

> “Tengo una propuesta definida, un presupuesto y un siguiente paso claro.”

---

## 3.4 Beneficios principales

### Beneficio 1 — Ahorrar tiempo

El cliente evita:

- Buscar producto por producto.
- Comparar medidas sin criterio.
- Coordinar varios proveedores.
- Repetir la misma información.
- Solicitar presupuestos mal definidos.
- Resolver por separado transporte y montaje.

Mensaje comercial:

> Define tu proyecto una sola vez y recibe una propuesta adaptada.

---

### Beneficio 2 — Reducir errores

La planificación previa ayuda a evitar:

- Comprar mobiliario que no cabe.
- Crear puestos incómodos.
- Dejar pasillos insuficientes.
- Elegir sillas inadecuadas.
- Olvidar almacenamiento.
- No prever cableado o divisiones.
- Superar el presupuesto por falta de planificación.

Mensaje comercial:

> Toma decisiones con medidas, necesidades y presupuesto sobre la mesa.

---

### Beneficio 3 — Tener un único interlocutor

El cliente puede centralizar:

- Asesoramiento.
- Selección de producto.
- Presupuesto.
- Transporte.
- Montaje.
- Seguimiento.
- Incidencias.

Mensaje comercial:

> Un único equipo para coordinar todo el proyecto.

---

### Beneficio 4 — Adaptar la solución al presupuesto

La plataforma debe permitir combinar:

- Gamas de producto.
- Diferentes fabricantes.
- Compra directa.
- Productos bajo presupuesto.
- Nuevo.
- Outlet.
- Reacondicionado.
- Ejecución por fases.

Mensaje comercial:

> Ajustamos la propuesta a tu espacio, prioridades y presupuesto.

No se prometerá siempre “la opción más barata”.

---

### Beneficio 5 — Visualizar y entender la propuesta

El cliente debe poder recibir:

- Resumen del proyecto.
- Selección de productos.
- Medidas.
- Distribución cuando proceda.
- Desglose económico.
- Fases.
- Plazos.
- Condiciones.
- Enlace o documento compartible.

Mensaje comercial:

> Entiende qué se propone, por qué y cuánto cuesta antes de decidir.

---

### Beneficio 6 — Trabajar con experiencia real

Ofiponiente debe respaldar la plataforma mediante:

- Experiencia en mobiliario.
- Conocimiento de fabricantes.
- Proyectos realizados.
- Equipo comercial.
- Capacidad de suministro.
- Montaje.
- Atención posterior.

Mensaje comercial:

> Tecnología para planificar mejor, respaldada por profesionales del mobiliario de oficina.

---

## 3.5 Propuesta de valor por tipo de cliente

### Empresas que abren o trasladan oficina

> Organiza puestos, salas, recepción, almacenamiento y montaje mediante una única propuesta.

Valor principal:

- Reducir coordinación.
- Cumplir plazos.
- Tener visión completa del proyecto.

---

### Empresas que renuevan o amplían

> Aprovecha mejor el espacio actual y adapta la oficina a nuevas personas o formas de trabajo.

Valor principal:

- Redistribución.
- Sustitución por fases.
- Reutilización cuando sea posible.
- Menor impacto en la actividad.

---

### Despachos, clínicas y centros de servicios

> Crea un espacio profesional, cómodo y coherente con la imagen que quieres transmitir.

Valor principal:

- Recepción.
- Privacidad.
- Comodidad.
- Imagen.
- Aprovechamiento de metros.

---

### Academias y colectividades

> Equipa espacios resistentes, flexibles y adaptados al uso diario.

Valor principal:

- Volumen.
- Modularidad.
- Durabilidad.
- Almacenamiento.
- Facilidad de mantenimiento.

---

### Arquitectos e interioristas

> Accede a producto profesional, información técnica y apoyo para ejecutar el mobiliario del proyecto.

Valor principal:

- Fichas.
- Acabados.
- Medidas.
- Presupuestos.
- Coordinación.
- Fiabilidad.

---

### Compradores de producto individual

> Encuentra mobiliario profesional con información clara, asesoramiento y entrega adaptada.

Valor principal:

- Confianza.
- Compra sencilla.
- Producto profesional.
- Soporte.

---

### Compradores de outlet o reacondicionado

> Reduce la inversión con mobiliario disponible, revisado y descrito con transparencia.

Valor principal:

- Ahorro.
- Disponibilidad.
- Sostenibilidad.
- Información real sobre estado y unidades.

---

## 3.6 Diferenciadores principales

### 1. Planificador guiado

La diferencia central frente a una tienda convencional será que el usuario puede describir su proyecto sin conocer previamente el catálogo.

Debe guiar al cliente mediante:

- Tipo de espacio.
- Número de puestos.
- Metros.
- Necesidades.
- Estilo.
- Plazo.
- Presupuesto.
- Localidad.
- Planos y fotografías.

---

### 2. Modelo híbrido

La plataforma combinará:

- Captación de proyectos.
- Presupuesto personalizado.
- Catálogo.
- Compra directa.
- Outlet o reacondicionado.
- Herramientas internas para comerciales.

Esto permite atender tanto una compra pequeña como una oficina completa.

---

### 3. Conexión entre planificación y venta

El cuestionario no será un formulario aislado.

La información capturada debe servir para:

- Clasificar el lead.
- Recomendar categorías.
- Preparar una propuesta.
- Crear un proyecto interno.
- Seleccionar productos.
- Elaborar presupuesto.
- Hacer seguimiento.

---

### 4. Propuesta comprensible

El cliente debe recibir una explicación clara de:

- Qué necesita.
- Qué se incluye.
- Qué alternativas tiene.
- Qué cuesta.
- Qué plazo se estima.
- Qué depende de validación.

No se entregarán presupuestos confusos o llenos de referencias sin contexto.

---

### 5. Ejecución real

La plataforma no vende únicamente inspiración.

Debe conectar con:

- Stock o disponibilidad.
- Fabricantes.
- Transporte.
- Montaje.
- Medición.
- Visita.
- Seguimiento.

La web debe dejar claro qué servicios están realmente disponibles en cada zona.

---

## 3.7 Jerarquía de mensajes de la web

### Mensaje principal

> **Diseñamos, presupuestamos y equipamos tu oficina.**

### Explicación

> Define tu espacio, tus necesidades y tu presupuesto. Te ayudamos a convertirlo en una oficina funcional, cómoda y preparada para trabajar.

### Acción principal

> **Planifica tu oficina**

### Acción secundaria

> **Ver mobiliario**

### Acción alternativa

> **Ver outlet y reacondicionado**

---

## 3.8 Mensajes alternativos para pruebas

Estas variantes podrán utilizarse en pruebas de conversión, campañas o secciones específicas.

### Variante A — Orientada a facilidad

> **Montar tu oficina no debería ser complicado.**

> Te ayudamos a definir qué necesitas, cuánto puede costar y cómo ejecutarlo.

### Variante B — Orientada a proyecto completo

> **Todo lo que necesita tu oficina, coordinado en un solo proyecto.**

> Mobiliario, distribución, transporte y montaje.

### Variante C — Orientada a resultado

> **Convierte un espacio vacío en una oficina preparada para trabajar.**

> Diseñamos una propuesta adaptada a tu equipo, espacio y presupuesto.

### Variante D — Orientada a ahorro de tiempo

> **Cuéntanos tu proyecto una vez. Nosotros te ayudamos con el resto.**

> Recibe una propuesta clara sin perder semanas comparando productos y proveedores.

No se elegirá una variante definitiva sin probarla con el cliente y usuarios reales.

---

## 3.9 Pruebas necesarias para sostener la propuesta

La propuesta de valor debe demostrarse mediante elementos concretos.

### Prueba social

- Proyectos reales.
- Fotografías.
- Testimonios.
- Empresas atendidas.
- Sectores.
- Casos antes y después.

### Prueba técnica

- Marcas.
- Fichas.
- Medidas.
- Garantías.
- Materiales.
- Certificaciones cuando existan.

### Prueba operativa

- Zonas de servicio.
- Proceso de trabajo.
- Transporte.
- Montaje.
- Plazos orientativos.
- Atención postventa.

### Prueba empresarial

- Años de experiencia.
- Instalaciones.
- Equipo.
- Número de proyectos.
- Fabricantes.
- Datos verificables.

No se publicará ninguna cifra sin confirmación de Ofiponiente.

---

## 3.10 Proceso comercial que debe comunicar la plataforma

El proceso recomendado será:

### 1. Cuéntanos tu proyecto

El cliente aporta:

- Espacio.
- Personas.
- Necesidades.
- Presupuesto.
- Plazo.
- Localidad.
- Archivos.

### 2. Revisamos la información

El equipo valida:

- Viabilidad.
- Medidas.
- Cobertura.
- Disponibilidad.
- Necesidad de visita.
- Datos pendientes.

### 3. Preparamos una propuesta

La propuesta puede incluir:

- Distribución.
- Productos.
- Alternativas.
- Presupuesto.
- Transporte.
- Montaje.
- Plazos.

### 4. Ajustamos contigo

El cliente puede:

- Cambiar gama.
- Modificar cantidades.
- Priorizar partidas.
- Dividir la ejecución.
- Añadir o eliminar servicios.

### 5. Suministramos y montamos

Cuando corresponda:

- Confirmación.
- Pedido.
- Coordinación.
- Entrega.
- Montaje.
- Revisión final.

Este proceso debe aparecer en la web de forma visual y sencilla.

---

## 3.11 Estrategia de precio percibido

La plataforma no debe intentar justificar el precio mediante tecnología.

El cliente no compra:

- Next.js.
- Un panel.
- Una base de datos.
- Un configurador.
- Horas de programación.

El cliente de Ofiponiente compra:

- Una oficina funcional.
- Menos errores.
- Menos tiempo perdido.
- Coordinación.
- Producto.
- Montaje.
- Seguridad en la decisión.

La comunicación debe comparar el coste con:

- Errores de compra.
- Retrasos.
- Incomodidad.
- Mala distribución.
- Proveedores descoordinados.
- Sustituciones prematuras.
- Tiempo del equipo interno.

---

## 3.12 Qué no se debe prometer

No se prometerá:

- Presupuesto final instantáneo para cualquier proyecto.
- Diseño gratuito ilimitado.
- Precio más bajo del mercado.
- Entrega inmediata sin comprobar stock.
- Cobertura nacional completa.
- Ahorros porcentuales sin datos.
- Distribuciones técnicamente válidas sin revisar medidas.
- Reacondicionado sin stock y proceso real.
- Financiación sin proveedor confirmado.
- Respuesta en un plazo concreto que el equipo no pueda cumplir.

Las promesas se adaptarán a la capacidad operativa real.

---

## 3.13 Propuesta de valor mínima para el MVP

La primera versión debe demostrar, como mínimo, que:

1. El usuario entiende en pocos segundos qué ofrece la plataforma.
2. Puede elegir entre planificar un proyecto, comprar producto o consultar oportunidades.
3. Puede completar una solicitud sin conocimientos técnicos.
4. Ofiponiente recibe información mejor estructurada.
5. El equipo puede priorizar oportunidades.
6. El cliente recibe confirmación y un siguiente paso claro.
7. La experiencia transmite confianza profesional.
8. Los proyectos reales respaldan la promesa.

Si el MVP no consigue esto, añadir más catálogo o funciones no resolverá el problema.

---

## 3.14 Indicadores para validar la propuesta de valor

Se medirán:

- Porcentaje de visitantes que inician el planificador.
- Porcentaje que lo completa.
- Número de solicitudes válidas.
- Porcentaje de leads A y B.
- Tiempo de respuesta comercial.
- Número de llamadas o visitas generadas.
- Presupuestos enviados.
- Proyectos aceptados.
- Valor medio de oportunidad.
- Productos más consultados.
- Motivos de abandono.
- Mensajes que generan mejor conversión.

---

## 3.15 Decisiones cerradas en este punto

- La propuesta principal será proyecto completo, no tienda genérica.
- El mensaje base será “Diseñamos, presupuestamos y equipamos tu oficina”.
- El beneficio central será convertir una necesidad confusa en una propuesta clara.
- El planificador será el diferenciador principal.
- Se comunicará un proceso de cinco pasos.
- La tecnología no será el argumento comercial principal.
- El valor se demostrará mediante proyectos, proceso, equipo y capacidad operativa.
- No se realizarán promesas que Ofiponiente no pueda sostener.
- La propuesta se adaptará por segmento.
- Los mensajes principales se validarán mediante datos y pruebas.

---

## 3.16 Información pendiente del cliente

Ofiponiente debe confirmar:

- Servicios exactos incluidos.
- Si realiza medición en domicilio o empresa.
- Si prepara distribuciones o planos.
- Si dispone de personal propio de montaje.
- Si retira mobiliario antiguo.
- Si ofrece financiación.
- Garantías por tipo de producto.
- Plazos habituales.
- Marcas prioritarias.
- Diferenciadores que sus clientes valoran actualmente.
- Motivos habituales por los que gana o pierde presupuestos.
- Datos reales de experiencia.
- Testimonios disponibles.
- Proyectos que pueden mostrarse.
- Nivel de asesoramiento gratuito asumible.
- Plazo de respuesta comercial que puede garantizar.



# 4. Modelo de negocio

## 4.1 Objetivo de esta sección

Definir cómo generará ingresos PlanificacionDeOficinas.com, qué tipos de operaciones atenderá, cómo se relacionan ecommerce, proyectos, servicios y outlet, y qué líneas deben priorizarse para asegurar rentabilidad.

La plataforma no debe medirse únicamente por el número de ventas online.

Su función comercial será generar ingresos mediante varios caminos:

1. Venta directa de productos.
2. Proyectos completos de mobiliario.
3. Servicios asociados.
4. Outlet y reacondicionado.
5. Venta cruzada y recurrencia.
6. Captación de oportunidades para el equipo comercial.

El modelo debe priorizar margen, viabilidad y calidad de oportunidad, no solo volumen de tráfico.

---

## 4.2 Fuentes principales de ingresos

### Línea 1 — Proyectos completos

Será la línea de mayor valor estratégico.

Incluye proyectos como:

- Oficinas completas.
- Nuevas sedes.
- Traslados.
- Ampliaciones.
- Renovaciones.
- Despachos.
- Recepciones.
- Salas de reuniones.
- Academias.
- Centros de formación.
- Coworkings.
- Mamparas y divisiones.
- Archivo y almacenamiento.

Ingresos posibles:

- Venta de mobiliario.
- Transporte.
- Montaje.
- Medición.
- Diseño o distribución.
- Retirada de mobiliario anterior.
- Coordinación del proyecto.
- Servicios complementarios.

Características:

- Ticket medio o alto.
- Mayor necesidad de asesoramiento.
- Ciclo de venta más largo.
- Margen potencial superior.
- Mayor posibilidad de caso de éxito.
- Mayor dependencia de planificación y seguimiento.

Prioridad:

**Máxima.**

---

### Línea 2 — Venta directa mediante ecommerce

Incluye productos que pueden comprarse sin un proyecto complejo.

Ejemplos:

- Sillas.
- Mesas estándar.
- Cajoneras.
- Armarios.
- Estanterías.
- Complementos.
- Accesorios ergonómicos.
- Iluminación.
- Packs básicos.

Ingresos:

- Margen comercial del producto.
- Transporte.
- Montaje opcional.
- Venta cruzada.
- Reposición futura.

Características:

- Ciclo de compra corto.
- Menor intervención comercial.
- Necesidad de precio, stock y logística claros.
- Mayor sensibilidad a comparación de precio.
- Útil para generar recurrencia y captar nuevos clientes.

Prioridad:

**Media-alta**, después de validar catálogo, stock y transporte.

---

### Línea 3 — Productos bajo presupuesto

Incluye productos o configuraciones que no deben venderse con un precio final cerrado sin revisión.

Ejemplos:

- Mesas multipuesto.
- Mamparas.
- Cabinas acústicas.
- Recepciones a medida.
- Despachos completos.
- Grandes cantidades.
- Productos con múltiples acabados.
- Proyectos que necesitan medición.
- Instalaciones con transporte complejo.

Modelo de conversión:

- Mostrar precio “desde” cuando sea fiable.
- Permitir seleccionar opciones iniciales.
- Solicitar datos del proyecto.
- Generar oportunidad comercial.
- Preparar presupuesto definitivo.

Prioridad:

**Máxima**, porque conecta catálogo y proyectos.

---

### Línea 4 — Outlet, exposición y reacondicionado

Puede incluir:

- Mobiliario de exposición.
- Liquidaciones.
- Fin de serie.
- Stock discontinuado.
- Devoluciones revisadas.
- Segunda vida.
- Producto reacondicionado.

Ingresos y beneficios:

- Rotación de stock.
- Recuperación de capital inmovilizado.
- Captación de clientes sensibles al precio.
- Diferenciación.
- Venta cruzada.
- Posicionamiento en sostenibilidad.

Condiciones mínimas:

- Stock real.
- Fotografías reales.
- Estado descrito con precisión.
- Número de unidades.
- Medidas.
- Precio.
- Garantía.
- Condiciones de transporte.
- Proceso de revisión.

Prioridad:

**Condicionada a la operativa real de Ofiponiente.**

No se desarrollará como línea principal si no existe inventario y proceso.

---

### Línea 5 — Servicios asociados

Servicios potencialmente facturables:

- Medición.
- Visita técnica.
- Diseño de distribución.
- Proyecto 2D.
- Propuesta visual.
- Montaje.
- Transporte.
- Retirada.
- Reubicación interna.
- Instalación por fases.
- Gestión de incidencias.
- Mantenimiento o reposición.
- Asesoramiento ergonómico especializado.

Estos servicios pueden:

- Incluirse dentro del margen del proyecto.
- Cobrar como partidas separadas.
- Descontarse si el cliente confirma el pedido.
- Ofrecerse como paquete.

La política concreta debe acordarse con Ofiponiente.

---

## 4.3 Modelo híbrido de conversión

La plataforma utilizará tres tipos principales de ficha comercial.

### Tipo A — Compra directa

El cliente puede:

- Ver precio.
- Elegir variante.
- Consultar disponibilidad.
- Añadir al carrito.
- Pagar.
- Elegir entrega o montaje cuando sea viable.

Adecuado para:

- Productos estándar.
- Unidades sueltas.
- Logística conocida.
- Pocas variantes.
- Stock controlable.

---

### Tipo B — Solicitud de presupuesto

El cliente puede:

- Consultar información.
- Seleccionar cantidad aproximada.
- Adjuntar datos.
- Solicitar propuesta.
- Integrar el producto en un proyecto.

Adecuado para:

- Producto complejo.
- Grandes cantidades.
- Variantes amplias.
- Instalación.
- Proyectos completos.
- Precio dependiente de fabricante o transporte.

---

### Tipo C — Modelo híbrido

La ficha puede ofrecer:

- Precio estándar.
- Compra directa de una configuración base.
- Solicitud de configuración personalizada.
- Presupuesto por volumen.
- Montaje opcional.
- Alternativas relacionadas.

Ejemplo:

> Desde 320 €
> Comprar configuración estándar
> Solicitar propuesta para varias unidades

Este será un modelo importante para no perder ventas rápidas ni oportunidades grandes.

---

## 4.4 Unidades económicas que deben conocerse

Antes de decidir qué productos lanzar, Ofiponiente debe facilitar o calcular:

- Precio de compra.
- Precio de venta.
- Margen bruto.
- Coste de transporte.
- Coste de montaje.
- Coste de embalaje.
- Coste de pasarela de pago.
- Coste de devolución.
- Riesgo de daños.
- Tiempo comercial.
- Tiempo administrativo.
- Coste de adquisición del cliente.
- Valor medio del pedido.
- Valor medio de proyecto.

Fórmula simplificada:

> Margen real = precio de venta − producto − transporte − montaje − comisiones − incidencias − coste operativo.

Un producto puede parecer rentable por margen comercial y dejar de serlo al incluir logística o montaje.

---

## 4.5 Criterios para decidir qué se vende online

Un producto será candidato a compra directa cuando cumpla la mayoría de estos criterios:

- Precio estable.
- Stock o plazo conocido.
- Variantes limitadas.
- Medidas claras.
- Transporte calculable.
- Riesgo bajo de devolución.
- Instalación sencilla.
- Fotografías y ficha disponibles.
- Margen suficiente.
- Posibilidad de empaquetado y envío viable.

Un producto irá a presupuesto cuando:

- El precio cambia con frecuencia.
- Hay muchas configuraciones.
- Requiere medición.
- Depende del proyecto.
- El transporte cambia mucho.
- Necesita montaje especializado.
- Hay cantidades grandes.
- Requiere coordinación con obra.
- Tiene poca información digital.
- El margen depende de negociación.

---

## 4.6 Prioridad comercial por rentabilidad

### Prioridad 1 — Proyectos completos rentables

Características:

- Varias categorías.
- Montaje.
- Ticket medio o alto.
- Zona cubierta.
- Cliente con fecha.
- Información suficiente.
- Capacidad de decisión.

Objetivo:

- Contacto comercial rápido.
- Visita o llamada.
- Propuesta.
- Cierre.

---

### Prioridad 2 — Presupuestos por volumen

Características:

- Varias unidades.
- Producto identificado.
- Empresa.
- Necesidad clara.
- Fecha definida.

Objetivo:

- Resolver disponibilidad.
- Ajustar precio.
- Ofrecer complementos.
- Convertir en pedido.

---

### Prioridad 3 — Venta directa rentable

Características:

- Producto estándar.
- Margen validado.
- Transporte viable.
- Baja fricción.

Objetivo:

- Automatizar compra.
- Aumentar ticket.
- Captar recurrencia.

---

### Prioridad 4 — Consultas exploratorias

Características:

- Sin fecha.
- Sin presupuesto.
- Sin alcance.
- Poca información.

Objetivo:

- Nutrir.
- Automatizar.
- Evitar consumo comercial excesivo.

---

## 4.7 Ticket y segmentación económica inicial

Los siguientes rangos son provisionales y deberán validarse con Ofiponiente.

### Compra puntual

- Hasta 1.000 €.
- Una o pocas unidades.
- Resolución mediante ecommerce o presupuesto rápido.

### Proyecto pequeño

- Entre 1.000 € y 5.000 €.
- Despacho, recepción pequeña, reposición o pocos puestos.

### Proyecto medio

- Entre 5.000 € y 20.000 €.
- Oficina pequeña o mediana.
- Varias categorías.
- Posible montaje.

### Proyecto alto

- Entre 20.000 € y 50.000 €.
- Sede, ampliación, colectividad o instalación amplia.

### Proyecto estratégico

- Más de 50.000 €.
- Requiere seguimiento específico.
- Posible visita, diseño, negociación y planificación avanzada.

Estos rangos no deben mostrarse públicamente hasta validar precios y mercado.

---

## 4.8 Estrategia de presupuestos

La plataforma debe diferenciar:

### Estimación orientativa

Sirve para:

- Clasificar.
- Ayudar al cliente.
- Reducir incertidumbre.
- Filtrar incompatibilidades.

No será una oferta vinculante.

### Presupuesto comercial

Debe incluir:

- Productos.
- Cantidades.
- Precios.
- Descuentos.
- Transporte.
- Montaje.
- Impuestos.
- Plazos.
- Validez.
- Condiciones.
- Exclusiones.

### Propuesta de proyecto

Añade contexto:

- Necesidad.
- Distribución.
- Alternativas.
- Justificación.
- Imágenes.
- Fases.
- Próximos pasos.

RapidOffice podrá evolucionar para facilitar esta propuesta.

---

## 4.9 Cobro por planificación o diseño

Debe evitarse el trabajo ilimitado gratuito.

Opciones posibles:

### Modelo A — Planificación incluida

Se ofrece sin coste cuando:

- El proyecto tiene suficiente valor.
- El alcance es razonable.
- Existe intención real.
- El trabajo previo es limitado.

### Modelo B — Estudio inicial de pago

Se cobra por:

- Medición.
- Distribución.
- Propuesta detallada.
- Varias revisiones.
- Render o documentación.

El importe puede descontarse del pedido final.

### Modelo C — Servicio profesional independiente

Para clientes que solo quieren:

- Proyecto.
- Distribución.
- Selección.
- Documentación.

No requiere compra posterior.

Recomendación inicial:

> Ofrecer una primera orientación comercial sin coste y cobrar estudios detallados cuando impliquen trabajo técnico relevante.

La política exacta debe validarse con Ofiponiente.

---

## 4.10 Venta cruzada

La plataforma debe aumentar el valor del pedido mediante relaciones útiles, no mediante recomendaciones aleatorias.

Ejemplos:

- Mesa → silla + cajonera + pasacables.
- Puesto operativo → electrificación + almacenamiento.
- Sala de reunión → sillas + pantalla + acústica.
- Recepción → mostrador + espera + iluminación.
- Archivo → armarios + etiquetado + cerraduras.
- Silla → reposapiés + protección de suelo.
- Proyecto completo → transporte + montaje + retirada.

La venta cruzada debe basarse en:

- Compatibilidad.
- Necesidad.
- Cantidad.
- Tipo de espacio.
- Presupuesto.

---

## 4.11 Recurrencia

La relación comercial puede continuar mediante:

- Reposición.
- Nuevas incorporaciones.
- Ampliaciones.
- Sustitución de sillas.
- Accesorios.
- Mantenimiento.
- Nuevas sedes.
- Renovación por fases.
- Recompra de mobiliario.
- Recomendaciones a otras empresas.

La plataforma deberá conservar:

- Historial de proyectos.
- Productos suministrados.
- Contactos.
- Fechas.
- Garantías.
- Necesidades futuras.

Siempre respetando protección de datos y permisos comerciales.

---

## 4.12 Modelo de adquisición

Los canales principales serán:

### Orgánico

- SEO.
- Google Business Profile.
- Proyectos reales.
- Contenido educativo.
- Redes sociales.
- Referencias.
- Colaboradores.

### Pago

- Google Ads.
- Meta Ads.
- Retargeting.
- Campañas locales.
- Campañas por producto.
- Campañas de apertura o reforma.

### Comercial

- Contacto directo.
- Base de clientes.
- Arquitectos.
- Interioristas.
- Reformistas.
- Constructoras.
- Inmobiliarias comerciales.
- Asociaciones empresariales.

### Recomendación

- Clientes.
- Proveedores.
- Profesionales colaboradores.
- Casos de éxito.

---

## 4.13 Modelo de colaboración profesional

A medio plazo se podrá crear un canal para:

- Arquitectos.
- Interioristas.
- Estudios.
- Reformistas.
- Instaladores.
- Agentes comerciales.

Opciones:

- Descuento profesional.
- Comisión.
- Cuenta profesional.
- Presupuestos rápidos.
- Catálogo técnico.
- Muestras.
- Seguimiento de proyectos.
- Marca blanca parcial.
- Enlaces compartibles.

No se desarrollará antes de validar el canal principal.

---

## 4.14 Papel del ecommerce

El ecommerce tendrá cuatro funciones:

1. Generar ventas directas.
2. Mostrar producto y precio.
3. Captar solicitudes de volumen.
4. Aportar confianza y visibilidad.

No debe obligar a publicar todo el catálogo desde el inicio.

Estrategia recomendada:

- Lanzar una selección rentable.
- Medir demanda.
- Añadir categorías progresivamente.
- Priorizar fichas completas.
- Evitar miles de referencias sin contenido, stock o control.

---

## 4.15 Catálogo mínimo de lanzamiento

El catálogo inicial debería representar necesidades frecuentes.

Propuesta provisional:

- Sillas operativas.
- Sillas de dirección.
- Sillas de visita.
- Mesas individuales.
- Mesas multipuesto.
- Mesas de reunión.
- Cajoneras.
- Armarios.
- Estanterías.
- Recepción.
- Mamparas.
- Complementos.
- Packs de oficina.
- Selección outlet.

No es necesario que todas las categorías tengan compra directa.

Criterio:

> Es mejor lanzar 50 productos bien trabajados que 2.000 referencias incompletas.

---

## 4.16 Packs y soluciones cerradas

Los packs pueden reducir fricción.

Ejemplos:

- Puesto esencial.
- Puesto ergonómico.
- Despacho profesional.
- Sala de reunión para 6 personas.
- Recepción básica.
- Aula para 20 personas.
- Pack startup.
- Pack ampliación de 5 puestos.

Cada pack puede incluir:

- Productos.
- Cantidades.
- Opciones.
- Precio orientativo.
- Transporte.
- Montaje opcional.
- Solicitud por volumen.

Los packs deben basarse en configuraciones reales y rentables.

---

## 4.17 Financiación

La financiación puede mejorar conversión en proyectos medios y altos.

Posibilidades:

- Pago fraccionado.
- Renting.
- Leasing.
- Financiación externa.
- Pago por hitos.

No se comunicará hasta confirmar:

- Proveedor.
- Condiciones.
- Importe mínimo.
- Costes.
- Aprobación.
- Obligaciones legales.

---

## 4.18 Ingresos de la plataforma para el desarrollador

El proyecto de desarrollo debe separar claramente:

### Desarrollo inicial

Cobro por fases:

- Descubrimiento.
- Diseño.
- MVP de captación.
- Catálogo.
- Ecommerce.
- Herramientas internas.
- Lanzamiento.

### Mantenimiento mensual

Puede incluir:

- Hosting y supervisión.
- Actualizaciones.
- Copias de seguridad.
- Soporte.
- Correcciones.
- Analítica.
- Cambios pequeños.
- Gestión técnica.
- Evolución limitada.

### Evolutivos

Se presupuestarán aparte:

- Nuevos módulos.
- Integraciones.
- Automatizaciones.
- Editor avanzado.
- ERP.
- Nuevos canales.
- Cambios amplios.

### Servicios opcionales

- SEO.
- Contenido.
- Redes.
- Publicidad.
- Carga de catálogo.
- Fotografía.
- Diseño.
- Consultoría digital.

El mantenimiento no debe convertirse en desarrollo ilimitado.

---

## 4.19 Riesgos económicos

### Catálogo sin datos

Consecuencia:

- Mucho trabajo manual.
- Retrasos.
- Errores.
- Imposibilidad de automatizar.

Medida:

- Auditar datos antes de presupuestar carga.

### Transporte no definido

Consecuencia:

- Ventas con margen negativo.
- Abandono de carrito.
- Incidencias.

Medida:

- Definir zonas, tarifas y excepciones.

### Stock dependiente de proveedores

Consecuencia:

- Plazos incorrectos.
- Cancelaciones.
- Mala experiencia.

Medida:

- Mostrar disponibilidad orientativa y validar pedidos.

### Demasiadas variantes

Consecuencia:

- Configurador complejo.
- Errores de pedido.
- Mantenimiento costoso.

Medida:

- Reducir opciones online y derivar casos complejos a presupuesto.

### Trabajo técnico gratuito

Consecuencia:

- Horas no facturadas.
- Baja rentabilidad.
- Clientes poco comprometidos.

Medida:

- Limitar revisiones y cobrar estudios avanzados.

### Competencia por precio

Consecuencia:

- Margen bajo.
- Publicidad cara.
- Clientes poco fieles.

Medida:

- Vender servicio completo, confianza y proyecto.

---

## 4.20 Métricas económicas

Se medirán:

- Facturación por canal.
- Margen bruto.
- Margen real estimado.
- Ticket medio.
- Valor medio de proyecto.
- Ratio lead a presupuesto.
- Ratio presupuesto a venta.
- Coste por lead.
- Coste por cliente.
- Tiempo hasta cierre.
- Ingresos por venta directa.
- Ingresos por proyectos.
- Ingresos por servicios.
- Tasa de repetición.
- Venta cruzada.
- Devoluciones.
- Incidencias.
- Rentabilidad por categoría.

---

## 4.21 Modelo de negocio recomendado para el lanzamiento

Orden recomendado:

### Primera etapa

- Captación de proyectos.
- Presupuestos por volumen.
- Catálogo escaparate.
- Productos bajo presupuesto.
- Servicios de transporte y montaje.

### Segunda etapa

- Compra directa de selección rentable.
- Packs.
- Outlet.
- Automatización comercial.

### Tercera etapa

- Editor 2D.
- Propuestas avanzadas.
- Colaboradores profesionales.
- Integraciones.
- Recurrencia y área de cliente.

Este orden minimiza riesgo y permite generar oportunidades antes de completar el ecommerce.

---

## 4.22 Decisiones cerradas en este punto

- Los proyectos completos serán la principal fuente de valor.
- El ecommerce será selectivo, no masivo desde el inicio.
- Existirán productos de compra directa, presupuesto e híbridos.
- El catálogo inicial priorizará calidad de información y rentabilidad.
- Transporte, montaje y servicios se tratarán como parte económica del proyecto.
- El outlet solo se lanzará con stock y proceso reales.
- Los estudios avanzados no serán ilimitadamente gratuitos.
- Se medirá margen real, no solo facturación.
- La carga de catálogo y los evolutivos se presupuestarán aparte.
- El mantenimiento tendrá alcance limitado y definido.
- La primera etapa priorizará captación y presupuesto frente a checkout completo.

---

## 4.23 Información pendiente del cliente

Ofiponiente debe facilitar:

- Facturación media por proyecto.
- Ticket medio.
- Margen por categoría.
- Productos más vendidos.
- Productos más rentables.
- Productos problemáticos.
- Costes de transporte.
- Costes de montaje.
- Zonas.
- Pedido mínimo.
- Tarifas.
- Stock.
- Gestión de proveedores.
- Política de devoluciones.
- Garantías.
- Capacidad de reacondicionado.
- Productos aptos para compra directa.
- Productos que exigen presupuesto.
- Posibilidad de packs.
- Servicios facturables.
- Política actual de diseño o medición.
- Condiciones de pago.
- Financiación.
- Sistema de facturación o ERP.
- Persona responsable del catálogo.
- Objetivo de ventas del canal digital.



# 5. Arquitectura de información y estrategia de dominios

## 5.1 Objetivo de esta sección

Definir:

- Qué dominio tendrá cada función.
- Qué papel conserva la web actual.
- Cómo se organiza la plataforma pública.
- Qué páginas deben existir.
- Cómo navegarán los diferentes tipos de usuario.
- Cómo evitar duplicidad de contenido, dispersión de SEO y confusión de marca.
- Cómo se separarán web pública, ecommerce y gestión interna.

Esta sección establece la estructura funcional y comercial. La arquitectura técnica concreta se detallará más adelante.

---

## 5.2 Decisión principal sobre dominios

### Dominio público y comercial definitivo

El dominio principal será:

> `https://planificaciondeoficinas.com`

En este dominio convivirán:

- La página de inicio.
- La captación de proyectos.
- El planificador.
- Las páginas de soluciones.
- El catálogo.
- El ecommerce.
- El outlet.
- Los proyectos realizados.
- Los contenidos SEO.
- La información corporativa.
- El contacto.

No se construirá una landing aislada que envíe al usuario a otra web diferente para comprar o solicitar presupuesto.

La experiencia pública debe sentirse como una única plataforma.

---

### Papel de `ofiponiente.rodorte.com`

La web actual se utilizará como:

- Prototipo visual.
- Demostración para el cliente.
- Referencia de diseño.
- Entorno temporal de desarrollo.
- Fuente de componentes y animaciones reutilizables.

No debe utilizarse como dominio definitivo porque:

- Está alojada bajo el dominio corporativo del desarrollador.
- No pertenece directamente a la marca del cliente.
- Divide identidad y autoridad SEO.
- Puede generar dependencia o confusión.
- No es adecuada como dirección comercial a largo plazo.

Antes del lanzamiento debe configurarse con una de estas opciones:

1. Protección por contraseña.
2. Cabecera o configuración `noindex`.
3. Acceso únicamente como entorno de demostración.
4. Redirección al dominio definitivo cuando deje de ser necesaria.

---

### Papel de `ofiponiente.es`

La web antigua de Ofiponiente no debe competir en paralelo con el nuevo proyecto mediante contenido duplicado.

Estrategia recomendada al lanzar:

- Mantener temporalmente el dominio por su antigüedad y reconocimiento.
- Preparar redirecciones 301 desde las URLs antiguas a sus equivalentes nuevas.
- Redirigir la portada hacia `planificaciondeoficinas.com`.
- Conservar el correo corporativo y otros servicios asociados al dominio.
- Verificar antes todas las URLs indexadas y servicios activos.
- Evitar desconectar o reemplazar DNS sin auditar hosting, correo y registros.

Si Ofiponiente decide mantener una presencia corporativa separada, deberá ser mínima y claramente diferenciada. La recomendación principal sigue siendo concentrar la actividad pública en un único dominio.

---

### Dominio canónico

Se utilizará una única versión canónica:

> `https://planificaciondeoficinas.com`

La versión con `www` redirigirá a la versión sin `www`, o al contrario si la infraestructura exige otra configuración. Solo una deberá indexarse.

---

## 5.3 Arquitectura de marca

Presentación recomendada:

> **Planificación de Oficinas**
> **by Ofiponiente**

Funciones de cada nombre:

### Planificación de Oficinas

- Describe el servicio.
- Coincide con el dominio.
- Ayuda a entender inmediatamente la propuesta.
- Puede posicionarse en búsquedas relacionadas con diseño y equipamiento de oficinas.

### Ofiponiente

- Aporta la marca real.
- Aporta experiencia, equipo y capacidad operativa.
- Genera confianza.
- Evita crear una marca completamente desconectada de la empresa.

Uso visual recomendado:

- Logo principal o firma de “Planificación de Oficinas”.
- Sello visible “by Ofiponiente”.
- Página corporativa que explique la relación.
- Datos fiscales, contacto y garantías de Ofiponiente.

No se deben presentar como dos empresas distintas.

---

## 5.4 Qué ocurre con la landing actual

La landing actual no se descarta.

Se reutilizarán:

- Dirección artística.
- Tipografía.
- Paleta.
- Uso de fotografía y vídeo.
- Presentación del proceso.
- Sección de categorías.
- Sección de fabricantes.
- Casos o galería.
- Animaciones que no perjudiquen rendimiento.
- Componentes responsive que funcionen correctamente.

Pero debe dejar de ser una página de una sola navegación mediante anclas.

Actualmente la navegación principal está planteada alrededor de secciones internas como catálogo, marcas, nosotros y presupuesto. La nueva plataforma sustituirá esa estructura por rutas reales.

Transformación recomendada:

### Actual

```text
/
├── #categorias
├── #marcas
├── #nosotros
└── #contacto
```

### Nueva plataforma

```text
/
├── /planifica-tu-oficina
├── /soluciones
├── /tienda
├── /outlet
├── /proyectos
├── /marcas
├── /inspiracion
├── /ofiponiente
└── /contacto
```

La página de inicio conservará una presentación visual potente, pero su función será distribuir al usuario hacia el camino correcto.

---

## 5.5 Función de la página de inicio

La página de inicio no será un catálogo completo ni una landing publicitaria interminable.

Debe cumplir cinco funciones:

1. Explicar qué ofrece la plataforma.
2. Identificar el tipo de necesidad.
3. Dirigir al planificador, catálogo u outlet.
4. Generar confianza.
5. Mostrar casos y proceso.

Jerarquía propuesta:

### Bloque 1 — Cabecera y propuesta principal

- Logo.
- Navegación.
- Mensaje principal.
- Explicación.
- CTA “Planifica tu oficina”.
- CTA secundario “Ver mobiliario”.

### Bloque 2 — Tres caminos

- Montar o renovar una oficina.
- Comprar mobiliario.
- Consultar outlet o reacondicionado.

### Bloque 3 — Tipos de espacios

- Oficina completa.
- Puestos.
- Despachos.
- Reuniones.
- Recepciones.
- Formación.
- Archivo.
- Divisiones.

### Bloque 4 — Cómo funciona

- Cuéntanos tu proyecto.
- Revisamos la información.
- Preparamos propuesta.
- Ajustamos.
- Suministramos y montamos.

### Bloque 5 — Proyectos reales

- Casos.
- Fotografías.
- Datos.
- Problema y solución.
- CTA a ver proyecto.

### Bloque 6 — Producto destacado

- Selección de productos.
- Packs.
- Novedades.
- Oportunidades.

### Bloque 7 — Marcas y confianza

- Fabricantes.
- Garantías.
- Experiencia.
- Cobertura.
- Testimonios verificables.

### Bloque 8 — CTA final

- Iniciar planificador.
- Solicitar llamada.
- Contactar.

---

## 5.6 Navegación principal

Propuesta inicial de menú de escritorio:

```text
Soluciones
Planifica tu oficina
Mobiliario
Proyectos
Outlet
Inspiración
```

Acciones visibles:

```text
Buscar
Cuenta o acceso profesional (fase posterior)
Solicitar propuesta
Carrito (cuando exista ecommerce)
```

El botón principal debe ser:

> **Planifica tu oficina**

En móvil:

- Menú simplificado.
- CTA fijo o fácilmente accesible.
- Carrito cuando proceda.
- No saturar con todas las subcategorías.

---

## 5.7 Mapa general de URLs

### Nivel 1

```text
/
├── /planifica-tu-oficina
├── /soluciones
├── /mobiliario
├── /outlet
├── /proyectos
├── /marcas
├── /inspiracion
├── /ofiponiente
├── /contacto
├── /buscar
├── /carrito
├── /checkout
├── /mi-cuenta
└── /legal
```

---

## 5.8 Soluciones por necesidad

```text
/soluciones
├── /soluciones/oficinas-completas
├── /soluciones/puestos-de-trabajo
├── /soluciones/despachos
├── /soluciones/salas-de-reunion
├── /soluciones/recepciones
├── /soluciones/formacion-y-colectividades
├── /soluciones/archivo-y-almacenamiento
├── /soluciones/mamparas-y-divisiones
├── /soluciones/acustica
└── /soluciones/zonas-comunes
```

Estas páginas deben responder a problemas y proyectos, no limitarse a listar productos.

Cada página tendrá:

- Problema que resuelve.
- Tipos de configuración.
- Beneficios.
- Productos relacionados.
- Proyecto real.
- Preguntas frecuentes.
- CTA al planificador.

---

## 5.9 Catálogo y ecommerce

Se recomienda utilizar `/mobiliario` como nombre público y comprensible.

```text
/mobiliario
├── /mobiliario/sillas
│   ├── /mobiliario/sillas/operativas
│   ├── /mobiliario/sillas/direccion
│   ├── /mobiliario/sillas/reunion-y-visita
│   └── /mobiliario/sillas/colectividades
├── /mobiliario/mesas
│   ├── /mobiliario/mesas/operativas
│   ├── /mobiliario/mesas/direccion
│   ├── /mobiliario/mesas/reunion
│   └── /mobiliario/mesas/elevables
├── /mobiliario/almacenamiento
├── /mobiliario/recepcion
├── /mobiliario/mamparas
├── /mobiliario/acustica
├── /mobiliario/colectividades
├── /mobiliario/complementos
├── /mobiliario/packs
└── /mobiliario/[slug-producto]
```

No se utilizará una estructura técnica visible como `/products` o `/categories` si la interfaz está en español.

Las categorías finales dependerán del catálogo real.

---

## 5.10 Outlet y reacondicionado

Ruta recomendada:

```text
/outlet
├── /outlet/exposicion
├── /outlet/fin-de-serie
├── /outlet/reacondicionado
└── /outlet/[slug-producto]
```

Solo se crearán subcategorías que tengan inventario real.

Cada ficha deberá mostrar:

- Fotografías reales.
- Estado.
- Unidades.
- Medidas.
- Precio.
- Garantía.
- Entrega.
- Montaje.
- Limitaciones.

---

## 5.11 Proyectos realizados

```text
/proyectos
├── /proyectos/oficinas
├── /proyectos/despachos
├── /proyectos/recepciones
├── /proyectos/formacion
└── /proyectos/[slug-proyecto]
```

Cada proyecto individual debe incluir:

- Cliente o sector, si se puede publicar.
- Localidad.
- Necesidad inicial.
- Número de puestos.
- Solución aplicada.
- Productos o marcas.
- Fotografías.
- Servicios incluidos.
- Resultado.
- CTA relacionado.

Los proyectos serán páginas comerciales y SEO, no una galería sin explicación.

---

## 5.12 Inspiración y contenidos

Ruta recomendada:

```text
/inspiracion
├── /inspiracion/guias
├── /inspiracion/ergonomia
├── /inspiracion/distribucion
├── /inspiracion/tendencias
├── /inspiracion/casos
└── /inspiracion/[slug-articulo]
```

Objetivos:

- Captar búsquedas informativas.
- Ayudar al cliente.
- Alimentar redes.
- Resolver objeciones.
- Conectar artículos con soluciones y productos.

No se publicará contenido genérico generado en masa sin valor real.

---

## 5.13 Planificador

Ruta principal:

> `/planifica-tu-oficina`

Rutas auxiliares posibles:

```text
/planifica-tu-oficina
├── /planifica-tu-oficina/empezar
├── /planifica-tu-oficina/resumen
└── /planifica-tu-oficina/gracias
```

Preferencia técnica:

- Mantener el cuestionario en una experiencia multistep.
- Guardar progreso.
- Actualizar URL o estado sin recargar.
- Evitar crear páginas indexables para cada paso.
- Permitir recuperar una solicitud cuando sea viable.

Las campañas publicitarias podrán dirigir directamente a esta ruta.

---

## 5.14 Área privada y administración

La parte interna no debe mezclarse visualmente con la web pública.

Opciones:

### Opción recomendada inicial

```text
planificaciondeoficinas.com/admin
```

Ventajas:

- Despliegue y autenticación más sencillos.
- Un único proyecto.
- Menor coste operativo.
- Reutilización directa de datos.

### Opción futura

```text
app.planificaciondeoficinas.com
```

Adecuada cuando:

- El editor y CRM crezcan.
- Existan perfiles profesionales.
- El área privada tenga despliegue independiente.
- Haya necesidades de seguridad o escalado distintas.

Decisión para MVP:

> Empezar con `/admin` y separar a subdominio solo cuando exista una razón técnica real.

---

## 5.15 Relación entre web pública, tienda y editor

La arquitectura tendrá tres capas conceptuales:

### Capa 1 — Web pública

Incluye:

- Inicio.
- Soluciones.
- Contenido.
- Proyectos.
- Marca.
- Contacto.

Objetivo:

- Captar.
- Explicar.
- Generar confianza.

### Capa 2 — Comercio y captación

Incluye:

- Planificador.
- Catálogo.
- Producto.
- Carrito.
- Checkout.
- Solicitudes.
- Cuenta.

Objetivo:

- Convertir.

### Capa 3 — Operación interna

Incluye:

- Leads.
- Clientes.
- Proyectos.
- Productos.
- Presupuestos.
- Pedidos.
- Editor 2D.
- Métricas.

Objetivo:

- Gestionar y ejecutar.

Estas capas podrán compartir tecnología y datos, pero no deben confundirse en navegación ni diseño.

---

## 5.16 Estrategia de implementación del dominio

### Fase A — Desarrollo y prototipo

- Mantener `ofiponiente.rodorte.com` como demo.
- Configurar `noindex`.
- No ejecutar campañas hacia ese dominio.
- No publicar contenido SEO definitivo.
- Refactorizar la landing y componentes reutilizables.

### Fase B — Preproducción

Opción preferida:

> `staging.planificaciondeoficinas.com`

Funciones:

- Revisión del cliente.
- Pruebas.
- Catálogo de demostración.
- Validación del planificador.
- Integración de pagos en modo prueba.

Debe mantenerse fuera de indexación.

### Fase C — Producción

- Conectar `planificaciondeoficinas.com`.
- Configurar SSL.
- Redirigir `www`.
- Activar sitemap.
- Activar robots.
- Configurar canonical.
- Analytics.
- Search Console.
- Consentimiento.
- Correos transaccionales.
- Pagos reales cuando corresponda.

### Fase D — Migración de Ofiponiente

- Auditar `ofiponiente.es`.
- Exportar URLs indexadas.
- Crear mapa de redirecciones.
- Verificar correo y DNS.
- Aplicar redirecciones 301.
- Revisar errores 404.
- Mantener ambos dominios verificados en Search Console.

---

## 5.17 Reglas SEO de arquitectura

- Un único dominio público principal.
- Una única URL canónica por contenido.
- URLs descriptivas y estables.
- No duplicar productos en distintas rutas.
- No indexar filtros infinitos.
- No indexar búsqueda interna.
- No indexar carrito, checkout, cuenta o admin.
- No indexar staging.
- Redirigir URLs antiguas.
- Crear breadcrumbs.
- Crear sitemap por tipo de contenido cuando crezca.
- Usar datos estructurados cuando correspondan.
- Conservar proyectos y artículos aunque cambie el diseño.

---

## 5.18 Menú y footer

### Menú principal

Debe ser comercial y reducido.

No incluirá todas las categorías directamente en la primera barra. Se utilizará:

- Desplegable o megamenú para soluciones.
- Desplegable para mobiliario.
- Accesos directos a proyectos, outlet y planificador.

### Footer

Debe incluir:

- Soluciones.
- Categorías principales.
- Proyectos.
- Inspiración.
- Contacto.
- Zona de servicio.
- Ofiponiente.
- Marcas.
- Condiciones de compra.
- Envíos y devoluciones.
- Garantías.
- Privacidad.
- Cookies.
- Aviso legal.
- Redes.
- Newsletter, si se valida.

---

## 5.19 Búsqueda interna

La búsqueda será importante cuando exista catálogo suficiente.

Debe permitir buscar por:

- Producto.
- Categoría.
- Marca.
- Tipo de espacio.
- Referencia.
- Característica.

Los resultados podrán mezclar:

- Productos.
- Soluciones.
- Proyectos.
- Artículos.

Para el MVP, una búsqueda sencilla puede ser suficiente. No se desarrollará un motor avanzado sin catálogo real.

---

## 5.20 Breadcrumbs

Ejemplo:

```text
Inicio > Mobiliario > Sillas > Sillas operativas > Producto
```

Objetivos:

- Mejorar orientación.
- Facilitar retorno a categoría.
- Mejorar enlazado interno.
- Apoyar SEO.

---

## 5.21 Estados vacíos y rutas incompletas

No se publicarán:

- Categorías sin productos.
- Outlet sin stock.
- Marcas sin información.
- Proyectos ficticios.
- Páginas “próximamente” indexables.
- Enlaces rotos.
- Filtros que no producen resultados.

Cuando una sección no esté lista:

- Se oculta de navegación.
- Se mantiene fuera del sitemap.
- Se activa cuando tenga contenido suficiente.

---

## 5.22 Decisiones cerradas en este punto

- `planificaciondeoficinas.com` será el dominio público principal.
- Toda la experiencia pública estará dentro del mismo dominio.
- La landing actual se reutilizará como base visual, no como arquitectura final.
- `ofiponiente.rodorte.com` será demo o staging y no se indexará.
- `ofiponiente.es` se auditará antes de redirigir o modificar.
- No existirán dos webs completas compitiendo en paralelo.
- La home distribuirá entre planificador, mobiliario y outlet.
- Las anclas actuales se sustituirán por rutas reales.
- El ecommerce vivirá inicialmente dentro de `/mobiliario`.
- El área interna comenzará en `/admin`.
- El editor 2D permanecerá en la capa interna.
- La arquitectura pública, comercial e interna estarán claramente separadas.
- No se publicarán categorías o páginas vacías.
- La migración de dominio incluirá redirecciones y protección del correo.

---

## 5.23 Información pendiente del cliente

Ofiponiente debe confirmar:

- Propiedad y acceso a `planificaciondeoficinas.com`.
- Propiedad y acceso a `ofiponiente.es`.
- Proveedor de dominio.
- Proveedor de hosting.
- Configuración de correo.
- Subdominios actuales.
- Acceso DNS.
- Acceso a Search Console.
- Acceso a Analytics.
- URLs antiguas importantes.
- Posicionamiento actual.
- Si quiere mantener `ofiponiente.es` visible.
- Nombre de marca que debe aparecer en cabecera.
- Uso autorizado de logotipo.
- Categorías reales.
- Línea real de outlet.
- Zona de servicio.
- Datos fiscales y legales.



# 6. Embudo de captación

## 6.1 Objetivo de esta sección

Definir cómo una persona pasa de descubrir PlanificacionDeOficinas.com a convertirse en:

- Lead cualificado.
- Solicitud de presupuesto.
- Llamada comercial.
- Visita técnica.
- Venta directa.
- Proyecto aceptado.

El embudo debe conectar:

1. Tráfico.
2. Mensaje.
3. Acción.
4. Captura de datos.
5. Clasificación.
6. Seguimiento.
7. Propuesta.
8. Cierre.

El objetivo no es acumular formularios enviados. El objetivo es generar oportunidades comerciales viables.

---

## 6.2 Principio central

La captación no debe empezar preguntando:

> “¿En qué podemos ayudarte?”

Debe empezar ayudando al usuario a identificar su situación.

La web debe reconocer tres intenciones principales:

### Intención A — Proyecto completo

El usuario quiere:

- Abrir una oficina.
- Renovar un espacio.
- Ampliar puestos.
- Redistribuir.
- Equipar varias zonas.
- Solicitar asesoramiento.

Conversión principal:

> Iniciar planificador.

---

### Intención B — Producto concreto

El usuario ya busca:

- Silla.
- Mesa.
- Armario.
- Mampara.
- Recepción.
- Varias unidades de un producto.

Conversión principal:

- Compra directa.
- Solicitud de precio por volumen.
- Consulta de disponibilidad.

---

### Intención C — Oportunidad, outlet o reacondicionado

El usuario prioriza:

- Precio.
- Disponibilidad.
- Segunda vida.
- Liquidación.
- Stock inmediato.

Conversión principal:

- Compra.
- Reserva.
- Consulta.
- Aviso de disponibilidad.

---

## 6.3 Fuentes de entrada

### Google orgánico

Tipos de búsqueda:

- Informativas.
- Comerciales.
- Locales.
- De producto.
- De problema.
- De marca.

Ejemplos:

- Cómo distribuir una oficina pequeña.
- Cuántos metros necesita un puesto de trabajo.
- Muebles de oficina en Almería.
- Sillas ergonómicas para empresas.
- Amueblar oficina completa.
- Mamparas de oficina.
- Mobiliario para academia.
- Presupuesto muebles de oficina.

Destino recomendado:

- Página de solución.
- Artículo útil.
- Categoría.
- Producto.
- Planificador.

No todo el tráfico debe aterrizar en la portada.

---

### Google Ads

Campañas iniciales:

#### Campaña de proyecto

Palabras clave:

- Amueblar oficina.
- Proyecto mobiliario oficina.
- Equipamiento integral oficina.
- Montar oficina nueva.
- Renovar oficina.
- Presupuesto muebles oficina.

Destino:

> `/planifica-tu-oficina`

#### Campaña local

Palabras clave combinadas con:

- Almería.
- Provincia.
- Zonas reales de cobertura.

Destino:

- Landing local.
- Página de contacto.
- Planificador con localidad preseleccionada.

#### Campaña de producto

Palabras clave:

- Silla ergonómica profesional.
- Mesa de oficina.
- Armario metálico.
- Mampara oficina.

Destino:

- Categoría o producto.

---

### Meta Ads

Objetivo principal:

- Generar demanda.
- Mostrar transformación.
- Hacer retargeting.
- Captar proyectos visuales.

Formatos:

- Antes y después.
- Vídeo de montaje.
- Caso real.
- Carrusel por zonas de una oficina.
- Error frecuente.
- Pack.
- Outlet.
- Testimonio.

Destino:

- Planificador.
- Caso de éxito.
- Página de solución.
- Producto u outlet.

No se debe enviar todo el tráfico a la home por defecto.

---

### Redes orgánicas

Canales prioritarios:

- Instagram.
- Facebook.
- LinkedIn.

Canales secundarios:

- TikTok.
- YouTube.
- Pinterest.

Tipos de llamada a la acción:

- Planifica tu oficina.
- Calcula qué necesitas.
- Solicita una propuesta.
- Ver proyecto completo.
- Ver oportunidad.
- Consultar disponibilidad.

---

### Google Business Profile

Debe dirigir a:

- Web principal.
- Contacto.
- Solicitud de presupuesto.
- Productos.
- Ubicación física, si existe atención al público.

Será especialmente importante para búsquedas locales.

---

### Referencias y tráfico directo

Fuentes:

- Clientes anteriores.
- Proveedores.
- Arquitectos.
- Interioristas.
- Reformistas.
- Asociaciones.
- Equipo comercial.
- Tarjetas.
- Vehículos.
- Firmas de correo.
- Catálogos impresos.

Se podrán utilizar URLs y QR específicos:

```text
/planifica-tu-oficina?origen=catalogo
/planifica-tu-oficina?origen=comercial
/planifica-tu-oficina?origen=showroom
```

Esto permitirá medir el canal.

---

## 6.4 Entradas principales del embudo

### Entrada 1 — Planificador

Adecuada para:

- Proyectos.
- Reformas.
- Aperturas.
- Ampliaciones.
- Necesidades complejas.

CTA:

> Planifica tu oficina.

---

### Entrada 2 — Solicitud rápida

Adecuada para:

- Usuarios con poco tiempo.
- Consultas claras.
- Llamadas.
- Peticiones desde producto.

Campos mínimos:

- Nombre.
- Empresa.
- Teléfono o email.
- Localidad.
- Qué necesita.

CTA:

> Solicitar contacto.

La solicitud rápida no sustituye al planificador.

---

### Entrada 3 — Producto o categoría

Adecuada para:

- Compra directa.
- Consulta de unidades.
- Presupuesto por volumen.
- Venta cruzada.

CTA según producto:

- Añadir al carrito.
- Consultar disponibilidad.
- Solicitar precio por cantidad.
- Añadir a proyecto.

---

### Entrada 4 — Proyecto realizado

Adecuada para usuarios que necesitan confianza.

CTA:

- Quiero una solución similar.
- Planificar mi espacio.
- Solicitar visita.

---

### Entrada 5 — Contenido educativo

Adecuada para tráfico temprano.

CTA contextual:

- Descargar checklist.
- Calcular necesidades.
- Ver solución.
- Empezar planificador.
- Consultar con un especialista.

No se debe forzar siempre una venta directa.

---

## 6.5 Estructura del embudo principal de proyectos

### Fase 1 — Descubrimiento

El usuario ve:

- Anuncio.
- Publicación.
- Resultado de Google.
- Recomendación.
- Proyecto.
- Producto.

Objetivo:

- Captar atención con un problema o resultado reconocible.

Mensaje:

> Montar o renovar una oficina puede resolverse paso a paso.

---

### Fase 2 — Identificación

La landing debe permitir que el usuario se identifique rápidamente.

Opciones:

- Voy a montar una oficina.
- Quiero renovar o ampliar.
- Necesito mobiliario concreto.
- Busco outlet.
- Solo estoy explorando.

Objetivo:

- Enviar al recorrido adecuado.

---

### Fase 3 — Compromiso inicial

Antes de pedir datos personales, el usuario responde preguntas sencillas:

- Tipo de espacio.
- Número de puestos.
- Localidad.
- Plazo.
- Necesidades.

Objetivo:

- Generar sensación de avance.
- Evitar formulario frío.
- Aumentar intención.

---

### Fase 4 — Cualificación

Se solicitan datos que ayudan a valorar la oportunidad:

- Metros.
- Presupuesto.
- Fecha.
- Servicios.
- Plano.
- Fotografías.
- Compra nueva, outlet o combinación.

Objetivo:

- Clasificar.
- Preparar conversación.
- Detectar inviabilidad.

---

### Fase 5 — Captura de contacto

Los datos personales deben solicitarse cuando el usuario ya ha construido un resumen útil.

Campos recomendados:

- Nombre.
- Empresa.
- Email.
- Teléfono.
- Horario.
- Consentimientos.

Mensaje:

> Indícanos dónde enviarte el resumen y cómo contactar contigo para revisar el proyecto.

No presentar la captura como un peaje sin beneficio.

---

### Fase 6 — Confirmación

El usuario recibe:

- Resumen.
- Identificador.
- Próximo paso.
- Plazo orientativo de contacto, si se puede garantizar.
- Posibilidad de añadir información.
- Posibilidad de reservar llamada, si se habilita.

Mensaje:

> Hemos recibido la información de tu proyecto.

No usar mensajes vagos como “Formulario enviado correctamente”.

---

### Fase 7 — Gestión interna

El sistema:

- Guarda la solicitud.
- Calcula prioridad.
- Registra origen.
- Notifica.
- Asigna responsable.
- Crea tareas.
- Muestra datos y adjuntos.
- Registra actividad.

---

### Fase 8 — Seguimiento comercial

Según prioridad:

- Llamada.
- Email.
- WhatsApp, con permiso y proceso definido.
- Solicitud de medidas.
- Reserva de visita.
- Propuesta inicial.
- Seguimiento.

---

### Fase 9 — Presupuesto y cierre

Estados:

- Nuevo.
- Contactado.
- Cualificado.
- Visita pendiente.
- Propuesta en preparación.
- Presupuesto enviado.
- Negociación.
- Ganado.
- Perdido.
- Pospuesto.

Motivos de pérdida:

- Precio.
- Plazo.
- Sin presupuesto.
- Fuera de cobertura.
- Competencia.
- Sin respuesta.
- Proyecto cancelado.
- Producto no disponible.
- Otro.

---

## 6.6 Microconversiones

No todos los usuarios completarán el planificador.

Se medirán acciones intermedias:

- Clic en CTA.
- Inicio del planificador.
- Paso alcanzado.
- Subida de archivo.
- Vista de contacto.
- Clic en teléfono.
- Clic en email.
- Clic en WhatsApp.
- Consulta de producto.
- Añadir al carrito.
- Inicio de checkout.
- Descarga.
- Reserva.
- Suscripción.

Estas señales ayudan a:

- Detectar bloqueos.
- Hacer retargeting.
- Priorizar mejoras.
- Medir campañas.

---

## 6.7 Clasificación automática

El scoring inicial utilizará variables como:

### Valor

- Presupuesto.
- Número de puestos.
- Número de categorías.
- Servicios.
- Volumen.

### Urgencia

- Menos de 30 días.
- Entre 30 y 90.
- Entre 3 y 6 meses.
- Sin fecha.

### Viabilidad

- Zona.
- Tipo de producto.
- Transporte.
- Montaje.
- Datos disponibles.

### Intención

- Ha subido plano.
- Ha dado teléfono.
- Ha pedido visita.
- Ha indicado presupuesto.
- Ha completado todos los pasos.

Ejemplo conceptual:

```text
Puntuación =
valor económico
+ urgencia
+ ajuste geográfico
+ nivel de información
+ intención
```

No se debe crear un algoritmo complejo en el MVP.

Basta con reglas claras y editables.

---

## 6.8 Reglas iniciales de scoring

Ejemplo provisional:

### Presupuesto

- Más de 30.000 €: +30.
- 15.000–30.000 €: +25.
- 7.500–15.000 €: +20.
- 3.000–7.500 €: +10.
- Menos de 3.000 €: +5.
- Sin definir: 0.

### Plazo

- Menos de 30 días: +25.
- 1–3 meses: +20.
- 3–6 meses: +10.
- Más de 6 meses: +5.
- Sin fecha: 0.

### Puestos

- Más de 50: +25.
- 21–50: +20.
- 11–20: +15.
- 5–10: +10.
- Menos de 5: +5.

### Información

- Plano: +10.
- Fotografías: +5.
- Teléfono: +5.
- Presupuesto definido: +5.
- Solicita montaje: +5.
- Zona primaria: +10.

Clasificación provisional:

- 70 o más: Lead A.
- 40–69: Lead B.
- 15–39: Lead C.
- Compra concreta: Lead D.
- No viable: clasificación manual o automática por reglas excluyentes.

Estos valores se ajustarán con datos reales.

---

## 6.9 Automatizaciones iniciales

### Al completar el planificador

Usuario:

- Email de confirmación.
- Resumen.
- Próximo paso.
- Datos de contacto.
- Enlace para añadir información, si se implementa.

Equipo:

- Notificación.
- Lead en panel.
- Prioridad.
- Fuente.
- Resumen.
- Adjuntos.
- Tarea.

---

### Lead A

- Alerta prioritaria.
- Tarea de contacto.
- Destacado en panel.
- Aviso si no se gestiona.

---

### Lead B

- Tarea normal.
- Email personalizado o plantilla.
- Seguimiento.

---

### Lead C

- Confirmación.
- Contenido útil.
- Seguimiento menos intensivo.
- Recordatorio futuro.

---

### Carrito abandonado

Solo cuando exista ecommerce y consentimiento adecuado:

- Recordatorio.
- Producto.
- Enlace al carrito.
- Ayuda.
- Sin abuso de frecuencia.

---

### Planificador abandonado

Se podrá recuperar únicamente si:

- El usuario ya facilitó un medio de contacto.
- Existe base legal.
- Se ha informado correctamente.

En el MVP puede guardarse progreso local sin enviar emails.

---

## 6.10 Respuesta comercial

La velocidad importa, pero no se prometerá una cifra irreal.

Ofiponiente debe definir:

- Horario.
- Responsable.
- Canal.
- Plazo máximo.
- Sustitución durante vacaciones.
- Gestión de fines de semana.

Recomendación operativa:

- Lead A: atención prioritaria.
- Lead B: mismo día laborable o siguiente.
- Lead C: automatización y revisión.
- Compra: respuesta según disponibilidad.

Esto no se publicará hasta validar recursos.

---

## 6.11 Integración con calendario

Posible fase:

- Reservar llamada.
- Solicitar visita.
- Elegir franja.
- Confirmación.
- Recordatorio.
- Reprogramación.

No debe habilitarse hasta conocer:

- Agenda real.
- Duración.
- Zonas.
- Desplazamientos.
- Responsables.
- Límites diarios.

Para el MVP puede bastar con:

> Indica cuándo prefieres que contactemos contigo.

---

## 6.12 Uso de WhatsApp

Puede mejorar conversión local.

Usos:

- Botón de contacto.
- Confirmación manual.
- Petición de fotografías.
- Seguimiento.
- Resolución rápida.

Riesgos:

- Pérdida de trazabilidad.
- Mensajes fuera de horario.
- Datos dispersos.
- Dependencia personal.
- Consentimiento.

Recomendación:

- Usar WhatsApp Business.
- Mensaje inicial predefinido.
- Registrar actividad importante en el panel.
- No utilizarlo como único canal.

---

## 6.13 Retargeting

Audiencias:

- Visitó solución.
- Visitó producto.
- Inició planificador.
- Completó parte.
- Vio proyecto.
- Añadió al carrito.
- Compró.
- Lead existente.

Mensajes:

- Caso similar.
- Recordatorio.
- Guía.
- Producto relacionado.
- Outlet.
- Planificador.

Se respetará consentimiento y configuración de cookies.

---

## 6.14 Contenido de nutrición

Para leads no inmediatos:

- Checklist para montar oficina.
- Guía de medidas.
- Cómo elegir sillas.
- Errores de distribución.
- Casos reales.
- Presupuestos por fases.
- Opciones outlet.
- Ergonomía.
- Plazos de un proyecto.

Objetivo:

- Mantener confianza.
- Ayudar.
- Reactivar.
- No bombardear.

---

## 6.15 Formularios secundarios

Además del planificador:

### Contacto general

Para consultas no clasificadas.

### Solicitud por producto

Incluye automáticamente:

- Producto.
- Variante.
- Cantidad.
- URL.

### Solicitud por volumen

Incluye:

- Cantidad.
- Empresa.
- Localidad.
- Fecha.

### Contacto desde proyecto

Incluye:

- Proyecto de referencia.
- Mensaje “Quiero algo similar”.

### Alta profesional

Fase posterior:

- Arquitecto.
- Interiorista.
- Reformista.
- Empresa.

---

## 6.16 Datos que deben registrarse

### Identificación

- Nombre.
- Empresa.
- Cargo.
- Email.
- Teléfono.

### Proyecto

- Tipo.
- Localidad.
- Metros.
- Puestos.
- Plazo.
- Presupuesto.
- Necesidades.
- Servicios.
- Estilo.
- Archivos.
- Comentarios.

### Comercial

- Fuente.
- Campaña.
- Medio.
- Página de entrada.
- Fecha.
- Prioridad.
- Responsable.
- Estado.
- Próxima acción.
- Valor estimado.
- Motivo de pérdida.

### Legal

- Consentimiento.
- Fecha.
- Texto aceptado.
- Preferencias.
- Prueba de origen cuando corresponda.

---

## 6.17 UTM y atribución

Se conservarán:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

También:

- Referrer.
- Página inicial.
- Dispositivo.
- Conversión.
- Campaña.

Ejemplos:

```text
?utm_source=instagram&utm_medium=paid&utm_campaign=apertura_oficina
?utm_source=google&utm_medium=cpc&utm_campaign=muebles_oficina_almeria
?utm_source=catalogo&utm_medium=qr&utm_campaign=ofiponiente_2026
```

---

## 6.18 Panel comercial mínimo

Cada lead debe mostrar:

- Prioridad.
- Estado.
- Nombre.
- Empresa.
- Teléfono.
- Email.
- Localidad.
- Proyecto.
- Puestos.
- Presupuesto.
- Fecha.
- Fuente.
- Adjuntos.
- Notas.
- Responsable.
- Próxima tarea.
- Historial.

Acciones:

- Cambiar estado.
- Asignar.
- Añadir nota.
- Programar seguimiento.
- Marcar ganado o perdido.
- Abrir email.
- Abrir teléfono.
- Crear proyecto interno.

---

## 6.19 Embudo de ecommerce

Flujo:

1. Categoría.
2. Producto.
3. Variante.
4. Carrito.
5. Identificación.
6. Transporte.
7. Pago.
8. Confirmación.
9. Preparación.
10. Entrega.
11. Postventa.

Puntos de conversión alternativa:

- Consultar disponibilidad.
- Pedir volumen.
- Solicitar montaje.
- Añadir a proyecto.
- Contactar.

Un usuario de ecommerce puede convertirse en proyecto si:

- Compra cantidad.
- Añade varias categorías.
- Solicita montaje.
- Supera determinado importe.

---

## 6.20 Embudo de outlet

Flujo:

1. Ver stock real.
2. Consultar estado.
3. Ver unidades.
4. Reservar o comprar.
5. Validar transporte.
6. Confirmar.
7. Entregar.

Debe comunicar urgencia real:

- Unidades limitadas.
- Pieza única.
- Fin de serie.
- Exposición.

No utilizar falsa escasez.

---

## 6.21 Fricciones que deben evitarse

- Pedir contacto en el primer paso.
- Formularios largos sin progreso.
- Campos que el usuario no entiende.
- Obligación de crear cuenta.
- No explicar qué ocurrirá.
- Pedir presupuesto exacto sin ofrecer rangos.
- No permitir “todavía no lo sé”.
- Subidas que fallan en móvil.
- Perder datos al volver atrás.
- Confirmación genérica.
- Duplicar solicitudes.
- Llamadas invasivas.
- Emails sin contexto.
- WhatsApp sin permiso.
- No responder.

---

## 6.22 Métricas del embudo

### Adquisición

- Sesiones.
- Fuente.
- Campaña.
- Coste por clic.
- Página de entrada.

### Interacción

- CTA.
- Inicio.
- Pasos.
- Tiempo.
- Abandono.
- Archivos.

### Conversión

- Solicitudes.
- Tasa.
- Leads A/B.
- Coste por lead.
- Contactos válidos.

### Comercial

- Tiempo de respuesta.
- Contactados.
- Cualificados.
- Visitas.
- Presupuestos.
- Ganados.
- Perdidos.
- Valor.

### Económica

- Coste por cliente.
- Facturación.
- Margen.
- Retorno publicitario.
- Ticket.

---

## 6.23 MVP del embudo

La primera versión debe incluir:

- CTA hacia planificador.
- Planificador multistep.
- Captura de UTM.
- Confirmación.
- Email.
- Lead en base de datos.
- Clasificación por reglas.
- Notificación.
- Panel.
- Estados.
- Notas.
- Fuente.
- Métricas básicas.

No necesita inicialmente:

- IA para scoring.
- Automatización compleja.
- CRM externo.
- Calendario avanzado.
- Secuencias largas.
- Personalización dinámica.
- Recuperación por email.
- Omnicanal completo.

---

## 6.24 Criterios de aceptación

El embudo estará correctamente implementado cuando:

1. Un usuario pueda iniciar y completar desde móvil.
2. La información no se pierda al avanzar o retroceder.
3. Los campos cambien según respuestas.
4. Se puedan subir archivos.
5. Se registre el origen.
6. Se valide contacto.
7. Se muestre resumen.
8. Se envíe confirmación.
9. El equipo reciba notificación.
10. El lead aparezca en panel.
11. Se asigne prioridad.
12. Se pueda cambiar estado.
13. Se pueda registrar seguimiento.
14. Los datos legales queden almacenados.
15. Se midan los pasos principales.

---

## 6.25 Decisiones cerradas en este punto

- El planificador será el embudo principal de proyectos.
- No se pedirá contacto en el primer paso.
- Existirá una solicitud rápida secundaria.
- Los anuncios aterrizarán en páginas específicas.
- Se capturarán UTM y fuente.
- La clasificación inicial usará reglas simples.
- El panel registrará estado, responsable y próxima acción.
- El usuario recibirá resumen y siguiente paso.
- WhatsApp no será el único canal.
- El MVP evitará automatizaciones complejas.
- La calidad del lead será más importante que el volumen.
- El embudo deberá medir tanto conversión como resultado comercial.

---

## 6.26 Información pendiente del cliente

Ofiponiente debe confirmar:

- Quién recibe los leads.
- Horarios.
- Plazo real.
- Canal preferido.
- Uso de WhatsApp Business.
- Número comercial.
- Email.
- Responsables.
- Proceso actual.
- Estados.
- Motivos de pérdida.
- Seguimientos.
- Herramienta actual.
- Agenda.
- Visitas.
- Zonas.
- Datos imprescindibles antes de presupuestar.
- Umbral de oportunidad prioritaria.
- Valor medio.
- Consentimientos comerciales deseados.
- Contenido disponible para nutrición.



# 7. Planificador de oficinas

## 7.1 Objetivo de esta sección

Definir la herramienta principal de captación de PlanificacionDeOficinas.com.

El planificador debe permitir que una empresa explique su proyecto sin necesitar conocimientos técnicos sobre mobiliario, distribución o ergonomía.

Su función será:

- Guiar al usuario.
- Recoger información útil.
- Reducir incertidumbre.
- Cualificar oportunidades.
- Preparar el trabajo comercial.
- Generar un resumen comprensible.
- Facilitar el paso a llamada, visita o presupuesto.

No será inicialmente:

- Un configurador 3D público.
- Un sistema de presupuesto final automático.
- Una herramienta técnica que sustituya la revisión profesional.
- Un formulario único con decenas de campos.

---

## 7.2 Principios de experiencia

El planificador deberá cumplir estos principios:

1. **Una pregunta principal por pantalla.**
2. **Lenguaje sencillo y no técnico.**
3. **Progreso visible.**
4. **Respuestas visuales cuando ayuden.**
5. **Opciones “No lo sé todavía”.**
6. **Preguntas condicionales.**
7. **Sin pedir contacto al principio.**
8. **Guardado de progreso.**
9. **Uso cómodo desde móvil.**
10. **Resumen antes de enviar.**
11. **Explicación clara del siguiente paso.**
12. **Revisión humana antes de una propuesta definitiva.**

---

## 7.3 Ruta y acceso

Ruta principal:

> `/planifica-tu-oficina`

Acciones de entrada:

- Planifica tu oficina.
- Solicita una propuesta.
- Quiero renovar mi espacio.
- Quiero una oficina similar.
- Necesito varios productos.
- Calcula qué necesito.

El planificador podrá recibir contexto mediante parámetros:

```text
/planifica-tu-oficina?origen=instagram
/planifica-tu-oficina?solucion=recepcion
/planifica-tu-oficina?producto=silla-modelo-x
/planifica-tu-oficina?proyecto=oficina-ejemplo
```

Estos datos deben conservarse en la solicitud.

---

## 7.4 Pantalla de introducción

Objetivo:

- Explicar qué va a ocurrir.
- Reducir miedo a un formulario largo.
- Indicar qué información será útil.
- Preparar al usuario.

Contenido recomendado:

> **Cuéntanos cómo será tu oficina**

> Responde unas preguntas sobre el espacio, el equipo y tus necesidades. Prepararemos un resumen para que nuestro equipo pueda orientarte y definir el siguiente paso.

Información adicional:

- Tiempo orientativo solo si se valida mediante pruebas.
- Puede completarse sin tener todos los datos.
- Se pueden adjuntar planos o fotografías.
- No constituye un presupuesto definitivo.
- No obliga a comprar.

CTA:

> **Empezar**

CTA secundario:

> Prefiero que me contacten

---

## 7.5 Estructura general del recorrido

El planificador se dividirá en bloques:

1. Situación del proyecto.
2. Tipo de espacio.
3. Tamaño y personas.
4. Zonas necesarias.
5. Mobiliario y servicios.
6. Estilo y prioridades.
7. Presupuesto.
8. Plazo.
9. Ubicación.
10. Archivos.
11. Resumen.
12. Contacto.
13. Confirmación.

No todos los usuarios verán todas las preguntas.

---

## 7.6 Paso 1 — Situación del proyecto

Pregunta:

> **¿Qué quieres hacer?**

Opciones:

- Montar una oficina nueva.
- Trasladar una oficina.
- Renovar una oficina existente.
- Ampliar puestos de trabajo.
- Redistribuir el espacio.
- Equipar una zona concreta.
- Comprar varios productos.
- Todavía estoy explorando.

Datos internos:

```text
project_intent
```

Uso:

- Adaptar preguntas.
- Cambiar mensajes.
- Clasificar intención.
- Seleccionar CTA final.

---

## 7.7 Paso 2 — Tipo de espacio

Pregunta:

> **¿Qué tipo de espacio necesitas equipar?**

Selección múltiple:

- Oficina completa.
- Puestos operativos.
- Despachos.
- Sala de reuniones.
- Recepción.
- Sala de espera.
- Formación o aula.
- Coworking.
- Archivo y almacenamiento.
- Zona de descanso.
- Mamparas o divisiones.
- Acústica.
- Otro.

Campo condicional:

- Describir otro espacio.

Datos:

```text
space_types[]
other_space_type
```

---

## 7.8 Paso 3 — Estado actual del espacio

Pregunta:

> **¿En qué estado se encuentra el espacio?**

Opciones:

- Está vacío.
- Está en obra.
- Ya está amueblado parcialmente.
- Está en uso y queremos renovarlo.
- Todavía no tenemos el local.
- No lo sé.

Preguntas condicionales:

### Si está en obra

- Fecha prevista de finalización.
- ¿Hay plano de obra?

### Si está en uso

- ¿Debe mantenerse la actividad durante el cambio?
- ¿Hay mobiliario que se quiere conservar?
- ¿Se necesita retirada?

Datos:

```text
space_status
construction_end_date
keep_business_running
reuse_existing_furniture
removal_needed
```

---

## 7.9 Paso 4 — Personas y puestos

Pregunta principal:

> **¿Para cuántas personas debe prepararse?**

Rangos:

- 1–4.
- 5–10.
- 11–20.
- 21–50.
- 51–100.
- Más de 100.
- Todavía no lo sé.

Campo numérico opcional:

- Número aproximado de puestos.

Preguntas condicionales:

- ¿Se prevé crecimiento en los próximos 12 meses?
- ¿Cuántos puestos adicionales?
- ¿Los puestos serán fijos o compartidos?

Opciones:

- Fijos.
- Compartidos.
- Mixtos.
- No lo sé.

Datos:

```text
people_range
estimated_workstations
expected_growth
additional_workstations
workstation_model
```

---

## 7.10 Paso 5 — Dimensiones

Pregunta:

> **¿Qué tamaño tiene el espacio?**

Opciones:

- Menos de 50 m².
- 50–100 m².
- 101–250 m².
- 251–500 m².
- Más de 500 m².
- No conozco los metros.

Campo opcional:

- Metros cuadrados exactos.

Pregunta secundaria:

> ¿Conoces las medidas de las salas?

Opciones:

- Sí.
- Parcialmente.
- No.

Datos:

```text
area_range
area_m2
room_measurements_known
```

No se obligará a introducir medidas exactas.

---

## 7.11 Paso 6 — Zonas necesarias

Pregunta:

> **¿Qué zonas debe incluir el proyecto?**

Selección múltiple:

- Puestos de trabajo.
- Despachos individuales.
- Sala de reuniones.
- Recepción.
- Sala de espera.
- Archivo.
- Office o descanso.
- Formación.
- Cabinas para llamadas.
- Zonas colaborativas.
- Almacén.
- Otro.

Preguntas condicionales por zona:

### Sala de reuniones

- Número de personas.
- Videoconferencia.
- Pantalla.
- Electrificación.

### Recepción

- Uno o varios puestos.
- Accesibilidad.
- Zona de espera.

### Formación

- Número de asistentes.
- Mobiliario fijo o flexible.
- Necesidad de apilado.

### Archivo

- Tipo de documentación.
- Cerradura.
- Capacidad aproximada.

Datos:

```text
required_areas[]
area_requirements{}
```

---

## 7.12 Paso 7 — Mobiliario

Pregunta:

> **¿Qué necesitas incluir?**

Selección múltiple:

- Mesas.
- Sillas operativas.
- Sillas de dirección.
- Sillas de visita.
- Mesas de reunión.
- Armarios.
- Cajoneras.
- Estanterías.
- Recepción.
- Mamparas.
- Soluciones acústicas.
- Complementos.
- Iluminación.
- No lo sé todavía.

Pregunta condicional:

> ¿Quieres conservar parte del mobiliario actual?

- Sí.
- No.
- Hay que revisarlo.

Datos:

```text
furniture_needs[]
reuse_furniture
```

---

## 7.13 Paso 8 — Servicios

Pregunta:

> **¿Qué servicios necesitas?**

Selección múltiple:

- Asesoramiento.
- Medición.
- Distribución del espacio.
- Propuesta visual.
- Transporte.
- Montaje.
- Retirada del mobiliario actual.
- Instalación por fases.
- Financiación, si está disponible.
- Todavía no lo sé.

Datos:

```text
services_needed[]
```

Esta respuesta influirá en:

- Prioridad.
- Viabilidad.
- Presupuesto.
- Responsable.

---

## 7.14 Paso 9 — Nuevo, outlet o combinación

Pregunta:

> **¿Qué tipo de mobiliario te interesa?**

Opciones:

- Nuevo.
- Outlet o exposición.
- Reacondicionado.
- Combinar opciones.
- Quiero que me recomienden.
- No lo sé.

Datos:

```text
product_condition_preference
```

La opción reacondicionado solo se mostrará si Ofiponiente confirma esta línea.

---

## 7.15 Paso 10 — Estilo

Pregunta:

> **¿Qué estilo encaja mejor con el proyecto?**

La respuesta se mostrará mediante tarjetas visuales.

Opciones iniciales:

- Profesional y sobrio.
- Moderno y minimalista.
- Cálido y acogedor.
- Industrial.
- Ejecutivo.
- Creativo.
- Funcional y económico.
- No tengo preferencia.

Cada opción deberá tener:

- Imagen.
- Nombre.
- Descripción breve.
- Texto alternativo accesible.

Datos:

```text
style_preference
```

No se utilizarán imágenes que prometan productos o resultados no disponibles.

---

## 7.16 Paso 11 — Prioridades

Pregunta:

> **¿Qué es lo más importante para ti?**

El usuario podrá seleccionar hasta tres prioridades:

- Ergonomía.
- Aprovechar el espacio.
- Imagen profesional.
- Precio.
- Durabilidad.
- Entrega rápida.
- Flexibilidad.
- Acústica.
- Sostenibilidad.
- Facilidad de mantenimiento.
- Crecimiento futuro.

Datos:

```text
project_priorities[]
```

Estas prioridades ayudarán a:

- Preparar la propuesta.
- Ordenar alternativas.
- Personalizar el resumen.

---

## 7.17 Paso 12 — Presupuesto

Pregunta:

> **¿Qué inversión aproximada tienes prevista?**

Rangos iniciales:

- Menos de 3.000 €.
- 3.000–7.500 €.
- 7.500–15.000 €.
- 15.000–30.000 €.
- 30.000–50.000 €.
- Más de 50.000 €.
- Todavía no lo sé.

Mensaje:

> No necesitas conocer una cifra exacta. El rango nos ayuda a preparar una propuesta realista.

Datos:

```text
budget_range
```

No se mostrará juicio negativo por presupuestos bajos.

---

## 7.18 Paso 13 — Plazo

Pregunta:

> **¿Cuándo te gustaría tenerlo listo?**

Opciones:

- Lo antes posible.
- En menos de 30 días.
- En 1–3 meses.
- En 3–6 meses.
- En más de 6 meses.
- Todavía no hay fecha.

Campo opcional:

- Fecha aproximada.

Pregunta condicional:

- ¿Existe una fecha de apertura o traslado que no se pueda mover?

Datos:

```text
timeline_range
desired_completion_date
fixed_deadline
```

---

## 7.19 Paso 14 — Ubicación

Pregunta:

> **¿Dónde está el proyecto?**

Campos:

- Código postal.
- Localidad.
- Provincia.

Opcional:

- Dirección, solo cuando sea necesaria para visita o presupuesto.

Datos:

```text
postal_code
city
province
address
```

Comportamiento:

- Detectar zona primaria.
- Detectar zona secundaria.
- Marcar revisión cuando esté fuera de cobertura.
- No rechazar automáticamente sin reglas confirmadas.

---

## 7.20 Paso 15 — Planos y fotografías

Pregunta:

> **¿Tienes información del espacio que pueda ayudarnos?**

Opciones:

- Subir plano.
- Subir fotografías.
- Subir croquis.
- Subir documentación.
- Lo enviaré después.
- No tengo archivos.

Formatos iniciales:

- PDF.
- JPG.
- JPEG.
- PNG.
- WEBP.

Pendiente de validar:

- DWG.
- DXF.
- Archivos de gran tamaño.

Requisitos:

- Subida desde móvil.
- Varias imágenes.
- Vista previa.
- Eliminar archivo.
- Reintento.
- Indicador de progreso.
- Límite informado.
- Almacenamiento privado.
- Escaneo o validación de tipo.
- Nombre de archivo seguro.

Datos:

```text
attachments[]
```

---

## 7.21 Paso 16 — Información adicional

Pregunta:

> **¿Hay algo más que debamos saber?**

Campo de texto libre.

Sugerencias:

- Marcas preferidas.
- Colores corporativos.
- Restricciones.
- Ascensor.
- Accesos.
- Horarios.
- Obra.
- Necesidades especiales.

Datos:

```text
additional_notes
```

Límite de caracteres razonable.

---

## 7.22 Paso 17 — Resumen previo

Antes de pedir el contacto se mostrará un resumen.

Bloques:

- Tipo de proyecto.
- Espacios.
- Puestos.
- Metros.
- Mobiliario.
- Servicios.
- Estilo.
- Prioridades.
- Presupuesto.
- Plazo.
- Ubicación.
- Archivos.

Acciones:

- Editar sección.
- Volver.
- Continuar.

Mensaje:

> Ya tenemos una primera definición de tu proyecto.

No se mostrará todavía:

- Presupuesto automático no validado.
- Distribución definitiva.
- Promesa de disponibilidad.
- Fecha cerrada.

---

## 7.23 Paso 18 — Datos de contacto

Pregunta:

> **¿Dónde te enviamos el resumen y cómo prefieres que contactemos contigo?**

Campos obligatorios:

- Nombre.
- Email o teléfono, según estrategia final.
- Localidad ya recogida.

Campos recomendados:

- Empresa.
- Teléfono.
- Email.
- Cargo.
- Canal preferido.
- Horario preferido.

Opciones de canal:

- Teléfono.
- Email.
- WhatsApp.
- Indiferente.

Validaciones:

- Email válido.
- Teléfono válido.
- Consentimiento.
- Campos claros.
- Errores junto al campo.

Datos:

```text
contact_name
company_name
job_title
email
phone
preferred_channel
preferred_contact_time
```

---

## 7.24 Consentimientos

Consentimiento obligatorio:

> He leído la información sobre protección de datos y autorizo el tratamiento de mis datos para gestionar esta solicitud.

Consentimiento opcional separado:

> Quiero recibir consejos, novedades y comunicaciones comerciales.

Requisitos:

- Casillas no premarcadas.
- Texto enlazado.
- Registro de fecha.
- Versión del texto.
- Fuente.
- Consentimiento comercial independiente.

Datos:

```text
privacy_consent
marketing_consent
consent_timestamp
consent_version
```

---

## 7.25 Paso 19 — Confirmación

La pantalla final mostrará:

- Confirmación.
- Número o referencia.
- Resumen básico.
- Próximo paso.
- Canal seleccionado.
- Forma de añadir información.
- Contacto de Ofiponiente.

Mensaje recomendado:

> **Tu proyecto ya está en revisión**

> Hemos recibido la información. Nuestro equipo revisará el espacio, las necesidades y la viabilidad antes de contactar contigo.

Acciones:

- Descargar o recibir resumen.
- Ver proyectos.
- Ver mobiliario.
- Añadir información.
- Volver al inicio.

No se debe prometer tiempo de respuesta hasta validarlo.

---

## 7.26 Email de confirmación

Asunto provisional:

> Hemos recibido tu proyecto de oficina

Contenido:

- Nombre.
- Referencia.
- Resumen.
- Próximo paso.
- Datos de contacto.
- Aviso de que no es presupuesto definitivo.
- Enlace seguro para completar información, si existe.

No incluir adjuntos sensibles sin necesidad.

---

## 7.27 Lógica condicional

Ejemplos:

### Compra de varios productos

Puede omitir:

- Zonas completas.
- Estilo amplio.
- Distribución.

Debe preguntar:

- Producto.
- Cantidad.
- Plazo.
- Localidad.
- Montaje.

### Oficina nueva

Debe preguntar:

- Fecha de apertura.
- Puestos.
- Zonas.
- Plano.
- Servicios completos.

### Renovación

Debe preguntar:

- Mobiliario existente.
- Reutilización.
- Retirada.
- Actividad durante el cambio.

### Mamparas

Debe preguntar:

- Metros lineales aproximados.
- Altura.
- Plano.
- Obra.
- Acústica.
- Instalación.

### Formación

Debe preguntar:

- Número de alumnos.
- Flexibilidad.
- Apilado.
- Almacenamiento.

La lógica debe almacenarse de forma configurable, no dispersa en componentes difíciles de mantener.

---

## 7.28 Modelo de datos conceptual

Entidad principal:

```text
PlanningRequest
```

Campos agrupados:

```text
id
reference
status
score
priority
source
utm
project
space
people
areas
furniture
services
style
priorities
budget
timeline
location
attachments
notes
contact
consents
assignment
activity
created_at
updated_at
```

Las respuestas múltiples deben almacenarse de forma estructurada.

No se guardará todo como un único texto.

---

## 7.29 Guardado de progreso

MVP recomendado:

- Guardado local en el navegador.
- Recuperación al volver.
- Eliminación después de completar.
- Aviso cuando exista progreso previo.

Fase posterior:

- Enlace seguro de recuperación.
- Guardado en servidor.
- Continuar desde otro dispositivo.

No se enviarán datos personales al servidor antes del consentimiento cuando no sea necesario.

---

## 7.30 Navegación entre pasos

Debe permitir:

- Siguiente.
- Atrás.
- Editar.
- Salir.
- Recuperar.

Reglas:

- No perder respuestas.
- Validar solo lo necesario.
- No bloquear por campos opcionales.
- Mantener foco accesible.
- Permitir teclado.
- Mostrar errores claros.
- Evitar scroll inesperado.

---

## 7.31 Progreso

Opciones:

- Barra porcentual.
- Número de bloque.
- Etiqueta de etapa.

Recomendación:

> Paso 3 de 8 — El espacio

No mostrar 19 pasos técnicos al usuario.

Los pasos internos se agruparán visualmente en 7 u 8 etapas.

---

## 7.32 Diseño móvil

Requisitos:

- Botones grandes.
- Tarjetas fáciles de pulsar.
- CTA inferior accesible.
- Campos con teclado correcto.
- Subida desde cámara.
- Resumen legible.
- Sin modales complejos.
- Sin arrastrar elementos.
- Sin texto pequeño.
- Sin columnas estrechas.

El planificador público será mobile-first.

---

## 7.33 Accesibilidad

Debe incluir:

- Etiquetas.
- Contraste.
- Foco visible.
- Navegación por teclado.
- Mensajes de error asociados.
- Lectura correcta por pantalla.
- Alternativas textuales.
- No depender solo del color.
- Botones con nombre claro.
- Avisos de cambio de paso.
- Reducción de movimiento.

---

## 7.34 Rendimiento

El planificador no debe cargar:

- Editor 2D.
- Vídeos pesados.
- Catálogo completo.
- Animaciones innecesarias.
- Librerías no utilizadas.

Objetivos:

- Carga rápida en móvil.
- Imágenes optimizadas.
- Subidas resilientes.
- Estados de espera claros.
- Evitar bloqueos.

---

## 7.35 Prevención de spam y abuso

Medidas:

- Honeypot.
- Rate limiting.
- Validación de servidor.
- Límites de archivos.
- Verificación de tipos.
- Captcha adaptativo solo si es necesario.
- Registro de intentos.
- Protección de endpoints.

No añadir fricción fuerte desde el principio.

---

## 7.36 Seguridad y privacidad de archivos

Los archivos:

- No serán públicos.
- Utilizarán URLs temporales o autenticadas.
- Tendrán nombres internos.
- Se validarán.
- Se eliminarán según política.
- Solo serán accesibles para personal autorizado.
- No se utilizarán para entrenar sistemas sin permiso.

Se deberá definir una política de conservación.

---

## 7.37 Scoring desde el planificador

Variables iniciales:

- Presupuesto.
- Plazo.
- Puestos.
- Zona.
- Servicios.
- Plano.
- Teléfono.
- Tipo de proyecto.
- Número de categorías.
- Intención.

El scoring:

- Se calculará al completar.
- Podrá recalcularse.
- Podrá corregirse manualmente.
- No será visible para el usuario.
- No rechazará automáticamente salvo reglas claras.

---

## 7.38 Integración con el panel

Al completar:

1. Crear lead.
2. Crear solicitud.
3. Guardar respuestas.
4. Guardar consentimientos.
5. Guardar archivos.
6. Calcular score.
7. Asignar prioridad.
8. Registrar origen.
9. Notificar.
10. Crear actividad inicial.

Acción futura:

> Convertir en proyecto

Esto generará un proyecto interno reutilizando datos.

---

## 7.39 Analítica de pasos

Eventos recomendados:

```text
planner_view
planner_start
planner_step_view
planner_step_complete
planner_back
planner_file_upload
planner_summary_view
planner_contact_view
planner_submit
planner_error
planner_abandon
```

Propiedades:

- Paso.
- Fuente.
- Dispositivo.
- Respuestas no sensibles.
- Duración.
- Error.

No enviar datos personales a herramientas analíticas.

---

## 7.40 Pruebas A/B futuras

Elementos:

- Mensaje inicial.
- Número de pasos.
- Orden de presupuesto.
- Orden del contacto.
- Tarjetas visuales.
- CTA.
- Resumen.
- Solicitud rápida.

No se implementará infraestructura A/B compleja en el MVP.

---

## 7.41 Alcance del MVP

Debe incluir:

- Introducción.
- Recorrido multistep.
- Lógica condicional básica.
- Progreso.
- Guardado local.
- Resumen.
- Contacto.
- Consentimientos.
- Archivos.
- Envío.
- Confirmación.
- Email.
- Panel.
- Scoring.
- Analítica de pasos.

No incluirá:

- Editor 3D.
- Precio final automático.
- Recomendación con IA.
- Generación automática de plano.
- Cuenta obligatoria.
- Colaboración en tiempo real.
- Calendario avanzado.
- Recuperación multicanal.
- Firma digital.

---

## 7.42 Criterios de aceptación funcional

1. Se completa desde móvil y escritorio.
2. Las respuestas se conservan.
3. La lógica condicional funciona.
4. Se puede volver atrás.
5. Se muestra progreso.
6. Los campos obligatorios son mínimos.
7. Se aceptan archivos permitidos.
8. Los archivos quedan protegidos.
9. El resumen refleja las respuestas.
10. El contacto se valida.
11. Los consentimientos se registran.
12. La solicitud llega a la base de datos.
13. Se calcula prioridad.
14. El equipo recibe notificación.
15. El usuario recibe confirmación.
16. Se registran eventos.
17. Los errores no borran respuestas.
18. El sistema evita duplicados accidentales.
19. El formulario es accesible.
20. No se muestra información falsa.

---

## 7.43 Decisiones cerradas en este punto

- El planificador será multistep y mobile-first.
- No será un editor 3D público en el MVP.
- El contacto se pedirá después del resumen.
- Se permitirán respuestas “No lo sé”.
- Habrá lógica condicional por tipo de proyecto.
- El progreso se guardará localmente en el MVP.
- Los archivos serán privados.
- El presupuesto será un rango, no una cifra obligatoria.
- El scoring no será visible para el usuario.
- Las preguntas se agruparán en 7 u 8 etapas visuales.
- No se generará un presupuesto final automático.
- El resultado será una solicitud estructurada lista para revisión humana.

---

## 7.44 Información pendiente del cliente

Ofiponiente debe confirmar:

- Preguntas imprescindibles.
- Datos que necesita antes de llamar.
- Rangos de presupuesto.
- Rangos de puestos.
- Zonas de servicio.
- Tipos de proyecto.
- Servicios reales.
- Línea de reacondicionado.
- Visitas.
- Medición.
- Propuesta visual.
- Retirada.
- Financiación.
- Plazo de respuesta.
- Email de recepción.
- Responsable.
- Límites de archivos.
- Formatos utilizados.
- Política de conservación.
- Texto legal.
- Canal de contacto.
- Campos obligatorios.
- Umbral de lead A.
- Casos que no puede atender.



# 8. Catálogo y tipos de producto

## 8.1 Objetivo de esta sección

Definir cómo se organizará el catálogo de PlanificacionDeOficinas.com, qué tipos de producto existirán, qué información necesita cada ficha y cómo se relacionará el catálogo con:

- La venta directa.
- Las solicitudes de presupuesto.
- El planificador.
- Los proyectos.
- El outlet.
- El editor interno.
- La gestión comercial.

La estructura inicial se basará provisionalmente en la información publicada en `ofiponiente.es`, pero deberá auditarse antes de considerarla definitiva.

El objetivo no es copiar el catálogo antiguo, sino transformarlo en una estructura:

- Comprensible.
- Mantenible.
- Comercial.
- Preparada para SEO.
- Compatible con ecommerce.
- Compatible con presupuestos.
- Escalable.

---

## 8.2 Principio general

El catálogo no será únicamente una colección de productos.

Cada elemento debe ayudar al usuario a:

- Entender para qué sirve.
- Saber si encaja con su espacio.
- Comparar opciones.
- Conocer medidas y acabados.
- Comprar directamente cuando sea viable.
- Solicitar asesoramiento cuando sea necesario.
- Añadirlo a un proyecto.
- Consultar disponibilidad.

Regla principal:

> Un producto no se publica hasta tener información suficiente para evitar confusión, errores o expectativas falsas.

---

## 8.3 Fuente provisional del catálogo

Se utilizará `ofiponiente.es` para extraer inicialmente:

- Categorías.
- Subcategorías.
- Marcas.
- Nombres de productos.
- Fotografías.
- Descripciones.
- Fichas técnicas.
- Referencias.
- Tipos de espacio.
- Servicios relacionados.

Cada elemento extraído se clasificará como:

- Reutilizable.
- Reescribir.
- Fusionar.
- Eliminar.
- Validar.
- Sin información suficiente.

No se importarán automáticamente:

- Precios antiguos.
- Stock.
- Plazos.
- Promociones.
- Garantías.
- Variantes.
- Condiciones comerciales.

---

## 8.4 Estructura provisional de categorías

La estructura final dependerá de la auditoría del sitio antiguo y del catálogo real.

Propuesta inicial:

### Sillas

```text
/mobiliario/sillas
├── operativas
├── direccion
├── reunion-y-visita
├── colectividades
├── apilables
├── taburetes
└── ergonomicas
```

### Mesas

```text
/mobiliario/mesas
├── operativas
├── direccion
├── multipuesto
├── reunion
├── elevables
├── auxiliares
└── formacion
```

### Almacenamiento

```text
/mobiliario/almacenamiento
├── armarios
├── cajoneras
├── estanterias
├── archivadores
├── taquillas
└── modulos
```

### Recepción

```text
/mobiliario/recepcion
├── mostradores
├── modulos
├── salas-de-espera
└── complementos
```

### Mamparas y divisiones

```text
/mobiliario/mamparas
├── vidrio
├── modulares
├── separadores
├── biombos
└── divisiones-acusticas
```

### Acústica

```text
/mobiliario/acustica
├── paneles
├── separadores
├── cabinas
├── techos
└── complementos
```

### Colectividades

```text
/mobiliario/colectividades
├── formacion
├── bibliotecas
├── zonas-comunes
├── aulas
├── espera
└── multiusos
```

### Complementos

```text
/mobiliario/complementos
├── electrificacion
├── iluminacion
├── soportes
├── ergonomia
├── percheros
├── papeleras
└── accesorios
```

### Exterior

Solo se incluirá si forma parte real del negocio.

```text
/mobiliario/exterior
├── mesas
├── sillas
├── bancos
└── complementos
```

---

## 8.5 Categorías por solución

Además de las categorías de producto, el usuario podrá navegar por necesidad:

- Oficina completa.
- Puestos de trabajo.
- Despachos.
- Salas de reunión.
- Recepciones.
- Formación.
- Coworking.
- Archivo.
- Acústica.
- Mamparas.
- Zonas comunes.

Un producto podrá pertenecer a varias soluciones, pero tendrá una única URL canónica.

Ejemplo:

Una silla puede aparecer en:

- Sillas operativas.
- Oficina completa.
- Puestos de trabajo.
- Pack startup.

Pero su URL principal será única:

```text
/mobiliario/sillas/nombre-producto
```

---

## 8.6 Tipos comerciales de producto

Cada producto tendrá un tipo de venta.

### Tipo A — Compra directa

Características:

- Precio final conocido.
- Stock o plazo controlado.
- Pocas variantes.
- Transporte calculable.
- Baja complejidad.
- Sin medición previa.

Acciones:

- Elegir variante.
- Añadir al carrito.
- Comprar.
- Solicitar volumen.
- Consultar montaje.

Ejemplos:

- Silla estándar.
- Cajonera.
- Accesorio.
- Mesa sencilla.
- Complemento.

---

### Tipo B — Solicitud de presupuesto

Características:

- Precio variable.
- Configuración compleja.
- Muchas variantes.
- Medición.
- Transporte especial.
- Instalación.
- Proyecto.
- Cantidades elevadas.

Acciones:

- Solicitar propuesta.
- Añadir a proyecto.
- Indicar cantidad.
- Adjuntar información.
- Contactar.

Ejemplos:

- Mamparas.
- Cabinas acústicas.
- Recepciones a medida.
- Mesas multipuesto.
- Configuraciones grandes.
- Grandes cantidades.

---

### Tipo C — Producto híbrido

Características:

- Existe una configuración estándar comprable.
- También admite personalización o volumen.
- Puede venderse directamente o integrarse en un proyecto.

Acciones:

- Comprar configuración estándar.
- Pedir otras medidas.
- Solicitar varias unidades.
- Añadir a proyecto.

Ejemplo:

```text
Desde 320 €
Comprar configuración estándar
Solicitar una configuración personalizada
```

---

### Tipo D — Producto de catálogo sin precio público

Características:

- El fabricante no permite mostrar precio.
- El producto depende de acabados.
- El precio requiere consulta.
- Se quiere utilizar como inspiración.

Acciones:

- Consultar precio.
- Añadir a proyecto.
- Solicitar llamada.

No debe convertirse en una ficha vacía.

---

### Tipo E — Outlet o reacondicionado

Características:

- Stock limitado.
- Estado específico.
- Fotografías reales.
- Unidades concretas.
- Posible pieza única.

Acciones:

- Comprar.
- Reservar.
- Consultar transporte.
- Solicitar más unidades similares.

---

## 8.7 Estados de publicación

Cada producto tendrá un estado interno:

- Borrador.
- Pendiente de validación.
- Publicado.
- Sin stock.
- Descatalogado.
- Archivado.
- Próxima llegada.
- Solo interno.

Reglas:

- Los borradores no serán públicos.
- Los descatalogados conservarán URL si tienen tráfico o enlaces.
- Los productos sin stock podrán mantenerse si volverán.
- Los archivados podrán seguir disponibles para históricos de proyectos.
- Los productos “solo interno” podrán usarse en presupuestos sin publicarse.

---

## 8.8 Estado de disponibilidad

Valores provisionales:

- En stock.
- Stock limitado.
- Bajo pedido.
- Consultar disponibilidad.
- Próxima llegada.
- Agotado.
- Descatalogado.

No se mostrará “En stock” sin fuente fiable.

El estado podrá incluir:

- Unidades.
- Plazo orientativo.
- Fecha de actualización.
- Proveedor.
- Almacén.

---

## 8.9 Modelo de datos conceptual del producto

Entidad principal:

```text
Product
```

Campos básicos:

```text
id
slug
name
short_description
long_description
commercial_type
publication_status
availability_status
brand_id
category_id
canonical_url
sku
manufacturer_reference
condition
featured
new_arrival
created_at
updated_at
published_at
```

Información comercial:

```text
base_price
compare_at_price
price_from
price_visibility
tax_rate
purchase_cost
margin
minimum_quantity
maximum_quantity
quote_required
volume_quote_enabled
```

Información física:

```text
width
depth
height
weight
package_dimensions
package_weight
assembly_required
```

Información operativa:

```text
stock
lead_time
shipping_class
installation_available
installation_required
delivery_zones
supplier
warehouse
```

Contenido:

```text
features[]
benefits[]
materials[]
finishes[]
colors[]
certifications[]
warranty
care_instructions
technical_documents[]
images[]
videos[]
```

Relaciones:

```text
categories[]
solutions[]
related_products[]
compatible_products[]
packs[]
projects[]
```

---

## 8.10 Variantes

Una variante podrá representar:

- Color.
- Tapizado.
- Acabado.
- Medida.
- Estructura.
- Base.
- Brazos.
- Número de puestos.
- Material.
- Orientación.
- Configuración.

Entidad conceptual:

```text
ProductVariant
```

Campos:

```text
id
product_id
sku
name
attributes{}
price
stock
lead_time
image
active
```

Regla:

> No se convertirá cada opción del fabricante en una variante online si complica de forma desproporcionada la compra.

Las configuraciones complejas irán a presupuesto.

---

## 8.11 Precio

Tipos de visualización:

- Precio final.
- Precio desde.
- Consultar precio.
- Precio por unidad.
- Precio por pack.
- Precio anterior y oferta.
- No mostrar.

Requisitos:

- Indicar si incluye IVA.
- Indicar unidad.
- Indicar si montaje está incluido.
- Indicar transporte.
- Evitar precios ambiguos.
- No publicar descuentos falsos.
- Mantener historial interno cuando sea necesario.

---

## 8.12 Stock

Modelos posibles:

### Stock propio

- Unidades reales.
- Almacén.
- Reserva.
- Descuento automático al vender.

### Stock de proveedor

- Disponibilidad orientativa.
- Validación antes de confirmar.
- Plazo estimado.

### Bajo pedido

- No hay stock.
- Se fabrica o solicita.
- Plazo dependiente de configuración.

### Outlet

- Unidades concretas.
- No permitir vender más de las disponibles.
- Posible reserva temporal.

La arquitectura final dependerá del sistema de gestión real de Ofiponiente.

---

## 8.13 Ficha de producto

Estructura recomendada:

### Zona superior

- Nombre.
- Marca.
- Imágenes.
- Precio o llamada a la acción.
- Estado.
- Variantes.
- Cantidad.
- Compra o presupuesto.
- Transporte.
- Montaje.
- Garantía.

### Beneficios

- Para qué tipo de uso.
- Problema que resuelve.
- Ventajas principales.
- Ergonomía.
- Durabilidad.
- Flexibilidad.

### Información técnica

- Medidas.
- Materiales.
- Acabados.
- Peso.
- Montaje.
- Certificaciones.
- Ficha técnica.

### Contexto

- Espacios recomendados.
- Proyectos relacionados.
- Productos compatibles.
- Packs.
- Marca.
- Preguntas frecuentes.

### CTA alternativo

- Añadir a proyecto.
- Solicitar volumen.
- Consultar con especialista.

---

## 8.14 Fotografías y multimedia

Cada producto debe tener, cuando sea posible:

- Imagen principal.
- Vista lateral.
- Vista trasera.
- Detalles.
- Variantes.
- Producto en contexto.
- Medidas.
- Vídeo, cuando aporte valor.

Reglas:

- No usar imágenes de baja resolución.
- No deformar.
- No eliminar marcas de agua sin autorización.
- No publicar imágenes sin derechos.
- No mostrar variantes que no estén disponibles.
- El outlet utilizará fotografías reales del estado actual.

---

## 8.15 Fichas técnicas y documentos

Tipos:

- PDF técnico.
- Certificados.
- Instrucciones.
- Montaje.
- Mantenimiento.
- Materiales.
- Acabados.

Requisitos:

- Nombre claro.
- Tamaño.
- Tipo.
- Accesibilidad.
- Descarga segura.
- Evitar documentos obsoletos.

---

## 8.16 Marcas

Cada marca tendrá:

```text
/marcas/[slug]
```

Contenido:

- Logo.
- Descripción.
- Especialidad.
- País.
- Garantías.
- Productos.
- Proyectos.
- Documentación.
- Relación con Ofiponiente.

No se afirmará “distribuidor oficial” sin validación.

---

## 8.17 Filtros

Filtros iniciales según categoría:

### Sillas

- Uso.
- Precio.
- Marca.
- Color.
- Brazos.
- Respaldo.
- Ergonomía.
- Stock.
- Condición.

### Mesas

- Tipo.
- Medida.
- Número de puestos.
- Forma.
- Acabado.
- Electrificación.
- Precio.
- Marca.

### Almacenamiento

- Tipo.
- Alto.
- Ancho.
- Cerradura.
- Material.
- Color.
- Stock.

### General

- Nuevo.
- Outlet.
- Reacondicionado.
- Compra directa.
- Bajo presupuesto.
- Entrega rápida.
- Marca.

No se crearán filtros sin datos suficientes.

---

## 8.18 Ordenación

Opciones:

- Relevancia.
- Más vendidos.
- Novedades.
- Precio ascendente.
- Precio descendente.
- Disponibilidad.
- Recomendados.

“Más vendidos” y “Recomendados” requerirán datos o criterio real.

---

## 8.19 Packs

Entidad:

```text
ProductBundle
```

Ejemplos:

- Puesto esencial.
- Puesto ergonómico.
- Despacho profesional.
- Sala de reunión para 6.
- Recepción básica.
- Aula para 20.
- Pack startup.
- Ampliación de 5 puestos.

Campos:

```text
id
name
slug
description
items[]
base_price
discount
commercial_type
installation
shipping
active
```

Un pack podrá ser:

- Compra directa.
- Presupuesto.
- Híbrido.

---

## 8.20 Productos relacionados y compatibles

Tipos de relación:

- Complementario.
- Alternativa.
- Mejora.
- Sustituto.
- Accesorio.
- Compatible.
- Misma colección.

Ejemplos:

- Mesa → cajonera.
- Silla → reposapiés.
- Puesto → pasacables.
- Armario → estante adicional.
- Sala → sillas compatibles.

La relación debe ser útil y administrable.

---

## 8.21 Añadir producto a proyecto

Cada ficha podrá ofrecer:

> **Añadir a mi proyecto**

Comportamiento inicial:

- Guardar selección temporal.
- Permitir elegir cantidad.
- Abrir o continuar planificador.
- Incluir producto en el resumen.
- Registrar URL y variante.

Fase posterior:

- Lista guardada.
- Cuenta.
- Proyecto compartido.
- Presupuesto interno.

---

## 8.22 Producto por volumen

Cuando un usuario solicite varias unidades:

Campos:

- Cantidad.
- Empresa.
- Localidad.
- Fecha.
- Montaje.
- Comentarios.

El sistema podrá convertir automáticamente la consulta en lead cuando:

- Supere una cantidad.
- Supere importe.
- Requiera montaje.
- Incluya varias categorías.

---

## 8.23 Outlet y reacondicionado

Campos adicionales:

```text
condition_grade
condition_description
real_images[]
units_available
original_price
outlet_price
defects[]
inspection_date
warranty
pickup_available
```

Grados provisionales:

- Como nuevo.
- Muy buen estado.
- Buen estado.
- Con señales de uso.
- Exposición.
- Fin de serie.

El estado debe describirse de forma objetiva.

---

## 8.24 SEO del catálogo

Cada ficha tendrá:

- Título único.
- Descripción.
- URL estable.
- Canonical.
- Datos estructurados.
- Imágenes optimizadas.
- Texto útil.
- Breadcrumbs.
- Enlazado interno.
- Disponibilidad.
- Marca.
- Referencia.

No se indexarán:

- Combinaciones duplicadas.
- Filtros sin valor.
- Búsquedas internas.
- Parámetros de ordenación.
- Productos sin contenido.
- Fichas temporales.

---

## 8.25 Importación del catálogo

Formatos posibles:

- Excel.
- CSV.
- ERP.
- API de proveedor.
- Importación manual.

Proceso recomendado:

1. Extraer catálogo antiguo.
2. Normalizar nombres.
3. Definir categorías.
4. Separar producto y variante.
5. Validar referencias.
6. Validar imágenes.
7. Validar precios.
8. Validar stock.
9. Revisar manualmente.
10. Publicar por lotes.

No se importará directamente a producción sin revisión.

---

## 8.26 Plantilla de importación

Columnas iniciales:

```text
name
slug
sku
manufacturer_reference
brand
category
subcategory
commercial_type
publication_status
availability_status
short_description
long_description
base_price
price_from
tax_rate
stock
lead_time
width
depth
height
weight
materials
finishes
colors
warranty
installation
shipping_class
image_urls
technical_document_urls
```

Se podrá ampliar según el catálogo real.

---

## 8.27 Calidad del dato

Cada producto tendrá un indicador interno:

- Completo.
- Publicable con revisión.
- Incompleto.
- Bloqueado.

Criterios mínimos de publicación:

- Nombre.
- Categoría.
- Imagen.
- Descripción.
- Marca o fabricante.
- Tipo comercial.
- Disponibilidad.
- CTA.
- Información técnica básica.
- Estado legal/comercial validado.

Para compra directa además:

- Precio.
- Impuestos.
- Stock o plazo.
- Transporte.
- Variantes.
- Política aplicable.

---

## 8.28 Gestión interna

El panel permitirá:

- Crear.
- Editar.
- Duplicar.
- Publicar.
- Archivar.
- Cambiar stock.
- Cambiar precio.
- Gestionar variantes.
- Gestionar imágenes.
- Gestionar documentos.
- Relacionar categorías.
- Relacionar soluciones.
- Marcar destacados.
- Importar.
- Exportar.

Roles futuros:

- Administrador.
- Catálogo.
- Comercial.
- Contenido.
- Solo lectura.

---

## 8.29 Historial y auditoría

Se registrarán cambios sensibles:

- Precio.
- Stock.
- Estado.
- Publicación.
- SKU.
- Disponibilidad.
- Garantía.

Datos:

- Usuario.
- Fecha.
- Valor anterior.
- Valor nuevo.

No es imprescindible en el primer prototipo, pero sí recomendable antes de operar con varias personas.

---

## 8.30 Integración con RapidOffice

RapidOffice ya utiliza conceptos como:

- Catálogo.
- Dimensiones.
- Precio.
- Elementos de proyecto.
- Cantidades.
- Variantes.
- Cálculo de totales.

Se reutilizará el modelo conceptual cuando sea compatible.

No se asumirá que el catálogo actual de RapidOffice está preparado para ecommerce.

Será necesario:

- Revisar tipos.
- Separar datos internos y públicos.
- Añadir contenido comercial.
- Añadir stock.
- Añadir variantes.
- Añadir publicación.
- Añadir SEO.
- Añadir imágenes y documentos.
- Añadir tipos de venta.

---

## 8.31 Catálogo mínimo viable

Objetivo provisional:

- Entre 30 y 80 productos bien preparados.
- Representar categorías principales.
- Incluir productos de compra directa.
- Incluir productos bajo presupuesto.
- Incluir varias marcas.
- Incluir al menos algunos packs.
- Incluir outlet solo si existe stock.

Selección recomendada:

- Productos más vendidos.
- Productos más rentables.
- Productos representativos.
- Productos fáciles de entregar.
- Productos con buenas imágenes.
- Productos con información técnica.
- Productos disponibles.

---

## 8.32 Lo que no se hará en el MVP

- Importar miles de referencias sin revisar.
- Sincronización compleja con todos los proveedores.
- Configurador completo de acabados.
- Precios dinámicos por cliente.
- Marketplace.
- Múltiples almacenes avanzados.
- Traducciones automáticas.
- Recomendación con IA.
- Realidad aumentada.
- Generación 3D de cada producto.
- Publicación automática sin revisión.

---

## 8.33 Criterios de aceptación

El catálogo estará correctamente planteado cuando:

1. Cada producto tenga un tipo comercial.
2. Las categorías sean comprensibles.
3. Las URLs sean estables.
4. Exista una única ficha canónica.
5. Precio y disponibilidad sean claros.
6. Las variantes no generen confusión.
7. Se pueda comprar o solicitar presupuesto según corresponda.
8. Se pueda añadir a proyecto.
9. Las imágenes sean adecuadas.
10. Exista información técnica mínima.
11. El stock no permita sobreventa.
12. El outlet muestre estado real.
13. Los filtros funcionen con datos reales.
14. La ficha sea usable en móvil.
15. El panel permita mantener la información.
16. La importación pueda revisarse.
17. Las fichas incompletas no se publiquen.
18. Los productos puedan relacionarse con soluciones y proyectos.
19. Los datos comerciales estén validados.
20. El catálogo pueda crecer sin rehacer la arquitectura.

---

## 8.34 Decisiones cerradas en este punto

- El catálogo se auditará desde `ofiponiente.es`.
- No se copiarán automáticamente precios, stock ni promesas.
- Existirán productos de compra directa, presupuesto, híbridos, catálogo y outlet.
- Cada producto tendrá una URL canónica única.
- Las soluciones y categorías podrán mostrar el mismo producto sin duplicarlo.
- El catálogo inicial será reducido y de calidad.
- Las variantes complejas se derivarán a presupuesto.
- El outlet exigirá fotografías reales y unidades concretas.
- El catálogo público y el catálogo interno compartirán datos, pero no necesariamente todos los campos.
- Se reutilizarán conceptos de RapidOffice después de revisar compatibilidad.
- No se publicarán fichas incompletas.
- La importación se hará por lotes y con revisión.

---

## 8.35 Información pendiente del cliente

Ofiponiente debe facilitar o confirmar:

- Exportación de productos.
- Catálogos de fabricantes.
- Categorías actuales.
- Marcas activas.
- Referencias.
- Tarifas.
- Stock.
- Plazos.
- Productos más vendidos.
- Productos más rentables.
- Productos comprables online.
- Productos bajo presupuesto.
- Variantes.
- Imágenes.
- Fichas técnicas.
- Garantías.
- Transporte.
- Montaje.
- Productos descatalogados.
- Outlet.
- Reacondicionado.
- Responsable de catálogo.
- Frecuencia de actualización.
- ERP o programa actual.
- Formatos de importación disponibles.
- Política de precios públicos.
- Restricciones de fabricantes.
- Pedido mínimo.
- IVA.
- Devoluciones.
- Productos iniciales prioritarios.



# 9. Ecommerce

## 9.1 Objetivo de esta sección

Definir cómo funcionará la venta online de PlanificacionDeOficinas.com y qué parte del comercio electrónico debe desarrollarse en cada fase.

El ecommerce deberá permitir:

- Vender productos estándar.
- Solicitar presupuestos por volumen.
- Combinar productos y servicios.
- Gestionar transporte y montaje.
- Registrar pedidos.
- Cobrar de forma segura.
- Mantener trazabilidad.
- Derivar compras complejas al equipo comercial.

No debe convertir una plataforma orientada a proyectos en una tienda genérica ni obligar a que todos los productos tengan compra directa.

---

## 9.2 Decisión estratégica

El ecommerce no será el primer bloque que se publique.

Orden recomendado:

### Primera versión comercial

- Catálogo.
- Fichas de producto.
- Consulta de disponibilidad.
- Solicitud de presupuesto.
- Solicitud por volumen.
- Añadir producto al planificador.
- Panel de leads.
- Sin cobro online obligatorio.

### Segunda versión

- Carrito.
- Checkout.
- Pago.
- Pedidos.
- Transporte.
- Emails transaccionales.
- Selección limitada de productos comprables.

### Tercera versión

- Cuenta de cliente.
- Historial.
- Recompra.
- Tarifas profesionales.
- Integraciones.
- Automatizaciones.
- Carritos y presupuestos híbridos.

Esta secuencia evita bloquear el lanzamiento por cuestiones de logística, stock, pagos o devoluciones que todavía no estén definidas.

---

## 9.3 Estado actual de RapidOffice

La base actual de RapidOffice dispone de:

- Next.js.
- React.
- Interfaz visual.
- GSAP.
- Konva.
- Editor.
- Catálogo conceptual.
- Proyectos.

No dispone todavía de un motor completo para:

- Carrito.
- Checkout.
- Pagos.
- Pedidos.
- Impuestos.
- Envíos.
- Devoluciones.
- Facturación.
- Cuenta ecommerce.

Por tanto:

> El ecommerce será un módulo nuevo conectado con la plataforma, no una función que pueda activarse sin desarrollo adicional.

---

## 9.4 Arquitectura comercial recomendada

La experiencia pública permanecerá en:

> `planificaciondeoficinas.com`

Rutas:

```text
/mobiliario
/mobiliario/[categoria]
/mobiliario/[slug-producto]
/carrito
/checkout
/pedido/[referencia]
/mi-cuenta
```

La gestión interna permanecerá inicialmente en:

```text
/admin/productos
/admin/pedidos
/admin/clientes
/admin/envios
/admin/devoluciones
```

El cliente no debe notar saltos entre:

- Web.
- Catálogo.
- Carrito.
- Checkout.
- Confirmación.

---

## 9.5 Motor propio frente a plataforma externa

No se tomará la decisión final hasta auditar:

- Número real de referencias.
- Variantes.
- Stock.
- ERP.
- Promociones.
- Volumen esperado.
- Personas que gestionarán la tienda.
- Métodos de pago.
- Transporte.

### Desarrollo propio dentro de Next.js

Adecuado cuando:

- El catálogo inicial tiene entre 30 y 100 productos.
- Muchas ventas requieren presupuesto.
- Hay lógica B2B específica.
- El planificador es el elemento central.
- Las variantes online son limitadas.
- El volumen inicial de pedidos es moderado.
- Se necesita integrar estrechamente leads, proyectos y presupuestos.

Ventajas:

- Experiencia unificada.
- Control del flujo.
- Integración directa.
- Menos limitaciones visuales.
- Mejor adaptación al modelo híbrido.

Riesgos:

- Más responsabilidad técnica.
- Más pruebas.
- Más mantenimiento.
- Gestión propia de pedidos y estados.
- Desarrollo de funciones que una plataforma ya ofrece.

---

### Shopify como motor externo o headless

Adecuado cuando:

- La prioridad es vender rápido.
- Hay catálogo y stock bien definidos.
- Se necesitan funciones comerciales maduras.
- El cliente gestionará productos y pedidos.
- Se aceptan costes mensuales y comisiones.
- Las particularidades B2B no son excesivas.

Ventajas:

- Checkout probado.
- Ecosistema.
- Gestión de pedidos.
- Seguridad comercial.
- Apps.

Riesgos:

- Costes recurrentes.
- Dependencia.
- Personalizaciones complejas.
- Integración adicional con el planificador.
- Posible fragmentación del panel.

---

### PrestaShop

Adecuado cuando:

- Ofiponiente quiere un ecommerce tradicional.
- Existe un catálogo amplio.
- Se necesitan reglas comerciales complejas.
- El equipo conoce PrestaShop.
- Hay hosting y mantenimiento especializados.

Ventajas:

- Control del alojamiento.
- Catálogo y promociones.
- Ecosistema europeo.
- Gestión ecommerce clásica.

Riesgos:

- Mantenimiento.
- Actualizaciones.
- Seguridad.
- Rendimiento.
- Duplicidad tecnológica con Next.js.
- Integración más costosa con la plataforma.

---

### Decisión provisional

Para el MVP se recomienda:

> Plataforma propia en Next.js para catálogo, planificador, leads y solicitudes; sin checkout completo durante la primera publicación.

Después de auditar el catálogo:

- Si el ecommerce directo sigue siendo reducido y el modelo es principalmente B2B, se construirá el módulo comercial propio.
- Si se descubre un catálogo amplio y operativa ecommerce intensiva, se utilizará un motor especializado conectado a la interfaz pública.

No se instalará Shopify o PrestaShop por costumbre antes de conocer la operativa.

---

## 9.6 Carrito

El carrito admitirá únicamente productos comprables directamente.

Cada línea incluirá:

- Producto.
- Variante.
- SKU.
- Imagen.
- Cantidad.
- Precio.
- IVA.
- Disponibilidad.
- Plazo.
- Servicios asociados.
- Total.

Acciones:

- Cambiar cantidad.
- Eliminar.
- Guardar para después.
- Consultar volumen.
- Añadir montaje cuando corresponda.
- Continuar comprando.
- Iniciar checkout.

Los productos bajo presupuesto no se mezclarán como si tuvieran un precio definitivo.

---

## 9.7 Carrito híbrido

Cuando un usuario seleccione productos de distinta naturaleza:

### Solo productos comprables

- Checkout normal.

### Solo productos bajo presupuesto

- Convertir selección en solicitud.

### Productos comprables y productos bajo presupuesto

Opciones:

1. Separar compra y solicitud.
2. Convertir todo en propuesta.
3. Permitir comprar la parte estándar y solicitar la compleja.

Recomendación inicial:

> Si existe cualquier elemento que requiera validación de proyecto, ofrecer “Solicitar propuesta conjunta” como acción principal.

Esto evita pedidos incompletos o incompatibles.

---

## 9.8 Checkout

Flujo recomendado:

### Paso 1 — Identificación

- Compra como invitado.
- Acceso, si existe cuenta.
- Datos de empresa.
- Email.
- Teléfono.

No se obligará a crear una cuenta.

### Paso 2 — Facturación

Campos:

- Persona o empresa.
- Razón social.
- NIF/CIF.
- Dirección.
- Código postal.
- Localidad.
- Provincia.
- País.

### Paso 3 — Entrega

- Dirección.
- Contacto.
- Acceso.
- Observaciones.
- Ascensor.
- Planta.
- Horario.
- Restricciones.

Los datos logísticos adicionales solo se solicitarán cuando afecten al servicio.

### Paso 4 — Transporte y montaje

Opciones según zona:

- Recogida.
- Entrega.
- Entrega y montaje.
- Pendiente de confirmar.
- No disponible.

### Paso 5 — Pago

- Método.
- Resumen.
- Condiciones.
- Confirmación.

### Paso 6 — Resultado

- Pedido confirmado.
- Pago pendiente.
- Revisión necesaria.
- Error recuperable.

---

## 9.9 Compra como empresa

El checkout debe estar preparado para B2B.

Campos y funciones:

- Razón social.
- CIF.
- Persona de contacto.
- Departamento.
- Referencia interna.
- Número de pedido del cliente.
- Dirección de facturación.
- Dirección de entrega.
- Solicitud de factura.
- Comentarios.

Fase posterior:

- Tarifas profesionales.
- Condiciones de pago.
- Crédito.
- Varias direcciones.
- Aprobadores.
- Presupuestos guardados.

---

## 9.10 Métodos de pago

La plataforma no almacenará datos completos de tarjeta.

Se utilizará un proveedor de pago especializado.

Opciones a evaluar:

- TPV virtual bancario.
- Redsys.
- Stripe.
- PayPal.
- Transferencia.
- Pago por enlace.
- Financiación externa.
- Pago por hitos en proyectos.

Decisión pendiente según:

- Banco.
- Comisiones.
- Contrato.
- Países.
- Operativa.
- Facturación.
- Preferencias de Ofiponiente.

Para MVP ecommerce:

- Tarjeta o TPV.
- Transferencia cuando tenga sentido.
- Métodos adicionales solo si aportan valor.

---

## 9.11 Estados de pago

Estados internos:

- Pendiente.
- Autorizado.
- Pagado.
- Fallido.
- Cancelado.
- Reembolsado parcialmente.
- Reembolsado.
- Pendiente de transferencia.
- En revisión.

El pedido y el pago serán entidades separadas.

Un pago fallido no debe crear un pedido confirmado por error.

---

## 9.12 Seguridad de pagos

Requisitos:

- Proveedor externo.
- HTTPS.
- Confirmación mediante webhook.
- Verificación de firma.
- Idempotencia.
- No confiar en el navegador.
- Registro de eventos.
- Protección contra pagos duplicados.
- Entorno de pruebas.
- Separación de credenciales.
- No guardar datos sensibles.

El estado pagado solo se asignará después de la confirmación segura del proveedor.

---

## 9.13 Transporte

El transporte de mobiliario no se debe resolver con una tarifa plana sin validar.

Variables:

- Código postal.
- Zona.
- Peso.
- Volumen.
- Bultos.
- Producto.
- Cantidad.
- Accesibilidad.
- Planta.
- Ascensor.
- Montaje.
- Vehículo.
- Distancia.
- Proveedor.

Modelos posibles:

### Tarifa conocida

El sistema calcula el precio.

### Tarifa por zona

Se aplican reglas.

### Transporte gratuito

Solo por condiciones reales:

- Importe mínimo.
- Zona.
- Categoría.
- Promoción.

### Transporte bajo presupuesto

El pedido se convierte en revisión antes de cobrar o se cobra únicamente después de validar.

Recomendación inicial:

> Compra directa solo para productos y zonas con transporte calculable.

---

## 9.14 Montaje

El montaje podrá ser:

- Incluido.
- Opcional.
- Obligatorio.
- No disponible.
- Bajo presupuesto.

Cada producto tendrá:

```text
assembly_required
assembly_available
assembly_price
assembly_pricing_type
```

Tipos de precio:

- Fijo.
- Por unidad.
- Por pedido.
- Por hora.
- Bajo presupuesto.

No se debe ofrecer montaje automático si depende de condiciones del espacio no recogidas.

---

## 9.15 Recogida

Si Ofiponiente dispone de almacén o tienda:

- Selección de punto.
- Horario.
- Fecha estimada.
- Confirmación de preparación.
- Persona autorizada.
- Documento o referencia.

No se permitirá recoger antes de que el pedido esté preparado.

---

## 9.16 Stock y reserva

Al añadir al carrito:

- Mostrar disponibilidad.
- No prometer reserva indefinida.
- Revalidar antes de pagar.
- Bloquear temporalmente stock cuando sea necesario.

En outlet:

- Reserva corta durante el pago.
- Liberación automática si falla.
- Control de concurrencia.
- No permitir sobreventa.

---

## 9.17 Pedidos

Entidad conceptual:

```text
Order
```

Campos:

```text
id
reference
customer_id
status
payment_status
fulfillment_status
source
currency
subtotal
discount
shipping
assembly
tax
total
billing_address
shipping_address
notes
created_at
updated_at
```

Líneas:

```text
OrderItem
product_id
variant_id
sku
name_snapshot
quantity
unit_price
tax_rate
total
services
```

Se guardará una copia de nombre, precio y datos relevantes para que cambios futuros no alteren pedidos antiguos.

---

## 9.18 Estados del pedido

Estados recomendados:

- Pendiente de pago.
- Pendiente de revisión.
- Confirmado.
- En preparación.
- Solicitado a proveedor.
- Disponible.
- Entrega programada.
- En reparto.
- Montaje programado.
- Completado.
- Cancelado.
- Incidencia.
- Devuelto.

No todos serán visibles al cliente con el mismo detalle.

---

## 9.19 Flujo de pedido bajo revisión

Algunos pedidos podrán requerir validación antes de confirmarse.

Ejemplos:

- Transporte especial.
- Montaje.
- Zona remota.
- Stock de proveedor.
- Cantidad elevada.
- Producto personalizado.

Flujo:

1. Cliente envía pedido o solicitud.
2. Sistema marca “Pendiente de revisión”.
3. Ofiponiente valida.
4. Se confirma importe y plazo.
5. Se envía enlace de pago o se actualiza.
6. Cliente paga.
7. Pedido se confirma.

Esto es preferible a cobrar un importe incorrecto.

---

## 9.20 Descuentos

Tipos futuros:

- Código.
- Porcentaje.
- Importe fijo.
- Pack.
- Volumen.
- Cliente profesional.
- Categoría.
- Envío.

Reglas:

- Fecha.
- Uso máximo.
- Importe mínimo.
- Productos.
- Compatibilidad.
- Cliente.
- Zona.

No se implementará un motor complejo de promociones en el MVP salvo necesidad confirmada.

---

## 9.21 Impuestos

Cada producto tendrá tipo impositivo configurable.

El sistema debe:

- Calcular sobre datos de servidor.
- Mostrar desglose.
- Mantener instantánea.
- Gestionar facturación.
- Evitar confiar en precios enviados desde frontend.

La operativa fiscal definitiva deberá revisarse con la asesoría de Ofiponiente.

---

## 9.22 Facturación

Opciones:

- Generación interna básica.
- Integración con software actual.
- Exportación.
- ERP.
- Factura emitida manualmente.

No se desarrollará un sistema fiscal completo sin conocer:

- Programa actual.
- Numeración.
- Series.
- Contabilidad.
- Requisitos.
- Procedimiento de abonos.

Para el MVP puede bastar con:

- Pedido.
- Datos fiscales.
- Exportación.
- Confirmación.
- Integración posterior.

---

## 9.23 Emails transaccionales

Eventos:

- Pedido recibido.
- Pago confirmado.
- Pago fallido.
- Pedido en revisión.
- Pedido confirmado.
- Preparación.
- Entrega programada.
- Enviado.
- Completado.
- Cancelado.
- Reembolso.
- Incidencia.

Cada email incluirá:

- Referencia.
- Estado.
- Resumen.
- Próximo paso.
- Contacto.

No incluir datos sensibles innecesarios.

---

## 9.24 Cuenta de cliente

No será obligatoria para comprar.

Fase inicial:

- Consulta mediante enlace seguro.
- Email de estado.
- Referencia.

Fase posterior:

```text
/mi-cuenta
├── /pedidos
├── /presupuestos
├── /proyectos
├── /direcciones
├── /datos
└── /documentos
```

Beneficios:

- Historial.
- Recompra.
- Descargas.
- Seguimiento.
- Proyectos.
- Presupuestos.

---

## 9.25 Presupuesto convertible en pedido

Flujo futuro importante:

1. Comercial prepara propuesta.
2. Cliente recibe enlace.
3. Revisa productos y servicios.
4. Solicita cambios.
5. Acepta.
6. Firma o confirma.
7. Paga depósito o total.
8. Se crea pedido.

Esto conectará RapidOffice con ecommerce.

Entidad conceptual:

```text
Quote
```

Estados:

- Borrador.
- Enviado.
- Visto.
- Cambios solicitados.
- Aceptado.
- Rechazado.
- Caducado.
- Convertido.

---

## 9.26 Devoluciones e incidencias

La política dependerá de:

- Producto estándar.
- Producto personalizado.
- Montaje.
- Daños.
- Transporte.
- Compra B2B o consumidor.
- Condiciones del fabricante.

Flujo interno:

- Solicitud.
- Motivo.
- Fotografías.
- Revisión.
- Aprobación.
- Recogida.
- Reembolso o sustitución.
- Cierre.

No se publicará una política genérica sin revisión legal y operativa.

---

## 9.27 Cancelaciones

El sistema deberá diferenciar:

- Antes de pago.
- Después de pago.
- Antes de pedir al fabricante.
- Producto en fabricación.
- Producto personalizado.
- Pedido enviado.
- Proyecto con servicios ejecutados.

Las reglas deben mostrarse antes de comprar.

---

## 9.28 Incidencias de transporte

El proceso debe permitir registrar:

- Daño.
- Falta de bulto.
- Producto incorrecto.
- Retraso.
- Montaje pendiente.
- Rechazo de entrega.
- Fotografías.
- Firma o reserva.

Datos necesarios:

- Pedido.
- Línea.
- Fecha.
- Evidencia.
- Responsable.
- Resolución.

---

## 9.29 Carrito abandonado

Fase posterior, con base legal y consentimiento adecuado:

- Guardado local.
- Recuperación mediante enlace.
- Email.
- Ayuda.
- Retargeting.

No se debe enviar seguimiento si no existe contacto o permiso válido.

---

## 9.30 Analítica ecommerce

Eventos:

```text
view_item_list
select_item
view_item
add_to_cart
remove_from_cart
view_cart
begin_checkout
add_shipping_info
add_payment_info
purchase
refund
request_quote
request_volume_quote
```

Métricas:

- Conversión.
- Ticket.
- Margen.
- Abandono.
- Productos.
- Categorías.
- Transporte.
- Métodos de pago.
- Devoluciones.
- Solicitudes.
- Valor por canal.

---

## 9.31 SEO y ecommerce

Requisitos:

- Fichas indexables.
- Categorías útiles.
- Datos estructurados.
- Disponibilidad.
- Precio.
- Canonical.
- Sitemap.
- Imágenes.
- Breadcrumbs.

No indexar:

- Carrito.
- Checkout.
- Cuenta.
- Confirmaciones.
- Parámetros.
- Búsqueda.
- Filtros duplicados.

---

## 9.32 Rendimiento

El ecommerce debe:

- Cargar rápido.
- Optimizar imágenes.
- No depender de animaciones para comprar.
- Evitar scripts innecesarios.
- Mantener carrito.
- Recuperar errores.
- Funcionar en móvil.
- No bloquear por terceros.

Las animaciones de la landing se reducirán o eliminarán en carrito y checkout.

---

## 9.33 Accesibilidad

Requisitos:

- Formularios etiquetados.
- Teclado.
- Foco.
- Errores claros.
- Contraste.
- Resumen legible.
- Botones descriptivos.
- Cantidades accesibles.
- Estados anunciados.
- Pago sin barreras evitables.

---

## 9.34 Seguridad

Medidas:

- Autenticación segura para administración.
- Roles.
- Validación de servidor.
- Protección CSRF cuando corresponda.
- Rate limiting.
- Logs.
- Copias de seguridad.
- Webhooks verificados.
- Secretos separados.
- Dependencias actualizadas.
- Control de acceso.
- No exposición de costes o márgenes.

---

## 9.35 Panel de pedidos

Funciones mínimas:

- Listado.
- Filtros.
- Búsqueda.
- Detalle.
- Estado.
- Pago.
- Cliente.
- Dirección.
- Líneas.
- Notas.
- Historial.
- Exportación.
- Reembolso registrado.
- Incidencias.
- Enlace a lead o proyecto.

No se permitirá editar arbitrariamente un pedido pagado sin dejar registro.

---

## 9.36 MVP de ecommerce recomendado

La primera versión de venta online incluirá:

- Selección limitada.
- Carrito.
- Checkout como invitado.
- Datos de empresa.
- Una o dos formas de entrega.
- Un proveedor de pago.
- Transferencia opcional.
- Confirmación por webhook.
- Pedido.
- Emails.
- Panel.
- Estados básicos.
- Analítica.
- Políticas revisadas.

No incluirá inicialmente:

- Multimoneda.
- Multidioma.
- Marketplace.
- Suscripciones.
- Precios por cliente.
- Motor avanzado de descuentos.
- Varias tiendas.
- Varios almacenes complejos.
- Integración completa con proveedores.
- Financiación automática.
- Facturación fiscal propia avanzada.
- Cuenta profesional avanzada.

---

## 9.37 Criterios para activar el checkout

No se activará compra directa hasta que se confirme:

1. Productos iniciales.
2. Precio.
3. IVA.
4. Stock o plazo.
5. Transporte.
6. Montaje.
7. Pago.
8. Facturación.
9. Devoluciones.
10. Garantías.
11. Responsable de pedidos.
12. Proceso de incidencias.
13. Emails.
14. Condiciones legales.
15. Pruebas completas.

Si falta alguno de estos elementos, la ficha permanecerá como solicitud de presupuesto.

---

## 9.38 Pruebas obligatorias

Casos:

- Compra correcta.
- Pago fallido.
- Pago duplicado.
- Webhook repetido.
- Stock agotado.
- Outlet simultáneo.
- Dirección fuera de zona.
- Montaje.
- Transferencia.
- Cancelación.
- Reembolso.
- Email fallido.
- Sesión expirada.
- Móvil.
- Navegador.
- Accesibilidad.
- Cálculo de impuestos.
- Cálculo de total.
- Pedido bajo revisión.

---

## 9.39 Criterios de aceptación

1. El usuario puede comprar sin cuenta.
2. El carrito conserva datos.
3. Los precios se recalculan en servidor.
4. El stock se valida.
5. El transporte es correcto o queda bajo revisión.
6. El montaje se comunica claramente.
7. El pago se confirma mediante proveedor.
8. No hay pedidos duplicados.
9. Se genera referencia.
10. El usuario recibe email.
11. El equipo ve el pedido.
12. Los estados quedan registrados.
13. Los datos fiscales se conservan.
14. Los productos complejos no se compran por error.
15. El checkout funciona en móvil.
16. Los errores son recuperables.
17. Las condiciones están visibles.
18. La analítica registra la compra.
19. La administración está protegida.
20. Se puede exportar o integrar el pedido.

---

## 9.40 Decisiones cerradas en este punto

- El ecommerce se publicará después del catálogo y la captación.
- La primera versión pública podrá funcionar sin checkout.
- La tienda estará integrada en el mismo dominio.
- No se obligará a crear cuenta.
- Solo se venderán directamente productos con operativa validada.
- Los productos complejos se derivarán a presupuesto.
- Los pagos se procesarán mediante un proveedor externo.
- No se almacenarán datos completos de tarjeta.
- Los pedidos podrán quedar pendientes de revisión.
- El transporte y montaje formarán parte de la lógica comercial.
- La decisión de motor propio o externo dependerá de la auditoría.
- La recomendación provisional es Next.js propio para el modelo híbrido.
- No se activará checkout sin políticas y procesos cerrados.
- Las propuestas podrán convertirse en pedidos en una fase posterior.

---

## 9.41 Información pendiente del cliente

Ofiponiente debe confirmar:

- Productos vendibles online.
- Volumen esperado.
- Stock.
- ERP.
- Tarifas.
- Impuestos.
- Banco.
- TPV.
- Métodos de pago.
- Transferencia.
- Financiación.
- Transporte.
- Montaje.
- Recogida.
- Zonas.
- Almacén.
- Preparación.
- Responsable.
- Horarios.
- Facturación.
- Política de devolución.
- Cancelaciones.
- Garantías.
- Incidencias.
- Proceso de reembolso.
- Emails.
- Cuenta de proveedor.
- Promociones.
- Descuentos.
- Venta B2B.
- Venta a particulares.
- Pedido mínimo.
- Condiciones de pago.
- Software actual.
- Necesidad de Shopify, PrestaShop u otra plataforma.



# 10. Área privada y mini CRM operativo

## 10.1 Objetivo de esta sección

Definir el área privada de PlanificacionDeOficinas.com como un mini CRM especializado en mobiliario y proyectos de oficina.

No será un CRM genérico con cientos de funciones.

Su función será centralizar:

- Leads.
- Clientes.
- Empresas.
- Solicitudes del planificador.
- Proyectos.
- Presupuestos.
- Pedidos.
- Productos.
- Tareas.
- Seguimientos.
- Archivos.
- Actividad comercial.

El objetivo es evitar que la información quede dispersa entre:

- Correos.
- WhatsApp.
- Hojas de cálculo.
- Notas.
- Carpetas.
- Presupuestos aislados.
- Conversaciones personales.

---

## 10.2 Decisión principal

El área privada se plantea como:

> **Un CRM operativo vertical para Ofiponiente.**

No se desarrollará inicialmente como un producto SaaS independiente ni como sustituto total de un ERP.

Se centrará en el flujo comercial real:

```text
Lead
→ cliente
→ proyecto
→ propuesta
→ presupuesto
→ pedido
→ entrega
→ postventa
```

---

## 10.3 Ruta

Para el MVP:

> `planificaciondeoficinas.com/admin`

En una fase posterior, si el producto crece:

> `app.planificaciondeoficinas.com`

La separación a subdominio solo se hará cuando:

- El área privada tenga más usuarios.
- Exista mayor complejidad.
- El editor 2D crezca.
- Haya necesidades de despliegue independiente.
- Existan perfiles externos.

---

## 10.4 Usuarios y roles

### Administrador

Permisos:

- Acceso total.
- Usuarios.
- Roles.
- Configuración.
- Productos.
- Leads.
- Clientes.
- Proyectos.
- Presupuestos.
- Pedidos.
- Métricas.
- Integraciones.

### Comercial

Permisos:

- Leads asignados.
- Clientes.
- Proyectos.
- Notas.
- Tareas.
- Presupuestos.
- Seguimiento.
- Contacto.

No debe acceder a:

- Costes internos sensibles, salvo autorización.
- Configuración técnica.
- Usuarios.
- Márgenes globales.

### Catálogo

Permisos:

- Productos.
- Variantes.
- Stock.
- Imágenes.
- Documentos.
- Categorías.
- Publicación.

### Operaciones

Permisos:

- Pedidos.
- Transporte.
- Montaje.
- Incidencias.
- Estados.
- Entregas.
- Archivos operativos.

### Dirección

Permisos:

- Dashboard.
- Métricas.
- Pipeline.
- Márgenes.
- Ventas.
- Actividad.
- Exportaciones.

### Solo lectura

Para:

- Consultas.
- Auditoría.
- Colaboradores internos autorizados.

Los roles podrán simplificarse en el MVP si solo hay uno o dos usuarios.

---

## 10.5 Dashboard principal

El dashboard debe responder rápidamente:

- ¿Qué oportunidades nuevas hay?
- ¿Qué hay que hacer hoy?
- ¿Qué presupuestos están pendientes?
- ¿Qué pedidos tienen incidencias?
- ¿Qué proyectos están próximos?
- ¿Qué clientes necesitan seguimiento?

Bloques recomendados:

### Indicadores

- Leads nuevos.
- Leads A.
- Presupuestos enviados.
- Presupuestos pendientes.
- Valor del pipeline.
- Proyectos ganados.
- Pedidos activos.
- Incidencias abiertas.

### Tareas

- Vencidas.
- Hoy.
- Próximas.
- Sin responsable.

### Pipeline

- Nuevo.
- Contactado.
- Cualificado.
- Propuesta.
- Negociación.
- Ganado.
- Perdido.

### Actividad reciente

- Lead creado.
- Nota añadida.
- Presupuesto enviado.
- Pedido confirmado.
- Estado cambiado.
- Archivo subido.

### Alertas

- Lead A sin atender.
- Presupuesto sin seguimiento.
- Pedido retrasado.
- Stock insuficiente.
- Entrega pendiente.
- Incidencia abierta.

---

## 10.6 Módulo de leads

Cada lead mostrará:

- Nombre.
- Empresa.
- Email.
- Teléfono.
- Localidad.
- Fuente.
- Campaña.
- Tipo de proyecto.
- Presupuesto.
- Plazo.
- Puestos.
- Score.
- Prioridad.
- Estado.
- Responsable.
- Próxima acción.
- Fecha de creación.
- Última actividad.

Acciones:

- Asignar.
- Cambiar estado.
- Añadir nota.
- Crear tarea.
- Enviar email.
- Abrir teléfono.
- Abrir WhatsApp.
- Ver adjuntos.
- Convertir en cliente.
- Convertir en proyecto.
- Marcar perdido.
- Duplicar o fusionar.

---

## 10.7 Estados de lead

Estados iniciales:

- Nuevo.
- Pendiente de contacto.
- Contactado.
- Cualificado.
- No cualificado.
- En seguimiento.
- Convertido.
- Perdido.
- Pospuesto.

Motivos de no cualificación o pérdida:

- Fuera de cobertura.
- Presupuesto insuficiente.
- Sin respuesta.
- Proyecto cancelado.
- Competencia.
- Plazo inviable.
- Producto no disponible.
- Solicitud no real.
- Otro.

---

## 10.8 Empresas y contactos

Se separarán:

### Empresa

Campos:

- Razón social.
- Nombre comercial.
- CIF.
- Sector.
- Web.
- Teléfono.
- Email general.
- Dirección.
- Localidad.
- Provincia.
- Notas.
- Estado.
- Fuente.
- Responsable.

### Contacto

Campos:

- Nombre.
- Apellidos.
- Cargo.
- Email.
- Teléfono.
- Canal preferido.
- Consentimientos.
- Empresa asociada.
- Notas.

Una empresa podrá tener varios contactos.

Un contacto podrá participar en varios proyectos.

---

## 10.9 Vista 360 del cliente

Cada cliente debe mostrar en una sola vista:

- Datos.
- Contactos.
- Leads.
- Proyectos.
- Presupuestos.
- Pedidos.
- Facturas o referencias.
- Archivos.
- Notas.
- Tareas.
- Incidencias.
- Historial.

Objetivo:

> No buscar información en cinco sitios distintos.

---

## 10.10 Proyectos

Entidad principal:

```text
Project
```

Campos:

```text
id
reference
name
company_id
primary_contact_id
owner_user_id
status
priority
source
estimated_value
probability
expected_close_date
location
project_type
workstations
budget_range
timeline
notes
created_at
updated_at
```

Relaciones:

- Lead origen.
- Solicitud del planificador.
- Cliente.
- Contactos.
- Productos.
- Presupuestos.
- Pedidos.
- Archivos.
- Tareas.
- Actividad.
- Editor 2D.

---

## 10.11 Estados de proyecto

Estados propuestos:

- Oportunidad.
- Información pendiente.
- Medición pendiente.
- Visita programada.
- En diseño.
- Propuesta en preparación.
- Presupuesto enviado.
- Negociación.
- Aceptado.
- En ejecución.
- Entregado.
- Cerrado.
- Perdido.
- Pospuesto.

No todos deben aparecer en el pipeline principal.

---

## 10.12 Pipeline comercial

Vista Kanban inicial:

```text
Nuevo
→ Cualificación
→ Visita / medición
→ Propuesta
→ Negociación
→ Ganado
→ Perdido
```

Cada tarjeta mostrará:

- Cliente.
- Proyecto.
- Valor.
- Responsable.
- Próxima acción.
- Días en etapa.
- Prioridad.

Funciones:

- Arrastrar entre etapas.
- Registrar cambio.
- Pedir motivo.
- Actualizar probabilidad.
- Crear tarea automática.

---

## 10.13 Presupuestos

Entidad:

```text
Quote
```

Campos:

```text
id
reference
project_id
customer_id
status
version
valid_until
subtotal
discount
shipping
assembly
tax
total
notes
terms
created_by
created_at
sent_at
accepted_at
```

Líneas:

```text
QuoteItem
product_id
variant_id
sku
description
quantity
unit_price
discount
tax_rate
total
service_type
```

---

## 10.14 Estados de presupuesto

- Borrador.
- En revisión interna.
- Listo para enviar.
- Enviado.
- Visto.
- Cambios solicitados.
- Reenviado.
- Aceptado.
- Rechazado.
- Caducado.
- Convertido en pedido.

---

## 10.15 Versionado de presupuestos

Cada cambio relevante generará una versión:

```text
P-2026-001 v1
P-2026-001 v2
P-2026-001 v3
```

Se conservará:

- Fecha.
- Usuario.
- Cambios.
- Total anterior.
- Total nuevo.
- Motivo.

No se sobrescribirá un presupuesto ya enviado sin historial.

---

## 10.16 Generación de presupuesto

El comercial podrá:

- Añadir productos.
- Añadir variantes.
- Añadir servicios.
- Añadir transporte.
- Añadir montaje.
- Aplicar descuento.
- Añadir notas.
- Definir validez.
- Definir condiciones.
- Generar PDF.
- Compartir por enlace.
- Enviar por email.

Fase posterior:

- Aceptación online.
- Firma.
- Pago de señal.
- Conversión automática en pedido.

---

## 10.17 Pedidos

Entidad:

```text
Order
```

El CRM mostrará:

- Referencia.
- Cliente.
- Proyecto.
- Presupuesto origen.
- Estado.
- Pago.
- Productos.
- Proveedor.
- Transporte.
- Montaje.
- Entrega.
- Incidencias.
- Documentos.

---

## 10.18 Estados operativos de pedido

- Pendiente de confirmación.
- Confirmado.
- Pedido a proveedor.
- En preparación.
- Recibido en almacén.
- Entrega programada.
- En reparto.
- Montaje programado.
- Entregado.
- Completado.
- Incidencia.
- Cancelado.

---

## 10.19 Tareas

Entidad:

```text
Task
```

Tipos:

- Llamar.
- Enviar email.
- Solicitar plano.
- Preparar propuesta.
- Revisar presupuesto.
- Programar visita.
- Confirmar stock.
- Coordinar montaje.
- Seguimiento.
- Resolver incidencia.
- Otro.

Campos:

- Título.
- Descripción.
- Fecha.
- Hora.
- Responsable.
- Prioridad.
- Estado.
- Relación.
- Recordatorio.

Relaciones:

- Lead.
- Cliente.
- Proyecto.
- Presupuesto.
- Pedido.
- Incidencia.

---

## 10.20 Agenda

Vista mínima:

- Hoy.
- Semana.
- Vencidas.
- Próximas.

Fase posterior:

- Calendario.
- Integración Google Calendar.
- Citas.
- Visitas.
- Recordatorios.
- Disponibilidad.

No se desarrollará una agenda compleja antes de validar el flujo real.

---

## 10.21 Notas y actividad

### Notas

Podrán ser:

- Internas.
- Comerciales.
- Operativas.
- Privadas para dirección.

### Actividad

Se registrará:

- Creación.
- Cambio de estado.
- Asignación.
- Email.
- Llamada registrada.
- Presupuesto enviado.
- Archivo añadido.
- Pedido creado.
- Incidencia.
- Comentario.

Objetivo:

> Saber qué ocurrió, quién lo hizo y cuándo.

---

## 10.22 Archivos

Tipos:

- Plano.
- Fotografía.
- Presupuesto.
- Ficha técnica.
- Contrato.
- Pedido.
- Factura.
- Documento de entrega.
- Incidencia.
- Otro.

Requisitos:

- Acceso autorizado.
- Nombre claro.
- Tipo.
- Tamaño.
- Fecha.
- Relación con entidad.
- Eliminación controlada.
- Sin URLs públicas permanentes.

---

## 10.23 Comunicaciones

### Email

Funciones iniciales:

- Abrir cliente de correo.
- Plantillas.
- Registrar envío manual.
- Enviar presupuesto.
- Enviar confirmación.
- Enviar recordatorio.

Fase posterior:

- Sincronización de hilos.
- Registro automático.
- Seguimiento de apertura.
- Automatizaciones.

### Teléfono

Registrar:

- Fecha.
- Resultado.
- Nota.
- Próxima acción.

### WhatsApp

Inicialmente:

- Abrir conversación.
- Mensaje predefinido.
- Registrar nota manual.

No se intentará integrar WhatsApp profundamente en el MVP.

---

## 10.24 Plantillas

Plantillas iniciales:

- Primera respuesta.
- Solicitud de información.
- Confirmación de visita.
- Envío de presupuesto.
- Seguimiento.
- Presupuesto caducado.
- Pedido confirmado.
- Entrega.
- Incidencia.
- Cierre.

Las plantillas deberán ser editables.

---

## 10.25 Productos dentro del CRM

El panel de catálogo permitirá:

- Buscar producto.
- Ver disponibilidad.
- Ver coste.
- Ver precio.
- Ver margen.
- Añadir a presupuesto.
- Añadir a proyecto.
- Consultar documentos.
- Ver proveedor.
- Ver plazo.

Los costes y márgenes estarán protegidos por rol.

---

## 10.26 Proveedores

Entidad futura:

```text
Supplier
```

Campos:

- Nombre.
- Contacto.
- Marcas.
- Tarifas.
- Plazos.
- Condiciones.
- Documentos.
- Notas.

Fase inicial:

- Campo de proveedor en producto.
- Información básica.

No se desarrollará un módulo completo de compras en el MVP.

---

## 10.27 Incidencias

Entidad:

```text
Issue
```

Tipos:

- Daño.
- Retraso.
- Falta de producto.
- Error de pedido.
- Montaje.
- Garantía.
- Devolución.
- Facturación.
- Otro.

Campos:

- Referencia.
- Cliente.
- Pedido.
- Producto.
- Descripción.
- Fotografías.
- Responsable.
- Prioridad.
- Estado.
- Resolución.

Estados:

- Abierta.
- En revisión.
- Pendiente de proveedor.
- Pendiente de cliente.
- En resolución.
- Resuelta.
- Cerrada.

---

## 10.28 Búsqueda global

Debe permitir buscar por:

- Nombre.
- Empresa.
- Email.
- Teléfono.
- Referencia.
- Proyecto.
- Presupuesto.
- Pedido.
- SKU.
- Producto.

La búsqueda debe ser rápida y accesible desde el panel.

---

## 10.29 Filtros y vistas guardadas

Filtros:

- Responsable.
- Estado.
- Prioridad.
- Fecha.
- Fuente.
- Zona.
- Valor.
- Plazo.
- Tipo de proyecto.

Vistas iniciales:

- Mis leads.
- Leads A.
- Sin contactar.
- Seguimientos de hoy.
- Presupuestos pendientes.
- Pedidos activos.
- Incidencias abiertas.

---

## 10.30 Métricas del CRM

### Comercial

- Leads.
- Leads por fuente.
- Leads por prioridad.
- Tiempo de respuesta.
- Conversión.
- Presupuestos.
- Ratio de aceptación.
- Valor del pipeline.
- Ventas.
- Motivos de pérdida.

### Operativa

- Pedidos activos.
- Tiempo de entrega.
- Incidencias.
- Retrasos.
- Montajes.
- Devoluciones.

### Catálogo

- Productos consultados.
- Productos presupuestados.
- Productos vendidos.
- Categorías.
- Márgenes.
- Stock.

---

## 10.31 Automatizaciones del MVP

Automatizaciones sencillas:

### Nuevo lead A

- Marcar prioridad.
- Notificar.
- Crear tarea.

### Presupuesto enviado

- Crear seguimiento.
- Registrar fecha.

### Presupuesto próximo a caducar

- Avisar.

### Proyecto ganado

- Permitir crear pedido.
- Cerrar oportunidad.
- Registrar valor.

### Pedido confirmado

- Crear tareas operativas.
- Avisar.

### Tarea vencida

- Mostrar alerta.

No se implementará un motor de automatización genérico inicialmente.

---

## 10.32 Duplicados

El sistema detectará posibles duplicados por:

- Email.
- Teléfono.
- CIF.
- Empresa.
- Referencia.

Acciones:

- Avisar.
- Fusionar.
- Mantener separados.
- Relacionar.

No se bloqueará automáticamente sin revisión.

---

## 10.33 Importación inicial

Se podrá importar:

- Empresas.
- Contactos.
- Productos.
- Leads.
- Proyectos básicos.

Formatos:

- CSV.
- Excel.

Proceso:

1. Subir.
2. Mapear columnas.
3. Validar.
4. Previsualizar.
5. Detectar duplicados.
6. Confirmar.
7. Registrar resultado.

No se importarán datos sin copia y revisión.

---

## 10.34 Exportación

Exportaciones iniciales:

- Leads.
- Clientes.
- Proyectos.
- Presupuestos.
- Pedidos.
- Productos.

Formato:

- CSV.
- Excel.
- PDF en presupuestos.

Permisos según rol.

---

## 10.35 Seguridad

Requisitos:

- Login seguro.
- Contraseñas robustas.
- Sesiones.
- Recuperación.
- Roles.
- Auditoría.
- Rate limiting.
- Protección de rutas.
- Validación de servidor.
- Copias de seguridad.
- Cierre de sesión.
- Revocación de usuarios.

Datos sensibles:

- Costes.
- Márgenes.
- Contactos.
- Archivos.
- Presupuestos.
- Pedidos.

No deben quedar expuestos en frontend público.

---

## 10.36 RGPD y datos

Funciones necesarias:

- Consentimientos.
- Fuente.
- Fecha.
- Base legal.
- Exportación de datos.
- Rectificación.
- Supresión.
- Restricción.
- Registro de actividad.

No se almacenarán datos indefinidamente sin política.

---

## 10.37 Auditoría

Se registrarán acciones sensibles:

- Accesos.
- Cambios de estado.
- Modificaciones de precio.
- Cambios de presupuesto.
- Exportaciones.
- Eliminaciones.
- Cambios de permisos.
- Reembolsos.
- Edición de pedidos.

Campos:

- Usuario.
- Acción.
- Entidad.
- Fecha.
- Valor anterior.
- Valor nuevo.

---

## 10.38 UX del panel

Principios:

- Rápido.
- Simple.
- Pocas pantallas.
- Acciones visibles.
- No saturar.
- Búsqueda global.
- Filtros útiles.
- Tablas legibles.
- Buen uso en portátil.
- Responsive básico.

No es prioritario optimizar el CRM completo para móvil, pero:

- Leads.
- Tareas.
- Contactos.
- Notas.
- Estados.

sí deben poder gestionarse desde móvil.

---

## 10.39 Integración con el planificador

Al completar una solicitud:

1. Crear lead.
2. Crear contacto.
3. Crear empresa si procede.
4. Guardar respuestas.
5. Guardar archivos.
6. Calcular score.
7. Crear actividad.
8. Crear tarea.
9. Notificar.
10. Permitir convertir en proyecto.

No se duplicarán manualmente los datos.

---

## 10.40 Integración con RapidOffice

RapidOffice podrá aportar:

- Proyectos.
- Catálogo.
- Editor.
- Compartición.
- Totales.
- Presupuestos.

Integración futura:

```text
CRM
→ crear proyecto
→ abrir editor
→ añadir productos
→ calcular propuesta
→ generar presupuesto
→ enviar
→ convertir en pedido
```

El editor debe ser una herramienta dentro del flujo, no una aplicación aislada.

---

## 10.41 Integración con ecommerce

Cuando exista una compra:

- Crear o relacionar cliente.
- Crear pedido.
- Registrar pago.
- Registrar origen.
- Mostrar productos.
- Crear tareas operativas.
- Registrar incidencias.
- Vincular con proyecto si procede.

Una compra grande podrá crear automáticamente una oportunidad comercial.

---

## 10.42 Alcance del MVP del CRM

Debe incluir:

- Login.
- Usuarios básicos.
- Dashboard.
- Leads.
- Empresas.
- Contactos.
- Proyectos.
- Tareas.
- Notas.
- Actividad.
- Archivos.
- Pipeline.
- Scoring.
- Presupuestos básicos.
- Exportación.
- Búsqueda.
- Filtros.
- Roles simples.

Puede incluir en una segunda entrega:

- Pedidos.
- Incidencias.
- Catálogo completo.
- Automatizaciones.
- Emails integrados.
- Editor 2D.
- Métricas avanzadas.

---

## 10.43 Lo que no será el MVP

- ERP.
- Contabilidad.
- Nóminas.
- Compras avanzadas.
- Gestión completa de almacén.
- Call center.
- Marketing automation completo.
- WhatsApp API.
- Help desk general.
- Multiempresa SaaS.
- App móvil nativa.
- Inteligencia artificial comercial.
- Automatizaciones libres tipo Zapier.

---

## 10.44 Criterios de aceptación

1. Un lead del planificador aparece en el panel.
2. Se identifica su fuente.
3. Se calcula prioridad.
4. Se asigna responsable.
5. Se añade nota.
6. Se crea tarea.
7. Se cambia estado.
8. Se convierte en cliente.
9. Se convierte en proyecto.
10. Se crea presupuesto.
11. Se guarda historial.
12. Se buscan entidades.
13. Se filtran oportunidades.
14. Se detectan duplicados.
15. Se exportan datos.
16. Los archivos están protegidos.
17. Los roles limitan acceso.
18. Las acciones sensibles quedan registradas.
19. El dashboard refleja datos reales.
20. El sistema funciona sin depender de hojas de cálculo.

---

## 10.45 Decisiones cerradas en este punto

- El área privada será un mini CRM vertical.
- No será un CRM genérico ni un ERP.
- El flujo principal será lead → cliente → proyecto → presupuesto → pedido.
- El planificador creará leads automáticamente.
- El CRM centralizará actividad, tareas, notas y archivos.
- Existirán empresas y contactos separados.
- Los presupuestos tendrán versiones.
- Los pedidos se conectarán con proyectos.
- RapidOffice se integrará como herramienta interna.
- Se empezará en `/admin`.
- Los roles iniciales serán simples.
- El MVP priorizará gestión comercial.
- No se desarrollarán compras, almacén o contabilidad avanzados.
- Las automatizaciones iniciales serán concretas y limitadas.

---

## 10.46 Información pendiente del cliente

Ofiponiente debe confirmar:

- Usuarios.
- Roles.
- Comerciales.
- Responsables.
- Flujo actual.
- Estados.
- Pipeline.
- Tareas.
- Motivos de pérdida.
- Presupuestos.
- Plantillas.
- Software actual.
- ERP.
- Facturación.
- Pedidos.
- Proveedores.
- Montaje.
- Incidencias.
- Archivos.
- Excel existentes.
- Clientes actuales.
- Importación.
- Exportación.
- Correos.
- WhatsApp.
- Agenda.
- Métricas deseadas.
- Datos sensibles.
- Permisos.
- Copias de seguridad.
- Necesidad de acceso móvil.



# 11. Reutilización de RapidOffice

## 11.1 Objetivo de esta sección

Definir qué partes del proyecto RapidOffice aportan valor a PlanificacionDeOficinas.com y cómo deben reutilizarse sin arrastrar:

- Código provisional.
- Modelos demasiado simples.
- Dependencias innecesarias.
- Errores de arquitectura.
- Inconsistencias de tipos.
- Seguridad insuficiente.
- Marca y rutas antiguas.
- Funciones incompletas.

RapidOffice se tratará como:

> **Un prototipo funcional y una biblioteca de aprendizajes, no como la aplicación final que debe ampliarse indefinidamente.**

---

## 11.2 Decisión principal

Se creará un proyecto limpio para PlanificacionDeOficinas.com.

RapidOffice permanecerá:

- Conservado en su repositorio.
- Disponible como referencia.
- Utilizable para extraer componentes.
- Utilizable para comprobar comportamientos.
- Sin convertirse automáticamente en la base completa de producción.

No se hará:

- Un copiado completo del repositorio.
- Un cambio de nombre superficial.
- Una migración masiva sin auditoría.
- Una ampliación directa de todas sus tablas y rutas.

Estrategia:

```text
RapidOffice
→ auditar
→ clasificar
→ extraer
→ adaptar
→ probar
→ integrar en el nuevo proyecto
```

---

## 11.3 Valor real ya construido

RapidOffice contiene trabajo útil que reduce el desarrollo futuro.

### Capa visual pública

Existe una landing avanzada con:

- Identidad visual de Ofiponiente.
- Hero.
- Vídeo.
- Categorías.
- Marcas.
- Proceso comercial.
- Galería.
- Animaciones GSAP.
- Diseño responsive inicial.

Valor:

- Base de dirección artística.
- Componentes reutilizables.
- Recursos visuales.
- Demostración para el cliente.

Limitación:

- Está concentrada principalmente en una sola página.
- La navegación utiliza anclas.
- Debe dividirse en componentes y rutas reales.
- Algunas animaciones deberán reducirse por rendimiento y accesibilidad.

---

### Editor 2D

Existe un editor basado en React Konva con:

- Lienzo.
- Cuadrícula.
- Arrastre de productos.
- Ajuste a cuadrícula.
- Selección.
- Movimiento.
- Duplicado.
- Eliminación.
- Presentación.
- Panel de catálogo.
- Inspector.
- Guardado.

Valor:

- Prueba de viabilidad.
- Base del editor comercial interno.
- Interacción ya resuelta parcialmente.
- Integración inicial con proyectos y catálogo.

Limitación:

- No es todavía un planificador técnico de espacios.
- No incluye paredes, puertas, ventanas ni habitaciones.
- La escala física necesita revisarse.
- Las dimensiones del mueble se representan directamente sobre píxeles.
- No hay validación de colisiones o circulación.
- No debe exponerse como diseño profesional definitivo sin revisión.

---

### Proyectos

Existe:

- Creación.
- Listado.
- Apertura.
- Actualización.
- Autoguardado.
- Totales.
- Propiedad por usuario.
- Compartición conceptual.

Valor:

- Flujo básico de proyecto.
- Conexión entre editor y backend.
- Base para la futura entidad de proyecto.

Limitación:

- El proyecto actual está centrado casi exclusivamente en `canvas_data`.
- No incluye cliente, empresa, lead, presupuesto versionado, tareas, estado comercial o pedido.
- Debe integrarse en el modelo del mini CRM.

---

### Catálogo conceptual

Existe un modelo básico con:

- Nombre.
- Tipo.
- Precio.
- Dimensiones.
- Marca.
- Categoría.
- Imagen.

Valor:

- Permite colocar productos.
- Permite calcular totales.
- Sirve como prototipo.

Limitación:

- No es suficiente para ecommerce.
- No contempla correctamente publicación, SEO, stock, documentación, variantes complejas, servicios o logística.
- Incluye campos heredados o duplicados.
- Debe mapearse al modelo de producto definitivo.

---

### Backend

Existe un backend con:

- FastAPI.
- PostgreSQL.
- SQLAlchemy asíncrono.
- Autenticación JWT.
- Catálogo.
- Proyectos.
- Validación Pydantic.
- Cálculo de subtotal, impuestos y total.

Valor:

- Demuestra la lógica.
- Mantiene el cálculo económico en servidor.
- Proporciona esquemas útiles como referencia.
- Sirve para comparar decisiones técnicas.

Limitación:

- Aumenta la complejidad al separar frontend y backend.
- Debe evaluarse si sigue siendo necesario.
- La nueva plataforma necesitará muchas entidades adicionales.
- No se conservará únicamente porque ya exista.

---

## 11.4 Clasificación de reutilización

Cada elemento se clasificará en una de estas categorías:

### Conservar concepto

La idea es correcta, pero se reimplementará.

### Portar y adaptar

El código aporta valor, pero necesita cambios.

### Reutilizar casi directamente

El código está suficientemente aislado y probado.

### Archivar

Sirve como referencia, pero no entrará en producción.

### Eliminar

No aporta valor o introduce riesgo.

---

## 11.5 Elementos que se portarán y adaptarán

### Diseño visual

Portar:

- Paleta.
- Tipografías, si sus licencias lo permiten.
- Espaciado.
- Botones.
- Componentes visuales.
- Secciones.
- Galería.
- Presentación del proceso.

Adaptar:

- Marca “Planificación de Oficinas by Ofiponiente”.
- Navegación real.
- Mensajes.
- Accesibilidad.
- Rendimiento.
- Responsive.
- Preferencia de movimiento reducido.

---

### Editor y componentes Konva

Portar:

- Carga dinámica de Konva.
- Lienzo.
- Capas.
- Cuadrícula.
- Selección.
- Arrastre.
- Catálogo lateral.
- Inspector.
- Presentación.

Adaptar:

- Modelo de escala.
- Dimensiones.
- Rotación.
- Zoom.
- Pan.
- ResizeObserver.
- Deshacer y rehacer.
- Copiar y pegar.
- Atajos.
- Guardado.
- Versionado.
- Manejo de errores.
- Datos de variante.
- Servicios.
- Cálculo.
- Exportación.

---

### Flujo de proyectos

Portar:

- Creación.
- Listado.
- Apertura.
- Guardado.
- Totales.
- Compartición.

Adaptar:

- Relación con cliente.
- Empresa.
- Lead.
- Estado.
- Responsable.
- Presupuesto.
- Pedido.
- Archivos.
- Actividad.
- Permisos.
- Versiones.

---

### Cálculo en servidor

Conservar el principio:

> El cliente nunca será la fuente de verdad de precios, impuestos o totales.

Adaptar:

- Precios por variante.
- Cantidades.
- Descuentos.
- Servicios.
- Transporte.
- Montaje.
- IVA.
- Vigencia.
- Instantánea de precio.
- Permisos.

---

## 11.6 Elementos que no deben copiarse directamente

### Autenticación basada en token en `localStorage`

La implementación actual conserva un token en almacenamiento local del navegador.

No se copiará como solución definitiva.

La nueva autenticación debe priorizar:

- Cookies seguras.
- `httpOnly`.
- `secure`.
- `sameSite`.
- Sesiones de servidor.
- Revocación.
- Roles.
- Protección CSRF cuando corresponda.
- Recuperación segura.

---

### Tipos duplicados o inconsistentes

Actualmente existen definiciones en varios lugares y diferencias conceptuales como:

- Identificadores numéricos en frontend.
- UUID en backend.
- `owner_id` frente a `user_id`.
- Campos heredados.
- Índices abiertos con `any`.
- Diferencias entre el modelo frontend y el esquema validado.

No se copiarán estas inconsistencias.

La nueva aplicación tendrá:

- Fuente de tipos coherente.
- Esquemas compartidos o generados.
- Validación de entrada.
- Contratos documentados.
- Migraciones controladas.

---

### API cliente genérico sin contratos suficientes

La capa actual resuelve peticiones básicas, pero no incluye:

- Tipado generado.
- Errores por dominio.
- Reintentos controlados.
- Estados offline.
- Invalidación.
- Observabilidad.
- Control avanzado de sesión.

Se revisará la estrategia antes de reutilizarla.

---

### Alertas del navegador como manejo de errores

No se copiarán:

- `alert`.
- Errores solo por consola.
- Redirecciones bruscas sin contexto.

Se utilizarán:

- Mensajes dentro de interfaz.
- Toasts accesibles.
- Estados recuperables.
- Logs internos.
- Identificadores de error.

---

### Una sola página pública de gran tamaño

La landing actual debe dividirse en:

- Componentes.
- Secciones.
- Rutas.
- Datos.
- Contenido administrable cuando corresponda.

No se ampliará indefinidamente el archivo principal.

---

### Campos heredados y comodines

No se conservarán sin justificación:

- Precio duplicado.
- Dimensiones duplicadas.
- Propiedades arbitrarias mediante `any`.
- Comentarios de compatibilidad indefinida.
- Datos de demostración mezclados con producción.

---

## 11.7 Problemas detectados que deben resolverse

### El frontend y backend no comparten exactamente el mismo contrato

Ejemplos conceptuales:

- Tipo del identificador del proyecto.
- Nombre del propietario.
- Identificador del producto.
- Campos de canvas.
- Variantes.

Riesgo:

- Errores silenciosos.
- Conversiones.
- Datos imposibles.
- Refactorizaciones inseguras.

Solución:

- Definir esquema único.
- Validarlo.
- Generar tipos cuando sea posible.
- Añadir pruebas de contrato.

---

### Escala del editor

El editor representa dimensiones físicas directamente en el lienzo.

Debe definirse:

```text
escala = píxeles por centímetro
```

o una abstracción equivalente.

Necesidades:

- Medidas reales.
- Zoom independiente.
- Cuadrícula configurable.
- Conversión.
- Impresión.
- Exportación.

El tamaño visual no debe depender directamente del número de centímetros sin una escala explícita.

---

### Compartición

La ruta actual de compartición debe auditarse.

La nueva versión necesita:

- Token aleatorio seguro.
- Generación explícita.
- Revocación.
- Caducidad opcional.
- Permisos.
- Campos públicos limitados.
- Registro de acceso.
- Vista sin datos internos.

Una respuesta pública no debe exponer:

- Usuario propietario.
- Costes.
- Márgenes.
- Notas.
- Información interna.
- Datos de cliente no necesarios.

---

### Autoguardado

El patrón actual de guardado periódico es útil, pero debe añadir:

- Debounce real.
- Estado guardado.
- Estado sin guardar.
- Error.
- Reintento.
- Control de concurrencia.
- Versión.
- Prevención de sobrescritura.
- Guardado al salir cuando sea viable.

---

### Cálculo económico

El servidor recalcula precios utilizando el catálogo, lo cual es correcto como principio.

Debe evolucionar para:

- Capturar una instantánea de precio.
- Evitar que una actualización cambie presupuestos ya enviados.
- Distinguir coste y venta.
- Aplicar descuentos autorizados.
- Añadir servicios.
- Gestionar IVA.
- Versionar propuestas.

---

## 11.8 Decisión sobre FastAPI

No se conservará FastAPI automáticamente.

### Opción recomendada para el MVP

Una única aplicación principal con:

- Next.js.
- Backend de la propia aplicación.
- PostgreSQL.
- ORM.
- Autenticación de servidor.
- Almacenamiento de archivos.
- Servicio de correo.

Razones:

- Menos despliegues.
- Menos contratos duplicados.
- Menos autenticación cruzada.
- Menor coste operativo.
- Más rapidez para un equipo pequeño.
- Web, CRM y ecommerce muy conectados.

### Cuándo mantener o reintroducir FastAPI

Tendrá sentido si aparecen:

- Procesamiento pesado.
- Generación avanzada.
- Algoritmos de planificación.
- Servicios de IA.
- Importadores largos.
- Integraciones Python.
- Tareas asíncronas.
- APIs consumidas por varios clientes.
- Escalado independiente.

Decisión provisional:

> El nuevo MVP no dependerá de un backend FastAPI separado. El código actual se conservará como referencia y fuente de reglas.

La decisión definitiva se validará en la arquitectura técnica del Punto 12.

---

## 11.9 Estrategia de repositorio

### Repositorio nuevo recomendado

Nombre provisional:

```text
planificacion-de-oficinas
```

Contendrá:

- Web pública.
- Planificador.
- Admin.
- Mini CRM.
- Catálogo.
- Ecommerce cuando se active.
- Editor interno adaptado.

### Repositorio RapidOffice

Se mantendrá:

- Archivado funcionalmente.
- Etiquetado.
- Sin mezclar desarrollos nuevos.
- Como fuente de componentes.

No se eliminará hasta:

- Portar lo útil.
- Validar el nuevo proyecto.
- Documentar equivalencias.

---

## 11.10 Inventario previo obligatorio

Antes de copiar código se generará un inventario.

Columnas:

```text
ruta
componente
función
dependencias
estado
calidad
seguridad
reutilización
destino
cambios necesarios
pruebas
```

Clasificación:

- Portar.
- Reescribir.
- Archivar.
- Eliminar.
- Pendiente.

---

## 11.11 Orden de migración

### Fase 1 — Congelar y etiquetar

- Confirmar rama.
- Crear etiqueta del estado actual.
- Documentar ejecución.
- Registrar variables.
- No hacer cambios masivos.

### Fase 2 — Crear base limpia

- Proyecto nuevo.
- Calidad.
- Formato.
- Pruebas.
- Entornos.
- Base de datos.
- Autenticación.

### Fase 3 — Portar sistema visual

- Tokens.
- Tipografía.
- Botones.
- Layout.
- Imágenes.
- Componentes.
- Animaciones seleccionadas.

### Fase 4 — Construir web y planificador

- Rutas públicas.
- Contenido.
- Formularios.
- Leads.
- Admin básico.

### Fase 5 — Portar editor

- Modelos nuevos.
- Componentes Konva.
- Integración con proyecto.
- Escala.
- Guardado.
- Presupuesto.

### Fase 6 — Validar y retirar demo

- Comparar.
- Probar.
- Redirigir.
- Archivar.
- Documentar.

---

## 11.12 Matriz provisional de reutilización

| Elemento | Acción | Prioridad |
|---|---|---:|
| Paleta y dirección visual | Portar y adaptar | Alta |
| Recursos visuales autorizados | Auditar y portar | Alta |
| Hero y secciones públicas | Refactorizar | Alta |
| Animaciones GSAP | Seleccionar y simplificar | Media |
| Editor Konva | Portar después del CRM básico | Media |
| Cuadrícula y drag & drop | Portar y mejorar | Media |
| Catálogo lateral | Adaptar al nuevo producto | Media |
| Inspector | Adaptar a variantes | Media |
| Proyectos | Rehacer sobre modelo CRM | Alta |
| Cálculo servidor | Conservar principio y reimplementar | Alta |
| Backend FastAPI | Archivar como referencia | Baja |
| JWT en localStorage | Eliminar | Alta |
| API genérica actual | Reemplazar o endurecer | Alta |
| Página de proyectos | Rehacer dentro del CRM | Alta |
| Compartición pública | Reimplementar con seguridad | Media |
| Datos de demostración | No migrar automáticamente | Alta |
| Marca RapidOffice | Retirar de producción | Alta |

---

## 11.13 Pruebas necesarias al portar componentes

### Visuales

- Responsive.
- Fuentes.
- Imágenes.
- Estados.
- Movimiento reducido.
- Contraste.

### Editor

- Arrastre.
- Selección.
- Movimiento.
- Duplicado.
- Eliminación.
- Rotación.
- Zoom.
- Escala.
- Guardado.
- Recuperación.
- Totales.
- Compartición.

### Datos

- Producto.
- Variante.
- Cantidad.
- Proyecto.
- Presupuesto.
- Precio.
- Impuestos.

### Seguridad

- Acceso.
- Roles.
- Compartición.
- Datos internos.
- Archivos.
- Sesiones.

---

## 11.14 Qué no se portará en la primera entrega

No se portará inmediatamente:

- Editor 2D completo.
- Compartición pública.
- Presupuestos avanzados.
- Todos los productos de demostración.
- Backend FastAPI.
- Login actual.
- Página actual de proyectos.
- Cualquier código sin uso demostrado.

Primero se construirá:

- Web.
- Planificador.
- Leads.
- Mini CRM básico.
- Catálogo inicial.

Después se integrará el editor sobre modelos ya estables.

---

## 11.15 Criterios de aceptación

La reutilización estará bien ejecutada cuando:

1. RapidOffice siga disponible como referencia.
2. El proyecto nuevo funcione de forma independiente.
3. No existan dependencias accidentales.
4. Los componentes portados tengan propósito.
5. La marca antigua no aparezca.
6. La autenticación sea segura.
7. Los tipos sean coherentes.
8. Los datos estén validados.
9. La web esté dividida en rutas.
10. El editor utilice escala explícita.
11. Los precios se calculen en servidor.
12. Los presupuestos conserven instantáneas.
13. La compartición no exponga datos internos.
14. Los errores sean recuperables.
15. Existan pruebas.
16. No se migren datos ficticios.
17. La complejidad operativa sea menor.
18. El nuevo CRM pueda funcionar sin editor.
19. El editor pueda añadirse sin rehacer el CRM.
20. La documentación indique qué se reutilizó.

---

## 11.16 Decisiones cerradas en este punto

- Se creará un repositorio limpio.
- RapidOffice será referencia, no base monolítica de producción.
- Se portará selectivamente el diseño visual.
- El editor Konva se reutilizará después de estabilizar CRM y catálogo.
- El proyecto actual se reemplazará por un modelo conectado al CRM.
- No se copiará la autenticación basada en `localStorage`.
- Los contratos frontend/backend se unificarán.
- La escala del editor se redefinirá.
- La compartición pública se reimplementará con permisos.
- El cálculo económico seguirá siendo de servidor.
- FastAPI no será obligatorio en el MVP.
- La primera entrega no dependerá del editor 2D.
- No se migrarán automáticamente datos de demostración.
- Todo código portado deberá tener pruebas y propósito.

---

## 11.17 Información pendiente

Antes de implementar se deberá confirmar:

- Rama válida de RapidOffice.
- Estado de ejecución.
- Datos reales o ficticios.
- Variables de entorno.
- Base de datos existente.
- Recursos con licencia.
- Imágenes propiedad de Ofiponiente.
- Funciones que realmente usa el cliente.
- Errores conocidos.
- Pruebas existentes.
- Despliegue actual.
- Usuarios actuales.
- Si hay información que deba conservarse.
- Prioridad real del editor.
- Necesidad de planos profesionales.
- Formato de exportación.
- Uso real de propuestas compartidas.




# 12. Arquitectura técnica

## 12.1 Objetivo

Definir una arquitectura sencilla, segura y mantenible para:

- Web pública.
- Planificador.
- Mini CRM.
- Catálogo.
- Presupuestos.
- Pedidos.
- Ecommerce futuro.
- Editor 2D interno.

Regla principal:

> Empezar con un monolito modular y separar servicios únicamente cuando exista una necesidad demostrada.

---

## 12.2 Stack base

La aplicación se construirá inicialmente con:

- Next.js estable con App Router.
- React estable.
- TypeScript en modo estricto.
- PostgreSQL.
- Drizzle ORM.
- Better Auth.
- Tailwind CSS.
- Zod.
- React Hook Form para formularios complejos.
- Vercel para despliegue.
- Neon para PostgreSQL.
- Almacenamiento privado de objetos.
- Resend para correo transaccional.
- Vitest para pruebas unitarias.
- Playwright para pruebas end-to-end.

No se utilizarán inicialmente:

- Microservicios.
- Backend FastAPI separado.
- GraphQL.
- Redux.
- Kubernetes.
- Elasticsearch.
- CMS externo.
- Aplicación móvil.
- Arquitectura multi-tenant.
- Monorepo con múltiples aplicaciones.

---

## 12.3 Decisión arquitectónica

La primera versión será una única aplicación full-stack.

Capas:

```text
web pública
planificador
admin / mini CRM
catálogo
presupuestos
pedidos
ecommerce futuro
```

Todo vivirá en un único repositorio, con dominios internos claramente separados.

RapidOffice no será la base monolítica de producción. Se reutilizarán componentes y conceptos concretos tras auditoría.

---

## 12.4 Estructura propuesta

```text
src/
├── app/
│   ├── (public)/
│   ├── (planner)/
│   ├── (admin)/
│   ├── (commerce)/
│   ├── api/
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── public/
│   ├── planner/
│   ├── admin/
│   ├── commerce/
│   ├── editor/
│   └── ui/
├── features/
│   ├── auth/
│   ├── leads/
│   ├── customers/
│   ├── projects/
│   ├── quotes/
│   ├── orders/
│   ├── catalog/
│   ├── files/
│   ├── tasks/
│   └── audit/
├── server/
│   ├── db/
│   ├── auth/
│   ├── services/
│   ├── repositories/
│   ├── permissions/
│   ├── validation/
│   ├── email/
│   ├── storage/
│   └── observability/
├── lib/
├── styles/
├── types/
└── tests/
```

Reglas:

- La lógica de negocio no vivirá dentro de componentes.
- Los componentes no accederán directamente a la base de datos.
- Las funciones sensibles serán `server-only`.
- Las validaciones se compartirán.
- Cada dominio tendrá responsabilidades claras.

---

## 12.5 Server Components y Client Components

### Server Components por defecto

Para:

- Páginas públicas.
- Categorías.
- Productos.
- Proyectos publicados.
- Artículos.
- Vistas de detalle.
- Dashboard no interactivo.

### Client Components solo cuando sean necesarios

Para:

- Planificador multistep.
- Filtros.
- Kanban.
- Editor 2D.
- Carrito.
- Subida de archivos.
- Formularios complejos.
- Animaciones.

No se marcarán páginas enteras como `use client` por comodidad.

---

## 12.6 Base de datos

Motor:

> PostgreSQL administrado mediante Neon.

ORM:

> Drizzle ORM.

Reglas:

- Toda modificación tendrá migración.
- No usar sincronización directa de esquema en producción.
- Revisar migraciones antes de aplicarlas.
- Separar datos reales y seeds.
- No compartir base entre staging y producción.
- Usar UUID internos.
- Usar referencias humanas para leads, proyectos, presupuestos y pedidos.

Ejemplos:

```text
LEAD-2026-000123
PROY-2026-000045
PRES-2026-000072
PED-2026-000031
```

---

## 12.7 Entornos

### Desarrollo

- Base independiente.
- Datos ficticios.
- Correos seguros.
- Sin pagos reales.

### Staging

- Base independiente.
- Protegido.
- No indexable.
- Pruebas del cliente.
- Pagos sandbox cuando existan.

### Producción

- Base exclusiva.
- Datos reales.
- Acceso restringido.
- Backups verificados.

Dominios previstos:

```text
planificaciondeoficinas.com
staging.planificaciondeoficinas.com
```

---

## 12.8 Autenticación y autorización

Herramienta:

> Better Auth con PostgreSQL y Drizzle.

Modelo inicial:

- Acceso privado por invitación.
- Sin registro público para `/admin`.
- Email y contraseña.
- Recuperación segura.
- Sesiones revocables.
- Cookies seguras.
- Roles.

Roles iniciales:

- Admin.
- Comercial.
- Catálogo.
- Operaciones.
- Dirección.
- Lectura.

Reglas:

- La autorización se comprueba en servidor.
- Ocultar botones no equivale a seguridad.
- Cada mutación valida permisos.
- Costes y márgenes tendrán permisos específicos.
- No se guardarán tokens de sesión en `localStorage`.

---

## 12.9 Acceso a datos

Flujo recomendado:

```text
UI
→ acción o route handler
→ servicio de dominio
→ repositorio
→ base de datos
```

Los servicios:

- Validan reglas.
- Comprueban permisos.
- Ejecutan transacciones.
- Registran auditoría.
- Devuelven únicamente datos necesarios.

No se crearán capas ceremoniales sin utilidad.

---

## 12.10 Validación y formularios

Zod validará:

- Formularios.
- Acciones.
- Route Handlers.
- Variables de entorno.
- Importaciones.
- Webhooks.
- Datos externos.

React Hook Form se utilizará únicamente en formularios complejos:

- Planificador.
- Producto con variantes.
- Presupuesto.
- Checkout.
- Importación.

La validación del cliente mejora la experiencia, pero el servidor es la autoridad.

---

## 12.11 Dinero, impuestos y documentos históricos

Reglas:

- Importes en céntimos enteros.
- Moneda inicial EUR.
- No usar `float`.
- Totales calculados en servidor.
- Impuestos explícitos.
- Instantáneas en presupuestos y pedidos.
- Los documentos históricos no cambian al actualizar el catálogo.

Ejemplo:

```text
unit_price_cents
quantity
discount_cents
tax_rate_basis_points
line_total_cents
```

---

## 12.12 Fechas

- Guardar timestamps en UTC.
- Mostrar en `Europe/Madrid`.
- Diferenciar fecha de negocio y fecha-hora.
- Registrar creación, actualización y actor cuando proceda.

---

## 12.13 Archivos

Los archivos se almacenarán fuera de PostgreSQL.

Abstracción:

```text
FileStorage
├── upload()
├── getPrivateUrl()
├── delete()
└── getMetadata()
```

Reglas:

- Privados por defecto.
- MIME validado.
- Tamaño limitado.
- Nombre interno aleatorio.
- Metadatos en PostgreSQL.
- Descarga autorizada.
- Eliminación controlada.

Formatos iniciales:

- PDF.
- JPG.
- JPEG.
- PNG.
- WEBP.

Los formatos CAD se evaluarán después.

---

## 12.14 Correo transaccional

Proveedor inicial:

> Resend.

Casos:

- Confirmación del planificador.
- Notificación interna.
- Invitación.
- Recuperación.
- Presupuesto.
- Pedido.
- Incidencia.

Reglas:

- Plantillas versionadas.
- Dominio verificado.
- Registrar resultado.
- No perder una solicitud si falla el email.
- Reintento manual o tarea registrada en el MVP.

---

## 12.15 Estado del cliente

No se instalará Redux.

Estrategia:

- Server Components para datos.
- Estado local para interacción.
- `useReducer` para el planificador.
- URL para filtros.
- Persistencia local para progreso.
- Zustand solo si el editor 2D lo justifica.

---

## 12.16 Contenido

No se utilizará CMS externo inicialmente.

En código:

- Home.
- Soluciones.
- Páginas corporativas.
- Páginas legales revisadas.

En PostgreSQL y `/admin`:

- Productos.
- Marcas.
- Proyectos.
- Artículos.
- Preguntas frecuentes.

No se desarrollará un editor visual complejo en el MVP.

---

## 12.17 Búsqueda

MVP:

- PostgreSQL.
- Búsqueda textual.
- Filtros.
- Índices adecuados.

No usar Algolia o Elasticsearch hasta que exista una necesidad real.

---

## 12.18 Seguridad

Requisitos:

- HTTPS.
- Cookies seguras.
- Headers de seguridad.
- Content Security Policy.
- Validación de servidor.
- Rate limiting donde corresponda.
- Secretos solo en servidor.
- Variables de entorno validadas.
- Webhooks firmados.
- Acceso mínimo a base de datos.
- Auditoría.
- Backups.

Formularios públicos:

- Honeypot.
- Idempotencia.
- Límites de tamaño.
- Control de frecuencia.
- Captcha adaptativo solo si aparece abuso.

---

## 12.19 Observabilidad y errores

MVP:

- Logs estructurados.
- Identificador de solicitud.
- Identificador de error.
- Registro de operaciones sensibles.
- Páginas de error.
- Estados vacíos.
- Reintentos.

No registrar:

- Contraseñas.
- Tokens.
- Documentos.
- Contenido sensible.
- Datos fiscales completos.

No usar `alert()` como manejo principal de errores.

---

## 12.20 Pruebas

### Unitarias

Vitest:

- Scoring.
- Totales.
- Permisos.
- Referencias.
- Validaciones.
- Estados.

### Componentes

- Formularios.
- Errores.
- Accesibilidad básica.
- Resúmenes.

### End-to-end

Playwright:

- Completar planificador.
- Crear lead.
- Login.
- Cambiar estado.
- Crear proyecto.
- Crear presupuesto.
- Flujo de producto.
- Checkout cuando exista.

Cada pull request ejecutará:

- Instalación limpia.
- Lint.
- Typecheck.
- Pruebas.
- Build.

---

## 12.21 Despliegue

Propuesta inicial:

- Vercel para aplicación.
- Neon para PostgreSQL.
- Almacenamiento privado de objetos.
- Resend para correo.
- GitHub Actions y previews para validación.

La elección final del proveedor de archivos se podrá cambiar gracias a la abstracción definida.

---

## 12.22 Estrategia Git

Ramas:

```text
main
staging
feature/*
fix/*
```

Flujo:

1. Rama corta.
2. Tarea concreta.
3. Pruebas.
4. Pull request.
5. Preview.
6. Staging.
7. Validación.
8. Main.

No trabajar directamente sobre producción salvo emergencia.

---

## 12.23 Backups y migraciones

Antes de producción:

- Confirmar backups.
- Confirmar retención.
- Probar restauración.
- Documentar responsable.
- Mantener exportación lógica.

Migraciones:

1. Crear.
2. Revisar SQL.
3. Probar en desarrollo.
4. Probar en staging.
5. Backup.
6. Aplicar.
7. Verificar.

Los cambios destructivos se harán en varias fases.

---

## 12.24 Decisiones cerradas

- Monolito modular.
- Una aplicación Next.js.
- TypeScript estricto.
- PostgreSQL y Drizzle.
- Better Auth.
- Tailwind.
- Zod.
- React Hook Form solo cuando sea necesario.
- Server Components por defecto.
- Vercel y Neon como propuesta inicial.
- Archivos privados abstraídos.
- Resend.
- Vitest y Playwright.
- Sin FastAPI separado en el MVP.
- Sin microservicios.
- Sin GraphQL.
- Sin Redux.
- Sin CMS externo.
- Sin multi-tenant.
- Sin checkout durante el primer MVP comercial.
- Dinero en céntimos.
- Fechas UTC y presentación Europe/Madrid.
- Entornos separados.

---

## 12.25 Información pendiente

- Cuenta de Vercel.
- Cuenta de Neon.
- Región.
- Cuenta de Resend.
- Proveedor de archivos.
- Dominio y acceso DNS.
- Emails remitentes.
- Usuarios iniciales.
- Roles.
- Política de backups.
- Presupuesto mensual.
- Cuenta de Analytics.
- Search Console.
- Responsable técnico.
- Requisitos internos de seguridad.




# 13. Contenidos y SEO

## 13.1 Objetivo

Convertir la experiencia real de Ofiponiente, su catálogo, sus proyectos y sus servicios en contenido capaz de atraer tráfico cualificado y generar oportunidades comerciales.

El SEO se integrará desde el principio en:

- Arquitectura.
- URLs.
- Contenido.
- Productos.
- Proyectos.
- Migración.
- Rendimiento.
- Analítica.
- Conversión.

No se planteará como una producción masiva de artículos ni como una capa añadida al final.

---

## 13.2 Principio editorial

Priorizar:

1. Experiencia directa.
2. Información verificable.
3. Fotografías propias.
4. Proyectos reales.
5. Explicaciones claras.
6. Datos técnicos útiles.
7. Respuesta a dudas comerciales.
8. Próximo paso visible.

Regla:

> Es mejor publicar diez páginas excelentes y revisadas que cien textos genéricos generados para rellenar Google.

La IA podrá ayudar a estructurar y redactar borradores, pero no podrá inventar:

- Proyectos.
- Cifras.
- Resultados.
- Opiniones.
- Stock.
- Plazos.
- Especificaciones.
- Experiencia profesional.

---

## 13.3 Objetivos SEO

### Captar proyectos completos

Búsquedas relacionadas con:

- Amueblar oficina.
- Renovar oficina.
- Equipamiento integral.
- Proyecto de mobiliario.
- Traslado.
- Distribución.
- Presupuesto.

Destino:

- Página de solución.
- Proyecto real.
- Planificador.

### Captar demanda por solución

- Puestos de trabajo.
- Despachos.
- Salas de reunión.
- Recepciones.
- Formación.
- Archivo.
- Mamparas.
- Acústica.

### Captar demanda de producto

- Sillas.
- Mesas.
- Armarios.
- Cajoneras.
- Cabinas.
- Mamparas.
- Accesorios.

### Captar demanda local

Solo en zonas donde Ofiponiente preste servicio real.

### Construir autoridad

Mediante:

- Casos reales.
- Guías.
- Comparativas honestas.
- Preguntas frecuentes.
- Información técnica.
- Experiencia de instalación.

---

## 13.4 Clústeres principales

### Proyecto completo

```text
/soluciones/oficinas-completas
```

Contenidos relacionados:

- Cómo planificar.
- Qué información se necesita.
- Fases.
- Presupuesto.
- Plazos.
- Errores.
- Casos.

### Puestos y ergonomía

```text
/soluciones/puestos-de-trabajo
```

### Salas de reunión

```text
/soluciones/salas-de-reunion
```

### Recepciones

```text
/soluciones/recepciones
```

### Mamparas y acústica

```text
/soluciones/mamparas-y-divisiones
/soluciones/acustica
```

### Formación y colectividades

```text
/soluciones/formacion-y-colectividades
```

### Producto

```text
/mobiliario/[categoria]
/mobiliario/[categoria]/[producto]
```

---

## 13.5 Migración desde ofiponiente.es

Proceso obligatorio:

### Inventario

Extraer:

- URLs.
- Títulos.
- Descripciones.
- Encabezados.
- Contenido.
- Imágenes.
- PDFs.
- Enlaces.
- Estado.
- Canonical.
- Tráfico.
- Enlaces externos.
- Fecha.

### Clasificación

Cada URL se marcará como:

- Mantener.
- Reescribir.
- Fusionar.
- Redirigir.
- Eliminar.
- Mantener temporalmente.
- Revisar.

### Mapa de migración

```text
old_url
new_url
action
redirect_type
content_status
priority
notes
```

### Redirecciones

- Permanentes.
- Directas.
- Sin cadenas.
- Hacia el equivalente relevante.
- Nunca todas a la home.

### Seguimiento

- 404.
- Cobertura.
- Canonical.
- Tráfico.
- Conversiones.
- Enlaces antiguos.
- Search Console.

No se tocarán los DNS del correo por cambiar la web.

---

## 13.6 Páginas prioritarias

Para lanzamiento:

```text
/
/planifica-tu-oficina
/soluciones/oficinas-completas
/soluciones/puestos-de-trabajo
/soluciones/despachos
/soluciones/salas-de-reunion
/soluciones/recepciones
/soluciones/formacion-y-colectividades
/soluciones/archivo-y-almacenamiento
/soluciones/mamparas-y-divisiones
/soluciones/acustica
/proyectos
/ofiponiente
/contacto
```

No publicar:

- Categorías vacías.
- Marcas sin contenido.
- Proyectos ficticios.
- Páginas “próximamente” indexables.
- Productos sin información suficiente.

---

## 13.7 Plantillas de contenido

### Página de solución

Debe incluir:

1. Problema.
2. Tipos de cliente.
3. Necesidades.
4. Proceso.
5. Decisiones.
6. Productos.
7. Servicios.
8. Proyecto relacionado.
9. Preguntas.
10. CTA.

### Categoría

- Introducción útil.
- Subcategorías.
- Productos.
- Filtros.
- Criterios de elección.
- Aplicaciones.
- Preguntas.
- CTA.

### Producto

- Nombre.
- Marca.
- Descripción original.
- Beneficios.
- Uso.
- Medidas.
- Materiales.
- Variantes.
- Disponibilidad.
- Precio o consulta.
- Transporte.
- Montaje.
- Garantía.
- Documentos.
- Compatibilidades.

### Proyecto realizado

- Problema.
- Espacio.
- Restricciones.
- Decisiones.
- Productos.
- Servicios.
- Resultado.
- Fotografías.
- Testimonio cuando exista.
- CTA.

---

## 13.8 Proyectos como activo central

Cada proyecto debe explicar:

- Qué problema existía.
- Para cuántas personas.
- Qué decisiones se tomaron.
- Qué se instaló.
- Qué servicios se prestaron.
- Cuál fue el resultado.

Cuando el cliente no permita identificarse:

- Usar sector.
- Zona amplia.
- Datos no identificativos.
- Fotografías autorizadas.

No publicar información confidencial.

---

## 13.9 Contenido editorial inicial

Categorías:

- Planificación.
- Ergonomía.
- Espacios.
- Compra.
- Proceso.
- Casos.

Ideas prioritarias:

1. Cómo planificar una oficina nueva.
2. Qué datos hacen falta para presupuestar.
3. Cuánto espacio necesita un puesto.
4. Cómo elegir una silla profesional.
5. Cómo distribuir una oficina pequeña.
6. Errores al comprar mobiliario.
7. Cómo renovar sin detener la actividad.
8. Cómo equipar una sala de reuniones.
9. Tipos de mamparas.
10. Cómo reducir ruido.
11. Nuevo, outlet o reacondicionado.
12. Qué incluye un proyecto integral.
13. Cómo preparar un traslado.
14. Cómo prever crecimiento.
15. Caso real explicado.

Cada contenido tendrá:

- Objetivo.
- Usuario.
- Intención.
- Experiencia propia.
- Estructura.
- CTA.
- Responsable de revisión.

---

## 13.10 SEO local

Solo crear páginas locales cuando exista:

- Cobertura real.
- Proyectos.
- Equipo que se desplaza.
- Demanda.
- Contenido específico.
- Servicio verificable.

No crear cientos de páginas cambiando únicamente el nombre de la ciudad.

Google Business Profile deberá mantener:

- Nombre real.
- Categoría.
- Dirección.
- Área de servicio.
- Teléfono.
- Horario.
- Web.
- Fotografías.
- Servicios.
- Reseñas auténticas.

---

## 13.11 SEO técnico

Cada página indexable tendrá:

- Propósito definido.
- Título único.
- H1 único.
- Descripción útil.
- URL estable.
- Canonical.
- Encabezados jerárquicos.
- Imágenes optimizadas.
- Texto alternativo.
- Enlaces internos.
- Breadcrumbs.
- CTA.

Datos estructurados cuando correspondan:

- Organization.
- LocalBusiness.
- BreadcrumbList.
- Product.
- Offer.
- Article.
- WebSite.
- VideoObject.

Los datos estructurados deben coincidir con la información visible.

---

## 13.12 Indexación

### Indexables

- Páginas completas.
- Soluciones.
- Categorías.
- Productos válidos.
- Proyectos.
- Artículos.
- Marcas trabajadas.

### No indexables

- Admin.
- Login.
- Pasos internos del planificador.
- Resúmenes personales.
- Carrito.
- Checkout.
- Cuenta.
- Búsqueda.
- Filtros.
- Preview.
- Staging.
- Archivos privados.
- Confirmaciones.

Los filtros no generarán indexación infinita.

---

## 13.13 Productos agotados y descatalogados

### Agotado temporal

- Mantener URL.
- Mostrar estado.
- Mostrar alternativas.
- Permitir consulta.

### Descatalogado con sustituto

- Mantener información o redirigir al sustituto relevante.

### Sin valor

- 404 o 410.
- Retirar del sitemap.
- Retirar enlaces.

Decidir según tráfico, enlaces y utilidad.

---

## 13.14 Rendimiento

La web pública no cargará:

- CRM.
- Editor Konva.
- Librerías administrativas.
- Código de checkout innecesario.

Prioridades:

- LCP.
- INP.
- CLS.
- Imágenes.
- JavaScript.
- Fuentes.
- Animaciones.
- Terceros.

La estética no justifica una web lenta.

---

## 13.15 Medición

Conectar:

```text
consulta
→ página
→ lead
→ presupuesto
→ venta
→ margen
```

KPI principales:

- Leads orgánicos.
- Leads cualificados.
- Presupuestos.
- Ventas.
- Valor de pipeline.
- Páginas que convierten.
- Visibilidad local.

No medir éxito únicamente por visitas.

---

## 13.16 Primeros 90 días

### Mes 1

- Migración.
- Páginas comerciales.
- Soluciones.
- Proyectos.
- SEO técnico.
- Google Business Profile.

### Mes 2

- Categorías.
- Productos prioritarios.
- Guías de intención alta.
- Enlazado.
- Reseñas.
- Conversión.

### Mes 3

- Nuevos casos.
- Preguntas reales.
- Páginas locales justificadas.
- Mejoras desde Search Console.
- Merchant Center solo si ecommerce está listo.

---

## 13.17 Lo que no se hará

- Contenido masivo sin revisión.
- Páginas locales clonadas.
- Copiar fabricantes sin aportar valor.
- Reseñas falsas.
- Categorías vacías.
- Filtros infinitos.
- Redirigir todo a la home.
- Comprar paquetes de enlaces.
- Mantener dos webs completas compitiendo.
- Prometer posiciones.

---

## 13.18 Decisiones cerradas

- El SEO se centrará en proyectos, soluciones, productos y demanda local real.
- `ofiponiente.es` se auditará URL por URL.
- Se creará un mapa de redirecciones antes de migrar.
- Los proyectos reales serán el principal activo editorial.
- Las páginas locales solo existirán para zonas atendidas.
- No se publicará contenido masivo generado por IA.
- Los filtros no se indexarán por defecto.
- Merchant Center dependerá de ecommerce fiable.
- Se medirá hasta venta y margen.
- No se mantendrán dos sitios completos compitiendo.

---

## 13.19 Información pendiente

- Search Console.
- Analytics.
- Google Business Profile.
- Sitemap antiguo.
- Estadísticas.
- URLs importantes.
- Proyectos.
- Fotografías.
- Testimonios.
- Zonas.
- Servicios.
- Categorías.
- Productos.
- Fabricantes.
- Preguntas frecuentes.
- Diferenciadores.
- Permisos de publicación.
- Acceso al dominio antiguo.



# 14. Redes sociales y publicidad

## 14.1 Objetivo

Conectar contenido y campañas con el proceso comercial real:

```text
contenido o anuncio
→ landing adecuada
→ planificador o producto
→ CRM
→ seguimiento
→ presupuesto
→ venta
```

La estrategia no se basará en publicar por publicar.

Cada pieza debe ayudar a:

- Entender.
- Confiar.
- Comparar.
- Actuar.

---

## 14.2 Canales prioritarios

### Instagram

- Proyectos.
- Antes y después.
- Montajes.
- Reels.
- Carruseles.
- Historias.
- Producto con contexto.

### Facebook

- Alcance local.
- Proyectos.
- Outlet.
- Campañas Meta.
- Remarketing.
- Audiencia empresarial adulta.

### LinkedIn

- Posicionamiento B2B.
- Gerencia.
- Compras.
- RR. HH.
- Arquitectos.
- Interioristas.
- Casos y decisiones empresariales.

### Google Ads

Canal principal para demanda activa.

### Meta Ads

Canal para:

- Descubrimiento.
- Transformación.
- Proyectos.
- Retargeting.
- Outlet.

### LinkedIn Ads

Canal posterior y opcional por su coste.

### YouTube, TikTok y Pinterest

Canales secundarios, condicionados por capacidad real para crear contenido visual.

---

## 14.3 Audiencias

- Empresas que abren oficina.
- Empresas que renuevan.
- Empresas que amplían puestos.
- Gerencia.
- Administración y compras.
- RR. HH.
- Responsables de oficina.
- Arquitectos.
- Interioristas.
- Reformistas.
- Compradores de producto.
- Interesados en outlet.

---

## 14.4 Pilares de contenido

### Proyectos reales

- Problema.
- Restricción.
- Decisión.
- Montaje.
- Resultado.
- Testimonio.

### Educación práctica

- Medidas.
- Distribución.
- Ergonomía.
- Acústica.
- Presupuesto.
- Plazos.
- Errores.

### Producto con contexto

No publicar únicamente nombre y fotografía.

Explicar:

- Uso.
- Beneficio.
- Horas de uso.
- Espacio.
- Compatibilidad.
- Alternativas.
- Disponibilidad.

### Proceso y equipo

- Medición.
- Diseño.
- Preparación.
- Transporte.
- Montaje.
- Postventa.

### Errores y objeciones

- Comprar solo por precio.
- No medir.
- No prever crecimiento.
- Olvidar electrificación.
- Elegir silla por estética.
- No calcular montaje.

### Outlet

- Producto real.
- Estado.
- Unidades.
- Precio.
- Transporte.
- Fotografías reales.

### Marcas y materiales

- Fabricante.
- Aplicación.
- Garantía.
- Material.
- Diferencia.

### Empresa local

- Proyectos cercanos.
- Equipo.
- Colaboraciones.
- Historia.
- Comunidad empresarial.

---

## 14.5 Modelo narrativo

```text
problema
→ revisión
→ decisión
→ ejecución
→ resultado
→ CTA
```

Los beneficios irán antes que las características.

Ejemplo:

- Característica: mecanismo sincronizado.
- Beneficio: permite cambiar de postura durante la jornada sin reajustes constantes.

---

## 14.6 Producción y reutilización

Cada pieza debe partir de una fuente real:

- Proyecto.
- Pregunta.
- Objeción.
- Producto.
- Proceso.
- Incidencia resuelta.
- Guía.

Un proyecto puede generar:

- Caso web.
- Reel.
- Carrusel.
- Historias.
- Publicación de LinkedIn.
- Vídeo.
- Email.

No producir contenido aislado para cada canal cuando pueda reutilizarse.

---

## 14.7 Cadencia sostenible

### Instagram y Facebook

- 2 o 3 publicaciones semanales.
- Historias cuando haya material.
- 1 o 2 reels si la capacidad lo permite.

### LinkedIn

- 1 o 2 publicaciones semanales.

### YouTube

- 1 o 2 vídeos mensuales si existe capacidad.

### Blog

- 2 contenidos útiles al mes.
- Priorizar casos y actualizaciones.

No comprometer una frecuencia imposible de mantener.

---

## 14.8 Distribución editorial orientativa

- 30 % proyectos reales.
- 25 % educación.
- 15 % producto.
- 10 % proceso y equipo.
- 10 % errores y objeciones.
- 10 % outlet, marca o actualidad.

Se ajustará según resultados.

---

## 14.9 CTA por intención

### Temprana

- Guardar.
- Ver guía.
- Ver proyecto.
- Descubrir opciones.

### Comercial

- Iniciar planificador.
- Solicitar propuesta.
- Consultar producto.
- Pedir precio por volumen.

### Outlet

- Consultar disponibilidad.
- Reservar.
- Ver ficha.

### Retargeting

- Continuar proyecto.
- Ver caso similar.
- Solicitar contacto.

---

## 14.10 Landing pages de campaña

Ejemplos:

```text
/campanas/ampliar-oficina
/campanas/oficina-nueva
/campanas/renovar-puestos
/campanas/mamparas-oficina
/campanas/sillas-empresa
```

Reglas:

- Mensaje alineado con el anuncio.
- Una acción principal.
- Prueba real.
- UTM.
- Analítica.
- Formulario o planificador adaptado.
- No indexable cuando sea temporal y duplicada.

No enviar todas las campañas a la home.

---

## 14.11 Google Ads

### Campaña de proyecto

- Amueblar oficina.
- Equipamiento integral.
- Renovar.
- Montar.
- Presupuesto.

Destino:

- Planificador.

### Campañas de solución

- Puestos.
- Reuniones.
- Recepción.
- Mamparas.
- Acústica.
- Formación.

### Campañas de producto

Solo con catálogo fiable.

### Campaña de marca

- Ofiponiente.
- Planificación de Oficinas.

### Campaña local

Solo en zonas reales de servicio.

Se crearán negativas con datos reales de consultas.

---

## 14.12 Meta Ads

### Captación de proyectos

- Antes y después.
- Caso.
- Proceso.
- Problema reconocible.

### Solución concreta

- Ampliación.
- Ergonomía.
- Ruido.
- Recepción.
- Mamparas.

### Retargeting

- Visitantes.
- Inicio de planificador.
- Vista de proyecto.
- Consulta de producto.
- Interacción con redes.

### Outlet

Solo con inventario real.

---

## 14.13 Formularios instantáneos

El planificador web será la vía principal.

Los formularios instantáneos de Meta o LinkedIn podrán probarse para campañas específicas, pero deberán incluir preguntas de cualificación.

Ventaja:

- Menos fricción.

Riesgo:

- Menor intención.
- Peor calidad.
- Menos contexto.

No optimizar campañas únicamente por volumen de formularios.

---

## 14.14 Geografía

La publicidad se limitará a:

- Zona primaria.
- Zona secundaria validada.
- Zonas nacionales solo para productos enviables.

No anunciar servicio integral donde Ofiponiente no pueda instalar o atender.

---

## 14.15 Presupuesto y escalado

No fijar inversión definitiva sin conocer:

- Margen.
- Ticket.
- Conversión.
- Capacidad.
- Oferta.
- Zona.
- Seguimiento.

Fases:

1. Prueba.
2. Optimización.
3. Escalado.

Solo escalar cuando:

- Los leads sean viables.
- El equipo responda.
- Exista ratio de presupuestos.
- La rentabilidad encaje.
- La capacidad operativa aguante.

---

## 14.16 Métricas publicitarias

Medir:

```text
coste por clic
coste por inicio
coste por lead
coste por lead cualificado
coste por presupuesto
coste por cliente
ingreso
margen
retorno
```

Métrica principal:

> Coste por oportunidad rentable.

---

## 14.17 Atribución

Guardar:

- Fuente.
- Medio.
- Campaña.
- Anuncio.
- Creatividad.
- Palabra.
- Landing.
- Conversión.
- Lead.
- Presupuesto.
- Venta.

UTM:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

El CRM conservará estos datos.

---

## 14.18 Medición y privacidad

Implementar con consentimiento:

- Google Analytics.
- Google Ads.
- Meta Pixel.
- LinkedIn Insight Tag cuando se utilice.

Eventos:

```text
view_landing
click_planner
planner_start
planner_complete
contact_submit
view_product
request_quote
add_to_cart
purchase
```

No enviar:

- Nombre.
- Email.
- Teléfono.
- Texto libre.
- Datos sensibles.

Las conversiones offline podrán añadirse después para optimizar por leads cualificados y ventas.

---

## 14.19 Creatividades

Probar de manera ordenada:

- Mensaje.
- Formato.
- Visual.
- CTA.
- Caso.
- Beneficio.

Formatos:

- Vídeo.
- Imagen.
- Carrusel.
- Antes y después.
- Testimonio.
- Producto.
- Infografía.

Reglas:

- Fotografías reales.
- Producto fiel.
- Texto legible.
- Subtítulos.
- Marca visible.
- No usar renders como si fueran instalaciones reales.
- No cambiar muchas variables a la vez.

---

## 14.20 Gestión de mensajes

Proceso:

1. Recibir.
2. Detectar intención.
3. Responder.
4. Pedir datos mínimos.
5. Enviar al planificador o producto.
6. Crear lead.
7. Registrar seguimiento.

Los leads no deben quedarse aislados en Instagram, Facebook o WhatsApp.

---

## 14.21 Reputación y colaboraciones

Responder profesionalmente:

- Preguntas.
- Dudas.
- Críticas razonables.
- Reseñas.
- Incidencias por canal privado.

Posibles aliados:

- Arquitectos.
- Interioristas.
- Reformistas.
- Constructoras.
- Inmobiliarias.
- Coworkings.
- Asociaciones.
- Fabricantes.
- Empresas locales.

No colaborar únicamente por seguidores.

---

## 14.22 Email marketing

Apoyará:

- Nutrición.
- Casos.
- Guías.
- Novedades.
- Outlet.
- Seguimiento.

Segmentos:

- Leads.
- Clientes.
- Profesionales.
- Compradores.
- Interesados en outlet.

Separar comunicaciones transaccionales y comerciales.

---

## 14.23 Flujo operativo de campaña

```text
idea
→ oferta
→ landing
→ tracking
→ creatividad
→ campaña
→ lead
→ CRM
→ seguimiento
→ presupuesto
→ resultado
→ aprendizaje
```

No lanzar sin:

- Landing probada.
- Formulario probado.
- Notificación.
- Responsable.
- Analítica.
- Consentimiento.
- Capacidad.

---

## 14.24 Criterios de pausa

Pausar o revisar cuando:

- Llegan leads fuera de zona.
- Los datos son falsos.
- La landing falla.
- El equipo no responde.
- El coste sube sin calidad.
- Hay clics sin acción.
- El mensaje confunde.
- No existe stock.
- Se supera capacidad.
- La rentabilidad no encaja.

---

## 14.25 Uso de IA

La IA podrá:

- Adaptar un caso.
- Crear borradores.
- Proponer titulares.
- Resumir resultados.
- Preparar calendarios.
- Crear guiones.
- Subtitular.

No podrá:

- Inventar proyectos.
- Crear testimonios falsos.
- Modificar productos engañosamente.
- Publicar sin revisión.
- Responder incidencias delicadas sola.
- Crear campañas sin datos comerciales.

---

## 14.26 Recursos necesarios

Ofiponiente deberá aportar:

- Fotografías.
- Vídeos.
- Proyectos.
- Montajes.
- Preguntas.
- Productos.
- Stock.
- Casos.
- Testimonios.
- Autorizaciones.
- Responsable de revisión.

Sin material real, la estrategia perderá su principal ventaja.

---

## 14.27 Decisiones cerradas

- Instagram, Facebook y LinkedIn serán los canales orgánicos prioritarios.
- Google Ads captará demanda activa.
- Meta Ads servirá para descubrimiento y retargeting.
- LinkedIn Ads será opcional.
- Los proyectos reales serán la fuente creativa principal.
- El planificador será el destino principal de campañas de proyecto.
- Cada campaña tendrá landing alineada.
- Se medirán oportunidades, clientes y margen.
- El outlet solo se anunciará con stock real.
- Los mensajes se registrarán en el CRM.
- La IA no publicará sin revisión.
- Las campañas se limitarán a zonas atendidas.

---

## 14.28 Información pendiente

- Perfiles actuales.
- Accesos.
- Seguidores.
- Historial de campañas.
- Cuenta publicitaria.
- Píxeles.
- Analytics.
- Base de datos.
- Consentimientos.
- Presupuesto.
- Zonas.
- Productos.
- Outlet.
- Proyectos.
- Fotografías.
- Vídeos.
- Testimonios.
- Responsable.
- Capacidad.
- Ticket.
- Margen.
- Resultados anteriores.
- Google Business Profile.



# 15. Fases de desarrollo

## 15.1 Objetivo de esta sección

Ordenar el proyecto completo en entregas ejecutables, evitando:

- Intentar construir toda la plataforma de una vez.
- Desarrollar ecommerce sin operativa confirmada.
- Integrar el editor antes de estabilizar proyectos y catálogo.
- Publicar contenido sin estructura.
- Crear funciones internas que nadie utilizará.
- Bloquear el lanzamiento por tareas secundarias.
- Gastar tokens y tiempo en refactorizaciones prematuras.

La hoja de ruta debe permitir lanzar valor comercial cuanto antes y ampliar sobre una base estable.

---

## 15.2 Principio de ejecución

El proyecto se desarrollará siguiendo esta secuencia:

```text
validar negocio
→ preparar base técnica
→ lanzar captación
→ organizar operación comercial
→ estructurar catálogo
→ profesionalizar presupuestos
→ integrar editor
→ activar ecommerce
→ escalar marketing e integraciones
```

Regla principal:

> Ninguna fase posterior debe bloquear el valor principal de una fase anterior.

Ejemplos:

- La web y el planificador deben funcionar sin editor 2D.
- El CRM debe funcionar sin ecommerce.
- El catálogo debe permitir presupuesto sin carrito.
- El ecommerce no debe activarse sin logística confirmada.
- El editor debe trabajar sobre productos y proyectos ya normalizados.

---

## 15.3 Entregas principales

La evolución se agrupará en cuatro productos progresivos.

### Entrega A — MVP de captación

Incluye:

- Web pública.
- Planificador.
- Formularios.
- Leads.
- Notificaciones.
- CRM básico.
- Analítica.
- SEO técnico.
- Migración inicial.

Objetivo:

> Captar y gestionar proyectos reales.

### Entrega B — Plataforma comercial

Incluye:

- Catálogo inicial.
- Marcas.
- Productos.
- Solicitud por producto.
- Proyectos.
- Presupuestos.
- Versiones.
- PDFs.
- Seguimiento.

Objetivo:

> Convertir leads en propuestas comerciales organizadas.

### Entrega C — Herramienta operativa

Incluye:

- Editor 2D.
- Productos dentro del proyecto.
- Totales.
- Compartición.
- Pedidos básicos.
- Incidencias.
- Flujo interno ampliado.

Objetivo:

> Reducir trabajo manual y mejorar la preparación de proyectos.

### Entrega D — Ecommerce y crecimiento

Incluye:

- Carrito.
- Checkout.
- Pagos.
- Transporte.
- Montaje.
- Cuenta.
- Automatizaciones.
- Campañas avanzadas.
- Integraciones.

Objetivo:

> Vender productos compatibles y escalar canales rentables.

---

## 15.4 Fase 0 — Descubrimiento y auditoría

### Objetivo

Reunir información real antes de diseñar bases de datos, contenidos y procesos definitivos.

### Tareas

#### Negocio

- Reunión con Ofiponiente.
- Definir servicios.
- Definir zonas.
- Definir clientes.
- Definir prioridades.
- Definir productos.
- Definir equipo.
- Definir flujo comercial.
- Definir ecommerce.

#### Web antigua

- Auditar `ofiponiente.es`.
- Inventariar URLs.
- Inventariar contenido.
- Inventariar imágenes.
- Revisar SEO.
- Preparar mapa de migración.

#### RapidOffice

- Congelar estado.
- Etiquetar versión.
- Auditar componentes.
- Auditar backend.
- Clasificar reutilización.
- Documentar variables.

#### Datos

- Revisar clientes.
- Revisar productos.
- Revisar marcas.
- Revisar presupuestos.
- Revisar hojas de cálculo.
- Revisar ERP o software actual.

#### Infraestructura

- Dominio.
- DNS.
- Correo.
- Hosting.
- Analítica.
- Google Business Profile.
- Redes.
- Cuentas publicitarias.

### Entregables

- Documento de requisitos confirmado.
- Inventario de contenidos.
- Inventario de productos.
- Mapa de URLs.
- Mapa de procesos.
- Matriz de reutilización de RapidOffice.
- Lista de accesos.
- Lista de riesgos.
- Backlog inicial.

### Puerta de salida

No se pasa a implementación completa hasta conocer:

- Zona real.
- Responsable de leads.
- Flujo comercial.
- Contenido disponible.
- Productos iniciales.
- Accesos técnicos.
- Datos legales básicos.

---

## 15.5 Fase 1 — Base técnica

### Objetivo

Crear una base limpia y desplegable.

### Tareas

- Crear repositorio nuevo.
- Configurar Next.js.
- Configurar TypeScript estricto.
- Configurar Tailwind.
- Configurar lint.
- Configurar formato.
- Configurar pruebas.
- Configurar CI.
- Crear entornos.
- Configurar Neon.
- Configurar Drizzle.
- Crear migraciones.
- Configurar Better Auth.
- Crear usuarios y roles básicos.
- Configurar Vercel.
- Configurar staging.
- Configurar variables.
- Crear sistema de errores.
- Crear logs.
- Crear sistema visual base.

### Modelo inicial

Entidades mínimas:

- User.
- Role.
- Company.
- Contact.
- Lead.
- PlanningRequest.
- Task.
- Activity.
- File.
- AuditEvent.

### Entregables

- Aplicación desplegada.
- Login privado.
- Base de datos.
- Migraciones.
- Roles.
- Layout público.
- Layout de admin.
- Pipeline de integración.
- Seeds.
- Documentación de entorno.

### Puerta de salida

- Build correcto.
- Login correcto.
- Base separada por entorno.
- Pruebas mínimas.
- Staging protegido.
- Sin dependencias de RapidOffice.

---

## 15.6 Fase 2 — Web pública y migración inicial

### Objetivo

Publicar una presencia comercial clara y preparada para captar.

### Rutas iniciales

```text
/
/soluciones
/soluciones/oficinas-completas
/soluciones/puestos-de-trabajo
/soluciones/salas-de-reunion
/soluciones/recepciones
/soluciones/mamparas-y-divisiones
/soluciones/acustica
/proyectos
/ofiponiente
/contacto
/planifica-tu-oficina
```

### Tareas

- Portar dirección visual seleccionada.
- Crear navegación.
- Crear footer.
- Crear home.
- Crear soluciones prioritarias.
- Crear contacto.
- Crear página corporativa.
- Crear estructura de proyectos.
- Crear metadatos.
- Crear sitemap.
- Configurar robots.
- Configurar canonical.
- Configurar analítica.
- Configurar consentimiento.
- Preparar redirecciones.
- Optimizar rendimiento.
- Revisar accesibilidad.

### Contenido mínimo

- Propuesta de valor.
- Proceso.
- Servicios.
- Zona.
- Equipo o empresa.
- Prueba real.
- Proyectos iniciales.
- Contacto.
- CTA al planificador.

### Entregables

- Web pública completa.
- Diseño responsive.
- SEO técnico.
- Medición.
- Migración de contenido prioritario.
- Redirecciones preparadas.
- Staging validable.

### Puerta de salida

- Navegación completa.
- Formularios básicos funcionales.
- Rendimiento aceptable.
- Páginas revisadas.
- Sin textos provisionales visibles.
- Sin contenido ficticio.

---

## 15.7 Fase 3 — Planificador y CRM básico

### Objetivo

Lanzar el primer producto con valor comercial completo.

### Planificador

- Introducción.
- Flujo multistep.
- Condicionales.
- Progreso.
- Guardado local.
- Presupuesto por rango.
- Ubicación.
- Archivos.
- Resumen.
- Contacto.
- Consentimientos.
- Confirmación.

### CRM básico

- Leads.
- Empresas.
- Contactos.
- Tareas.
- Notas.
- Actividad.
- Archivos.
- Scoring.
- Estados.
- Responsable.
- Filtros.
- Búsqueda.
- Dashboard simple.

### Automatizaciones

- Confirmación al usuario.
- Notificación interna.
- Tarea para lead prioritario.
- Registro de origen.
- UTM.
- Alertas de tareas vencidas.

### Analítica

- Inicio.
- Paso.
- Abandono.
- Envío.
- Fuente.
- Lead.
- Prioridad.

### Entregables

- Planificador funcional.
- Lead automático.
- CRM operativo.
- Email.
- Archivos privados.
- Panel.
- Scoring.
- Métricas básicas.

### Puerta de salida

- Se completa desde móvil.
- Los datos llegan completos.
- El comercial puede gestionar el lead.
- El usuario recibe confirmación.
- El origen queda registrado.
- No se necesitan hojas de cálculo para gestionar el nuevo lead.

---

## 15.8 Hito de lanzamiento comercial

Al finalizar la Fase 3, la plataforma podrá publicarse aunque todavía no exista:

- Ecommerce.
- Catálogo completo.
- Editor.
- Presupuestos avanzados.
- Cuenta de cliente.
- Integraciones.

La primera versión comercial permitirá:

```text
descubrir
→ entender
→ planificar
→ enviar
→ gestionar
→ contactar
```

Este será el primer hito real de negocio.

---

## 15.9 Fase 4 — Catálogo inicial

### Objetivo

Añadir productos y marcas sin convertir todavía la plataforma en una tienda compleja.

### Tareas

- Auditar catálogo.
- Definir categorías.
- Definir subcategorías.
- Crear marcas.
- Crear productos.
- Crear variantes básicas.
- Crear estados.
- Crear disponibilidad.
- Crear imágenes.
- Crear documentos.
- Crear filtros.
- Crear búsqueda.
- Crear páginas.
- Crear solicitud por producto.
- Añadir producto a proyecto.
- Importación CSV o Excel.
- Administración de catálogo.

### Catálogo inicial

Objetivo:

- Entre 30 y 80 productos.
- Categorías representativas.
- Información completa.
- Productos de presupuesto.
- Productos híbridos.
- Productos comprables solo si se valida operativa.
- Outlet solo con stock.

### Entregables

- Categorías.
- Productos.
- Marcas.
- Fichas.
- Filtros.
- Solicitud.
- Panel.
- Importación.
- Enlazado SEO.

### Puerta de salida

- Cada producto tiene tipo comercial.
- Cada producto tiene CTA.
- Datos técnicos revisados.
- Precios y stock validados donde aparezcan.
- No existen fichas vacías.
- El comercial puede añadir producto a un proyecto.

---

## 15.10 Fase 5 — Proyectos y presupuestos

### Objetivo

Convertir el CRM básico en una plataforma comercial completa.

### Proyectos

- Crear desde lead.
- Cliente.
- Contactos.
- Estado.
- Responsable.
- Valor.
- Archivos.
- Productos.
- Servicios.
- Actividad.
- Tareas.

### Presupuestos

- Crear.
- Añadir líneas.
- Añadir servicios.
- Transporte.
- Montaje.
- Descuentos.
- Impuestos.
- Versiones.
- Validez.
- Condiciones.
- PDF.
- Email.
- Seguimiento.

### Pipeline

- Oportunidad.
- Cualificación.
- Medición.
- Propuesta.
- Negociación.
- Ganado.
- Perdido.

### Entregables

- Proyecto comercial.
- Presupuesto versionado.
- PDF.
- Historial.
- Pipeline.
- Métricas.

### Puerta de salida

- Un lead se convierte en proyecto.
- Un proyecto genera presupuesto.
- El presupuesto conserva versiones.
- Los totales se calculan en servidor.
- El PDF es utilizable comercialmente.
- El seguimiento queda registrado.

---

## 15.11 Segundo hito comercial

Al finalizar la Fase 5, la plataforma gestionará:

```text
captación
→ lead
→ cliente
→ proyecto
→ presupuesto
→ seguimiento
→ cierre
```

En este punto ya puede sustituir una parte importante del trabajo realizado con:

- Excel.
- PDFs manuales.
- Notas.
- Mensajes dispersos.
- Seguimientos de memoria.

---

## 15.12 Fase 6 — Integración del editor 2D

### Objetivo

Incorporar el valor visual de RapidOffice dentro del proyecto y presupuesto.

### Requisitos previos

- Producto estable.
- Variantes estables.
- Proyecto estable.
- Presupuesto estable.
- Autenticación segura.
- Archivos.
- Roles.
- Escala definida.

### Tareas

- Portar componentes Konva.
- Definir escala.
- Definir cuadrícula.
- Añadir zoom.
- Añadir desplazamiento.
- Añadir selección.
- Añadir rotación.
- Añadir duplicado.
- Añadir eliminación.
- Añadir deshacer y rehacer.
- Añadir catálogo.
- Añadir inspector.
- Añadir variantes.
- Guardado.
- Versionado.
- Totales.
- Exportación.
- Compartición segura.

### Evolución posterior del editor

- Paredes.
- Habitaciones.
- Puertas.
- Ventanas.
- Medidas.
- Restricciones.
- Capas.
- Plantillas.
- Símbolos.
- PDF.
- Imagen.
- Historial.

### Entregables

- Editor interno.
- Proyecto visual.
- Productos relacionados.
- Guardado.
- Exportación.
- Compartición limitada.
- Totales.

### Puerta de salida

- Escala correcta.
- Datos coherentes.
- Guardado fiable.
- No expone datos internos.
- Funciona sin romper el proyecto.
- El presupuesto puede incorporar sus productos.

---

## 15.13 Fase 7 — Pedidos y operación

### Objetivo

Gestionar la ejecución después de aceptar una propuesta.

### Tareas

- Convertir presupuesto en pedido.
- Crear estados.
- Registrar proveedor.
- Registrar fechas.
- Transporte.
- Montaje.
- Entrega.
- Archivos.
- Notas.
- Incidencias.
- Alertas.
- Exportación.
- Métricas.

### Entregables

- Pedidos.
- Estados.
- Flujo de entrega.
- Incidencias.
- Seguimiento.
- Vista de cliente.

### Puerta de salida

- Un presupuesto aceptado genera pedido.
- El pedido conserva instantánea.
- Operaciones puede actualizarlo.
- El comercial puede ver estado.
- Las incidencias quedan registradas.

---

## 15.14 Fase 8 — Ecommerce

### Objetivo

Activar venta directa solo para productos con operativa controlada.

### Requisitos previos

- Productos.
- Precios.
- IVA.
- Stock.
- Transporte.
- Montaje.
- Pagos.
- Políticas.
- Responsable.
- Incidencias.
- Emails.
- Pruebas.

### Tareas

- Carrito.
- Checkout.
- Compra invitado.
- Datos de empresa.
- Transporte.
- Montaje.
- Pago.
- Webhooks.
- Pedidos.
- Emails.
- Estados.
- Reembolsos.
- Analítica.
- Seguridad.

### Entregables

- Compra online.
- Pago.
- Pedido.
- Confirmación.
- Panel.
- Analítica.
- Políticas.

### Puerta de salida

- Pruebas de pago correctas.
- No hay sobreventa.
- Transporte calculado.
- Montaje claro.
- Pedidos sin duplicados.
- Incidencias operativas definidas.
- Condiciones legales revisadas.

---

## 15.15 Fase 9 — Crecimiento y automatización

### Objetivo

Escalar procesos que ya han demostrado valor.

### Posibles evoluciones

- Cuenta de cliente.
- Portal profesional.
- Tarifas B2B.
- Historial.
- Recompra.
- Aceptación online.
- Pago de señal.
- Automatizaciones.
- Conversiones offline.
- Integración ERP.
- Integración facturación.
- Google Calendar.
- Email avanzado.
- WhatsApp API.
- Importaciones automáticas.
- Recomendación asistida.
- Procesamiento de planos.
- Informes.
- Sentry.
- Colas.
- FastAPI especializado.

Cada evolución deberá justificar:

- Problema.
- Usuario.
- Frecuencia.
- Ahorro.
- Ingreso.
- Coste.
- Riesgo.

---

## 15.16 Priorización MoSCoW del MVP comercial

### Must have

- Home.
- Soluciones prioritarias.
- Contacto.
- Planificador.
- Lead.
- Scoring.
- CRM básico.
- Tareas.
- Notas.
- Archivos.
- Email.
- UTM.
- Analítica.
- SEO técnico.
- Seguridad.
- Staging.
- Migración prioritaria.

### Should have

- Proyectos iniciales.
- Dashboard.
- Búsqueda.
- Filtros.
- Plantillas.
- Importación básica.
- Páginas de marcas.
- Contenido inicial.
- Alertas.

### Could have

- Solicitud rápida avanzada.
- Calendario.
- Formularios de redes.
- Automatizaciones adicionales.
- Páginas locales.
- Comparadores.
- Descargas.

### Won't have initially

- Ecommerce.
- Editor.
- ERP.
- App móvil.
- Multi-tenant.
- IA.
- WhatsApp API.
- Automatizaciones complejas.
- Catálogo masivo.
- Área profesional.

---

## 15.17 Dependencias críticas

### El planificador depende de

- Modelo de lead.
- Archivos.
- Email.
- Consentimientos.
- CRM.
- Analítica.

### El catálogo depende de

- Categorías.
- Marcas.
- Producto.
- Imágenes.
- Datos reales.
- Proceso de actualización.

### El presupuesto depende de

- Proyecto.
- Producto.
- Variante.
- Servicios.
- Dinero.
- Impuestos.
- PDF.

### El editor depende de

- Proyecto.
- Catálogo.
- Dimensiones.
- Escala.
- Variante.
- Precio.

### El ecommerce depende de

- Producto.
- Precio.
- Stock.
- Transporte.
- Montaje.
- Pago.
- Pedido.
- Políticas.

No se deberá implementar una función ignorando sus dependencias.

---

## 15.18 Regla de puertas de validación

Una fase solo se considera terminada cuando:

- Sus criterios de aceptación se cumplen.
- El cliente puede probarla.
- Los errores críticos están resueltos.
- La documentación está actualizada.
- Las decisiones pendientes están registradas.
- No existen datos ficticios presentados como reales.
- Se ha probado en staging.
- El siguiente bloque dispone de sus dependencias.

“Funciona en local” no equivale a terminado.

---

## 15.19 Gestión del backlog

Cada tarea tendrá:

```text
id
fase
título
objetivo
contexto
archivos
dependencias
alcance
exclusiones
criterios de aceptación
pruebas
estado
```

Estados:

- Pendiente.
- Preparada.
- En desarrollo.
- En revisión.
- Bloqueada.
- Aceptada.
- Descartada.

No se iniciarán tareas:

- Sin objetivo.
- Sin contexto.
- Sin aceptación.
- Con dependencias bloqueadas.
- Que mezclen varios dominios sin necesidad.

---

## 15.20 Tamaño de las tareas para Claude

Claude trabajará mejor con tareas pequeñas y cerradas.

Ejemplo correcto:

> Crear el esquema y CRUD básico de leads según las secciones 6, 10 y 12, sin implementar todavía proyectos ni presupuestos.

Ejemplo incorrecto:

> Construye el CRM completo.

Cada tarea debe:

- Referenciar secciones.
- Indicar archivos permitidos.
- Indicar archivos que no debe tocar.
- Indicar resultado.
- Indicar pruebas.
- Pedir resumen final.
- Evitar refactorizaciones no solicitadas.

---

## 15.21 Secuencia de prompts técnicos

Orden recomendado:

1. Auditoría del repositorio.
2. Inicialización del proyecto.
3. Calidad y entornos.
4. Base de datos.
5. Autenticación.
6. Roles.
7. Sistema visual.
8. Layout público.
9. Páginas.
10. Planificador.
11. Leads.
12. CRM.
13. Archivos.
14. Email.
15. Analítica.
16. Migración.
17. Catálogo.
18. Proyectos.
19. Presupuestos.
20. Editor.
21. Pedidos.
22. Ecommerce.

Cada prompt deberá partir del estado real del repositorio.

---

## 15.22 Control de cambios

Cuando aparezca una nueva idea:

1. Registrar.
2. Clasificar.
3. Identificar fase.
4. Identificar dependencia.
5. Evaluar impacto.
6. Decidir.
7. Añadir al backlog.

No se interrumpirá una fase por cada idea nueva.

Excepciones:

- Error crítico.
- Riesgo legal.
- Pérdida de datos.
- Vulnerabilidad.
- Bloqueo comercial.

---

## 15.23 Gestión de deuda técnica

Se permitirá deuda técnica controlada cuando:

- No comprometa seguridad.
- No comprometa datos.
- No bloquee evolución.
- Esté documentada.
- Tenga tarea futura.

No se permitirá deuda en:

- Pagos.
- Autenticación.
- Permisos.
- Consentimientos.
- Migraciones.
- Totales.
- Archivos.
- Backups.

---

## 15.24 Lanzamientos progresivos

### Lanzamiento interno

Usuarios:

- Desarrollador.
- Equipo seleccionado.

Objetivo:

- Probar flujos.
- Detectar errores.

### Lanzamiento controlado

Usuarios:

- Comerciales.
- Algunos clientes.
- Tráfico limitado.

Objetivo:

- Validar calidad.
- Validar respuesta.
- Validar leads.

### Lanzamiento público

Condiciones:

- Procesos.
- Contenido.
- Seguridad.
- Analítica.
- Soporte.
- Migración.

### Activación de campañas

Después de:

- Probar formularios.
- Probar CRM.
- Confirmar respuesta.
- Confirmar capacidad.
- Confirmar seguimiento.

---

## 15.25 Plan de migración de datos por fases

### Primera fase

- Usuarios internos.
- Empresas necesarias.
- Contactos necesarios.
- Productos iniciales.
- Proyectos publicados.

### Segunda fase

- Clientes activos.
- Proyectos activos.
- Presupuestos activos.
- Catálogo ampliado.

### No migrar automáticamente

- Datos duplicados.
- Clientes sin finalidad.
- Presupuestos antiguos sin utilidad.
- Productos descatalogados.
- Correos o notas sin estructura.
- Datos sin base legal.

---

## 15.26 Responsabilidades de Ofiponiente

Por fase deberá:

- Entregar información.
- Revisar contenido.
- Validar productos.
- Probar procesos.
- Confirmar responsables.
- Aprobar textos.
- Confirmar precios.
- Confirmar zonas.
- Confirmar políticas.
- Responder dudas.
- Aceptar entregas.

Una fase puede quedar bloqueada si falta información del cliente.

---

## 15.27 Responsabilidades técnicas

El desarrollo deberá:

- Mantener repositorio.
- Mantener entornos.
- Aplicar migraciones.
- Implementar.
- Probar.
- Documentar.
- Desplegar.
- Registrar incidencias.
- Controlar cambios.
- Evitar datos ficticios.
- Avisar de bloqueos.
- Mantener seguridad.

---

## 15.28 Criterios de prioridad

Una función tendrá más prioridad cuando:

- Genera leads.
- Aumenta conversión.
- Reduce trabajo manual.
- Evita pérdida de información.
- Mejora seguimiento.
- Protege datos.
- Desbloquea otra fase.
- Resuelve un problema frecuente.
- Tiene usuario y proceso claros.

Tendrá menos prioridad cuando:

- Es puramente decorativa.
- Solo sirve para una demo.
- Tiene uso hipotético.
- Duplica otra herramienta.
- Exige mucha infraestructura.
- No existe contenido o dato real.
- No cambia un resultado.

---

## 15.29 Indicadores por fase

### Captación

- Planificadores enviados.
- Leads válidos.
- Leads A/B.
- Tiempo de respuesta.
- Contacto.

### Comercial

- Proyectos.
- Presupuestos.
- Seguimientos.
- Aceptación.
- Valor.

### Catálogo

- Productos completos.
- Consultas.
- Productos añadidos.
- Solicitudes.

### Operación

- Pedidos.
- Estados.
- Retrasos.
- Incidencias.
- Tiempo.

### Ecommerce

- Carritos.
- Compras.
- Ticket.
- Margen.
- Devoluciones.

Cada fase se evaluará por uso y resultado, no por número de funciones construidas.

---

## 15.30 Criterios de pausa o replanteamiento

Pausar una fase cuando:

- Falta información crítica.
- No existe proceso operativo.
- El cliente no puede revisarla.
- La fase anterior no se utiliza.
- El coste supera el valor esperado.
- Se ha descubierto un riesgo legal.
- La arquitectura necesita una decisión previa.
- La capacidad de Ofiponiente está saturada.

Replantear:

- Alcance.
- Orden.
- Herramienta.
- Automatización.
- Integración.

No continuar desarrollando por inercia.

---

## 15.31 Orden visual resumido

```text
FASE 0
Auditoría y negocio
        ↓
FASE 1
Base técnica
        ↓
FASE 2
Web y migración
        ↓
FASE 3
Planificador + CRM
        ↓
LANZAMIENTO COMERCIAL
        ↓
FASE 4
Catálogo
        ↓
FASE 5
Proyectos + presupuestos
        ↓
SEGUNDO HITO COMERCIAL
        ↓
FASE 6
Editor 2D
        ↓
FASE 7
Pedidos
        ↓
FASE 8
Ecommerce
        ↓
FASE 9
Crecimiento e integraciones
```

---

## 15.32 Decisiones cerradas en este punto

- El primer lanzamiento será captación, no ecommerce.
- La Fase 3 constituye el MVP comercial.
- El catálogo se desarrollará después de estabilizar el planificador y CRM.
- Los presupuestos se desarrollarán antes del editor.
- El editor se integrará después de estabilizar productos y proyectos.
- Los pedidos se construirán antes del checkout.
- El ecommerce será una fase posterior condicionada por operativa.
- Las fases tendrán puertas de aceptación.
- Las tareas para Claude serán pequeñas y referenciadas.
- Las ideas nuevas se registrarán sin interrumpir automáticamente la fase.
- Se priorizará valor comercial y reducción de trabajo manual.
- No se considerará terminada una fase porque funcione en local.
- La migración de datos será selectiva.
- Las campañas se activarán después de validar captación y respuesta.

---

## 15.33 Información pendiente

Para transformar las fases en un calendario y presupuesto será necesario conocer:

- Disponibilidad del cliente.
- Responsable de revisión.
- Usuarios.
- Volumen de productos.
- Estado de contenidos.
- Accesos.
- Calidad de datos.
- Necesidad real de ecommerce.
- Prioridad del editor.
- Recursos visuales.
- Equipo técnico.
- Presupuesto.
- Fecha objetivo.
- Dependencias externas.
- ERP.
- Proveedor de pagos.
- Proceso legal.
- Capacidad de respuesta comercial.


# Registro de decisiones

| Fecha | Decisión | Estado |
|---|---|---|
| 2026-06-18 | Usar `planificaciondeoficinas.com` como dominio principal | Cerrada |
| 2026-06-18 | Presentar el proyecto con respaldo de Ofiponiente | Cerrada |
| 2026-06-18 | Priorizar captación guiada frente a ecommerce masivo | Cerrada |
| 2026-06-18 | Dividir el proyecto en fases | Cerrada |
| 2026-06-18 | Utilizar RapidOffice de forma selectiva | Cerrada |
| 2026-06-18 | Priorizar B2B y proyectos completos de 5 a 100 puestos | Cerrada |
| 2026-06-18 | Clasificar leads por urgencia, valor y viabilidad | Cerrada |
| 2026-06-18 | No prometer cobertura nacional sin validar logística | Cerrada |
| 2026-06-18 | Posicionar la plataforma como servicio completo, no tienda genérica | Cerrada |
| 2026-06-18 | Usar el planificador como diferenciador principal | Cerrada |
| 2026-06-18 | Comunicar beneficios empresariales, no tecnología | Cerrada |
| 2026-06-18 | Evitar promesas no respaldadas por la capacidad operativa | Cerrada |
| 2026-06-18 | Priorizar proyectos completos como principal fuente de valor | Cerrada |
| 2026-06-18 | Lanzar ecommerce selectivo y no catálogo masivo | Cerrada |
| 2026-06-18 | Usar fichas de compra directa, presupuesto e híbridas | Cerrada |
| 2026-06-18 | Medir margen real incluyendo logística y costes operativos | Cerrada |
| 2026-06-18 | Limitar el trabajo de planificación gratuita | Cerrada |
| 2026-06-18 | Usar planificaciondeoficinas.com como único dominio público principal | Cerrada |
| 2026-06-18 | Mantener ofiponiente.rodorte.com solo como demo o staging no indexable | Cerrada |
| 2026-06-18 | Transformar la landing de una sola página en una plataforma con rutas reales | Cerrada |
| 2026-06-18 | Mantener web pública, conversión y operación interna como capas separadas | Cerrada |
| 2026-06-18 | Auditar ofiponiente.es y su correo antes de aplicar redirecciones | Cerrada |
| 2026-06-18 | Empezar el área interna en /admin | Cerrada |
| 2026-06-18 | Usar el planificador como embudo principal de proyectos | Cerrada |
| 2026-06-18 | No solicitar datos de contacto en el primer paso | Cerrada |
| 2026-06-18 | Registrar fuente, campaña y UTM en cada oportunidad | Cerrada |
| 2026-06-18 | Empezar con scoring basado en reglas simples | Cerrada |
| 2026-06-18 | Medir calidad y resultado comercial, no solo formularios | Cerrada |
| 2026-06-18 | Diseñar el planificador como experiencia multistep y mobile-first | Cerrada |
| 2026-06-18 | Pedir contacto después de mostrar el resumen | Cerrada |
| 2026-06-18 | Guardar progreso localmente en el MVP | Cerrada |
| 2026-06-18 | Mantener archivos privados y protegidos | Cerrada |
| 2026-06-18 | No generar presupuesto final automático en el MVP | Cerrada |
| 2026-06-18 | Usar ofiponiente.es como fuente provisional de contenido y estructura | Cerrada |
| 2026-06-18 | Validar precios, stock, garantías, cobertura y promesas antes de publicar | Cerrada |
| 2026-06-18 | Auditar y mapear la web antigua antes de migrar contenido | Cerrada |
| 2026-06-18 | Auditar el catálogo desde ofiponiente.es antes de importarlo | Cerrada |
| 2026-06-18 | Usar tipos comerciales: directo, presupuesto, híbrido, catálogo y outlet | Cerrada |
| 2026-06-18 | Lanzar un catálogo reducido y bien documentado | Cerrada |
| 2026-06-18 | Derivar variantes complejas a presupuesto | Cerrada |
| 2026-06-18 | Exigir fotografías reales y stock concreto para outlet | Cerrada |
| 2026-06-18 | Publicar catálogo y captación antes de activar checkout | Cerrada |
| 2026-06-18 | Mantener ecommerce integrado en planificaciondeoficinas.com | Cerrada |
| 2026-06-18 | Permitir compra como invitado | Cerrada |
| 2026-06-18 | Procesar pagos mediante proveedor externo | Cerrada |
| 2026-06-18 | Vender directamente solo productos con logística validada | Cerrada |
| 2026-06-18 | Decidir motor ecommerce definitivo después de auditar catálogo y operativa | Cerrada |
| 2026-06-18 | Definir el área privada como mini CRM vertical | Cerrada |
| 2026-06-18 | Priorizar flujo lead → cliente → proyecto → presupuesto → pedido | Cerrada |
| 2026-06-18 | Integrar RapidOffice como herramienta interna del CRM | Cerrada |
| 2026-06-18 | Mantener el CRM separado de funciones ERP avanzadas | Cerrada |
| 2026-06-18 | Empezar con roles simples y automatizaciones concretas | Cerrada |
| 2026-06-18 | Crear un repositorio nuevo y reutilizar RapidOffice selectivamente | Cerrada |
| 2026-06-18 | No copiar la autenticación JWT almacenada en localStorage | Cerrada |
| 2026-06-18 | Rehacer el modelo de proyecto conectado al mini CRM | Cerrada |
| 2026-06-18 | Portar el editor después de estabilizar CRM y catálogo | Cerrada |
| 2026-06-18 | No depender de FastAPI separado en el MVP salvo necesidad demostrada | Cerrada |
| 2026-06-18 | Mantener precios y totales calculados en servidor | Cerrada |
| 2026-06-18 | Centrar SEO en proyectos, soluciones, productos y demanda local real | Cerrada |
| 2026-06-18 | Crear mapa URL a URL antes de migrar ofiponiente.es | Cerrada |
| 2026-06-18 | No crear páginas locales clonadas ni contenido masivo con IA | Cerrada |
| 2026-06-18 | Usar proyectos reales como activo editorial principal | Cerrada |
| 2026-06-18 | Medir el SEO desde consulta hasta venta y margen | Cerrada |
| 2026-06-18 | Priorizar Instagram, Facebook y LinkedIn en contenido orgánico | Cerrada |
| 2026-06-18 | Usar Google Ads para demanda activa y Meta Ads para descubrimiento y retargeting | Cerrada |
| 2026-06-18 | Usar el planificador como destino principal de campañas de proyecto | Cerrada |
| 2026-06-18 | Medir campañas hasta oportunidad, cliente y margen | Cerrada |
| 2026-06-18 | Basar la creatividad en proyectos y material real de Ofiponiente | Cerrada |
| 2026-06-18 | Definir la Fase 3 como primer MVP comercial | Cerrada |
| 2026-06-18 | Desarrollar presupuestos antes de integrar el editor 2D | Cerrada |
| 2026-06-18 | Construir pedidos antes de activar ecommerce | Cerrada |
| 2026-06-18 | Aplicar puertas de validación entre fases | Cerrada |
| 2026-06-18 | Dividir la implementación de Claude en tareas pequeñas y cerradas | Cerrada |

---

# Reglas para futuros prompts de Claude Opus 4.8

Este documento será la fuente de contexto principal.

Cada prompt deberá:

- Indicar una única tarea concreta.
- Referenciar las secciones relevantes de este archivo.
- Limitar los archivos que Claude debe revisar.
- Separar análisis de implementación cuando sea necesario.
- Definir qué no debe modificar.
- Incluir criterios de aceptación verificables.
- Pedir una respuesta final breve.
- Evitar solicitar exploración general del repositorio.
- Evitar rehacer decisiones ya cerradas.
- Utilizar el nivel de esfuerzo mínimo suficiente.

No se generará todavía ningún prompt de implementación hasta cerrar los bloques funcionales y técnicos necesarios.

# 16. Alcance, exclusiones y riesgos

## 16.1 Objetivo

Definir con precisión qué pertenece al proyecto, qué queda fuera y qué riesgos pueden bloquearlo.

Esta sección prevalece frente a interpretaciones amplias o peticiones improvisadas.

---

## 16.2 Alcance del primer MVP comercial

Incluye:

- Web pública.
- Home.
- Soluciones prioritarias.
- Contacto.
- Proyectos iniciales.
- Planificador multistep.
- Subida privada de archivos.
- Confirmaciones por correo.
- Captura de UTM.
- Leads.
- Empresas y contactos.
- Tareas.
- Notas.
- Actividad.
- Scoring.
- Responsable.
- Estados.
- Dashboard básico.
- Búsqueda y filtros.
- Roles simples.
- Analítica.
- SEO técnico.
- Staging.
- Migración prioritaria desde `ofiponiente.es`.

---

## 16.3 Alcance posterior ya previsto

Después del MVP:

- Catálogo inicial.
- Marcas.
- Productos.
- Variantes.
- Proyectos comerciales.
- Presupuestos versionados.
- PDFs.
- Editor 2D.
- Pedidos.
- Incidencias.
- Ecommerce selectivo.
- Cuenta de cliente.
- Integraciones.

Estar previsto no significa estar incluido en la primera entrega.

---

## 16.4 Exclusiones del MVP

Quedan fuera inicialmente:

- Ecommerce.
- Pago online.
- Editor 2D.
- ERP.
- Contabilidad.
- Facturación fiscal completa.
- Nóminas.
- Almacén avanzado.
- Compras a proveedores.
- Multiempresa.
- Multi-tenant.
- App móvil.
- WhatsApp API.
- IA comercial.
- Chatbot.
- Automatizaciones libres.
- CMS visual.
- Catálogo masivo.
- Sincronización automática con fabricantes.
- Tarifas personalizadas por cliente.
- Portal profesional.
- Realidad aumentada.
- Configurador 3D.
- Procesamiento automático de planos.
- Soporte multidioma.
- Multimoneda.

---

## 16.5 Regla de cambio de alcance

Toda petición nueva se clasificará como:

- Corrección.
- Ajuste menor.
- Cambio funcional.
- Nueva funcionalidad.
- Cambio de fase.
- Integración externa.
- Riesgo obligatorio.

Para aprobarla se documentará:

- Objetivo.
- Usuario.
- Beneficio.
- Dependencias.
- Impacto.
- Coste.
- Riesgo.
- Fase.
- Criterios de aceptación.

No se incorporará automáticamente porque “parece pequeña”.

---

## 16.6 Riesgos de negocio

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Ofiponiente no entrega información | Alto | Puertas de fase y lista de bloqueos |
| No existe responsable comercial | Alto | Designar responsable antes del lanzamiento |
| Los leads no se atienden | Alto | Tareas, alertas y medición de respuesta |
| No se validan zonas de servicio | Alto | Bloquear campañas y formularios por cobertura |
| Se intenta vender sin logística definida | Alto | Mantener productos como presupuesto |
| El catálogo no se actualiza | Alto | Responsable, fecha de revisión y estados |
| El equipo no usa el CRM | Alto | MVP simple, formación y eliminación de duplicidades |
| El proyecto crece sin prioridad | Alto | Backlog por fases y control de cambios |

---

## 16.7 Riesgos técnicos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Copiar RapidOffice completo | Alto | Repositorio limpio y migración selectiva |
| Tipos inconsistentes | Alto | Esquemas únicos y validación |
| Autenticación insegura | Crítico | Better Auth, cookies seguras y permisos servidor |
| Archivos públicos | Crítico | Almacenamiento privado y URLs temporales |
| Pérdida de datos | Crítico | Backups, migraciones y pruebas de restauración |
| Staging indexado | Medio | Protección y noindex |
| Dependencias beta | Alto | Solo versiones estables |
| Sobreingeniería | Alto | Monolito modular y necesidad demostrada |
| Totales incorrectos | Crítico | Cálculo servidor, enteros y pruebas |
| Exposición de costes | Alto | Permisos específicos y modelos públicos separados |

---

## 16.8 Riesgos SEO y migración

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Migrar sin mapa de URLs | Alto | Inventario y redirecciones antes del cambio |
| Redirigir todo a la home | Alto | Destinos equivalentes |
| Perder correo al tocar DNS | Crítico | Auditar registros antes del cambio |
| Publicar contenido vacío | Medio | Criterios mínimos de publicación |
| Mantener dos webs compitiendo | Alto | Un dominio principal y retirada progresiva |
| Indexar staging o filtros | Medio | Robots, noindex y canonical |
| Contenido masivo con IA | Alto | Revisión humana y fuentes reales |

---

## 16.9 Riesgos legales y operativos

- Consentimientos incorrectos.
- Política de privacidad incompleta.
- Conservación indefinida.
- Imágenes sin permiso.
- Marcas no autorizadas.
- Promesas no verificadas.
- Precios o descuentos incorrectos.
- Condiciones de venta incompletas.
- Garantías mal comunicadas.
- Datos de clientes en proyectos publicados.

Mitigación:

- Revisión legal.
- Registro de consentimiento.
- Inventario de derechos.
- Validación comercial.
- Permisos de publicación.
- Separación entre dato provisional y dato aprobado.

---

## 16.10 Supuestos

El plan asume:

- Ofiponiente participará en revisiones.
- Existe una persona responsable de negocio.
- Se obtendrán accesos técnicos.
- Se aportarán fotografías y proyectos.
- Se confirmará la cobertura.
- El catálogo inicial será limitado.
- El primer objetivo será captar proyectos.
- El ecommerce no es condición para lanzar.

Si un supuesto falla, se revisará la fase correspondiente.

---

## 16.11 Criterios de bloqueo

Bloquean el lanzamiento:

- Sin responsable de leads.
- Sin correo funcional.
- Sin privacidad revisada.
- Sin acceso al dominio.
- Sin backup o recuperación.
- Formularios que pierden datos.
- Archivos expuestos.
- Staging indexado.
- Datos ficticios publicados como reales.
- Analítica sin comprobar.
- Migración sin mapa.
- Vulnerabilidad crítica.

---

## 16.12 Decisiones cerradas

- El MVP es captación y CRM básico.
- Ecommerce y editor quedan fuera del primer lanzamiento.
- Todo cambio nuevo se registra.
- No se amplía alcance por inercia.
- No se vende sin operativa.
- Seguridad, datos y legal no admiten deuda temporal.
- Las dependencias del cliente pueden bloquear una fase.
- El lanzamiento requiere una puerta formal de aceptación.



# 17. Métricas de éxito

## 17.1 Objetivo

Medir si la plataforma genera negocio y reduce trabajo, no únicamente si recibe visitas o contiene muchas funciones.

Métrica principal:

> Oportunidades comerciales cualificadas que avanzan hacia presupuesto y venta rentable.

---

## 17.2 Embudo principal

```text
visita
→ inicio del planificador
→ planificador completado
→ lead válido
→ lead cualificado
→ contacto
→ proyecto
→ presupuesto
→ aceptado
→ pedido
→ margen
```

Cada paso tendrá evento, fecha y fuente.

---

## 17.3 Métricas de captación

- Sesiones.
- Usuarios.
- Fuente.
- Landing.
- Inicios del planificador.
- Finalización.
- Abandono por paso.
- Formularios válidos.
- Leads duplicados.
- Leads fuera de zona.
- Leads A, B, C y D.
- Coste por lead.
- Coste por lead cualificado.

---

## 17.4 Métricas comerciales

- Tiempo hasta primer contacto.
- Porcentaje contactado.
- Leads convertidos en proyecto.
- Proyectos con presupuesto.
- Presupuestos enviados.
- Presupuestos aceptados.
- Valor del pipeline.
- Ticket.
- Días en etapa.
- Motivos de pérdida.
- Ingresos.
- Margen estimado y real.

---

## 17.5 Métricas operativas

- Tareas vencidas.
- Leads sin responsable.
- Presupuestos sin seguimiento.
- Pedidos con incidencia.
- Tiempo de preparación.
- Tiempo de entrega.
- Incidencias por pedido.
- Resolución.
- Uso del CRM.
- Registros fuera del sistema.

---

## 17.6 Métricas de catálogo

- Productos publicados.
- Productos completos.
- Productos desactualizados.
- Consultas.
- Añadidos a proyecto.
- Solicitudes por volumen.
- Productos vendidos.
- Categorías con conversión.
- Búsquedas sin resultados.
- Stock incorrecto detectado.

---

## 17.7 Métricas SEO

- Leads orgánicos.
- Leads cualificados orgánicos.
- Presupuestos orgánicos.
- Ventas orgánicas.
- Consultas comerciales.
- Páginas que convierten.
- Visibilidad local.
- Errores de indexación.
- URLs migradas correctamente.
- Core Web Vitals.

Tráfico, impresiones y posición son métricas auxiliares.

---

## 17.8 Métricas publicitarias

- Gasto.
- CPC.
- CTR.
- Conversión de landing.
- Coste por lead.
- Coste por lead cualificado.
- Coste por presupuesto.
- Coste por cliente.
- Ingresos.
- Margen.
- Retorno.
- Leads fuera de cobertura.

---

## 17.9 Métricas del producto

- Usuarios internos activos.
- Frecuencia de uso.
- Tareas creadas y completadas.
- Tiempo medio de gestión.
- Errores.
- Acciones fallidas.
- Formularios recuperados.
- Tiempo ahorrado.
- Funciones no utilizadas.
- Satisfacción del equipo.

---

## 17.10 Calidad de datos

- Leads sin fuente.
- Contactos sin empresa.
- Duplicados.
- Productos sin fecha de revisión.
- Presupuestos sin estado.
- Proyectos sin próxima acción.
- Archivos sin relación.
- Campos obligatorios incompletos.
- Errores de importación.

---

## 17.11 Línea base y objetivos

No se inventarán objetivos numéricos antes de conocer la situación actual.

Proceso:

1. Medir línea base.
2. Registrar capacidad.
3. Definir objetivo mensual.
4. Definir umbral de alerta.
5. Revisar cada ciclo.
6. Ajustar.

Los objetivos deben incluir:

- Valor.
- Periodo.
- Responsable.
- Fuente.
- Acción si no se alcanza.

---

## 17.12 Dashboard ejecutivo

Debe mostrar:

- Leads válidos.
- Leads cualificados.
- Tiempo de respuesta.
- Proyectos.
- Presupuestos.
- Ratio de aceptación.
- Pipeline.
- Ventas.
- Margen.
- Fuente.
- Motivos de pérdida.

No sobrecargar con métricas sin acción.

---

## 17.13 Criterios de éxito del MVP

El MVP se considera útil cuando:

- Captura leads sin pérdidas.
- El equipo puede gestionarlos.
- Se registra la fuente.
- Los leads prioritarios se atienden.
- Se reduce dependencia de hojas de cálculo.
- Se generan proyectos reales.
- El seguimiento queda registrado.
- Los datos permiten decidir qué canal funciona.
- El sistema se usa de forma recurrente.
- No existen fallos críticos de seguridad o datos.

---

## 17.14 Revisión

Cadencia recomendada:

- Operación: semanal.
- Marketing: quincenal o mensual.
- Negocio: mensual.
- Arquitectura y costes: trimestral.
- SEO y contenido: mensual.
- Riesgos: al cerrar cada fase.

Cada revisión debe producir decisiones, no únicamente informes.

---

## 17.15 Decisiones cerradas

- La métrica principal será oportunidad cualificada y rentable.
- Se medirá el embudo completo.
- No se fijarán objetivos inventados.
- Los datos del CRM serán la fuente de verdad comercial.
- El tráfico será una métrica secundaria.
- Cada métrica debe tener responsable y acción.
- El éxito del MVP incluye adopción interna y calidad de datos.



# 18. Información pendiente del cliente

## 18.1 Objetivo

Consolidar en una única lista toda la información que Ofiponiente debe confirmar o entregar.

Los puntos críticos se resolverán antes de iniciar la fase que dependa de ellos.

---

## 18.2 Bloqueadores antes de comenzar

- Confirmar propiedad y acceso a `planificaciondeoficinas.com`.
- Confirmar acceso a `ofiponiente.es`.
- Confirmar acceso DNS.
- Confirmar que el correo no depende de cambios peligrosos.
- Designar responsable del proyecto.
- Designar responsable de leads.
- Confirmar zona de servicio.
- Confirmar servicios reales.
- Confirmar usuarios iniciales.
- Confirmar disponibilidad para revisiones.

---

## 18.3 Marca y contenido

- Nombre final en cabecera.
- Uso de “by Ofiponiente”.
- Logotipo.
- Colores.
- Tipografías.
- Fotografías.
- Vídeos.
- Historia.
- Equipo.
- Diferenciadores.
- Servicios.
- Proyectos.
- Testimonios.
- Permisos de publicación.
- Marcas autorizadas.
- Material de fabricantes.
- Preguntas frecuentes.

---

## 18.4 Web y SEO

- Acceso a hosting.
- Acceso al dominio.
- Acceso DNS.
- Search Console.
- Analytics.
- Google Business Profile.
- Sitemap antiguo.
- URLs importantes.
- Redirecciones posibles.
- Posicionamiento actual.
- Backups.
- Configuración de correo.
- Decisión sobre visibilidad futura de `ofiponiente.es`.

---

## 18.5 Negocio y cobertura

- Provincias.
- Zonas.
- Transporte.
- Montaje.
- Medición.
- Visita.
- Instalación.
- Ticket mínimo.
- Tipos de cliente.
- Sectores.
- Proyectos prioritarios.
- Plazos.
- Capacidad mensual.
- Persona comercial.
- Horarios.
- Procedimiento de contacto.

---

## 18.6 Planificador

- Preguntas definitivas.
- Rangos de presupuesto.
- Rangos de puestos.
- Zonas.
- Archivos.
- Consentimientos.
- Mensajes.
- Confirmación.
- Scoring.
- Prioridades.
- Motivos de no cualificación.
- Responsable.
- Tiempo de respuesta deseado.

---

## 18.7 CRM

- Usuarios.
- Roles.
- Pipeline.
- Estados.
- Motivos de pérdida.
- Tareas.
- Plantillas.
- Datos actuales.
- Excel.
- Software.
- Clientes a migrar.
- Proyectos activos.
- Presupuestos activos.
- Permisos.
- Datos sensibles.
- Necesidad móvil.
- Exportaciones.

---

## 18.8 Catálogo

- Categorías.
- Marcas.
- Productos.
- Referencias.
- Tarifas.
- Costes.
- Precios.
- IVA.
- Stock.
- Proveedores.
- Plazos.
- Variantes.
- Imágenes.
- Fichas técnicas.
- Garantías.
- Certificaciones.
- Productos comprables.
- Productos bajo presupuesto.
- Pedido mínimo.
- Responsable.
- Frecuencia de actualización.
- ERP o fuente.
- Formato de importación.

---

## 18.9 Outlet

- Existencia real.
- Tipo de producto.
- Grado de estado.
- Fotografías.
- Stock.
- Precio.
- Garantía.
- Devoluciones.
- Reserva.
- Transporte.
- Montaje.
- Responsable.
- Proceso de actualización.

---

## 18.10 Presupuestos y pedidos

- Plantilla actual.
- Numeración.
- Condiciones.
- Validez.
- Descuentos.
- Servicios.
- Transporte.
- Montaje.
- Aprobación.
- Firma.
- Señal.
- Conversión en pedido.
- Estados.
- Proveedores.
- Entrega.
- Incidencias.
- Cancelación.
- Devolución.
- Facturación.

---

## 18.11 Ecommerce

- Necesidad real.
- Productos vendibles.
- Volumen.
- Métodos de pago.
- Banco.
- TPV.
- Redsys o Stripe.
- Transferencia.
- Transporte.
- Montaje.
- Recogida.
- Política de devoluciones.
- Garantías.
- Responsable.
- Atención.
- Facturación.
- Condiciones legales.
- Promociones.
- Stock.
- ERP.
- Plataforma externa si procede.

---

## 18.12 Infraestructura

- Cuenta GitHub.
- Cuenta Vercel.
- Cuenta Neon.
- Cuenta Resend.
- Proveedor de archivos.
- Región.
- Presupuesto mensual.
- Responsable técnico.
- Política de backups.
- Acceso del cliente.
- Entorno staging.
- Cuentas de analítica.
- Cuentas publicitarias.

---

## 18.13 Legal y privacidad

- Razón social.
- CIF.
- Domicilio.
- Contacto.
- Responsable del tratamiento.
- Política de privacidad.
- Cookies.
- Aviso legal.
- Condiciones de contratación.
- Conservación.
- Proveedores.
- Encargados.
- Base legal.
- Consentimientos.
- Derechos de imágenes.
- Autorizaciones de proyectos.

La revisión jurídica final no corresponde al desarrollo técnico.

---

## 18.14 Marketing

- Redes.
- Accesos.
- Histórico.
- Pixel.
- Cuenta Google Ads.
- Cuenta Meta.
- Cuenta LinkedIn.
- Presupuesto.
- Creatividades.
- Proyectos.
- Zona.
- Objetivos.
- Capacidad de respuesta.
- Margen.
- Ticket.
- Campañas anteriores.
- Resultados.

---

## 18.15 Clasificación de prioridad

### P0 — Bloquea el inicio

- Dominio.
- DNS.
- Responsable.
- Cobertura.
- Accesos.
- Flujo comercial.

### P1 — Bloquea el MVP

- Contenido.
- Planificador.
- Privacidad.
- Email.
- Usuarios.
- Scoring.
- Proyectos iniciales.

### P2 — Bloquea catálogo y presupuestos

- Productos.
- Tarifas.
- Variantes.
- Servicios.
- Plantillas.
- Costes.
- Proveedores.

### P3 — Bloquea ecommerce o evolución

- Pagos.
- Transporte avanzado.
- Devoluciones.
- ERP.
- Integraciones.
- Automatizaciones.

---

## 18.16 Estado del dominio principal

A fecha de este documento:

> La propiedad y el acceso a `planificaciondeoficinas.com` no están verificados.

No se afirmará que el dominio pertenece a Ofiponiente ni al desarrollador hasta comprobar:

- Registrador.
- Titular.
- Acceso.
- Fecha de renovación.
- DNS.
- Bloqueo.
- Nameservers.

Esta verificación es P0.

---

## 18.17 Decisiones cerradas

- La información pendiente se gestiona como backlog del cliente.
- Los bloqueadores P0 se resuelven antes de la Fase 1.
- No se rellenarán huecos con suposiciones.
- Cada dato tendrá responsable y fecha.
- La ausencia de información puede bloquear una fase.
- El dominio principal sigue sin verificar.



# 19. Presupuesto y mantenimiento

## 19.1 Objetivo

Definir cómo se estimará, contratará y mantendrá el proyecto sin mezclar:

- Desarrollo inicial.
- Infraestructura.
- Contenido.
- Marketing.
- Soporte.
- Evolución.
- Integraciones.

No se fijarán importes definitivos hasta cerrar alcance, datos y responsabilidades.

---

## 19.2 Estructura del presupuesto

El presupuesto se dividirá por fases:

1. Descubrimiento y auditoría.
2. Base técnica.
3. Web y migración.
4. Planificador y CRM.
5. Catálogo.
6. Proyectos y presupuestos.
7. Editor 2D.
8. Pedidos.
9. Ecommerce.
10. Evoluciones.

Cada fase indicará:

- Alcance.
- Entregables.
- Exclusiones.
- Dependencias.
- Criterios de aceptación.
- Revisiones.
- Precio.
- Forma de pago.
- Gastos externos.
- Mantenimiento posterior.

---

## 19.3 Costes separados

### Desarrollo

- Análisis.
- Diseño.
- Programación.
- Pruebas.
- Despliegue.
- Documentación.

### Contenido

- Redacción.
- Fotografía.
- Vídeo.
- Migración.
- Carga de catálogo.
- Traducción futura.

### Infraestructura

- Dominio.
- Hosting.
- Base de datos.
- Archivos.
- Correo.
- Analítica.
- Herramientas.
- Proveedores de pago.

### Marketing

- Gestión.
- Creatividades.
- Campañas.
- Inversión publicitaria.
- Producción.

### Mantenimiento

- Actualizaciones.
- Seguridad.
- Copias.
- Incidencias.
- Soporte.
- Evolución.

No ocultar costes recurrentes dentro del precio inicial.

---

## 19.4 Modelos de contratación posibles

### Precio cerrado por fase

Adecuado cuando:

- Alcance claro.
- Dependencias resueltas.
- Criterios cerrados.

### Bolsa de horas

Adecuada para:

- Ajustes.
- Investigación.
- Contenido.
- Incidencias.
- Evolución.

### Mantenimiento mensual

Adecuado para:

- Supervisión.
- Actualizaciones.
- Soporte.
- Backups.
- Pequeñas mejoras.
- Informes.

### Proyectos adicionales

Para:

- Ecommerce.
- Editor.
- ERP.
- Integraciones.
- Automatizaciones mayores.

No convertir mantenimiento en desarrollo ilimitado.

---

## 19.5 Revisión y aceptación

Cada fase incluirá:

- Entorno de staging.
- Periodo de revisión.
- Lista de incidencias.
- Correcciones incluidas.
- Aceptación.
- Paso a producción.

Se considera corrección:

- Algo incumple los criterios acordados.

Se considera cambio:

- Nueva necesidad.
- Nueva regla.
- Nuevo flujo.
- Nueva integración.
- Ampliación de alcance.

Los cambios se presupuestan o se mueven al backlog.

---

## 19.6 Mantenimiento técnico

Incluye según contrato:

- Dependencias.
- Parches de seguridad.
- Supervisión.
- Backups.
- Restauración.
- Errores.
- Correos.
- Logs.
- Renovaciones.
- Certificados.
- Migraciones menores.
- Pruebas periódicas.

No incluye automáticamente:

- Nuevos módulos.
- Rediseños.
- Carga masiva de productos.
- Campañas.
- Integraciones.
- Cambios de proceso.

---

## 19.7 Mantenimiento de contenido

Responsabilidades a definir:

- Quién publica.
- Quién revisa.
- Quién actualiza productos.
- Quién actualiza stock.
- Quién aporta proyectos.
- Quién responde reseñas.
- Quién mantiene legales.
- Quién valida promociones.

Una web comercial pierde valor si nadie mantiene sus datos.

---

## 19.8 Mantenimiento de catálogo

Requiere:

- Responsable.
- Frecuencia.
- Fecha de última verificación.
- Estado de producto.
- Precio.
- Stock.
- Plazo.
- Imágenes.
- Fichas.
- Descatalogados.
- Sustitutos.

El mantenimiento no debe depender únicamente del desarrollador si la información pertenece al negocio.

---

## 19.9 Soporte e incidencias

Clasificación:

### Crítica

- Web caída.
- Pérdida de datos.
- Acceso no autorizado.
- Pago incorrecto.
- Formularios sin registrar.

### Alta

- Función principal bloqueada.
- CRM inaccesible.
- Archivos no disponibles.
- Error de presupuesto.

### Media

- Función secundaria.
- Error visual importante.
- Informe incorrecto.

### Baja

- Mejora estética.
- Texto.
- Ajuste menor.

Los tiempos de respuesta se definirán en contrato, no se inventarán en este documento.

---

## 19.10 Propiedad y accesos

Debe quedar por escrito:

- Titular del dominio.
- Titular de las cuentas.
- Propietario del repositorio.
- Acceso de Ofiponiente.
- Acceso técnico.
- Propiedad del código.
- Licencias.
- Exportación de datos.
- Entrega de credenciales.
- Continuidad si cambia el proveedor.

No mantener cuentas críticas únicamente a nombre del desarrollador sin acuerdo.

---

## 19.11 Infraestructura y consumo

Antes de contratar:

- Estimar usuarios.
- Archivos.
- Tráfico.
- Correos.
- Base de datos.
- Backups.
- Pagos.
- Analítica.

Se empezará con planes razonables y se escalará por consumo real.

No sobredimensionar infraestructura.

---

## 19.12 Reserva de contingencia

El presupuesto debe contemplar posibles costes por:

- Datos desordenados.
- Hosting antiguo.
- DNS.
- Migración.
- Imágenes.
- Catálogos de proveedores.
- Integraciones no documentadas.
- Cambios legales.
- Revisión de contenido.

La contingencia no sustituye un alcance claro.

---

## 19.13 Factores que impiden estimar precio final

- Dominio no verificado.
- Volumen de páginas.
- Estado de `ofiponiente.es`.
- Volumen de productos.
- Calidad de datos.
- Usuarios.
- Complejidad del planificador.
- Necesidad real de ecommerce.
- Integraciones.
- Contenido.
- Fotografía.
- Legal.
- Prioridad del editor.
- Soporte esperado.

---

## 19.14 Entregables para presupuestar

Antes de emitir una propuesta económica completa deben existir:

- Alcance confirmado.
- Fases seleccionadas.
- Inventario.
- Backlog.
- Responsabilidades.
- Dependencias.
- Exclusiones.
- Criterios.
- Riesgos.
- Calendario de revisión.
- Infraestructura estimada.

---

## 19.15 Decisiones cerradas

- Se presupuestará por fases.
- Desarrollo, infraestructura, contenido y marketing irán separados.
- El mantenimiento no incluye evolución ilimitada.
- Los cambios de alcance se registrarán.
- Los tiempos de soporte se definirán contractualmente.
- Las cuentas críticas tendrán propiedad y acceso claros.
- No se dará un precio definitivo con información incompleta.
- La infraestructura crecerá por uso real.



# 20. Prompts de implementación para Claude Opus 4.8

## 20.1 Objetivo

Utilizar Claude como ejecutor técnico controlado, evitando:

- Prompts gigantes.
- Refactorizaciones no solicitadas.
- Cambios fuera de alcance.
- Duplicación.
- Implementaciones basadas en suposiciones.
- Consumo innecesario de tokens.
- Pérdida de contexto.

El documento maestro es la fuente de decisiones.

---

## 20.2 Jerarquía de instrucciones

Claude deberá seguir este orden:

1. Prompt actual.
2. Secciones citadas del documento maestro.
3. Estado real del repositorio.
4. Convenciones existentes válidas.
5. Buenas prácticas compatibles.

No puede contradecir una decisión cerrada sin señalarlo y detener la implementación.

---

## 20.3 Tipos de prompt

### Auditoría

- Solo analiza.
- No modifica.
- Genera documento.
- Cita archivos.

### Diseño técnico

- Propone.
- No implementa.
- Define contratos.
- Identifica riesgos.

### Implementación

- Tarea concreta.
- Archivos limitados.
- Criterios verificables.
- Pruebas.

### Corrección

- Parte de error reproducible.
- Modificación mínima.
- Sin refactorizar módulos no relacionados.

### Revisión

- Analiza diff.
- Busca errores.
- No reescribe automáticamente salvo orden.

---

## 20.4 Estructura obligatoria de cada prompt

```text
TÍTULO
OBJETIVO
CONTEXTO
SECCIONES DEL DOCUMENTO
ESTADO ACTUAL
ALCANCE
EXCLUSIONES
ARCHIVOS PERMITIDOS
ARCHIVOS PROHIBIDOS
REGLAS
CRITERIOS DE ACEPTACIÓN
PRUEBAS
FORMATO DE RESPUESTA
```

---

## 20.5 Regla de tamaño

Una tarea debe producir un cambio revisable.

Ejemplo correcto:

> Crear esquema, migración y servicio de leads.

Ejemplo incorrecto:

> Construir el CRM entero.

Si una tarea toca demasiados dominios:

- Dividir.
- Resolver dependencias.
- Ejecutar secuencialmente.

---

## 20.6 Regla de lectura

Cada prompt indicará exactamente:

- Qué secciones leer.
- Qué directorios inspeccionar.
- Qué archivos no revisar.
- Qué documento producir.

No pedir “lee todo el repositorio” salvo auditoría inicial justificada.

---

## 20.7 Regla de cambios

Claude no podrá:

- Instalar dependencias sin justificar.
- Cambiar stack.
- Modificar arquitectura cerrada.
- Crear servicios nuevos por intuición.
- Refactorizar archivos no incluidos.
- Cambiar nombres públicos.
- Añadir funciones futuras.
- Crear datos inventados.
- Hacer commits si no se solicita.
- Tocar producción.

---

## 20.8 Formato de salida

Al terminar debe indicar:

1. Qué hizo.
2. Archivos modificados.
3. Migraciones.
4. Dependencias.
5. Pruebas ejecutadas.
6. Resultado.
7. Riesgos.
8. Pendientes.
9. Qué no tocó.

La respuesta debe ser breve y verificable.

---

## 20.9 Secuencia inicial de prompts

1. Auditar RapidOffice.
2. Auditar `ofiponiente.es`.
3. Confirmar dominio y accesos.
4. Crear repositorio nuevo.
5. Configurar calidad.
6. Configurar entornos.
7. Crear base de datos.
8. Configurar autenticación.
9. Configurar roles.
10. Crear sistema visual.
11. Crear layout público.
12. Crear páginas prioritarias.
13. Crear planificador.
14. Crear leads.
15. Crear CRM básico.
16. Configurar archivos.
17. Configurar correo.
18. Configurar analítica.
19. Preparar migración.
20. Crear catálogo.
21. Crear proyectos.
22. Crear presupuestos.
23. Integrar editor.
24. Crear pedidos.
25. Crear ecommerce.

---

## 20.10 Primer prompt correcto

El primer prompt será una auditoría de RapidOffice.

Debe:

- Leer las secciones 11, 12, 15, 16 y 20.
- Revisar frontend y backend.
- No modificar código.
- Crear `AUDITORIA_RAPIDOFFICE.md`.
- Clasificar reutilización.
- Identificar riesgos.
- Proponer backlog.
- Confirmar qué no se verificó.

No debe iniciar la Fase 1.

---

## 20.11 Respuesta a dudas antes de implementar

Si Claude detecta:

- Sección ausente.
- Contradicción.
- Dominio no verificado.
- Acceso pendiente.
- Decisión bloqueante.

Debe detener la parte afectada y formular preguntas concretas.

No debe inventar la respuesta.

---

## 20.12 Control de contexto

Para ahorrar tokens:

- Referenciar secciones exactas.
- No pegar el documento completo en cada prompt.
- Pedir búsquedas dirigidas.
- Reutilizar auditorías.
- Mantener documentos de decisiones.
- Actualizar backlog.
- Evitar análisis repetidos.

---

## 20.13 Criterios de aceptación de un prompt

Un prompt es válido cuando:

- Tiene una sola finalidad.
- No contiene contradicciones.
- Referencia secciones existentes.
- Define archivos.
- Define exclusiones.
- Define pruebas.
- Define resultado.
- Permite revisar el cambio.
- No depende de datos no confirmados.

---

## 20.14 Decisiones cerradas

- Claude trabajará por tareas pequeñas.
- El documento maestro será fuente de contexto.
- La auditoría precede a la implementación.
- No se inicia la Fase 1 con bloqueadores P0.
- Cada prompt limitará archivos.
- Toda implementación tendrá pruebas.
- Claude no ampliará alcance.
- Los resultados se documentarán.
- Los prompts se generarán desde el estado real del repositorio.



# Registro de decisiones

| Fecha | Decisión | Estado |
|---|---|---|
| 2026-06-18 | Usar planificaciondeoficinas.com como dominio principal previsto | Cerrada |
| 2026-06-18 | Mantener el dominio como no verificado hasta comprobar titularidad y acceso | Cerrada |
| 2026-06-18 | Mantener ofiponiente.rodorte.com como demo no indexable | Cerrada |
| 2026-06-18 | No enlazar la demo a una URL provisional inexistente | Cerrada |
| 2026-06-18 | Usar ofiponiente.es como fuente provisional | Cerrada |
| 2026-06-18 | Auditar RapidOffice antes de reutilizarlo | Cerrada |
| 2026-06-18 | Crear repositorio limpio | Cerrada |
| 2026-06-18 | Lanzar primero captación y CRM | Cerrada |
| 2026-06-18 | Desarrollar catálogo y presupuestos antes del editor | Cerrada |
| 2026-06-18 | Construir pedidos antes de ecommerce | Cerrada |
| 2026-06-18 | Usar monolito modular Next.js | Cerrada |
| 2026-06-18 | No usar FastAPI separado en el MVP salvo necesidad real | Cerrada |
| 2026-06-18 | No iniciar la Fase 1 con bloqueadores P0 | Cerrada |
| 2026-06-18 | Primer prompt: auditoría de RapidOffice | Cerrada |
| 2026-06-18 | Mantener el documento maestro con secciones 0–20 | Cerrada |

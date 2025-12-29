# Requisitos del Sistema - Nandi Chef

## Requisitos Funcionales

### Autenticación

**RF-001: Iniciar sesión**
Como administrador quiero iniciar sesión con email y contraseña para acceder al panel de administración.

- Prioridad: MUST
- Dependencias: Ninguna

**RF-002: Cerrar sesión**
Como administrador quiero cerrar sesión para salir del sistema de forma segura.

- Prioridad: MUST
- Dependencias: RF-001

### Gestión de Recetas

**RF-003: Listar recetas**
Como administrador quiero ver un listado de todas mis recetas al iniciar sesión, mostrando nombre, categoría, precio y estado de visibilidad.

- Prioridad: MUST
- Dependencias: RF-001

**RF-004: Añadir receta**
Como administrador quiero crear una nueva receta incluyendo nombre, descripción, categoría, imagen y precio de venta.

- Prioridad: MUST
- Dependencias: RF-001

**RF-005: Duplicar receta**
Como administrador quiero duplicar una receta existente para crear variantes rápidamente.

- Prioridad: SHOULD
- Dependencias: RF-003, RF-004

**RF-006: Buscar receta**
Como administrador quiero buscar recetas por nombre para encontrarlas rápidamente.

- Prioridad: SHOULD
- Dependencias: RF-003

**RF-007: Habilitar/Deshabilitar visibilidad**
Como administrador quiero mostrar u ocultar platos en la carta pública mediante un toggle desde el listado.

- Prioridad: MUST
- Dependencias: RF-003

**RF-008: Ver detalle de receta**
Como administrador quiero ver toda la información de una receta (ingredientes, precio de venta y alérgenos) desde el listado.

- Prioridad: MUST
- Dependencias: RF-003

**RF-013: Modificar precio de venta**
Como administrador quiero cambiar el precio de venta de una receta.

- Prioridad: MUST
- Dependencias: RF-004

### Gestión de Ingredientes

**RF-009: Listar ingredientes de receta**
Como administrador quiero ver todos los ingredientes de una receta con su nombre, cantidad, precio unitario y coste total calculado.

- Prioridad: MUST
- Dependencias: RF-008

**RF-010: Añadir ingrediente a receta**
Como administrador quiero añadir un ingrediente a una receta especificando el producto y la cantidad necesaria.

- Prioridad: MUST
- Dependencias: RF-008

**RF-011: Modificar ingrediente**
Como administrador quiero cambiar la cantidad de un ingrediente en una receta.

- Prioridad: SHOULD
- Dependencias: RF-010

**RF-012: Eliminar ingrediente**
Como administrador quiero quitar un ingrediente de una receta.

- Prioridad: SHOULD
- Dependencias: RF-010

### Análisis de Costes

**RF-014: Ver margen de beneficio**
Como administrador quiero ver el margen de una receta calculado automáticamente (precio de venta - suma de costes de ingredientes).

- Prioridad: MUST
- Dependencias: RF-009

### Gestión de Alérgenos

**RF-015: Asignar alérgenos**
Como administrador quiero seleccionar qué alérgenos contiene una receta de una lista predefinida.

- Prioridad: MUST
- Dependencias: RF-004

**RF-016: Modificar alérgenos**
Como administrador quiero cambiar los alérgenos asignados a una receta existente.

- Prioridad: MUST
- Dependencias: RF-015

### Funcionalidades Opcionales

**RF-017: Calculadora de compra**
Como administrador quiero indicar cuántas raciones de cada receta necesito producir y obtener una lista consolidada de ingredientes a comprar.

- Prioridad: COULD
- Dependencias: RF-009

**RF-018: Visualizar ventas**
Como administrador quiero ver las ventas realizadas filtradas por periodo de tiempo.

- Prioridad: COULD
- Dependencias: RF-019

**RF-019: Registrar venta en TPV**
Como administrador quiero marcar la venta de recetas desde un TPV y que se contabilice automáticamente en la aplicación.

- Prioridad: COULD
- Dependencias: RF-003

**RF-020: Exportar carta a PDF**
Como administrador quiero exportar la carta completa en formato PDF incluyendo información de alérgenos.

- Prioridad: COULD
- Dependencias: RF-003, RF-015

**RF-021: Histórico de precios**
Como administrador quiero ver la evolución histórica de precios de un producto/ingrediente.

- Prioridad: COULD
- Dependencias: RF-010

## Requisitos No Funcionales

**NFR-001: Rendimiento de carga**
El sistema debe cargar la lista de recetas en menos de 2 segundos.

**NFR-002: Diseño responsive**
El sistema debe ser completamente funcional en dispositivos móviles (mobile-first).

**NFR-003: Validación de precios**
El sistema debe validar que todos los precios introducidos sean valores positivos mayores a cero.

**NFR-004: Precisión de cálculos**
Todos los cálculos financieros deben ser precisos hasta 2 decimales.

**NFR-005: Optimización de imágenes**
Las imágenes subidas deben optimizarse automáticamente a un tamaño menor de 100KB manteniendo calidad aceptable.

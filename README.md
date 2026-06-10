# 📚 Proyecto Final QA Automation - BookDB QA

Bienvenido al repositorio del Trabajo Práctico Final de Automatización de Pruebas. Este proyecto fue desarrollado para asegurar la calidad de la plataforma de e-commerce de libros (Frontend y API), validando flujos críticos de negocio y seguridad.

## 👥 Equipo de QA
* Julio Soria
* Luis Viera
* Mateo Martorelli
* Juan Manuel Ibarra

## 🛠️ Tecnologías y Arquitectura
Para este proyecto decidimos utilizar un enfoque escalable y profesional:
* **Framework:** Cypress
* **Patrón de Diseño:** Page Object Model (POM). Separamos los selectores visuales de la lógica de las pruebas para que el código sea fácil de leer y mantener.
* **Custom Commands:** Centralizamos las peticiones a la API (Login, Carrito, Wishlist) para reutilizarlas rápidamente y hacer precondiciones limpias.
* **Variables de Entorno:** Implementamos la captura dinámica del Token de sesión para no depender de credenciales estáticas que expiran.

##  Cómo ejecutar las pruebas
1. Clonar este repositorio.
2. Abrir la terminal en la carpeta del proyecto y descargar las dependencias:
   `npm install`
3. Abrir la interfaz visual de Cypress:
   `npx cypress open`
4. Seleccionar "E2E Testing" y ejecutar los archivos dentro de la carpeta `cypress/e2e/`.

## 🧪 Resumen de Cobertura de Pruebas
Dividimos el trabajo para abarcar distintas áreas críticas del sistema:

### Pruebas de Frontend (End-to-End)
* **Flujo de Compra Completo:** Validamos el agregado de libros al carrito y el completado exitoso del formulario de envío (Checkout).
* **Gestión de Wishlist (Favoritos):** Búsqueda de libros, agregado/eliminado de favoritos y validación de contadores visuales en la barra de navegación.
* **Seguridad y Redirecciones:** Comprobamos que el sistema exija iniciar sesión (redirección obligatoria) a los usuarios invitados que intentan comprar.

### Pruebas de API
* **Integridad de Datos:** Validamos que los endpoints devuelvan esquemas correctos y listas no vacías (Código 200).
* **Manejo de Errores:** Búsqueda de IDs inexistentes (Código 404).
* **Seguridad y Autorización:** Validamos que endpoints protegidos reboten las peticiones si no se envía el Token de autorización (Código 401 Unauthorized).

---

## ⚠️ Reporte de Hallazgos y Bugs Críticos
Durante la fase de automatización y exploración con Postman/Cypress, el equipo detectó los siguientes defectos en el Backend:

### 1. Crash del Servidor por Falta de Validación de Tipos (Endpoint: GetSimilarBooks)
* **Descripción:** Al consultar el endpoint de libros similares (`/api/Book/GetSimilarBooks/{id}`), si se envía texto en el parámetro ID en lugar de un número entero (ejemplo: reemplazar el ID `2` por la palabra `pepito`), el servidor no maneja la excepción.
* **Comportamiento Esperado:** La API debería validar el formato, atrapar el error y devolver un código **400 Bad Request** indicando que el formato es inválido.
* **Comportamiento Actual:** El servidor falla al intentar procesar el dato y devuelve un código **500 Internal Server Error**. Este bug fue documentado y automatizado como caso de prueba negativo para prevenir futuras regresiones.

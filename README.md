### TP Final Frontend 2026
### CHECK LIST 

Despliegue en Vercel (o hosting de elección) funcional // HECHO

Código subido en GitHub // HECHO

Readme.md con una descripción del desafío elegido, librerías usadas y dificultades presentadas a la hora de resolverse (opcional) // HECHO


La página debe ser totalmente responsiva de las medidas 320px a 2000px // HECHO: Se trabajó con diseño Desktop First y se realizaron ajustes para tablet (max-width: 768px) y mobile (max-width: 480px). Se utilizaron unidades relativas, clamp(), flexbox y media queries para adaptar tamaños y mantener la estructura en diferentes resoluciones.


La página debe tener estilos accesibles acordes a los vistos en clase (fondos claros con letras claras se considera inaccesible) // HECHO: Se utilizaron variables CSS para mantener una paleta consistente y se cuidó el contraste entre fondos, textos y elementos, tomando como referencia la paleta de WhatsApp.


La página debe estar desarrollada en React. // HECHO: La aplicación fue desarrollada utilizando React con Vite.


La página debe contar con el uso de estados // HECHO: Se utilizó useState para manejar estados locales como formularios, mensajes y modificaciones de contactos.


Se valora el uso de contextos. // HECHO: Se creó ContactsContext para gestionar contactos y mensajes. El Provider permite compartir y actualizar la información utilizando useContext.


El enrutamiento de la página debe ser desarrollado con react-router // HECHO: Se implementó React Router para manejar las rutas de la aplicación.

// Rutas principales:
// - Welcome
// - Chat
// - Add Contact
// - Contact Profile


Se utilizó React Router (la librería vista durante la cursada) en lugar de react-router-dom.

Debe contar con el uso de al menos 1 formulario. 

// HECHO: Se implementaron formularios para:
// - Crear contactos.
// - Enviar mensajes.
// - Editar información de contactos dentro del perfil.


Deben usarse componentes // HECHO: La aplicación fue organizada utilizando componentes reutilizables dentro de la carpeta components y páginas dentro de la carpeta pages.
También se crearon componentes reutilizables como modales y se utilizaron hooks de React para separar lógica y facilitar la gestión de estados.

Se debe contar con al menos 2 páginas en el flujo de la aplicación y debe usarse al menos en una los parámetros de react-router.

// HECHO: La aplicación cuenta con varias páginas dentro del flujo de navegación:
// - Welcome
// - Chat
// - Add Contact
// - Contact Profile

// Se utilizaron parámetros de ruta mediante:
// /contact/:contactId

// Se utiliza useParams para obtener el ID del contacto.


Se valora la calidad de código siguiendo los principios de la programación vistos en clase (DRY, YAGNI, KISS) // HECHO: Se buscó mantener una estructura organizada separando responsabilidades entre componentes, páginas, contexto y layout.

// Se creó un Layout separado de App.jsx para controlar los elementos que permanecen visibles durante la navegación, como el sidebar y la lista de chats.

// App.jsx queda encargado únicamente de cargar el router y el provider, mientras que Layout.jsx controla la estructura general de la aplicación.


Se pueden usar diseños o páginas ya creadas de guía para poder despreocuparse de los aspectos estéticos de la página desarrollada.,// HECHO: La aplicación toma como referencia visual la interfaz de WhatsApp Web, pero se realizaron modificaciones propias en diseño, estructura y organización.


Cualquier aplicación web que conste con estos requerimientos será aprobada, el tema, estilos y funcionalidades son de libre elección o pueden seguir el tema propuesto a continuación. // HECHO: Se desarrolló una adaptación de WhatsApp Web como proyecto final, implementando las funcionalidades solicitadas.


# Descripción

Aplicación inspirada en WhatsApp Web, desarrollada en React. El objetivo fue reproducir la estructura general de una aplicación de mensajería manteniendo un diseño propio y cumpliendo los requisitos del proyecto final.

La interfaz está desarrollada completamente en inglés para mantener consistencia entre navegación y contenido.

Algunos iconos y botones fueron incorporados únicamente por motivos estéticos para acercarse a la interfaz de referencia, por lo que no todos tienen una funcionalidad asociada. Todas las funcionalidades obligatorias del trabajo práctico sí fueron implementadas.


# Tecnologías utilizadas

React  
React Router  
Context API  
CSS  
Vite  
Vercel  

Se utilizó React Router (la librería vista durante la cursada) en lugar de react-router-dom.


# Funcionalidades

## Contactos

- Ver lista de contactos.
- Crear contacto.
- Editar contacto.
- Eliminar contacto.
- Ver perfil del contacto.


## Mensajes

- Mostrar conversación.
- Enviar mensajes.
- Editar mensajes.
- Eliminar mensajes.
- Vaciar historial del chat.


# Flujo de uso y funcionalidades principales


## Crear contacto

Ruta:
1. Desde la vista Welcome o Chat List.
2. Abrir el menú lateral (botón de tres puntos).
3. Seleccionar "Add Contact".
4. Completar el formulario y guardar.

Implementación:
- Página: `AddContact`
- Formulario para crear contactos.
- Actualización mediante `ContactsContext`.


---

## Ver contactos y conversaciones

Ruta:
1. Desde la lista lateral de chats.
2. Seleccionar un contacto.
3. Se accede a:

`/contact/:contactId`

Implementación:
- Página: `Chat`
- Uso de `useParams` para obtener el ID del contacto.
- Datos obtenidos desde `ContactsContext`.


---

## Editar contacto

Ruta:
1. Entrar a la conversación de un contacto.
2. Abrir el perfil del contacto.
3. Presionar el botón de edición (icono de lápiz).
4. Modificar datos y guardar cambios.

Implementación:
- Página: `ContactProfile`
- Formulario de edición.
- Actualización mediante `setContacts`.


---

## Eliminar contacto / conversación

Ruta:
1. Entrar al perfil del contacto.
2. Seleccionar "Delete Chat".

Resultado:
- Se elimina la conversación completa con ese contacto.
- El contacto deja de aparecer en la lista.


Implementación:
- Gestión realizada desde `ContactsContext`.


---

## Gestionar mensajes


### Enviar mensajes

Ruta:
1. Entrar a una conversación.
2. Escribir un mensaje en el formulario inferior.
3. Enviar.

Implementación:
- Formulario dentro de `Chat`.
- Mensajes guardados temporalmente en el estado de React.


---

### Editar o eliminar mensajes

Ruta:
1. Dentro de una conversación.
2. Hacer hover sobre una burbuja enviada por el usuario.
3. Seleccionar:
   - Editar mensaje.
   - Eliminar mensaje.

Implementación:
- Acciones disponibles únicamente sobre mensajes propios.
- Actualización mediante `setContacts`.


---

### Limpiar historial de mensajes

Ruta:
1. Entrar al perfil del contacto.
2. Seleccionar "Clear Chat".

Resultado:
- Se eliminan todos los mensajes de esa conversación.
- El contacto continúa existiendo.


# Responsive

La aplicación fue desarrollada siguiendo una estrategia Desktop First.

Desktop: diseño principal.

Tablet: pequeños ajustes utilizando principalmente clamp(), ya que el diseño requería pocas modificaciones respecto a escritorio.

Mobile: reorganización completa del layout (por ejemplo, el menú lateral pasa a convertirse en una barra inferior similar a aplicaciones móviles).

Compatible desde 320px hasta 2000px.


# Organización del proyecto

Durante el desarrollo decidí separar la estructura principal en un componente `Layout`.

Tomé esta decisión porque necesitaba una forma de navegar entre pantallas como **Add Contact** y **Contact Profile**, especialmente en la versión mobile, permitiendo que ocuparan toda la pantalla y que al volver se recuperara automáticamente la vista anterior sin duplicar componentes.

De esta forma:

- `App.jsx` se ocupa únicamente del router.
- `Layout.jsx` controla los elementos permanentes de la interfaz (sidebar, lista de chats, etc.).

Los contactos y mensajes se gestionan mediante Context, compartiendo la información entre todos los componentes de la aplicación.


# Notas de implementación

- Los mensajes se almacenan utilizando useState, por lo que el almacenamiento es temporal y se pierde al recargar la página.
- La fotografía de perfil no se modifica realmente; el botón fue implementado únicamente como parte de la interfaz.
- Los mensajes fueron almacenados dentro de cada contacto para simplificar la estructura de datos y mantener toda la información relacionada agrupada.
- Se añadió un archivo `vercel.json` para configurar los rewrites necesarios y permitir que React Router funcione correctamente al acceder directamente a rutas internas después del despliegue en Vercel. (Sino se perdian al recargarse)

Durante el desarrollo dejé algunos comentarios dentro del proyecto:

- Los comentarios marcados como "Para profesora" contienen aclaraciones sobre decisiones de implementación.

El resto son apuntes personales realizados durante el desarrollo que decidí conservar como material de estudio.
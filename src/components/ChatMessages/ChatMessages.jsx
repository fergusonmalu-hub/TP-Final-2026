import "./ChatMessages.css";
import { useState, useEffect, useRef, useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";

function ChatMessages({ messages, contactId }) {

    const { updateMessage, deleteMessage } = useContext(ContactsContext);

    const [openMenu, setOpenMenu] = useState(null);
    const [editingMessage, setEditingMessage] = useState(null);
    const [editText, setEditText] = useState("");

    const menuRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
    function handleClickOutsideEdit(e) {
        if (
            editingMessage &&
            editInputRef.current &&
            !editInputRef.current.contains(e.target)
        ) {
            setEditingMessage(null);
        }
    }
        document.addEventListener("mousedown", handleClickOutsideEdit);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideEdit);
        };
    }, [editingMessage]);


    return (
        <section className="chat-messages">
            {messages.map((message) => (
                <div key={message.id} ref={openMenu === message.id ? menuRef : null}
                    className={`message ${message.sent ? "sent" : "received"}`}
                    style={{ animationDelay: `${message.id * 0.05}s` }}>
                    {editingMessage === message.id ? (
                        <textarea
                            ref={editInputRef}
                            className="message-edit-input"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            autoFocus
                            onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                updateMessage(contactId, {
                                    ...message,
                                    text: editText
                                });
                                setEditingMessage(null);
                            }
                        }}
                        />
                    ) : (
                        <p>{message.text}</p>
                    )}
                    {message.sent && editingMessage !== message.id && (
                        <button className="message-menu-btn" onClick={() => setOpenMenu(openMenu === message.id ? null : message.id)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </button>
                    )}

                    {openMenu === message.id && (
                        <div className="message-dropdown">
                            <button
                                className="message-action-btn"
                                onClick={() => {
                                    setEditingMessage(message.id);
                                    setEditText(message.text);
                                    setOpenMenu(null);
                                }}
                            >
                            Edit
                            </button>
                            <button
                                className="message-action-btn"
                                onClick={() => {
                                    deleteMessage(contactId, message.id);
                                    setOpenMenu(null);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                    <div className="message-meta">
                        <span>{message.time}</span>
                        {message.sent && (
                            <span className="ticks">✓✓</span>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ChatMessages;

/* NOTAS PROFE: 
el useRef es para poder referenciar el div del mensaje que tiene abierto el desplegable y poder cerrar el desplegable cuando hago click afuera. 
Esto lo googlee cuando necesitaba cerrar el desplegable al hacer click afuera. Y lo copie de internet.
Lo mismo que los useEffect, no los vimos mucho en clase entonces los busque en internet a medida que fui necesitando resolver problemas.



NOTAS MIAS:
PASO 7 DEL CONTEXT: Recibo los mensajes del contacto como props y uso map() para recorrerlos y mostrarlos en el chat. reemplace todo lo anterior que era solo par aconstruccion.Ahora cada contacto muestra su propia conversación. 


EDIT DE MENSAJITOS 1 : agrego el boton + agregar un estado para saber cuál mensaje tiene el menú abierto: import { useState } from "react"; + CONST 
openMenu guarda el mensaje que tiene abierto el desplegable.
Cuando clickeo la flechita:si está abierto lo cierro, si no abro ese mensaje.
EDIT DE MENSAJITOS 2 : agregar editar mensaje.
Conecto ChatMessages con el Context:const { updateMessage, deleteMessage } = useContext(ContactsContext);
+
const [editingMessage, setEditingMessage] = useState(null);
const [editText, setEditText] = useState("");
editingMessage guarda qué mensaje estoy editando.
editText guarda el texto nuevo.
Cuando clickeo Edit:
setEditingMessage(message.id);
setEditText(message.text);
setOpenMenu(null);
+
Cambio el mensaje por un input cuando ese mensaje está en edición.
El input tiene value con editText y onChange para ir cambiando el texto.
+
Actualizo el mensaje y setEditingMessage(null);para volver a verlo normal.

EDIT DE MENSAJITOS 3 : agregar borrar mensaje.
Creo la función deleteMessage en el Context.
Uso filter para sacar el mensaje que tiene ese id.
En el botón Delete: deleteMessage(contactId, message.id);setOpenMenu(null);
Borra el mensaje y cierra el menú.
EDIT  4 : cerrar desplegable al hacer click afuera.
Uso useEffect y useRef. const menuRef = useRef(null); +
Con useEffect para que se ejecute cuando se monte el componente y agrego un event listener para escuchar clicks en el documento.
Si clickeo afuera del menú: setOpenMenu(null);

*/
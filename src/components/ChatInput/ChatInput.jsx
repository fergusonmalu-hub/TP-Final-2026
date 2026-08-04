import "./ChatInput.css";
import { useState, useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";

function ChatInput({ contact }) {
    
    const [message, setMessage] = useState("");
    const { setContacts } = useContext(ContactsContext);

    const handleSend = () => {
        if (!message.trim()) return;

        const newMessage = {
            id: contact.messages.length + 1,
            text: message,
            time: "10:00",
            sent: true
        };
        setContacts((prevContacts) =>
            prevContacts.map((item) =>
                item.id === contact.id
                    ? {
                        ...item,
                        messages: [...item.messages, newMessage]
                    }
                    : item
            )
        );
        setMessage("");
    };
/* setMessage("") limpia el textarea después de enviar.
sent sirve para saber si el mensaje lo envié yo o lo recibí. si lo envié yo, sent es true. */
    return (
        <footer className="chat-input">
            <div className="chat-input-actions">
                    <button className="icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <button className="icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </button>
            </div>
            <textarea
                placeholder="Type a message"
                rows="1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
            />
            <button className="send-btn" onClick={handleSend}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3 3l18 9-18 9 3-9h7.5" />
                </svg>
            </button>
        </footer>
    );
}

export default ChatInput;

/* NOTAS PROFE: 
este codigo lo busque con la IA para corregir el error del text area que habia mencionado en el foro de consultas. 
e.target.style.height = "auto";
e.target.style.height = `${e.target.scrollHeight}px`;

formulairo 1: para poder enviar mensajes, agrego el {usestate} + const [message, setMessage] = useState(""); +
2: agrego el value={message} + onChange={(e) => setMessage(e.target.value)} para que se guarde el mensaje en el estado y se pueda enviar.
3- agrego trim para que no se envie un mensaje vacio. if (!message.trim()) return;
4 en el chat jsx
5 -  agrego contact en el aprametro de la funcion de aqui en chatinput.jsx para poder usarlo en el handleSend y enviar el mensaje al contacto correcto. 
//Hasta aca aun no puede modificar los contactos.
 traemos el useContext y el ContactsContext
 const { setContacts } = useContext(ContactsContext); y paso a modificar el handleSend que es donde se envia el mensaje.


 onkeydow es para enviar con enter, este codigo tambien lo googlee para saber como se hacia esta accion
*/
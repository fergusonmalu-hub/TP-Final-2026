import "./Chat.css";
import ChatNavbar from "../../components/ChatNavbar/ChatNavbar";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatInput from "../../components/ChatInput/ChatInput";
import { useParams } from "react-router";
import { useContext, useState } from "react";
import { ContactsContext } from "../../context/ContactsContext";

function Chat() {
    const { contactId } = useParams();
    const { contacts } = useContext(ContactsContext);
    const [searchMessage, setSearchMessage] = useState("");

    const contact = contacts.find(
        contact => contact.id === Number(contactId)
    );

 if (!contact) {
    return <p>Contact not found</p>;
}

    const filteredMessages = contact.messages.filter(message =>
        message.text
            .toLowerCase()
            .includes(searchMessage.toLowerCase())
    );

    return (
        <main className="chat">
            <ChatNavbar 
                contact={contact}
                searchMessage={searchMessage}
                setSearchMessage={setSearchMessage}
            />
            <ChatMessages 
                messages={filteredMessages}
                contactId={contact.id}
            />
            <ChatInput contact={contact} />
        </main>
    );
}
export default Chat;

/* 
NOTAS PROFE: Lo de lower case es lo que explique en el archivo de ChatMessages, para que no importe si el usuario escribe en mayúscula o minúscula, y pueda encontrar el mensaje que busca.



notas mias: 
PASO 5 DEL CONTEXT: Uso useParams para leer el id del contacto que viene en la URL y saber qué chat tengo que mostrar.
const { contactId } = useParams(); lee el número que viene en la URL y lo guarda en una variable llamada contactId.
/* PASO 6: Busco el contacto con find() usando el id de la URL. Después envío ese contacto como prop a los componentes que necesitan sus datos. ChatMessages recibe los mensajes y ChatInput recibe el contacto para poder agregar nuevos mensajes.

formulario 4: <ChatInput contact={contact} /> */


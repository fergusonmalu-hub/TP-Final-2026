import { createContext, useState } from "react"; /* Desestructuro el useState para obtener por separado el valor del estado y la función que lo modifica. */
import userChat1 from "../assets/images/user-chat-1.png";
import userChat2 from "../assets/images/user-chat-2.png";
import userChat3 from "../assets/images/user-chat-3.png";

export const ContactsContext = createContext(); 

export function ContactsProvider({ children }) {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Sofía",
            image: userChat1,
            phone: "+54 9 11 1234 5678",
            email: "sofia@example.com",
            messages: [
                {
                    id: 1,
                    text: "Hey! Are we still meeting tomorrow?",
                    time: "09:30",
                    sent: false
                },
                {
                    id: 2,
                    text: "Yes! I will be there around 6 pm.",
                    time: "09:32",
                    sent: true
                },
                {
                    id: 3,
                    text: "Perfect, see you then!",
                    time: "09:33",
                    sent: false
                }
            ]
        },
        {
            id: 2,
            name: "Martina",
            image: userChat2,
            phone: "+54 9 11 9876 5432",
            email: "martina@example.com",
            messages: [
                {
                    id: 1,
                    text: "I just finished the project!",
                    time: "14:10",
                    sent: false
                },
                {
                    id: 2,
                    text: "That's great! Congratulations!",
                    time: "14:12",
                    sent: true
                },
                {
                    id: 3,
                    text: "Thank you! It took me a lot of time.",
                    time: "14:13",
                    sent: false
                }
            ]
        },
        {
            id: 3,
            name: "Tomás",
            image: userChat3,
            phone: "+54 9 11 4567 8901",
            email: "tomas@example.com",
            messages: [
                {
                    id: 1,
                    text: "Did you watch the game yesterday?",
                    time: "20:15",
                    sent: false
                },
                {
                    id: 2,
                    text: "Yes! It was a great match.",
                    time: "20:18",
                    sent: true
                },
                {
                    id: 3,
                    text: "I knew you would like it haha.",
                    time: "20:19",
                    sent: false
                }
            ]
        }
    ]);

    function addContact(newContact) {
        setContacts([...contacts, newContact]);
    }
    function updateContact(updatedContact) {
        const updatedContacts = contacts.map((contact) => {
            if (contact.id === updatedContact.id) {
                return {
                    ...contact,
                    ...updatedContact
                };
           }
            return contact;
        });
        setContacts(updatedContacts);
    }
    function updateMessage(contactId, updatedMessage) {
    setContacts(
        contacts.map((contact) => {
            if (contact.id === contactId) {
                return {
                    ...contact,
                    messages: contact.messages.map((message) => {
                        if (message.id === updatedMessage.id) {
                            return updatedMessage;
                        }
                        return message;
                    })
                };
            }
            return contact;
        })
    );
    }

    function deleteMessage(contactId, messageId) {
        setContacts(
            contacts.map((contact) => {
                if (contact.id === contactId) {
                    return {
                        ...contact,
                        messages: contact.messages.filter(
                            (message) => message.id !== messageId
                        )
                    };
                }
                return contact;
            })
        );
    }

    function clearChat(contactId) {
        setContacts(
            contacts.map((contact) => {
                if (contact.id === contactId) {
                    return {
                        ...contact,
                        messages: []
                    };
                }
                return contact;
            })
        );
        }

    function deleteChat(contactId) {
        setContacts(
            contacts.filter(
                (contact) => contact.id !== contactId
            )
        );
    }
    
    return (
        <ContactsContext.Provider value={{ contacts, setContacts, addContact, updateContact, updateMessage, deleteMessage, clearChat, deleteChat }}>
            {children}
        </ContactsContext.Provider>
    );
}

/* notas para mi : PASO 1 DEL CONTEXT: Provider es un componente para envolver otros componentes y proporcionarles acceso al Contexto. Aca el Provider se llama ContactsContext.Provider y lo uso para envolver los componentes que necesitan acceder a los datos de contactos.
children representa los componentes que están dentro del Provider.Es el contenido que envolvemos con el Provider cuando lo llamamos desde App.
ContactsProvider es el contenedor. y dentro encuentro: 
children → los componentes de la app.
value → los datos que esos componentes pueden usar (contacts y setContacts).
///
contacts → la lista de usuarios y sus mensajes.
setContacts → la función para modificar esa lista.
{children} → todo lo que envuelvas con <ContactsProvider> en App.jsx.
----
1 DE EDICION DE CONTACTOS: crear su funcion addContact para agregar.
contacts = contactos actuales.
...contacts = copia todos los contactos existentes.
newContact = agrega el nuevo al final.
setContacts actualiza el estado. + agregarlo al Provider
-----
2 EDIT CONTACT: crear su funcion updateContact para actualizar.
*/
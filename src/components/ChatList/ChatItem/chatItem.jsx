import "./chatItem.css";
import { Link } from "react-router";

function ChatItem({ contact, index }) {

    const lastMessage = contact.messages[contact.messages.length - 1] || {
    text: "No messages yet",
    time: ""
};

    return (
        <Link to={`/contact/${contact.id}`} className="chat-item-link">
            <article className="chat-item" style={{ animationDelay: `${index * 0.05}s` }}>
                <img 
                    className="chat-avatar" 
                    src={contact.image} 
                    alt="Profile picture" 
                />
                <div className="chat-info">
                    <div className="chat-header">
                        <h3>{contact.name}</h3>
                        <span>{lastMessage.time}</span>
                    </div>
                    <p>{lastMessage.text}</p>
                </div>
            </article>
        </Link>
    );
}

export default ChatItem;

/* 
PARA PROFE:  La animacion tambien la busque en internet y la adapte a mi proyecto.


PASO 3 DEL CONTEXT: Le paso cada contacto a ChatItem y uso sus datos para mostrar la info del chat. 
PASO 4 , VUELVO TODO UN LINK Y DELCARO EN CSS EL ESTILO PARA QUE NO AFECTE

el error de new contact era pq no habia mensajes:Entonces lastMessage quedaba vacío (undefined) y al intentar acceder a lastMessage.text y lastMessage.time daba error. >  || {
    text: "No messages yet",
    time: ""
*/
import "./chatList.css";
import SearchBar from "./SearchBar/searchBar";
import ChatItem from "./ChatItem/chatItem";
import "../../styles/buttons.css";
import chatsIcon from "../../assets/icons/chats.svg";
import menuIcon from "../../assets/icons/menu.svg";
import { useState } from "react";
import { Link } from "react-router";
import { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";

function ChatList() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const { contacts } = useContext(ContactsContext);
    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
);
    return (
        <section className="chat-list">
            <header className="chat-list-header">
                {menuOpen && (
            <div className="menu-dropdown">
                <Link to="/contact/new" className="menu-option" onClick={() => setMenuOpen(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <span>Add contact</span>
                </Link>
                <button className="menu-option" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                    <span>Log out</span>
                </button>
            </div>
)}
                <Link to="/" className="chat-list-title">
                <h2>WhatsApp</h2></Link>
                <div className="chat-list-actions">
                    <button className="icon-btn">
                        <img src={chatsIcon} alt="Chats" />
                    </button>
                    <button className="icon-btn menu-btn" onClick={()=> setMenuOpen(!menuOpen)}>
                        <img src={menuIcon} alt="Menu" />
                    </button>
                </div>
            </header>
            <SearchBar search={search} setSearch={setSearch}/>
            <div className="chat-items">
            {filteredContacts.map((contact, index) => (
            <ChatItem 
            key={contact.id}
            contact={contact}
            index={index}
            />
    ))}
            </div>
        </section>
    );
}

export default ChatList;

/*COMENTARIOS PROFE: 
Para este tipo de nomenclatura use IA para que me guie, porque me perdia y necesitaba no confundirme, y fue la IA que me recomendo lo de diferenciar mayusculas o minusculas, no era un detalle que hubiera pensado por mi cuenta: contact.name.toLowerCase().includes(search.toLowerCase()) 



PARA MI: 
lo de los chats, primero en "chat-items">{contacts.map(contact => (
            <ChatItem 
            key={contact.id}
            contact={contact}
            /> ya no crea chats manualmente, los genera a partir del Context.
            entocnes primero hago esto y luego voy a modificar chatitem.jsx
*/
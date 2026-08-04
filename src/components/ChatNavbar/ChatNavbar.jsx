import "./ChatNavbar.css";
import { useNavigate } from "react-router";
import { useState } from "react";


function ChatNavbar({ contact,  searchMessage, setSearchMessage }) {
    const navigate = useNavigate();
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="chat-navbar">
            <button className="mobile-back-btn" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </button>
            <div  className="chat-contact" onClick={() => navigate(`/contact/${contact.id}/profile`)}>
                <img className="chat-contact-avatar" src={contact.image} alt="Contact profile"/>
                <span className="chat-contact-name">
                    {contact.name}
                </span>
            </div>
            <div className="chat-navbar-actions">
                {searchOpen && (
                    <div className="chat-search">
                        <input type="text" placeholder="Search messages" value={searchMessage}  onChange={(e) => setSearchMessage(e.target.value)}
                        />
                        <button className="icon-btn" onClick={() => setSearchOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>
                    </div>
                )}
                <button className="icon-btn" onClick={() => setSearchOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </button>
                <button className="icon-btn" onClick={() => navigate(`/contact/${contact.id}/profile`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default ChatNavbar;


/*NOTAS PROFE: 
Hay dos estados por que son dos busquedas distintas*/
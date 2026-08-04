import "./ContactProfile.css";
import { useNavigate, useParams } from "react-router";
import { useContext, useState} from "react";
import { ContactsContext } from "../../context/ContactsContext";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

function ContactProfile() {
    const navigate = useNavigate();
    const { contactId } = useParams();
    const { contacts, updateContact, clearChat, deleteChat } = useContext(ContactsContext);
    const [isEditing, setIsEditing] = useState(false);
    const [showBlockModal, setShowBlockModal] = useState(false);
    const [showClearModal, setShowClearModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [editData, setEditData] = useState({
        name: "",
        phone: "",
        email: ""
    });

   const contact = contacts.find(
    contact => contact.id === Number(contactId)
    );
    if (!contact) {
        return <p>Contact not found</p>;
    }

    return (
        <main className="contact-profile">
            <header className="contact-profile-header">
                <button className="profile-icon-btn" onClick={() => navigate(-1)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
                <h1>Contact info</h1>
                <button className="profile-icon-btn" onClick={() => {
                    setEditData({
                        name: contact.name,
                        phone: contact.phone,
                        email: contact.email
                    });
                    setIsEditing(true);
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
                </button>
            </header>
            <section className="contact-profile-content">
                <img className="contact-profile-image" src={contact.image} alt="Contact profile"/>
                {isEditing ? (
                    <div className="contact-edit-form">
                        <input type="text" value={editData.name} 
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    name: e.target.value
                                })
                            }
                        />
                        <input type="tel" value={editData.phone}    
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    phone: e.target.value
                                })
                            }
                        />
                        <input type="email" value={editData.email} 
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    email: e.target.value
                                })
                            }
                        />
                        <div className="edit-buttons">
                            <button 
                                className="save-changes-btn" 
                                type="button" 
                                onClick={() => {
                                    updateContact({
                                        id: contact.id,
                                        ...editData
                                    });
                                    setIsEditing(false);
                                }}
                            >
                                Save changes
                            </button>
                            <button 
                                className="icon-btn" 
                                type="button" 
                                onClick={() => {
                                    setEditData({
                                        name: contact.name,
                                        phone: contact.phone,
                                        email: contact.email
                                    });
                                    setIsEditing(false);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="contact-details">
                        <h2>{contact.name}</h2>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                )}
                    <div className="profile-options">
                        <button className="profile-option">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                            <span>Mute notifications</span>
                        </button>
                        <button className="profile-option">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <span>Search messages</span>
                        </button>
                        <button className="profile-option">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <span>Add to favorites</span>
                        </button>
                        <button className="profile-option">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <span>Chat privacy</span>
                        </button>
                    </div>
                    <div className="profile-danger-options ">
                        <button className="profile-option danger" onClick={() => setShowClearModal(true)} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>Clear chat</span>
                        </button>
                        <button className="profile-option danger" onClick={() => setShowDeleteModal(true)} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            <span>Delete chat</span>
                        </button>
                        <button className="profile-option danger" onClick={() => setShowBlockModal(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                <span>Block {contact.name}</span>
                            </button>
                        </div>
            </section>
            {showBlockModal && (
            <ConfirmModal
                title={`Block ${contact.name}`}
                message={`Are you sure you want to block ${contact.name}?`}
                onCancel={() => setShowBlockModal(false)}
                onConfirm={() => {setShowBlockModal(false);
                }}
            />
            )}
            {showClearModal && (
            <ConfirmModal
                title="Clear chat"
                message={`Are you sure you want to clear the chat with ${contact.name}?`}
                onCancel={() => setShowClearModal(false)}
                onConfirm={() => {
                    clearChat(contact.id);
                    setShowClearModal(false);
                }}
            />
            )}
            {showDeleteModal && (
            <ConfirmModal
                title="Delete chat"
                message={`Are you sure you want to delete the chat with ${contact.name}?`}
                onCancel={() => setShowDeleteModal(false)}
                onConfirm={() => {
                    deleteChat(contact.id);
                    setShowDeleteModal(false);
                    navigate("/");
                }}
            />
            )}
        </main>
    );
    
}
export default ContactProfile;


/* PASO 10 DEL CONTEXT: Conecto el perfil con el contacto .
Importé useParams para sacar el id que viene en la URL.
Importé useContext y ContactsContext para poder acceder a la lista de contactos.
Cree la constante contact usando find() para buscar dentro de contacts el contacto que tiene el mismo id que recibí de la URL."recorre la lista de contactos y devuélveme el que coincida con este id".
Después uso contact.image y contact.name para mostrar la información de esa persona.


1 EDIT PERFIL: useState + creo la const const [isEditing, setIsEditing] = useState(false); + onClick={() => setIsEditing(true)}
y ahi en isediting false me quedan los datos normales,y en true me aparece el formulario para editar. 
Const editData , y recien ahora cambio el onClick +  setIsEditing(true); y recien aca hago lo de los imputs y el onChange para que se pueda editar. {isEditing ? ( <input...onChange={(e) =>       setEditData({... <h2>{contact.name}</h2
Luego el boton de save changes requiere otra funcion : paso 2 en contactscontext 
3 actualizar const en la funcion useContext para incluir updateContact 


1 Clear chat: crear en context el context, trarlo aqui a la funcion de clearChat , luego agregar el botoncito con la pregunta de seguridad. IDEM en el DELETE chat*/
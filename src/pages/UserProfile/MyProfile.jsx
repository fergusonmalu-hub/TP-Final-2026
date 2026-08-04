import "./MyProfile.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import userImage from "../../assets/images/user.png";

function MyProfile() {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const [editData, setEditData] = useState({
        name: "My name",
        phone: "+34 600 000 000",
        email: "email@example.com"
    });

    return (
        <main className="my-profile">
            <header className="my-profile-header">
                <button className="profile-icon-btn" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
                <h1>Profile</h1>
                <button className={`profile-icon-btn ${isEditing ? "active" : ""}`} onClick={() => setIsEditing(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                    </svg>
                </button>
            </header>
            <section className="my-profile-content">
                <img className="my-profile-image" src={userImage} alt="My profile"/>
                {isEditing ? (
                    <div className="my-profile-details">
                        <input type="text" value={editData.name}  onChange={(e) => setEditData({...editData, name: e.target.value})}/>
                        <input type="tel" value={editData.phone} onChange={(e) => setEditData({...editData, phone: e.target.value})}/>
                        <input type="email" value={editData.email} onChange={(e) => setEditData({...editData, email: e.target.value})} />
                        <div className="edit-buttons">
                            <button 
                                className="save-changes-btn" 
                                type="button"
                                onClick={() => setIsEditing(false)}
                            >
                                Save changes
                            </button>

                            <button 
                                className="icon-btn cancel-profile-btn"
                                type="button"
                                onClick={() => setIsEditing(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="my-profile-details">
                        <h2>{editData.name}</h2>
                        <p>{editData.phone}</p>
                        <p>{editData.email}</p>
                    </div>
                )}
                <div className="my-profile-options">
                    <button className="profile-option" onClick={() => setIsEditing(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Z" />
                        </svg>
                        <span>Edit profile</span>
                    </button>
                    <button className="profile-option">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <span>Notifications</span>
                    </button>
                    <button className="profile-option">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>Settings</span>
                    </button>
                </div>
            </section>
        </main>
    );
}

export default MyProfile;

/*NOTAS PROFE: 
Necesitaba un estado activo del boton, por que queria que los colores actuaran acorde, y de ahi sale el {`profile-icon-btn ${isEditing ? "active" : ""}`} - utilice un ternario para que cuando isEditing sea true, se agregue la clase active y cambie el color del boton. Esta nomenclatura la investigue aparte, qunque hiberamos visto ternarios, necesite buscar como hacer que se agregue una clase a un boton cuando se cumple una condicion.
*/
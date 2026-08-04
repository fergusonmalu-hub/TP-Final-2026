import "./AddContact.css";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import newUser from "../../assets/images/new-user.png";

function AddContact() {
    const { addContact } = useContext(ContactsContext);
    const navigate = useNavigate();

    const [image, setImage] = useState(newUser);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }

    function validateForm() {
        if (
            formData.name.trim() === "" ||
            formData.phone.trim() === "" ||
            formData.email.trim() === ""
        ) {
            return false;
        }
        if (!formData.email.includes("@")) {
            return false;
        }

        const phoneIsValid = formData.phone
            .split("")
            .every(number => !isNaN(number));
        if (!phoneIsValid) {
            return false;
        }
        return true;
    }

    return (
        <main className="add-contact">
            <header className="add-contact-header">
                <button className="profile-icon-btn" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
                <h2>New contact</h2>
            </header>

            <section className="add-contact-content">
                <form className="contact-form">
                    <div className="contact-photo">
                        <img src={image} alt="Profile" />
                        <label className="add-photo-btn">
                            Add photo
                            <input type="file" accept="image/*" onChange={handleImageChange}/>
                        </label>
                    </div>
                    <label>
                        Name
                        <input type="text" name="name" placeholder="Contact name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone
                        <input type="tel" name="phone" placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        className="save-contact-btn"
                        type="button"
                        onClick={() => {
                            if (!validateForm()) {
                                alert("Please complete all fields correctly");
                                return;
                            }
                            addContact({
                                id: Date.now(),
                                ...formData,
                                image: image,
                                messages: []
                            });
                            navigate(-1);
                        }}
                    >
                    Save contact
                    </button>
                </form>
            </section>
        </main>
    );
}

export default AddContact;
/*
NOTAS PROFE: Como tenía el problema de que Vercel no mostraba correctamente algunas imágenes, utilicé la IA para buscar posibles soluciones y de ahí surge LA  function handleImageChange(e) con el const imageUrl = URL.createObjectURL(file);
Lo que entendi es que la función permite mostrar una imagen elegida por el usuario antes de guardarla. Antes el navegador no encontraba correctamente algunas imágenes en Vercel, y con URL.createObjectURL() creo una dirección temporal para poder previsualizar el archivo seleccionado.


Mis notas:
cuando se hace click en el boton, se llama a la funcion addContact del contexto para agregar un nuevo contacto con los datos del formulario y luego se navega hacia atrás en el historial de navegación.
PASO 2 DE AGREGAR USUARIOS: 
uhago los importes, y lueogo const [formData, setFormData] = useState({ , Creo un estado local para guardar temporalmente los datos que el usuario escribe en el formulario. > creo la funcion function handleChange, que actualiza el estado cuando cambia un input.> IMPORTANTE CONECTAR  EL IMPUT AL ESTADO onChange={handleChange} > boton save*/
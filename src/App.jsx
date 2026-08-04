import { BrowserRouter } from "react-router";
import Layout from "./Layout";
import "./index.css";
import { ContactsProvider } from "./context/ContactsContext";

function App() {
    return (
        <BrowserRouter>
            <ContactsProvider>
                <Layout />
            </ContactsProvider>
        </BrowserRouter>
    );
}

export default App;

/* notas para mi : PASO 1 DEL CONTEXT: Crear el Provider y unirlo a la App.Envuelvo Layout con ContactsProvider para que todos sus componentes tengan acceso al Context.*/
import { useLocation } from "react-router";
import { Routes, Route } from "react-router";
import Welcome from "./pages/Welcome/Welcome";
import Chat from "./pages/Chat/Chat";
import AddContact from "./pages/AddContact/AddContact";
import ContactProfile from "./pages/ContactProfile/ContactProfile";
import SidebarHeader from "./components/SidebarHeader/sidebarHeader";
import ChatList from "./components/ChatList/chatList";
import MyProfile from "./pages/UserProfile/MyProfile";


function Layout() {

    const location = useLocation();

      const isMobilePage =
        location.pathname !== "/";

    return (
        <div className={`app-layout ${isMobilePage ? "hide-sidebar-mobile" : ""}`}>
            <SidebarHeader />
            <ChatList />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/contact/:contactId" element={<Chat />} />
                <Route path="/contact/new" element={<AddContact />} />
                <Route path="/contact/:contactId/profile" element={<ContactProfile />} />
                <Route path="/profile" element={<MyProfile />} />
            </Routes>
        </div>
    );
}

export default Layout;

/*
location.pathname !== "/"; hace que se considere una página móvil cualquier ruta que no sea la página de bienvenida. */
import "./Welcome.css";
import favicon from "../../assets/icons/favicon.svg";

function Welcome() {
    return (
        <main className="welcome">
            <div className="welcome-content">
                <img className="welcome-logo" src={favicon} alt="App logo"/>
                <h1>Welcome to my app!</h1>
            </div>
            <p className="welcome-security">Messages are encrypted and secure</p>
        </main>
    );
}

export default Welcome;
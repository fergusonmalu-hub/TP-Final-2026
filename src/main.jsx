import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css" 

// Llama al div y renderiza el app dentro de el 
createRoot(
  document.getElementById("root")
).render(<App/>)
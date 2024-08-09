import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/main.scss'

import MainContainer from "./myComps/mainContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <MainContainer>
        <App />
      </MainContainer>
    </>
  </StrictMode>
);

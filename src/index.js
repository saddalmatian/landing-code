import App from './Components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
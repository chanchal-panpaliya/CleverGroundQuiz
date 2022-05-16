import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import QuizState from './web-app/Context/QuizState';
import { ThemeProvider } from './web-app/Context/theme-context';
import {AuthProvider} from "./web-app/Context/login/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
      <AuthProvider> 
        <ThemeProvider>
          <QuizState> 
            <App />
          </QuizState>
        </ThemeProvider>
      </AuthProvider>
    </React.StrictMode>
  ,
  document.getElementById("root")
);

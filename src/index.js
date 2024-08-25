import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import MainLayout from './layouts/MainLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <MainLayout />
        </ThemeProvider>
    </BrowserRouter>

);

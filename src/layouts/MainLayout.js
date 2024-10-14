import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <main className="main-layout-content">
                {children}
            </main>
            <footer className="main-layout-footer">
                <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default MainLayout;

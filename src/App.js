import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <MainLayout>
                            <LoginPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <MainLayout>
                            <RegisterPage />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}
export default App;

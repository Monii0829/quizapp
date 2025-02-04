// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { Home } from './components/Home';
import { Javaquiz } from './quiz/Javaquiz';
import CodeInputOutput from './CodeInputOutput';
import Footer from './components/Footer';
import { Pythonquiz } from './quiz/Pythonquiz';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                <Routes>
                    <Route path="/signin" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<Home/>}/>
                    <Route path='/java' element={<Javaquiz/>}/>
                    <Route path='/python' element={<Pythonquiz/>}/>
                    <Route path='/code' element={<CodeInputOutput/>}/>
                </Routes>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;

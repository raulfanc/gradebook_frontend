import React from 'react';
import './App.css';
import Login from './components/Login';
import Marks from './components/Marks';
import UploadStudents from './components/UploadStudents';
import Menu from "./components/Menu";


function App() {
    return (
        <div className="App">
            <Menu/>
            <Login/>
            <Marks/>
            <UploadStudents/>
        </div>
    );
}

export default App;

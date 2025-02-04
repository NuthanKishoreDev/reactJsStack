import logo from './logo.svg';
import './App.css';
import React from "react";
import Counter from './Counter';  

function App() {
  return (
    <div className="App" id='MainDiv'>
      <header style={{display:'flex',paddingTop:'20px'}}>
        <img src={logo} id="logoId" alt="React Logo"/>
        <span>ReactFacts</span>
      </header>
      <h2 className="text-2xl font-bold mb-4">Fun facts about React</h2>
      <p className="text-gray-300 mb-4">
        React is a popular JavaScript library for building user interfaces. Here are some fun facts about React:</p>
        {/* <div className="bg-black absolute inset-0 bg-center bg-cover animate-spin-slow" background-image="url({logo})">
        <img src={logo} id="logobg" alt="React Logo" sizes='60px'/>
        </div> */}
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <div>
        <Counter />
      </div>

      <footer>
        <p>©2025 Nuthan Kishore development. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

export default App;

import React, { useEffect } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  useEffect(() => {
    try {
      JSON.parse('{ invalid: json }');
    } catch (error) {
      const customMessage = 'JSON Parsing Failed: ' + error.message;
      console.error(customMessage);
    }
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>MyApp</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className="content">
        <h1>Main App Component</h1>
        <p>Welcome to my React application.</p>

        <MyComponent />
      </main>
    </div>
  );
}

export default App;
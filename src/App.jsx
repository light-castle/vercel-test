import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome() {
  return <h2>Hi! Welcome to my app</h2>;
}

function App() {
  return (
    <div>
      <Welcome />
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;

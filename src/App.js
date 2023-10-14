import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  return (
    <div className="App">
      <h1>Responsive paragraph word counter</h1>
      <textarea
        rows="5"
        
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
